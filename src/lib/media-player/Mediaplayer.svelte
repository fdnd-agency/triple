<script>
  import { onMount } from "svelte";
  // Variabele om de audio file te gebruiken
  let audio;
  // Variable om bij te houden of de audio file wordt afgespeeld
  let isPlaying = false;

  // Functie om de audio te stoppen
  // heeft een boolean van true dat de audio wordt afgespeeld
  function playAudio() {
    if (audio) {
      audio.play();
      isPlaying = true;
    }
  }
  // Functie om de audio te stoppen
  // heeft een boolean van false dat de audio wordt gestopt
  function stopAudio() {
    if (audio) {
      audio.pause();
      isPlaying = false;
    }
  }

  // Functie die wordt uitgevoerd wanneer de component wordt gemount
  onMount(() => {
    // hier geef ik de audio met een specifiek audiobestand mee
    audio = new Audio("/muziek/Amy Winehouse - Back To Black.mp3");
  });
</script>

<div class="audio radioplayer">
  <div class="audio__container">
    <div class="audio__player">
      <!-- navigation media player-->
      <div class="audio__player-container">
        <ul class="audio__list">
          <li class="audio__link"><a href="/">LIVE</a></li>
          <li class="audio__link"><a href="/">STATIONS</a></li>
          <li>
            <a href="/" aria-label="Pop out"
              ><img
                width="93"
                class="audio__list-link"
                alt="pop out"
                src="/Pop-out.svg"
              /></a
            >
          </li>
        </ul>

        <span class="audio__line"></span>

        <figure class="audio__figure">
          <img
            class="audio__amy"
            width="93"
            alt="foto Amy whine house"
            src="/amy-whine-house.png"
          />
          <p class="audio__dj-text">
            <img
              class="audio__dj"
              width="93"
              alt="foto dj icoon"
              src="/DJ.svg"
            />
            Sander Hoogendorn
          </p>
        </figure>

        <article class="audio__text">
          <h2>Goud van oud</h2>
          <p class="audio__omschrijving">
            <img
              width="93"
              class="audio__klok"
              alt="tijd icoon"
              src="/Time.svg"
            /> Back To Black - Amy Winehouse
          </p>
        </article>

        <ul class="audio__group">
          <li>
            <a href="/" aria-label="Kijk live" class="audio__kijk-live">
              <img
                width="93"
                class="audio__group-live"
                id="audio__live-btn"
                alt="kijk live button"
                src="/live-icon.svg"
              />
              <p>Kijk live</p>
            </a>
          </li>
          <li>
            <a href="/" aria-label="Casting">
              <img
                width="93"
                class="audio__group-cast"
                id="audio__cast-btn"
                alt="casting button"
                src="/Casting.svg"
              />
            </a>
          </li>
          <!-- de if statement om te kijken of de audio wordt afgespeeld -->
          {#if isPlaying}
            <li>
              <!-- de pause button word weergeven en gebruikt als de play button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
              <a
                href="#"
                aria-label="Pause"
                class="audio__pause"
                on:click|preventDefault={stopAudio}
              >
                <img
                  width="93"
                  class="audio__group-pause"
                  alt="pause button"
                  src="/stop-button.svg"
                />
              </a>
            </li>
            <!-- anders wordt de play button weergegeven -->
          {:else}
            <li>
              <!-- de play button word weergeven en gebruikt als de pause button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
              <a
                href="#"
                aria-label="Play"
                class="audio__play"
                on:click|preventDefault={playAudio}
              >
                <img
                  width="93"
                  class="audio__group-play"
                  alt="play button"
                  src="/play-button.svg"
                />
              </a>
            </li>
            <!-- de if statement sluit -->
          {/if}
          <li>
            <a href="/" aria-label="whats app" class="audio__whats-app">
              <img
                width="93"
                class="audio__group-whatsapp"
                id="audio__app-btn"
                alt="whats app button"
                src="/Whatsapp-Icon-Link.svg"
              />
              <p>App studio</p>
            </a>
          </li>
        </ul>
      </div>

      <div class="audio__volgende">
        <article class="audio__overzicht">
          <h2 class="audio__overzicht-header">Eerder op radio Veronica</h2>
          <div class="audio__artiesten-container">
            <article class="audio__tijd">
              <h3 class="audio-tijd-header">Nu</h3>
              <span class="audio__volgende-lijn"></span>
              <p class="audio__tijd-digitaal">16:45</p>
              <span class="audio__volgende-lijn"></span>
            </article>
            <div class="audio__artiesten-wachtrij">
              <article>
                <img
                  class="audio__artiesten-foto"
                  width="93"
                  src="/amy-whine-house.png"
                  alt="foto album amy winehouse"
                />
                <h2 class="audio__foto-header">Back to black</h2>
                <p>Amy winhouse</p>
                <span></span>
              </article>
              <article>
                <img
                  class="audio__artiesten-foto"
                  width="93"
                  src="/Soul-asylum.png"
                  alt="foto aulbum soul asylum"
                />
                <h2 class="audio__foto-header">Run away train</h2>
                <p>Soul Asylum</p>
                <span></span>
              </article>
            </div>
          </div>
          <div class="audio__lijst">
            <a href="/" class="audio__lijst-link" aria-label="volledige lijst">
              Volledige lijst<img
                class="audio__pijl"
                width="93"
                src="/pijl.svg"
                alt="pijl icoon volgende lijst"
              />
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>

<style>
  .audio {
    top: 70px;
    position: sticky;
    height: calc(100vh - 70px);
    background: white;

    @media (max-width: 980px) {
      z-index: 4;
      top: unset;
      position: absolute;
      height: auto;
      bottom: 170px;
      width: 98vw;
    }
  }

  p {
    color: var(--grey);
  }

  .audio__container {
    margin: 0.5rem;

    @media (min-width: 982px) {
      margin: 0;
    }
  }

  .audio__player {
    box-shadow: 7px 3px 25px 0px rgba(213 210 213);
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 70px);
    gap: 1rem;
    width: 100%;

    @media (max-width: 980px) {
      height: auto;
      flex-direction: row;
    }
  }

  .audio__player > .audio__player-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    @media (max-width: 980px) {
      flex-direction: row;
      width: 100%;
    }
  }

  .audio__amy {
    height: 3.75rem;
    width: 3.75rem;

    @media only screen and (min-width: 982px) {
      width: 10rem;
      height: 10rem;
    }
  }

  .audio__text {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    @media only screen and (min-width: 982px) {
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 20px;
    }
  }

  h2 {
    width: 155px;
  }

  .audio__klok {
    width: 1rem;
  }

  .audio__omschrijving {
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
    width: 14rem;
    height: 1em;
    font-size: 14px;
  }

  .audio__group {
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem;
    margin-left: auto;

    @media only screen and (min-width: 600px) and (max-width: 980px) {
      justify-content: flex-end;
    }

    @media only screen and (min-width: 982px) {
      align-items: unset;
      margin-left: unset;
      /* margin-bottom: 180px; */
    }
  }

  .audio__group-cast {
    width: 1.25rem;
    height: 1.25rem;

    @media only screen and (min-width: 982px) {
      display: none;
    }
  }

  .audio__group-play {
    height: 1.5rem;
    width: 1.5rem;

    @media only screen and (min-width: 982px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .audio__group-pause {
    height: 1.5rem;
    width: 1.5rem;

    @media only screen and (min-width: 982px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  /* TABS DESKTOP */

  .audio__list {
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    font-family: "BrutalType";
    font-weight: 900;
    align-items: center;
    width: 100%;

    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }
  }

  .audio__figure {
    @media only screen and (min-width: 982px) {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  .audio__dj-text {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }
  }

  .audio__dj {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }

    @media only screen and (min-width: 982px) {
      width: 0.8rem;
    }
  }

  .audio__line {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }

    @media only screen and (min-width: 982px) {
      width: 300px;
      height: 2px;
      background-color: var(--grey);
    }
  }

  .audio__link {
    list-style-type: none;
  }

  a {
    color: var(--grey);
    cursor: pointer;
  }

  .audio__list-link {
    @media only screen and (min-width: 960px) {
      width: 1.5rem;
      margin-left: auto;
    }
  }

  .audio__group-live {
    width: 1.25rem;
    height: 1.25rem;
  }

  .audio__group-whatsapp {
    width: 1.25rem;
    height: 1.25rem;
  }

  .audio__kijk-live {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }

    @media only screen and (min-width: 982px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
    }
  }

  .audio__whats-app {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }

    @media only screen and (min-width: 982px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
    }
  }

  .audio__link a:hover {
    color: var(--secondary-color);
    border-bottom: solid 0.2rem var(--secondary-color);
    transition: 0.2s ease-in;
  }

  .audio__link:active {
    color: var(--secondary-color);
    border-bottom: solid 0.2rem var(--secondary-color);
  }

  /* Volgende */
  .audio__volgende {
    @media only screen and (min-width: 320px) and (max-width: 980px) {
      display: none;
    }

    @media only screen and (min-width: 982px) {
      display: flex;
      flex-direction: row;
      width: 20px;
      gap: 1.5rem;
      margin-right: auto;
      position: relative;
    }
  }

  .audio__overzicht {
    @media only screen and (min-width: 982px) {
      padding: 0.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-bottom: 1rem;
    }
  }

  .audio__artiesten-container {
    @media only screen and (min-width: 982px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }

  .audio__overzicht-header {
    width: 280px;
  }

  .audio__tijd {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  .audio-tijd-header {
    color: var(--secondary-color);
    position: absolute;
    top: 2.5em;
    left: 0.7em;
  }

  .audio__volgende-lijn {
    border-left: 2px dashed var(--grey);
    width: 32px;
    height: 64px;
    margin-bottom: 1em;
    display: inline-block;
    margin: 20px 0px 0px 20px;
  }

  .audio__tijd-digitaal {
    position: absolute;
    top: 9em;
    left: 0.5em;
  }

  .audio__artiesten-wachtrij {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .audio__artiesten-wachtrij article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  .audio__artiesten-foto {
    width: 80px;
    height: 80px;

    @media only screen and (min-width: 982px) {
      width: 50px;
      height: 50px;
    }
  }

  .audio__artiesten-wachtrij article:nth-child(1) .audio__artiesten-foto {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .audio__artiesten-wachtrij article:nth-child(2) .audio__artiesten-foto {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .audio__foto-header {
    width: 170px;
  }

  .audio__artiesten-wachtrij article:nth-child(1) .audio__foto-header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .audio__artiesten-wachtrij article:nth-child(2) .audio__foto-header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .audio__artiesten-wachtrij p {
    padding-bottom: 1rem;
  }

  .audio__artiesten-wachtrij article:nth-child(1) p {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .audio__artiesten-wachtrij article:nth-child(2) p {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .audio__artiesten-wachtrij article:nth-child(1) span {
    display: inline-block;
    background-color: var(--grey);
    height: 1px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  .audio__artiesten-wachtrij article:nth-child(2) span {
    display: inline-block;
    background-color: var(--grey);
    height: 1px;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }

  .audio__lijst-link {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    font-size: 1.2rem;
    color: var(--secondary-color);
    font-weight: bold;
  }

  .audio__pijl {
    width: 24px;
    margin-left: auto;
  }
</style>
