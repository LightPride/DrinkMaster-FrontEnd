import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const AddImageField = styled.div`
  width: 100%;
  height: 320px;
  background: rgba(22, 31, 55, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const WrapperAddDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  p {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: #f3f3f3;
  }
`;

export const LabelAdd = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  font-size: 40px;
  color: transparent;
  border-radius: 6px;
  cursor: pointer;
  svg {
    transition: transform 0.5s ease;
    stroke: #161f37;
  }
  &:hover {
    background-color: rgba(64, 112, 205, 0.5);
    svg {
      transform: rotate(90deg);
      transition: transform 0.5s ease;
      stroke: #f3f3f3;
    }
  }
`;
export const HiddenInputAdd = styled.input`
  display: none;
`;

export const DescrField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputsDescrField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;
  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    width: 393px;
  }
  .styledDivInput {
    height: 34px;
    width: 100%;
    border-bottom: 1px solid rgba(243, 243, 243, 0.5);
    @media screen and (min-width: 768px) {
      height: 41px;
    }
    transition: all 0.3s ease-in-out;
    &:hover {
      border-bottom: 1px solid #f3f3f3;
    }
  }
  .styledInputText {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    width: 100%;
    height: 90%;
    background-color: transparent;
    border: none;
    outline: none;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .styledInputText::placeholder {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .labelSelect {
    height: 90%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  .labelTitle {
    display: flex;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #f3f3f3;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  .selectStyled {
    display: flex;
    align-items: center;
    font-family: 'Manrope', sans-serif;
    position: relative;
  }
`;

////////////////////////////////

export const customStylesSelect = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
  }),
  control: (provided, { isFocused }) => ({
    ...provided,
    top: '-6px',
    minHeight: '22px',
    height: '22px',
    background: 'inherit',
    border: isFocused ? 'none' : 'none',
    fontSize: '14px',
    boxShadow: 'none',
    cursor: 'pointer',
  }),

  placeholder: (provided, { isFocused }) => ({
    ...provided,
    fontSize: '14px',
    boxShadow: 'none',
    cursor: 'pointer',
    color: '#f3f3f3',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '400',
    fontSize: '14px',
    '@media only screen and (min-width: 768px)': {
      ...provided['@media only screen and (min-width: 768px)'],
      fontSize: '16px',
    },
  }),

  menu: (base) => ({
    ...base,
    position: 'absolute',
    width: '131px',
    right: '0px',
    '@media only screen and (min-width: 768px)': {
      ...base['@media only screen and (min-width: 768px)'],
      padding: '4px',
      width: '139px',
      right: '-10%',
      '@media only screen and (min-width: 1440px)': {
        ...base['@media only screen and (min-width: 1440px)'],
        width: '154px',
        right: '-0%',
      },
    },
    backgroundColor: '#161F37',
    borderRadius: '12px',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  singleValue: (base) => ({
    ...base,
    color: '#f3f3f3',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    padding: '3px 0 3px 10px',
    fontSize: '12px',
    lineHeight: 'calc(16 / 12)',
    background: 'transparent',
    '@media only screen and (min-width: 1440px)': {
      ...styles['@media only screen and (min-width: 1440px)'],
      fontSize: '14px',
      lineHeight: 'calc(18 / 14)',
    },
    color: isFocused ? '#f3f3f375' : isSelected ? '#f3f3f3' : '#f3f3f340',
    cursor: 'pointer',
  }),
};

// //////////////////////////////////

export const DivAlcoholic = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #f3f3f3;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  div {
    height: 19px;
    @media screen and (min-width: 768px) {
      height: 23px;
    }
  }

  .styledRadio {
    appearance: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 3px solid #f3f3f350;
    margin-right: 4px;
    margin-left: 0;
    position: relative;
    top: 3px;
    @media only screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
  .styledRadio:checked {
    border: 3px solid #ffffff;
    background-color: #f3f3f3;
  }
`;

export const LabelAlcoholic = styled.label`
  opacity: 1;
  cursor: pointer;
`;
export const LabelNonAlcoholic = styled.label`
  opacity: 1;
  cursor: pointer;
`;
