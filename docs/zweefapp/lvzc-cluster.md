# LVZC Cluster

## Overzicht

Deze pagina behandelt de LVZC-cluster (administratiecluster), wie deze mag wijzigen, en waarom bepaalde bevoegdheden lijken te overlappen.

## Wat is de LVZC Cluster?

De LVZC-cluster is de **administratiecluster** waarin LVZC-specifieke gegevens worden beheerd, zoals:
- LVZC-lidmaatschap status
- LVZC-nummer
- Andere LVZC-administratieve gegevens

## Wie mag de LVZC Cluster wijzigen?

### Volgens de handleiding

Volgens de Liga-handleiding zouden velden in de LVZC-cluster **uitsluitend door de liga (LVZC)** gewijzigd mogen worden.

### In de praktijk

::: warning TECHNISCHE REALITEIT
Velden binnen de LVZC-cluster kunnen **technisch** worden gewijzigd door gebruikers met bepaalde bevoegdheden op clubniveau, zoals:
- Instructiecoördinator
- Andere rollen met admin-rechten op de cluster
:::

Dit gedrag is **afhankelijk van** de bevoegdheids- en clusterinstellingen op clubniveau, die binnen ZweefApp configureerbaar zijn.

## Waarom is dit mogelijk?

### ZweefApp als standaardplatform

Deze situatie is het gevolg van de manier waarop ZweefApp is opgebouwd:

1. **ZweefApp is een bestaand platform** waarvan LVZC gebruikmaakt
2. **Bewuste keuze**: Zo weinig mogelijk structurele aanpassingen aan de standaardwerking
3. **Werkwijze**: LVZC-werking past binnen de bestaande logica van ZweefApp

### Voor- en nadelen

**Voordelen:**
- ✅ Toepassing blijft **eenvoudig en uniform**
- ✅ **Beheersbaar** voor zowel clubs als LVZC
- ✅ **Complexe maatwerkaanpassingen** worden vermeden
- ✅ **Kostenefficiënt** (geen custom development)

**Nadelen:**
- ❌ Bepaalde velden kunnen in **uitzonderlijke gevallen** worden gewijzigd door personen die daar **inhoudelijk niet de juiste rol** voor hebben
- ❌ Lijkt **inconsistent** met andere delen van het systeem waar beveiliging strikter is

## Hoe wordt misbruik voorkomen?

### LVZC-niveau controle

Om het risico te beheersen, wordt op **LVZC-niveau** bij het opvragen en verwerken van gegevens **altijd automatisch gecontroleerd**:

1. **Wie** een bepaalde bevoegdheid of wijziging heeft toegekend?
2. **Werd dit toegekend** door LVZC of door een andere rol binnen de club?

::: tip MARKERING VAN WIJZIGINGEN
Wanneer wordt vastgesteld dat een wijziging **niet door LVZC** werd toegekend, wordt dit **duidelijk gemarkeerd**.

Op die manier worden:
- Potentiële **fouten zichtbaar** gemaakt
- **Onbedoelde wijzigingen** kunnen tijdig worden nagekeken
- Indien nodig, kunnen wijzigingen worden **rechtgezet**
:::

### Voorbeeld workflow

**Scenario:** Een instructiecoördinator wijzigt per ongeluk het LVZC-nummer van een lid.

1. ✅ Wijziging wordt technisch opgeslagen (ZweefApp staat dit toe)
2. ✅ Bij volgende synchronisatie met LVZC wordt gedetecteerd dat wijziging **niet door LVZC** werd gedaan
3. ✅ Wijziging wordt **gemarkeerd** als mogelijk incorrect
4. ✅ LVZC kan de wijziging **controleren** en indien nodig **herstellen**

## Inconsistentie met andere beveiligingen?

### Waargenomen inconsistentie

Het kan aanvoelen als inconsistent dat:
- Een ledenadministrator **zichzelf niet kan verwerken** (strikte beveiliging)
- Maar een instructiecoördinator **wel LVZC-clustervelden kan wijzigen** (minder strikte beveiliging)

### Verklaring

Deze situatie is het gevolg van:
1. **Standaardfunctionaliteit** van ZweefApp (niet LVZC-specifiek)
2. **Clusterrechten** die op clubniveau configureerbaar zijn
3. **Bewuste keuze** om binnen ZweefApp-logica te blijven werken

::: info WAAROM NIET AANPASSEN?
Het aanpassen van deze beveiliging zou:
- Complexe maatwerkontwikkeling vereisen
- De stabiliteit van het systeem kunnen beïnvloeden
- De uniformiteit tussen clubs verstoren
- Hogere kosten met zich meebrengen
:::

## Best Practices voor Beheerders

### Wat NIET te doen

❌ Wijzig **geen** LVZC-specifieke velden tenzij dit expliciet door LVZC is gevraagd  
❌ Wijzig **geen** LVZC-nummers  
❌ Deactiveer **geen** LVZC-lidmaatschappen zonder overleg  
❌ Pas **geen** DTO-gerelateerde velden aan in de LVZC-cluster

### Wat WEL te doen

✅ Raadpleeg LVZC-clustervelden voor **informatieve doeleinden**  
✅ Meld **afwijkingen of fouten** aan LVZC  
✅ Gebruik de **juiste procedures** voor lidmaatschapswijzigingen  
✅ Werk samen met LVZC bij **twijfel over bevoegdheden**

## Toekomstige Ontwikkelingen

### Evaluatie

De situatie wordt **opgevolgd**, en indien er in de toekomst betere mogelijkheden ontstaan binnen ZweefApp om dit strikter af te bakenen **zonder verlies aan eenvoud of stabiliteit**, kan dit opnieuw worden geëvalueerd.

### Mogelijke verbeteringen

Potentiële toekomstige verbeteringen:
- 🔒 Strengere rechtencontrole op clusterniveau
- 📋 Audit logs voor alle wijzigingen in LVZC-cluster
- ⚠️ Waarschuwingen bij het wijzigen van LVZC-velden
- 🔔 Notificaties naar LVZC bij clubwijzigingen

## Wijzigingen Opslaan

### Kunnen wijzigingen daadwerkelijk worden opgeslagen?

**Ja**, als een beheerder met de juiste bevoegdheden (bijv. instructiecoördinator) een veld in de LVZC-cluster wijzigt:

1. ✅ De wijziging kan technisch worden **opgeslagen**
2. ✅ ZweefApp geeft **geen foutmelding** (anders dan bij zelfverwerking door ledenadmin)
3. ⚠️ De wijziging wordt bij LVZC-synchronisatie **gedetecteerd en gemarkeerd**

::: danger LET OP
Het feit dat je de wijziging **kan** opslaan, betekent niet dat je dit **moet** doen. Volg altijd de officiële procedures en overleg met LVZC bij twijfel.
:::

## Veelgestelde Vragen

**Q: Mag ik als instructiecoördinator velden in de LVZC-cluster wijzigen?**  
A: Technisch kan dit, maar inhoudelijk mag alleen LVZC deze velden wijzigen. Raadpleeg LVZC bij twijfel.

**Q: Waarom krijg ik geen foutmelding als ik een LVZC-veld wijzig?**  
A: ZweefApp controleert rechten op clusterniveau, niet op basis van LVZC-logica. De wijziging wordt wel gedetecteerd bij synchronisatie met LVZC.

**Q: Wat gebeurt er als ik per ongeluk een LVZC-veld heb gewijzigd?**  
A: Neem contact op met LVZC. De wijziging wordt automatisch gedetecteerd en kan worden hersteld.

**Q: Is dit een bug in ZweefApp?**  
A: Nee, dit is normaal gedrag van ZweefApp. LVZC heeft bewust gekozen om binnen deze standaardfunctionaliteit te werken.

**Q: Wordt dit in de toekomst aangepast?**  
A: Mogelijk, als ZweefApp betere mogelijkheden biedt zonder verlies aan stabiliteit of eenvoud.

**Q: Hoe weet ik welke velden ik mag wijzigen en welke niet?**  
A: Als algemene regel: wijzig alleen velden waarvan je zeker weet dat dit tot je verantwoordelijkheid behoort. Bij twijfel, raadpleeg LVZC.

## Praktische Richtlijnen

### Voor Instructiecoördinatoren

**Je hebt technische toegang tot LVZC-clustervelden:**
1. Gebruik deze toegang **alleen voor raadplegen** van informatie
2. Wijzig **geen** velden zonder expliciete instructie van LVZC
3. Meld **afwijkingen** die je opmerkt aan LVZC
4. Gebruik je **eigen cluster** of andere relevante clusters voor instructie-administratie

### Voor Ledenadministrators

**Je hebt mogelijk geen toegang tot LVZC-cluster:**
1. Dit is **normaal** en **correct**
2. LVZC-gegevens worden beheerd door LVZC
3. Focus op je eigen **ledenadministratieve taken**
4. Verwijs vragen over LVZC-lidmaatschap door naar LVZC

### Voor alle Beheerders

**Algemene principes:**
- ✅ **Respecteer** de verdeling van verantwoordelijkheden
- ✅ **Communiceer** bij twijfel of vragen
- ✅ **Documenteer** afwijkende situaties
- ✅ **Werk samen** met LVZC voor optimale werking

## Checklist voor Beheerders

- [ ] Begrijp dat LVZC-cluster door LVZC wordt beheerd
- [ ] Weet dat technische toegang niet automatisch inhoudelijke bevoegdheid betekent
- [ ] Raadpleeg alleen LVZC-cluster voor informatieve doeleinden
- [ ] Meld afwijkingen of fouten aan LVZC
- [ ] Wijzig geen LVZC-specifieke velden zonder expliciete instructie
- [ ] Ken de juiste procedures voor lidmaatschapswijzigingen

## Contact

Voor vragen over de LVZC-cluster en bevoegdheden:
- Contacteer **LVZC** voor LVZC-specifieke zaken
- Raadpleeg de **Liga-handleiding** voor officiële procedures
- Bespreek met je **clubbestuur** bij organisatorische vragen
