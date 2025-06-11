import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';

// Cargar usuarios desde el CSV
const users = new SharedArray('users', function () {
  return open('./users.csv')
    .split('\n')
    .slice(1) // omite cabecera
    .map(line => {
      const [username, password] = line.split(',');
      return { username, password };
    });
});

// Configuración del escenario
export const options = {
  vus: 20, // Virtual Users
  duration: '10s', // Duración de la prueba
  thresholds: {
    http_req_duration: ['p(95)<1500'], // menos de 1.5s
    http_req_failed: ['rate<0.03'], // menos de 3% de errores
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
