export type StoreCategoriesProps = {
  description: string;
  icon_id: number;
};

export interface GetCategoriesProps {
  id: number;
  description: string;
  icon: Icon;
}

export interface Icon {
  id: number;
  description: string;
  data: string;
}
