import { ResponseOpenedTeam } from '../../interface/MyTeam';
import Axios from '../axios';

export async function getOpenedTeam(): Promise<ResponseOpenedTeam> {
  const { data } = await Axios.get(`/api/teams/opened-myself`);
  return data;
}
