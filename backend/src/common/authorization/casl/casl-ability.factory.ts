import { Injectable } from '@nestjs/common';
import { PureAbility, defineAbility } from '@casl/ability';
import { User } from '../../../modules/users/entities/user.entity';
import { UserRole } from '../../../modules/users/enums/user.enum';
import { Actions, Subjects } from './ability.type';

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    return defineAbility((can, cannot) => {
      if (user.role === UserRole.ADMIN) {
        can(Actions.MANAGE, Subjects.ALL);
      }
    }) as PureAbility<[Actions, Subjects]>;
  }
}
