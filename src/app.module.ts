import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { LetterController } from './letter/letter.controller';
import { GroupController } from './group/group.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, LetterController, GroupController],
  providers: [AppService],
})
export class AppModule {}
