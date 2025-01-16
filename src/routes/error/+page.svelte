<script>
     import Homelink from '../../lib/homelink/Homelink.svelte';
     import Mainform from '../../lib/mainform/Mainform.svelte';
</script>

<section class="errorpage">

    <div class="errorpage__left"> 
        <Homelink/>
        <h1>403</h1>
        <h2>Laten we dat oplossen</h2>
    </div>

    <div class="errorpage__right">
        <Mainform/>
    </div>

</section>

<style>
    .errorpage {
        padding: 2em 2em;
        gap: 2em;
        display: flex;
        flex-direction: column;
    }

    .errorpage .errorpage__left .errorpage__right {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .errorpage .errorpage__left h1 {
        margin-top: 0.25em;
        font-size: 6em;
        color: var(--secondary-color);
    }

    .errorpage .errorpage__left h2 {
        font-size: 1.5em;
        font-weight: 500;
    }

    .errorpage .errorpage__right {
        display: flex;
        flex-direction: column;
    }

    @media only screen and (min-width: 600px) and (max-width: 960px) {
        .errorpage {
            margin: 0 auto;
            max-width: 520px;
        }
    }
    @media only screen and (min-width: 960px) {
        .errorpage {
            align-items: center;
            justify-content: center;
            flex-direction: row;
            gap: 5em;
        }

        .errorpage h1 {
            font-size: 7em;
        }
    }
</style>