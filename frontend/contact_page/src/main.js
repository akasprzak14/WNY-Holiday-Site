import {BookingForm} from './booking/form';
import {QuestionContent} from './question/content';

function ContactForms() {
  return (
    <div className='row nomargin'>
      <div className='col-xs-12 col-md-6'>
        <BookingForm />
      </div>
      <div className='col-xs-12 col-md-6'>
        <QuestionContent/>
      </div>
    </div>
  );
}

export default ContactForms;
