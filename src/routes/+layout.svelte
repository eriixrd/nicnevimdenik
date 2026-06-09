<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Footer from '../components/layout/footer.svelte';
	import { Toaster } from 'svelte-sonner';
	import Cookie from '../components/layout/cookie.svelte';

	onMount(() => {});
</script>

<svelte:head>
	<title>Nic Nevim | Deník zdarma</title>
	<meta
		name="description"
		content="Získejte pravidelný investiční deník Nic Nevim zdarma. Nahlédněte do reálného portfolia zkušených obchodníků, sledujte jejich analýzy trhu a dělejte lepší investiční rozhodnutí."
	/>
</svelte:head>

<Toaster richColors position="top-right" />
<Cookie />

<div
	class="min-h-screen bg-bg-dark text-slate-200 flex flex-col w-full max-w-full overflow-x-hidden"
>
	<main class="flex-1">
		<slot />
	</main>

	<Footer />
</div>

<style>
	:global(html),
	:global(body) {
		max-width: 100%;
		overflow-x: hidden;
	}
</style>
