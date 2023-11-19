import { ResponseOpendTeam } from '../../interface/MyTeam';
import Axios from '../axios';

export async function getOpendTeam(): Promise<ResponseOpendTeam> {
  const { data } = await Axios.get(`/api/teams/opened-myself`);
  return data;
}
