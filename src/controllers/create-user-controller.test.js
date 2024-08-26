import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";

import { createUserController } from "./create-user-controller.js";

describe("Create User Controller", () => {
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

  it("should return status [201] and create the user successfully", async () => {
    const req = {
      body: {
        name: "test test",
        email: "test@test.com",
        password: "Test@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 201);
    assert.strictEqual(res.message, "Usuário criado com sucesso!");
  });

  it("should return status [400] if name is not provided", async () => {
    const req = {
      body: {
        email: "test@test.com",
        password: "Test@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.message,
      "Alguns campos necessários não foram enviados."
    );
  });

  it("should return status [400] if email is not provided", async () => {
    const req = {
      body: {
        name: "test test",
        password: "Test@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.message,
      "Alguns campos necessários não foram enviados."
    );
  });

  it("should return status [400] if password is not provided", async () => {
    const req = {
      body: {
        name: "test test",
        email: "test@test.com",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(
      res.message,
      "Alguns campos necessários não foram enviados."
    );
  });

  it("should return status [400] if name provided includes numbers", async () => {
    const req = {
      body: {
        name: "test123",
        email: "test@test.com",
        password: "Test@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo name é inválido");
  });

  it("should return status [400] if name provided includes special characters", async () => {
    const req = {
      body: {
        name: "test@!$",
        email: "test@test.com",
        password: "Test@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo name é inválido");
  });

  it("should return status [400] if email provided has an invalid format", async () => {
    const req = {
      body: {
        name: "test test",
        email: "test.com",
        password: "Test@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo email é inválido");
  });

  it("should return status [400] if password provided not contain at least 8 characters", async () => {
    const req = {
      body: {
        name: "test test",
        email: "test@test.com",
        password: "Test@12",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });

  it("should return status [400] if password provided not contain at least 1 lowercase letter", async () => {
    const req = {
      body: {
        name: "test test",
        email: "test@test.com",
        password: "TEST@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });

  it("should return status [400] if password provided not contain at least 1 uppercase letter", async () => {
    const req = {
      body: {
        name: "test test",
        email: "test@test.com",
        password: "test@123",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });

  it("should return status [400] if password provided not contain at least 1 special character", async () => {
    const req = {
      body: {
        name: "test test",
        email: "test@test.com",
        password: "Test1234",
      },
    };

    await createUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });
});
