import {BookingForm} from './components/booking';
import {QuestionForm} from './components/question';

function ContactForms() {
  return (
    <div className='row nomargin'>
      <div className='col-xs-12 col-md-6'>
        <BookingForm />
      </div>
      <div className='col-xs-12 col-md-6'>
        <QuestionForm/>
      </div>
    </div>
  );
}

export default ContactForms;
