import Prism from "./components/common/Prism/Prism";
import ActionBtns from "./components/home/ActionBtns/ActionBtns";

export default function Home() {
    return (
        <main className=" w-full min-h-screen relative flex flex-col items-center justify-center ">
            <div className="w-full min-h-[100dvh] fixed top-0 left-0 -z-10 opacity-30">
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
            <h2 className="text-xl tablet:text-sm mobile:text-xs">
                Fashion Marketing | Social Media | Content Creation
            </h2>
            <p className="max-w-[50rem] p-4 text-sm mobile:text-xs text-center [&>span]:font-bold [&>span]:text-lg mobile:[&>span]:text-xs">
                Hola! Soy Noe, creadora de contenido
                <span> fashion y lifestyle. </span>
                <br />
                La<span> moda </span>es mi pasión y mi juego favorito desde que
                a mis 5 años mi mamá me dejó empezar a vestirme sola.
                <br />
                El tiempo pasó, estudié <span>diseño de indumentaria</span>,
                aparecieron las<span> redes sociales, </span>complementé con
                formaciones de <span>marketing digital</span> y ahora comparto
                mis outfits para inspirar a los que me ven, pruebo y recomiendo{" "}
                <span>health & beauty</span>, hablo sobre{" "}
                <span>tendencias</span> y analizo las <span>fashion weeks.</span>
                <br />
                Además, trabajo como<span> social media manager </span>para
                empresas de moda y me divierte la dinámica en equipo, porque
                así, podemos hacer algo grande, bonito y funcional.
                
            </p>
            <ActionBtns />
        </main>
    );
}
