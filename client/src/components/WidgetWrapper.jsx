import { Box } from "@mui/material";
import styled from "@mui/material/styles/styled";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.alt,
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;
