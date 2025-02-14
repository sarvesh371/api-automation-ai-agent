import express from "express";
import { PORT } from "./config/env.js";
import testRoutes from "./routes/testRoutes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());
app.use(logger);
app.use("/api", testRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
