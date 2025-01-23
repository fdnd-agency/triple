<script>
  import { onMount } from "svelte";
  import {
    loadMonthDays,
    monthNames,
  } from "$lib/scripts/Weekselectie/GetDates.js";

  function getCurrentDateInfo() {
    const dateAndTime = new Date();
    return {
      year: dateAndTime.getFullYear(),
      month: dateAndTime.getMonth(),
      day: dateAndTime.getDate(),
    };
  }

  let lastNumbers;
  export let clickedDay;

  const { year, month, day: currentDayNumber } = getCurrentDateInfo();

  // get last index numbers
  if (clickedDay) {
    lastNumbers = clickedDay.match(/\d+$/)[0];
    lastNumbers = Number(lastNumbers - 1);
  } else lastNumbers = currentDayNumber -1;

  // Scroll left and right functions
  const scrollLeft = () =>
    carousel?.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () =>
    carousel?.scrollBy({ left: 200, behavior: "smooth" });

  let showCurrentMonth = monthNames[month];
  let daysInMonth = loadMonthDays(year, month);
  let dayOfWeekA;
  let carousel;
  let isJsLoaded = false;

  // Wait untill the DOM content is loaded. And excecute all functions on load.
  onMount(() => {
    isJsLoaded = true;
    // Calculate how many width in pixels 1 button has (I use getBounding because the values will depent on the screen resolution)
    let aSize = dayOfWeekA?.getBoundingClientRect().width;
    // Calculate how var you have to scroll, to reach te beginning of the button I multiply the size of the button in px with the curent number of the day (the number of buttons) and I subtract the size of one button from the outcome, otherwise you will reach the end of the button instead of the beginning.
    let scrollLocation = aSize * lastNumbers || currentDayNumber - aSize;
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
  <section class="day-carousel" class:is-js-loaded-day-carousel={isJsLoaded}>
    {#if isJsLoaded}
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
    {/if}
    <!-- Connect the variable carousel to the ol -->
    <ol bind:this={carousel} class:is-js-loaded-day-ol={isJsLoaded}>
      <!-- Go trough daysinmonth array and recieve the output as dayofweek and day -->
      {#each daysInMonth as { dayOfWeek, day }, index}
        <li bind:this={dayOfWeekA} class="day-of-week-a">
          <!-- if the dag is the same as the current day, get an active class -->
          <a
            class:a-active={index === lastNumbers ||
              (index === currentDayNumber && currentDayNumber == lastNumbers)}
            class:current-day={day === currentDayNumber &&
              currentDayNumber === lastNumbers}
            data-sveltekit-reload
            href="/?datum={year}-{month + 1}-{day}"
            class:new-week={dayOfWeek === "zondag"}
            class="day-a"
          >
            {#if day === currentDayNumber}
              <span>vandaag</span>
            {:else}
              <span>{dayOfWeek}</span>
            {/if}
            <!-- Show the day of the week as a string -->
            <!-- Show the day as a nummer -->
            <span>{day}</span>
          </a>
        </li>
      {/each}
    </ol>
    {#if isJsLoaded}
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
    {/if}
  </section>
</section>

<style>
  .month-overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    @media (min-width: 980px) {
      margin-left: 5em;
    }
  }

  h2 {
    font-size: 1.4rem;
    text-transform: capitalize;
    @media (min-width: 600px) {
      font-size: 1.7rem;
    }
    @media (min-width: 960px) {
      font-size: 1.8rem;
    }
  }

  .day-carousel {
    position: relative;
    padding: 0;
    display: flex;
    width: 100%;
    overflow-x: scroll; 
    @media (min-width: 960px) {
      width: 80%;
      font-size: 1.5em;
    }
  }

  ::-webkit-scrollbar {
  -webkit-appearance: none;
}
  ::-webkit-scrollbar-thumb {
  width: 30%;;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  @media (min-width: 960px) {
    width: 20%;

  }

  @media (min-width: 600px) {
    width: 10%;
  }
}

  ol {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .navigation-buttons {
    position: relative;
    z-index: 2;
  }

  span {
    display: flex;
    justify-content: center;
    width: 3em;
  }

  .day-of-week-a,
  .day-of-week-a span,
  .day-of-week-a a,
  .day-of-week-a a span {
    margin: 0;
    padding: 0;
  }

  .day-carousel::before,
  .day-carousel::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3em;
    pointer-events: none;
    z-index: 1;
  }

  .day-carousel::before {
    left: 0; /* Add blur next to the first button */
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ); /* Left blur */
  }

  .day-carousel::after {
    right: 0; /* Add blur next to the last button */
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    ); /* Right blur */
  }

  .is-js-loaded-day-carousel.day-carousel::after {
    right: 2em; /* Add blur next to the last button */
  }

  .is-js-loaded-day-carousel.day-carousel::before {
    left: 2em; /* Add blur next to the first button */
  }

  a,
  button,
  .day-a {
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
    font-size: 1rem;
    cursor: pointer;
    width: 6em;
    height: 4em;
    @media (prefers-reduced-motion: no-preference) {
      transition: 0.2s ease-in;
    }
    & span:nth-of-type(2) {
      margin-top: 0.2em;
    }
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
    @media (min-width: 960px) {
      font-size: 1.4rem;
    }
  }

  .a-active {
    background-color: var(--secondary-color);
    color: var(--light);
  }

  .a-active span:first-of-type {
    color: var(--light);
  }

  .current-day {
    border: solid 5px var(--primary-color);
  }

  .a-active,
  .current-day {
    border-radius: 10px;
  }

  li .day-a:hover,
  li .day-a:focus {
    background-color: var(--primary-color);
    color: var(--light);
    border-radius: 15px;
    @media (prefers-reduced-motion: no-preference) {
      scale: 0.9;
    }
  }

  .day-a:hover span:first-of-type,
  .day-a:focus span:first-of-type {
    color: var(--light);
  }

  .day-a span:nth-of-type(2) {
    font-weight: bold;
    font-size: 1.1rem;
    @media (min-width: 960px) {
      font-size: 1.3rem;
    }

    @media (min-width: 600px) {
      font-size: 1.6rem;
    }
  }

  .navigation-buttons {
    background-color: var(--primary-color);
    padding: 0.5em;
  }

  .navigation-buttons:hover,
  .navigation-buttons:focus-visible {
    background-color: var(--hover-secondary);
    @media (prefers-reduced-motion: no-preference) {
      scale: 0.9;
    }
  }

  .navigation-buttons:first-of-type {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .navigation-buttons:last-of-type {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .new-week {
    border-right: solid 8px var(--secondary-color);

    @media (min-width: 960px) {
      border-right: solid 10px var(--secondary-color);
    }
  }
</style>
