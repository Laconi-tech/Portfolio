import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactUs2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ot7levi', 'template_3ivi87e', e.target, 'DA0wQet_Akzp42uGA')
        .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
//       <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="your_name" name="user_name"/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" name="user_email" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Un commentaire ?">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          name="message"
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};





// function Mtest() {
//   return (
//     <>
//     <Form ref={form} onSubmit={sendEmail}>
//       <FloatingLabel
//         controlId="floatingInput"
//         label="Name"
//         className="mb-3"
//       >
//         <Form.Control type="text" placeholder="your_name" />
//       </FloatingLabel>

//       <FloatingLabel
//         controlId="floatingInput"
//         label="Email address"
//         className="mb-3"
//       >
//         <Form.Control type="email" placeholder="name@example.com" />
//       </FloatingLabel>

//       <FloatingLabel controlId="floatingTextarea2" label="Un commentaire ?">
//         <Form.Control
//           as="textarea"
//           placeholder="Leave a comment here"
//           style={{ height: "100px" }}
//         />
//       </FloatingLabel>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </>
//   );
// }

export default ContactUs2;
