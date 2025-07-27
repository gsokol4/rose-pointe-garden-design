// lib/redis.js
import { Redis } from '@upstash/redis';

let redis;

if (!redis) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
}

export default redis;
