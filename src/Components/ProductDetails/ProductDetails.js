import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BodyContainer from "../../Containers/BodyContainer";
import { instance as API } from "../../services/axiosConfig";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LeftContainer = styled.div`
  // border: 1px solid black;
  // height: 50vh;
  padding: 40px;
`;
const RightContainer = styled.div`
  border: 1px solid black;
  height: 50vh;
  padding: 40px;
`;

const CarouselImage = styled.img`
  max-width: 20%;
  height: auto;
`;

const ProductDetails = () => {
  const params = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [productDetails, setProductDetails] = useState({});
  const [fetchError, setFetchError] = useState("");
  const productId = params.id;

  const {
    item_name,
    item_images,
    productCategory_name,
    category_name,
    item_description,
  } = productDetails;

  useEffect(() => {
    setIsloading(true);
    API.get(`/items/${productId}`)
      .then((res) => {
        setProductDetails(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        setFetchError(err);
        setIsloading(false);
      });
  }, []);
  if (isLoading) {
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
    <BodyContainer>
      {fetchError ? (
        <h5>Something went wrong...</h5>
      ) : (
        <div className="row">
          {console.log(productDetails)}
          <LeftContainer className="col">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              interval={5000}
              showStatus={false}
              showIndicators={false}
            >
                {item_images.map((item) => {
                  return (<div><CarouselImage src={item_images[0].image_url} /></div>);
                } )}
              {/* <div>
                <CarouselImage src={item_images[0].image_url} />
              </div> */}
            </Carousel>
          </LeftContainer>
          <RightContainer className="col">
            <div className="row">
              <div className="col"> {category_name} </div>
              <div className="col"> {productCategory_name} </div>
              <div className="col">{item_name}</div>
            </div>
            <div className="row">
              <div className="col">Add cart</div>
              <div className="col">Description</div>
            </div>
          </RightContainer>
        </div>
      )}
    </BodyContainer>
  );
};

export default ProductDetails;
