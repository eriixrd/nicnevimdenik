<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Footer from '../components/layout/footer.svelte';
  import { Toaster } from 'svelte-sonner';

  import { page } from '$app/stores';

  onMount(() => {
    // Initial animations or theme setup
  });
</script>

<svelte:head>
  <title>Svelte Premium Starter — Modern Web Excellence</title>
  <meta name="description" content="A premium SvelteKit starter kit with modern design, glassmorphism, and high-performance components." />
</svelte:head>

<Toaster richColors position="top-right" />

<div class="min-h-screen bg-bg-dark text-slate-200 flex flex-col">
  <main class="flex-1">
    <slot />
  </main>

  <Footer />
</div>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>
