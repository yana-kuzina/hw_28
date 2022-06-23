import PropTypes from "prop-types";
import styled from "styled-components";

// font-size: ${(props) => {
//   switch (props.size) {
//     case "large": {
//       return "18px"
//     }
//     case "small": {
//       return "14px"
//     }
//     default: {
//       return "16px"
//     }
//   }
// }};

const StyledButtonBase = styled.button`
  border-radius: 4px;
  margin: 0 8px;
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "12px 20px")};

  &:disabled {
    color: #7c8db0;
  }
`;

const StyledPrimaryButton = styled(StyledButtonBase)`
  background-color: #605dec;
  color: #fafafa;
  border: none;

  &:hover {
    background-color: #1513a0;
  }

  &:disabled {
    background: rgba(203, 212, 230, 0.3);
    outline: 1px solid #7c8db0;
  }
`;

const StyledSecondaryButton = styled(StyledButtonBase)`
  background-color: white;
  color: #605dec;
  border: 1px solid #605dec;

  &:hover {
    background-color: #e9e8fc;
  }

  &:disabled {
    background: white;
    border-color: #7c8db0;
  }
`;

const Button = ({ children, size, disabled, color }) => {
  if (color === "secondary") {
    return (
      <StyledSecondaryButton size={size} color={color} disabled={disabled}>
        {children}
      </StyledSecondaryButton>
    );
  }

  return (
    <StyledPrimaryButton size={size} color={color} disabled={disabled}>
      {children}
    </StyledPrimaryButton>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary"]).isRequired,
};

Button.defaultProps = {
  size: "medium",
  disabled: false,
};

export default Button;
