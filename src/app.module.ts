import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { LetterController } from './letter/letter.controller';
import { GroupController } from './group/group.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
const ENV=process.env;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: (ENV.NODE_ENV === 'production') ? '.production.env' : '.development.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: ENV.DATABASE_HOST,
      port: ENV.DATABASE_PORT as unknown as number,
      username: ENV.DATABASE_USERNAME,
      password: ENV.DATABASE_PASSWORD,
      database: ENV.DATABASE,
      entities: [],
      synchronize: ENV.SYNCHROIZE as unknown as boolean,
    }),
  ],
  controllers: [AppController, UserController, LetterController, GroupController],
  providers: [AppService],
})
export class AppModule {}
