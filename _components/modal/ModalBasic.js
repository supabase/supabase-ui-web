import { Button, IconInfo, Modal, Typography } from "@supabase/ui";
import { useState } from "react";

export default function ModalBasic() {
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
        title="Title of modal"
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
