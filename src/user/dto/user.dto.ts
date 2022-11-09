import { 
    Column, 
    Entity, 
    PrimaryColumn, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
 } from 'typeorm/index';

@Entity({
    database: 'this_letter',
    name:'user',
    orderBy:{
        id: 'DESC'
      }
})
export class UserDto {
    @PrimaryGeneratedColumn()
    userid: number;
    @Column({
        type: 'varchar',
        comment: 'email',
      })
    email: string;
    @Column({
        type: 'varchar',
        comment: 'password',
      })
    password: string;
    @Column({
        type: 'varchar',
        comment: 'nickname',
      })
    nickname: string;
    @Column({
        type: 'string',
        comment: 'phonenumber',
      })
    phonenumber: string;
    @Column({ 
        type: 'boolean',
        comment: 'secondcertifi',
        default: true
     })
    secondcertifi: boolean;
    @Column({
        type: 'int',
        comment: 'groupids',
      })
    groupids: number;
    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;
}