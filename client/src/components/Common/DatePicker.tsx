import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Stack from "@mui/material/Stack";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { BasePickerProps } from "@mui/x-date-pickers/internals";
import TextField from "@mui/material/TextField";

// const StylingKeyBoard = withStyles({
//   root: {
//     height: (props) =>
//       props.readOnly ? (props.inputHeight ? props.inputHeight : "") : "59px",
//     marginBottom: (props) => (props.readOnly ? "15px" : "0px"),
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         border: "1px solid #c9c8c8",
//         // borderColor: BG_COLOR.PRIMARY_COLOR_WHITE,
//         borderRadius: (props) =>
//           props.borderRadius ? props.borderRadius : "0.6vh",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "black",
//         borderWidth: "1px",
//       },
//     },
//   },
// })(KeyboardDatePicker);

// const muiTheme = createTheme({
//   overrides: {
//     MuiPickersToolbar: {
//       toolbar: { backgroundColor: BG_COLOR.PRIMARY_COLOR },
//     },
//     MuiPickersDay: {
//       day: {
//         color: "black",
//         "&$selected": {
//           backgroundColor: BG_COLOR.PRIMARY_COLOR,
//         },
//       },
//     },
//   },
// });

// const dateFormat = localStorage.getItem("dateFormat") ?? "dd-MMM-yyyy";

type TInputValue = string;
type TValue = Date | null;

// const dateFormat = localStorage.getItem("dateFormat");
export default function DatePicker(
  props: BasePickerProps<TInputValue, TValue>
) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          inputFormat="MM/DD/YYYY"
          {...props}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={params?.inputProps?.placeholder}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
