import { Button, IconAlertCircle, Modal } from "@supabase/ui";
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
        size="small"
        layout="vertical"
        title="Modal with vertical layout"
        description="Description of modal"
        visible={visible}
        onCancel={toggle}
        onConfirm={toggle}
        icon={<IconAlertCircle background="brand" size="xlarge" />}
      />
    </>
  );
}
