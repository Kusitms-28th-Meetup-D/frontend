import { ResponseRecruitingTeam } from '../../interface/MyTeam';
import Axios from '../axios';

export async function getRecruitingTeam(
  page: number,
  size: number,
): Promise<ResponseRecruitingTeam> {
  const { data } = await Axios.get(
    `/api/teams/recruiting?page=${page}&size=${size}`,
  );
  return data;
}
