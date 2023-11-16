import axios from 'axios';

// const tokenString = sessionStorage.getItem('recoilPersistTest');
// const token = tokenString ? JSON.parse(tokenString) : null;
const serviceToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNzAwMDcyNDU0LCJleHAiOjE3MDEzNjg0NTR9.zgzovueBE0rsl0KGvVhbdLrYQiTeLSD3Jd9psSdvDqEH-1hiVC-bx01pHdcESGSKRLFogKQBqkycd34MbtEX1Q';

const Axios = axios.create({
  baseURL: 'https://wanteam.site',
  headers: {
    Authorization: `Bearer ${serviceToken}`,
    'Content-Type': 'application/json',
  },
});
export default Axios;
