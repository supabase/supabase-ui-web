import spec from "data/spec.json";
import { Badge } from "@supabase/ui";

type ParametersParams = {
  signature: string;
};
type CommentTag = {
  tag: "param" | "returns";
  text: string;
  param: string;
};
type TypeDefinition = {
  id: string;
  name: string;
  kind: number;
  kindString: "Parameter" | "Method" | "Module" | "Props";
  comment?: CommentTag;
  flags: { isExported: boolean; isOptional?: boolean };
  type: { type: string; name: string; declaration: TypeDefinition };
  children: TypeDefinition[];
};
export default function Parameters({ signature }: ParametersParams) {
  const moduleProps: TypeDefinition[] = pluckProps(spec, signature);

  if (!moduleProps.length) return null;
  else
    return (
      <table>
        <thead>
          <tr>
            <th>Property</th>
            {/* <th>Required</th> */}
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {moduleProps.map((x) => (
            <tr key={x.name}>
              <td className="PropsTable__Property">
                <span>{x.name}</span>
              </td>
              {/* <td>{x.flags.optional ? "true" : "false"}</td> */}
              <td className="PropsTable__Type">
                {x.type && x.type.name ? (
                  <Badge color="green">{x.type.name}</Badge>
                ) : (
                  "TBC"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

function pluckProps(definition: object, signature: string): TypeDefinition[] {
  try {
    const tsDefinition = extractTsDocNode(signature, definition);
    if (!tsDefinition) {
      throw new Error("Definition not found: " + signature);
    }
    let params = getPropsFromModule(tsDefinition);
    return params || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

function getPropsFromModule(tsDefinition: TypeDefinition) {
  if (tsDefinition.kindString != "Module") {
    throw new Error("Please pass a Module name.");
  }
  let props = tsDefinition.children.find((x) => x.name == "Props");
  if (!props) return [];
  else return props.children;
}

/**
 * Recurse through the definition to find the correct definition.
 * You can pass it a deeply nested node using dot notation. eg: 'LoggedInUser.data.email'
 */
function extractTsDocNode(nodeToFind: string, definition: any) {
  const nodePath = nodeToFind.split(".");
  let i = 0;
  let previousNode = definition;
  let currentNode = definition;
  while (i < nodePath.length) {
    previousNode = currentNode;
    currentNode =
      previousNode.children.find((x: any) => x.name == nodePath[i]) || null;
    if (currentNode == null) {
      const nodeNames = previousNode.children.map((x: any) => "\n" + x.name);
      console.log(`Cant find ${nodePath[i]} in ${nodeNames}`);
      break;
    }
    i++;
  }
  return currentNode;
}
