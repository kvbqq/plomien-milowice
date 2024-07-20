import { Landing } from "./landing/Landing";
import { About } from "./about/About";
import { Offer } from "./offer/Offer";
import { ContactFooter } from "./contactFooter/ContactFooter";

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Offer />
      <ContactFooter />
    </main>
  );
}
