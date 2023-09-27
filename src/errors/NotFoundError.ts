class NotFoundError extends Error {
  status: number;
  code?: number;

  constructor(error: string) {
    super(error);

    this.name = 'NotFoundError';
    this.message = error;

    Error.call(this, error);
    Error.captureStackTrace(this, this.constructor);

    this.status = 404;
  }
}

export default NotFoundError;
