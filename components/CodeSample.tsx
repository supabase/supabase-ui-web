import React from "react";
import ComponentIndex, { RawComponents } from "./ComponentIndex";

// /* eslint import/no-webpack-loader-syntax: off */
import CodeBlock from "./CodeBlock/CodeBlock";

interface Props {
  children: any;
  code: any;
  sample: string;
}

function CodeSample(props: Props) {
  console.log(props.sample);

  // @ts-ignore
  const Sample = ComponentIndex[props.sample];
  // console.log(Sample);
  // console.log(props.children);

  return (
    <>
      <div className="bg-white dark:bg-gray-700 border dark:border-gray-600 rounded m-0">
        <div className="px-8 py-12 border-b dark:border-gray-600 z-10">
          <Sample />
        </div>
        <div className="z-0">
          <CodeBlock
            lang="js"
            // @ts-ignore
            children={RawComponents[props.sample]}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default CodeSample;
