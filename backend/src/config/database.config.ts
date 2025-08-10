import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: configService.get<string>('MONGODB_URI'),
    connectionFactory: (connection) => {
      connection.on('connected', () => {
        console.log('db connected successfully');
      });

      connection.on('error', (error) => {
        console.error('db connection error:', error);
      });

      return connection;
    },
  };
};
