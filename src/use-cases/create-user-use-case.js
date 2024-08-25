import { randomUUID } from "node:crypto";

import { database } from "../database/database.js";
import { AlreadyExist } from "../errors/already-exist-error.js";
import { Encrypt } from "../utils/encrypt.js";

export async function createUserUseCase({ name, email, password }) {
  const userAlreadyExist = database.select("users", { email });

  if (userAlreadyExist.length > 0) {
    return new AlreadyExist("O usuário já existe.");
  }

  const hashedPassword = await Encrypt.hash(password);

  const user = {
    id: randomUUID(),
    name,
    email,
    password: hashedPassword,
  };

  database.create("users", user);

  return { message: "Usuário criado com sucesso!" };
}
