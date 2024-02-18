import React from 'react';
import Select from 'react-select';

import {
  AddImageField,
  Wrapper,
  InputsDescrField,
  DescrField,
  DivAlcoholic,
} from './DrinkDescriptionFields';

export const DrinkDescriptionFields = () => {
  return (
    <Wrapper>
      <AddImageField></AddImageField>
      <DescrField>
        <InputsDescrField>
          <input type="text" name="itemTitle" />
          <input type="text" name="aboutRecipe" />
          <Select
            name="category"
            options={[
              { value: 'raz', label: 'raz' },
              { value: 'dwa', label: 'dwa' },
            ]}
          ></Select>
          <Select
            name="glass"
            options={[
              { value: 'raz', label: 'raz' },
              { value: 'dwa', label: 'dwa' },
            ]}
          ></Select>
        </InputsDescrField>
        <DivAlcoholic>
          <input type="radio" />
          <input type="radio" />
        </DivAlcoholic>
      </DescrField>
    </Wrapper>
  );
};
