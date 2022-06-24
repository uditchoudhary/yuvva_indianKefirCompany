import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  justify-content: center;
  height: 100%;
`;

const UserDetails = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;
const UserName = styled.div`
  font-size: 24px;
`;
const UserAddress = styled.div`
  font-size: 18px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const TotalItems = styled.div`
  border: 1px solid black;
  width: 100px;
  padding: 2px;
  text-align: center;
`;

const TotalItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  //   padding-right: 40px;
  padding-bottom: 15px;
  //   border-bottom: 0.1px solid black;
`;

const TotalAmountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  border-bottom: 0.1px solid black;
`;

const PayTmWrapper = styled.button`
  text-align: center;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    margin-right: 10px;
  }
`;

const ChangeAddress = styled.button`
  margin-left: 100px;
  width: max-content;
`;

const UserEmail = styled.div``;
const UserPhone = styled.div``;
const CheckoutComponent = () => {
  const cartTotalItems = useSelector((state) => state.cartState.cartTotalItems);
  const cartTotalCost = useSelector((state) => state.cartState.cartTotalCost);
  const navigate = useNavigate();
  const handleModifyAddress = () => {
    navigate("/profile");
  };
  const data = {
    id: "1234",
    cost: 150,
    name: "cust12",
    email: "test@abc.com",
    phone: "22001203",
    rest_name: "RestName",
  };
  const paytmPayment = () => {
    // api to add order
    // axios
    //   .post("http://localhost:7001/payment", data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  return (
    <Wrapper>
      <UserDetails>
        <UserName>Udit Choudhary</UserName>
        <UserEmail>user@test.com</UserEmail>
        <UserPhone>0226911020</UserPhone>
        <UserAddress>
          <sup>
            <b>Address:</b>
          </sup>
          <span>240D Blockhouse Bay Road, Avondale</span>
          <span>Auckland, New Zealand</span>
          <span>0600</span>
          <ChangeAddress
            className="btn btn-sm btn-danger"
            onClick={() => handleModifyAddress()}
          >
            Modify
          </ChangeAddress>
        </UserAddress>
      </UserDetails>
      <TotalItemsWrapper>
        <span>Total Items:</span> <TotalItems>{cartTotalItems}</TotalItems>
      </TotalItemsWrapper>
      <TotalAmountWrapper>
        <span>Total Cost:</span>{" "}
        <TotalItems>&#x20B9; {cartTotalCost}</TotalItems>
      </TotalAmountWrapper>
      <form action="http://localhost:6001/api/payment" method="POST">
        <input type="hidden" name="cost" value="150.00" />
        <input type="hidden" name="id" value="1234" />
        <input type="hidden" name="name" value="cust12" />
        <input type="hidden" name="email" value="test@abc.com" />
        <input type="hidden" name="phone" value="22001203" />
        <input type="hidden" name="rest_name" value="RestName" />
        <PayTmWrapper className="btn btn-sm btn-primary" onClick={paytmPayment}>
          <span>Pay with</span>
          <svg
            enable-background="new 0 0 512 512"
            id="Layer_1"
            version="1.1"
            width="60px"
            viewBox="0 0 512 512"
            //   xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            //   xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                d="M393.8,200.9c2-1.6,3-2.4,4-3.2c13.9-11.8,31.7-10.5,43.6,3.5c1.2,1.4,1.8,1.5,3,0.3   c0.8-0.9,1.7-1.6,2.5-2.5c9.3-9.1,21.6-11.8,33.1-6.7c12.1,5.4,18.6,14.9,18.7,28.2c0.2,28.7,0.1,57.3,0.1,86   c0,10.2-6.3,16.6-16.4,16.6c-4,0-8-0.3-12,0.1c-4.1,0.4-5.3-0.9-5.3-5.2c0.2-28,0.1-56,0.1-84c0-1.2,0-2.3,0-3.5   c-0.1-6.5-2.7-9.2-8.9-9.5c-5.6-0.3-9.5,3.1-10.1,8.8c-0.1,1.3,0,2.7,0,4c0,24.2,0,48.3,0,72.5c0,10.6-6.1,16.8-16.7,16.7   c-5.4-0.1-12.7,2.4-15.8-1.1c-2.7-3-0.9-10.1-0.9-15.4c0-24.8,0-49.7,0-74.5c0-8.8-5.7-13.3-13.1-10.3c-4.6,1.9-6.1,5.6-6.1,10.4   c0.1,23.2,0,46.3,0,69.5c0,1.8,0,3.7,0,5.5c-0.3,9.7-6.5,15.8-16.1,15.9c-4,0.1-8-0.3-12,0.1c-4.3,0.4-5.6-0.8-5.5-5.4   c0.2-39.3,0.1-78.6,0.1-118c0-1.7,0.1-3.3,0-5c-0.2-2.2,0.7-2.9,2.9-2.9c9.2,0.1,18.3,0.1,27.5,0c2.3,0,3.4,0.6,3.2,3.1   C393.5,196.7,393.7,198.3,393.8,200.9z"
                fill="#02B9EF"
              />
              <path
                d="M181.8,255.1c0,13.7,0,27.3,0,41c-0.1,17.8-9.4,27-27.2,27.1c-7.8,0-15.7,0.1-23.5,0   c-15.8-0.2-27.4-10.7-28.2-26.5c-0.6-11.3-0.7-22.7-0.1-34c0.8-16.2,13.2-27.6,29.6-27.8c4.3-0.1,8.7,0,13,0   c4.2-0.1,5.8-2.5,5.7-6.5c0-4-1.8-5.8-5.8-5.6c-4.5,0.1-9,0.1-13.5,0c-11-0.2-17.1-6.2-17-17c0-4.4-2-10.3,0.9-12.9   c2.5-2.2,8.2-0.8,12.5-0.8c11.2-0.1,22.3,0,33.5,0c11.9,0,20,8.1,20.1,20.1C181.9,226.4,181.8,240.8,181.8,255.1z M151.2,277.8   c0-1.7,0-3.3,0-5c0-10.2,0-10.2-10.2-9.8c-5.1,0.2-7.9,2.8-8,8.1c-0.1,4.2-0.1,8.3,0,12.5c0.1,7.2,3.3,9.1,13.7,9.4   c7.7,0.2,3.8-5.2,4.5-8.2C151.6,282.6,151.1,280.1,151.2,277.8z"
                fill="#06306F"
              />
              <path
                d="M270.8,244.2c0,15.3,0.2,30.7-0.1,46c-0.2,11.8-3,22.5-14.4,28.8c-4.6,2.5-9.6,3.9-14.8,4   c-11.5,0.2-23,0-34.5,0.2c-2.8,0-3.4-1-3.3-3.5c0.2-4.2-0.1-8.3,0.1-12.5c0.2-8,6.3-14.1,14.3-14.4c5.2-0.2,10.3-0.1,15.5,0   c4.2,0,6.5-1.7,6.5-6.2c0-4.6-2.2-6.2-6.4-6.3c-7-0.2-14,0.8-20.9-1.2c-11.9-3.5-20.6-13.4-20.9-25.7c-0.6-19.5-0.2-39-0.3-58.5   c0-2.2,0.7-2.9,2.9-2.8c8.2,0.1,16.3,0.2,24.5,0c3.6-0.1,3.1,1.9,3.1,4.1c0,14.7,0,29.3,0,44c0,6.4,3,9.8,8.6,10   c6.6,0.2,9.5-2.5,9.5-9.2c0-14.8,0.1-29.7-0.1-44.5c0-3.5,0.9-4.5,4.4-4.4c7.3,0.3,14.7,0.4,22,0c4-0.2,4.6,1.3,4.5,4.8   C270.7,212.6,270.8,228.4,270.8,244.2z"
                fill="#06306F"
              />
              <path
                d="M16,266.9c0-16.3,0-32.7,0-49c0-16,9.8-26,25.9-25.8c10.5,0.1,21-1.2,31.4,0.8   c13.3,2.6,21.7,12.9,21.8,26.6c0.1,14.5,0,29,0,43.5c0,18.2-10.7,29.3-28.9,29.8c-5.5,0.2-11,0.1-16.5,0c-2.5-0.1-3.6,0.7-3.5,3.4   c0.2,4,0.1,8,0,12c-0.2,8.6-6.3,14.8-14.8,14.9c-5,0.1-11.3,2.1-14.5-0.8c-3-2.7-0.8-9.1-0.9-13.9C15.9,294.6,16,280.7,16,266.9z    M46.2,242.4c0,3.2,0,6.3,0,9.5c0,11.3,0,11.3,11.3,10.3c4.9-0.4,7.2-2.8,7.3-7.7c0.1-5.6-0.2-11.3,0.1-16.9   c0.6-16.2-2.4-14.6-15.6-14.7c-2.4,0-3.2,0.7-3.2,3.1C46.3,231.4,46.2,236.9,46.2,242.4z"
                fill="#06306F"
              />
              <path
                d="M299.1,267.1c0-13.3-0.1-26.7,0.1-40c0-3.1-0.7-4.4-4.1-4.3c-4.5,0.2-10.5,1.5-13-0.7   c-3.1-2.9-0.7-9.1-1.1-13.9c0-0.3,0-0.7,0-1c0-4.7-1.5-10.2,0.5-13.7c2-3.5,8.1-1.3,12.4-2.4c8.5-2.2,14.9-7.1,20.1-13.9   c3.6-4.6,8.1-7.9,13.9-9c3.1-0.6,5-0.2,4.8,3.8c-0.3,5.6,0,11.3-0.1,17c-0.1,2.4,0.8,3.2,3.2,3.1c4-0.1,8,0.1,12-0.1   c2.4-0.1,3.2,0.8,3.1,3.2c-0.1,8.2-0.1,16.3,0,24.5c0,2.3-0.6,3.5-3.1,3.2c-0.5-0.1-1,0-1.5,0c-4.4,0.4-10.5-2-12.8,1   c-2.2,2.8-0.8,8.6-0.8,13.1c0,27.2-0.1,54.3,0.1,81.5c0,3.8-1,5-4.8,4.7c-3.6-0.3-7.3,0-11-0.1c-10.8-0.4-17.9-7.7-17.9-18.5   C299.1,292.1,299.1,279.6,299.1,267.1z"
                fill="#02B9EF"
              />
            </g>
          </svg>
        </PayTmWrapper>
      </form>
    </Wrapper>
  );
};

export default CheckoutComponent;
