import crypto from "node:crypto";

export class Encrypt {
  static async hash(password) {
    const salt = crypto.randomBytes(8).toString("hex");

    return new Promise((resolve, reject) => {
      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) {
          reject(err);
        }

        resolve(`${salt}:${derivedKey.toString("hex")}`);
      });
    });
  }

  static async verify(password, hash) {
    const [salt, key] = hash.split(":");
    const keyBuffer = Buffer.from(key, "hex");
    const derivedKey = await new Promise((resolve, reject) => {
      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) {
          reject(err);
        }

        resolve(derivedKey);
      });
    });

    return crypto.timingSafeEqual(keyBuffer, derivedKey);
  }
}
