import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export enum Position {
  UI_ENGINEER = "UI Engineer",
  BACKEND_ENGINEER = "Backend Engineer",
  DEVOPS_ENGINEER = "DevOps Engineer",
  DATA_SCIENTIST = "Data Scientist",
}

@Entity()
export class Application {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  company!: string;

  @Column({ type: "enum", enum: Position, default: null })
  position?: Position | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
