import BodyContainer from "../BodyContainer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartData } from "../../Store/Actions/CartActions";
import CartProductCard from "./CartProductCard";

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
        <h3 className="page-title"> Cart </h3>
        <div>
          {cartData?.itemList &&
            cartData.itemList.map((cartItem) => {
              const { item_name, quantity, id, size, price } = cartItem;
              return (
                <>
                  <p>
                    {item_name}:{quantity}:{id}:{size}:{price}
                  </p>
                  <CartProductCard cartItem={cartItem} />
                </>
              );
            })}
        </div>
      </BodyContainer>
    </>
  );
};

export default CartPage;
