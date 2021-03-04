import { ValidationError } from 'yup';

interface ErrorsProps {
  [key: string]: string;
}

const getValidationErrors = (err: ValidationError): ErrorsProps => {
  const validationErrors: ErrorsProps = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
};

export default getValidationErrors;
