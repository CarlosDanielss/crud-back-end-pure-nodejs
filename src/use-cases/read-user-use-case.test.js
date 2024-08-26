import { describe, it } from "node:test";
import assert from "node:assert";

import { readUserUseCase } from "./read-user-use-case.js";

describe("Read User Use Case", () => {
  it("should return content not found if the user is not found", async () => {
    const data = {
        query: "efb448b8-9b69-47be-bb3a-16a7fb925f83"
    } 
    const result = await readUserUseCase(data);

    assert.strictEqual(result.name, "ContentNotFound");
    assert.strictEqual(result.message, "Nenhum usuário foi encontrado.");
  });
});
