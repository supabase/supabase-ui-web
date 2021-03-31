import { Space, IconArrowUpRight } from "@supabase/ui";

export default function Header({ img }: any) {
  return (
    <>
      <img className="preview-header" src={img} alt="Button" width="100%" />
    </>
  );
}
