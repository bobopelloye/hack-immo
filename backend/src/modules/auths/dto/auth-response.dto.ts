import { User } from '../../users/entities/user.entity';

export class AuthResponseDto {
  access_token: string;
  user: Omit<User, 'password'>;
}
