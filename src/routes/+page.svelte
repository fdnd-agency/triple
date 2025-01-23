<script>
  import Tabs from "../lib/molecules/tabs.svelte";
  import Schedule from "../lib/molecules/schedule.svelte";
  import WeekSelectie from "../lib/molecules/WeekSelectie.svelte";
  import Mediaplayer from "../lib/media-player/Mediaplayer.svelte";
  import Footer from "../lib/organism/Footer.svelte";

  export let data;
  const clickedDay = data.clickedDay
</script>

<main>
  <Mediaplayer class="" />

  <div class="content">
    <Tabs class="tabs" />

    <WeekSelectie class="weekselectie" {clickedDay}/>
  
    <Schedule class="schedule" {data} />

    <Footer />
  </div>
</main>

<style>
  main {
    display: flex;
    width: calc(100% - 300px);
    @media (max-width: 960px) {
      width: 100%;
    }
  }

  .content {
   
    width: 100%;
  
  }

  .week-selectie {
    display: flex;
    
    width: 1%;
  }

  
</style>
