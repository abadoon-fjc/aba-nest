import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'your-client-id', // Update with your client ID
  brokers: ['broker1:9092', 'broker2:9092'], // Add your Kafka brokers
});

export const kafkaProducer = kafka.producer();
export const kafkaConsumer = kafka.consumer({ groupId: 'your-group-id' }); // Update with your group ID

export const initKafka = async () => {
  // Connect producer
  await kafkaProducer.connect();
  console.log('Kafka producer connected');

  // Connect consumer
  await kafkaConsumer.connect();
  console.log('Kafka consumer connected');

  // Subscribe to topics
  await kafkaConsumer.subscribe({ topic: 'your-topic', fromBeginning: true }); // Update with your topic
  console.log('Kafka consumer subscribed to topic');

  // Handle incoming messages
  await kafkaConsumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
      // Process your message here
    },
  });
};
