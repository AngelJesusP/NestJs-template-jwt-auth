import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity('User')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', nullable:false, length:150})
    username: string;

    @Column({type:'varchar', nullable: false, length:150})
    password: string;

}