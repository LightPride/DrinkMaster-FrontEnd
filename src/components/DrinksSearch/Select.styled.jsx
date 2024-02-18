import Select from 'react-select';
import styled from 'styled-components';

export const SelectContainer = styled(Select)`
  & .react-select__control {
    border-radius: 200px;
    background-color: var(--dark-blue-color);
    box-shadow: none;
    border: 0;
    width: auto;
    padding: 14px 24px;
    height: 54px;
  }

  & .react-select__menu {
    border-radius: 20px;
    background-color: var(--dark-blue-color);
    width: 199px;
    margin-top: 4px;
  }

  & .react-select__menu-list::-webkit-scrollbar {
    width: 0px;
  }

  & .react-select__dropdown-indicator {
    color: var(--white-color);
    &:hover {
      color: var(--white-color);
    }
    padding: 0;
  }

  & .react-select__indicator-separator {
    display: none;
    padding: 0px;
  }

  & .react-select__placeholder {
    margin: 0px;
    color: var(--white-color);
  }

  & .react-select__input {
    color: var(--white-color);
  }

  & .react-select__option {
    background-color: none;
    color: var(--white-fifty-color);
    &:hover {
      color: var(--white-color);
    }
  }

  & .react-select__single-value {
    color: var(--white-color);
  }

  & .react-select__option--is-focused {
    background-color: var(--dark-blue-color);
  }
  & .react-select__indicatorContainer {
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    & .react-select__control {
      height: 56px;
      width: 199px;
    }
  }

  @media screen and (min-width: 1440px) {
    & .react-select__control {
    }
  }
`;
