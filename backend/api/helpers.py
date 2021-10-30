from typing import Text
import smtplib
from email.message import EmailMessage

MESSAGE_TEMPLATE = """
Contact form submitted:

Name: {name}
Email: {email}

Holiday: {holiday}
Date: {date}
Time: {time}

Message: {message}
"""


def send_email(name, reply_email, event_type, event_date, event_time, message):
    #type: (Text, Text, Text, Text, Text, Text) -> bool
    try:
        smtp = smtplib.SMTP('localhost')
        msg = EmailMessage()
        msg['Subject'] = f'Mobile Holiday Experience Inquiry: {event_type}'
        msg['From'] = ''  # TODO - put something here once we have a domain
        msg['To'] = 'reidben24@gmail.com'  # TODO - get Brandon's email
        msg.set_content(MESSAGE_TEMPLATE.format(
            name=name,
            email=reply_email,
            holiday=event_type,
            date=event_date,
            time=event_time,
            message=message
        ))
        smtp.send_message(msg)
        smtp.quit()
    except Exception:
        return False
    return True
