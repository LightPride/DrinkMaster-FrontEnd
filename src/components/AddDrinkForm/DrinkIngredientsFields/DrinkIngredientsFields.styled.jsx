import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const SubtitleForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .titleIngredientsForm {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 1.1;
    }
  }
  .containerIngredientInputs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 16px;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 104px;
    height: 38px;
    @media screen and (min-width: 768px) {
      gap: 18px;
      width: 114px;
      height: 44px;
    }
  }
  .quantityTitle {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.56;
    text-align: center;
    color: #f3f3f3;
    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
`;

export const IngredientsButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  .inputsWrapper {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .styledSelect {
    background-color: transparent;

    width: 200px;
    height: 50px;
    margin-right: 8px;

    @media screen and (min-width: 768px) {
      width: 332px;
      height: 56px;
      margin-right: 14px;
    }
    @media screen and (min-width: 1440px) {
      width: 316px;
    }
  }
  .styledInput {
    background-color: transparent;
    border: 1px solid rgba(243, 243, 243, 0.5);
    border-radius: 200px;
    width: 101px;
    height: 50px;
    margin-right: 8px;
    color: #f3f3f3;
    padding-left: 24px;
    padding-right: 12px;

    &::placeholder {
      color: #f3f3f3;
    }

    &:hover {
      border: 1px solid rgba(243, 243, 243, 0.918);
    }
    @media screen and (min-width: 768px) {
      width: 150px;
      height: 56px;
      margin-right: auto;
    }
  }
`;

export const customStylesSelectIngr = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    paddingRight: '18px',
    '@media only screen and (min-width: 768px)': {
      ...provided['@media only screen and (min-width: 768px)'],
      paddingRight: '24px',
    },
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
  }),
  control: (base, styles) => ({
    ...base,
    width: '200px',
    height: '50px',
    border: '     1px solid rgba(243, 243, 243, 0.5)',
    background: 'inherit',
    borderRadius: '200px',
    fontSize: '14px',
    lineHeight: 'calc(18 / 14)',
    cursor: 'pointer',
    '@media only screen and (min-width: 768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      width: '332px',
      height: '56px',
      fontSize: '17px',
      lineHeight: '1.56',
    },
  }),
  menu: (base) => ({
    ...base,
    marginTop: '2px',
    padding: '0px 12px',
    backgroundColor: ' #161f37',
    borderRadius: '12px',
    '@media only screen and (min-width: 768px)': {
      ...base['@media only screen and (min-width: 768px)'],
      padding: '0px 18px',
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0px 18px',
    '@media only screen and (min-width: 768px)': {
      ...base['@media only screen and (min-width: 768px)'],
      padding: '0px 24px',
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: '#f3f3f3',
  }),
  placeholder: (base) => ({
    ...base,
    '@media only screen and (min-width: 768px)': {
      ...base['@media only screen and (min-width: 768px)'],
      fontSize: '17px',
      lineHeight: '1.56',
    },
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    padding: '3px 0 3px 10px',
    fontSize: '12px',
    lineHeight: 'calc(16 / 12)',
    background: 'transparent',
    '@media only screen and (min-width: 768px)': {
      ...styles['@media only screen and (min-width: 768px)'],
      fontSize: '17px',
      lineHeight: '1.56',
    },
    color: isFocused ? '#f3f3f375' : isSelected ? '#f3f3f3' : '#f3f3f340',
    cursor: 'pointer',
  }),
};
