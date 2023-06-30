import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l8gt0pa', 'template_2p6ob6f', form.current, '34uT-EcuAvUdIaDar')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Wrapper id='contact'>
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
            <input className='fullname' type="text" name="user_name" placeholder='Full Name' />
            <input className='email' type="email" name="user_email" placeholder='Email' />
            <textarea className='text' name="message" placeholder="Hey Nezam! I'd like to hire you!"/>
            <input type="submit" value="Send" />
        </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`

    background-color:#073763;

    h1{
        text-align:center;
        font-family:'Diphylleia';
        color:white;
    }
    form{
        display:flex;
        flex-direction:column;
        align-items:center;

        input{
            width:40vw;
            height:6vh;
            margin:5px;
        }

        .fullname{
            margin-bottom:-5px;
        }

        .email{
            margin-bottom:0px;
        }

        .text{
            margin-bottom:-5px;
        }

        textarea{
            width:40vw;
            height:10vh;
        }
    }


@media(min-width:768px) and (max-width:991px){

    width:700px;

}




@media(min-width:576px) and (max-width:767px){

width:600px;

}



@media(max-width:575px){

    width:600px;

}
`;

export default ContactUs
