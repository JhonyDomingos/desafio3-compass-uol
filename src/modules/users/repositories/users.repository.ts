import { Users } from '../entities/users.entity';

export abstract class UsersRepository {
  abstract create(user: Users): Promise<Users>;
  abstract findByEmail(email: string): Promise<Users | null>;
  abstract findById(id: number): Promise<Users | null>;
}
