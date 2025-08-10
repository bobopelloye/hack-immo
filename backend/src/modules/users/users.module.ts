import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { UserRepository } from './repositories/user.repository';
import { User, UserSchema } from './entities/user.entity';
import { CaslAbilityFactory } from '../../common/authorization/casl/casl-ability.factory';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, CaslAbilityFactory],
  exports: [UserService, UserRepository],
})
export class UsersModule {}
