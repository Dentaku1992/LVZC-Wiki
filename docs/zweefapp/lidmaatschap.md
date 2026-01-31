# Lidmaatschap Beheer

## Overzicht

Deze pagina behandelt het beheer van LVZC-lidmaatschap en gastvliegers binnen ZweefApp.

## LVZC-Lidmaatschap Toekennen

### Huidige werkwijze

Het toekennen van het LVZC-lidmaatschap verloopt via de bestaande gebruikersinterface, waarbij per lid ongeveer **vier manuele stappen** nodig zijn.

::: info WAAROM DEZE WERKWIJZE?
LVZC maakt bewust gebruik van de standaard, ingebouwde functionaliteiten van ZweefApp om stabiliteit en uniformiteit te garanderen.
:::

### Toekomstige ontwikkelingen

In een latere fase:
- ✅ Zal een **overzicht** beschikbaar worden gemaakt
- ✅ Wordt het proces mogelijk vereenvoudigd

## API voor Lidmaatschap (Gevorderd)

### Is automatisering mogelijk via API?

**Ja**, het toekennen van het LVZC-lidmaatschap via een API is technisch mogelijk. ZweefApp beschikt over een uitgebreide API waarmee lidgegevens en instellingen programmatorisch kunnen worden beheerd.

### API Documentatie

Meer informatie over beschikbare endpoints, authenticatie en gebruik:

🔗 **[ZweefApp API Documentatie](https://documenter.getpostman.com/view/25434528/2s8ZDX5PRi)**

### Wat is mogelijk via de API?

Clubs met de nodige technische kennis kunnen de API gebruiken voor:

- ✅ LVZC-lidmaatschap automatisch toekennen
- ✅ Werken met een eigen overzichtstabel met per lid relevante opties
- ✅ Bulkbewerkingen uitvoeren (meerdere leden tegelijk)
- ✅ Duidelijk overzicht genereren van leden met/zonder LVZC-lidmaatschap

::: warning EIGEN VERANTWOORDELIJKHEID
Het gebruik van de API gebeurt **volledig op eigen initiatief en verantwoordelijkheid** van de club. 

LVZC biedt **geen ondersteuning** voor:
- Ontwikkeling van maatwerkoplossingen
- Onderhoud van API-integraties
- Debuggen van custom scripts
:::

### Planning LVZC

In een **eerste fase** is het niet gepland om het huidige proces aan te passen. Het toekennen blijft voorlopig verlopen via de bestaande interface.

Een overzicht zal beschikbaar worden in een **latere fase**.

## Gastvliegers

### Aanvragen voor Gastvliegers

Aanvragen voor gastvliegers worden automatisch verzonden naar het e-mailadres of de e-mailadressen die zijn opgegeven onder:

**[Club Settings] → [Contactlijsten] → Ledenadministratie**

### Hoe werkt het?

1. 📧 Aanvraag wordt ingediend via ZweefApp
2. 🔄 Systeem verstuurt aanvraag naar alle adressen in contactlijst 'Ledenadministratie'
3. ✅ Meerdere adressen mogelijk (allen ontvangen gelijktijdig de aanvraag)

### Aanbevelingen

::: tip BEST PRACTICES
- Configureer de contactlijst **Ledenadministratie** correct
- Voeg alleen **relevante en actuele** e-mailadressen toe
- **Controleer regelmatig** of de juiste personen de aanvragen ontvangen
- **Test** de workflow door een testaanvraag in te dienen
:::

## Praktische Workflow

### Stappen voor het activeren van LVZC-lidmaatschap

1. **Ontvangst 'Go'-melding**
   - Controleer of de juiste personen (Voorzitter, Secretaris, Penningmeester, aHoT) de melding hebben ontvangen
   - Zie [Communicatie](/zweefapp/communicatie) voor meer info

2. **Lidmaatschap activeren per lid**
   - Open het profiel van het lid in ZweefApp
   - Navigeer naar de LVZC-cluster
   - Ken het LVZC-lidmaatschap toe (± 4 clicks per lid)
   - Herhaal voor elk lid

3. **Verificatie**
   - Controleer of alle leden correct zijn geactiveerd
   - Gebruik een overzicht of lijst om volledigheid te garanderen

### Stappen voor gastvliegers

1. **Aanvraag ontvangen**
   - Controleer inbox van Ledenadministratie-contactlijst
   - Bekijk de aanvraag en gegevens van de gastvlieger

2. **Aanvraag beoordelen**
   - Verifieer de geldigheid van de aanvraag
   - Controleer eventuele vereisten of voorwaarden

3. **Goedkeuren/afwijzen**
   - Verwerk de aanvraag in ZweefApp
   - Informeer de aanvrager over de beslissing

## Veelgestelde Vragen

**Q: Waarom zijn er zoveel clicks nodig per lid?**  
A: LVZC gebruikt de standaardfunctionaliteit van ZweefApp om stabiliteit te garanderen. Een vereenvoudigd proces wordt overwogen voor de toekomst.

**Q: Kan ik meerdere leden tegelijk activeren?**  
A: Momenteel niet via de interface. Voor gevorderde gebruikers is dit wel mogelijk via de API.

**Q: Wie ontvangt gastvliegersaanvragen als de contactlijst leeg is?**  
A: Niemand. Zorg ervoor dat de contactlijst Ledenadministratie altijd correct is ingevuld.

**Q: Kan ik een overzicht zien van wie al geactiveerd is?**  
A: Een overzicht zal in een latere fase beschikbaar worden. Momenteel moet dit handmatig worden bijgehouden.

## Checklist voor Beheerders

- [ ] Functies correct toegewezen voor 'Go'-melding (Voorzitter, Secretaris, Penningmeester, aHoT)
- [ ] Contactlijst Ledenadministratie correct ingevuld voor gastvliegersaanvragen
- [ ] Alle huidige leden hebben LVZC-lidmaatschap toegewezen gekregen
- [ ] Procedure voor nieuwe leden is gedocumenteerd
- [ ] Gastvliegersaanvragen worden tijdig verwerkt
