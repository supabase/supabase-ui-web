import { Button, IconAlertCircle, Modal, Typography } from "@supabase/ui";
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
        title="Modal using an icon"
        description="Description of modal"
        visible={visible}
        onCancel={toggle}
        onConfirm={toggle}
        icon={<IconAlertCircle background="brand" size="xlarge" />}
      >
        <Typography.Text>This is the content of the Modal</Typography.Text>
      </Modal>
    </>
  );
}
