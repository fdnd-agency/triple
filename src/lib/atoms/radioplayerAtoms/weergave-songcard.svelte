<div class="audio__container">
  <div class="audio__card-list">
    <ul class="audio__card-image">
      <li>
        <img
          class="audio__artiesten-foto"
          width="93"
          src="/amy-whine-house.png"
          alt="foto album amy winehouse"
        />
      </li>
    </ul>
    <ul>
      <li class="audio__foto-header">Back to black</li>
      <li class="audio__artiest-naam">Amy winhouse</li>
    </ul>
  </div>
  <div class="audio__card-list">
    <ul class="audio__container-image">
      <li>
        <img
          class="audio__artiesten-foto"
          width="93"
          src="/amy-whine-house.png"
          alt="foto album amy winehouse"
        />
      </li>
    </ul>
    <ul>
      <li class="audio__foto-header">Back to black</li>
      <li class="audio__artiest-naam">Amy winhouse</li>
    </ul>
  </div>
</div>

<style>
  .audio__container {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }

  .audio__card-list {
    height: -webkit-fill-available;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
  }

  .audio__artiesten-foto {
    width: 50px;
    height: 50px;
  }

  .audio__artiest-naam {
    border-bottom: 1px solid var(--grey);
    padding-bottom: 10px;
    color: var(--grey);
  }

  .audio__card-image {
    display: flex;
    flex-direction: row;
  }

  .audio__foto-header {
    width: 170px;
    font-weight: bold;
  }
</style>
