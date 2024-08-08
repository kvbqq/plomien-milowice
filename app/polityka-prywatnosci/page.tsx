"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function PrivacyPolicy() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main className={"pt-44 pb-28 flex flex-col items-center bg-white"}>
      <section
        className={`${
          isDesktop ? "w-[60rem]" : "w-[90%]"
        }  flex flex-col gap-5 text-lg`}
      >
        <h1 className="font-semibold">Polityka prywatności</h1>
        <p className="text-justify">
          W związku z wejściem w życie w dniu 25 maja 2018 r. rozporządzenia
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (Ogólne rozporządzenie o ochronie danych
          osobowych; RODO), informujemy, iż:
        </p>
        <ol className="list-decimal pl-12 text-justify">
          <li>
            Administratorem danych osobowych członków Akademii jest
            stowarzyszenie Projekt Zagłębie Akademia Siatkówki Płomień Milowice
            z siedzibą w Sosnowcu, ul. Plac Kościuszki 5 (41-205 Sosnowiec).
            <br />
            <br />
          </li>
          <li>
            Akademia Siatkówki Płomień Milowice nie powołuje inspektora danych
            osobowych. We wszelkich sprawach dotyczących przetwarzania danych
            można kontaktować się drogą elektroniczną na adres e-mail:
            akademia@plomienmilowice.pl <br />
            <br />
          </li>
          <li>
            Dane osobowe członków Akademii przetwarzane będą w celu realizacji
            działań statutowych Stowarzyszenia i nie będą udostępniane innym
            odbiorcom, z wyjątkiem podmiotów koniecznych dla realizacji w/w
            celów, oraz uprawnionych na podstawie przepisów prawa.
            <br />
            <br />
            Przetwarzanie danych osobowych jest niezbędne do realizacji
            wskazanego wyżej celu oraz odpowiadających temu celowi prawnie
            uzasadnionych interesów administratora. Podstawą prawną
            przetwarzania danych osobowych są przepisy art. 6 ust. 1 lit. a, b,
            c, e, f Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679
            z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w
            związku z przetwarzaniem danych osobowych i w sprawie swobodnego
            przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.
            <br />
            <br />
          </li>
          <li>
            Podanie danych osobowych jest dobrowolne, jednak niezbędne do
            realizacji działań statutowych. Pomimo dobrowolności, konsekwencją
            niepodania danych osobowych będzie brak możliwości wstąpienia do
            Stowarzyszenia bądź brania udziału w działaniach podejmowanych przez
            Stowarzyszenie w ramach swojej działalności statutowej. Odbiorcami
            danych członków Akademii mogą być: <br />
            <br />
          </li>
          <ol className="list-[lower-alpha] pl-12">
            <li>
              organy władzy publicznej oraz podmioty wykonujące zadania
              publiczne lub działające na zlecenie organów władzy publicznej, w
              zakresie i w celach, które wynikają z przepisów powszechnie
              obowiązującego prawa,
            </li>
            <li>
              inne podmioty, które na podstawie stosownych umów podpisanych z
              Projektem Zagłębie Akademia Siatkówki Płomień Milowice
              przetwarzają dane osobowe, np. firmy księgowe, transportowe,
              agencje ubezpieczeniowe, biura podróży, hotele i inne obiekty
              świadczące usługi noclegowe i inne.
              <br />
              <br />
            </li>
          </ol>
          <li>
            Dane członków Akademii będą przetwarzane i przechowywane przez nas
            przez okres niezbędny ze względu na cel ich przetwarzania i
            obowiązujące przepisy prawa. Dane przetwarzane dla potrzeb
            marketingu bezpośredniego produktów i usług Projektu Zagłębie
            Akademia Siatkówki Płomień Milowice będą przetwarzane do czasu, aż
            członek Akademii nie zgłosi sprzeciwu względem ich przetwarzania w
            tym celu.
            <br />
            <br />
          </li>
          <li>
            Po zakończeniu przetwarzania danych osobowych w pierwotnym celu
            wskazanym w pkt 6, dane osobowe będą przetwarzane przez okres 6 lat
            w celu ewentualnego dochodzenia roszczeń.
            <br />
            <br />
          </li>
          <li>
            Jeśli umowa zawarta pomiędzy Administratorem a podmiotem w celu
            przetwarzania danych osobowych w pierwotnym celu wskazanym w pkt 6
            wskazywać będzie dłuższy niż 6-letni okres przetwarzania danych
            osobowych po zakończeniu pierwotnego celu przetwarzania,
            zastosowanie ma okres wskazany we wspomnianej umowie.
            <br />
            <br />
          </li>
          <li>
            Członkowie Akademii mają prawo żądania od Administratora dostępu do
            swoich danych osobowych, ich sprostowania, zaktualizowania,
            usunięcia lub ograniczenia przetwarzania danych osobowych oraz
            przenoszenia danych do innego Administratora (w zakresie określonym
            w art. 20 RODO), do wniesienia skargi do Prezesa Urzędu Ochrony
            Danych Osobowych, gdy uznają, że przetwarzanie danych osobowych
            narusza przepisy Ogólnego rozporządzenia o ochronie danych
            osobowych, oraz do wniesienia sprzeciwu wobec przetwarzania danych
            osobowych.
            <br />
            <br />
          </li>
        </ol>
      </section>
    </main>
  );
}
