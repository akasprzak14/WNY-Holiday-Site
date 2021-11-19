from typing import Text
import smtplib
from email.message import EmailMessage

BOOKING_MESSAGE_TEMPLATE = """
Booking requested:

Name: {name}
Email: {email}

Holiday: {holiday}
Date: {date}

Message: {message}
"""

QUESTION_MESSAGE_TEMPLATE = """
Question received:

Name: {name}
Email: {email}

Question: {question}
"""

EMAIL = 'brandonkzlwsklczk@gmail.com'


def send_booking_email(name, email, event, date, message):
    #type: (Text, Text, Text, Text, Text) -> bool
    try:
        smtp = smtplib.SMTP('localhost')
        msg = EmailMessage()
        msg['Subject'] = f'Mobile Holiday Experience Booking Request: {name} - {event}'
        msg['From'] = 'booking@wnymobileholiday.com'
        msg['To'] = EMAIL
        msg.set_content(BOOKING_MESSAGE_TEMPLATE.format(
            name=name,
            email=email,
            holiday=event,
            date=date,
            message=message
        ))
        smtp.send_message(msg)
        smtp.quit()
    except Exception:
        return False
    return True


def send_question_email(name, email, question):
    #type: (Text, Text, Text) -> bool
    try:
        smtp = smtplib.SMTP('localhost')
        msg = EmailMessage()
        msg['Subject'] = f'Mobile Holiday Experience General Inquiry: {name}'
        msg['From'] = 'booking@wnymobileholiday.com'
        msg['To'] = EMAIL
        msg.set_content(QUESTION_MESSAGE_TEMPLATE.format(
            name=name,
            email=email,
            question=question
        ))
        smtp.send_message(msg)
        smtp.quit()
    except Exception:
        return False
    return True
