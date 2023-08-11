import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid red",
  boxShadow: 24,
  p: 4,
};

export default function ModalDeletePost({ isOpen, onClose }) {
 
 
  return (
      <Modal
        keepMounted
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="div">
            Post Id
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Eliminado con éxito!
          </Typography>
        </Box>
      </Modal>
  );
}

ModalDeletePost.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
