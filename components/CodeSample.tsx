import React from "react";
import ComponentIndex, { RawComponents } from "./ComponentIndex";

// /* eslint import/no-webpack-loader-syntax: off */
import SampleRaw from "~/_components/button/ButtonTypes";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock/CodeBlock";
import { Button, Divider, IconCode } from "@supabase/ui";

interface Props {
  children: any;
  code: any;
  sample: string;
}

function CodeSample(props: Props) {
  console.log(props.sample);

  // @ts-ignore
  const Sample = ComponentIndex[props.sample];
  console.log(Sample);
  console.log(props.children);

  return (
    <>
      <div className="bg-white dark:bg-gray-700 border dark:border-gray-600 rounded m-0 overflow-hidden">
        <div className="px-8 py-12 border-b dark:border-gray-600">
          <Sample />
        </div>
        <CodeBlock
          lang="js"
          // @ts-ignore
          children={RawComponents[props.sample]}
        />
      </div>
      {/* </div> */}
    </>
  );
}

export default CodeSample;
