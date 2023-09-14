import  { useEffect } from "react";
import { Box } from "@mui/material";
import { fetchWheather } from "../store/wheatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

export const Hero = () => {
  const dispatch = useDispatch();
  const wheatherData = useSelector((state: RootState) => state.wheathers);
  useEffect(() => {
    dispatch(fetchWheather());
  }, [dispatch]);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box
          component="img"
          src={wheatherData.wheatherData.current.condition.icon}
          width={150}
          height={150}
        ></Box>
      </Box>

      <Box component="h1">{wheatherData.wheatherData.current.temp_c}&deg;C</Box>

      <Box component="div">
        <Box component="span">
          {wheatherData.wheatherData.location.country},{" "}
        </Box>
        <Box component="span">{wheatherData.wheatherData.location.name}</Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "250px",
          justifyContent: "space-around",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Box component="span">
          H: {wheatherData.wheatherData.current.humidity},{" "}
        </Box>

        <Box component="span">
          Atmospheric Pressure: {wheatherData.wheatherData.current.pressure_in}
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "200px",
          backgroundColor: "#add8e6",
          marginY: "10px",
          borderRadius: "10px",
          paddingX: "12px",
          color: "white",
          paddingY: "10px",
          display: "flex",
          alignContent: "center",
          justifyItems: "center",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="div"
        >
          <WaterDropIcon />{" "}
          <Box component="span">
            {wheatherData.wheatherData.current.humidity}
          </Box>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="div"
        >
          <CloudIcon />{" "}
          <Box component="span">{wheatherData.wheatherData.current.cloud}</Box>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="div"
        >
          <AirIcon />{" "}
          <Box component="span">
            {" "}
            {wheatherData.wheatherData.current.wind_kph}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
