<script>
  import Slideinmenu_link from "$lib/atoms/slideinmenu_link.svelte";
  export let menuVisible = false; // Prop to control visibility
</script>

<div class="nav-container" class:visible={menuVisible}>
  <nav>
    <Slideinmenu_link
      label="Frequenties"
      sublabel="De FM frequenties van Radio Veronica"
    />
    <Slideinmenu_link
      label="Programma Overzicht"
      sublabel="Alle programma's van radio Veronica"
    />
    <Slideinmenu_link
      label="DJ Overzicht"
      sublabel="Alle DJ's van Radio Veronica"
    />
    <Slideinmenu_link
      label="Privacyverklaring"
      sublabel="Informatie over je gegevens"
    />
    <Slideinmenu_link
      label="Gebruikersvoorwaarden"
      sublabel="De algemene voorwaarden"
    />
    <Slideinmenu_link
      label="Cookieverklaring"
      sublabel="Overzicht van gebruikte cookies"
    />
    <Slideinmenu_link
      label="Cookie voorkeuren"
      sublabel="Bekijk de voorkeuren"
    />
  </nav>
</div>

<style>
  .nav-container {
    display: none;
    background-color: var(--light);
    position: absolute;
    flex-direction: column;
    overflow: hidden;
    z-index: 90;
    width: 100%;
    height: 100%;
    top: 69.3px;
  }

  .nav-container nav {
    height: 100%;
  }

  .visible {
    display: flex; /* Ensure the menu becomes visible */
    right: 0; /* Slide into view */
    transition: right 0.3s ease-out;
  }
</style>
