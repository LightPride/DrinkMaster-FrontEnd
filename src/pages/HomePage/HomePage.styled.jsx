import styled from 'styled-components'
export const HomeWrapper = styled.div``;

export const OtherDrinksButton = styled.button`
display: block;
font: inherit;
font-size: 16px;
font-weight: 600;
padding: 18px 44px;
border: none;
border-radius: 42px;
margin: 0 auto;
background-color: rgb(243, 243, 243);
color:#161F37;
margin-bottom: 140px;
border: 1px solid transparent;

&:active {
  border: 1px solid var(--blue-color);
}

&:hover,
&:focus {
  color: var(--white-color);
  background: var(--dark-blue-color);
}
&:disabled {
  background: var(--grey-color);
}
`;

