# API Toegang

## Overzicht

Deze pagina behandelt de mogelijkheden van de ZweefApp API voor gevorderde gebruikers en beheerders die processen willen automatiseren.

## Wat is de ZweefApp API?

ZweefApp beschikt over een **uitgebreide API** (Application Programming Interface) waarmee lidgegevens en bijhorende instellingen **programmatorisch** kunnen worden beheerd.

::: info VOOR GEVORDERDE GEBRUIKERS
API-gebruik vereist **technische kennis** van:
- HTTP requests en REST APIs
- Authenticatie en autorisatie
- Data processing (bijv. JSON)
- Programmeren (Python, JavaScript, etc.)
:::

## API Documentatie

De volledige API-documentatie is beschikbaar via:

🔗 **[ZweefApp API Documentatie](https://documenter.getpostman.com/view/25434528/2s8ZDX5PRi)**

Deze documentatie bevat:
- Beschikbare **endpoints**
- **Authenticatie**-methoden
- Request/response **voorbeelden**
- **Foutcodes** en troubleshooting

## Mogelijkheden via de API

### Wat kan de API?

Met de ZweefApp API kun je onder meer:

| Functionaliteit | Mogelijk? |
|----------------|-----------|
| Lidgegevens ophalen | ✅ Ja |
| Lidgegevens wijzigen | ✅ Ja |
| LVZC-lidmaatschap toekennen | ✅ Ja |
| Vluchten ophalen | ✅ Ja |
| Vluchten uploaden | ✅ Ja |
| Reserveringen beheren | ✅ Ja |
| Statistieken genereren | ✅ Ja |
| Bulk operaties uitvoeren | ✅ Ja |

## Use Cases

### 1. Automatisch LVZC-Lidmaatschap Toekennen

**Scenario:** Je wilt voor alle leden tegelijk het LVZC-lidmaatschap activeren zonder handmatig 4 clicks per lid te doen.

**API-aanpak:**
1. Haal lijst van alle leden op via API
2. Filter leden die nog geen LVZC-lidmaatschap hebben
3. Ken voor elk lid het lidmaatschap toe via API call
4. Genereer overzicht van toegekende lidmaatschappen

**Voordeel:**
- ⚡ Bespaart veel tijd bij grote aantallen
- 📊 Creëert automatisch een overzicht
- ✅ Minder kans op fouten door handmatige invoer

### 2. Overzichtstabel voor Lidmaatschap

**Scenario:** Je wilt een overzicht met per rij één lid en daarachter de LVZC-lidmaatschap status, vergelijkbaar met de facturatietool van het secretariaat.

**API-aanpak:**
1. Haal alle leden op via API
2. Vraag voor elk lid de LVZC-lidmaatschap status op
3. Presenteer in een tabel (Excel, webapplicatie, etc.)
4. Maak toekenning mogelijk met één klik per lid
5. Verwerk de toekenning via API

**Voordeel:**
- 👁️ Duidelijk overzicht wie wel/niet is toegekend
- 🖱️ Eén klik per lid in plaats van vier
- 📈 Voortgang is direct zichtbaar

### 3. Vluchtdata Synchronisatie

**Scenario:** Een lid wisselt van club en je wilt alle vluchten overzetten.

**API-aanpak:**
1. Download alle vluchten van het lid uit oude club via API
2. Upload alle vluchten naar nieuwe club via API
3. Verificeer dat alle data correct is overgezet

**Voordeel:**
- 🚀 Sneller dan handmatige export/import
- ✅ Minder kans op verlies van data
- 🔄 Kan geautomatiseerd worden voor frequente overdrachten

### 4. Custom Rapportages

**Scenario:** Je wilt maandelijkse statistieken genereren die niet standaard in ZweefApp zitten.

**API-aanpak:**
1. Haal relevante data op via API (vluchten, leden, reserveringen)
2. Verwerk data met eigen scripts
3. Genereer custom rapporten (PDF, Excel, dashboard)
4. Automatiseer het proces (bijv. maandelijks)

**Voordeel:**
- 📊 Rapporten op maat van je club
- 🤖 Volledige automatisering mogelijk
- 📧 Kan automatisch worden verstuurd naar belanghebbenden

## Authenticatie

### Hoe authenticeer je met de API?

ZweefApp gebruikt **API tokens** voor authenticatie:

1. **Genereer API token** in je ZweefApp account
2. **Voeg token toe** aan HTTP headers van je requests
3. **Beveilig het token** (niet delen, veilig opslaan)

::: danger BEVEILIGING
- Deel **nooit** je API token met anderen
- Sla tokens **veilig** op (niet in code die online staat)
- **Roteer** tokens regelmatig
- **Revoke** tokens die niet meer worden gebruikt
:::

## Voorbeeld API Call

### Basis voorbeeld (pseudo-code)

```javascript
// Voorbeeld: Haal alle leden op
const response = await fetch('https://api.zweefapp.nl/v1/members', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
});

const members = await response.json();
console.log(members);
```

### LVZC-lidmaatschap toekennen (pseudo-code)

```javascript
// Voorbeeld: Ken LVZC-lidmaatschap toe aan lid
const response = await fetch('https://api.zweefapp.nl/v1/members/123/lvzc', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'lvzc_membership': true,
    'membership_year': 2026
  })
});

const result = await response.json();
console.log(result);
```

::: warning DISCLAIMER
Bovenstaande voorbeelden zijn pseudo-code. Raadpleeg de officiële API documentatie voor exacte endpoints en request formaten.
:::

## Beperkingen en Risico's

### Rate Limiting

De API heeft **rate limits** om misbruik te voorkomen:
- Maximaal X requests per minuut/uur
- Bij overschrijding: tijdelijke blokkering

::: tip AANBEVELING
- Implementeer **pauzes** tussen API calls
- Gebruik **bulk endpoints** waar mogelijk
- **Monitor** je API usage
:::

### Geen LVZC Ondersteuning

::: danger BELANGRIJK
Het gebruik van de API gebeurt **volledig op eigen initiatief en verantwoordelijkheid** van de club.

**LVZC biedt GEEN ondersteuning** voor:
- ❌ Ontwikkeling van API-integraties
- ❌ Debugging van custom scripts
- ❌ Onderhoud van maatwerkoplossingen
- ❌ Training in API-gebruik
:::

### Data Integriteit

Bij gebruik van de API ben je zelf verantwoordelijk voor:
- ✅ **Validatie** van ingevoerde data
- ✅ **Backups** maken voor wijzigingen
- ✅ **Testen** van scripts voordat je ze op productiedata gebruikt
- ✅ **Monitoring** van geautomatiseerde processen

## Best Practices

### Voor API-ontwikkeling

1. **Test eerst**
   - Gebruik een test-omgeving indien beschikbaar
   - Test met kleine datasets
   - Verifieer resultaten handmatig

2. **Foutafhandeling**
   - Implementeer degelijke error handling
   - Log alle API calls en responses
   - Heb een rollback-plan bij problemen

3. **Documentatie**
   - Documenteer je scripts en integraties
   - Deel kennis met andere beheerders
   - Versie-beheer voor je code (Git)

4. **Beveiliging**
   - Sla API tokens veilig op
   - Gebruik environment variables
   - Roteer tokens regelmatig
   - Beperk API token rechten tot het minimale

5. **Monitoring**
   - Monitor API usage en errors
   - Stel alerts in voor failures
   - Controleer regelmatig of integraties nog werken

## Praktische Tools

### Aanbevolen tools voor API-gebruik

| Tool | Doel | Platform |
|------|------|----------|
| **Postman** | API testing en development | Windows/Mac/Linux |
| **Python + requests** | Scripting en automation | Cross-platform |
| **JavaScript/Node.js** | Web-based integraties | Cross-platform |
| **Excel + Power Query** | Data import/export | Windows/Mac |
| **cURL** | Command-line testing | Cross-platform |

### Leerresources

- 📚 [ZweefApp API Docs](https://documenter.getpostman.com/view/25434528/2s8ZDX5PRi)
- 📚 [REST API Best Practices](https://restfulapi.net/)
- 📚 [Postman Learning Center](https://learning.postman.com/)

## Wanneer NIET de API gebruiken

### Gebruik de interface wanneer:

❌ Je **geen technische kennis** hebt van APIs  
❌ Het een **eenmalige actie** betreft  
❌ Het **slechts enkele leden** betreft  
❌ Je **geen tijd hebt** om scripts te ontwikkelen en testen  
❌ De **standaardfunctionaliteit** voldoet

✅ **Gebruik de API wanneer:**
- Je regelmatig dezelfde acties uitvoert
- Je met grote aantallen leden werkt
- Je custom rapportages wilt genereren
- Je integraties met andere systemen wilt bouwen

## Veelgestelde Vragen

**Q: Heb ik speciale toestemming nodig om de API te gebruiken?**  
A: Nee, elke gebruiker met de juiste rechten kan een API token genereren. Wel op eigen verantwoordelijkheid.

**Q: Kan LVZC mij helpen met mijn API-integratie?**  
A: Nee, LVZC biedt geen ondersteuning voor API-gebruik. Dit is volledig op eigen initiatief.

**Q: Wat als mijn API-script iets kapot maakt?**  
A: Je bent zelf verantwoordelijk. Maak altijd backups en test grondig voordat je op productiedata werkt.

**Q: Is er een sandbox/test-omgeving beschikbaar?**  
A: Raadpleeg de API documentatie voor informatie over test-omgevingen.

**Q: Kan ik alle data via de API benaderen?**  
A: Je kunt alleen data benaderen waarvoor je gebruikersaccount rechten heeft. API-toegang volgt dezelfde rechtenstructuur als de webinterface.

**Q: Hoeveel requests kan ik per dag doen?**  
A: Raadpleeg de API documentatie voor actuele rate limits.

## Checklist voor API-gebruik

### Voordat je begint

- [ ] Heb je voldoende technische kennis van APIs?
- [ ] Heb je de API documentatie gelezen?
- [ ] Heb je een duidelijke use case?
- [ ] Is de API de beste oplossing (vs. handmatig)?
- [ ] Heb je tijd om te ontwikkelen en testen?

### Bij ontwikkeling

- [ ] API token gegenereerd en veilig opgeslagen
- [ ] Test-omgeving ingericht (indien mogelijk)
- [ ] Error handling geïmplementeerd
- [ ] Logging en monitoring opgezet
- [ ] Backup-strategie bepaald
- [ ] Code gedocumenteerd

### Voor productie

- [ ] Grondig getest met kleine datasets
- [ ] Resultaten handmatig geverifieerd
- [ ] Rollback-plan aanwezig
- [ ] Andere beheerders geïnformeerd
- [ ] Monitoring alerts ingesteld

## Contact en Ondersteuning

### Voor API-vragen

- 📖 **Documentatie**: [ZweefApp API Docs](https://documenter.getpostman.com/view/25434528/2s8ZDX5PRi)
- 💬 **ZweefApp Support**: Voor technische vragen over de API zelf
- ⚠️ **Niet LVZC**: LVZC biedt geen API-ondersteuning

### Voor LVZC-specifieke vragen

- 📧 Contacteer LVZC voor vragen over LVZC-processen en -procedures
- ❌ Niet voor technische API-implementatie vragen
