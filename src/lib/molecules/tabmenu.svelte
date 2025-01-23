<script>
  import Tabmenu_link from "$lib/atoms/tabmenu_link.svelte";
  import Slideinmenu from "$lib/molecules/slideinmenu.svelte";

  let menuVisible = false;

  function toggleMenu() {
    menuVisible = !menuVisible;
  }
</script>

<ul>
  <li><Tabmenu_link label="home" onclick={() => {
    if (menuVisible) toggleMenu();
  }}  href="#" /></li>
  <li><Tabmenu_link label="ontdek" /></li>
  <li><Tabmenu_link label="radio" /></li>
  <li><Tabmenu_link label="meer" onclick={toggleMenu} href="#" /></li>
</ul>

<Slideinmenu {menuVisible} />

<style>
  li {
    width: 25%;
  }
  ul {
    border-top: 1px solid #ededed;
    background-color: var(--light);
    width: 100%;
    padding: 1em 0em;
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 99;
    display: none;
    max-height: 90px;
    height: 90px;
  }

  @media only screen and (max-width: 960px) {
    ul {
      display: flex;
    }
  }
</style>
