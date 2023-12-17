import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 50,
        comment: '用户昵称'
    })
    nickname: string;

    @Column({
        length: 50,
        comment: '用户名'
    })
    username: string;

    @Column({
        length: 50,
        comment: '密码'
    })
    password: string;

    @CreateDateColumn({
        comment: '创建时间'
    })
    createTime: Date;

    @Column({
        comment: '创建人ID'
    })
    createId: number;

    @UpdateDateColumn({
        comment: '更新时间'
    })
    updateTime: Date;

    @Column({
        comment: '更新人ID'
    })
    updateId: number;

    @Column({
        comment: '删除标记'
    })
    deleteFlag: number;

    @Column({
        comment: '角色类型'
    })
    role: number;
}
