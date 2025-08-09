import type { SearchBarProps } from "@/types/PropsType";

export default function SearchBar({
  setOnlyStock,
  setSearchText,
}: SearchBarProps) {
  return (
    <form className="p-3">
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="bg-amber-100 p-2 rounded-xl mr-2"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <label>
        <input type="checkbox" onChange={() => setOnlyStock((prev) => !prev)} />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
