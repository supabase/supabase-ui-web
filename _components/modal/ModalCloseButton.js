import { Button, Modal, Typography } from "@supabase/ui";
import { useState } from "react";

export default function ModalCloseButton() {
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible(!visible);
  }

  return (
    <>
      <Button onClick={toggle} type="default">
        Open modal
      </Button>
      <Modal
        closable
        title="This modal has a close button"
        description="Description of modal"
        visible={visible}
        onCancel={toggle}
        onConfirm={toggle}
      >
        <Typography.Text>This is the content of the Modal</Typography.Text>
      </Modal>
    </>
  );
}
