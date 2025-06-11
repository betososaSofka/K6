import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';


const users = new SharedArray('users', function () {
  return open('./users.csv')
    .split('\n')
    .slice(1) 
    .map(line => {
      const [username, password] = line.split(',');
      return { username, password };
    });
});


export const options = {
  vus: 20, 
  duration: '10s', 
  thresholds: {
    http_req_duration: ['p(95)<1500'], 
    http_req_failed: ['rate<0.03'], 
  },
};

export default function () {
  const user = users[Math.floor(Math.random() * users.length)];

  const payload = JSON.stringify({
    username: user.username,
    password: user.password,
  });

  const headers = { 'Content-Type': 'application/json' };

  const res = http.post('https://fakestoreapi.com/auth/login', payload, { headers });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 1.5s': (r) => r.timings.duration < 1500,
  });

  sleep(1);
}
