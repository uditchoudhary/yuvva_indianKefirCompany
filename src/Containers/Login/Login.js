import styled from "styled-components";
import BodyContainer from "../BodyContainer";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogInOut from "../../Store/Actions/Actions";
import { useNavigate } from "react-router-dom";
import setCookies from "../../Utilities/Cookies/setCookies";
import { authInstance as AUTH_API } from "../../services/axiosConfig";

const ErrorMessage = styled.span`
  color: red;
`;

const Login = () => {
  const [isloading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn, navigate]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "user@test.com",
      password: "password",
    },
    mode: "onChange",
  });

  const onSubmit = (body) => {
    setIsLoading(true);
    AUTH_API.post(`/login`, body)
      .then((res) => {
        console.log("setting token", res.data.token);
        setCookies("ACCESS_TOKEN", res.data.token);
        dispatch(LogInOut(true));
        navigate("/profile");
        reset();
      })
      .catch((err) => {
        console.log("ERROR ", err.response.status);
        if (err.response.status === 500) {
          setLoginError("Something went wrong");
        } else {
          setLoginError("Invalid email or password");
        }
      });
    setIsLoading(false);
  };

  return (
    <>
      <BodyContainer>
        <h3 className="page-title"> Login or Register here </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3 mb-3">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  {...register("email", {
                    required: "Please enter email you registered with!",
                  })}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}

                <label htmlFor="email">Email Address</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                />
                {errors.name && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col text-center">
              {loginError && (
                <p>
                  <ErrorMessage>{loginError}</ErrorMessage>
                </p>
              )}
              <button type="submit" className="btn btn-primary ">
                {isloading ? "Loging in..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
        <p>Admin: admin@test.com / password</p>
        <p>User: user@test.com / password</p>
      </BodyContainer>
    </>
  );
};

export default Login;
