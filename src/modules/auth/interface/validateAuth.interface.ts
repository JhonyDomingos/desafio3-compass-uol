import type { Users } from "src/modules/users/entities/users.entity";

export interface ValidateAuthRequest  {
    email: string;
    password: string;
 }

 export interface SigninServiceRequest { 

    user: Users;

 }

 export interface UserPayload { 
    sub: string;
    name: string;
    email: string;
    role: string;
    acceptedPolicy: boolean;
    createdAt: Date;
 }