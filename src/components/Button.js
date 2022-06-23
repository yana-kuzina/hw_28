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
  background-color: ${(props) =>
    props.color === "primary" ? "#605dec" : "white"};
  color: ${(props) => (props.color === "primary" ? "#fafafa" : "#605DEC")};
  border: ${(props) =>
    props.color === "primary" ? "none" : "1px solid #605DEC"};
  border-radius: 4px;
  margin: 0 8px;
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "12px 20px")};

  &:hover {
    background-color: ${(props) =>
      props.color === "primary" ? "#1513a0" : "#E9E8FC"};
  }

  &:disabled {
    background: ${(props) =>
      props.color === "primary" ? "rgba(203, 212, 230, 0.3)" : "white"};
    outline: ${(props) =>
      props.color === "primary" ? "1px solid #7c8db0" : "none"};
    color: #7c8db0;
  }
`;

const Button = ({ children, size, disabled, color }) => {
  return (
    <StyledButton size={size} color={color} disabled={disabled}>
      {children}
    </StyledButton>
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
