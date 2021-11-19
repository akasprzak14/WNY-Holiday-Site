import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {checkEmail} from '../lib/helpers';
import Autocomplete from '@mui/material/Autocomplete';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import styled from 'styled-components';
import {sendBooking} from '../lib/api';

export type BookingFormProps = {
  onSuccess: () => void;
  onError: () => void;
  onSend: () => void;
}

const PickerBox = styled.div`
  width: 300px;
`;

export const BookingForm: React.FC<BookingFormProps> = ({onSuccess, onError, onSend}) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [event, setEvent] = React.useState<string | null>(null);
  const [date, setDate] = React.useState<Date | null>(null);
  const [message, setMessage] = React.useState<string>("");

  const [nameError, setNameError] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string>("");
  const [eventError, setEventError] = React.useState<string>("");
  const [dateError, setDateError] = React.useState<string>("");

  const eventOptions = [
    "Haunted House",
    "Santa's Workshop",
    "Easter Bunny"
  ];

  const validateName = (value: string): boolean => {
    if (!value) {
      setNameError('Name cannot be empty');
      return false;
    }
    else {
      setNameError('');
      return true;
    }
  };

  const onNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(event.target.value);
    validateName(event.target.value);
  };

  const validateEmail = (value: string): boolean => {
    if (!value) {
      setEmailError('Email cannot be empty');
      return false;
    }
    else if (!checkEmail(value)) {
      setEmailError('Invalid email');
      return false;
    }
    else {
      setEmailError('');
      return true;
    }
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const validateEvent = (value: string | null): boolean => {
    if (!value) {
      setEventError("Please select an event");
      return false;
    }
    else {
      setEventError("");
      return true;
    }
  };

  const onEventChange = (_: any, newValue: string | null) => {
    setEvent(newValue);
    validateEvent(newValue);
  };

  const validateDate = (value: Date | null): boolean => {
    if (!value) {
      setDateError("Please select a date and time");
      return false;
    }
    if (value < new Date()) {
      setDateError("Selected date and time is in the past");
      return false;
    }
    setDateError("");
    return true;
  };

  const onDateChange = (newDate: Date | null) => {
    setDate(newDate);
    validateDate(newDate);
  };

  const sendForm = async () => {
    const nv = validateName(name);
    const ev = validateEmail(email);
    const dv = validateDate(date);
    const bv = validateEvent(event);
    if (nv && ev && dv && bv) {
      onSend();
      if (await sendBooking(name, email, event!, date!, message)) {
        onSuccess();
      }
      else {
        onError();
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' },
        '& .MuiButton-root': {marginLeft: '8px'},
        '& .MuiDateTimePicker-root': {width: '300px'}
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={onNameChange}
        error={nameError !== ''}
        helperText={nameError}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={onEmailChange}
        error={emailError !== ''}
        helperText={emailError}
      />
      <Autocomplete
        disablePortal
        options={eventOptions}
        sx={{width: 300}}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pick Your Event"
            error={eventError !== ''}
            helperText={eventError}
          />
        )}
        value={event}
        onChange={onEventChange}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <PickerBox>
          <DateTimePicker
            label="Requested Date &amp; Time"
            value={date}
            onChange={onDateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                error={dateError !== ''}
                helperText={dateError}
              />
            )}
          />
        </PickerBox>
      </LocalizationProvider>
      <TextField
        label="Message (optional)"
        variant="outlined"
        multiline
        rows={4}
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <br/>
      <Button variant="contained" onClick={sendForm}>Request Booking</Button>
    </Box>
  );
}
