import { Button, SidePanel, Typography } from "@supabase/ui";
import { useState } from "react";

export default function SidePanelFooterHide() {
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
        hideFooter
      >
        <Typography.Text>This is the content of the sidepanel</Typography.Text>
      </SidePanel>
    </>
  );
}
