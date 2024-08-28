import { HttpStatus } from "@nestjs/common";
import { AppException } from "src/execptions/appExceptions";

export class AuthValuesExecption extends AppException {
  constructor() {
    super({
      message: 'Incorrect Email or Password !',
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}