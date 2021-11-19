import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {checkEmail} from '../lib/helpers';
import {sendQuestion} from '../lib/api';

export type QuestionFormProps = {
  onSuccess: () => void;
  onError: () => void;
  onSend: () => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({onError, onSuccess, onSend}) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [question, setQuestion] = React.useState<string>("");

  const [nameError, setNameError] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState<string>("");
  const [questionError, setQuestionError] = React.useState<string>("");

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

  const validateQuestion = (value: string): boolean => {
    if (!value) {
      setQuestionError('Question cannot be empty');
      return false;
    }
    else {
      setQuestionError('');
      return true;
    }
  };

  const onQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setQuestion(event.target.value);
    validateQuestion(event.target.value);
  };

  const sendForm = async () => {
    const nv = validateName(name);
    const ev = validateEmail(email);
    const qv = validateQuestion(question);
    if (nv && ev && qv) {
      onSend();
      if (await sendQuestion(name, email, question)) {
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
        '& .MuiButton-root': {marginLeft: '8px'}
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
      <TextField
        label="Question"
        variant="outlined"
        multiline
        rows={4}
        value={question}
        onChange={onQuestionChange}
        error={questionError !== ''}
        helperText={questionError}
      />
      <br/>
      <Button variant="contained" onClick={sendForm}>Send</Button>
    </Box>
  );
}
