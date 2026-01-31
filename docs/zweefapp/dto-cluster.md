# DTO Cluster

## Overzicht

Deze pagina behandelt de DTO-cluster binnen ZweefApp, waarom gegevens lijken te worden gedupliceerd, en hoe de cluster wordt beheerd.

## Wat is de DTO Cluster?

De DTO-cluster is een **lees-only weergave** (read-only view) van bepaalde persoonsgegevens die door het lid zijn ingevuld in zijn of haar gebruikersprofiel ('Mijn gegevens').

::: info BELANGRIJK
De DTO-cluster is **geen aparte databank**. Het is een weergave van bestaande gegevens voor administratieve doeleinden.
:::

### Doel van de DTO Cluster

De DTO-cluster is bedoeld voor **DTO-administratieve doeleinden**, bijvoorbeeld:
- Raadpleging door de **aHoT** (Accountable Head of Training)
- Overzicht voor andere **bevoegde functionarissen**
- **Toezicht** en compliance met EASA/DGLV regelgeving

**Belangrijke eigenschap:** Beheerders krijgen via deze cluster een overzicht van relevante gegevens, **zonder** dat zij deze rechtstreeks kunnen wijzigen.

## Dubbele Opslag? Nee!

### Waarom lijken gegevens tweemaal opgeslagen?

De gegevens worden **niet tweemaal opgeslagen**. 

**Wat gebeurt er echt:**
1. Het lid vult gegevens in onder **'Mijn gegevens'**
2. Deze gegevens worden **automatisch weergegeven** in de DTO-cluster
3. De DTO-cluster is een **read-only weergave** van dezelfde gegevens

### Lege velden in de DTO Cluster?

Wanneer velden in de DTO-cluster leeg worden weergegeven terwijl deze in het gebruikersprofiel wel ingevuld zijn:

::: tip OPLOSSING
Dit wijst op een **synchronisatie-issue**. Gebruik de **sync-knop** om de weergave te actualiseren.
:::

## Wie beheert de DTO Cluster?

### Wie vult de gegevens in?

De gegevens in de DTO-cluster worden **niet afzonderlijk** ingevuld.

| Vraag | Antwoord |
|-------|----------|
| Wie vult de DTO-cluster in? | **Niemand** - het is een read-only weergave |
| Waar worden gegevens ingevuld? | In het **gebruikersprofiel** van het lid zelf |
| Hoe komen gegevens in de cluster? | Via **automatische synchronisatie** |

### Wijzigingen doorvoeren

Om gegevens in de DTO-cluster te wijzigen:

1. ❌ **Niet** rechtstreeks in de DTO-cluster wijzigen (read-only)
2. ✅ Wijzig de gegevens in **'Mijn gegevens'** van het lid
3. ✅ Gebruik indien nodig de **sync-knop** om te actualiseren

## Verantwoordelijkheid voor Gegevens

### Wie is verantwoordelijk?

| Gegeven | Verantwoordelijke |
|---------|-------------------|
| Persoonlijke gegevens | **Het lid zelf** |
| LVZC-nummer | **LVZC** |
| DTO-administratieve data | **aHoT** (via read-only toegang) |
| Synchronisatie | **Automatisch** (of sync-knop) |

### Onderhoud door het lid

De verantwoordelijkheid voor het **onderhoud** van deze gegevens ligt bij **het lid zelf**:

✅ Naam, adres, contactgegevens up-to-date houden  
✅ Brevetten en certificaten bijwerken  
✅ Medische geldigheid actueel houden  
✅ Privacy-instellingen controleren

**Uitzondering:** Het **LVZC-nummer** wordt door LVZC beheerd en kan niet door het lid worden gewijzigd.

## Synchronisatie

### Hoe werkt synchronisatie?

De synchronisatie tussen 'Mijn gegevens' en de DTO-cluster verloopt **automatisch**, maar kan in sommige gevallen vertraging oplopen.

**Oorzaken van synchronisatie-vertraging:**
- Caching van gegevens
- Tijdelijke technische issues
- Netwerkproblemen

### Handmatige Synchronisatie

::: tip SYNC-KNOP
Gebruik de **sync-knop** in de DTO-cluster om de weergave handmatig te actualiseren wanneer:
- Gegevens niet up-to-date lijken
- Recent gewijzigde informatie nog niet zichtbaar is
- Je zekerheid wilt dat alles gesynchroniseerd is
:::

## Welke Gegevens staan in de DTO Cluster?

### Typische velden in de DTO-cluster

De DTO-cluster bevat onder meer (niet-exhaustieve lijst):

- 📋 **Persoonlijke gegevens**: Naam, adres, geboortedatum
- 📞 **Contactgegevens**: Telefoonnummer, e-mail
- 🪪 **Brevetten**: Type, nummer, geldigheid
- 🏥 **Medisch**: Geldigheid, klasse
- ✈️ **LVZC-nummer**: Toegewezen door LVZC
- 📚 **DTO-specifiek**: Training records, endorsements

::: info LET OP
De exacte velden kunnen per club en DTO-configuratie verschillen.
:::

## Praktische Werkwijze

### Voor Beheerders (aHoT, Instructiecoördinator)

**Gegevens raadplegen:**
1. Navigeer naar de DTO-cluster in ZweefApp
2. Selecteer het lid waarvan je gegevens wilt bekijken
3. Bekijk de read-only weergave van de gegevens

**Als gegevens niet kloppen:**
1. Informeer het lid dat gegevens moeten worden bijgewerkt
2. Of: gebruik admin-rechten om gegevens aan te passen in het gebruikersprofiel
3. Gebruik de sync-knop indien nodig

### Voor Leden

**Gegevens actueel houden:**
1. Log in op ZweefApp
2. Ga naar **'Mijn gegevens'**
3. Controleer en update alle relevante velden
4. Sla wijzigingen op
5. Synchronisatie naar DTO-cluster gebeurt automatisch

## DTO-administratieve Taken

### Wat kan de aHoT doen met de DTO-cluster?

| Taak | Mogelijk? |
|------|-----------|
| Gegevens raadplegen | ✅ Ja |
| Overzichten exporteren | ✅ Ja |
| Compliance controleren | ✅ Ja |
| Gegevens direct wijzigen in cluster | ❌ Nee (read-only) |
| Gegevens wijzigen via gebruikersprofiel | ✅ Ja (met juiste rechten) |

### Training Records en DTO-documenten

De DTO-cluster kan ook worden gebruikt voor:
- 📚 **Training records** beheren
- 📝 **Endorsements** documenteren
- 📊 **Progress tracking** van studenten
- ✅ **Compliance** met EASA Part-FCL vereisten

## Veelgestelde Vragen

**Q: Waarom zie ik gegevens tweemaal (in 'Mijn gegevens' én in DTO-cluster)?**  
A: Het zijn niet twee verschillende datasets. De DTO-cluster is een read-only weergave van 'Mijn gegevens'.

**Q: Kan ik rechtstreeks in de DTO-cluster wijzigen?**  
A: Nee, de DTO-cluster is read-only. Wijzig gegevens via het gebruikersprofiel.

**Q: Waarom zijn sommige velden leeg in de DTO-cluster terwijl ze ingevuld zijn in mijn profiel?**  
A: Dit is een synchronisatie-issue. Gebruik de sync-knop om te actualiseren.

**Q: Wie kan de DTO-cluster bekijken?**  
A: De aHoT, instructiecoördinator, en andere bevoegde functionarissen (afhankelijk van toegangsrechten).

**Q: Kan een lid zelf zijn DTO-cluster bekijken?**  
A: Dat hangt af van de configuratie. Typisch hebben leden geen directe toegang tot de DTO-cluster-weergave.

**Q: Wat gebeurt er als ik mijn gegevens update?**  
A: De wijzigingen worden automatisch gesynchroniseerd naar de DTO-cluster (mogelijk met kleine vertraging).

## Checklist voor Beheerders

- [ ] Begrijp dat DTO-cluster een read-only weergave is
- [ ] Weet hoe je de sync-knop gebruikt
- [ ] Informeer leden over verantwoordelijkheid voor eigen gegevens
- [ ] Controleer regelmatig of gegevens actueel zijn
- [ ] Gebruik de juiste workflow voor wijzigingen (via gebruikersprofiel)

## Checklist voor Leden

- [ ] Houd 'Mijn gegevens' actueel
- [ ] Controleer regelmatig brevetten en medische geldigheid
- [ ] Informeer beheerder bij vragen over synchronisatie
- [ ] Begrijp dat DTO-cluster automatisch wordt bijgewerkt

## Contact

Voor vragen over de DTO-cluster:
- Neem contact op met je **aHoT**
- Of contacteer je **instructiecoördinator**
- Voor technische problemen: ZweefApp support
