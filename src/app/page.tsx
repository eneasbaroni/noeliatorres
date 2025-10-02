import ActionBtns from "./components/home/ActionBtns/ActionBtns";

export default function Home() {
    return (
        <main className=" w-full min-h-screen relative flex flex-col items-center justify-center ">
            <h1 className="text-9xl tablet:text-7xl mobile:text-4xl w-full text-center">
                NOELIA TORRES
            </h1>
            <h2 className="tablet:text-sm mobile:text-xs">
                Fashion Marketing | Social Media | Content Creator
            </h2>
            <ActionBtns />
        </main>
    );
}
