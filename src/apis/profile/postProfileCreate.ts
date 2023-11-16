import { ProfileCraete } from '../../interface/Profile';
import Axios from '../axios';

export async function postProfileCreate(
  profiles: ProfileCraete,
): Promise<void> {
  await Axios.post(`/api/users/profiles`, profiles);
}

export default postProfileCreate;
