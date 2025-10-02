import { WorkItem } from "../components/contentcreation";
import { contentCreationWorks } from "../data/contenCreationWorks";

const ContentCreationPage = () => {
    return (
        <div className="w-full flex flex-row flex-wrap">
            {contentCreationWorks.map((work) => (
                <WorkItem key={work.id} {...work} />
            ))}
        </div>
    );
};
export default ContentCreationPage;
