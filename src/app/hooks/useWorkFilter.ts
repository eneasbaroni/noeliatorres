import { useMemo, useState } from "react";

export type FilterType = "all" | "fashion" | "beauty";

interface WorkWithType {
    type: string;
}

export const useWorkFilter = <T extends WorkWithType>(works: T[]) => {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");

    const filteredWorks = useMemo(() => {
        if (activeFilter === "all") return works;
        return works.filter((work) => work.type === activeFilter);
    }, [works, activeFilter]);

    return { activeFilter, setActiveFilter, filteredWorks };
};
