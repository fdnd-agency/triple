<script>
  // components imports
  import ProgramCard from "$lib/molecules/programCard.svelte";
  import ScheduleTimes from "$lib/atoms/schedule-times.svelte";
  import MarkdownIt from "markdown-it";
  const md = new MarkdownIt();

  // General imports
  import { onMount } from "svelte";

  // data import
  export let data;

  function getImageSource(show) {
    const programShow = show.mh_shows_id.show;

    // Pakt de eerste user op van de show
    const firstUser =
      programShow &&
      programShow.users &&
      programShow.users[0] &&
      programShow.users[0].mh_users_id &&
      programShow.users[0].mh_users_id.cover;

    // Get the thumbnail of the show

    const thumbnail =
      programShow && programShow.thumbnail && programShow.thumbnail.id;

    // If the cover doesn't exist, use the thumbnail of the show
    // If there is no thumbail or cover use an empty string

    return {
      cover: firstUser ? `/${firstUser}` : thumbnail ? `/${thumbnail}` : "",
      thumbnail: thumbnail ? `/${thumbnail}` : "",
    };
  }

  // Helper function to get the show time
  function getShowTime(show) {
    const showId = show.mh_shows_id;
    // Recieves the times, if there is no time, use 00:00
    const from = showId && showId.from ? showId.from : "00:00";
    const until = showId && showId.until ? showId.until : "00:00";

    // Slices the time of 04:00:00 to 04:00
    const formattedFrom = from.slice(0, 5);
    const formattedUntil = until.slice(0, 5);

    return `${formattedFrom} - ${formattedUntil}`;
  }

  // Groups the radio stations
  function groupByRadioStation(shows) {
    const radioStation = {};

    for (const show of shows) {
      const showId = show.mh_shows_id;

      const programShow = showId && showId.show;
      const station = programShow && programShow.radiostation;
      const stationName = station && station.name;
      const stationImage = station && station.logo && station.logo.id;

      if (!radioStation[stationName]) {
        radioStation[stationName] = [];
      }

      radioStation[stationName].push(show);
    }

    // Sort each station's shows by 'from' time
    for (const stationName in radioStation) {
      radioStation[stationName].sort((a, b) => {
        const fromA = a.mh_shows_id?.from || "00:00";
        const fromB = b.mh_shows_id?.from || "00:00";
        return fromA.localeCompare(fromB);
      });
    }

    return radioStation;
  }

  // Group the shows for each radio station (this is the call)
  const groupedShows = groupByRadioStation(
    (data && data.data && data.data[0] && data.data[0].shows) || [],
  );

  const updateScheduleLine = () => {
    const date = new Date();
    const minutes = (100 / 60) * date.getMinutes(); // Convert minutes to time units
    const timeValue = date.getHours() * 100 + minutes; // Current time in "HHMM" format

    const totalColumns = Math.floor(2359 / 2.02); // Total number of grid columns
    const gridPosition = (timeValue / 2359) * totalColumns; // Position in the grid

    const line = document.querySelector(".schedule-line");
    if (line) {
      line.style.setProperty("--timepassed", `${gridPosition * 3}px`); // Adjust to match column width (3px)
      line.style.display = "block";
    }
  };

  onMount(() => {
    updateScheduleLine();
    setInterval(updateScheduleLine, 1000);
  });
</script>

<div class="schedule">
  <div class="schedule-line"></div>
  <ScheduleTimes />
  {#if Object.keys(groupedShows).length > 0}
    {#each Object.entries(groupedShows) as [stationName, stationShows]}
      <div class="schedule__radio-station-row">
        <div class="schedule__station-logo">
          {#if stationShows.length > 0}
            <img
              src={`https://fdnd-agency.directus.app/assets/${stationShows[0].mh_shows_id?.show?.radiostation?.logo?.id}`}
              alt={stationName}
            />
          {/if}
        </div>

        <div class="schedule__station-shows">
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
        </div>
      </div>
    {/each}
  {:else}
    <p>No programs available at this time</p>
  {/if}
</div>

<style>
  .schedule {
    display: grid;
    grid-gap: 1em;
    overflow: scroll;
    padding: 1rem;
    position: relative;
    margin-bottom: 11rem;

    @media (max-width: 20em) {
    }

    @media (min-width: 40em) {
      padding: 2rem;
    }
  }

  .schedule-line {
    --timepassed: 0px;
    background-color: #0091ff;
    border-radius: 999999px;
    display: none;
    height: calc(100% - 3rem);
    left: calc(150px + var(--timepassed));
    position: absolute;
    top: 2.8rem;
    width: 2px;

    @media (min-width: 40em) {
      height: calc(100% - 5rem);
      top: 3.5rem;
    }

    @media (prefers-reduced-motion) {
      display: none !important;
    }
  }

  .schedule-line::after {
    background: #0091ff;
    border-radius: 50%;
    content: "";
    height: 10px;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    width: 10px;
  }

  .schedule__radio-station-row {
    align-items: center;
    display: flex;
  }

  .schedule__station-shows {
    display: grid;
    grid-template-columns: repeat(calc(2359 / 2.02), 3px);
  }

  img {
    height: 100px;
    margin-right: 1rem;
    padding: 20px;
    width: 100px;
  }
</style>
