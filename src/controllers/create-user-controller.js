import { UserValidations } from "../validations/user-validations.js";

import { createUserUseCase } from "../use-cases/create-user-use-case.js";

import { AlreadyExist } from "../errors/already-exist-error.js";

export async function createUserController(req, res) {
  try {
    const { name, email, password } = req.body;

    const fields = [name, email, password];

    for (const field of fields) {
      if (field === undefined || field === "") {
        return res
          .writeHead(400)
          .end("Alguns campos necessários não foram enviados.");
      }
    }

    const userSchema = [
      UserValidations.name(name),
      UserValidations.email(email),
      UserValidations.password(password),
    ];

    for (const field of userSchema) {
      if (!field.isValid) {
        return res.writeHead(400).end("Alguns campos são inválidos.");
      }
    }

    const result = await createUserUseCase({
      name: userSchema[0].value,
      email: userSchema[1].value,
      password: userSchema[2].value,
    });

    if (result instanceof AlreadyExist) {
      return res.writeHead(result.statusCode).end(result.message);
    }

    return res.writeHead(201).end(result.message);
  } catch (error) {
    console.error(error);
    return res.writeHead(500).end("Erro interno do servidor.");
  }
}
