import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton.styled';

export const Button = ({
  children,
  className,
  type,
  addRecipe,
  logOut,
  addDrinks,
  addToFavorite,
  seeRecipe,
  subscribe,
  disabled,
  active,
  onClick,
  ...otherProps
}) => {
  const buttonClasses = clsx(StyledButton, className,{
    addRecipe,
    logOut,
    addToFavorite,
    seeRecipe,
    subscribe,
    addDrinks
  });
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const ButtonTag = otherProps.href ? 'a' : StyledButton;

  return (
    <ButtonTag
      className={buttonClasses}
      onClick={onClickAction}
      disabled={disabled}
      active={active}
      {...otherProps}
      type={type}
    >
      {children}
    </ButtonTag>
  );
};

