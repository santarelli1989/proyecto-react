import { Category, Sync } from "@mui/icons-material";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";

export const ProductsContext = createContext();
// se crea esta funcion para no tener q importar cada ves que lo queramos usar en el Header
export const useProductsContext = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const getProducts = async (category = null) => {
    try {
      const reference = collection(db, "products");

      const referenceCategory = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(
        category ? referenceCategory : reference
      );

      const productsArray = [];

      querySnapshot.forEach((doc) => {
        productsArray.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setProducts(productsArray);
    } catch (error) {
      console.error(error);
    }
  };
  const getProductById = async (id) => {
    const docReference = doc(db, "products", id);
    const docSnap = await getDoc(docReference);
    if (docSnap.exists()) {
      return {
        id,
        ...docSnap.data(),
      };
    } else {
      return null;
    }
  };

  return (
    <ProductsContext.Provider value={{ products, getProducts, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
