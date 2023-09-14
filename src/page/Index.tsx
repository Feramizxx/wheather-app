import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import {useEffect} from "react";
import { fetchWheather } from "../store/wheatherSlice";
import { SearchInput } from "../components/SearchInput";
export const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWheather());
  }, [dispatch]);

  return (
    <Box
      component="div"
      sx={{
        maxWidth: "1272px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginX: "auto",
        paddingTop: "20px",
      }}
    >
      <Box>
        <SearchInput />
        <Hero />
        <Main />
      </Box>
    </Box>
  );
};
