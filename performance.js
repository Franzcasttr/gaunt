import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = {
  vus: 10,
  duration: '30s',

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500'],
  },
};
export default function () {
  const res = http.get('https://citest-qa.vercel.app/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

// stages: [
//     { duration: '10m', target: 200 },
//     { duration: '30m', target: 200 },
//     { duration: '5m', target: 0 },
//   ],
