import {BookingContent} from './booking/content';
import {QuestionContent} from './question/content';

function ContactForms() {
  return (
    <div className='row nomargin'>
      <div className='col-xs-12 col-md-6'>
        <BookingContent />
      </div>
      <div className='col-xs-12 col-md-6'>
        <QuestionContent/>
      </div>
    </div>
  );
}

export default ContactForms;
