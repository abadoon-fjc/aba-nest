import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReferralDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  referralCode: string;
}
