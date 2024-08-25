import { ContentNotFound } from "../errors/content-not-found.js";
import { deleteUserUseCase } from "../use-cases/delete-user-use-case.js";

export async function deleteUserController(req, res) {
  try {
    const { id } = req.params;

    const result = await deleteUserUseCase(id);

    if (result instanceof ContentNotFound) {
      return res.writeHead(result.statusCode).end(result.message);
    }

    return res.writeHead(200).message(result.message);
  } catch (error) {
    console.error(error);
    return res.writeHeade(500).end("Erro interno do servidor.");
  }
}
