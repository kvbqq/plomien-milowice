import { Button } from "@/components/button/Button";

const AboutCard = () => {
  return (
    <article
      className={
        "h-[26rem] w-[55rem] p-14 bg-no-repeat bg-cover bg-right-bottom bg-about-card-image rounded-3xl shadow-2xl"
      }
    >
      <h1 className={"text-2xl font-medium"}>O akademii</h1>
      <h2 className={"mt-5 mb-2 text-lg font-medium"}>
        Nasza <span className={"text-custom-gold"}>misja</span>
      </h2>
      <p className={"w-[26rem] mb-14"}>
        Kształcimy młodych sportowców, promując zdrowy styl życia i wartości
        społeczne w Milowicach. Tworzymy inspirujące środowisko, gdzie pasja,
        dyscyplina i współpraca prowadzą do sukcesów.
      </p>
      <Button text="Poznaj nas" />
    </article>
  );
};

const AboutOwner = () => {
  return (
    <article className={"h-[26rem] w-[55rem] p-14"}>
      <h1 className={"text-2xl font-medium"}>
        Założycielka <span className={"text-custom-gold"}>akademii</span>
      </h1>
      <div>
        <div></div>
      </div>
    </article>
  );
};

export const About = () => {
  return (
    <section className={"my-24 flex flex-col items-center space-y-10"}>
      <AboutCard />
      <AboutOwner />
    </section>
  );
};
