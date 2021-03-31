import { Radio } from "@supabase/ui";

const myComponentType = (<Radio />).type;

export default function RadioBasic() {
  console.log(myComponentType);

  function handleOnChange(e) {
    // console.log(e.target.value)
  }

  return (
    <>
      <Radio
        name="basic-radios"
        label="Radio 1"
        value="Novice"
        onChange={handleOnChange}
      />
      <Radio
        name="basic-radios"
        label="Radio 2"
        value="Expert"
        onChange={handleOnChange}
      />
    </>
  );
}
