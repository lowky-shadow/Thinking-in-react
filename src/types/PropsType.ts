export interface ProductType {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

type SetBoolean = (value: boolean | ((prev: boolean) => boolean)) => void;
type SetString = (value: string) => void;

export interface SearchBarProps {
  setOnlyStock: SetBoolean;
  setSearchText: SetString;
}

export interface ProductTableProps {
  products: ProductType[];
  onlyStock: boolean;
  searchText: string;
}
