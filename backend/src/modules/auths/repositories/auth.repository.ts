import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from '../entities/auth.entity';

@Injectable()
export class AuthRepository {
  constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) {}

  async create(auth: Partial<Auth>): Promise<AuthDocument> {
    const newAuth = new this.authModel(auth);
    return newAuth.save();
  }

  async findByUserId(userId: string): Promise<AuthDocument | null> {
    return this.authModel.findOne({ user: userId }).exec();
  }

  async findByRefreshToken(token: string): Promise<AuthDocument | null> {
    return this.authModel
      .findOne({ refreshToken: token, isActive: true })
      .exec();
  }

  async updateRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<AuthDocument | null> {
    return this.authModel
      .findOneAndUpdate(
        { user: userId },
        { refreshToken, lastLoginAt: new Date() },
        { new: true },
      )
      .exec();
  }

  async deactivateToken(userId: string): Promise<AuthDocument | null> {
    return this.authModel
      .findOneAndUpdate(
        { user: userId },
        { isActive: false, lastLogoutAt: new Date() },
        { new: true },
      )
      .exec();
  }
}
