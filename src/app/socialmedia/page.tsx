import { socialMediaWorks } from "../data/socialMediaWorks";
import { WorkItem } from "../components/socialmedia";

const SocialMediaPage = () => {
    return (
        <div className="w-full flex flex-row flex-wrap">
            {socialMediaWorks.map((work) => (
                <WorkItem key={work.id} {...work} />
            ))}
        </div>
    );
};
export default SocialMediaPage;
