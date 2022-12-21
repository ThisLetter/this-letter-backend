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
    orderBy:{
        userId: 'DESC'
      }
})
export class UserDto {
    @PrimaryGeneratedColumn()
    userId: number;
    @PrimaryColumn({
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
        type: 'varchar',
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
        type: 'json',
        comment: 'groupids',
      })
    groupIds: number[]|null;
    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;
}