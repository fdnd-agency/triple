<script>
  import { onMount } from "svelte";
  import amy from "$lib/assets/amy-whine-house.png?enhanced";
  import amyImage from "$lib/assets/amy-whine-house.png";

  // referentie naar de audio element om muziek te kunnen afspelen of stoppen
  let audioElement;
  // Variable om bij te houden of de audio file wordt afgespeeld
  let isPlaying = false;
  // Functie om de audio te aftespelen
  // heeft een boolean van true dat de audio wordt afgespeeld
  function playAudio() {
    if (audioElement) {
      audioElement.play();
      isPlaying = true;
    }
  }
  // Functie om de audio te stoppen
  // heeft een boolean van false dat de audio wordt gestopt
  function stopAudio() {
    if (audioElement) {
      audioElement.pause();
      isPlaying = false;
    }
  }
  // Functie die wordt uitgevoerd wanneede component wordt gemount
  onMount(() => {
    // voeg een event listener toe aan de audio element om te kijken of de audio is afgelopen
    if (audioElement) {
      audioElement.addEventListener("ended", () => {
        isPlaying = false;
      });
    }
  });
</script>

<div class="audio radioplayer">
  <div class="audio__container">
    <div class="audio__player">
      <!-- navigation media player-->
      <div class="audio__player-container">
        <ul class="audio__list">
          <li class="audio__link"><a href="/">live</a></li>
          <li class="audio__link"><a href="/">stations</a></li>
          <li>
            <a href="/" aria-label="Pop out">
              <svg
                class="audio__list-link"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.34 4.97V3H20.95V12.61H18.98V6.36L11.34 14.01L9.94 12.62L17.59 4.97H11.34ZM3.02 21.77H18.75L18.74 15.83H16.78V19.79H4.99L4.97 9.14H8V7.17H3L3.02 21.77Z"
                  fill="#1E1E1E"
                />
              </svg>
            </a>
          </li>
        </ul>

        <span class="audio__line"></span>

        <figure class="audio__figure">
          <enhanced:img
            class="audio__amy"
            src={amy}
            width="93"
            alt="foto Amy whine house"
          />
          <p class="audio__dj-text">
            <svg
              class="audio__dj"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.00003 0.666626C8.48515 0.666626 10.5733 2.36632 11.1653 4.66663H12V7.99996H8.66667V7.9995C8.05835 8.80924 7.09 9.33329 6 9.33329C4.91 9.33329 3.94165 8.80924 3.33333 7.9995V7.99996H0V4.66663H0.834717C1.42677 2.36632 3.51491 0.666626 6.00003 0.666626ZM2.22763 4.66663H2.94435C3.45903 3.48969 4.63398 2.66663 6 2.66663C7.36602 2.66663 8.54097 3.48969 9.05565 4.66663H9.77242C9.2233 3.11304 7.74165 1.99996 6.00003 1.99996C4.2584 1.99996 2.77675 3.11304 2.22763 4.66663ZM6 3.99996C7.1 3.99996 8 4.89996 8 5.99996C8 7.09996 7.1 7.99996 6 7.99996C4.9 7.99996 4 7.09996 4 5.99996C4 4.89996 4.9 3.99996 6 3.99996ZM0 10.6666V15.3333H12V10.6666H0ZM1.33333 14V12H10.6667V14H1.33333Z"
                fill="#8B8B8B"
              />
            </svg>
            Sander Hoogendorn
          </p>
        </figure>

        <article class="audio__text">
          <h2>Goud <span class="audio__hidden-text">van oud</span></h2>
          <div class="audio__text-group">
            <svg
              class="audio__klok"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.33398 8.00004C1.33398 4.32671 4.32732 1.33337 8.00065 1.33337C11.674 1.33337 14.6673 4.32671 14.6673 8.00004C14.6673 11.6734 11.674 14.6667 8.00065 14.6667C4.32732 14.6667 1.33398 11.6734 1.33398 8.00004ZM2.66732 8.00004C2.66732 10.94 5.06065 13.3334 8.00065 13.3334C10.9407 13.3334 13.334 10.94 13.334 8.00004C13.334 5.06004 10.9407 2.66671 8.00065 2.66671C5.06065 2.66671 2.66732 5.06004 2.66732 8.00004ZM7.33398 8.27337V4.00004H8.66732V7.72671L11.1407 10.1934L10.194 11.14L7.33398 8.27337Z"
                fill="#8B8B8B"
              />
            </svg>
            <p class="audio__omschrijving">
              Back <span class="audio__hidden-text"
                >To Black - Amy Winehouse</span
              >
            </p>
          </div>
        </article>

        <ul class="audio__group">
          <li>
            <button aria-label="kijk live" class="audio__livehidden-button">
              <svg
                class="audio__group-live"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_269_4276)">
                  <path d="M2 3V19H22V3H2ZM20 17H4V5H20V17Z" fill="#1E1E1E" />
                  <path
                    d="M9 6.22998V15.76L16.94 10.99L9 6.22998ZM11 9.75998L13.06 10.99L11 12.22V9.74998V9.75998Z"
                    fill="#1E1E1E"
                  />
                  <path d="M17 20H7V22H17V20Z" fill="#1E1E1E" />
                </g>
                <defs>
                  <clipPath id="clip0_269_4276">
                    <rect
                      width="20"
                      height="19"
                      fill="white"
                      transform="translate(2 3)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Kijk live
            </button>
          </li>
          <li>
            <a href="/" aria-label="Casting">
              <svg
                class="audio__group-cast"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 7V3H22V21H16V19H20V5H4V7H2ZM2 8.9V10.94C4.46 11.42 6.72 12.6 8.56 14.4C10.42 16.23 11.66 18.51 12.18 21H14.21C13.67 17.96 12.21 15.18 9.96 12.97C7.74 10.8 4.99 9.41 2 8.9ZM2 15.05V13C3.93 13.46 5.71 14.42 7.16 15.84C8.63 17.28 9.63 19.06 10.12 21.01H8.06C7.62 19.6 6.84 18.32 5.76 17.26C4.69 16.21 3.4 15.46 2 15.05ZM2 21V17.17V17.16C2.87 17.5 3.68 18.01 4.36 18.68C5.04 19.35 5.56 20.14 5.92 21H2Z"
                  fill="#1E1E1E"
                />
              </svg>
            </a>
          </li>

          <!-- Audio element to play the music in which i have binded the audio element for it to work-->
          <audio
            bind:this={audioElement}
            src="/muziek/Amy Winehouse - Back To Black.mp3"
          >
          </audio>

          <!-- de if statement om te kijken of de audio wordt afgespeeld -->
          {#if isPlaying}
            <li>
              <!-- de pause button word weergeven en gebruikt als de play button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
              <button
                aria-label="stop button"
                class="audio__playstop--hidden-button"
                on:click={stopAudio}
              >
                <svg
                  class="audio__group-pause"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                    fill="#FE0170"
                  />
                  <path d="M30 30H18V18H30V30Z" fill="white" />
                </svg>
              </button>
            </li>
            <!-- anders wordt de play button weergegeven -->
          {:else}
            <li>
              <!-- de play button word weergeven en gebruikt als de pause button actief word en met prevent default wordt er voor gezorgt dat de gebruiker niet naar een andere pagina wordt toegeleid -->
              <button
                aria-label="play button"
                class="audio__playstop--hidden-button"
                on:click={playAudio}
              >
                <svg
                  class="audio__group-play"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                    fill="#FE0170"
                  />
                  <g clip-path="url(#clip0_1049_3542)">
                    <path d="M19 32V16L31 24L19 32Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1049_3542">
                      <rect
                        width="12"
                        height="16"
                        fill="white"
                        transform="translate(20 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <!-- de if statement sluit -->
          {/if}
          <li>
            <button aria-label="app studio" class="audio__apphidden-button">
              <svg
                class="audio__group-whatsapp"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.35414 11.7496C2.35414 6.37364 6.7609 2 12.1775 2C17.5937 2 22 6.37364 22 11.7496C22 17.1249 17.5937 21.4981 12.1776 21.498C10.5532 21.498 8.94811 21.0975 7.52798 20.3387L2.33836 21.9878C2.31252 21.9961 2.28602 22 2.25973 22C2.19109 22 2.12388 21.9728 2.07434 21.9222C2.0057 21.8523 1.98232 21.7497 2.01375 21.6569L3.70096 16.68C2.81947 15.1903 2.35414 13.4883 2.35414 11.7496ZM7.89597 18.1907C9.16857 19.0258 10.649 19.4672 12.1775 19.4672C16.4675 19.4672 19.9575 16.0051 19.9575 11.7496C19.9575 7.49352 16.4673 4.03091 12.1775 4.03091C7.88707 4.03091 4.39655 7.49352 4.39655 11.7496C4.39655 13.3854 4.90882 14.9499 5.87791 16.274C5.92791 16.3424 5.94148 16.4307 5.91434 16.5109L5.07512 18.9868L7.6748 18.1604C7.70058 18.1522 7.72707 18.1482 7.7535 18.1482C7.8035 18.1482 7.85318 18.1626 7.89597 18.1907ZM16.7501 13.4684C16.7781 13.4822 16.7952 13.4905 16.799 13.4923L16.7991 13.4924C16.99 13.584 17.1408 13.6565 17.2283 13.8003C17.3561 14.0119 17.3055 14.5951 17.1134 15.1288C16.8696 15.8064 15.7976 16.3618 15.3098 16.4051L15.2383 16.4119C15.1255 16.423 14.9976 16.4355 14.8379 16.4355H14.8378C14.4577 16.4355 13.789 16.3703 12.377 15.8063C10.9103 15.2204 9.46351 13.9643 8.30292 12.2693C8.29956 12.2644 8.29637 12.2598 8.29336 12.2553C8.2784 12.2334 8.26776 12.2179 8.26149 12.2095C7.95844 11.8101 7.25259 10.7599 7.25259 9.64759C7.25259 8.41174 7.84415 7.70901 8.19383 7.48856C8.52357 7.2807 9.26935 7.18252 9.4063 7.17674C9.48752 7.17331 9.4961 7.17236 9.5047 7.1721C9.50801 7.172 9.51132 7.172 9.51877 7.172C9.80779 7.172 10.0158 7.34739 10.1732 7.72408C10.1889 7.76154 10.2363 7.87561 10.2998 8.0283C10.5007 8.5118 10.8626 9.38258 10.8888 9.43499C10.9308 9.51739 11.0608 9.77259 10.9086 10.075L10.8759 10.1406L10.8757 10.141C10.8135 10.2672 10.7597 10.3762 10.639 10.5166C10.6003 10.5614 10.5608 10.609 10.5214 10.6564L10.5211 10.6567C10.438 10.7568 10.352 10.8603 10.2727 10.9388C10.2455 10.966 10.1929 11.0187 10.1872 11.0397C10.1872 11.0397 10.1873 11.0398 10.1873 11.0402C10.1878 11.0433 10.1906 11.0615 10.2116 11.0973C10.3744 11.3728 11.5616 13.0066 13.1257 13.686C13.194 13.7157 13.4197 13.8086 13.4327 13.8086C13.4473 13.8086 13.4716 13.7843 13.4894 13.764C13.6256 13.6101 14.0665 13.0947 14.2121 12.8782C14.341 12.6854 14.5064 12.5873 14.7033 12.5873C14.8238 12.5873 14.9371 12.6244 15.0429 12.6624C15.2769 12.7466 16.4889 13.3405 16.7501 13.4684Z"
                  fill="#1E1E1E"
                />
              </svg>
              App studio
            </button>
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
                  src={amyImage}
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
            <button aria-label="volledige lijst" class="audio__hidden-button">
              Volledige lijst
              <svg
                class="audio__pijl"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clip-path="url(#clip0_403_3663)">
                  <path
                    d="M7.29 1.41L13.59 7.71H0V9.71H13.59L7.29 16L8.71 17.41L17.41 8.71L8.71 0L7.29 1.41Z"
                    fill="#FE0170"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_403_3663">
                    <rect width="17.41" height="17.41" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>

<style>
  .audio {
    background: white;
    z-index: 4;
    top: unset;
    position: fixed;
    height: auto;
    bottom: 90px;
    width: 100%;

    @media (min-width: 980px) {
      top: 70px;
      position: sticky;
      height: calc(100vh - 70px);
      background: white;
      bottom: 150px;
    }
  }

  p {
    color: var(--grey);
  }

  .audio__container {
    margin: 0.2rem;
    width: 100%;

    @media (min-width: 982px) {
      margin: 0;
    }
  }

  .audio__player {
    box-shadow: 7px 3px 25px 0px rgba(213 210 213);
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 70px);
    gap: 1rem;
    position: relative;

    @media (min-width: 390px) {
      width: 100%;
    }

    @media (max-width: 980px) {
      height: auto;
      flex-direction: row;
    }

    @media (min-width: 1280px) {
      width: 300px;
    }
  }

  .audio__player > .audio__player-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
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
    width: 110px;

    @media only screen and (min-width: 982px) {
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 20px;
    }
  }

  h2 {
    width: 60px;

    @media screen and (min-width: 320px) {
      width: 155px;
    }
  }

  .audio__klok {
    width: 1rem;
    height: 1rem;
  }

  .audio__omschrijving {
  
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .audio__hidden-text {
    @media only screen and (max-width: 320px) {
      display: none;
    }
  }

  .audio__text-group {
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

    @media (min-width: 320px) and (max-width: 980px) {
      justify-content: flex-end;
      margin-left: auto;
    }

    @media (min-width: 982px) {
      align-items: unset;
      margin-left: unset;
    }
  }

  .audio__group-cast {
    width: 1.25rem;
    height: 1.25rem;

    @media only screen and (min-width: 982px) {
      display: none;
    }
  }

  .audio__group-play,
  .audio__group-pause {
    height: 1.5rem;
    width: 1.5rem;

    @media screen and (min-width: 982px) {
      height: 2.5rem;
      width: 2.5rem;
    }
  }

  .audio__playstop--hidden-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  /* TABS DESKTOP */

  .audio__list {
    display: none;

    @media only screen and (min-width: 980px) {
      padding-top: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      font-family: "BrutalType";
      font-weight: 900;
      align-items: center;
      width: 100%;
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
    @media only screen and (max-width: 980px) {
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
    text-transform: uppercase;
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

  .audio__livehidden-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--grey);

    @media screen and (max-width: 980px) {
      display: none;
    }

    @media screen and (min-width: 982px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
    }
  }

  .audio__livehidden-button:hover {
    color: var(--secondary-color);
  }

  .audio__apphidden-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: var(--grey);

    @media screen and (max-width: 980px) {
      display: none;
    }

    @media screen and (min-width: 982px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
    }
  }

  .audio__apphidden-button:hover {
    color: var(--secondary-color);
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

  /* Next */
  .audio__volgende {
    @media only screen and (max-width: 980px) {
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

  .audio__hidden-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    width: 100%;
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
