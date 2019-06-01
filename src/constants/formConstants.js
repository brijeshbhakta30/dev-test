// redux-form types
const forms = [
  'LOG_IN_FORM',
  'REGISTER_FORM',
];

module.exports = forms.reduce((accum, formKey) => {
  return {
    ...accum,
    [formKey]: formKey,
  };
}, {});
