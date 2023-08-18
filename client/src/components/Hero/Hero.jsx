import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostData } from "../../Redux/action";
import ModalDeletePost from "../Modal/ModalDeletePost";
import { NavLink } from "react-router-dom";

import styles from "./hero.module.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const postData = useSelector((state) => state.post.postData);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentPosts =
    postData && postData?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  const totalPages = Math.ceil(postData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    for (let page = 1; page <= totalPages; page++) {
      pageButtons.push(
        <Button
          key={page}
          variant={currentPage === page ? "contained" : "outlined"}
          color="primary"
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      );
    }
    return pageButtons;
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  return (
    <Container className={styles.herocontainer}  maxWidth="xl">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          minWidth: 450,
          p: 2,
        }}
      >
        <ButtonGroup
          orientation="horizontal"
          aria-label="horizontal outlined button group"
          sx={{
            "& > *": {
              p: 1,
            },
          }}
        >
          <Button
            variant="contained"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {"<"}
          </Button>

          {renderPageButtons()}

          <Button
            variant="contained"
            disabled={indexOfLastPost >= postData.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {">"}
          </Button>
        </ButtonGroup>
      </Box>
      <TableContainer component={Paper}>
        <Table 
        aria-label="a dense table"
        >
          <TableHead sx={{ maxHeight: 30, height: 30 }}>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6">Id</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">Title</Typography>
              </TableCell>

              <TableCell align="center">
                <Typography variant="h6">Post</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentPosts?.map((post) => (
              <TableRow
                key={post.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{post.userId}</TableCell>
                <NavLink to={"/detail/" + post.id} className={styles.herolink}>
                  <TableCell
                    component="th"
                    scope="post"
                    size="large"
                    sx={{
                      width: 350,
                      p: 2,
                    }}
                    className={styles.herolinks}
                  >
                    {post.title}
                  </TableCell>
                </NavLink>
                <TableCell align="center" className={styles.herodesc}>
                  {post.body}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                  <ModalDeletePost
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Home;
