import { Slider } from "@/components/slider/Slider";

const LandingCard = () => {
  return (
    <article
      className={
        "h-[30rem] w-[55rem] flex items-center justify-center bg-nav-bg-start/[.8] backdrop-blur-sm rounded-3xl text-white"
      }
    >
      <div
        className={
          "h-[23rem] w-[48rem] bg-cover bg-no-repeat bg-right-bottom bg-landing-card-bg tracking-widest"
        }
      >
        <h1 className={"w-[30rem] text-3xl font-extrabold"}>
          AKADEMIA SIATKÓWKI PŁOMIEŃ MILOWICE
        </h1>
        <p className={"w-[25rem] mt-8 text-xl"}>
          W sercu Milowic, tworzymy przyszłych mistrzów, ucząc siatkówki z pasją
          <br />i profesjonalizmem
        </p>
        <div
          className={
            "w-[20rem] mt-20 p-6 text-center font-bold bg-gradient-to-r from-nav-bg-start to-nav-bg-end rounded-xl shadow-lg"
          }
        >
          Rozpalmy razem płomień!
        </div>
      </div>
    </article>
  );
};

export const Landing = () => {
  return (
    <header
      className={
        "h-svh min-h-[40rem] bg-cover flex items-center justify-center relative bg-center bg-landing-image"
      }
    >
      <LandingCard />
      <Slider />
    </header>
  );
};
