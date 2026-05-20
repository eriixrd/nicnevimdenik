<script lang="ts">
	let activeIndex = $state<number | null>(null);

	const faqs = [
		{
			q: 'Proč to dáváte zadarmo?',
			a: 'Pamatuju si, jak moc mi v začátcích<br class="md:hidden" /> chyběl někdo, komu bych mohl koukat<br class="md:hidden" /> přes rameno. Přesně tohle bych si přál<br class="md:hidden" /> mít, kdybych dnes začínal od nuly -<br class="md:hidden" /> někoho zkušenějšího po svém boku,<br class="md:hidden" /> kdo mi srozumitelně ukáže, jak na trzích<br class="md:hidden" /> hledat příležitosti.'
		},
		{
			q: 'Co se stane po vyplnění<br class="md:hidden" /> údajů?',
			a: 'Ihned vám přijde uvítací email s prvním<br class="md:hidden" /> nahlédnutím do našeho portfolia. Od té<br class="md:hidden" /> chvíle vám budeme pravidelně posílat<br class="md:hidden" /> deníky Nic Nevim, kde rozebíráme naše<br class="md:hidden" /> obchody a analýzy trhu nebo<br class="md:hidden" /> konkrétních zajímavých akcií.'
		},
		{
			q: 'Je to vhodné i pro<br class="md:hidden" /> začátečníky?',
			a: 'Ano. Vše vždycky vysvětlujeme tak,<br class="md:hidden" /> aby tomu rozuměl i člověk, který s<br class="md:hidden" /> investováním teprve začíná - a zároveň<br class="md:hidden" /> abychom předali maximum hodnoty i<br class="md:hidden" /> pro zkušenější investory.'
		},
		{
			q: 'Jaký je rozdíl mezi tímhle<br class="md:hidden" /> a placenou komunitou?',
			a: 'Tento deník slouží k inspiraci a učení -<br class="md:hidden" /> dostáváte ucelenou dávku obsahu 1x<br class="md:hidden" /> týdně, vždy se zpožděním. Placená<br class="md:hidden" /> komunita je pro investory, kteří chtějí<br class="md:hidden" /> být u věci v reálném čase: sledovat<br class="md:hidden" /> každý obchod, jakmile ho děláme, mít<br class="md:hidden" /> přímý kontakt s námi i týmem a přístup<br class="md:hidden" /> ke všemu, co se do mailu nevejde.'
		}
	];

	function toggle(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section class="bg-[#000000] py-20 border-t border-white/5">
	<div
		class="relative flex flex-col items-center justify-center w-full max-w-[800px] mx-auto px-4 text-center"
	>
		<!-- Heading copied size-wise from Hero -->
		<h2 class="z-10 text-[36px] md:text-[40px] text-white font-extrabold leading-tight mb-12">
			Nejčastější dotazy
		</h2>

		<!-- FAQ Accordion List -->
		<div class="z-10 w-full flex flex-col gap-4">
			{#each faqs as faq, i}
				<div
					class="w-full bg-gradient-to-b from-[#191A1D]/70 to-[#0A0A0B]/70 rounded-[20px] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
				>
					<button
						onclick={() => toggle(i)}
						class="w-full px-6 py-6 flex items-center justify-between text-left font-bold text-white text-[18px] leading-snug transition-colors hover:text-[#FFBA00] focus:outline-none"
					>
						<span>{@html faq.q}</span>
						<!-- Spinning rotate plus-to-cross icon -->
						<svg
							class="w-5 h-5 text-white/70 shrink-0 transition-transform duration-300 {activeIndex === i ? 'rotate-[135deg] text-[#FFBA00]' : ''}"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
						</svg>
					</button>

					<!-- Smooth CSS Grid Panel reveal -->
					<div
						class="grid transition-all duration-300 ease-in-out {activeIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}"
					>
						<div class="overflow-hidden">
							<div class="px-6 pb-6 pt-4 text-[15px] text-white leading-relaxed text-left">
								<p>{@html faq.a}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Centered CTA Button -->
		<button
			onclick={() => {
				document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
			}}
			class="group relative px-13 py-3.5 mt-12 bg-[#FFC300] text-[#000000] text-[20px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
		>
			<span class="relative z-10">Přidat se zdarma</span>
			<div
				class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
			></div>
		</button>

		<!-- Footer Text -->
		<p class="mt-5 text-white/40 text-[14px] font-normal text-center leading-normal">
			Žádný spam. Kdykoliv se můžete<br />
			odhlásit jedním kliknutím.
		</p>
	</div>
</section>
