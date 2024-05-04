class ApiError extends Error {
  constructor(message: string, private readonly statusCode: number) {
    super(message);
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, 400);
  }
}
