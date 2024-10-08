import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width="100%"
        height="100%"
        src={`https://socio-media-backend-teal.vercel.app/assets/${image}`}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;
