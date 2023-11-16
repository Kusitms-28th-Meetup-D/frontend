import axios from 'axios';

const tokenString = sessionStorage.getItem('recoilPersistTest');
const token = tokenString ? JSON.parse(tokenString) : null;

const Axios = axios.create({
  baseURL: 'https://wanteam.site',
  headers: {
    Authorization: `Bearer ${token?.loginState.data.accessToken}`,
    'Content-Type': 'application/json',
  },
});
export default Axios;
