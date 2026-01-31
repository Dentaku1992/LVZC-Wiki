# Liga Toegang tot Club-ZweefApps

## Overzicht

Deze pagina verduidelijkt welke toegang LVZC heeft tot club-ZweefApps, wat LVZC kan en niet kan doen, en hoe dit zich verhoudt tot clubautonomie.

## Basisprincipe

::: info BELANGRIJK UITGANGSPUNT
LVZC heeft **geen uitgebreide achterpoort** in club-ZweefApps. De toegang is beperkt en specifiek gericht op operationele en wettelijke vereisten.
:::

## Wat kan LVZC (niet)?

### LVZC KAN

| Actie | Mogelijk? | Reden |
|-------|-----------|-------|
| Clusters aanpassen (zoals "brevet" → "Vergunning") | ✅ Ja | DTO-werking en EASA/DGLV compliance |
| Velden toevoegen aan bestaande clusters | ✅ Ja | Nieuwe wettelijke vereisten |
| Specifieke data ophalen (gericht) | ✅ Ja | Operationele noodzaak |
| Basisgroepen gebruiken voor communicatie | ✅ Ja | Informatieve e-mails |

### LVZC KAN NIET

| Actie | Mogelijk? |
|-------|-----------|
| Nieuwe groepen aanmaken op clubniveau | ❌ Nee |
| Bestaande clubgroepen verwijderen | ❌ Nee |
| Clublogica overschrijven | ❌ Nee |
| Alle data van clubs massaal ophalen | ❌ Nee |
| Club-specifieke extra velden gebruiken/wijzigen | ❌ Nee |

## Aanpassingen aan Clusters

### Het geval "Brevet" → "Vergunning"

**Wat is er gebeurd?**

De cluster "brevet" werd **niet verwijderd**, maar **herwerkt**:
- Hernoemd naar **"Vergunning"**
- Bestaande velden zijn **behouden of correct hernoemd**
- Nieuwe velden **toegevoegd** voor DTO-administratie en EASA/DGLV compliance

::: tip WAAROM?
Deze aanpassing was **noodzakelijk** om te voldoen aan:
- DTO-werking
- EASA Part-FCL regelgeving
- DGLV (Directoraat-Generaal Luchtvaart) vereisten
:::

### Impact op clubgegevens

**Wat gebeurt er met club-specifieke data?**

✅ **Behouden**: Alle velden die de club zelf had toegevoegd  
✅ **Niet verwijderd**: Club-specifieke extra velden blijven intact  
✅ **Niet gebruikt**: LVZC gebruikt deze velden niet (tenzij expliciet gecommuniceerd)

### Vrijheid voor clubs

Clubs mogen de cluster "Vergunning" (en andere clusters) **vrij aanpassen**:

**Toegestaan:**
- ✅ Extra velden toevoegen
- ✅ Deze velden gebruiken voor eigen clubwerking
- ✅ Eigen data opslaan in toegevoegde velden

**Niet toegestaan:**
- ❌ Clusternaam wijzigen
- ❌ Bestaande (LVZC-vereiste) velden verwijderen
- ❌ Bestaande velden hernoemen

::: warning COMPATIBILITEIT
Door deze regels blijft de **compatibiliteit met LVZC-processen** gegarandeerd, terwijl clubs voldoende **vrijheid** behouden.
:::

## Data die LVZC Ophaalt

### Wat haalt LVZC op?

LVZC haalt **rechtstreeks en gericht** alleen die gegevens op die **noodzakelijk** zijn voor wettelijke en operationele werking.

**Dit gebeurt:**
- ✅ **Gericht** (niet als volledige datakopie)
- ✅ **Beperkt** (alleen wat nodig is)
- ✅ **Transparant** (welke velden wordt gecommuniceerd)

### Concrete voorbeelden

**LVZC haalt op:**

1. **Basisledeninformatie**
   - Naam, contactgegevens
   - LVZC-nummer
   - Lidmaatschap status

2. **DTO-vlootgegevens** (alleen indien club aangesloten bij DTO)
   - Vliegtuigregistraties
   - Luchtwaardigheid
   - Onderhoudsgegevens

3. **Recency-gegevens van DTO-instructeurs**
   - Vluchturen
   - Recentie (90-dagen eis)
   - Endorsements

::: info TIMING VAN COMMUNICATIE
Welke velden **exact** worden gebruikt, zal **transparant worden gecommuniceerd** na afloop van de uitrolfase, wanneer de structuur volledig is gestabiliseerd.
:::

### Wat haalt LVZC NIET op?

❌ Club-specifieke extra velden (tenzij expliciet gecommuniceerd)  
❌ Financiële data (behalve indien relevant voor LVZC-administratie)  
❌ Interne clubcommunicatie  
❌ Privé-notities van instructeurs  
❌ Volledige database dumps

## Groepen Beheer

### Basisgroepen vs. Clubgroepen

**Basisgroepen (kern-groepen in ZweefApp):**
- Voorbeelden: lid, instructeur, sleeppiloot
- ✅ LVZC kan deze gebruiken voor gerichte communicatie
- ✅ Standaard in elke ZweefApp installatie
- ✅ Kunnen door clubs worden hernoemd

**Clubgroepen (aangepast door club):**
- Voorbeelden: Leden_Admin, Technicus_rollend, Technicus_vliegend
- ❌ LVZC kan deze NIET aanmaken
- ❌ LVZC kan deze NIET verwijderen
- ❌ LVZC kan deze NIET wijzigen

### Hernoemen van groepen

**Wat als een club een basisgroep hernoemt?**

✅ **Geen probleem!** Basisgroepen worden technisch aangesproken via een **unieke interne sleutel** (ID), niet via de zichtbare naam.

**Voorbeeld:**
- Club hernoemt groep "Instructeur" naar "Opleider"
- LVZC gebruikt intern de sleutel van deze groep
- Communicatie blijft werken, ongeacht de naam

::: tip TECHNISCHE DETAIL
De interne sleutel:
- Kan **niet** worden gewijzigd door de club
- Garandeert **correcte werking** ongeacht benaming
- Is **uniek** per groep
:::

## Privacy en GDPR

### Voldoet LVZC-toegang aan GDPR?

**Ja**, omdat:

1. **Noodzakelijkheidsbeginsel**
   - LVZC haalt alleen data op die **noodzakelijk** is
   - Voor wettelijke verplichtingen (DTO, EASA)
   - Voor operationele werking (lidmaatschap, communicatie)

2. **Transparantie**
   - Wordt **gecommuniceerd** welke data wordt opgehaald
   - Leden kunnen hun **privacy-instellingen** beheren
   - Clubs behouden **controle** over eigen data

3. **Doelbinding**
   - Data wordt **alleen gebruikt** voor aangegeven doeleinden
   - Geen **ongeautoriseerd gebruik**
   - Geen **doorverkoop** of andere commerciële doeleinden

## Autonomie van Clubs

### Wat blijft clubautonomie?

Clubs behouden volledige controle over:

✅ **Eigen groepen en rollen** (behalve basisgroepen)  
✅ **Extra velden in clusters** (boven op LVZC-vereisten)  
✅ **Interne processen** en workflows  
✅ **Communicatie** binnen de club  
✅ **Financiële module** (indien geactiveerd, apart aangerekend)  
✅ **Reserveringssysteem** configuratie  
✅ **Rapportages** en statistieken

### Wat vereist LVZC?

LVZC vereist alleen:

✅ **Standaard clusters** behouden (Vergunning, DTO, LVZC)  
✅ **Vereiste velden** niet verwijderen/hernoemen  
✅ **Correcte functietoewijzingen** (Voorzitter, Secretaris, aHoT, etc.)  
✅ **LVZC-lidmaatschap** correct toekennen  
✅ **Basisgroepen** beschikbaar houden (mogen hernoemd worden)

## Praktische Voorbeelden

### Voorbeeld 1: Club voegt veld toe aan "Vergunning"

**Scenario:** Club wil bijhouden wie de "buddy" is van elk lid voor veiligheidsdoeleinden.

**Wat kan:**
1. ✅ Voeg veld "Buddy" toe aan cluster "Vergunning"
2. ✅ Gebruik dit veld intern voor eigen administratie
3. ✅ Vul dit veld in voor alle leden

**Impact LVZC:**
- LVZC ziet dit veld (staat in de cluster)
- LVZC gebruikt dit veld **niet**
- LVZC haalt dit veld **niet op**
- Geen conflict met LVZC-werking

### Voorbeeld 2: Club hernoemt groep "Instructeur"

**Scenario:** Club wil intern spreken van "Opleiders" in plaats van "Instructeurs".

**Wat kan:**
1. ✅ Hernoem de groep "Instructeur" naar "Opleider"
2. ✅ Gebruik de nieuwe naam intern

**Impact LVZC:**
- LVZC gebruikt de **interne sleutel**, niet de naam
- Communicatie naar "instructeurs" blijft werken
- Geen impact op LVZC-processen

### Voorbeeld 3: LVZC voegt veld toe voor EASA-compliance

**Scenario:** Nieuwe EASA-regelgeving vereist registratie van "Language Proficiency".

**Wat gebeurt:**
1. ✅ LVZC voegt veld "Language Proficiency" toe aan cluster "Vergunning"
2. ✅ Clubs worden geïnformeerd via communicatie
3. ✅ Clubs vullen dit veld in voor relevante leden
4. ✅ LVZC haalt deze data op voor DTO-compliance

**Impact club:**
- Nieuw veld verschijnt in cluster
- Club moet dit veld invullen (wettelijke verplichting)
- Club kan desgewenst extra velden blijven toevoegen

## Veelgestelde Vragen

**Q: Kan LVZC mijn club-specifieke data lezen?**  
A: LVZC haalt alleen gericht noodzakelijke data op. Club-specifieke extra velden worden niet gebruikt (tenzij expliciet gecommuniceerd).

**Q: Wat als LVZC een cluster aanpast en ik had daar eigen data in?**  
A: Je eigen toegevoegde velden blijven behouden. LVZC wijzigt alleen standaardvelden en voegt nieuwe toe indien nodig.

**Q: Kan ik voorkomen dat LVZC data ophaalt?**  
A: Nee, dit is noodzakelijk voor LVZC-werking en wettelijke compliance. Wel worden alleen noodzakelijke gegevens opgehaald.

**Q: Hoe weet ik welke data LVZC ophaalt?**  
A: Dit wordt transparant gecommuniceerd na de uitrolfase. Algemeen: basis ledeninfo, DTO-gegevens (indien van toepassing), en recency-data instructeurs.

**Q: Kan LVZC mijn groepen verwijderen?**  
A: Nee, LVZC kan geen clubgroepen verwijderen. Alleen basisgroepen kunnen worden gebruikt voor communicatie.

**Q: Wat als ik per ongeluk een verplicht veld verwijder?**  
A: Dit kan problemen veroorzaken met LVZC-synchronisatie. Neem contact op met LVZC om dit te herstellen.

## Best Practices voor Clubs

### Aanbevelingen

1. **Behoud standaardstructuur**
   - Wijzig geen clusternamen
   - Verwijder geen vereiste velden
   - Hernoem geen standaardvelden

2. **Voeg vrij velden toe**
   - Voor club-specifieke behoeften
   - Documenteer wat elk veld betekent
   - Train beheerders in correct gebruik

3. **Communiceer met LVZC**
   - Bij vragen over structuur
   - Bij problemen met synchronisatie
   - Bij voorstel len voor verbeteringen

4. **Respecteer basisgroepen**
   - Hernoemen mag
   - Verwijderen niet
   - Gebruik voor interne doeleinden

## Checklist voor Beheerders

- [ ] Begrijp verschil tussen basis- en clubgroepen
- [ ] Weet welke clusters/velden door LVZC worden gebruikt
- [ ] Respecteer standaardstructuur (clusternamen, vereiste velden)
- [ ] Voeg vrij extra velden toe voor clubbehoeften
- [ ] Communiceer met LVZC bij vragen of problemen
- [ ] Informeer leden over datagebruik (transparantie)

## Contact

Voor vragen over LVZC-toegang en datagebruik:
- **LVZC**: Voor algemene vragen over datagebruik
- **Liga-handleiding**: Voor officiële procedures en richtlijnen
- **ZweefApp support**: Voor technische vragen over de applicatie zelf
