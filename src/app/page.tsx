import { Instrument_Serif } from "next/font/google";
import Prism from "./components/common/Prism/Prism";
import ActionBtns from "./components/home/ActionBtns/ActionBtns";
import { HoverWeightText } from "./components/common/HoverWeightText/HoverWeightText";
import { groteskVariable } from "./fonts";

const serifAccent = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: "italic",
    variable: "--font-serif-accent",
});

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
            <HoverWeightText
                text="NOELIA TORRES"
                className="text-9xl tablet:text-7xl mobile:text-5xl w-full text-center tracking-tight"
            />
            <h2
                className={`${groteskVariable.className} text-xl tablet:text-sm mobile:text-xs`}
            >
                Fashion Marketing | Social Media | Content Creation
            </h2>
            <p
                className={`${serifAccent.variable} max-w-[50rem] p-4 text-xs mobile:text-[11px] text-center [&>span]:font-[family-name:var(--font-serif-accent)] [&>span]:italic [&>span]:text-base mobile:[&>span]:text-sm leading-4 [&>span]:leading-4 mobile:leading-4 mobile:[&>span]:leading-4 `}
            >
                Hola, soy Noe. Me dedico al <span>fashion marketing</span> y a
                la <span>creación de contenido</span>. La moda es mi lenguaje
                desde siempre. Estudié diseño de indumentaria, me formé en{" "}
                <span>marketing digital</span> y encontré en las redes el
                espacio ideal.
                <br />
                Hoy creo contenido <span>fashion, beauty y lifestyle</span> con
                una mirada curada y consciente. Comparto outfits y analizo lo
                que pasa en el mundo de la moda.
                <br />
                Trabajo como <span>social media manager</span> y{" "}
                <span>estratega de contenido</span> para empresas de{" "}
                <span>moda</span>, y colaboro con <span>marcas</span> que buscan
                construir una identidad sólida, coherente y relevante.
            </p>
            <ActionBtns />
        </main>
    );
}
