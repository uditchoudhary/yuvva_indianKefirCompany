import BodyContainer from "../BodyContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CartPage = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
    
  }, [isLoggedIn, navigate]);

  return (
    <>
      <BodyContainer>
        <h3 className="page-title"> Cart </h3>
      </BodyContainer>
    </>
  );
};

export default CartPage;
