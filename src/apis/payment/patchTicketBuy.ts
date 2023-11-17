import { RequestTicketBuy } from '../../interface/Payment';
import Axios from '../axios';

export async function patchTicketBuy(
  ticketBuy: RequestTicketBuy,
): Promise<void> {
  await Axios.patch(`/api/users/tickets/buy`, ticketBuy);
}

export default patchTicketBuy;
