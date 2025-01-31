import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tracker-service",
      version: "1.0.0",
    },
  },
  apis: ["./src/controllers/*.ts"],
};

const specs = swaggerJSDoc(options);

export default specs;
