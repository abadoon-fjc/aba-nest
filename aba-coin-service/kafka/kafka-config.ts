import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'your-client-id',
  brokers: ['broker1:9092', 'broker2:9092'],
});

export const kafkaProducer = kafka.producer();
export const kafkaConsumer = kafka.consumer({ groupId: 'your-group-id' });

export const initKafka = async () => {
  await kafkaProducer.connect();
  console.log('Kafka producer connected');

  await kafkaConsumer.connect();
  console.log('Kafka consumer connected');

  await kafkaConsumer.subscribe({ topic: 'your-topic', fromBeginning: true }); // Update with your topic
  console.log('Kafka consumer subscribed to topic');

  await kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });
};
