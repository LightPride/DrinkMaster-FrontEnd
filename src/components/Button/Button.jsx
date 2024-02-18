import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton.styled';

export const Button = ({
  children,
  className,
  type,
  addRecipe,
  logOut,
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

// Button.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   disabled: PropTypes.bool,
//   active: PropTypes.bool,
//   onClick: PropTypes.func,
//   addRecipe: PropTypes.bool,
//   addToFavorite: PropTypes.bool,
//   seeRecipe:PropTypes.bool,
//   subscribe:PropTypes.bool,
// };

// Button.defaultProps = {
//   className: '',
//   disabled: false,
//   active: false,
//   addRecipe: false,
//   addToFavorite: false,
//   seeRecipe: false,
//   subscribe: false,
//   onClick: () => {},
// };
