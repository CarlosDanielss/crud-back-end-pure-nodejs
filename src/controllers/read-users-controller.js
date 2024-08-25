import { ContentNotFound } from "../errors/content-not-found.js";

import { readUserUseCase } from "../use-cases/read-user-use-case.js";

export async function readUsersController(req, res) {
  try {
    const query = req.query;

    const fields = ["id", "name", "email"];

    const queryKeys = Object.keys(query);

    const invalidFields = queryKeys.filter((key) => !fields.includes(key));

    if (invalidFields.length > 0) {
      return res.writeHead(400).end("Campos inválidos");
    }

    const dataToForward = queryKeys.length === 0 ? null : query;

    const result = await readUserUseCase(dataToForward);

    if (result instanceof ContentNotFound) {
      return res.writeHead(result.statusCode).end(result.message);
    }

    return res.writeHead(200).message(result);
  } catch (error) {
    console.error(error);
    return res.writeHead(500).end("Erro interno do servidor.");
  }
}
