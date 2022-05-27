import styled from "styled-components";
import { Link } from "react-router-dom";

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const ProductCardWrapper = styled.div`
  border-bottom: 0.1px solid red;
  height: 80px;
  display: flex;
  margin-top: 5px;
`;
const ProductImage = styled.img``;
const ProductDetails = styled.div`
  flex: 2;
`;
const ProductQandPrice = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const ProductCategory = styled.div``;
const Category = styled.div``;
const ProductCode = styled.div``;
const ProductQuantity = styled.div`
  flex: 1;
`;
const QuantityInput = styled.input`
  width: 50px;
`;
const ProductTotalCost = styled.div`
  flex: 1;
  text-align: right;
`;
const RemoveItem = styled.div`
  margin-left: 20px;
  color: red;
  cursor: pointer;
`;

const CartProductCard = ({ cartItem, onRemoveItemFromCart }) => {
  const {
    image,
    item_name,
    category_name,
    item_id,
    price,
    productCategory_name,
    quantity,
    size,
    totalCost,
  } = cartItem;
  return (
    <ProductCardWrapper>
      <ProductImage src={image}></ProductImage>
      <ProductDetails>
        <CardLink to={`/product/${item_id}/details`}>
          <Category>{category_name}</Category>
          <ProductCategory>
            {productCategory_name} - {item_name}
          </ProductCategory>
          <ProductCode>Product Code: {item_id}</ProductCode>
        </CardLink>
      </ProductDetails>
      <ProductQandPrice>
        <ProductQuantity>
          Quantity: <QuantityInput type="Number" value={quantity} readOnly={true} />
        </ProductQuantity>
        <ProductTotalCost>&#x20B9; {totalCost}</ProductTotalCost>
      </ProductQandPrice>
      <RemoveItem onClick={() => onRemoveItemFromCart()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </RemoveItem>
    </ProductCardWrapper>
  );
};
export default CartProductCard;
