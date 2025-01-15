<div>

    <a class="homelink" href="/" aria-label="Ga terug naar de homepagina">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16" aria-hidden="true">
        <!-- Aria hidden true, geef ik mee zodat de svg puur decoratief is -->
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
      </svg> 
    Naar home </a>

</div>

<style>
  .homelink {
    font-size: 1.4em;
    color: var(--dark);
    font-weight: 600;
    font-family: var(--font-family);
    transition: ease-in 0.2s;
  }

  .homelink:hover {
    transition: ease-out 0.2s;
    color: var(--secondary-color);
    cursor: pointer;
  }

  .homelink svg {
    margin-bottom: -6px;
    color: var(--secondary-color);
  }

  /* toegankelijkheid animaties */
  @media (prefers-reduced-motion: reduce) {
    .homelink, 
    svg {
      transition: none;
    }
  } 

  /* toegankelijkheid Kleuren */
  @media (prefers-contrast: more) {
    svg {
      color: var(--dark);
    }
  }
</style>