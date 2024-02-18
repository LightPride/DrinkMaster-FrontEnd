import styled from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const StyledSignForm = styled.div`
  .universalBtn {
    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.color};
    width: ${(props) => props.width};
    padding: 18px 0px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    margin-bottom: ${(props) => props.margin};
  }

  .formTitleSign {
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 28px;
    color: var(--white-color);
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
  }

  .textInput {
    width: 400px;
  }

  .textInput fieldset {
    border-radius: 40px;
    border-color: var(--white-fifty-color);
  }

  .textInput input {
    color: white;
  }

  .textInput label {
    color: var(--white-fifty-color);
  }

  .textInput:hover fieldset {
    border-color: white;
  }

  .textInput:hover fieldset:focus {
    border-color: white;
  }
  var( --white-color) .textInput input::placeholder {
    color: var(--white-color);
  }

  .iconInput {
    color: var(--white-color);
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white;
  }

  .redirectLink {
    display: block;
    font-size: 14px;
    color: var(--white-color);
    font-weight: 600;
    width: 400px;
    text-align: center;
    padding: 18px, 0px;
  }
`;
