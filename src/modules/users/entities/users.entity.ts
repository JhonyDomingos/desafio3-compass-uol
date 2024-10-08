import { Replace } from 'src/utils/replace.types';
import { UsersRoleEnum, UsersSchema } from '../interface/users.interface';
import { randomUUID } from 'crypto';

export class Users {
  private props: UsersSchema;
  private _id: string;

  constructor(
    props: Replace<
      UsersSchema,
      {
        createdAt?: Date;
        updatedAt?: Date;
        acceptedPolicy?: boolean;
        role?: UsersRoleEnum;
      }
    >,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
      acceptedPolicy: props.acceptedPolicy || false,
      role: props.role || UsersRoleEnum.CUSTOMER,
    };
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id!;
  }
  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  get password(): string {
    return this.props.password;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get role(): UsersRoleEnum {
    return this.props.role;
  }

  set role(role: UsersRoleEnum) {
    this.props.role = role;
  }

  get acceptedPolicy(): boolean {
    return this.props.acceptedPolicy;
  }

  set acceptedPolicy(acceptedPolicy: boolean) {
    this.props.acceptedPolicy = acceptedPolicy;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
