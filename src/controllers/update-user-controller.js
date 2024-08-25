import { ContentNotFound } from "../errors/content-not-found.js";

import { updateUseUseCase } from "../use-cases/update-user-use-case.js";

import { UserValidations } from "../validations/user-validations.js";

export async function updateUserController(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const fields = ["name", "email", "password"];
    const dataKeys = Object.keys(data);

    const sentFields = dataKeys.filter((key) => fields.includes(key));

    if (sentFields.length <= 0) {
      return res.writeHead(400).message("Alguns campos enviados são inválidos");
    }

    const validatedData = {};

    for (const field of sentFields) {
      const check = UserValidations[field](data[field]);

      if (!check.isValid) {
        return res.writeHead(400).end(`O campo ${field} é inválido`);
      }

      validatedData[field] = check[field];
    }

    const adjustData = {
      id,
      ...validatedData,
    };

    const result = await updateUseUseCase(adjustData);

    if (result instanceof ContentNotFound) {
      return res.writeHead(result.statusCode).end(result.message);
    }

    return res.writeHead(200).message(result)
  } catch (error) {
    console.error(error);
    return res.writeHead(500).end("Erro interno do servidor.");
  }
}
