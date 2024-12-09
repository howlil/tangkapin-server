from confluent_kafka import Producer, Consumer
import os

KAFKA_BROKER = os.getenv("KAFKA_BROKER")
TOPIC_NAME = os.getenv("TOPIC_NAME")

def create_producer():
    return Producer({'bootstrap.servers': KAFKA_BROKER})

def create_consumer(group_id):
    return Consumer({
        'bootstrap.servers': KAFKA_BROKER,
        'group.id': group_id,
        'auto.offset.reset': 'earliest'
    })

def produce_event(topic, key, value):
    producer = create_producer()
    producer.produce(topic, key=key, value=value)
    producer.flush()

def consume_events(consumer, callback):
    consumer.subscribe([TOPIC_NAME])
    while True:
        msg = consumer.poll(1.0)  # 1 second timeout
        if msg is None:
            continue
        if msg.error():
            logger.error(f"Consumer error: {msg.error()}")
            continue
        
        logger.info(f"Message received: {msg.value().decode('utf-8')}")
        callback(msg.key(), msg.value())

