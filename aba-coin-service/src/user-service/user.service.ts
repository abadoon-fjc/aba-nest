import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class UserService {
  private db = admin.firestore();

  async getUserData(userId: string) {
    const userRef = this.db.collection('users').doc(userId);
    const doc = await userRef.get();
    return doc.exists ? doc.data() : null;
  }

  async addUsername(userId: string, name: string) {
    const userRef = this.db.collection('users').doc(userId);
    await userRef.set({ name }, { merge: true });
    return { message: 'Username added successfully' };
  }

  async updateAll(data: { userId: string; counter: number; dailyClicks: number; totalClicks: number }) {
    const userRef = this.db.collection('users').doc(data.userId);
    await userRef.set({
      counter: data.counter,
      todayAmount: data.dailyClicks,
      totalAmount: data.totalClicks,
    }, { merge: true });
    return { message: 'Data updated successfully' };
  }

  async updateTask(data: { userId: string; taskId: string; status: string; timestamp: string }) {
    const taskRef = this.db.collection('users').doc(data.userId).collection('tasks').doc(data.taskId);
    await taskRef.set({ status: data.status, timestamp: data.timestamp }, { merge: true });
    return { message: 'Task updated successfully' };
  }
}
