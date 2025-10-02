import { useState, useCallback, useEffect } from "react";
import { activeItemsManager } from "../helpers";

export const useWorkItem = (id: number) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        activeItemsManager.setItem(id, setIsActive);
    }, [id]);

    const handleClick = useCallback(
        (e: React.MouseEvent) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                activeItemsManager.deactivateOthers(id);
                setIsActive(!isActive);
            }
        },
        [id, isActive]
    );

    const handleLinkClick = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    return {
        isActive,
        handleClick,
        handleLinkClick,
    };
};
