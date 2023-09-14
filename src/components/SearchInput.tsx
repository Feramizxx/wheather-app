import  { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Input from "@mui/joy/Input";
import { fetchWheather } from "../store/wheatherSlice";

export const SearchInput = () => {
  const [val, setVal] = useState<string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWheather(val));
  }, [dispatch, val]);

  return (
    <Box sx={{}}>
      <Input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Search City…"
        variant="outlined"
        color="primary"
      />
    </Box>
  );
};
