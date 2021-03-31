import { Button, Modal, Typography } from "@supabase/ui";
import { useState } from "react";

export default function ModalFooterHide() {
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
        title="This modal has a close button"
        description="Description of modal"
        visible={visible}
        onCancel={toggle}
        onConfirm={toggle}
        hideFooter
      >
        <Typography.Text>This is the content of the Modal</Typography.Text>
      </Modal>
    </>
  );
}
