import React from 'react';
import {QuestionForm} from './form';
import {ContactArea} from '../lib/components/contact_area';
import {ErrorHeader} from '../lib/components/error_header';

enum FormState {
  Unsubmitted,
  Contacted,
  Error
}

const SuccessContent: React.FC = (props) => {
  return (
    <>
      <h3>Thank you!</h3>
      <p>Your question has been sent. We will get back to you as soon as possible.</p>
    </>
  );
}

const ErrorContent: React.FC = (props) => {
  return (
    <>
      <ErrorHeader>An error has occurred</ErrorHeader>
      <p>We're sorry, we were unable to send your question. Please reach out directly:</p>
      <ContactArea>
        <a href="mailto:brandonkzlwsklczk@gmail.com">brandonkzlwsklczk@gmail.com</a>
        <br/>
        <a href="tel:17165489653">716-548-9653</a>
      </ContactArea>
    </>
  );
}

export const QuestionContent: React.FC = (props) => {
  const [state, setState] = React.useState<FormState>(FormState.Unsubmitted);

  return (
    <>
      <h3 className='infoheader'>Ask Us Your Questions</h3>
      <div className='formformat'>
        {state === FormState.Unsubmitted && 
          <QuestionForm
            onSuccess={() => setState(FormState.Contacted)}
            onError={() => setState(FormState.Error)}
          />
        }
        {state === FormState.Contacted && <SuccessContent/>}
        {state === FormState.Error && <ErrorContent/>}
      </div>
      </>
  );
}
