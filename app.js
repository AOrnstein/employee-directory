import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";
import express from "express";

const app = express();

export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = getEmployee(+id);
  if (employee === undefined) {
    return res.status(404).send(`No employee with id ${id}`);
  }
  res.send(employee);
});
