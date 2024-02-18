import {
  SubtitleForm,
  Wrapper,
  SubWrapper,
  InputsWrapper,
  IngredientsButton,
} from './DrinkIngredientsFields.styled';

export const DrinkIngredientsFields = () => {
  return (
    <Wrapper>
      <SubtitleForm>
        <h4>Ingredients</h4>
        <div>
          <IngredientsButton>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 8H13.5"
                stroke="#F3F3F3"
                strokeOpacity="0.3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IngredientsButton>
          <p>3</p>
          <IngredientsButton>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 8H13.5"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2.5V13.5"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IngredientsButton>
        </div>
      </SubtitleForm>

      <SubWrapper>
        <InputsWrapper>
          <select name="name" id="1"></select>
          <input type="text" />
          <IngredientsButton>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0625 3.9375L3.9375 14.0625"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.0625L3.9375 3.9375"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IngredientsButton>
        </InputsWrapper>
        <InputsWrapper>
          <select name="name" id="2"></select>
          <input type="text" placeholder="" />
          <IngredientsButton>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0625 3.9375L3.9375 14.0625"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.0625L3.9375 3.9375"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IngredientsButton>
        </InputsWrapper>
        <InputsWrapper>
          <select name="name" id="3"></select>
          <input type="text" />
          <IngredientsButton>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0625 3.9375L3.9375 14.0625"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.0625L3.9375 3.9375"
                stroke="#F3F3F3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IngredientsButton>
        </InputsWrapper>
      </SubWrapper>
    </Wrapper>
  );
};
