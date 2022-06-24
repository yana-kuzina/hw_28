import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCloseButton = styled.span`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 32px;
  top: 22px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: " ";
    height: 16px;
    width: 2px;
    background-color: ${(props) =>
      props.color === "warning" ? "#1513A0" : "#f6f6fe"};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const StyledAlert = styled.div`
  text-align: center;
  padding: 20px 74px 20px 32px;
  margin: 8px;
  position: relative;

  background-color: ${(props) => {
    switch (props.color) {
      case "primary": {
        return "#605dec";
      }
      case "error": {
        return "#EB5757";
      }
      case "warning": {
        return "#FFD12F";
      }
    }
  }};

  color: ${(props) => (props.color === "warning" ? "#1513A0" : "#f6f6fe")};
`;

const Alert = ({ children, color, onClose }) => {
  return (
    <StyledAlert color={color}>
      {children}
      <StyledCloseButton color={color} onClick={onClose} />
    </StyledAlert>
  );
};

Alert.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
};

export default Alert;
