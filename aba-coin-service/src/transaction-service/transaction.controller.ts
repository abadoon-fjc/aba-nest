import { Controller, Post, Body } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { UpdateCounterDto, WithdrawalDto } from './dto/transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('update-counter')
  updateCounter(@Body() updateCounterDto: UpdateCounterDto) {
    return this.transactionService.updateCounter(updateCounterDto);
  }

  @Post('withdraw')
  processWithdrawal(@Body() withdrawalDto: WithdrawalDto) {
    return this.transactionService.processWithdrawal(withdrawalDto);
  }
}
