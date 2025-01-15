<script>
  import Slideinmenu from "$lib/molecules/Slideinmenu.svelte";
  import Tabmenu from "$lib/molecules/tabmenu.svelte";
</script>

<nav>
  <Slideinmenu />
  <Tabmenu />
</nav>

<style>
  @media only screen and (min-width: 960px) {
    nav {
      display: none;
    }
  }
</style>
