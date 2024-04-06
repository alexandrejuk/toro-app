export interface AccountInfo {
  bank: string;
  branch: string;
  account: string;
  cpf?: string;
  amount?: number,
  event?: string,
}

export interface Transfer {
  event: string;
  target: AccountInfo;
  origin: AccountInfo;
  amount: number,
}

export interface ResponseTransfer {
  message: string;
}
