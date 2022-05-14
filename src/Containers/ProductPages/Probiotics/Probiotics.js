import { useEffect, useState } from "react";
import BodyContainer from "../../BodyContainer";
import axios from "axios";
import ProductCategoryCard from "../../../Components/ProductCategoryCard/ProductCategoryCard";

const Probiotics = () => {
  const [proboiticsProducts, setProbioticsProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    axios.get(`${process.env.REACT_APP_API}/probiotics`).then((res) => {
      setProbioticsProducts(res.data);
      setIsloading(false);
    });
  }, []);
  return (
    <>
      <BodyContainer>
        <h3 className="page-title"> Probiotics </h3>
        {isLoading ? (
          <div className="spinner">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem"}}
              role="status"
            >
              <span class="sr-only"></span>
            </div>
          </div>
        ) : (
          <div>
            {proboiticsProducts.map((proboiticsProduct) => {
              return (
                <div key={proboiticsProduct._id}>
                  <ProductCategoryCard productCategory={proboiticsProduct} />
                </div>
              );
            })}
          </div>
        )}
      </BodyContainer>
    </>
  );
};

export default Probiotics;
