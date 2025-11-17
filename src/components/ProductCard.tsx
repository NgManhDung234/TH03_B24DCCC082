import { Link } from "react-router-dom";
import type { Product } from "../types/types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <h3>{product.ten}</h3>
      <p><b>Danh mục:</b> {product.danhMuc}</p>
      <p><b>Giá:</b> {product.gia.toLocaleString()} VND</p>
      <p><b>Số lượng:</b> {product.soLuong}</p>

      <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
    </div>
  );
}
