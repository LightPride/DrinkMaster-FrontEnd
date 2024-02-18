import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const StyledSignForm = styled.div`
  .formTitleSign {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 28px;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 40px;
  }

  .textInput {
    width: 400px;
  }

  .textInput fieldset {
    border-color: white;
    border-radius: 20px;
  }

  .textInput input {
    color: white;
  }

  .textInput label {
    color: white;
  }

  .textInput:hover fieldset {
    border-color: white;
  }

  .textInput:hover fieldset:focus {
    border-color: white;
  }

  .textInput input::placeholder {
    color: white;
  }

  .iconInput {
    color: white;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
  }
`;
