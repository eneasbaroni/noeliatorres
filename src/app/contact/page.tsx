import { ActionBtn } from "../components/common/ActionBtn/ActionBtn";
import { footerLinks } from "./constants";

const ConactPage = () => {
    return (
        <main className=" w-full min-h-screen relative flex flex-col items-center justify-center ">
            <h1 className="text-9xl">NOELIA TORRES</h1>
            <p className="max-w-[50rem]  text-center [&>span]:font-bold [&>span]:text-xl ">
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
                <div className="flex flex-wrap border border-b-0 border-r-0 justify-center [&>div]:w-1/2 mobile:[&>div]:w-full  [&>div]:cursor-pointer [&>div]:flex [&>div]:justify-center">
                    {footerLinks.map(({ label, link, mode }) => (
                        <ActionBtn
                            key={label}
                            label={label}
                            link={link}
                            mode={mode}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap justify-center [&>div]:w-full  [&>div]:cursor-pointer [&>div]:flex [&>div]:justify-center [&>div]:text-sm ">
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
