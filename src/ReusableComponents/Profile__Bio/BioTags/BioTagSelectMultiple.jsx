import { Button, Divider, Link } from "@mui/material";
import React, { useState } from "react";
import MultipleSelectSkillField from "../../FormControl/MultipleSelectField/MultipleSelectSkillField";
import MultipleSelectCertification from "../../FormControl/MultipleSelectField/MultipleSelectCertification";
import SelectGender from "../../FormControl/SelectField/SelectGender";
import styles from "./BioTags.module.scss";
const BioTagSelectMultiple = (props) => {
  const {
    leftHeader = "",
    rightHeader = "",
    name,
    errors,
    type,
    classNameInput = "p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm",
    classNameError = "mt-1 text-red-600 min-h-[1rem] text-sm",
    getValues,
    onSubmit,
    control,
    form,
    isSkill,
    disabled,
  } = props;
  const [showInput, setShowInput] = useState(false);
  const [values, setValues] = React.useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setValues((prev) => [...prev, value]);
  };
  const handleCloseInput = () => {
    setShowInput(false);
  };
  const handleOpenInput = () => {
    setShowInput(true);
  };
  const handleUpdate = async () => {
    await onSubmit();
    handleCloseInput();
  };
  const errorMessage = errors ? errors[name]?.message : "";
  const skillValues = getValues && name ? getValues(name)?.join(", ") : "";
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
      {showInput && isSkill && (
        <MultipleSelectSkillField
          name={name}
          control={control}
          type={type}
          form={form}
          className={`${classNameInput} mt-3`}
          value={values}
          onChange={handleChange}
        />
      )}

      {showInput && !isSkill && (
        <MultipleSelectCertification
          name={name}
          control={control}
          type={type}
          form={form}
          className={`${classNameInput} mt-3`}
          value={values}
          onChange={handleChange}
        />
      )}
      {!showInput && <div className="mt-3">{skillValues}</div>}

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

export default BioTagSelectMultiple;
