import styled from "styled-components";

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
// category_name: "Probiotics";
// image: "https://i.ibb.co/jhBbr2x/fennel.png";
// item_id: 10203;
// item_name: "Fennel";
// price: 250;
// productCategory_name: "Kefir";
// quantity: 31;
// size: 330;
// _id: "62594a74484a4e95fb0f95fc";

const CartProductCard = ({ cartItem }) => {
  console.log(cartItem);
  const {
    image,
    item_name,
    category_name,
    item_id,
    price,
    productCategory_name,
    quantity,
    size,
  } = cartItem;
  return (
    <ProductCardWrapper>
      <ProductImage src={image}></ProductImage>
      <ProductDetails>
        <Category>{category_name}</Category>
        <ProductCategory>
          {productCategory_name} - {item_name}
        </ProductCategory>
        <ProductCode>Product Code: {item_id}</ProductCode>
      </ProductDetails>
      <ProductQandPrice>
        <ProductQuantity>
          <QuantityInput type="Number" value={quantity}/>
        </ProductQuantity>
        <ProductTotalCost>350</ProductTotalCost>
      </ProductQandPrice>
    </ProductCardWrapper>
  );
};
export default CartProductCard;
