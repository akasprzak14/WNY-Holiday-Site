import React from 'react';
import {QuestionForm} from './form';
import {SuccessContent, ErrorContent} from '../lib/components/form_results';

enum FormState {
  Unsubmitted,
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
          />
        }
        {state === FormState.Contacted && <SuccessContent/>}
        {state === FormState.Error && <ErrorContent/>}
      </div>
      </>
  );
}
