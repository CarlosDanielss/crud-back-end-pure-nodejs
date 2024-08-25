import { ContentNotFound } from "../errors/content-not-found.js";

import { database } from "../database/database.js";

export function readUserUseCase(query) {
  const usersSearch = database.select("users", query);

  if (usersSearch.length === 0) {
    return new ContentNotFound("Nenhum usuário foi encontrado.");
  }

  const removePasswordField = usersSearch.map((user) => {
    const { password, ...data } = user;

    return data;
  });

  return removePasswordField;
}
