import { IsNotEmpty, IsString } from "class-validator";

export class UserListDto {
    @IsNotEmpty()
    pageNumber: number;

    @IsNotEmpty()
    pageSize: number;

    nickName: string;

    account: string;
}

export class AddUserDto {
    @IsNotEmpty()
    nickname: string;

    @IsNotEmpty()
    @IsString()
    account: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    role: number

    @IsNotEmpty()
    createId: number

    @IsNotEmpty()
    updateId: number
}