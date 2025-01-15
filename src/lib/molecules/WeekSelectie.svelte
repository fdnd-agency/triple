<script>
  import { onMount } from "svelte";
  import {
    loadMonthDays,
    getCurrentDateInfo,
    monthNames,
  } from "$lib/scripts/Weekselectie/GetDates.js";

  const { year, month, day: currentDayNumber } = getCurrentDateInfo();
  // Scroll left and right functions
  const scrollLeft = () =>
    carousel?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () =>
    carousel?.scrollBy({ left: 200, behavior: "smooth" });

  let showCurrentMonth = monthNames[month];
  let daysInMonth = loadMonthDays(year, month);
  let dayOfWeekButton;
  let carousel;

  // Wait untill the DOM content is loaded. And excecute all functions on load.
  onMount(() => {
    // Calculate how many width in pixels 1 button has (I use getBounding because the values will depent on the screen resolution)
    let buttonSize = dayOfWeekButton?.getBoundingClientRect().width;
    // Calculate how var you have to scroll, to reach te beginning of the button I multiply the size of the button in px with the curent number of the day (the number of buttons) and I subtract the size of one button from the outcome, otherwise you will reach the end of the button instead of the beginning.
    let scrollLocation = buttonSize * currentDayNumber - buttonSize;
    // Scroll to the left with smooth behavior, use the value of scroll location
    const scrollToCurrentDay = () =>
      carousel?.scrollBy({ left: scrollLocation, behavior: "smooth" });
    scrollToCurrentDay();
  });
</script>

<!-- HTML -->
<section class="month-overview">
  <!-- Get the current month and year value from the variables and print it on the screen -->
  <h2>{showCurrentMonth} {year}</h2>
  <section class="day-carousel">
    <button class="navigation-buttons" on:click={scrollLeft}>
      <svg
        width="28"
        height="36"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Scroll naar links</title>
        <path
          d="M5.86317 11.5298C6.12271 11.2703 6.12285 10.8496 5.86349 10.5898L2.17915 6.90044C1.78908 6.50984 1.7893 5.87705 2.17963 5.48671L5.86287 1.80347C6.12252 1.54382 6.12252 1.12285 5.86287 0.863198V0.863198C5.60333 0.603655 5.18257 0.603534 4.92287 0.862928L0.294261 5.48623C-0.0966467 5.87669 -0.0968283 6.51016 0.293855 6.90085L4.92285 11.5298C5.18251 11.7895 5.60351 11.7895 5.86317 11.5298V11.5298Z"
          fill="white"
        />
      </svg>
    </button>
    <!-- Koppel het variabele carousel aan de ol -->
    <ol bind:this={carousel}>
      <!-- Ga de daysinmonth array af en geef de uitkomsten weer als dayofweek en day -->
      {#each daysInMonth as { dayOfWeek, day }}
        <li bind:this={dayOfWeekButton} class="day-of-week-button">
          <!-- als de dag gelijk is aan de nummer van de huidige dag krijgt de button de active class -->
          <a
            data-sveltekit-reload
            href="/?datum={year}-{month + 1}-{day}"
            class:button-active={day === currentDayNumber}
            class:new-week={dayOfWeek === "zondag"}
            class="day-button"
          >
            <!-- Weergeef de dag in een string-->
            <span>{dayOfWeek}</span>
            <!-- Weergeef de dag als een nummer -->
            <span>{day}</span>
          </a>
        </li>
      {/each}
    </ol>
    <button class="navigation-buttons" on:click={scrollRight}>
      <svg
        width="28"
        height="36"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Scroll naar rechts</title>
        <path
          d="M1.13683 0.470161C0.877294 0.729698 0.87715 1.15045 1.13651 1.41016L4.82085 5.09956C5.21092 5.49016 5.2107 6.12295 4.82037 6.51329L1.13713 10.1965C0.877479 10.4562 0.877479 10.8772 1.13713 11.1368V11.1368C1.39667 11.3963 1.81743 11.3965 2.07713 11.1371L6.70574 6.51377C7.09665 6.12331 7.09683 5.48984 6.70615 5.09915L2.07715 0.470162C1.81749 0.210499 1.39649 0.210498 1.13683 0.470161V0.470161Z"
          fill="white"
        />
      </svg>
    </button>
  </section>
</section>

<style>
  .month-overview {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 980px) {
      margin: 2em 18em 0 0;
    }
  }

  h2 {
    font-size: 1.3em;
    margin: 0 auto;
    @media screen and (min-width: 500px) {
      font-size: 1.7em;
    }
  }
  .day-carousel {
    position: relative;
    display: flex;
    width: 80%;
    overflow-x: auto; /* Verberg inhoud die buiten het zicht valt */
    /* margin-left: calc(2rem + 105px); */
    @media screen and (min-width: 960px) {
      font-size: 1.5em;
    }
  }

  ol {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    margin: 0;
    padding: 0;
    position: relative;
  }

  button.navigation-buttons {
    position: relative;
    z-index: 2; /* Zorg dat de knoppen boven de blur-elementen staan */
  }

  .day-carousel::before,
  .day-carousel::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3em; /* Breedte van de blur aan beide kanten */
    pointer-events: none; /* Laat klikken door naar de knoppen */
    z-index: 1; /* Plaats de blur onder de knoppen */
  }

  .day-carousel::before {
    left: 1em; /* Plaats de blur naast de eerste knop */
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ); /* Linker blur */
  }

  .day-carousel::after {
    right: 1em; /* Plaats de blur naast de laatste knop */
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ); /* Rechter blur */
  }

  a,
  .day-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: rgb(239, 239, 239);
    font-family: var(--font-family);
    color: var(--dark);
    padding: 1em;
    font-size: 0.9em;
    cursor: pointer;
    font-weight: bold;
    @media (prefers-reduced-motion: no-preference) {
      transition: 0.2s ease-in;
    }
  }

  .button-active {
    background-color: var(--secondary-color);
    color: var(--light);
    & span {
      color: var(--light);
    }
  }

  .button-active span:first-of-type {
    color: var(--light);
  }

  li .day-button:hover,
  li .day-button:focus {
    background-color: var(--primary-color);
    color: var(--light);
    border-radius: 15px;
    @media (prefers-reduced-motion: no-preference) {
      scale: 0.9;
    }
  }

  .day-button:hover span:first-of-type,
  .day-button:focus span:first-of-type {
    color: var(--light);
  }

  .day-button span:nth-of-type(2) {
    font-size: 1.5em;
  }

  .navigation-buttons {
    background-color: var(--primary-color);
    padding: 0.5em;
  }

  .navigation-buttons:hover,
  .navigation-buttons:focus {
    background-color: var(--hover-secondary);
    @media (prefers-reduced-motion: no-preference) {
      scale: 0.9;
    }
  }

  .navigation-buttons:first-of-type {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  .navigation-buttons:last-of-type {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  .new-week {
    border-right: solid 8px var(--secondary-color);

    @media screen and (min-width: 960px) {
      border-right: solid 10px var(--secondary-color);
    }
  }
</style>
