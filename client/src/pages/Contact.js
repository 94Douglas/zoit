import React from "react";
import { Link } from "react-router-dom";
import linkedIn from "../assets/linkedin.png";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Me from "../assets/meTransparent.png";

const SERVICE_ID = "service_5bynzux";
const TEMPLATE_ID = "template_xnqeq5n";
const USER_ID = "3-B9l9XiDfnWM0kzS";

const Contact = () => {
  const GithubPortfolio = "https://github.com/94Douglas";
  const openLinkedIn = "https://www.linkedin.com/in/douglas-schoug-b1b720a1/";
  const openGithubNewTab = () => {
    window.open(GithubPortfolio, "_blank", "noopener,noreferrer");
  };
  const openLinkedInNewTab = () => {
    window.open(openLinkedIn, "_blank", "noopener,noreferrer");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="container">
      <div className="card-wrapper">
        <h2 className="noFont">Kontakta Oss</h2>

        <div className="card">
          <div className="img">
            <img
              className="icon"
              src={Me}
              style={{
                width: "77px",
                height: "77px",
              }}
            />
          </div>
          <h1>Douglas Schoug</h1>

          <h5>Douglas.schoug@gmail.com</h5>

          <p>
            <Link onClick={openGithubNewTab}>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                width="30"
                height="30"
              >
                <path
                  d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
                  fill="white"
                ></path>
              </svg>
            </Link>
            <Link onClick={openLinkedInNewTab}>
              <img
                className="icon"
                viewBox="0 0 1024 1024"
                src={linkedIn}
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              />
            </Link>
          </p>
          <h5 className="h5-mr-b">VD</h5>
        </div>
        <div className="input-wrapper">
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Namn"
              name="from_name"
              placeholder="Namn…"
              required
              icon="user circle"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="from_email"
              placeholder="Email…"
              required
              icon="mail"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Telefonnummer"
              name="from_phone"
              placeholder="Telefonnummer…"
              icon="phone"
              iconPosition="left"
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Meddelande"
              name="message"
              placeholder="Meddelande…"
              required
            />
            <Button type="submit" color="green">
              Skicka
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
