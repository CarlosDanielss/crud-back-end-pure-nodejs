export class AlreadyExist extends Error {
  constructor(message) {
    super(message);
    this.name = "AlreadyExist";
    this.statusCode = 409;
  }
}
