import BodyContainer from "../BodyContainer";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Store/Actions/productActions";

const CategoryRender = ({ direction, category }) => {
  const { category_name, category_images, category_description, category_id } =
    category;
  const navigate = useNavigate();
  const handleShopNowClick = () => {
    navigate(`/${category_name}`);
  };

  return (
    <div className="container col-xxl-8">
      <div
        className={`row flex-lg-row${
          direction === 1 ? "-reverse" : ""
        } align-items-center g-5 pb-5`}
      >
        <div className="col-10 col-sm-8 col-lg-4">
          <img
            src="/static/images/probiotics.webp"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>
        <div className="col-lg-8">
          <h1 className="display-6 fw-bold lh-1 mb-3">{category_name}</h1>
          <p className="lead text-justify">{category_description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-sm px-4 me-md-2"
              onClick={() => handleShopNowClick()}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productState.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <BodyContainer>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          interval={5000}
          showStatus={false}
          showIndicators={false}
        >
          {/* // List of banners */}
        </Carousel>
        {categories &&
          categories.map((cat, index) => {
            const {
              category_description,
              category_id,
              category_images,
              category_name,
            } = cat;
            return (
              <CategoryRender key={index} direction={index} category={cat} />
            );
          })}
      </BodyContainer>
    </>
  );
};

export default LandingPage;
