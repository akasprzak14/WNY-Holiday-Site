export const sendQuestion = async (name: string, email: string, question: string): Promise<boolean> => {
  try {
    const response = await fetch(
      // eslint-disable-next-line no-restricted-globals
      location.hostname + 'api/question',
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
    return response.status === 200;
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
      // eslint-disable-next-line no-restricted-globals
      location.hostname + 'api/booking',
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
    return response.status === 200;
  }
  catch (err: any) {
    console.log(err);
    return false;
  }
}
