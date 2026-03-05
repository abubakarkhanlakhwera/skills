<script lang="ts">
  // Data loaded server-side via +page.server.ts load function
  export let data: { message: string };
</script>

<main>
  <p>{data.message}</p>
</main>
