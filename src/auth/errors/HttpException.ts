export class HttpException {
  status: number;
  message: string;

  constructor(
    message: string,
    status: number,
  ){
    this.message = message;
    this.status = status;
  }
}
