import { useParams } from "react-router-dom";
import BodyContainer from "../BodyContainer";

const ProductCategoryPage = () => {
  const params = useParams();
  const productCategory = params.category;
  const productName = params.name;

  return (
    <BodyContainer>
        <h1>Product Category Page</h1>
      <h2>Product category: {productCategory}</h2>
      <h2>Product type: {productName}</h2>
    </BodyContainer>
  );
};

export default ProductCategoryPage;
