import express, { json } from "express";
import morgan from "morgan";

// Importing routes
import prjectRoutes from "./routes/projects";

const app = express();

// middlewares
app.use(json());

export default app;
