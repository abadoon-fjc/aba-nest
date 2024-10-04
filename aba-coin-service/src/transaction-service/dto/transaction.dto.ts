import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCounterDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  newCounterValue: number;
}

export class WithdrawalDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  walletAddress: string;
}
