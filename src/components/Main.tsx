import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { fetchWheather } from "../store/wheatherSlice";
import { Box } from "@mui/material";

export const Main = () => {
  const dispatch = useDispatch();
  const wheatherData = useSelector((state: RootState) => state.wheathers);
  const status = useSelector((state: RootState) => state.wheathers.status);

  useEffect(() => {
    dispatch(fetchWheather());
  }, [dispatch]);
  if (status == "loading") return <h1>Loading...</h1>;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#add8e6",
          color: "white",
          fontSize: "18px",
          borderRadius: "12px",
        }}
      >
        <Box>{wheatherData.wheatherData.location.name}</Box>
        {wheatherData?.wheatherData.forecast.forecastday.map((item, Index) => {
          return <Box key={Index}>{item.date}</Box>;
        })}
      </Box>

      <Box>
        {wheatherData.wheatherData.forecast.forecastday.map((item, Index) => {
          return (
            <Box
              key={Index}
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#add8e6",
                borderRadius: "15px",
                padding: "10px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {item.hour
                .map((item: any, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        marginX: "10px",
                        display: "flex",
                        width: "600px",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box>{item.time.split(" ")[1]}</Box>
                      <Box
                        component="img"
                        src={item.condition.icon}
                        alt="current_image"
                        loading="lazy"
                      />
                      <Box>{item.temp_c}&deg;</Box>
                    </Box>
                  );
                })
                .splice(1, 7)}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
