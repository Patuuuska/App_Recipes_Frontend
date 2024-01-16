import {RecipeType} from "../../types/RecipeType";
import {RecipeItem} from "./RecipeItem";
import {SimpleGrid} from "@mantine/core";

const data: RecipeType[] = [
    {
        id: 1,
        title: "Klasyczne Spaghetti Bolognese",
        content: `
    Składniki:
    - 400g mielonego mięsa wołowego
    - 1 cebula, posiekana
    - 2 ząbki czosnku, posiekane
    - 400g passaty pomidorowej
    - 2 łyżki koncentratu pomidorowego
    - 1 łyżeczka suszonego oregano
    - 1 łyżeczka suszonego bazylii
    - Sól i pieprz do smaku
    - 300g makaronu spaghetti

    Przygotowanie:
    1. Na patelni rozgrzej olej, dodaj cebulę i czosnek, smaż aż będą miękkie.
    2. Dodaj mięso, smaż na złoty kolor.
    3. Dodaj passatę pomidorową, koncentrat pomidorowy, oregano, bazylię, sól i pieprz. Gotuj na małym ogniu przez około 20 minut.
    4. W międzyczasie ugotuj makaron al dente według wskazówek na opakowaniu.
    5. Podawaj sos bolognese na ugotowanym makaronie. Smacznego!
  `,
    },
    {
        id: 2,
        title: "Kurczak Teriyaki z Warzywami",
        content: `
      Składniki:
      - 4 filety z kurczaka
      - 1/2 szklanki sosu teriyaki
      - 2 łyżki oleju sezamowego
      - 1 cebula, pokrojona w plastry
      - 1 czerwona papryka, pokrojona w paski
      - 1 marchewka, pokrojona w plasterki
      - 1 brokuł, podzielony na różyczki
      - Sól i pieprz do smaku
      - Ryż do podania

      Przygotowanie:
      1. Rozgrzej olej sezamowy na dużej patelni.
      2. Smaż kurczaka na patelni przez około 5 minut z każdej strony.
      3. Dodaj cebulę, paprykę, marchew i brokuły. Smaż przez kolejne 5 minut.
      4. Dodaj sos teriyaki i dusź na małym ogniu przez 10 minut, aż kurczak jest gotowy.
      5. Podawaj na ugotowanym ryżu. Smacznego!
    `,
    },
    {
        id: 3,
        title: "Sałatka Caprese z Kurczakiem",
        content: `
      Składniki:
      - 2 filety z kurczaka
      - 1 łyżka oliwy z oliwek
      - Sól i pieprz do smaku
      - 2 pomidory, pokrojone w plastry
      - 1 kulka mozzarelli, pokrojona w plastry
      - Świeża bazylia
      - Oliwa z oliwek do polewania

      Przygotowanie:
      1. Skrop kurczaka oliwą z oliwek, posól i popieprz.
      2. Smaż kurczaka na patelni przez 6-8 minut z każdej strony.
      3. W dużej misce ułóż plastry pomidorów i mozzarelli.
      4. Pokrój upieczonego kurczaka na plastry i umieść na warzywach.
      5. Posyp bazylią, polej oliwą z oliwek. Podawaj od razu.
    `,
    },
    {
        id: 4,
        title: "Zupa Pomidorowa z Makaronem",
        content: `
      Składniki:
      - 1 kg pomidorów, obranych i pokrojonych w kostkę
      - 1 cebula, posiekana
      - 2 ząbki czosnku, posiekane
      - 1 marchewka, obrana i pokrojona w kostkę
      - 1 pietruszka, obrana i pokrojona w kostkę
      - 100 g makaronu (np. świderki)
      - 1 łyżka oliwy z oliwek
      - 1 litr bulionu warzywnego
      - Sól i pieprz do smaku
      - Świeża natka pietruszki do posypania

      Przygotowanie:
      1. Na patelni rozgrzej oliwę z oliwek, dodaj cebulę i czosnek, smaż aż będą miękkie.
      2. Dodaj pomidory, marchewkę i pietruszkę. Smaż przez kilka minut.
      3. Wlej bulion warzywny i gotuj na małym ogniu przez 20 minut.
      4. Dodaj makaron i gotuj, aż będzie gotowy.
      5. Posól i popieprz do smaku, posyp świeżą natką pietruszki. Podawaj ciepłą.
    `,
    },
    {
        id: 5,
        title: "Hummus z Warzywami",
        content: `
      Składniki:
      - 1 puszka ciecierzycy, odcedzona
      - 2 łyżki pasty tahini
      - 2 ząbki czosnku
      - Sok z 1 cytryny
      - 3 łyżki oliwy z oliwek
      - Sól i pieprz do smaku
      - Marchewki, ogórki i papryka do podania

      Przygotowanie:
      1. W blenderze połącz ciecierzycę, pastę tahini, czosnek, sok z cytryny i oliwę z oliwek.
      2. Miksuj, aż powstanie gładka masa.
      3. Dopraw solą i pieprzem do smaku.
      4. Podawaj z pokrojonymi w słupki warzywami.
    `,
    },
    {
        id: 6,
        title: "Pieczony Filet Z Dorsza z Ziołami",
        content: `
      Składniki:
      - 4 filety z dorsza
      - 2 łyżki oliwy z oliwek
      - 1 łyżka świeżo posiekanej natki pietruszki
      - 1 łyżeczka suszonego majeranku
      - Sok z 1/2 cytryny
      - Sól i pieprz do smaku

      Przygotowanie:
      1. Rozgrzej piekarnik do 200°C.
      2. Wymieszaj oliwę, natkę pietruszki, majeranek, sok z cytryny, sól i pieprz.
      3. Natrzyj mieszanką filety z dorsza.
      4. Umieść filety na blasze do pieczenia i piecz przez 15-20 minut, aż ryba będzie miękka i dobrze się kruszy.
      5. Podawaj z ulubionymi warzywami. Smacznego!
    `,
    },
    {
        id: 7,
        title: "Ciasto Czekoladowe z Malinami",
        content: `
      Składniki:
      - 200g czekolady gorzkiej
      - 200g masła
      - 4 jajka
      - 1 szklanka cukru
      - 1 szklanka mąki
      - 1 łyżeczka proszku do pieczenia
      - 1 szklanka malin

      Przygotowanie:
      1. Rozgrzej piekarnik do 180°C. Wylep formę do pieczenia papierem.
      2. Rozpuść czekoladę i masło w kąpieli wodnej.
      3. Ubij jajka z cukrem na puszystą masę.
      4. Dodaj rozpuszczoną czekoladę z masłem do masy jajecznej.
      5. Wymieszaj mąkę z proszkiem do pieczenia i dodaj do masy. Delikatnie wymieszaj.
      6. Na koniec dodaj maliny, wymieszaj i wlej masę do formy.
      7. Piecz przez 30-35 minut. Po upieczeniu pozostaw do ostygnięcia. Smacznego!
    `,
    },
    {
        id: 8,
        title: "Pasta z Soczewicy z Bakłażanem",
        content: `
      Składniki:
      - 1 szklanka soczewicy
      - 1 bakłażan, pokrojony w kostkę
      - 1 cebula, posiekana
      - 2 ząbki czosnku, posiekane
      - 1 puszka pomidorów krojonych
      - 1 łyżeczka czerwonej papryki w proszku
      - 1 łyżeczka kuminu
      - Sól i pieprz do smaku
      - Oliwa z oliwek do smażenia

      Przygotowanie:
      1. Gotuj soczewicę według wskazówek na opakowaniu.
      2. Na dużej patelni rozgrzej oliwę z oliwek, dodaj cebulę i czosnek, smaż aż będą miękkie.
      3. Dodaj bakłażana i smaż, aż będzie miękki.
      4. Dodaj pomidory, paprykę w proszku, kumin, sól i pieprz. Gotuj na małym ogniu przez 15 minut.
      5. Dodaj gotowaną soczewicę i wymieszaj. Gotuj jeszcze przez 5 minut.
      6. Podawaj z ulubionymi dodatkami. Smacznego!
    `,
    },
    {
        id: 9,
        title: "Jajecznica z Awokado i Pomidorami",
        content: `
      Składniki:
      - 3 jajka
      - 1 awokado, pokrojone w kostkę
      - 1 pomidor, pokrojony w kostkę
      - 1 łyżka masła
      - Sól i pieprz do smaku
      - Posiekana natka pietruszki do dekoracji

      Przygotowanie:
      1. Na patelni rozgrzej masło.
      2. Dodaj jajka i smaż na średnim ogniu, mieszając je drewnianą łyżką.
      3. Gdy jajka zaczną się ścielać, dodaj awokado i pomidory. Mieszaj delikatnie.
      4. Kontynuuj smażenie, aż jajka będą gotowe, a warzywa delikatnie podsmażone.
      5. Dopraw solą i pieprzem, posyp natką pietruszki. Podawaj od razu. Smacznego!
    `,
    },
]
export const RecipePage = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <RecipeItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}

