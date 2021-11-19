import React from 'react';
import {ContactArea} from './contact_area';
import {ErrorHeader} from './error_header';

export const SuccessContent: React.FC = (props) => {
  return (
    <>
      <h3>Thank you!</h3>
      <p>Your request has been sent. We will get back to you as soon as possible.</p>
    </>
  );
}
  
export const ErrorContent: React.FC = (props) => {
  return (
    <>
      <ErrorHeader>An error has occurred</ErrorHeader>
      <p>We're sorry, we were unable to send your request. Please reach out directly:</p>
      <ContactArea>
        <a href="mailto:brandonkzlwsklczk@gmail.com">brandonkzlwsklczk@gmail.com</a>
        <br/>
        <a href="tel:17165489653">716-548-9653</a>
      </ContactArea>
    </>
  );
}
