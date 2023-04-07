import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputBaseComponentProps,
  InputLabel,
  OutlinedInput,
  SxProps,
} from "@mui/material";
import React, { HTMLInputTypeAttribute } from "react";

type FormInputFieldProps = {
  disabled?: boolean;
  error?: boolean;
  labelHeading?: string;
  placeHolder: string;
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  inputType?: HTMLInputTypeAttribute;
  inputProps?: InputBaseComponentProps;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  size?: "small" | "medium" | undefined;
  multiline?: boolean;
  rows?: number;
  sx?: SxProps;
  disableErrorText?: boolean;
};

export default function FormInputField(props: FormInputFieldProps) {
  const {
    disabled,
    error,
    id,
    labelHeading,
    onChange,
    value,
    helperText,
    inputType,
    startAdornment,
    endAdornment,
    inputProps,
    placeHolder,
    size,
    multiline,
    rows,
    sx,
    disableErrorText,
  } = props;
  return (
    <FormControl
      fullWidth
      size="small"
      // variant="filled"
      disabled={disabled}
      error={error}
      // sx={sx}
    >
      {/* <InputLabel htmlFor={id}>{labelHeading}</InputLabel> */}
      <OutlinedInput
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-describedby={`${id}-text`}
        label={labelHeading}
        inputProps={{
          ...inputProps,
          // style: { fontSize: FONT_SIZE.TEXT_LABEL },
        }}
        startAdornment={
          startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : null
        }
        endAdornment={
          endAdornment ? (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ) : null
        }
        type={inputType}
        sx={{
          backgroundColor: "white",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
        autoComplete="off"
        placeholder={placeHolder}
        size={size}
        multiline={multiline}
        rows={rows}
        color="secondary"
      />
      {!disableErrorText && (
        <FormHelperText sx={{ height: 15 }} id={`${id}-text`}>
          {helperText || ""}
        </FormHelperText>
      )}
    </FormControl>
  );
}
