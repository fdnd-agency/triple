<!-- tab menu -->
<nav class="tabs">
  <ul class="tabs__list">
    <li class="tabs__link">
      <a alt="programmering" href="/">PROGRAMMERING</a>
    </li>
    <li class="tabs__link"><a alt="dj's" href="/">DJ's</a></li>
    <li class="tabs__link"><a alt="playlist" href="/">PLAYLIST</a></li>
    <li class="tabs__link"><a alt="frequenties" href="/">FREQUENTIES</a></li>
  </ul>
  <hr />
</nav>

<style>
  .tabs__list {
    display: flex;
    flex-direction: row;
    padding: calc(1rem + 0.2rem) 1rem;
    gap: 2rem;
    overflow: auto;
    font-family: "BrutalType";
    font-weight: 900;
    @media only screen and (min-width: 960px) {
      justify-content: start;
    }
  }

  hr {
    height: 3px;
    background-color: var(--grey);
  }

  .tabs__link {
    list-style-type: none;
  }

  a {
    color: var(--grey);
    cursor: pointer;
  }

  .tabs__link a:hover {
    color: var(--secondary-color);
    border-bottom: solid 0.2rem var(--secondary-color);
    transition: 0.2s ease-in;
  }
</style>
