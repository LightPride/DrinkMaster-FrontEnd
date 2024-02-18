import {
  AddImageField,
  Wrapper,
  InputsDescrField,
  DescrField,
  DivAlcoholic,
} from './DrinkDescriptionFields';

import React from 'react';
import Select from 'react-select';

export const DrinkDescriptionFields = () => {
  return (
    <Wrapper>
      <AddImageField></AddImageField>
      <DescrField>
        <InputsDescrField>
          <div>Тут буде інпут тайтлу</div>
          <div>Тут буде інпут рецепту</div>
          <div>Тут буде селект категорії</div>
          <div>Тут буде селект скла</div>
        </InputsDescrField>
        <DivAlcoholic>
          <div>алкоголік </div>
          <div>нон-алкоголік</div>
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
