import * as React from 'react';
import { Button, TextField } from '@mui/material';

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    // Perform form validation here (optional)
    onSubmit(formData);
  };

  return (
    <>
      <TextField
        autoFocus
        margin='dense'
        label='Email'
        type='email'
        fullWidth
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        margin='dense'
        label='Password'
        type='password'
        fullWidth
        name='password'
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button type='submit' variant='contained' onClick={(event) => handleSubmit(event)}>
        Login
      </Button>
    </>
  );
};

export default LoginForm;
