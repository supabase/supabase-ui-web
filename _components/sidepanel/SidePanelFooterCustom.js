import {
  Badge,
  Button,
  IconTrash,
  SidePanel,
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
        Open sidepanel
      </Button>
      <SidePanel
        visible={visible}
        title="Title of the sidepanel"
        onCancel={toggle}
        customFooter={[
          <Space>
            <Button type="secondary">Cancel</Button>
            <Button danger>Delete</Button>
          </Space>,
        ]}
      >
        <Typography.Text type="secondary">
          SidePanel content is inserted here, if you need to insert anything
          into the SidePanel you can do so via{" "}
          <Typography.Text code>{"{children}"}</Typography.Text>
        </Typography.Text>
      </SidePanel>
    </>
  );
}
