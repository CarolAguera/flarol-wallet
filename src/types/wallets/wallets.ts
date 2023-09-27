export type StoreWalletsProps = {
  description: string;
  amount: string;
};

export type ListWalletsProps = {
  id: number;
  description: string;
  slug: string;
  amount: number;
  user_id: number;
};

export type UpdateWalletsProps = { id: number } & StoreWalletsProps;
