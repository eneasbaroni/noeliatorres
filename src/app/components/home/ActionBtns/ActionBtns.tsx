import { ActionBtn } from "../../common/ActionBtn/ActionBtn";
import { Links } from "./constants";

const ActionBtns = () => {
    return (
        <div className="w-full absolute bottom-0 flex flex-wrap justify-center border border-b-0 border-r-0 mobile:border-l-0 [&>div:nth-child(odd)]:border-r mobile:[&>div:nth-child(odd)]:border-r-0">
            {Links.map(({ label, link, mode }) => (
                <ActionBtn key={label} label={label} link={link} mode={mode} />
            ))}
        </div>
    );
};
export default ActionBtns;
