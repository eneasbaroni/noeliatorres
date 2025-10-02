import { ActionBtnProps } from "../../common/ActionBtn/types";

export const Links: Array<ActionBtnProps> = [
    { label: "SOCIAL MEDIA", link: "/socialmedia", mode: "internal" },
    {
        label: "CREACIÓN DE CONTENIDO",
        link: "/contentcreation",
        mode: "internal",
    },
] as const;
