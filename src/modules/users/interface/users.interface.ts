export interface UsersSchema {
  name: string;
  email: string;
  password: string;
  role: UsersRoleEnum;
  createdAt: Date;
  updatedAt: Date;
  acceptedPolicy: boolean;
}

export enum UsersRoleEnum {
  CUSTOMER = 'CUSTOMER',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export interface CreateUsersRequest
  extends Pick<UsersSchema, 'name' | 'email' | 'password' | 'acceptedPolicy'> {
  readonly role?: UsersRoleEnum;
}
// export type UserReturn = Omit<UsersSchema, 'password'>;
