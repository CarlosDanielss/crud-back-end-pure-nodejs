export class ContentNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "ContentNotFound";
    this.statusCode = 404;
  }
}
