import type { FilterType } from "@/app/hooks";

export interface WorkFilterProps {
    activeFilter: FilterType;
    onChange: (filter: FilterType) => void;
}
