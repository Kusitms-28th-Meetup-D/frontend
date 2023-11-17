import { AxiosPromise } from 'axios';
import Axios from '../axios';

import { RequestProfile, ResponseProfile } from '../../interface/Profile';

export const getProfile = (
  requestData: RequestProfile,
): AxiosPromise<ResponseProfile> =>
  Axios.get(`/api/users/profiles/${requestData.userId}`, {
    headers: {
      Accept: 'application/json',
    },
  });

// export async function getProfile(): Promise<ResponseProfile> {

//   const { data } = await Axios.get(`/api/users/mypage`, {
//     headers: {
//       Accept: 'application/json',
//     },
//   });
//   return data;
// }
export default getProfile;
