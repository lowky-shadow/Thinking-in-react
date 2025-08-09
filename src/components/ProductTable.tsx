import type { ProductTableProps, ProductType } from "@/types/PropsType";

function ProductTable({ products, onlyStock, searchText }: ProductTableProps) {
  const rows: any = [];
  let lastCategory: string | null = null;

  products.forEach((product: ProductType) => {
    if (product.name.toLowerCase().includes(searchText.toLowerCase()) == false)
      return;

    if (onlyStock && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />);

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }: { category: string | null }) {
  return (
    <tr>
      <th colSpan={2} className="p-2">
        Category : {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }: {product: ProductType}) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="text-red-500">{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductTable;
