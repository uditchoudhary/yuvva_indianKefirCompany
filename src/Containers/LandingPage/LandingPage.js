import BodyContainer from "../BodyContainer";
import styled from "styled-components";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Store/Actions/productActions";

const KombuchaGreet = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 5px solid rgb(32, 56, 58);
  background-color: #65746c;
  height: 20vh;
  position: relative;
  font-family: Gilroy;
  color: #98ffc5;
`;

const LandingPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productState.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <BodyContainer>
        <KombuchaGreet className="d-flex flex-column align-items-center justify-content-center">
          <h2>YUUVA KAMBUCHA</h2>
          <h4>Proudly Brewed in Delhi, India</h4>
        </KombuchaGreet>

        {categories &&
          categories.map((cat) => {
            const {
              category_description,
              category_id,
              category_images,
              category_name,
            } = cat;
            return (
              <p key={cat._id}>
                {category_id} {category_name}
                {category_description}
              </p>
            );
          })}
      </BodyContainer>
    </>
  );
};

export default LandingPage;
