import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [
    new CreateUserDto('lee1', '이정주'),
    new CreateUserDto('kim1', '김명일'),
  ];
  findAll() : Promise<CreateUserDto[]> {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve(this.users),
        100,
      ),
    );
  }
  findOne(id: string) : CreateUserDto | object {
    const foundOne = this.users.filter(user => user.userId === id);
    return foundOne.length ? foundOne[0] : { msg: 'nothing' };
  }
  saveUser(createUserDto: CreateUserDto) : void {
    this.users = [...this.users, createUserDto];
  }
}
