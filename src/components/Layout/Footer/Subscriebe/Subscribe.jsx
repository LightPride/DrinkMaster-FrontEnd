import {
  ButtonSubmit,
  FormContainer,
  Title,
  InputNameEmail,
} from './Subscribe.styled';

export const Subscribe = () => {
  return (
    <FormContainer>
      <Title>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Title>
      <InputNameEmail
        placeholder="Enter the email"
        type="email"
        name="user-email"
        id="user-email"
        required
      />

      <ButtonSubmit type="submit">Subscribe</ButtonSubmit>
    </FormContainer>
  );
};

export default Subscribe;
