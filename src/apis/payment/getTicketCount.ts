import { ResponseTicketCount } from '../../interface/Payment';
import Axios from '../axios';

export async function getTicketCount(): Promise<ResponseTicketCount> {
  const { data } = await Axios.get(`/api/users/tickets/count`);
  return data;
}
