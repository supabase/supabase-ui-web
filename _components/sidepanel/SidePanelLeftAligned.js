import { Button, SidePanel, Typography } from "@supabase/ui";
import { useState } from "react";

export default function SidePanelLeftAligned() {
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
        align="left"
        visible={visible}
        title="Left aligned panel"
        onCancel={toggle}
      >
        <Typography.Text>This is the content of the sidepanel</Typography.Text>
      </SidePanel>
    </>
  );
}
