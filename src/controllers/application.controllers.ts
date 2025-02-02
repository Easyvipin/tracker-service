import { Request, Response } from "express";
import AppDataSource from "src/db";
import { Application } from "src/entity/Application";

const applications = [
  {
    id: 1,
    name: "google",
  },
  {
    id: 2,
    name: "ibm",
  },
  {
    id: 3,
    name: "microsoft",
  },
];

export const getApplication = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const application = applications.find(
      (eachApplication) => eachApplication.id === id
    );
    if (application) {
      res.status(200).json(application);
    } else {
      res.status(404).json({ message: "No application found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addApplication = async (req: Request, res: Response) => {
  try {
    const application = new Application();
    const { company, position } = req.body;
    application.company = company;
    application.position = position;
    const newApplication = AppDataSource.getRepository(Application);
    const resp = await newApplication.save(application);
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
