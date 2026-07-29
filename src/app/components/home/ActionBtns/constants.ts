import { ActionBtnProps } from "../../common/ActionBtn/types";

export const Links: Array<ActionBtnProps> = [
    { label: "EXPERTISE", link: "/socialmedia", mode: "internal" },
    {
        label: "PORTFOLIO",
        link: "/contentcreation",
        mode: "internal",
    },
] as const;
