import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDto) private userRepository: Repository<UserDto>,
  ) {
    this.userRepository = userRepository;
  }
  private async saveUser(email: string, password: string, nickname: string,signupVerifyToken: string) {
    const user = new UserDto();
    user.email = email;
    user.password = password;
    user.nickname = nickname;
    await this.userRepository.save(user);
  }
  private async findOneBy(userId: number): Promise<UserDto> { 
    const user = await this.userRepository.findOneBy({ userId:userId});
  
    return  user;
  }
  public async findUserIdOne(userId: number): Promise<UserDto> { 
    const userDto = await this.findOneBy(userId);
    return  userDto;
  }
}
