import { buildRoutePath } from "./utils/build-route-path.js";

import { createUserController } from "./controllers/create-user-controller.js";

export const routes = [
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => createUserController(req, res),
  },
];
