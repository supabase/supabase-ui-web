import React from "react";
import ComponentIndex, { RawComponents } from "./ComponentIndex";

// /* eslint import/no-webpack-loader-syntax: off */
import CodeBlock from "./CodeBlock/CodeBlock";

// import Frame from "react-frame-component";

interface Props {
  children: any;
  code: any;
  sample: string;
}

function CodeSample(props: Props) {
  // console.log(props.sample);

  // @ts-ignore
  const Sample = ComponentIndex[props.sample];
  // console.log(Sample);
  // console.log(props.children);

  if (!process.browser) {
    return <span>Loading</span>;
  } else {
    // console.log("hello");
    if (document) {
      // const head = document.head;

      // console.log(document.head.innerHTML);
      // @ts-ignore
      // console.log(typeof head);
      // @ts-ignore
      // let initialContent = `<!DOCTYPE html><html><head></head><body><div id='mountHere'></div></body></html>`;
      return (
        <>
          <div className="bg-white dark:bg-gray-700 border dark:border-gray-600 rounded m-0">
            <div className="px-8 py-12 border-b dark:border-gray-600 z-10">
              {/* <Frame
              // @ts-ignore
              head={[head[0]]}
              mountTarget="#mountHere"
              initialContent={initialContent}
              > */}
              <Sample />
              {/* </Frame> */}
              {/* <Iframe content={<Sample />} /> */}
              {/* <iframe>
              <html>
                <body>
                  <Sample />
                </body>
              </html>
            </iframe> */}
              {/* <iframe srcdoc="<p>Hello world!</p>" /> */}
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
  }
}

export default CodeSample;
