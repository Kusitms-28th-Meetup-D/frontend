import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'https://wanteam.site';

export default Axios;
