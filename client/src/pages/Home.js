import SendRoundedIcon from "@mui/icons-material/SendRounded";
import emailjs from "emailjs-com";
import React from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";
import Swal from "sweetalert2";

const REACT_APP_SERVICE_ID = "service_5bynzux";
const REACT_APP_TEMPLATE_ID = "template_xnqeq5n";
const REACT_APP_USER_ID = "3-B9l9XiDfnWM0kzS";

const Home = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        e.target,
        REACT_APP_USER_ID
      )
      .then(
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
    <div className="scroll">
      <div className="container">
        <div className="card-wrapper ">
          <p className="header">
            Är du och ditt företag i stort behov av en hemsida?
          </p>
          <p className="header">
            Vi på ZeroOne IT finns här för just dig och din framtida hemsida.
            <br />
            Vi skapar allt från grunden och ni får möjlighet att få er hemsida
            just utifrån era önskemål.
          </p>
          <p className="header">
            Vi är låga i pris, ta kontakt med oss redan idag med era tankar och
            idéer så går vi vidare i processen och även ger er ett prisförslag!
            Vårt mål är att hålla priset så billigt som möjligt, därför sticker
            vi ut från mängden.
            <br />
            <br />
            Använd gärna vårt formulär nedan, så tar vi kontakt med er så snabbt
            vi kan med ett kostnadsfritt prisförslag utifrån er idé!
          </p>
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
              Skicka <SendRoundedIcon style={{ color: "#E5F6E9" }} />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;
