import { getProducts } from "@/helpers";
import React from "react";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products_ } from "../../type";

const Products = async () => {
  const products = await getProducts();

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {products?.map((item: Products_) => (
        <ProductsData item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
