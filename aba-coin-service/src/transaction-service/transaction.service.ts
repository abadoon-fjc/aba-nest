import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class TransactionService {
  private db = admin.firestore();

  async updateCounter(data: { userId: string; newCounterValue: number }) {
    const userRef = this.db.collection('users').doc(data.userId);
    await userRef.update({
      counter: data.newCounterValue,
    });
    return { message: 'Counter updated successfully' };
  }

  async processWithdrawal(data: { userId: string; amount: number; walletAddress: string }) {
    const userRef = this.db.collection('users').doc(data.userId);
    const userData = await userRef.get();

    if (userData.exists && userData.data().balance >= data.amount) {
      await userRef.update({
        balance: admin.firestore.FieldValue.increment(-data.amount),
        lastWithdrawal: new Date(),
      });
      return { message: 'Withdrawal processed successfully' };
    } else {
      throw new Error('Insufficient balance or user does not exist');
    }
  }
}
