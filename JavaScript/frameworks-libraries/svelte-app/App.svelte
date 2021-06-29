<script>
  import Form from "./Form";
  import { Title } from "./styles";
</script>

<style>
  :global(body) {
    --bg: #ffe9c5;
    --color: #e54b00;
    --color-dark: #512613;

    background-color: var(--bg);
    color: var(--color);
    font-family: sans-serif;
    margin: 0;
  }
</style>

<main>
	<h2 class="{Title}">Películas</h2>
  <Form />
</main>