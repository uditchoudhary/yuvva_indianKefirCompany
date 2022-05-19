import BodyContainer from "../BodyContainer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductCategories } from "../../Store/Actions/productActions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productState.categories);
  useEffect(() => {
    dispatch(getProductCategories());
  }, []);
  return (
    <>
      <BodyContainer>
        <h3 className="page-title">Landing Page</h3>
        {categories &&
          categories.map((cat) => {
            const {
              productCategory_description,
              productCategory_id,
              productCategory_images,
              productCategory_name,
            } = cat;
            return (
              <p key={cat._id}>
                {productCategory_id} {productCategory_name} 
                {productCategory_description}{" "}
              </p>
            );
          })}
      </BodyContainer>
    </>
  );
};

export default LandingPage;
