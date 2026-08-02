import { ActionBtnProps } from "../../common/ActionBtn/types";

export const Links: Array<ActionBtnProps> = [
    { label: "EXPERTISE", link: "/expertise", mode: "internal" },
    {
        label: "PORTFOLIO",
        link: "/portfolio",
        mode: "internal",
    },
] as const;
