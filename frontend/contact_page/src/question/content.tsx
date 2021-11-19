import React from 'react';
import {QuestionForm} from './form';

enum FormState {
  Unsubmitted,
  Contacted,
  Error
}

const SuccessContent: React.FC = (props) => {
  return (
    <p>Success</p>
  );
}

const ErrorContent: React.FC = (props) => {
  return (
    <p>Error</p>
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
