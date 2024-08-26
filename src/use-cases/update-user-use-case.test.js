import { describe, it } from "node:test";
import assert from "node:assert";

import { updateUseUseCase } from "./update-user-use-case.js";

describe("Update User Use Case", () => {
  it("should return content not found if the user is not found", async () => {
    const data = {
      id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      data: {},
    };
    const result = await updateUseUseCase(data);

    assert.strictEqual(result.name, "ContentNotFound");
    assert.strictEqual(result.message, "O usuário não foi encontrado");
  });
});
