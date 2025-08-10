import { PureAbility } from '@casl/ability';

export enum Actions {
  MANAGE = 'manage',
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}

export enum Subjects {
  USER = 'User',
  ALL = 'all',
}

export type AppAbility = PureAbility<[Actions, Subjects]>;
