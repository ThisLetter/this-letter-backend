import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
    this.userService = userService;
  }

  //회원가입 api
  /*
  필요 Body
  email:String,이메일
  password:String,비밀번호
  nickname:String,닉네임
  phonenumber:String,전화번호
   */
  @Post("signup")
  async create(
    @Body('email')email:string,
    @Body('password')password:string,
    @Body('nickname')nickname:string,
    @Body('phonenumber')phonenumber:string,
    ) {
      let today=new Date();

      //2차 인증 나중에 확인해서 수정
      const user:UserDto={
        updatedAt:today,
        createdAt:today,
        email:email,
        groupIds:[],
        nickname:nickname,
        password:password,
        phonenumber:phonenumber,
        secondcertifi:false,
        userId:null
      }
      return await this.userService.create(user);
  }

  /*
    중복확인 api
    변수 test를 받아 이메일과 전화번호 형식을 확인하여 그에 해당되는 response을 내보낸다.
  */
  @Post("overlap")
  async overlap(
    @Body('test')test:string,
  ){
    return await this.userService.overLapTest(test);
  }

  //로그인 api
  @Post('/login')
  async findOne(
    @Body('email')email:string|null,
    @Body('password')password:string|null,
    ) {
    return await this.userService.loginUser(email,password);
  }

  //방 등록 api
  @Patch('roomJoin')
  roomJoin(
    @Body('rooms')rooms:number[],
  ){
    return this.userService.roomJoin(rooms);
  }


}