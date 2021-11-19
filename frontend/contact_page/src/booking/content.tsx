import React from 'react';
import {BookingForm} from './form';
import {SuccessContent, ErrorContent} from '../lib/components/form_results';

enum FormState {
  Unsubmitted,
  Contacted,
  Error
}

export const BookingContent: React.FC = (props) => {
  const [state, setState] = React.useState<FormState>(FormState.Unsubmitted);

  return (
    <>
      <h3 className='infoheader'>Book Us for Your Event</h3>
      <div className='formformat'>
        {state === FormState.Unsubmitted && 
          <BookingForm
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
