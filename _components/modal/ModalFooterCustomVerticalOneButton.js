import {
  Badge,
  Button,
  IconCheck,
  IconTrash,
  Modal,
  Space,
  Typography,
} from "@supabase/ui";
import { useState } from "react";

export default function ModalFooterCustomVerticalOneButton() {
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
        title="This modal is to confirm something"
        description="Description of modal"
        icon={<IconCheck background="brand" size="xxxlarge" />}
        visible={visible}
        onCancel={toggle}
        onConfirm={toggle}
        layout="vertical"
        customFooter={[
          <Space style={{ width: "100%" }}>
            <Button size="medium" block icon={<IconCheck />}>
              Confirm
            </Button>
          </Space>,
        ]}
      />
    </>
  );
}
