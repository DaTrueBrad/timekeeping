import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    // marginTop: '15px',
  },
});

function Form() {
  const [emp, setEmp] = useState("");
  const handleChange = (e) => setEmp(e.target.value);
  const classes = useStyles();

  return (
    <div className="form-container" style={{marginTop: "140px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Employee</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={emp}
          label="Employee"
          onChange={handleChange}
          style={{ marginBottom: "15px" }}
        >
          <MenuItem value={"Tom"}>Tom</MenuItem>
          <MenuItem value={"Miguel"}>Miguel</MenuItem>
          <MenuItem value={"Mike"}>Mike</MenuItem>
        </Select>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          style={{ marginBottom: "15px" }}
        />
        <Button variant="contained" style={{ background: "red" }}>
          Log In
        </Button>
      </FormControl>
    </div>
  );
}

export default Form;
