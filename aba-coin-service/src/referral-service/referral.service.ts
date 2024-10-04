import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class ReferralService {
  private db = admin.firestore();

  async createReferral(data: { userId: string; referralCode: string }) {
    const referralRef = this.db.collection('referrals').doc(data.referralCode);
    await referralRef.set({
      userId: data.userId,
      createdAt: new Date(),
    });
    return { message: 'Referral created successfully' };
  }

  async getReferrals(userId: string) {
    const referralsSnapshot = await this.db.collection('referrals')
      .where('userId', '==', userId)
      .get();

    const referrals = referralsSnapshot.docs.map(doc => doc.data());
    return { referrals };
  }
}
