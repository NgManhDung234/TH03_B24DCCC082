import { Category } from "../types/types";

interface Props {
  onFilter: (category: string) => void;
}

export default function FilterBox({ onFilter }: Props) {
  const categories: Category[] = ["Điện tử", "Quần áo", "Đồ ăn", "Sách", "Khác"];

  return (
    <select onChange={(e) => onFilter(e.target.value)} style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}>
      <option value="">Tất cả danh mục</option>
      {categories.map((c) => <option key={c} value={c}>{c}</option>)}
    </select>
  );
}