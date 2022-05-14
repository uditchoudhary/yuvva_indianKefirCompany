import BodyContainer from "../BodyContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { authInstance as AUTH_API } from "../../services/axiosConfig";
import styled from "styled-components";

const ProfileRow = styled.div`
  width: 80%;
  margin: auto;
`;

const ProfileCol = styled.div`
  display: block;
  padding: 50px;
  text-align: left;
  h5 {
    margin-bottom: 50px;
    font-family: "Recoleta Alt";
    font-size: 36px;
    line-height: 44px;
    color: #4d4d4d;
  }
  &.order-history {
    text-align: right;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 10px;
    background-color: #f2f2f2;
  }
`;

const StyledPara = styled.p`
  font-size: 16px;
  color: #4d4d4d;
  width: max-content;
  &.userName {
    font-family: "Recoleta Alt";
    font-size: 18px;
    line-height: 21px;
  }
`;

const StyledButton = styled.button`
  margin-right: 20px;
`;

const UserProfilePage = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [userProfileError, setUserProfileError] = useState();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  console.log(isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isLoggedIn);
    setIsLoading(true);
    if (!isLoggedIn) {
      navigate("/login");
    }
    AUTH_API.get(`/profile`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setIsLoading(false);
        if (res.data.address) setIsAddress(true);
      })
      .catch((err) => {
        console.log("ERROR ", err.response.status);
        if (err.response.status === 404) {
          setUserProfileError("User not valid. Login please");
        } else {
          setUserProfileError("Oooops...!!! Something Went Wrong");
        }
        setIsLoading(false);
      });
  }, [isAddress]);

  const handleAddress = (body) => {
    AUTH_API.post(`/updateAddress`, body)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setIsAddress(true);
      })
      .catch((err) => {
        console.log("ERROR ", err.response.status);
        if (err.response.status === 404) {
          setUserProfileError("User not valid. Login please");
        } else {
          setUserProfileError("Oooops...!!! Something Went Wrong");
        }
      });
  };
  if (isLoading) {
    return (
      <BodyContainer>
        <h3 className="page-title"> Profile page </h3>

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
    <>
      <BodyContainer>
        <h3 className="page-title"> My Profile </h3>
        {userProfileError && <p>{userProfileError}</p>}
        {user && (
          <>
            <ProfileRow className="row text-center">
              <ProfileCol className="col">
                <h5>Account Details:</h5>
                <StyledPara className="userName">{user.name}</StyledPara>
                <StyledPara>{user.email}</StyledPara>
                <input
                  disabled={true}
                  value={user.email}
                  style={{ border: "none", width: "100%" }}
                />
                <StyledPara>{user.phone}</StyledPara>
                <StyledPara>{user.isAdmin && "Admin"}</StyledPara>
                {isAddress && (
                  <ul>
                    <li>{user.address}</li>
                    <li>next line</li>
                    <li>next line</li>
                    <li>
                      <StyledButton
                        className="btn btn-link btn-sm"
                        onClick={() =>
                          handleAddress({ address: "S new address dgf" })
                        }
                      >
                        Edit Address
                      </StyledButton>
                    </li>
                  </ul>
                )}

                <StyledButton
                  className="btn btn-secondary"
                  onClick={() =>
                    handleAddress({
                      address: "240D Blockhouse Bay Road, Avondale",
                    })
                  }
                >
                  Update Details
                </StyledButton>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                >
                  Launch demo modal
                </button>

                <div
                  className="modal fade"
                  id="exampleModalCenter"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ProfileCol>
              <ProfileCol className="col order-history">
                Order History
              </ProfileCol>
            </ProfileRow>
          </>
        )}
      </BodyContainer>
    </>
  );
};

export default UserProfilePage;
