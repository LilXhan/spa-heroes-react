import { useState } from 'react'

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeInput = (e) => {
    setForm(prevForm => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value
      }
    });
  };

  const onReset = () => {
    setForm(initialState);
  };

  return {
    ...form,
    onChangeInput,
    onReset
  };
};
