import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

 const SERVICE_ID ="service_5bynzux"
 const TEMPLATE_ID = "template_xnqeq5n"
 const USER_ID = "3-B9l9XiDfnWM0kzS"

const Home = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
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
            Vi skapar allt från grunden och ni får möjlighet att få er hemsida just utifrån era önskemål.
          </p>
          <p className="header">
            Vi är låga i pris, ta kontakt med oss redan idag med era tankar och idéer så går vi vidare i processen och även ger er ett prisförslag!
            Vårt mål är att hålla priset så billigt som möjligt, därför sticker vi ut från mängden.
            <br/>
            <br/>
            Använd gärna vårt formulär nedan, så tar vi kontakt med er så snabbt vi kan med ett kostnadsfritt prisförslag!
          </p>
        </div>
      <div className="input-wrapper">
        {/* <form onSubmit={handleOnSubmit}>
          

          <input  className="contact-input" control={Input} type="text" placeholder="Namn..." required={true} />
         

          <input id='form-input-control-email' control={Input} name='user_email' className="contact-input" type="email" placeholder="Email..." required={true} />
          
         

          <input className="contact-input" control={Input} type="text" placeholder="Telefonnummer..." />
        
          <textarea className="contact-input contact-msg" control={Input} type="text" placeholder="Meddelande..." required={true} />
          
          <button type="submit" className="input-btn">Skicka</button>
        </form> */}
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='from_name'
            placeholder='Namn…'
            required
            icon='user circle'
            iconPosition='left'
          />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='from_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Telefonnummer'
          name='from_phone'
          placeholder='Telefonnummer…'
          
          icon='phone'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
      </div>
      </div>

    </div>
  );
};

export default Home;
