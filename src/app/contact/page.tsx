import { ActionBtn } from "../components/common/ActionBtn/ActionBtn";
import Iridescence from "../components/common/Iridescence/Iridescence";
import Prism from "../components/common/Prism/Prism";
import { footerLinks } from "./constants";

const ConactPage = () => {
    return (
        <main className=" w-full min-h-screen pt-12 pb-[8rem] relative flex flex-col items-center justify-center ">
            <div className="w-full h-[100vh] fixed top-0 left-0 -z-10 bg-cyan-900/80 opacity-50">
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
            <h1 className="text-9xl tablet:text-7xl mobile:text-5xl w-full text-center text-white">
                NOELIA TORRES
            </h1>
            <p className="max-w-[50rem] p-4 mobile:text-sm text-center text-white [&>span]:font-bold [&>span]:text-xl mobile:[&>span]:text-[12px]">
                Holi! Soy Noe, creadora de contenido
                <span> fashion y lifestyle. </span>
                <br />
                La<span> moda </span>es mi pasión y mi juego favorito desde que
                a mis 5 años mi mamá me dejó empezar a vestirme sola, revolver
                su placard y maquillarme cual maquilladora profesional, ja!
                <br />
                El tiempo pasó, estudié <span>diseño de indumentaria</span>,
                aparecieron las<span> redes sociales, </span>complementé con
                formaciones de <span>marketing digital</span> y ahora comparto
                en mis outfits para inspirar a los que me ven, pruebo y
                recomiendo <span>health & beauty</span>, hablo sobre{" "}
                <span>tendencias</span> y la Noe nerd analiza cada fashion week.
                <br />
                Además, trabajo como<span> Social Media Manager </span>para
                empresas de moda y me divierte la dinámica en equipo, porque
                así, podemos hacer algo grande, bonito y funcional.
                <br />
                Let&apos;s work together! Si no nos divertimos, no vale :)
            </p>

            <div className="w-full absolute bottom-0 flex flex-col">
                <div className="flex flex-wrap border border-white border-b-0 border-r-0 mobile:border-l-0 justify-center [&>div:nth-child(odd)]:border-r [&>div:nth-child(odd)]:border-r-white mobile:[&>div:nth-child(odd)]:border-r-0">
                    {footerLinks.map(({ label, link, mode }) => (
                        <ActionBtn
                            key={label}
                            label={label}
                            link={link}
                            mode={mode}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center [&>div]:w-full [&>div]:text-sm ">
                    <ActionBtn
                        label="DISEÑO Y DESARROLLO X ENEAS BARONI"
                        link="www.eneasbaroni.com.ar"
                        mode="external"
                    />
                </div>
            </div>
        </main>
    );
};
export default ConactPage;
