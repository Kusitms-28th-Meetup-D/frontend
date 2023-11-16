import axios from 'axios';

const token = sessionStorage.getItem('recoilPersistTest');

const Axios = axios.create({
  baseURL: 'https://wanteam.site',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default Axios;
