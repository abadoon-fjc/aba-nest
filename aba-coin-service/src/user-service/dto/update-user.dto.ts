import { IsEmail, IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  readonly userId: string; 

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
  counter: number;

  @IsNumber()
  dailyClicks: number;

  @IsNumber()
  totalClicks: number;
}

export class UpdateTaskDto {
  @IsString()
  userId: string;

  @IsString()
  taskId: string;

  @IsString()
  taskDescription: string;

  @IsNumber()
  taskProgress: number;

  @IsString()
  status: string;

  @IsString()
  timestamp: string;
}
