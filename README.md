[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# screenshots-action

GitHub action for å ta skjermbilder med Puppeteer.

Den emulerer en del enheter og tar skjermbilder som lagres i `$GITHUB_WORKSPACE/screenshots/`.

Enhetene som emuleres pr nå er
- Chrome (øh... ikke akkurat emulert dah)
- Samsung Galaxy S5
- Samsung Galaxy S10
- iPhone 6
- iPhone X
- iPad
- Nexus 10

Action er inspirert av [puppeteer-screenshot-action](https://github.com/lannonbr/puppeteer-screenshot-action) som er et veldig godt alternativ dersom du ønsker å ta enkeltbilder.

## Eksempel

Legg dette inn i .yml-filen

```
steps:
  - name: Ta skjermbilder av nav.no
    uses: "navikt/screenshots-action@1.0.5"
    with:
      url: https://www.nav.no
```

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles via issues her på github.

# For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #område-arbeid-pilot

# Lisens

[MIT](LICENSE)
