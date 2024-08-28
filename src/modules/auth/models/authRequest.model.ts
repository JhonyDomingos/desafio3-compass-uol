import { Request } from "express";
import type { Users } from "src/modules/users/entities/users.entity";

export class AuthRequestModel extends Request  {
  user: Users;

  
  
}
