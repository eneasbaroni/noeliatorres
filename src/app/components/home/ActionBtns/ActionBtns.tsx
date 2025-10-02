"use client";
import type { ActionBtnProps } from "../../common/ActionBtn/types";

import { ActionBtn } from "../../common/ActionBtn/ActionBtn";

const links: Array<ActionBtnProps> = [
    { label: "SOCIAL MEDIA", link: "/socialmedia", mode: "internal" },
    {
        label: "CREACIÓN DE CONTENIDO",
        link: "/contentcreation",
        mode: "internal",
    },
];

const ActionBtns = () => {
    return (
        <div className="w-full absolute bottom-0 flex border justify-center [&>div]:w-1/2 mobile:[&>div]:w-full [&>div]:cursor-pointer [&>div]:flex [&>div]:justify-center">
            {links.map(({ label, link, mode }) => (
                <ActionBtn key={label} label={label} link={link} mode={mode} />
            ))}
        </div>
    );
};
export default ActionBtns;
