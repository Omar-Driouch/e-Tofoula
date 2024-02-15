import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import "./Register.css";
import { useState } from "react";
const Register = () => {
  const [Sex, setSex] = useState("");
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack width={"45%"}>
        <img src="../../../public/fox png.png" className="fox" alt="" />
      </Stack>
      <Stack
        borderRadius={"25px"}
        component={"form"}
        width={"45%"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
          p: 5,
        }}
        className="Parent"
      >
        {/* Avatar */}
        <Stack
          direction={"row"}
          spacing={"47px"}
          my={"20px"}
          justifyContent={"space-around"}
        >
          <img
            alt="Male"
            className="AvatarImg men"
            onClick={() => {
              setSex("Male");
            }}
            src="../../../public/avatar boy.png"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: Sex == "Male" ? "#0E98BA" : "",
            }}
          />
          <img
            alt="female"
            onClick={() => {
              setSex("Female");
            }}
            className="AvatarImg female"
            src="../../../public/avatar girl.png"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: Sex == "Female" ? "#FF69D4" : "",
            }}
          />
        </Stack>
        {/* Sex */}
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ textAlign: "center" }}
          >
            Select Age
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="moins_7"
              control={<Radio />}
              label="moins de 6 ans" 
            />
            <FormControlLabel
              value="plus_7"
              control={<Radio />}
              label="plus de 7 ans"
            />
          </RadioGroup>
        </FormControl>
        {/* Nick Name */}
        <TextField label="Nick Name" variant="standard" sx={{ width: "40%" }} />
        <Button variant="contained" sx={{ mt: "30px" }} color="success">
          Start
        </Button>
      </Stack>
    </Stack>
  );
};

export default Register;