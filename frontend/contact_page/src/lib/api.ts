export const sendQuestion = async (name: string, email: string, question: string): Promise<boolean> => {
  try {
    const response = await fetch(
      'https://backend.wnymobileholiday.com/api/question',
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          question: question
        })
      }
    );
    return response.ok;
  }
  catch (err: any) {
    console.log(err);
    return false;
  }
}

export const sendBooking = async (
  name: string,
  email: string,
  event: string,
  time: Date,
  message: string
): Promise<boolean> => {
  try {
    const response = await fetch(
      'https://backend.wnymobileholiday.com/api/booking',
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          event: event,
          date: time.toLocaleString(),
          message: message
        })
      }
    );
    return response.ok;
  }
  catch (err: any) {
    console.log(err);
    return false;
  }
}
