const AboutCard = () => {
  return (
    <article
      className={
        "h-[50%] w-[46rem] p-10 bg-no-repeat bg-right-bottom bg-about-card-image rounded-3xl shadow-xl"
      }
    >
      <h1>O akademii</h1>
    </article>
  );
};

export const About = () => {
  return (
    <section className={"h-svh bg-cover flex items-center justify-center"}>
      <AboutCard />
    </section>
  );
};
