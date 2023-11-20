import { ResponseRecruitingTeam } from '../../interface/MyTeam';
import Axios from '../axios';

export async function getRecruitingTeam(): Promise<ResponseRecruitingTeam> {
  const { data } = await Axios.get(`/api/teams/recruiting`);
  return data;
}
