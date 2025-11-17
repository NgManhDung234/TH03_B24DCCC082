import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";

export default function EditProductPage() {
  const { id } = useParams<{ id: string }>();
  const { products, updateProduct } = useProducts();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  const handleUpdate = (updated: typeof product) => {
    updateProduct(updated);
    navigate(`/products/${updated.id}`);
  };

  return (
    <div style={{ padding: 12 }}>
      <h2>Chỉnh sửa sản phẩm</h2>
      <ProductForm initial={product} onSubmit={handleUpdate} />
    </div>
  );
}
