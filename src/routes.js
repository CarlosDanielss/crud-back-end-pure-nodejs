import { buildRoutePath } from "./utils/build-route-path.js";

import { createUserController } from "./controllers/create-user-controller.js";
import { updateUserController } from "./controllers/update-user-controller.js";
import { readUsersController } from "./controllers/read-users-controller.js";
import { deleteUserController } from "./controllers/delete-user-controller.js";

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => createUserController(req, res),
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => updateUserController(req, res),
  },
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => readUsersController(req, res),
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => deleteUserController(req, res),
  },
];
