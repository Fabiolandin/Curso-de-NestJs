import { IsAlpha, IsEmail, IsNotEmpty, IsString, Length, Min } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Length(3)
    @IsString()
    @IsNotEmpty()
    name: string;

    @Length(4, 20)
    @IsAlpha()
    @IsNotEmpty()
    password: string;
}