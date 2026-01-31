# Thuisclub Wijzigen

## Overzicht

Deze pagina behandelt de mogelijkheden en beperkingen bij het wijzigen van de thuisclub van een lid binnen ZweefApp.

## Huidige Situatie

### Is het mogelijk om de thuisclub te wijzigen?

::: warning MOMENTEEL NIET MOGELIJK
Het is op dit moment **niet mogelijk** om de thuisclub van een lid rechtstreeks te wijzigen binnen ZweefApp. Deze functionaliteit bestaat vandaag nog niet in de applicatie.
:::

## Toekomstige Ontwikkelingen

### Roadmap

Het wijzigen van de thuisclub staat **opgenomen op de roadmap** van ZweefApp en zal in een latere versie van het platform beschikbaar worden gesteld.

📅 **Status:** Gepland voor toekomstige release  
📢 **Communicatie:** Wanneer deze functionaliteit wordt uitgerold, wordt dit via de gebruikelijke communicatiekanalen gecommuniceerd

## Huidige Workaround

Hoewel een rechtstreekse wijziging van de thuisclub nog niet mogelijk is, bestaat er een alternatieve werkwijze om **historische gegevens te behouden**.

### Stappen voor het overzetten van vluchtgegevens

1. **Download vluchten uit oude club**
   - Log in als beheerder in de huidige (oude) club
   - Ga naar de vluchtadministratie
   - Selecteer alle vluchten van het betreffende lid
   - Download de vluchten als bestand

2. **Upload vluchten naar nieuwe club**
   - Log in als beheerder in de nieuwe club
   - Ga naar de vluchtadministratie
   - Upload het gedownloade bestand
   - Controleer of alle vluchten correct zijn geïmporteerd

3. **Verificatie**
   - Controleer of alle vluchten zichtbaar zijn in de nieuwe club
   - Verifieer dat statistieken en totalen kloppen
   - Controleer of IGC-tracks (indien van toepassing) correct zijn gekoppeld

### Voordelen van deze werkwijze

✅ **Volledig vluchtoverzicht** behouden  
✅ **Historische gegevens** blijven beschikbaar  
✅ **Coherente administratie** in de nieuwe club  
✅ **Statistieken** blijven correct

## Wat gebeurt er met het lidmaatschap?

### Account in oude club

Het account in de oude club:
- ❌ Wordt **niet automatisch** gedeactiveerd
- ℹ️ Moet **handmatig** worden afgehandeld indien gewenst

### Account in nieuwe club

Het lid moet:
- ✅ Een **nieuw account** aanmaken in de nieuwe club
- ✅ Opnieuw **gegevens invullen** (deze kunnen niet automatisch worden overgezet)
- ✅ **Bevoegdheden** en rollen opnieuw laten toekennen door beheerder

## Praktische Scenario's

### Scenario 1: Lid wisselt permanent van club

**Stappen:**

1. Download vluchtgeschiedenis uit oude club
2. Deactiveer lid in oude club (indien gewenst)
3. Maak nieuw account aan in nieuwe club
4. Upload vluchtgeschiedenis naar nieuwe club
5. Ken bevoegdheden toe in nieuwe club

### Scenario 2: Lid is lid van meerdere clubs

**Stappen:**

1. Behoud account in eerste club
2. Maak nieuw account aan in tweede club
3. Besluit welke club de "thuisclub" wordt (dit bepaalt waar LVZC-lidmaatschap is gekoppeld)
4. Optioneel: Synchroniseer vluchten tussen beide clubs

::: tip AANBEVELING
Gebruik ZweefApp als "single source of truth" voor één thuisclub om dubbele administratie te voorkomen.
:::

## Aandachtspunten

### Gegevens die NIET automatisch worden overgezet

Bij het aanmaken van een nieuw account in de nieuwe club moeten de volgende gegevens opnieuw worden ingevuld:

- ❌ Persoonlijke gegevens (naam, adres, contact)
- ❌ Brevetten en certificaten
- ❌ Medische geldigheid
- ❌ Bevoegdheden en functies
- ❌ Privacy-instellingen
- ✅ Vluchten (via download/upload)

### Communicatie met LVZC

Bij een clubwijziging is het belangrijk om:

1. **LVZC te informeren** over de clubwijziging
2. **LVZC-lidmaatschap** opnieuw te laten activeren in de nieuwe club
3. **DTO-administratie** (indien van toepassing) te laten bijwerken

## Tijdelijke Oplossingen

### Voor beheerders die vaak met clubwisselingen werken

::: tip GEDOCUMENTEERDE PROCEDURE
Maak een **standaard checklist** voor clubwisselingen:
1. Download vluchten
2. Deactiveer oud account (optioneel)
3. Creëer nieuw account
4. Upload vluchten
5. Ken bevoegdheden toe
6. Informeer LVZC
7. Update DTO-administratie
:::

### Voor gevorderde gebruikers (API)

De API van ZweefApp biedt mogelijkheden voor:
- Automatisch downloaden van vluchten
- Bulkupload van vluchten
- Geautomatiseerde synchronisatie

🔗 **[ZweefApp API Documentatie](https://documenter.getpostman.com/view/25434528/2s8ZDX5PRi)**

::: warning WAARSCHUWING
API-gebruik gebeurt op eigen risico en zonder ondersteuning van LVZC. Zorg voor een goede backup voordat je scripts gebruikt.
:::

## Veelgestelde Vragen

**Q: Wanneer komt de mogelijkheid om thuisclub te wijzigen?**  
A: Dit staat op de roadmap van ZweefApp, maar er is nog geen concrete releasedatum bekend.

**Q: Gaan mijn vluchten verloren bij een clubwijziging?**  
A: Nee, als je de download/upload procedure volgt blijven alle vluchten behouden.

**Q: Moet ik in de oude club mijn account verwijderen?**  
A: Niet noodzakelijk. Je kunt lid zijn van meerdere clubs tegelijk.

**Q: Kan ik mijn gegevens automatisch overzetten?**  
A: Nee, behalve vluchten moet alles handmatig opnieuw worden ingevuld in de nieuwe club.

**Q: Wordt LVZC automatisch geïnformeerd bij een clubwijziging?**  
A: Nee, je moet LVZC zelf informeren en het LVZC-lidmaatschap opnieuw laten activeren.

**Q: Kan ik tijdelijk bij twee clubs vliegen?**  
A: Ja, je kunt accounts bij meerdere clubs hebben, maar slechts één kan je "thuisclub" zijn voor LVZC-doeleinden.

## Checklist Clubwijziging

### Voor het lid

- [ ] Vluchtgeschiedenis gedownload uit oude club
- [ ] Nieuw account aangemaakt in nieuwe club
- [ ] Persoonlijke gegevens ingevuld
- [ ] Brevetten en certificaten toegevoegd
- [ ] Privacy-instellingen geconfigureerd
- [ ] LVZC geïnformeerd over clubwijziging

### Voor de beheerder (oude club)

- [ ] Vluchten gedownload voor het lid
- [ ] Account gedeactiveerd (indien gewenst)
- [ ] LVZC geïnformeerd (indien van toepassing)

### Voor de beheerder (nieuwe club)

- [ ] Nieuw account gecreëerd voor het lid
- [ ] Vluchten geüpload en geverifieerd
- [ ] Bevoegdheden en functies toegekend
- [ ] LVZC-lidmaatschap aangevraagd/geactiveerd
- [ ] DTO-administratie bijgewerkt (indien van toepassing)
- [ ] Lid geïnformeerd over succesvolle overzet

## Contact

Voor vragen over clubwisselingen binnen LVZC:
- Neem contact op met je clubbeheerder
- Of contacteer LVZC voor specifieke LVZC-gerelateerde vragen
