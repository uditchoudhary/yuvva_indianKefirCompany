import BodyContainer from "../BodyContainer";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const ContactUsWrapper = styled.div`
  margin-left: 2em;
  margin-right: 2em;
`;

const ErrorMessage = styled.span`
  color: red
`

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      reason: "message",
      message: "",
      reviewItem: "",
    },
  });

  const watchReason = watch(["reason","reviewItem"]);

  const onSubmit = (data) => {
    const { name, email, reason, message, reviewItem } = data;
    alert(`Name: ${name}, Email: ${email}, Reason: ${reason}, ReviewItem: ${reviewItem} , Message: ${message}`)
  };

  return (
    <>
      <BodyContainer>
        <ContactUsWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="page-title">
              Drop us a Message, Feedback or Review{" "}
            </h3>
            <div className="row g-3 mb-3">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="What's your full name?"
                    {...register("name", {
                      required: "Please enter your full name",
                      minLength: {
                        value: 4,
                        message: "Please use 4 characters or more",
                      },
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                  />
                  {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                  )}
                  <label htmlFor="name">Full Name</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Where do we reply back ?",
                    })}
                  />
                  {errors.email && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}

                  <label htmlFor="email">Email address</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="reason"
                    aria-label="select reason"
                    {...register("reason", {
                      required: "Please select a reason to message",
                    })}
                  >
                    <option value="message">Message</option>
                    <option value="review">Review</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  {errors.reason && (
                    <ErrorMessage>{errors.reason.message}</ErrorMessage>
                  )}
                  <label htmlFor="reason">Select a reason:</label>
                </div>
              </div>
            </div>
            {/*
            Watching reason starts here
             */}
            {watchReason[0] === "review" && (
              <div className="row mb-3">
                <div className="col-md">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="reviewItem"
                      aria-label="select item to review"
                      {...register("reviewItem", {
                        required: "Please select an item to review",
                      })}
                    >
                      {/* Hardcoding values here at the moment but should fetch from the server */}
                      <option value="kombucha">Kombucha</option>
                      <option value="kefir">Kefir</option>
                      <option value="sauerkraut">Sauerkraut</option>
                    </select>
                    {errors.reviewItem && (
                      <ErrorMessage>{errors.reviewItem.message}</ErrorMessage>
                    )}
                    <label htmlFor="reviewItem">Select item:</label>
                  </div>
                </div>
              </div>
            )}

            <div className="row mb-3">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder=""
                  id="message"
                  {...register("message", {
                    required: "Please enter what you want to share",
                  })}
                ></textarea>
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
                <label htmlFor="message">{watchReason[0] === "review"? `Please write down review of ${watchReason[1]}` : "Leave a message here.."}</label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col text-center">
                <button type="submit" className="btn btn-primary ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </ContactUsWrapper>
      </BodyContainer>
    </>
  );
};

export default ContactUs;
