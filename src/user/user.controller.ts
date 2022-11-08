import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
    this.userService = userService;
  }

  @Get('list')
  async findAll(): Promise<CreateUserDto[]> {
    const userList = await this.userService.findAll();
    return Object.assign({
      data: userList,
      statusCode: 200,
      statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }
  @Get(':userId')
  async findOne(@Param('userId') id: string): Promise<CreateUserDto> {
    const foundUser = await this.userService.findOne(id);
    return Object.assign({
      data: foundUser,
      statusCode: 200,
      statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    });
  }
  @Post()
  async saveUser(@Body() user: CreateUserDto): Promise<string> {
    await this.userService.saveUser(user);
    return Object.assign({
      data: { ...user },
      statusCode: 201,
      statusMsg: `saved successfully`,
    });
  }
}