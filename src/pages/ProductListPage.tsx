import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterBox from "../components/FilterBox";
import Pagination from "../components/Pagination";

export default function ProductListPage() {
  const { products } = useProducts();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = products
    .filter(p => p.ten.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (filter ? p.danhMuc === filter : true));

  const totalPages = Math.ceil(filtered.length / perPage);
  const pageData = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div style={{ padding: 12 }}>
      <h2>Danh sách sản phẩm</h2>
      <SearchBar onSearch={setSearch} />
      <FilterBox onFilter={setFilter} />
      <p>Tổng sản phẩm: {filtered.length}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {pageData.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}