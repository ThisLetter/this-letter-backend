import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserDto } from "./dto/create-user.dto"

@Module({
  imports: [TypeOrmModule.forFeature([CreateUserDto])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
