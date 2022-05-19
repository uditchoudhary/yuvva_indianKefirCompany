import BodyContainer from "../BodyContainer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../Store/Actions/productActions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  useEffect(() => {
    dispatch(getProductCategories);
  }, [dispatch]);
  return (
    <>
      <BodyContainer>
        <h3 className="page-title">Landing Page</h3>
      </BodyContainer>
    </>
  );
};

export default LandingPage;
