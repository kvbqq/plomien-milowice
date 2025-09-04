"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Regulations() {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  return (
    <main className={"pt-44 pb-28 flex flex-col items-center bg-white"}>
      <section
        className={`${
          isDesktop ? "w-[60rem]" : "w-[90%]"
        }  flex flex-col gap-5 text-lg`}
      >
        <h1 className="mb-10 font-semibold text-center text-xl">
          Regulamin <br /> członkostwa w stowarzyszeniu Projekt Zagłębie
          Akademia Siatkówki Płomień Milowice
        </h1>
        <h2 className="font-semibold">§ 1. Postanowienia ogólne</h2>
        <ol className="list-decimal pl-12">
          <li>
            Niniejszy regulamin określa zasady działania stowarzyszenia Projekt
            Zagłębie Akademia Siatkówki Płomień Milowice z siedzibą w Sosnowcu,
            ul. Plac Kościuszki 5 (41-205 Sosnowiec), wpisanego do ewidencji
            klubów sportowych pod numerem KS.48, NIP 6443582777, REGON:
            528562137, reprezentowanego przez: <br /> <br />
            Agatę Kopczyk - Prezesa Zarządu, <br /> <br /> zwanego dalej
            „Akademią”. <br />
            <br />
          </li>
          <li>
            Akademia prowadzi działalność na podstawie obowiązujących przepisów
            prawa oraz postanowień niniejszego regulaminu. <br />
            <br />
          </li>
          <li>
            Akademia jest sekcją piłki siatkowej klubu M.T.S Płomień Milowice.
            <br />
            <br />
          </li>
        </ol>
        <h2 className="font-semibold">§ 2. Zasady członkostwa</h2>
        <ol className="list-decimal pl-12">
          <li>
            Członkostwo w Akademii jest dobrowolne i może zostać nabyte poprzez
            złożenie elektronicznego formularza zgłoszeniowego oraz dokonanie
            wymaganej opłaty członkowskiej. <br />
            <br />
          </li>
          <li>
            Miesięczna opłata jest jednocześnie składką członkowską związaną z
            przynależnością do sekcji piłki siatkowej klubu M.T.S Płomień
            Milowice. <br />
            <br />
          </li>
          <li>
            Członek Akademii zobowiązany jest do przestrzegania niniejszego
            regulaminu oraz regulaminów zajęć. <br />
            <br />
          </li>
          <li>
            Akceptacja regulaminu jest jednoznaczna z potwierdzeniem członkostwa
            w Akademii. <br />
            <br />
          </li>
        </ol>

        <h2 className="font-semibold">§ 3. Uczestnictwo w zajęciach</h2>
        <ol className="list-decimal pl-12">
          <li>
            Zajęcia w Akademii prowadzone są przez wykwalifikowaną kadrę
            trenerską. <br />
            <br />
          </li>
          <li>
            O przynależności do grup treningowych decyduje kadra trenerska na
            podstawie wieku oraz umiejętności podopiecznych. <br />
            <br />
          </li>
        </ol>

        <h2 className="font-semibold">§ 4. Miejsce i czas zajęć</h2>
        <ol className="list-decimal pl-12">
          <li>
            Zajęcia sportowe odbywają się na obiektach zlokalizowanych w: <br />
            (1) Hala Sportowa, ul. Baczyńskiego 4, 41-203 Sosnowiec <br />
            (2) CKZiU Technikum nr 6, ul Legionów 9, 41-200 Sosnowiec <br />
            (3) Miejska Szkoła Podstawowa Nr 5 im. Wawrzyńca Hajdy w Piekarach
            Śląskich, ul. F. Chopina 11, 41-940 Piekary Śląskie <br />
            (4) Miejska Szkoła Podstawowa Nr 12 im. Jana Demarczyka w Piekarach
            Śląskich, ul. Związkowa 14, 41-949 Piekary Śląskie <br />
            <br />
          </li>
          <li>
            Zajęcia odbywają się na podstawie przygotowanego harmonogramu zajęć,
            dostępnego na platformie Sportsmanago.pl. <br />
            <br />
          </li>
        </ol>

        <h2 className="font-semibold">§ 5. Zasady płatności</h2>
        <ol className="list-decimal pl-12">
          <li>
            Wysokość miesięcznej składki członkowskiej określana jest przez
            Zarząd Akademii. <br />
            <br />
          </li>
          <li>
            Składka członkowska płatna jest z góry za miesiąc, do dziesiątego
            dnia każdego miesiąca. <br />
            <br />
          </li>
          <li>
            Płatności za członkostwo oraz uczestnictwo w zajęciach dokonywane są
            za pośrednictwem systemu Przelewy24. <br />
            <br />
          </li>
          <li>
            Do każdej transakcji może być doliczona prowizja operatora
            płatności, której wysokość zależy od wybranej metody płatności. Jest
            to standardowa opłata pobierana przez dostawcę usługi płatniczej.{" "}
            <br />
            <br />
          </li>
          <li>
            Akademia nie akceptuje tradycyjnych przelewów bankowych. W celu
            automatyzacji procesów księgowych, eliminacji błędów oraz sprawnego
            przypisywania wpłat do uczestników, wszystkie płatności realizowane
            są za pośrednictwem systemu Przelewy24. <br />
            <br />
          </li>
          <li>
            Brak opłaty członkowskiej w terminie upoważnia Akademię do
            niedopuszczenia Klubowicza do zajęć, aż do czasu jej uregulowania.{" "}
            <br />
            <br />
          </li>
        </ol>

        <h2 className="font-semibold">
          § 6. Prawa i obowiązki członka Akademii
        </h2>
        <ol className="list-decimal pl-12">
          <li>Członek Akademii przede wszystkim ma prawo do:</li>
          <ol className="list-[lower-alpha] pl-12">
            <li>
              uczestnictwa w zajęciach sportowych oraz pozostałych wydarzeniach
              organizowanych przez Akademię,
            </li>
            <li>
              korzystania z opieki trenerów Akademii i pozostałych członków
              Akademii,
            </li>
            <li>
              wyrażania w sposób kulturalny swojej opinii, przemyśleń i
              spostrzeżeń na temat zajęć jak i zachowań kolegów, grupy oraz
              trenerów. <br />
              <br />
            </li>
          </ol>
          <li>Członek Akademii ma obowiązek:</li>
          <ol className="list-[lower-alpha] pl-12">
            <li>
              przestrzegać regulaminów boisk/sal sportowych i zasad
              bezpieczeństwa,
            </li>
            <li>
              systematycznie uczestniczyć w zajęciach treningowych, godnie
              reprezentować Akademię zarówno w trakcie wszelkiego rodzaju imprez
              sportowych jak i w życiu codziennym, szanując swoich kolegów,
              przeciwników, trenerów i sędziów,
            </li>
            <li>
              punktualnie stawiać się na zajęcia w odpowiednim stroju sportowym,
              tj. nie później niż 5 minut przed ich rozpoczęciem,
            </li>
            <li>
              podczas zajęć być sumiennym i zdyscyplinowanym wykonując tylko i
              wyłącznie polecenia trenera/trenerów prowadzącego zajęcia,
            </li>
            <li>
              zgłaszać bezzwłocznie trenerowi wszelkie dolegliwości zdrowotne i
              problemy,
            </li>
            <li>
              dbać o sprzęt, z którego korzysta podczas zajęć. <br />
              <br />
            </li>
          </ol>
          <li>
            Akademia zastrzega sobie prawo do wprowadzania przez trenera
            dodatkowych zasad funkcjonujących w danej drużynie, które Członkowie
            Akademii mają obowiązek przestrzegać. <br /> <br />
          </li>
        </ol>

        <h2 className="font-semibold">
          § 7. Prawa i obowiązki Rodzica lub Opiekuna
        </h2>
        <ol className="list-decimal pl-12">
          <li>Rodzic lub Opiekun ma prawo do:</li>
          <ol className="list-decimal pl-12">
            <li>
              uzyskania bieżących informacji o zachowaniu, wynikach i sportowych
              postępach Podopiecznego,
            </li>
            <li>
              wspierania Akademii w procesie edukacyjnym i wychowawczym
              Podopiecznego. <br /> <br />
            </li>
          </ol>
          <li>Rodzic lub Opiekun zobowiązuje się do:</li>
          <ol className="list-decimal pl-12">
            <li>
              unikania kontaktu z Podopiecznym w trakcie zajęć treningowych i
              zawodów, ponieważ może to powodować dekoncentrację Podopiecznego i
              zaburzenie pracy grupy; w przypadku ważnych spraw niecierpiących
              zwłoki należy zwracać się bezpośrednio do trenera,
            </li>
            <li>
              przebywania podczas meczów i zawodów sportowych na trybunach
              obiektu sportowego, na którym odbywają się zawody, w tym także
              kulturalnego zachowania, niepodważania decyzji sędziego i trenera
              oraz nieobrażania drużyny przeciwnej lub innych uczestników
              zawodów,
            </li>
            <li>
              uczestniczenia aktywnie w inicjatywach organizowanych przez
              Akademię, systematycznego śledzenia strony internetowej Akademii
              oraz profilu społecznościowego Akademii prowadzonego na Facebook’u
              w celu uzyskania bieżących informacji o Akademii,
            </li>
            <li>
              dbania o bezpieczeństwo Podopiecznego przed treningiem oraz po
              jego zakończeniu,
            </li>
            <li>
              zapewnienia opieki Podopiecznemu przed rozpoczęciem treningu,
              zawodów i po ich zakończeniu, wspierania Podopiecznego w
              realizacji zajęć, unikania nadmiernej krytyki za ewentualne
              niepowodzenia sportowe, współpracy z trenerami i przedstawicielami
              Akademii w sprawach wychowawczych,
            </li>
            <li>
              niepodważania autorytetu trenera, zarówno w obecności
              Podopiecznego, innych uczestników Akademii, jak i innych rodziców,
              czy opiekunów. Ze wszystkimi problemami i wątpliwościami należy
              zgłaszać się indywidualnie do trenera prowadzącego. <br /> <br />
            </li>
          </ol>
        </ol>

        <h2 className="font-semibold">§ 8. Odstąpienie od regulaminu</h2>
        <ol className="list-decimal pl-12">
          <li>
            Członek Akademii, który chce odstąpić od umowy, musi złożyć pisemne
            lub drogą elektroniczną na adres e-mail:
            “akademia@plomienmilowice.pl” oświadczenie do dwudziestego dnia
            każdego miesiąca. W takim przypadku uczestnictwo w zajęciach
            zakończy się z końcem bieżącego miesiąca, a od następnego miesiąca
            członek nie będzie brał udziału w zajęciach. <br />
            <br />
          </li>
          <li>
            Akademia może anulować członkostwo w trybie natychmiastowym bez
            okresu wypowiedzenia, jeżeli w opinii Akademii kontynuacja
            członkostwa może zaszkodzić reputacji i interesom Akademii, w
            szczególności z powodu agresywnego lub groźnego zachowania,
            wandalizmu lub innych zachowań niezgodnych z zasadami współżycia
            społecznego i niniejszym Regulaminem. <br />
            <br />
          </li>
          <li>
            . Akademia może anulować członkostwo w trybie natychmiastowym bez
            okresu wypowiedzenia, jeżeli:
          </li>
          <ol className="list-[lower-alpha] pl-12">
            <li>członek Akademii naruszy warunki członkostwa;</li>
            <li>
              członek Akademii zalega z płatnością co najmniej dwóch opłat
              miesięcznych i nie zostaną one uregulowane pomimo powiadomienia
              przez Akademi o zaległości i wyznaczenia dodatkowego terminu do
              zapłaty. W przypadku, gdy osoba, której anulowano członkostwo z
              powodu braku płatności chciałaby ponownie zostać Członkiem
              Akademii, Akademia może uzależnić zawarcie nowego przystąpienia do
              członkostwa od zapłaty wszystkich zaległości wynikających z
              poprzedniej deklaracji członkowskiej. <br /> <br />
            </li>
          </ol>
        </ol>

        <h2 className="font-semibold">§ 9. Reklamacje</h2>
        <ol className="list-decimal pl-12">
          <li>
            Reklamacje dotyczące działalności Akademii należy składać pisemnie
            lub drogą elektroniczną na adres e-mail: akademia@plomienmilowice.pl
            <br />
            <br />
          </li>
          <li>
            Reklamacja zostanie rozpatrzona w ciągu 14 dni. <br />
            <br />
          </li>
        </ol>

        <h2 className="font-semibold">
          § 10. Odpowiedzialność Rodziców i Opiekunów
        </h2>
        <ol className="list-decimal pl-12">
          <li>
            Rodzic lub opiekun oświadcza, że według jego najlepszej wiedzy nie
            ma żadnych przeciwwskazań zdrowotnych i medycznych, aby podopieczny
            podejmował wzmożony wysiłek fizyczny podczas zajęć Akademii oraz że
            lekarz sportowy/rodzinny nie widzi przeciwskazań do uprawiania
            sportu przez podopiecznego.
            <br />
            <br />
          </li>
          <li>
            Rodzice lub opiekunowie prawni zobowiązani są do zapewnienia, że
            dzieci przestrzegają zasad uczestnictwa oraz norm zachowania
            obowiązujących w Akademii. <br />
            <br />
          </li>
          <li>
            Akademia oraz trenerzy Akademii nie ponosi odpowiedzialności za
            rzeczy osobiste podopiecznych pozostawione na terenie obiektów
            sportowych, na których odbywane są zajęcia. <br />
            <br />
          </li>
          <li>
            Akademia oraz trenerzy Akademii nie ponoszą odpowiedzialności za
            wypadki zaistniałe w czasie trwania ćwiczeń wynikające ze złego
            stanu zdrowia Podopiecznego (jeśli ten stan zdrowia nie był
            trenerowi zgłoszony), niestosowania się Podopiecznego do poleceń
            trenera. <br />
            <br />
          </li>
        </ol>

        <h2 className="font-semibold">§ 11. Zmiana regulaminu</h2>
        <ol className="list-decimal pl-12">
          <li>
            Akademia zastrzega sobie prawo do zmiany treści niniejszego
            regulaminu w dowolnym momencie. <br />
            <br />
          </li>
          <li>
            O wszelkich zmianach w regulaminie członkowie Akademii zostaną
            poinformowani z co najmniej 14-dniowym wyprzedzeniem, za
            pośrednictwem poczty elektronicznej oraz ogłoszenia na stronie
            internetowej Akademii. <br />
            <br />
          </li>
          <li>
            W przypadku braku akceptacji zmian regulaminu, członek Akademii ma
            prawo do odstąpienia od umowy w terminie 14 dni od otrzymania
            informacji o zmianach. <br />
            <br />
          </li>
          <li>
            Kontynuacja uczestnictwa w zajęciach po wejściu zmian w życie
            oznacza akceptację nowego regulaminu. <br />
            <br />
          </li>
        </ol>

        <h2 className="font-semibold">§ 12. Postanowienia końcowe</h2>
        <ol className="list-decimal pl-12">
          <li>
            W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
            odpowiednie przepisy prawa polskiego.
            <br />
            <br />
          </li>
          <li>Regulamin wchodzi w życie z dniem 1 września 2025 r.</li>
        </ol>
      </section>
    </main>
  );
}
