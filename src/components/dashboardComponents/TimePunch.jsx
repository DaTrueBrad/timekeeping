import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

//TODO Add persistence to the time punch
//TODO add time elapsed

function TimePunch() {
  const [clock, setClock] = useState(false);
  const [project, setProject] = useState();
  const buttonClick = () => setClock(!clock);
  const handleChange = (e) => setProject(e.target.value);

  return (
    <div className="page-container">
      <h1>{clock ? "Punched In" : "Please Select Project"}</h1>
      <FormControl sx={{marginTop: 15, minWidth: 200}}>
        <InputLabel id="project-select-label">Project Number</InputLabel>
        <Select
          labelId="project-select-label"
          id="project-select"
          label="Project Select"
          value={project}
          onChange={handleChange}
        >
          <MenuItem value={2134}>2134</MenuItem>
          <MenuItem value={2135}>2135</MenuItem>
          <MenuItem value={2136}>2136</MenuItem>
        </Select>
        <Button variant="outlined" size="large" onClick={buttonClick} sx={{marginTop: 2}} color="error">
          {clock ? "Punch Out" : "Punch In"}
        </Button>
      </FormControl>
    </div>
  );
}

export default TimePunch;
