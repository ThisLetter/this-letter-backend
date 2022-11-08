import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity()
export class CreateUserDto {
    constructor(userId:string,userName:string){
        this.userId=userId;
        this.userName=userName;
    }
    @PrimaryGeneratedColumn('rowid')
    id: number;
    @PrimaryColumn()
    userId: string;
    @Column()
    userName: string;
    @Column()
    userPassword: string;
    @Column()
    age: number;
    @Column({ default: true })
    isActive: boolean;
}