import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
    this.userService = userService;
  }

  @Get(":userId")
  async findUserOne(@Param('userId') userId: number): Promise<UserDto> {
    return this.userService.findUserIdOne(userId);
  }

}