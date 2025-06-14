import { Landing } from "./landing/Landing";
import { About } from "./about/About";
import { Offer } from "./offer/Offer";
import { Locations } from "./locations/Locations";

export default function Home() {
  return (
    <main>
      <Landing />
      <Locations />
      <Offer />
      <About />
    </main>
  );
}
