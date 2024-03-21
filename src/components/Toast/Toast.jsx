import React from "react";
import PropTypes from "prop-types";
import { Info, WarningCircle, CheckCircle, Warning, X } from "@phosphor-icons/react";
import "./Toast.css";
import Button from "../Button";

const Toast = ({ editText, iconSwap, showIcon, showDivider, showButton, showCloseIcon, type }) => {
  const iconMap = {
    success: <CheckCircle color="#00a151" size={24} weight="fill" />,
    failure: <WarningCircle color="#ffc500" size={24} weight="fill" />,
    warning: <Warning color="#f73131" size={24} weight="fill" />,
    information: <Info color="#4077ff" size={24} weight="fill" />,
  };

  const toastIcon = showIcon && type === "notification" ? iconMap[iconSwap] || null : null;

  return (
    <div className={`toast toast--${type}`} role="alert">
      <div className="toast-content">
        <div className="toast-message">
          {toastIcon && <div>{toastIcon}</div>}
          <p>{editText || "Hey! there."}</p>
        </div>
        {showDivider && <div className="toast-divider">|</div>}
        {showButton && <Button label="Button" />}
        {showCloseIcon && (
          <button className="toast-close-btn">
            <span className="icon">
              <X />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

Toast.defaultProps = {
  iconSwap: "success",
  showIcon: true,
  showDivider: true,
  showButton: true,
  showCloseIcon: true,
  type: "notification",
};

Toast.propTypes = {
  editText: PropTypes.string,
  iconSwap: PropTypes.oneOf(["success", "failure", "warning", "information"]),
  showIcon: PropTypes.bool,
  showDivider: PropTypes.bool,
  showButton: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  type: PropTypes.oneOf(["default", "notification"]),
};

export default Toast;
