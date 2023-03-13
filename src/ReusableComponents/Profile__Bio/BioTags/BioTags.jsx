import { Button, Divider, Link } from "@mui/material";
import React, { useState } from "react";
import styles from "./BioTags.module.scss";
const BioTags = (props) => {
  const {
    leftHeader = "",
    rightHeader = "",
    name,
    errors,
    register,
    type,
    rules,
    classNameInput = "p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",
    classNameError = "mt-1 text-red-600 min-h-[1rem] text-sm",
    getValues,
    onSubmit,
  } = props;
  const [showInput, setShowInput] = useState(true);
  const handleCloseInput = () => {
    setShowInput(false);
  };
  const handleOpenInput = () => {
    setShowInput(true);
  };
  const registerResult = register && name ? register(name, rules) : {};
  const errorMessage = errors ? errors[name]?.message : "";
  const formValues = getValues && name ? getValues(name) : "";
  return (
    <div className={styles.bio}>
      <header className={styles.bio__header}>
        <div className={styles.bio__col}>
          <h3>{leftHeader}</h3>
        </div>
        <div className={styles.bio__col}>
          {!showInput && (
            <Link className="cursor-pointer" onClick={handleOpenInput}>
              {rightHeader}
            </Link>
          )}
        </div>
      </header>
      {showInput ? (
        <input
          type={type}
          className={`${classNameInput} mt-3`}
          {...registerResult}
        />
      ) : (
        <div className="mt-3">{formValues}</div>
      )}

      {errorMessage && (
        <div className={`${classNameError} my-1`}>{errorMessage}</div>
      )}
      <Divider
        sx={{
          marginBottom: "15px",
        }}
      />
      <div className="flex gap-3">
        {showInput && (
          <>
            <Button
              onClick={handleCloseInput}
              className="w-full hover:text-green hover:bg-white py-2"
              type="submit"
              disabled={!!errorMessage}
              sx={{
                marginBottom: "20px",
                backgroundColor: "#FFF",
                textTransform: "capitalize",
                color: "#777",
                "&:hover": {
                  color: "#1dbf73",
                  backgroundColor: "#FFF",
                },
              }}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              className="w-full"
              onClick={onSubmit}
              type="submit"
              sx={{
                marginBottom: "20px",
                backgroundColor: "#1dbf73",
                textTransform: "capitalize",
                "&:hover": {
                  opacity: 0.8,
                  backgroundColor: "#1dbf73",
                },
              }}
              variant="contained"
            >
              Update
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default BioTags;

// <div className={styles.bio__detail}>
// <span>
//   <span>{content}</span> <span>{subContent}</span>
//   <span>
//     <Link>{linkedContent}</Link>
//   </span>
// </span>
// </div>
