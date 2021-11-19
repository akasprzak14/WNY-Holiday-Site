import React from 'react';
import {QuestionForm} from './form';
import {SuccessContent, ErrorContent, PendingContent} from '../lib/components/form_results';

enum FormState {
  Unsubmitted,
  Sending,
  Contacted,
  Error
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
            onSend={() => setState(FormState.Sending)}
          />
        }
        {state === FormState.Contacted && <SuccessContent/>}
        {state === FormState.Error && <ErrorContent/>}
        {state === FormState.Sending && <PendingContent/>}
      </div>
    </>
  );
}
