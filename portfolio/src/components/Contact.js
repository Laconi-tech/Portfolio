import React, { useState } from "react";
import styled from "styled-components";

const FormStyles = styled.form`
width: 100%;
.form-group{
    width: 100%;
}
`;

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
      <div>
        <FormStyles>
        <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Your email
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </FormStyles>
      </div>
    );
}

export default Contact;