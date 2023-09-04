import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

const NavBar = () => {
  return (
    <FlexBetween>
        <Typography>
            Voyage Connect
        </Typography>
        <FlexBetween>
            <InputBase placeholder="Search..." />
            <IconButton>
                <Search />
            </IconButton>
        </FlexBetween>
        <FlexBetween>
            <IconButton>
                <DarkMode />
                <LightMode />
            </IconButton>
            <Message />
        </FlexBetween>
    </FlexBetween>
  )
}

export default NavBar;
