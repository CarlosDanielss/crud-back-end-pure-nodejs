import { describe, it } from "node:test";
import assert from "node:assert";

import { createUserUseCase } from "./create-user-use-case.js";

describe("Create User Use Case", () => {
  it("should return sucess if the user is not exist", async () => {
    const data = {
      name: "test test",
      email: "test@test.com",
      password: "Test@123",
    };
    const result = await createUserUseCase(data);

    assert.strictEqual(result.message, "Usuário criado com sucesso!");
  });
});
