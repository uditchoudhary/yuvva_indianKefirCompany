import BodyContainer from "../../Containers/BodyContainer";
const ProductCategoryCard = ({ productCategory }) => {
  const {
    _id,
    category_id,
    category_name,
    productCategory_id,
    productCategory_name,
    category_description,
    category_images,
  } = productCategory;
  return (
    <BodyContainer>
      <h1>Product Category Card for {category_name}</h1>
      <div key={_id}>
        <p>{category_id}</p>
        <p>{category_name}</p>
        <p>{productCategory_id}</p>
        <p>{productCategory_name}</p>
        <p>{category_description}</p>
      </div>
    </BodyContainer>
  );
};

export default ProductCategoryCard;
