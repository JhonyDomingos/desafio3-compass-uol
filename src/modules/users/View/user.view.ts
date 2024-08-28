import type { Users } from '../entities/users.entity';

export class UserView {
  static httpResponse({
    id,
    name,
    email,
    role,
    acceptedPolicy,
    createdAt,
    updatedAt,
  }: Users) {
    return {
      id,
      name,
      email,
      role,
      acceptedPolicy,
      createdAt,
      updatedAt,
    };
  }
}
