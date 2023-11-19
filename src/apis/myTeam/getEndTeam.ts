import { ResponseEndTeam } from '../../interface/MyTeam';
import Axios from '../axios';

export async function getEndTeam(): Promise<ResponseEndTeam> {
  const { data } = await Axios.get(`/api/teams/worked-team`);
  return data;
}
