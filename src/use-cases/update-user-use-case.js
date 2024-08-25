import { database } from "../database/database.js";

import { Encrypt } from "../utils/encrypt.js";

import { ContentNotFound } from "../errors/content-not-found.js";

export async function updateUseUseCase({ id, ...data }) {
  const userAlreadyExist = database.select("users", { id });

  if (userAlreadyExist.length <= 0) {
    return new ContentNotFound("O usuário não foi encontrado");
  }

  const { password } = data;

  if (!password) {
    const { password, ...rest } = database.update("users", id, data);

    return rest;
  }

  const hashedPassword = await Encrypt.hash(password);

  const updateUser = {
    ...data,
    password: hashedPassword,
  };

  const { password: passHashed, ...rest } = database.update(
    "users",
    id,
    updateUser
  );

  return rest;
}
