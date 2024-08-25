import { buildRoutePath } from "./utils/build-route-path.js";

import { createUserController } from "./controllers/create-user-controller.js";
import { readUsersController } from "./controllers/read-users-controller.js";

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => createUserController(req, res),
  },
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => readUsersController(req, res),
  },
];
