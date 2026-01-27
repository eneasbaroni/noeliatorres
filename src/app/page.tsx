import Prism from "./components/common/Prism/Prism";
import ActionBtns from "./components/home/ActionBtns/ActionBtns";

export default function Home() {
    return (
        <main className=" w-full min-h-screen relative flex flex-col items-center justify-center ">
            <div className="w-full h-[100dvh] fixed top-0 left-0 -z-10 opacity-30">
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
            <p className="max-w-[50rem] p-4 text-sm mobile:text-xs text-center [&>span]:font-bold [&>span]:text-lg mobile:[&>span]:text-xs leading-5 [&>span]:leading-5 mobile:leading-4 mobile:[&>span]:leading-4 ">
                Hola, soy Noe. Me dedico al <span>fashion marketing</span> y a
                la <span>creación de contenido</span>. La moda es mi lenguaje
                desde siempre. Estudié diseño de indumentaria, me formé en{" "}
                <span>marketing digital</span> y encontré en las redes el
                espacio ideal.
                <br />
                Hoy creo contenido <span>fashion & lifestyle</span> con una
                mirada curada y consciente. Comparto outfits, pruebo y
                recomiendo beauty & health y analizo lo que pasa en el mundo de
                la moda.
                <br />
                Trabajo como <span>social media manager</span> y{" "}
                <span>estratega de contenido</span> para empresas de{" "}
                <span>moda</span>, y colaboro con proyectos freelance que buscan
                construir una identidad sólida, coherente y relevante. Me motiva
                el trabajo en equipo y la idea de crear algo grande, bonito y
                funcional.
            </p>
            <ActionBtns />
        </main>
    );
}
