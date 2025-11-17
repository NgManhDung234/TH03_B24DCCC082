interface Props {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}
    />
  );
}