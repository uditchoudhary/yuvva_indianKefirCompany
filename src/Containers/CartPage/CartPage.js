import BodyContainer from "../BodyContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartData } from "../../Store/Actions/CartActions";
import CartProductCard from "./CartProductCard";
import styled from "styled-components";
import { device } from "../../styles/devices";

const ParentContainer = styled.div`
  display: flex;
  padding: 20px;
  @media ${device.laptop} {
    padding: 20px 0px;
  }
  @media ${device.tablet} {
    padding: 20px 0px;
    flex-direction: column;
  }
`;
const LeftContainer = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ProductWrapper = styled.div`
  flex: 3;
`;
const TotalItemsAndCostWrapper = styled.div`
  border: 1px solid #b60c20;
  height: 50px;
  padding: 10px;
  display: flex;
  flex: 1;
  margin-top: 30px;
`;
const TotalCost = styled.div`
  flex: 1;
  text-align: right;
`;
const TotalText = styled.div`
  flex: 2;
  text-align: center;
`;
const TotalItems = styled.div`
  flex: 1;
  text-align: right;
`;

const EmptyCart = styled.button`
  margin-top: 30px;
  width: max-content;
`;
const EmptyCartIconText = styled.span`
`;
const EmptyCartIcon = styled.svg`
`;
const RightContainer = styled.div`
  border-left: 0.1px solid green;
  flex: 1;
  padding: 20px;
`;

const CartPage = () => {
  const isLoggedIn = useSelector((state) => state.userState.isLoggedIn);
  const cartData = useSelector((state) => state.cartState.cartData);
  const cartFetchLoading = useSelector(
    (state) => state.cartState.cartFetchLoading
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    dispatch(getCartData());
  }, [isLoggedIn, navigate]);
  if (cartFetchLoading) {
    return (
      <BodyContainer>
        <div className="spinner">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
      </BodyContainer>
    );
  }
  return (
    <>
      <BodyContainer>
        <h3 className="page-title"> SHOPPING CART </h3>
        <div className="row">
          {cartData?.itemList ? (
            <ParentContainer>
              <LeftContainer className="col">
                <ProductWrapper>
                  {cartData.itemList.map((cartItem) => {
                    return (
                      <CartProductCard key={cartItem._id} cartItem={cartItem} />
                    );
                  })}
                </ProductWrapper>
                <TotalItemsAndCostWrapper>
                  <TotalText>Total</TotalText> <TotalItems>items</TotalItems>
                  <TotalCost>price</TotalCost>
                </TotalItemsAndCostWrapper>
                <EmptyCart className="btn btn-danger btn-sm">
                  <EmptyCartIcon
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
                  </EmptyCartIcon>
                  <EmptyCartIconText>Clear Cart</EmptyCartIconText>
                </EmptyCart>
              </LeftContainer>
              <RightContainer className="col">checkout</RightContainer>
            </ParentContainer>
          ) : (
            <h4>Empty cart - shop</h4>
          )}
        </div>
      </BodyContainer>
    </>
  );
};

export default CartPage;
