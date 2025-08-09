import { useState } from "react";
import ProductTable from "./ProductTable";
import type { ProductType } from "@/types/PropsType";
import SearchBar from "./SearchBar";

function FilterableProductTable({ products }: { products: ProductType[] }) {
  const [onlyStock, setOnlyStock] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="inline-block bg-slate-500 p-5 m-5">
      <SearchBar setOnlyStock={setOnlyStock} setSearchText={setSearchText} />
      <ProductTable
        products={products}
        onlyStock={onlyStock}
        searchText={searchText}
      />
    </div>
  );
}

export default FilterableProductTable;
