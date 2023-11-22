import Axios from '../axios';

export async function deleteApplyTeam(teamId: number): Promise<void> {
  Axios.delete(`/api/teams/cancel-apply/${teamId}`);
}
