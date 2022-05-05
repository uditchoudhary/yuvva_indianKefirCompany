import BodyContainer from "../../BodyContainer";
import axios from "axios";
import ProductCategoryCard from "../../../Components/ProductCategoryCard/ProductCategoryCard";
import { useEffect, useState } from "react";

const Organics = () => {
  const [organicsProducts, setOrganicsProducts] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    axios.get(`${process.env.REACT_APP_API}/organics`).then((res) => {
      setOrganicsProducts(res.data);
    });
    setIsloading(false);
  }, []);
  return (
    <>
      <BodyContainer>
        <h3 className="page-title"> Organics </h3>
        {isLoading ? (
          <h2>loading....</h2>
        ) : (
          <div>
            {organicsProducts.map((organicsProduct) => {
              return (
                <div key={organicsProduct._id}>
                  <ProductCategoryCard productCategory={organicsProduct} />
                </div>
              );
            })}
          </div>
        )}
      </BodyContainer>
    </>
  );
};

export default Organics;
