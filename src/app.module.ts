import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { LetterModule } from './letter/letter.module';
import { GroupModule } from './group/group.module';
import { CreateUserDto } from './user/dto/create-user.dto';

const ENV=process.env;

@Module({
  imports: [
    UserModule,
    LetterModule,
    GroupModule,
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
      entities: [CreateUserDto],
      synchronize: ENV.SYNCHROIZE as unknown as boolean,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
