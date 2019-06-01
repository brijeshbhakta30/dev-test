/* eslint-disable */
export const required = value => (value ? undefined : 'Required');

export const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);

export const validateEmail = (value) => {
  if (value === undefined) {
    return undefined;
  }
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(value).toLowerCase())) {
    return undefined;
  }
  return 'email is invalid';
};

export const validatePassword = (value) => {
  if (value === undefined) {
    return undefined;
  }
  if (!value) {
    return 'password is required';
  }
  if (value.length < 8) {
    return 'value must be greater than 8 characters.';
  }
  if (!(/[0-9]/).test(value)) {
    return 'password must contain at least one number';
  }
  if (!(/[a-z]/).test(value)) {
    return 'password must contain at least one lowercase letter';
  }
  if (!(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/).test(value)) {
    return 'password must contain at least one special character';
  }
  return undefined;
};
