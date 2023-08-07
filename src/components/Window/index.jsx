import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { SearchOutlined } from "@ant-design/icons";
import { data } from "./data";
import "./style.css";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Window() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let isKPressed = false;
  let isCtrlPressed = false;

  window.addEventListener("keydown", (el) => {
    if (el.keyCode === 27) {
      handleClose();
    }
  });


  document.addEventListener("keydown", (event) => {
    if (event.key === "Control") {
      isKPressed = true;
    }

    if (event.keyCode === 75) {
      isCtrlPressed = true;
    }

    if (isKPressed && isCtrlPressed) {
      handleOpen()
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Shift") {
      isKPressed = false;
    }

    if (event.key === "Control") {
      isCtrlPressed = false;
    }
  });

  return (
    <div>
      <Button variant="contained" id="btn" onClick={handleOpen}>
        <SearchOutlined className="icon" />
        <p className="int-text">Search countries...</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="window">
          <Box className="modal-nav">
            <Box className="modal-nav_inner">
              <SearchOutlined className="icon" />

              <input
                type="text"
                id="input"
                onChange={(e) => setInput(e.target.value)}
              />
            </Box>

            <Button variant="contained" onClick={handleClose}>
              ESC
            </Button>
          </Box>

          <Box className="texts-wrapper">
            {data
              .filter((state) => state.name.toLowerCase().includes(input))
              .map((state) => (
                <Link to={`/info/${state.name}`} id="con-text" key={state.key}>
                  {state.name}
                </Link>
              ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
