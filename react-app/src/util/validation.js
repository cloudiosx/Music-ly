const isNotEmpty = (input) => !!input && !!input.length;
const isLessThan = (input, max) => !!input && input.length < max;
const isGreaterThan = (input, min) => !!input && input.length > min;
const isEmail = (input) =>
  !!input &&
  input.match(
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

const isBetween = (input, options) => !!input && input.length > options.min && input.length < options.max;

const isEqual = (input, options) => !!input && input === options.compareWith;

const isNotNull = (input) => typeof input !== 'string' && input;

const getErrorCheck = (input, typeCheck, options) => {
  switch (typeCheck) {
    case 'existed':
      return isNotNull(input) ? '' : '*This field is required';
    case 'empty':
      return isNotEmpty(input) ? '' : '*Please enter required field';
    case 'email':
      return isEmail(input) ? '' : '*Please enter valid email';
    case 'compare':
      return isEqual(input, options) ? '' : '*Field is not matched';
    case 'max':
      return isLessThan(input, options.max) ? '' : `*Field must less than ${options.max} characters`;
    case 'min':
      return isGreaterThan(input, options.min) ? '' : `*Field must be greater than ${options.min} characters`;
    case 'between':
      return isBetween(input, options)
        ? ''
        : `*Field must be greater than ${options.min} and less than ${options.max} characters`;
    default:
      return 'Field required';
  }
};

export const renderErrorMessage = (input, checkOptions) => {
  let errorMessage = '';
  if (checkOptions.empty) {
    errorMessage = getErrorCheck(input, 'empty');
    if (!!errorMessage) return errorMessage;
  }
  if (checkOptions.email) {
    errorMessage = getErrorCheck(input, 'email');
    if (!!errorMessage) return errorMessage;
  }
  // only check min if there is no max
  if (typeof checkOptions.min === 'number' && checkOptions.min > 0 && checkOptions.max === undefined) {
    errorMessage = getErrorCheck(input, 'min', checkOptions);
    if (!!errorMessage) return errorMessage;
  }
  // only check max if there is on min
  if (typeof checkOptions.max === 'number' && checkOptions.max > 0 && checkOptions.min === undefined) {
    errorMessage = getErrorCheck(input, 'max', checkOptions);
    if (!!errorMessage) return errorMessage;
  }
  // check between min and max if provide both
  if (
    typeof checkOptions.min === 'number' &&
    checkOptions.min > 0 &&
    typeof checkOptions.max === 'number' &&
    checkOptions.max > 0
  ) {
    errorMessage = getErrorCheck(input, 'between', checkOptions);
    if (!!errorMessage) return errorMessage;
  }

  if (typeof checkOptions.compareWith === 'string' && checkOptions.compareWith) {
    errorMessage = getErrorCheck(input, 'compare', checkOptions);
    if (!!errorMessage) return errorMessage;
  }

  if (checkOptions.existed) {
    errorMessage = getErrorCheck(input, 'existed');
    if (!!errorMessage) return errorMessage;
  }

  return errorMessage;
};
