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
const StyledButton = styled.button`
  background-color: #605dec;
  color: #fafafa;
  border: none;
  border-radius: 4px;
  margin: 0 8px;
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "12px 20px")};

  &:hover {
    background-color: #1513a0;
  }

  &:disabled {
    background: rgba(203, 212, 230, 0.3);
    outline: 1px solid #7c8db0;
    color: #7c8db0;
  }
`;

const Button = ({ children, size, disabled }) => {
  return (
    <StyledButton size={size} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: "medium",
  disabled: false,
};

export default Button;
