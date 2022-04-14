import BodyContainer from "../BodyContainer";
import styled from "styled-components";

const ContactUsWrapper = styled.div`
  margin-left: 2em;
  margin-right: 2em;
`;

const ContactUs = () => {
  return (
    <>
      <BodyContainer>
        <ContactUsWrapper>
          <h3 className="page-title">Drop us a Message, Feedback or Review </h3>
          <div className="row g-3 mb-3">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="What's your full name?"
                  value=""
                />
                <label for="name">Full Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value=""
                />
                <label for="email">Email address</label>
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
                >
                  <option value="message" selected>
                    Message
                  </option>
                  <option value="review">Review</option>
                  <option value="feedback">Feedback</option>
                </select>
                <label for="reason">Select a reason:</label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder=""
                id="message"
              ></textarea>
              <label for="message">Leave a message here..</label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col text-center">
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </div>

        </ContactUsWrapper>
      </BodyContainer>
    </>
  );
};

export default ContactUs;
