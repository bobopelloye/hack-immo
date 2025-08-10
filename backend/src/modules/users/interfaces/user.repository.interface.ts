import { Schema as MongooseSchema } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserRepository {
  create(createUserDto: CreateUserDto): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  updateProfile(id: string, updateData: UpdateUserDto): Promise<User | null>;
  delete(id: string): Promise<User>;
  findAll(): Promise<User[]>;
  findByRole(role: string): Promise<User[]>;
}
