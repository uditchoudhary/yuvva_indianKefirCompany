import BodyContainer from "../BodyContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { authInstance as AUTH_API } from "../../services/axiosConfig";

const UserProfilePage = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [userProfileError, setUserProfileError] = useState();
  const [user, setUser] = useState();
  console.log(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login");
    }
     AUTH_API.get(`/profile`)
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => {
          console.log("ERROR ", err.response.status);
          if (err.response.status === 404) {
            setUserProfileError("User not valid. Login please");
          } else {
            setUserProfileError("Oooops...!!! Something Went Wrong");
          }
        });
  }, [isLoggedIn]);
const handleAddress = () => {
  AUTH_API.post(`/updateAddress`, {"address":"S new address dgf"})
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => {
          console.log("ERROR ", err.response.status);
          if (err.response.status === 404) {
            setUserProfileError("User not valid. Login please");
          } else {
            setUserProfileError("Oooops...!!! Something Went Wrong");
          }
        });
}
  return (
    <>
      <BodyContainer>
        <h3 className="page-title"> Profile page </h3>
        {userProfileError && <p>{userProfileError}</p>}
        {user && (
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.isAdmin && "Admin user"}</p>
            <p>{user.address ? `Address found ${user.address}- Edit Address`:"Add Address"}</p>
            <button onClick={() => handleAddress()}> Add or Edit Address </button>
          </div>
        )}
      </BodyContainer>
    </>
  );
};

export default UserProfilePage;
