import { Easing, motion } from "motion/react";

type Props = {
    toggleMenu: () => void;
    isOpen: boolean;
};

const closedMenu = {
    animate: { d: "M 0 1 L 50 1 Z M 0 10 L 50 10 z" },
};

const openMenu = {
    animate: { d: "M 0 1 L 50 10 Z M 0 10 L 50 1 z" },
};

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] as Easing };

const MenuIcon = ({ toggleMenu, isOpen }: Props) => {
    return (
        <div
            className="fixed top-0 right-0 h-16 w-16 p-2 flex justify-center items-center z-90 cursor-pointer mix-blend-difference"
            onClick={toggleMenu}
        >
            <svg
                width="50"
                height="20"
                viewBox="0 0 50 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    animate={isOpen ? openMenu.animate : closedMenu.animate}
                    transition={transition}
                    strokeWidth="2"
                    stroke={"#fff"}
                ></motion.path>
            </svg>
            {/* <img
                src="/images/common/menuIcon.svg"
                alt="menu icon"
                draggable={false}
            /> */}
        </div>
    );
};
export default MenuIcon;
