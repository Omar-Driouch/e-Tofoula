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
//
const Register = () => {
  const [Sex, setSex] = useState("");
  const [Age, setAge] = useState("");
  const [Nickname, setNickname] = useState("");

  //for Send data to the Game
  const handlSubmit = () => {
    const data = { Nickname: Nickname, Age: Age, Sex: Sex };
    localStorage.setItem("myKid", JSON.stringify(data));
    window.location.href="/Game"
  };
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(18%)",
      }}
    >
      <Stack width={"35%"}>
        <img
          src="../../../public/fox png.png"
          style={{ zIndex: 3 }}
          className="fox"
          alt=""
        />
      </Stack>
      <Stack
        borderRadius={"25px"}
        spacing={3}
        component={"form"}
        width={"35%"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
          p: 5,
          py: 9,
          backgroundColor: "white",
        }}
        className="Parent"
      >
        {/* Sex Avatar */}
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
            src="../../../public/avatarboy.png"
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
            src="../../../public/avatargirl.png"
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: Sex == "Female" ? "#FF69D4" : "",
            }}
          />
        </Stack>
        {/* Age */}
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ textAlign: "center" }}
            value="moins_7"
          >
            Select Age
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(eo) => {
              setAge(eo.target.value);

              
            }}
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
        <TextField
          label="Nick Name"
          required
          onChange={(eo) => {
            setNickname(eo.target.value);
          }}
          variant="standard"
          sx={{ width: "40%" }}
        />

        <Button
          variant="contained"
          onClick={() => {
            handlSubmit();
          }}
          sx={{ mt: "30px" }}
          color="success"
        >
          Start
        </Button>
      </Stack>
    </Stack>
  );
};

export default Register;
