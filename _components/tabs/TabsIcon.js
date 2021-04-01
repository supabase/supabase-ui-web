import { IconAlertCircle, Tabs } from "@supabase/ui";

export default function TabsBasic() {
  return (
    <Tabs type="underlined">
      <Tabs.Panel id="one" icon={<IconAlertCircle />} label="Tab one">
        Tab one content
      </Tabs.Panel>
      <Tabs.Panel id="two" icon={<IconAlertCircle />} label="Tab two">
        Tab two content
      </Tabs.Panel>
      <Tabs.Panel id="three" icon={<IconAlertCircle />} label="Tab three">
        Tab three content
      </Tabs.Panel>
    </Tabs>
  );
}
