import Prism from "./components/common/Prism/Prism";
import ActionBtns from "./components/home/ActionBtns/ActionBtns";

export default function Home() {
    return (
        <main className=" w-full min-h-screen relative flex flex-col items-center justify-center ">
            <div className="w-full h-[100vh] fixed top-0 left-0 -z-10 opacity-30">
                <Prism
                    animationType="3drotate"
                    timeScale={0.5}
                    height={3.5}
                    baseWidth={5.5}
                    scale={3.6}
                    hueShift={0}
                    colorFrequency={1}
                    noise={0.01}
                    glow={1}
                />
            </div>
            <h1 className="text-9xl tablet:text-7xl mobile:text-5xl w-full text-center">
                NOELIA TORRES
            </h1>
            <h2 className="tablet:text-sm mobile:text-xs">
                Fashion Marketing | Social Media | Content Creator
            </h2>
            <ActionBtns />
        </main>
    );
}
