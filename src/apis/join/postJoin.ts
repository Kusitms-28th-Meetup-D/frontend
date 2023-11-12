import { RequestJoin } from '../../interface/Join';
import Axios from '../axios';

const postJoin = (requestData : RequestJoin  ) =>
  Axios.post(
    '/api/auth/register',
    {
      ...requestData
    },
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

export default postJoin;
