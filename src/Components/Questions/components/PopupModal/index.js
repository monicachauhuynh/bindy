import React from "react";
import { Button, Modal } from "semantic-ui-react";
import "./styles.css";

function PopupModal({ closeButton }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={closeButton}
    >
      <h1>
        Would you like to end the session and proceed to the next activity?
      </h1>
      <p className="subtitle">You can restart the session anytime.</p>
      <Modal.Actions>
        <Button size="huge" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button size="huge" negative onClick={() => setOpen(false)}>
          End
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default PopupModal;
