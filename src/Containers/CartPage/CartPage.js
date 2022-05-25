import BodyContainer from "../BodyContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { authInstance as AUTH_API } from "../../services/axiosConfig";

const CartPage = () => {
  const isLoggedIn = useSelector((state) => state.userState.isLoggedIn);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState({});
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }

    AUTH_API.get(`/cart`).then((res) => {
      console.log(res);
      setCartData(res.data);
    });
  }, [isLoggedIn, navigate]);

  return (
    <>
      <BodyContainer>
        <h3 className="page-title"> Cart </h3>
        <div>
          {cartData.itemList &&
            cartData.itemList.map((cartItem) => {
              console.log(cartItem);
              const { name, quantity, id, size, price } = cartItem;
              return (
                <>
                  <p>{name}</p>
                  <p>{quantity}</p>
                  <p>{id}</p>
                  <p>{size}</p>
                  <p>{price}</p>
                </>
              );
            })}
        </div>
      </BodyContainer>
    </>
  );
};

export default CartPage;
