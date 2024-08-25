import { database } from "../database/database.js";

import { ContentNotFound } from "../errors/content-not-found.js";

export async function deleteUserUseCase(id) {
  const userAlreadyExist = database.select("users", { id });

  if (userAlreadyExist.length <= 0) {
    return new ContentNotFound("O Usuário não foi encontrado.");
  }

  database.delete("users", id);

  return { message: "Usuário deletado com sucesso." };
}
