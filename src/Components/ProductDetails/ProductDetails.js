import { useParams } from "react-router-dom";
import BodyContainer from "../../Containers/BodyContainer";
const ProductDetails = () => {
  const params = useParams();
  const productId = params.id;

  return (
    <BodyContainer>
      <h1>
        Product Details Page for {productId}
      </h1>
    </BodyContainer>
  );
};

export default ProductDetails;
