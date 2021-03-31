import ButtonBasic from "../_components/button/ButtonBasic";
import ButtonTypes from "../_components/button/ButtonTypes";
import ButtonSizes from "../_components/button/ButtonSizes";
import ButtonIcons from "../_components/button/ButtonIcons";
import ButtonBlock from "../_components/button/ButtonBlock";
import ButtonBasicRaw from "!!raw-loader!./../_components/button/ButtonBasic";
import ButtonTypesRaw from "!!raw-loader!./../_components/button/ButtonTypes";
import ButtonSizesRaw from "!!raw-loader!./../_components/button/ButtonSizes";
import ButtonIconsRaw from "!!raw-loader!./../_components/button/ButtonIcons";
import ButtonBlockRaw from "!!raw-loader!./../_components/button/ButtonBlock";

import AuthBasic from "../_components/auth/AuthBasic";
import AuthBasicRaw from "!!raw-loader!./../_components/auth/AuthBasic";

let Components = {};

// Button

//@ts-ignore
Components["ButtonBasic"] = ButtonBasic;
//@ts-ignore
Components["ButtonTypes"] = ButtonTypes;
//@ts-ignore
Components["ButtonSizes"] = ButtonSizes;
//@ts-ignore
Components["ButtonIcons"] = ButtonIcons;
//@ts-ignore
Components["ButtonBlock"] = ButtonBlock;

// Auth

//@ts-ignore
Components["AuthBasic"] = AuthBasic;

export let RawComponents = {};

// Button

//@ts-ignore
RawComponents["ButtonBasic"] = ButtonBasicRaw;
//@ts-ignore
RawComponents["ButtonTypes"] = ButtonTypesRaw;
//@ts-ignore
RawComponents["ButtonSizes"] = ButtonSizesRaw;
//@ts-ignore
RawComponents["ButtonIcons"] = ButtonIconsRaw;
//@ts-ignore
RawComponents["ButtonBlock"] = ButtonBlockRaw;

// Auth

//@ts-ignore
RawComponents["AuthBasic"] = AuthBasicRaw;

export default Components;
