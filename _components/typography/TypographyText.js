import { Typography } from "@supabase/ui";

export default function TypographyText() {
  return (
    <>
      <Typography.Text>Supabase UI (default)</Typography.Text>
      <br />
      <Typography.Text type="secondary">
        Supabase UI (secondary)
      </Typography.Text>
      <br />
      <Typography.Text type="success">Supabase UI (success)</Typography.Text>
      <br />
      <Typography.Text type="warning">Supabase UI (warning)</Typography.Text>
      <br />
      <Typography.Text type="danger">Supabase UI (danger)</Typography.Text>
      <br />
      <Typography.Text disabled>Supabase UI (disabled)</Typography.Text>
      <br />
      <Typography.Text mark>Supabase UI (mark)</Typography.Text>
      <br />
      <Typography.Text code>Supabase UI (code)</Typography.Text>
      <br />
      <Typography.Text keyboard>Supabase UI (keyboard)</Typography.Text>
      <br />
      <Typography.Text underline>Supabase UI (underline)</Typography.Text>
      <br />
      <Typography.Text strikethrough>
        Supabase UI (strikethrough)
      </Typography.Text>
      <br />
      <Typography.Text strong>Supabase UI (strong)</Typography.Text>
      <br />
      <Typography.Link href="https://supabase.com" target="_blank">
        Supabase (Link)
      </Typography.Link>
    </>
  );
}
