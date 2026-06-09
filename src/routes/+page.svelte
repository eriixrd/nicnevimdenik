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
	<!-- Clarity -->
	<script type="text/javascript">
		(function (c, l, a, r, i, t, y) {
			c[a] =
				c[a] ||
				function () {
					(c[a].q = c[a].q || []).push(arguments);
				};
			t = l.createElement(r);
			t.async = 1;
			t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0];
			y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'w1qdun2xm2');
	</script>
</svelte:head>

<div class="relative">
	<Hero />
	<Help />
	<Knowhow />
	<Keys />
	<Look />
	<Faq />
</div>
