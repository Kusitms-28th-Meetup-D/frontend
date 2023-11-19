import { RequestTeamOpen } from '../../interface/MyTeam';
import Axios from '../axios';

export async function postTeamOpen(
  teamOpenData: RequestTeamOpen,
): Promise<void> {
  await Axios.post(`/api/teams/open`, teamOpenData);
}

export default postTeamOpen;
