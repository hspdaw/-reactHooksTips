import React, { useState } from "react";

export const useForm = (formInicial = {}) => {
  const [formState, setFormState] = useState(formInicial);

  const onInputChange = ({ target }) => {
    //desestructurando el target
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(formInicial);
  };
  
  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
};
