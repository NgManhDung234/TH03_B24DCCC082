import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";
import { Product } from "../types/types";

export default function AddProductPage() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleAdd = (product: Product) => {
    addProduct(product);
    navigate("/");
  };

  return (
    <div style={{ padding: 12 }}>
      <h2>Thêm sản phẩm mới</h2>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
}