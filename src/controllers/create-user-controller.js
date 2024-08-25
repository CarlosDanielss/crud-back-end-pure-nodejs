import { UserValidations } from "../validations/user-validations.js";

import { createUserUseCase } from "../use-cases/create-user-use-case.js";

import { AlreadyExist } from "../errors/already-exist-error.js";

export async function createUserController(req, res) {
  try {
    const data = req.body;

    const fields = ["name", "email", "password"];

    for (const field of fields) {
      if (data[field] === undefined || data[field] === "") {
        return res
          .writeHead(400)
          .end("Alguns campos necessários não foram enviados.");
      }
    }

    const validatedData = {};

    for (const field of fields) {
      const check = UserValidations[field](data[field]);

      if (!check.isValid) {
        return res.writeHead(400).end(`O campo ${field} é inválido`);
      }

      validatedData[field] = check[field];
    }

    const result = await createUserUseCase(validatedData);

    if (result instanceof AlreadyExist) {
      return res.writeHead(result.statusCode).end(result.message);
    }

    return res.writeHead(201).end(result.message);
  } catch (error) {
    console.error(error);
    return res.writeHead(500).end("Erro interno do servidor.");
  }
}
