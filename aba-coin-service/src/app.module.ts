import { Module } from '@nestjs/common';
import { UserModule } from './user-service/user.module';
import { TransactionModule } from './transaction-service/transaction.module';
import { ReferralModule } from './referral-service/referral.module';

@Module({
  imports: [UserModule, TransactionModule, ReferralModule],
})
export class AppModule {}
