export interface Category {
  id: number;
  name: string;
}

export interface CategoryGroup {
  name: string;
  id?: number;
  categories: Category[];
}
