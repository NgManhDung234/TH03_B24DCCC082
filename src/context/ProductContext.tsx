import { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "../types/types";
import { initialProducts } from "../data/initialProducts";

type ActionType =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "UPDATE_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: number };

function productReducer(state: Product[], action: ActionType): Product[] {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];

    case "UPDATE_PRODUCT":
      return state.map((p) => (p.id === action.payload.id ? action.payload : p));

    case "DELETE_PRODUCT":
      return state.filter((p) => p.id !== action.payload);

    default:
      return state;
  }
}

interface ProductContextType {
  products: Product[];
  addProduct: (p: Product) => void;
  updateProduct: (p: Product) => void;
  deleteProduct: (id: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);


export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  const addProduct = (p: Product) =>
    dispatch({ type: "ADD_PRODUCT", payload: p });

  const updateProduct = (p: Product) =>
    dispatch({ type: "UPDATE_PRODUCT", payload: p });

  const deleteProduct = (id: number) =>
    dispatch({ type: "DELETE_PRODUCT", payload: id });

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProducts must be used inside ProductProvider");
  return context;
};
