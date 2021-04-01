import { Tabs, Typography } from "@supabase/ui";

export default function TabsSize() {
  const limit = 30;
  let infitniteSroll = [];

  for (var i = 0; i < limit; i++) {
    infitniteSroll.push(
      <Tabs.Panel id={`panel-${i}`} label={`Tab ${i}`}>
        <Typography.Text>Content for the panel {i}</Typography.Text>
      </Tabs.Panel>
    );
  }

  return (
    <Tabs type="underlined" scrollable>
      {infitniteSroll}
    </Tabs>
  );
}
