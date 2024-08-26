import { describe, it, beforeEach } from "node:test";
import assert from "node:assert";

import { updateUserController } from "./update-user-controller.js";

describe("Update User Controller", () => {
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
      message(msg) {
        this.message = msg;
      },
    };
  });

  it("should return status [400] if no field was provided", async () => {
    const req = {
      body: {},
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
  });

  it("should return status [400] if name provided includes numbers", async () => {
    const req = {
      body: {
        name: "test123",
      },
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

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
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo name é inválido");
  });

  it("should return status [400] if email provided has an invalid format", async () => {
    const req = {
      body: {
        email: "test.com",
      },
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo email é inválido");
  });

  it("should return status [400] if password provided not contain at least 8 characters", async () => {
    const req = {
      body: {
        password: "Test@12",
      },
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });

  it("should return status [400] if password provided not contain at least 1 lowercase letter", async () => {
    const req = {
      body: {
        password: "TEST@123",
      },
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });

  it("should return status [400] if password provided not contain at least 1 uppercase letter", async () => {
    const req = {
      body: {
        password: "test@123",
      },
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });

  it("should return status [400] if password provided not contain at least 1 special character", async () => {
    const req = {
      body: {
        password: "Test1234",
      },
      params: {
        id: "efb448b8-9b69-47be-bb3a-16a7fb925f83",
      },
    };

    await updateUserController(req, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.message, "O campo password é inválido");
  });
});
