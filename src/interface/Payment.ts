export interface RequestTicketBuy {
  buyAmount: number;
}

export interface ResponseTicketCount {
  status: number;
  message: string;
  data: TicketCount;
}

export interface TicketCount {
  ticketCount: number;
}
