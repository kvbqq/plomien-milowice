import { Landing } from "./landing/Landing";
import { About } from "./about/About";
import { Offer } from "./offer/Offer";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Offer />
    </main>
  );
}
