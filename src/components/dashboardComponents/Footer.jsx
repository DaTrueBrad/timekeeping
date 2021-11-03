import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
import { NavLink, Link as RouterLink } from "react-router-dom";

import { Person, Schedule } from "@mui/icons-material";

function Footer() {
  const [value, setValue] = useState(0);
  return (
    <footer>
      <BottomNavigation
        // showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* <BottomNavigationAction label="Recents" icon={<ScheduleIcon />} /> */}
        {/* <NavLink
          strict to="/thingy"> */}
          <BottomNavigationAction
            label="Time Punch"
            icon={<Schedule sx={{ fontSize: 60 }} />}
            style={{ color: "red" }}
            component={NavLink}
            to="/thingy"
          />
        {/* </NavLink> */}
        <BottomNavigationAction
          label="User"
          icon={<Person sx={{ fontSize: 60 }} />}
          style={{ color: "red" }}
          component={NavLink}
            to="/other"
        />
      </BottomNavigation>
    </footer>

    // <Box sx={{ width: "100%", height: '80px', position: 'fixed', bottom: 0, left: 0, right: 0, border: '1px solid black', }}>
    //   <BottomNavigation
    //     // showLabels
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //     sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '50%'}}
    //     >
    //     {/* <BottomNavigationAction label="Recents" icon={<ScheduleIcon />} /> */}
    //     <BottomNavigationAction label="Time Punch" icon={<Schedule sx={{fontSize: 60}}/>} style={{color: "red"}} />
    //     <BottomNavigationAction label="User" icon={<Person sx={{fontSize: 60}}/>} style={{color: "red"}} />
    //   </BottomNavigation>
    // </Box>
  );
}

export default Footer;
