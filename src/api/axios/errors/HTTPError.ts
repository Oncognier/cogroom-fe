export class HTTPError extends Error {
  statusCode: number;
  code?: string;

  constructor(statusCode: number, message?: string, code?: string) {
    super(message);

    this.name = 'HTTPError';
    this.statusCode = statusCode;
    this.code = code;

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
