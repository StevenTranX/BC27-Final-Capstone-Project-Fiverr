import { Button, Divider, Link } from "@mui/material";
import React, { useState } from "react";
import DatePickerField from "../../FormControl/DatePickerField/DatePickerField";
import styles from "./BioTags.module.scss";
import dayjs from "dayjs";
const BioTagSelectDate = (props) => {
  const {
    leftHeader = "",
    rightHeader = "",
    name,
    errors,
    type,
    classNameInput = "p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",
    classNameError = "mt-1 text-red-600 min-h-[1rem] text-sm",
    onSubmit,
    control,
    form,
    getValues,
    setValue,
    disabled,
  } = props;
  const [showInput, setShowInput] = useState(false);
  const [localValue, setLocalValueValues] = React.useState(
    new Date(1990, 0, 1)
  );
  const dateValues = getValues(name);
  console.log(dateValues);

  const handleChange = (date) => {
    setValue("birthday", dayjs(date).format("DD/MM/YYYY"));
    setLocalValueValues(date);
  };
  const handleCloseInput = () => {
    setShowInput(false);
  };
  const handleOpenInput = () => {
    setShowInput(true);
  };
  const handleUpdate = async () => {
    // await onSubmit();
    handleCloseInput();
  };
  const errorMessage = errors ? errors[name]?.message : "";
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
      {showInput && (
        <DatePickerField
          name={name}
          control={control}
          type={type}
          form={form}
          className={`${classNameInput} mt-3`}
          value={localValue}
          onChange={handleChange}
        />
      )}

      {!showInput && errors && (
        <div className="mt-3">{dayjs(localValue).format("DD/MM/YYYY")}</div>
      )}

      {errorMessage && (
        <div className={`${classNameError} my-1`}>{errorMessage}</div>
      )}
      {!showInput && (
        <Divider
          sx={{
            marginTop: "5px",
          }}
        />
      )}
      <div className="flex gap-3 mt-5">
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
              onClick={handleUpdate}
              disabled={disabled}
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

export default BioTagSelectDate;
