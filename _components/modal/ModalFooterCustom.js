import {
  Modal,
  Badge,
  Button,
  IconTrash,
  Space,
  Typography,
} from "@supabase/ui";
import { useState } from "react";

export default function SidePanelFooterCustom() {
  const [visible, setVisible] = useState(false);

  function toggle() {
    setVisible(!visible);
  }
  return (
    <>
      <Button type="default" onClick={toggle}>
        Open modal
      </Button>
      <Modal
        visible={visible}
        title="Title of the sidepanel"
        onCancel={toggle}
        customFooter={[
          <Space>
            <Button type="outline">Cancel</Button>
            <Button danger icon={<IconTrash />}>
              Delete
            </Button>
            <Badge color="red">Exercise caution</Badge>
          </Space>,
        ]}
      >
        <Typography.Text>This is the content of the sidepanel</Typography.Text>
      </Modal>
    </>
  );
}
