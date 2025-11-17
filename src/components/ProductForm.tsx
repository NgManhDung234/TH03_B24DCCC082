import { useState } from "react";
import { Product, Category } from "../types/types";

interface Props {
  initial?: Product;
  onSubmit: (product: Product) => void;
}

export default function ProductForm({ initial, onSubmit }: Props) {
  const [form, setForm] = useState<Product>(
    initial || { id: Date.now(), ten: "", danhMuc: "Khác", gia: 0, soLuong: 0, moTa: "" }
  );

  const [error, setError] = useState("");

  const validate = (): string => {
    if (form.ten.trim().length < 3) return "Tên sản phẩm phải từ 3 ký tự trở lên";
    if (form.gia <= 0) return "Giá phải là số dương";
    if (form.soLuong <= 0 || !Number.isInteger(form.soLuong)) return "Số lượng phải là số nguyên dương";
    if (!form.danhMuc) return "Danh mục bắt buộc chọn";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setError(msg);
    onSubmit(form);
  };

  const categories: Category[] = ["Điện tử", "Quần áo", "Đồ ăn", "Sách", "Khác"];

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <input value={form.ten} onChange={(e) => setForm({ ...form, ten: e.target.value })} placeholder="Tên sản phẩm" />
      <input type="number" value={form.gia} onChange={(e) => setForm({ ...form, gia: Number(e.target.value) })} placeholder="Giá" />
      <input type="number" value={form.soLuong} onChange={(e) => setForm({ ...form, soLuong: Number(e.target.value) })} placeholder="Số lượng" />
      <select value={form.danhMuc} onChange={(e) => setForm({ ...form, danhMuc: e.target.value as Category })}>
        {categories.map((c) => <option key={c}>{c}</option>)}
      </select>
      <textarea value={form.moTa} onChange={(e) => setForm({ ...form, moTa: e.target.value })} placeholder="Mô tả"></textarea>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <button type="submit">Lưu</button>
    </form>
  );
}
