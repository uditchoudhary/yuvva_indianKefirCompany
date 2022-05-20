import styled from "styled-components";

const CardPrice = styled.div`
  margin-top: 7px;
  color: #569ea2;
`;

const CardWrapper = styled.div`
  min-width: 20vw;
  font-family: "DIN Neuzeit Grotesk", sans-serif;
  padding: 20px;
  text-align: center;
  &:hover {
    border: 0;
    box-shadow: 6px 7px 18px 3px rgba(0, 0, 0, 0.43);
    -webkit-box-shadow: 6px 7px 18px 3px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 6px 7px 18px 3px rgba(0, 0, 0, 0.43);
  }
`;

const CardCategory = styled.div`
  margin-top: 25px;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 3px;
`;

const CardButton = styled.button`
  position: relative;
  border: none;
  transition: 0.4s ease-in;
  z-index: 1;
  width: 100%;
  height: 30px;
  &:before {
    position: absolute;
    content: "";
    z-index: -1;
  }
  &:after {
    position: absolute;
    content: "";
    z-index: -1;
  }
  &:hover {
    box-shadow: inset -12em 0 0 0 #fcc7b7, inset 10.5em 0 0 0 #fcc7b7;
  }
`;

const StyledImage = styled.img`
  width: auto;
  height: 200px;
`;

const SizeDropdown = styled.select`
  width: 80px;
  margin-left: 10px;
  width: max-content;
`;

const SizeMlSpan = styled.span`
  margin-left: 2px;
`;

const ProductCard = ({ product }) => {
  const { item_images, item_size_price_ml, item_name, category_name } = product;

  return (
    <>
      <CardWrapper>
        <div className="card-image d-flex justify-content-center">
          <StyledImage
            src={item_images[0][Object.keys(item_images[0])[0]]}
            alt={item_images[0][Object.keys(item_images[0])[1]]}
          />
        </div>
        <CardCategory className="d-flex justify-content-center my-2">
          {category_name}
        </CardCategory>
        <div className="card-name  d-flex justify-content-center ">
          {item_name}
        </div>
        {/* <div className="card-price  d-flex justify-content-center ">
          Starts from {product.price}
        </div> */}

        <div className="d-flex justify-content-center">
          {item_size_price_ml.length === 1 ? (
            <>
              <div>
                Size: {item_size_price_ml[0].size}
                <SizeMlSpan>ml</SizeMlSpan>
              </div>
            </>
          ) : (
            <>
              <SizeDropdown name="size" id="size" className="size-dropdown">
                
                {item_size_price_ml.map((i, key) => {
                  return (
                    <>
                      <option key={key} value={i.size}>
                        {i.size}
                      </option>
                    </>
                  );
                })}
              </SizeDropdown>
              <SizeMlSpan>ml</SizeMlSpan>
            </>
          )}
        </div>
        <CardPrice>Rs. {item_size_price_ml[0].price}</CardPrice>

        <div className="card-cart d-flex justify-content-center mt-3 ">
          <CardButton>Add to Cart</CardButton>
        </div>
      </CardWrapper>
    </>
  );
};

export default ProductCard;
