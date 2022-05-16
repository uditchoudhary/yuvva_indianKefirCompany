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
  margin: 20px 0px 20px 20px;
  border: none;
`;

const AddressFormUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin-left: 0;
    input {
      border: none;
      border-bottom: 1px solid black;
      &.submitButton {
        border: none;
        margin-left: 150px;
        margin-top: 10px;
      }
    }
  }
`;

const UserProfilePage = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [userProfileError, setUserProfileError] = useState();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [enableAddressOption, setEnableAddressOption] = useState(false);

  const [addressInputs, setAddressInputs] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    if (!isLoggedIn) {
      navigate("/login");
    }
    AUTH_API.get(`/profile`)
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
        if (res.data.address) setIsAddress(true);
      })
      .catch((err) => {
        console.log("ERROR ", err.response.status);
        setIsLoading(false);

        if (err.response.status === 404) {
          setUserProfileError("User not valid. Login please");
        } else {
          setUserProfileError("Oooops...!!! Something Went Wrong");
        }
      });
  }, []);

  const handleAddressChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddressInputs((values) => ({ ...values, [name]: value }));
  };

  const handleAddress = (e, body) => {
    e.preventDefault();
    console.log(`Body: ${body}`);
    AUTH_API.post(`/updateAddress`, body)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setIsAddress(true);
        setEnableAddressOption(false);
      })
      .catch((err) => {
        console.log("ERROR ", err.response.status);
        if (err.response.status === 404) {
          setUserProfileError("User not valid. Login please");
        } else {
          setUserProfileError("Oooops...!!! Something Went Wrong");
        }
        setEnableAddressOption(false);
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
                {/* <input
                  disabled={false}
                  value={user.email}
                  style={{ border: "none", width: "100%" }}
                /> */}
                <StyledPara>{user.phone}</StyledPara>
                <StyledPara>{user.isAdmin && "Admin"}</StyledPara>
                {isAddress ? (
                  !enableAddressOption ? (
                    <AddressFormUl>
                      <li>{user.address.line1}</li>
                      <li>{user.address.line2}</li>
                      <li>{user.address.line3}</li>
                      <li>
                        {user.address[0]}
                        <StyledButton
                          onClick={() => setEnableAddressOption(true)}
                        >
                          Edit
                        </StyledButton>
                      </li>
                    </AddressFormUl>
                  ) : (
                    <AddressFormUl>
                      <form>
                        <li>
                          <label>
                            <input
                              type="text"
                              name="line1"
                              value={addressInputs.line1 || user.address.line1}
                              onChange={handleAddressChange}
                            />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="text"
                              name="line2"
                              value={addressInputs.line2 || user.address.line2}
                              onChange={handleAddressChange}
                            />
                          </label>
                        </li>
                        <li>
                          <label>
                            <input
                              type="text"
                              name="line3"
                              value={addressInputs.line3 || user.address.line3}
                              onChange={handleAddressChange}
                            />
                          </label>
                        </li>
                        <li>
                          <input
                            type="button"
                            value="Submit"
                            className="submitButton"
                            onClick={(event) =>
                              handleAddress(event, {
                                address: {
                                  line1: addressInputs.line1,
                                  line2: addressInputs.line2,
                                  line3: addressInputs.line3,
                                },
                              })
                            }
                          />
                        </li>
                      </form>
                    </AddressFormUl>
                  )
                ) : (
                  <>Add Address</>
                )}

                <StyledButton
                  className="btn btn-secondary"
                  onClick={(event) =>
                    handleAddress(event, {
                      address: {
                        line1: "some address 1",
                        line2: "Some address 2",
                        line3: "some address 3",
                      },
                    })
                  }
                >
                  Update Details
                </StyledButton>
                {/* <StyledButton
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                >
                  Launch demo modal
                </StyledButton> */}

                {/* <div
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
                </div> */}
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
