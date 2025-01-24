# Technische Documentatie

![mediahuistecgni](https://github.com/user-attachments/assets/f65ce5cc-6d87-4462-b6d9-88a3718bf6f6)

In ons project hebben we diverse complexe features en componenten ontwikkeld. Hieronder vind je meer informatie over de belangrijkste componenten.

Root
Voor ons project hebben we een consistente visuele stijl aangehouden met specifieke kleuren en font-families die door het hele project worden gebruikt.

Voor de typografie maken we gebruik van het lettertype "BrutalType", dat ook werd toegepast in het originele ontwerp dat we hebben ontvangen. Om de hiërarchie in de tekst te benadrukken, hanteren we verschillende lettergewicht-opties (weights), afhankelijk van de belangrijkheid van de tekst.

```css
:root {
  /* Setup root variables */
  --media-sm: 600px;
  --media-md: 960px;
  --media-lg: 1280px;

  /* font-style */
  --h1-text-size: 2em;
  --h2-text-size: 1.5em;
  --h3-text-size: 1.17em;
  --h4-text-size: 1em;
  --p-text-size: 1em;

  /* colors */
  --primary-color: #0091ff;
  --secondary-color: #fe0070;
  --tertairy: #8b8b8b;
  --grey: #8b8b8b;
  --dark: #1e1e1e;
  --light: #ffff;
  --color-footer: #011564;
  --hover: #a11753;
  --hover-secondary: #0e76c6;

  /* radius */
  --full-radius: 100%;
  --mid-radius: 20%;

  /* font */
  --font-family: "BrutalType";
}

```


```css

/* Font import */
@font-face {
  font-family: "BrutalType";
  src: url("/fonts/BrutalType-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "BrutalType";
  src: url("/fonts/BrutalType.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}


```

## CSS `max-width`
In dit geval stellen we de maximale breedte van de tekst in op 65 tekens, wat een goede praktijk is om de tekst leesbaarder en visueel aantrekkelijker te maken.

## CSS `text-wrap: pretty`
Deze eigenschap wordt gebruikt om tekstregels op een visueel aantrekkelijke manier af te breken, vaak toegepast om alinea's leesbaarder en esthetisch aantrekkelijker te maken.

Meer informatie over [text-wrap: pretty](https://caniuse.com/mdn-css_properties_text-wrap_pretty)

## CSS `text-wrap: balance`
Hiermee kunnen meerdere tekstregels zo worden afgebroken dat elke regel ongeveer even breed is. Dit wordt vaak gebruikt om koppen leesbaarder en visueel aantrekkelijker te maken.

Meer informatie over [text-wrap: balance](https://caniuse.com/css-text-wrap-balance)

```css
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

p,
li,
figcaption {
  text-wrap: pretty;
  max-width: 65ch;
}
```


# Header / Mobile header





# Weekselectie


# Mediaplayer


# Schedule gids

### Overzicht
In deze commit heb ik de popover-API bij het klikken op een radioprogramma geïmplementeerd. Daarnaast heb ik de verbinding gelegd tussen de weekselectie en de radiogids. Verschillende tests zijn uitgevoerd om ervoor te zorgen dat de functionaliteit correct werkt.

#### Hoe werkt het?
1. Om markdown-rendering in de popoverbeschrijving mogelijk te maken, heb ik markdown-it geïnstalleerd:

```js
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
```

2. De functie is verbeterd om te werken met zowel cover- als thumbnail-afbeeldingen en bevat een fallback-optie:

```js
return {
  cover: firstUser ? `/${firstUser}` : thumbnail ? `/${thumbnail}` : "",
  thumbnail: thumbnail ? `/${thumbnail}` : "",
};
```

De ProgramCard is aangepast om de nieuwe cover- en thumbnail-afbeeldingen te ondersteunen:

```svelte
{#each stationShows as show, i}
  <ProgramCard
    showLogo={stationShows[0].mh_shows_id?.show?.radiostation?.logo
      ?.id}
    programName={show.mh_shows_id?.show?.name || "Unknown Program"}
    time={getShowTime(show)}
    jdImgSrc={getImageSource(show).cover}
    thumbnailImgSrc={getImageSource(show).thumbnail}
    programLink={show.id}
    description={md.render(
      show.mh_shows_id?.show?.body || "Unknown description",
    )}
  />
{/each}

```

3. Nieuwe export-variabelen toegevoegd voor afbeeldingen in `ProgramCard.svelte`:
```js
export let jdImgSrc = "";
export let thumbnailImgSrc = "";
```
4. Een unieke target ingesteld voor elke popover met `popovertarget="popover-{programLink}"`:
```svelte
 <button
  class="card {status} brutalist-btn brutalist"
  popovertarget="popover-{programLink}"
  style="--start:{start}; --end:{end}; --vt:{programLink}"
>

```

5. Een dynamische popover gemaakt voor elke kaart, die data preloadt `(data-sveltekit-preload-data="hover")` bij hover en sluit met Escape of een sluitknop:

```svelte
<div
  data-sveltekit-preload-data="hover"
  class="popover"
  popover
  id="popover-{programLink}"
  style="--vt:{programLink}"
>
  <div class="popover-card">
    <picture class="image">
      <source
        srcset={thumbnailImgSrc
          ? `https://fdnd-agency.directus.app/assets/${thumbnailImgSrc}?format=webp`
          : "/path/to/default/image.jpg"}
        alt={programName}
      />
      <source
        srcset={thumbnailImgSrc
          ? `https://fdnd-agency.directus.app/assets/${thumbnailImgSrc}?format=jpg`
          : "/path/to/default/image.jpg"}
        alt={programName}
      />
      <img
        loading="lazy"
        src={thumbnailImgSrc
          ? `https://fdnd-agency.directus.app/assets/${thumbnailImgSrc}?format=jpeg`
          : "/path/to/default/image.jpg"}
        alt={programName}
      />
    </picture>

    <input
      type="button"
      value="Sluiten"
      class="close"
      popovertarget="popover-{programLink}"
    />


```

6. De popover `sticky` gemaakt om te voorkomen dat deze uit beeld scrolt:
```css
  [popover] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    pointer-events: all;
  }

```














