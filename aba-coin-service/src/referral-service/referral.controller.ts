import { Controller, Post, Body } from '@nestjs/common';
import { ReferralService } from './referral.service';
import { CreateReferralDto } from './dto/referral.dto';

@Controller('referral')
export class ReferralController {
  constructor(private readonly referralService: ReferralService) {}

  @Post('create')
  createReferral(@Body() createReferralDto: CreateReferralDto) {
    return this.referralService.createReferral(createReferralDto);
  }

  @Post('get-referrals')
  getReferrals(@Body() { userId }: { userId: string }) {
    return this.referralService.getReferrals(userId);
  }
}
