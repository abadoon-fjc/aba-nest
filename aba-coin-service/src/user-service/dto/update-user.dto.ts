import { IsEmail, IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly userId: string; // Обязательное поле

  @IsOptional()
  @IsString()
  readonly firstName?: string;

  @IsOptional()
  @IsString()
  readonly lastName?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly password?: string;

  @IsNumber()
  counter: number; // Обязательное поле

  @IsNumber()
  dailyClicks: number; // Обязательное поле

  @IsNumber()
  totalClicks: number; // Обязательное поле
}

export class UpdateTaskDto {
  @IsString()
  userId: string; // Обязательное поле

  @IsString()
  taskId: string; // Обязательное поле

  @IsString()
  taskDescription: string;

  @IsNumber()
  taskProgress: number;

  @IsString()
  status: string; // Обязательное поле

  @IsString()
  timestamp: string; // Обязательное поле
}
