<script lang="ts">
  import Hero from '../components/landingpage/hero.svelte';
  import Help from '../components/landingpage/help.svelte';
  import Knowhow from '../components/landingpage/knowhow.svelte';
  import Keys from '../components/landingpage/keys.svelte';
  import Look from '../components/landingpage/look.svelte';
  import Faq from '../components/landingpage/faq.svelte';
  import { loadTranslations } from '../translations/config/index';

  // Ensure translations are loaded for the landing page
  loadTranslations('en', '/');
</script>

<svelte:head>
  <title>Nic Nevim | Deník zdarma</title>
</svelte:head>

<div class="relative">
  <Hero />
  <Help />
  <Knowhow />
  <Keys />
  <Look />
  <Faq />
</div>