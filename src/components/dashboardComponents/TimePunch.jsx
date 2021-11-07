import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import timestamp from "time-stamp";

//TODO Add persistence to the time punch
//TODO add time elapsed

function TimePunch() {
  const [clock, setClock] = useState(false);
  const [punch, setPunch] = useState()
  const [project, setProject] = useState();
  const [data, setData] = useState();
  const handleChange = (e) => setProject(e.target.value);
  const buttonClick = async () => {
    let currentDate = new Date()
    let timePunch = timestamp(`YYYY/MM/DD HH:mm:ss`)
    setClock(!clock)
    console.log(timePunch)
    setPunch(timePunch)
    let bodyObj = {
      punch: timePunch,
      project: project,
      user: 1
    }
    await axios.post('http://localhost:5433/clockIn', bodyObj)
    .then((res) => console.log('we mad eit back'))
  };



  //TODO this funciton needs to get all the project ID from the database, then map through it returning the projects as options for selection in the dropdown below.
  const getData = () => {
    axios
      .get("http://localhost:5433/projects")
      .then((res) => setData(res.data[0]));
  };
  useEffect(() => {
    getData();
  }, []);

  const DisplayProjects = () => {
    return data.map((element, index) => {
      return (
        <MenuItem key={element.id} index={index} value={`${element.id}`}>{element.id}</MenuItem>
      )
    })
  }

  if (data) {
    return (
      <div className="page-container">
        <h1>{clock ? `Started Project: #${project}` : "Please Select Project"}</h1>
        <h2>{punch ? `at ${punch}` : '--:--'}</h2>
        <FormControl sx={{ marginTop: 15, minWidth: 200 }}>
          <InputLabel id="project-select-label">Project Number</InputLabel>
          <Select
            labelId="project-select-label"
            id="project-select"
            label="Project Select"
            value={project}
            onChange={handleChange}
            disabled={clock}
          >
            {/* The below code DOES NOT WORK if placed into a seperate component. We MUST do it inline in the JSX to get them selectable. */}
            {(data || []).map((element, index) => <MenuItem key={element.id} index={index} value={`${element.id}`}>{element.id}</MenuItem>)}

          </Select>
          <Button
            variant="outlined"
            size="large"
            onClick={buttonClick}
            sx={{ marginTop: 2 }}
            color="error"
          >
            {clock ? "Punch Out" : "Punch In"}
          </Button>
        </FormControl>
      </div>
    );
  } else {
    return <h1>Rendering</h1>;
  }
}

export default TimePunch;
