import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { products, deleteProduct } = useProducts();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  const handleDelete = () => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      deleteProduct(product.id);
      navigate("/");
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <h2>{product.ten}</h2>
      <p><b>Danh mục:</b> {product.danhMuc}</p>
      <p><b>Giá:</b> {product.gia.toLocaleString()} VND</p>
      <p><b>Số lượng:</b> {product.soLuong}</p>
      <p><b>Mô tả:</b> {product.moTa}</p>
      <button onClick={() => navigate(`/edit/${product.id}`)}>Chỉnh sửa</button>
      <button onClick={handleDelete} style={{ marginLeft: 8 }}>Xóa</button>
    </div>
  );
}