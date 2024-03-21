import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Toast from "../Toast/Toast";
import "./ToastList.css";

const ToastList = ({ data, position, removeToast }) => {
  const listRef = useRef(null);

  const handleScrolling = (el) => {
    const isTopPosition = ["top-left", "top-right"].includes(position);
    const isBottomPosition = ["bottom-left", "bottom-right"].includes(position);
    if (isTopPosition) {
      el?.scrollTo(0, el.scrollHeight);
    } else if (isBottomPosition) {
      el?.scrollTo(0, 0);
    } else if (position === "bottom-center") {
      const height = el?.scrollHeight || 0;
      el?.scrollTo(0, height);
    }
  };

  useEffect(() => {
    handleScrolling(listRef.current);
  }, [position, data]);

  const sortedData = position.includes("bottom")
    ? [...data].reverse()
    : [...data];

  return (
    sortedData.length > 0 && (
      <div
        className={`toast-list toast-list--${position}`}
        aria-live="assertive"
        ref={listRef}
      >
        {sortedData.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    )
  );
};

ToastList.defaultProps = {
  position: "bottom-right",
};

ToastList.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.oneOf(["top-left", "top-right", "bottom-left", "bottom-right", "bottom-center"]).isRequired,
  removeToast: PropTypes.func.isRequired,
};

export default ToastList;
