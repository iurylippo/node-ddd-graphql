export type IHttpResponse<T = any> = {
  statusCode: number;
  error?: null | string;
  data: T;
}

export const serverError = (error: Error): IHttpResponse => ({
  statusCode: 500,
  error: error.message,
  data: error.stack
})

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  data
})
