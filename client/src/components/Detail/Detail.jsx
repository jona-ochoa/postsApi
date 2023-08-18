import { useEffect } from "react";
import { fetchPostIdData } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Detail = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.post.details);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostIdData(id));
  }, [dispatch, id]);

  return (
    <Container 
      sx={{
        p: 6
      }}
    >
      <Box >
        <Typography variant="h3" gutterBottom>
          Detalles del POST User: {details.userId}
        </Typography>
      

        <Box key={details.userId}>
          <Typography variant="h4" gutterBottom>
            Subtitle: {details.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Description: {details.body}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
