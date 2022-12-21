import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { exec } from 'child_process';

class Response{
  constructor(success:boolean,error:string|null,status:number|500,response:Object|null){
    this.success=success;
    this.status=status
    this.error=error;
    this.response=response;
  }
  success:boolean;
  error:string|null;
  status:number|500;
  response:Object|null;
}


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDto) private userRepository: Repository<UserDto>,
  ) {
    this.userRepository = userRepository;
  }

  public async create(userInfo:UserDto):Promise<Response> {
    await this.userRepository.save(userInfo);
    return new Response(true,null,200,null); 
  }

  public async overLapTest(test:string|null):Promise<Response>{
    let email:string|null=null;
    let phonenumber:string|null=null;
    if(test.includes('@')){
      email=test;
    }else if(test.includes('-')){
      phonenumber=test
    }

    if(email!==null){
      let exist_email=await this.userRepository.findOne({
        where:{
          email:email
        }
      })
      return exist_email===null?
      new Response(false,"Exist Email",403,null):
      new Response(true,null,200,null)
    }else if(phonenumber!==null){
      let exist_phonenumber=await this.userRepository.findOne({
        where:{
          phonenumber:phonenumber
        }
      })
      return exist_phonenumber===null?
      new Response(false,"Exist Password",403,null):
      new Response(true,null,200,null)
    }else{
      return new Response(false,"Bad Request",400,null);
    }
  }


  public async loginUser(email:string,password:string):Promise<Response>{
    const userInfo=await this.userRepository.findOne({
      select:{
        email:true,
        nickname:true,
        groupIds:true,
      },
      where:{
        email:email,
        password:password
      }
    })
    if(userInfo===null){
      return new Response(false,"Not Found User",404,null)
    }else{
      return new Response(true,null,200,{
        User:userInfo,
        token:"i need token"
      })
    }
  }

  public async roomJoin(rooms:number[]):Promise<Response>{
    let userId=1;
    let userInfo=await this.userRepository.findOne({
      where:{
        userId:userId
      }
    })
    //중복체크
    /*
    1.일단 room리스트를 중복을 제거해서 넘긴다.
    2.프론트에서 유저 정보를 가지고 중복을 막는다.
        하지만 백에서도 확인이 필요하지 음..
     */
    userInfo.groupIds=userInfo.groupIds.filter(ele_a => rooms.includes(ele_a)); 
    userInfo.groupIds.push(...rooms)
    return new Response(true,null,200,null)
  }
}
