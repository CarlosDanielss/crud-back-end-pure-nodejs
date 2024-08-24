import { InMemoryDatabase } from "../database/in-memory/in-memory-database.js";

import { AlreadyExist } from "../errors/already-exist-error.js";

import { Encrypt } from "../utils/encrypt.js";

const database = new InMemoryDatabase();

export async function createUserUseCase({ name, email, password }) {
  const userAlreadyExist = database.select("users", { email });

  if (userAlreadyExist.length > 0) {
    return new AlreadyExist("O usuário já existe.");
  }

  const hashedPassword = await Encrypt.hash(password);

  const user = {
    name,
    email,
    password: hashedPassword,
  };

  database.create("users", user);

  return { message: "Usuário criado com sucesso!" };
}
