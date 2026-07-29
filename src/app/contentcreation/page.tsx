"use client";

import { WorkItem } from "../components/contentcreation";
import { WorkFilter } from "../components/contentcreation";
import { useWorkFilter } from "../hooks/useWorkFilter";
import { contentCreationWorks } from "../data/contenCreationWorks";

const ContentCreationPage = () => {
    const { activeFilter, setActiveFilter, filteredWorks } =
        useWorkFilter(contentCreationWorks);

    return (
        <div className="w-full">
            <WorkFilter
                activeFilter={activeFilter}
                onChange={setActiveFilter}
            />

            <div className="w-full flex flex-row flex-wrap">
                {filteredWorks.map((work) => (
                    <WorkItem key={work.id} {...work} />
                ))}
            </div>
        </div>
    );
};

export default ContentCreationPage;
