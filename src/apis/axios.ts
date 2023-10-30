import axios from 'axios';

const Axios = axios.create();
Axios.defaults.baseURL = 'https://www.wanteam.site';

export default Axios;
