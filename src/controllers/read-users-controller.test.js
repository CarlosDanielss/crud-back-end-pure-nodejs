import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";

import { readUsersController } from "./read-users-controller.js";

describe("Read User Controller", () => {
  let res;

  beforeEach(() => {
    res = {
      statusCode: null,
      message: "",
      writeHead(code) {
        this.statusCode = code;
        return this;
      },
      end(msg) {
        this.message = msg;
      },
    };
  });

  it("should return status [400] if an invalid field is provided", async () => {
    const req = {
      query: {
        password: "teste123",
      },
    };

    await readUsersController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "Campos inválidos");
  });

  it("should return status [404] if user not exist", async () => {
    const req = {
      query: {
        name: "test1",
      },
    };

    await readUsersController(req, res);

    assert.strictEqual(res.statusCode, 404);
    assert.strictEqual(res.message, "Nenhum usuário foi encontrado.");
  });
});
