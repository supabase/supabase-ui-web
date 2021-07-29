import { Badge } from "@supabase/ui";

export default function BadgeBasic() {
  return (
    <>
      <Badge color="blue">blue</Badge>
      <Badge color="gray">gray</Badge>
      <Badge color="green">green</Badge>
      <Badge color="indigo">indigo</Badge>
      <Badge color="pink">pink</Badge>
      <Badge color="purple">purple</Badge>
      <Badge color="red">red</Badge>
      <Badge color="yellow">yellow</Badge>
    
      <Badge size="large">large</Badge>
      <Badge size="small">small</Badge>
    </>
  );
}
