import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from "@mui/material";
import { InputBase } from "@mui/material";
import { InputBaseProps } from "@mui/material/InputBase";
import { styled } from "@mui/material";
import { ObjectTypeWithAnyKeyValues } from "../../utils/commonTypeScriptTypes";

type FormSelectProps = {
  disabled: boolean;
  error: boolean;
  label?: string;
  placeHolder: string;
  id: string;
  value: string | number;
  itemList: ObjectTypeWithAnyKeyValues[];
  onChange: (event: SelectChangeEvent<string | number>) => void;
  helperText?: string;
  sx?: SxProps;
  defaultValue: -1 | "";
  disableNone?: boolean;
  disableHelperText?: boolean;
  renderValue?: ((value: string | number) => React.ReactNode) | undefined;
};

const InputStyling = styled(InputBase)<InputBaseProps>(({ theme }) => ({
  // root: {
  height: "35px",
  // maxHeight: "10px",
  // backgroundColor: theme.palette.background.paper,
  borderRadius: 4,
  border: "1px solid #c9c8c8",
  "&:hover": {
    borderColor: "black",
  },
  "&.Mui-focused": {
    borderColor: "black",
  },
  "&.Mui-error": {
    borderColor: "red",
  },
  "&.Mui-disabled": {
    backgroundColor: "grey",
  },
  // },
  // input: {
  // position: "relative",
  // fontSize: FONT_SIZE.TEXT_LABEL,
  padding: "10px 26px 10px 12px",
  transition: theme.transitions.create(["border-color", "box-shadow"]),
  // Use the system font instead of the default Roboto font.
  fontFamily: [
    "'Open Sans', sans-serif",
    "'Open Sans Regular', sans-serif",
  ].join(","),
  // },
}));

export function FormSelect(props: FormSelectProps) {
  return (
    <FormControl
      sx={{ minWidth: 80, ...props.sx, height: "35px" }}
      fullWidth
      size="small"
      disabled={props.disabled}
      error={props.error}
    >
      {/* <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel> */}
      <Select
        // labelId={`${props.id}-label`}
        id={props.id}
        name={props.id}
        value={props.value}
        label={props.label}
        onChange={(e) => {
          const val = e;
          if (val.target.value === "<pSlufCWfi8>") {
            val.target.value = props.defaultValue.toString();
          }
          props.onChange(val);
        }}
        variant="outlined"
        displayEmpty
        // sx={{
        //   // backgroundColor: BG_COLOR.UNEDITABLE_TEXT_BOX_COLOR,
        //   "& .MuiSelect-root": {
        //     background: "transparent",
        //     borderColor: "red",
        //   },
        //   "& .Mui-disabled": {
        //     color: BG_COLOR.TEXT_COLOR_BLACK,
        //   },
        // }}
        renderValue={props.renderValue}
        input={<InputStyling />}
      >
        <MenuItem value={props.defaultValue} disabled>
          {/* <LabelStyling
            style={{
              color: "#afadad",
              fontSize: FONT_SIZE.TEXT_LABEL,
              marginTop: "0%",
            }}
          >
            <div>{props.placeHolder}</div>
          </LabelStyling> */}
        </MenuItem>
        {!props.disableNone && (
          <MenuItem value={"<pSlufCWfi8>"} disabled={props.disabled}>
            <em>None</em>
          </MenuItem>
        )}
        {props.itemList.map((e, i) => (
          <MenuItem key={i} value={e.value}>
            {e.title}
          </MenuItem>
        ))}
      </Select>
      {!Boolean(props.disableHelperText) && (
        <FormHelperText
          sx={{ height: 15 }}
          id={`select_${props.id}_helpertext`}
        >
          {props.helperText || ""}
        </FormHelperText>
      )}
    </FormControl>
  );
}
