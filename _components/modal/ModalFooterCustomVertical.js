import {
  Badge,
  Button,
  IconTrash,
  Modal,
  Space,
  Typography,
} from "@supabase/ui";
import { useState } from "react";

export default function ModalFooterCustomVertical() {
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
        title="Custom footer with vertical layout"
        description="Description of modal"
        visible={visible}
        onCancel={toggle}
        onConfirm={toggle}
        customFooter={[
          <Space style={{ width: "100%" }}>
            <Button size="medium" block type="secondary">
              Cancel
            </Button>
            <Button size="medium" block danger icon={<IconTrash />}>
              Delete
            </Button>
          </Space>,
        ]}
      >
        <Typography.Text type="secondary">
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </Typography.Text>
      </Modal>
    </>
  );
}
