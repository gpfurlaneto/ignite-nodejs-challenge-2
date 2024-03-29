import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { usersRoutes } from './routes/users.routes';
import swaggerJSON from './swagger.json';

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON))

export { app };
