# Blokwereld

Nederlandstalige leer-webapp voor de basisschool (groep 3 t/m 5+), gericht op **beelddenkers** en kinderen met (mogelijke) **dyslexie**. De app combineert oefenen (rekenen, spelling, lezen, talen, kritisch denken) met een game-beloningslus in blokjes-bouwstijl. Alles draait in één `index.html`, zonder framework en zonder build-stap.

Versie: **3.8.0** (zichtbaar in de footer).

Nieuw in **3.8.0** — *klaar voor de kids-test (freemium)*: de app is voorbereid op een testronde op **iPhone en Android** als PWA. Er is een **Premium-scherm** (⭐ in de balk) als fake-door om interesse te peilen — tijdens de test is alles gratis en ontgrendeld (`TESTMODUS = true`; de haak `heeftPremium()` staat klaar voor later afschermen). Nieuw: een **installatie-tip** en install-knop (Android-installprompt + iOS "zet op beginscherm"), iOS-thuisscherm-meta, een **feedbackknop** (mailt naar `FEEDBACK_EMAIL`), en een aparte ouderpagina **`installeren.html`** met stap-voor-stap uitleg per platform. Zie **`PUBLICEREN.md`** voor de volledige publicatie- en testgids. De hele app heeft een zachte, ronde, speelse pastel-look (Toca-geïnspireerd, eigen stijl — geen merkassets).

Nieuw in **3.7.0** — *veel meer content*: alle spellen zijn minstens **verviervoudigd** zodat de app lang uitdagend blijft. Grofweg: rekenen ~1780 sommen (4×), spelling ~314 woorden, flitswoorden ~287, memory ~183, talen ~194, denken ~193, beelddenken ~345, Beeldlab ~152 puzzels en ~180 creatieve opdrachten. De rekenopgaven komen uit `gen_sommen.js`; de overige uitbreiding uit `gen_content.js` (gecureerde woordenschat + template-generatie, met dezelfde validatie als de testsuite). Draai `node gen_content.js` om nog meer te genereren.

Nieuw in **3.6.0** — *beter beheer + afbeeldingen*: het beheerscherm (`beheer.html`) is opnieuw opgebouwd met een **overzichtelijk tabblad-menu** (één onderdeel tegelijk in beeld) in plaats van één lange lijst. Nieuw is een volwaardig **afbeeldingssysteem**: je kunt eigen plaatjes uploaden voor **memory**, **talen**, de **mascottes** en de **app-iconen**, met per plek de juiste **formaten, maten en gewichten**. Het beheer controleert elke upload op formaat (PNG/WebP/SVG/JPG/GIF), afmetingen en bestandsgrootte, en **weigert** wat niet voldoet (waarschuwen én blokkeren). App-iconen moeten exact 192×192 of 512×512 PNG zijn. De app toont voortaan een eigen afbeelding waar die is ingesteld, met de emoji als terugval.

Nieuw in **3.5.0** — *doe-puzzels voor beelddenkers*: er is een nieuw onderdeel **Beeldlab** (🧩) met vier activiteiten die verder gaan dan aanwijzen: **Op volgorde** (tik de beelden in de juiste volgorde, bv. klein → groot), **Na-bouwen** (bouw een klein kleurpatroon na op een raster), **Geheugen** (kijk kort naar een rij, dan verdwijnt hij — welke zag je?) en **Zoekplaat** (tik alle doelen in een veld — visueel scannen). Weinig tekst, alles voorleesbaar, eigen level en beloning. De inhoud staat in `data/beeldlab.js`. Dit verschuift het denken van *herkennen* naar *doen en verbeelden*.

Nieuw in **3.4.0** — *eigen content beheren*: er is nu een lokaal **beheerscherm (CMS)**, `beheer.html`. Daarmee wijzig je alle leerstof (rekenen, spelling, flitswoorden, memory, talen, tekst-denken, beelddenken en de creatieve opdrachten) én de **mascottes** — inclusief het uploaden van een **eigen mascotte-afbeelding** per thema. Het beheerscherm controleert je invoer met dezelfde regels als de testsuite en weigert de export bij een fout. Je exporteert de bijgewerkte `data/…js`-bestanden en zet ze terug in de map `data/`. Er is geen server en er gaat niets naar internet. Zie *Beheer / eigen content* verderop. De mascottes zijn hiervoor verhuisd naar `data/mascottes.js`.

Nieuw in **3.3.0** — *focus op de beelddenker*: de **Denkgrot** is omgebouwd tot een echt rechterbrein-onderdeel. In plaats van tekstvragen die je moet lezen, krijgt het kind nu **visuele puzzels** met grote, tikbare beeldtegels en minimale tekst (alles ook voorgelezen): *hoort er niet bij*, *maak de rij af*, *draai-/pijlpatroon*, *spiegelen*, *zoek dezelfde*, *grootste/kleinste* en *ontbrekend stuk*. De puzzels staan in `data/beelddenken.js` en zijn even eenvoudig uit te breiden als de overige content. Visuele puzzels staan centraal in de flow; de oude tekst-denkopgaven en de wondervraag komen af en toe nog langs voor variatie.

Nieuw in **3.2.0**: elk thema heeft nu een eigen **mascotte** op het startscherm — een groot, zachtjes bewegend figuurtje met een spraakbubbel dat het kind bij naam begroet en aanmoedigt. Tik erop en het maatje praat (voorlezen via de systeemstem). De mascotte wisselt automatisch mee met het gekozen thema: 🦫 Bram (Craft), 👽 Kosmo (Galaxy), 🍄 Turbo (Power-Up) en 🦄 Fee (Unicorn). De animatie respecteert `prefers-reduced-motion`.

---

## Starten

Er is geen installatie of build nodig.

- **Snel proberen:** dubbelklik op `index.html` — de app werkt via `file://`.
- **Aanbevolen (PWA/offline/voorlezen):** serveer de map via een statische server, bijvoorbeeld:

  ```bash
  cd blokwereld
  python3 -m http.server 8000
  # open http://localhost:8000
  ```

  Via `https` (bijv. GitHub Pages) werkt de app na het eerste bezoek ook **offline** en is hij **installeerbaar** (iOS: Deel → *Zet op beginscherm*; Android: menu → *App installeren*).

De eerste keer vraagt de app om een naam, leeftijd, speeltijd en (optioneel) een ouder-PIN. Onderaan staat een **Reset**-link die alle gegevens wist.

## Deployen (GitHub Pages)

De app is een statische map en is klaar om te publiceren. De aanbevolen route is **GitHub Pages** (gratis, `https` → offline + installeerbaar):

1. Maak een GitHub-repository en push de **inhoud van deze map** naar de `main`-branch (de bestanden `index.html`, `manifest.json`, `sw.js`, `data/`, `icons/` staan dan in de repo-root).
2. Ga in de repo naar **Settings → Pages** en zet *Source* op **GitHub Actions**.
3. De meegeleverde workflow `.github/workflows/deploy.yml` draait bij elke push naar `main` eerst de testsuite (`node tests/test.js`) en publiceert daarna automatisch. **Bij een gefaalde test wordt niet gedeployed.**
4. Na de eerste run staat de app op `https://<gebruiker>.github.io/<repo>/`.

Omdat de service worker met relatieve paden werkt (`scope: "./"`), werkt de app zowel op een projectsubpad (`/repo/`) als op een eigen (sub)domein zonder aanpassing.

**Andere hosts** (Netlify, Vercel, Cloudflare Pages, of een eigen webserver): upload simpelweg de hele map als statische site. Er is geen build-stap. Enige vereiste voor PWA-functies (offline + installeren) is dat de site via **`https`** wordt geserveerd. Google Fonts wordt via een CDN geladen als *progressive enhancement*; valt die weg (bv. offline), dan schakelt de app netjes terug op systeemfonts. De service worker laat cross-origin verzoeken (zoals de fonts) ongemoeid en cachet alleen de eigen bestanden.

**Deploychecklist:** `node tests/test.js` groen · `APP_VERSIE` (index.html) = `CACHE_VERSIE` (sw.js) · `manifest.json` geldig met maskable iconen · serveren via `https`.

## Testen

De volledige testsuite draait headless met Node (< 1 seconde):

```bash
node tests/test.js
```

De suite dekt drie lagen:

1. **Contentvalidatie** — antwoorden kloppen en zijn positieve gehele getallen, geen dubbele sommen, woorddelen vormen exact het woord, instinker zit nooit in het woord, goed-antwoord staat in de opties, lookalikes bevatten het woord niet, verplichte velden aanwezig.
2. **Knop→functie-dekking** — elke `onclick`/`onchange` in `index.html` verwijst naar een bestaande functie (vangt kapotte knoppen vóór de gebruiker dat doet).
3. **Headless scenario-tests** — met een stateful DOM-stub (`tests/harness.js`) wordt elk spel doorgespeeld: Rekenmijn (12 goede antwoorden met level-ups, fout registreert, hints voor álle somtypes, Mijn muur, adaptief model), Smederij (foto→bouwen→achterstevoren, ook dubbele klankdelen), Bouwmeester (verhaaltjessommen + analoge klok), Woordflitser, Fotomemory, beide talen, Denkgrot (gewone puzzel én geforceerde wondervraag), Bouwmodus (bouwen/weghakken kosten, avontuur gratis, verstopte schat, challenge, verhaal), alle 4 thema's, alle leeftijden 5–12, dagquest→kist en de schermtijd-limiet.

**Definition of done:** een wijziging is pas klaar als (a) `node tests/test.js` volledig groen is, (b) bij nieuwe functionaliteit ook nieuwe tests zijn toegevoegd, en (c) `APP_VERSIE` (in `index.html`) én `CACHE_VERSIE` (in `sw.js`) zijn opgehoogd.

## Content aanvullen

Alle leerstof staat in losse databestanden in `data/`, die vóór het hoofdscript geladen worden. Elk bestand heeft een uitlegheader voor ouders/redacteuren. Houd het formaat exact aan; `node tests/test.js` bewaakt de correctheid.

| Bestand | Formaat |
|---|---|
| `data/sommen.js` | `{ a, op:"+"\|"−"\|"×"\|":"\|"½", b, niveau:1-3 }` — antwoorden altijd positief en geheel, geen dubbelen |
| `data/woorden.js` | `{ w, delen:[...], extra:[...], niveau }` — delen samengevoegd = `w`; instinker (`extra`) nooit in het woord |
| `data/flitswoorden.js` | `{ w, alt:[2 lookalikes], niveau }` — lookalikes bevatten `w` niet |
| `data/memory.js` | `{ w, plaatje, niveau }` |
| `data/talen.js` | `{ nl, en, es, plaatje, niveau }` |
| `data/denken.js` | `{ soort, vraag, opties[], goed, uitleg, niveau }` — `goed` staat letterlijk in `opties` (tekst-denkopgaven) |
| `data/beelddenken.js` | `{ soort, opdracht, toon?[], opties[], goed, uitleg, niveau }` — visuele puzzels; `goed` staat uniek in `opties`, `toon` mag `"❓"` als gat bevatten |
| `data/mascottes.js` | `MASCOTTES` per thema: `{ emoji, naam, zinnen:[...], afbeelding? }` — afbeelding (pad of data-URL) vervangt de emoji |
| `data/creatief.js` | `CHALLENGE_DATA`, `WONDER_DATA`, `STARTZIN_DATA` (open opdrachten) |

## Beheer / eigen content (`beheer.html`)

Naast de kinderapp zit er een lokaal **beheerscherm**: open `beheer.html` in je browser (dubbelklikken mag, of via dezelfde http-server als de app). Hiermee kun je zonder programmeren:

- alle leerstof toevoegen, wijzigen of verwijderen (rekenen, spelling, flitswoorden, memory, talen, tekst-denken, beelddenken en de creatieve opdrachten);
- de vier **mascottes** aanpassen: emoji, naam, aanmoedigingen, en een **eigen afbeelding uploaden** per thema (de afbeelding vervangt dan de emoji in de app).

Het beheerscherm valideert je invoer live met dezelfde regels als de testsuite en **weigert de export bij een fout**. Klik per onderdeel op *Exporteer* (of onderaan *Exporteer alles*); je downloadt dan de bijgewerkte `data/…js`-bestanden. Zet die terug in de map `data/` (overschrijven) en ververs de app. Alles blijft op je eigen computer — er is geen server en geen internet nodig. Dit is de eenvoudige, statische beheeroplossing; het uitgebreide online CMS met inlog, rollen en workflow is de aparte commerciële fase (zie *Beheerportaal* onderaan).

`niveau` 1 = groep 3, 2 = groep 4, 3 = groep 5+. Content t/m het eigen niveau doet mee; lagere niveaus draaien als herhaling.

`gen_sommen.js` genereert `data/sommen.js` systematisch per leerlijn (`node gen_sommen.js`); handmatig aanvullen mag ook.

## Profiel & niveaus

Bij de eerste start (en via de 👤-knop) kiest het kind naam + leeftijd (5–12) + speeltijd + optionele ouder-PIN. Leeftijd → groep: ≤6→3, 7→4, 8→5, 9→6, ≥10→7. Groep → contentniveau 1/2/3. Verhaaltjessommen verschijnen pas vanaf groep 4; het spellingspel is er óók voor groep 3 (klankzuivere woorden). Kinderen hebben géén account: naam/leeftijd blijven op het toestel (privacy by design, alles in één `localStorage`-sleutel).

## Levels & adaptief model

100 levels per spel per groepsniveau (talen per taal), apart opgeslagen. Elke 5 goede antwoorden = level +1 (+2 valuta; +10 bij elk tiende level; 👑 bij 100). De stof groeit mee. De Rekenmijn gebruikt een **Bareka-geïnspireerd** model: per som goed/fout-tellers en een gewogen gemiddelde antwoordtijd (EMA). Status verloopt van *nieuw* → *nog oefenen* → *bijna* → *power* (≥3× goed) → *speed* (power én snel genoeg). De selectie weegt fout-sommen zwaarder, traint langzame power-sommen op snelheid en onderhoudt speed-sommen licht. Het **Mijn muur**-scherm toont dit als trots-overzicht met gekleurde chips.

## Stemtips (voorlezen)

De app leest voor via de Web Speech API (`nl-NL`, plus `en-GB`/`es-ES` voor de talen). De 🗣️-knop opent een stemkiezer met testknop. Voor het mooiste geluid: installeer een premium/enhanced Nederlandse stem via de instellingen van je toestel (iOS: *Toegankelijkheid → Gesproken materiaal → Stemmen*; Android: *Instellingen → Toegankelijkheid → Tekst-naar-spraak*). De app kiest automatisch de beste beschikbare stem. Er zijn geen audiobestanden nodig; ook de geluidseffecten zijn gesynthetiseerd (Web Audio).

## Roadmap

- ~~Hosting op GitHub Pages (https → offline + installeerbaar).~~ ✅ gereed (zie *Deployen*).
- PWA verder aankleden (splash, maskable icons per thema).
- Optionele ingesproken kinderstem-audio naast de systeemstem.
- Uitgebreider ouderscherm (voortgang per domein, Mijn muur exporteren).
- Optionele sync via een **anonieme koppelcode** (nooit kindaccounts).

## Beheerportaal (aparte, commerciële fase)

De kinderapp is bewust een statische `file://`-app zonder server en zonder kinddata online. Het **CMS/beheerportaal** uit de specificatie (§11–13) is server-side software en zit daarom **niet** in deze map. De beoogde architectuur:

- Apart beheerportaal op een eigen subdomein, gescheiden van de kinderapp.
- Editors per contenttype met dezelfde validatie als de testsuite (opslaan geweigerd bij een fout) + CSV-import; thema-editor; mediabibliotheek met beeldpipeline (auto-verkleinen naar WebP in 64/256/1024px).
- Workflow concept → preview → publiceren, met versiegeschiedenis en één-klik terugdraaien. Het CMS genereert **statische, ondertekende JSON-contentbestanden** die de app alleen leest (one-way); de laatste versie blijft lokaal gecachet zodat de app offline werkt.
- Admins: e-mail + sterk wachtwoord (argon2) + **verplichte MFA**, rollen beheerder/redacteur, audit log, security-headers (CSP/HSTS), rate limiting. OWASP ASVS als checklist; pentest vóór lancering.

Aanbevolen uitbreiding van de kwaliteitsborging bij de commerciële herbouw: unit tests per module, Playwright end-to-end tests (dagquest/bouwplaats/profiel op desktop + tablet), CI die de suite bij elke push draait en deploy blokkeert bij rood, een toegankelijkheidscheck (contrast, focus, schermlezer-labels) en periodieke handmatige kindtests.

## Mapstructuur

```
blokwereld/
├── index.html          # de complete app (HTML + CSS + JS)
├── manifest.json       # PWA-manifest
├── sw.js               # service worker (cache-first, offline)
├── gen_sommen.js       # generator voor data/sommen.js
├── icons/              # app-iconen 192/512
├── data/               # leerstof (7 bestanden)
└── tests/
    ├── test.js         # de testsuite  (node tests/test.js)
    └── harness.js      # DOM-stub + loader
```

## Bouwmodus: werelden, winkel en uitbreiden

De bouwmodus is een isometrische wereld waarin het kind zijn verdiende valuta uitgeeft. Nieuw sinds 3.1.0:

- **Meerdere werelden** — naast de start-Blokwereld kun je een Strand, Park en Huis erbij hebben en met de wereldkiezer (de icoontjes bovenin) tussen je werelden wisselen. Elke wereld heeft een eigen landschap, poppetje-positie en opgeslagen bouwsels.
- **Bij kunnen kopen (🛒 Winkel)** — met je valuta koop je een **groter bouwveld** (+2 per keer, wordt telkens wat duurder, tot 24×24) of een **nieuwe wereld** erbij. Zo is uitbreiden onderdeel van de beloningslus.
- **Groter & scrollbaar veld** — het bouwveld schaalt mee en zit in een scrollbaar venster, zodat ook grote werelden werken op een klein scherm.
- **Meer speelse items** — naast de bouwblokken en dieren zijn er decoraties en meubels (bloem, struik, bankje, palmboom, boot, bed, tafel, lamp, ballon).

Uitbreidbaar door ontwikkelaars/CMS: een nieuw wereldtype is *alleen* een generatorfunctie + een regel in `bwDef(...)`; een nieuw item is *alleen* een regel in `BLOKKEN`. Dat sluit aan op de datagestuurde opzet en de latere thema-/palet-editor in het CMS.

## Privacy in het kort

Geen server met kinddata, geen tracking, geen analytics van derden, geen advertenties. Alle gegevens blijven op het toestel; ouderfuncties (schermtijd, verlenging) zitten achter een lokale PIN. AVG-proof voor kinderen.
