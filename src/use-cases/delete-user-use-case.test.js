import { describe, it } from "node:test";
import assert from "node:assert";

import { deleteUserUseCase } from "./delete-user-use-case.js";

describe("Delete User Use Case", () => {
  it("should return content not found if the user is not found", async () => {
    const data = {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83"
    } 
    const result = await deleteUserUseCase(data);

    assert.strictEqual(result.name, "ContentNotFound");
    assert.strictEqual(result.message, "O Usuário não foi encontrado.");
  });
});
