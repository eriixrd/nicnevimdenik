<script lang="ts">
	let graphContainer: HTMLDivElement | null = $state(null);
	let scrollThumbProgress = $state(0);
	let isDraggingThumb = $state(false);

	let startX = 0;
	let scrollLeft = 0;

	function handleScroll(e: Event) {
		const target = e.target as HTMLDivElement;
		const maxScroll = target.scrollWidth - target.clientWidth;
		if (maxScroll > 0) {
			scrollThumbProgress = target.scrollLeft / maxScroll;
		}
	}

	function startThumbDrag(e: MouseEvent | TouchEvent) {
		if (!graphContainer) return;
		isDraggingThumb = true;
		if ('touches' in e) {
			startX = e.touches[0].pageX;
		} else {
			startX = e.pageX;
			window.addEventListener('mousemove', handleThumbDragMove);
			window.addEventListener('mouseup', stopThumbDrag);
		}
		scrollLeft = graphContainer.scrollLeft;
	}

	function handleThumbDrag(e: TouchEvent) {
		if (!isDraggingThumb || !graphContainer) return;
		const x = e.touches[0].pageX;
		const walk = (x - startX) * 3;
		graphContainer.scrollLeft = scrollLeft + walk;
	}

	function handleThumbDragMove(e: MouseEvent) {
		if (!isDraggingThumb || !graphContainer) return;
		const x = e.pageX;
		const walk = (x - startX) * 3;
		graphContainer.scrollLeft = scrollLeft + walk;
	}

	function stopThumbDrag() {
		isDraggingThumb = false;
		window.removeEventListener('mousemove', handleThumbDragMove);
		window.removeEventListener('mouseup', stopThumbDrag);
	}

	function scrollGraph(direction: 'left' | 'right') {
		if (!graphContainer) return;
		const scrollAmount = 250;
		if (direction === 'left') {
			graphContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		} else {
			graphContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	}
</script>

<section class="bg-[#000000] py-20">
	<div class="relative flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto">
		<div class="mb-2 px-2 py-1 bg-white rounded-[10px] flex items-center gap-1 shadow-lg">
			<span class="text-black text-[15px] md:text-[16px] font-bold"> Hodnocení: 4,9 </span>
			<div class="flex items-center">
				{#each Array(5) as _}
					<svg class="w-4.5 h-4.5 text-[#FFBA00] fill-current" viewBox="0 0 20 20">
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
				{/each}
			</div>
			<span class="text-black text-[15px] md:text-[16px] font-semibold"> (457) </span>
		</div>

		<h1
			class="z-10 px-4 text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
		>
			Chci vám pomoct
			<br />
			dělat
			<span class="text-[#FFBA00]">lepší investiční</span>
			<br />
			<span class="text-[#FFBA00]">rozhodnutí</span>
		</h1>

		<p
			class="z-10 mt-4 px-4 max-w-[950px] text-center text-[20px] md:text-[24px] text-nowrap text-white font-medium leading-[160%]"
		>
			Nebudu vám slibovat rychlý zisk. <br />
			Ukážu vám, jak nad trhem přemýšlí <br />
			člověk, který se obchodováním <br />
			reálně živí - a vy se na trh začnete <br />
			dívat
			<span
				class="bg-gradient-to-r from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-semibold"
				>úplně jinýma očima</span
			>.
		</p>

		<div class="relative z-10 mx-auto mt-10 px-4 w-full md:max-w-[880px]">
			<div
				class="relative rounded-[20px] overflow-hidden shadow-2xl p-px"
				style="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); -webkit-box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); will-change: transform; transform: translate3d(0, 0, 0);"
			>
				<img
					src="/assets/addpics/Group_64.png"
					alt="Trading Platform Preview"
					class="w-full h-auto rounded-[20px] select-none pointer-events-none"
					draggable="false"
					loading="lazy"
				/>
			</div>

			<div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-6">
				<!-- Card 1 -->
				<div
					class="p-4 md:p-8 rounded-[14px] md:rounded-[20px] flex flex-col justify-between gap-3 md:gap-4"
					style="background: linear-gradient(135deg, rgba(15, 46, 16, 0.5) 0%, rgba(33, 101, 36, 0.5) 50%, rgba(15, 46, 16, 0.5) 100%);"
				>
					<img
						src="/assets/icons/Kolac.svg"
						alt="Portfolio Icon"
						class="w-7 h-7 md:w-10 md:h-10 select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3
						class="text-white text-[16px] md:text-[24px] font-bold leading-[1.4] md:leading-tight"
					>
						Nahlédnete do <br /> mého portfolia
					</h3>
				</div>

				<!-- Card 2 -->
				<div
					class="p-4 md:p-8 rounded-[14px] md:rounded-[20px] flex flex-col justify-between gap-3 md:gap-4"
					style="background: linear-gradient(135deg, rgba(15, 46, 16, 0.5) 0%, rgba(33, 101, 36, 0.5) 50%, rgba(15, 46, 16, 0.5) 100%);"
				>
					<img
						src="/assets/icons/globe.svg"
						alt="Globe Icon"
						class="w-7 h-7 md:w-10 md:h-10 select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3
						class="text-white text-[16px] md:text-[24px] font-bold leading-[1.4] md:leading-tight"
					>
						Získáte náš <br /> pohled na trhy
					</h3>
				</div>

				<!-- Card 3 -->
				<div
					class="col-span-2 md:col-span-1 p-4 md:p-8 rounded-[14px] md:rounded-[20px] flex items-center md:flex-col md:justify-between md:items-start gap-4"
					style="background: linear-gradient(135deg, rgba(15, 46, 16, 0.5) 0%, rgba(33, 101, 36, 0.5) 50%, rgba(15, 46, 16, 0.5) 100%);"
				>
					<img
						src="/assets/icons/graphlines.svg"
						alt="Trades Icon"
						class="w-8 h-8 md:w-10 md:h-10 shrink-0 select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3
						class="text-white text-[16px] md:text-[24px] font-bold leading-[1.2] md:leading-tight"
					>
						Učíte se z <br class="hidden md:inline" /> reálných obchodů
					</h3>
				</div>
			</div>
		</div>

		<div class="z-10 relative w-full mt-6 flex flex-col items-center">
			<!-- Graph Glow -->
			<div
				class="absolute top-1/2 left-1/2 w-[350px] h-[250px] md:w-[700px] md:h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#AFAAFF]/15 blur-[130px] pointer-events-none z-0"
				style="filter: blur(130px); -webkit-filter: blur(130px); will-change: filter, transform;"
			></div>

			<p
				class="relative z-10 text-white text-[18px] md:text-[26px] font-bold mb-4 mt-15 text-center"
			>
				Zde jsou výsledky <br />naší strategie:
			</p>

			<div
				bind:this={graphContainer}
				onscroll={handleScroll}
				class="relative z-10 w-full overflow-x-auto no-scrollbar scroll-smooth"
			>
				<div
					class="flex justify-start md:justify-center w-max md:w-full mx-auto px-4 md:max-w-[880px]"
				>
					<img
						src="/assets/addpics/graf.png"
						alt="Strategy Growth Graph"
						class="w-[610px] h-auto md:w-full rounded-[20px] shadow-2xl object-cover select-none pointer-events-none"
						style="image-rendering: -webkit-optimize-contrast;"
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Mobile Navigation Buttons (Mobile only) -->
			<div class="md:hidden flex justify-center gap-3 mt-4 mb-4">
				<!-- Left Arrow Button -->
				<button
					onclick={() => scrollGraph('left')}
					class="w-11 h-auto active:scale-95 flex items-center justify-center transition-all"
					aria-label="Scroll left"
				>
					<img
						src="/assets/addpics/arrow_11848700 6.png"
						alt="Scroll Left"
						class="w-11 h-auto object-contain select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
				</button>

				<!-- Right Arrow Button -->
				<button
					onclick={() => scrollGraph('right')}
					class="w-11 h-auto active:scale-95 flex items-center justify-center transition-all"
					aria-label="Scroll right"
				>
					<img
						src="/assets/addpics/arrow_11848700 6.png"
						alt="Scroll Right"
						class="w-11 h-auto object-contain rotate-180 select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
				</button>
			</div>

			<!-- Strategy Overview Cards (Desktop: side-by-side, Mobile: stacked) -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 px-4 w-full md:max-w-[1080px] z-10">
				<!-- Card 1 (Diamond) -->
				<div
					class="p-6 rounded-[20px] flex flex-col gap-4 border border-white/5 transition-all duration-300 hover:border-white/10"
					style="background: linear-gradient(135deg, rgba(17, 17, 22, 0.7) 0%, rgba(28, 35, 48, 0.7) 50%, rgba(17, 17, 22, 0.7) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"
				>
					<img
						src="/assets/Vector.svg"
						alt="Diamond Icon"
						class="w-[27px] h-[21px] object-contain select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3 class="text-white text-[20px] md:text-[22px] font-bold leading-[1.3] tracking-tight">
						Cílem naší strategie je<br />dlouhodobé zhodnocení v<br />řádu
						<span class="text-[#D3C295]">20-30% p.a.</span>
					</h3>
					<p class="text-white text-[15px] font-medium leading-[1.6]">
						Výsledky z minulých let ukazují, že<br />tato strategie funguje, nicméně i přes<br />to
						dosažení našeho cíle nelze<br />garantovat. V denících vám ukážeme<br />konkrétní
						obchody a celý myšlenkový<br />proces, abyste se mohli inspirovat a<br />dělat
						<span class="text-[#D3C295]">lepší investiční rozhodnutí</span>.
					</p>
				</div>

				<!-- Card 2 (Bell) -->
				<div
					class="p-6 rounded-[20px] flex flex-col gap-4 border border-white/5 transition-all duration-300 hover:border-white/10"
					style="background: linear-gradient(135deg, rgba(17, 17, 22, 0.7) 0%, rgba(28, 35, 48, 0.7) 50%, rgba(17, 17, 22, 0.7) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"
				>
					<img
						src="/assets/Vector-1.svg"
						alt="Bell Icon"
						class="w-[20px] h-[21px] object-contain select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3 class="text-white text-[20px] md:text-[22px] font-bold leading-[1.3] tracking-tight">
						Naše obchody sleduje<br />živě <span class="text-[#D3C295]">přes 450 investorů</span><br
						/>v placené komunitě
					</h3>
					<p class="text-white text-[15px] font-medium leading-[1.6]">
						Uvnitř naší Discord komunity sdílím<br />každý nový obchod –
						<span class="text-[#D3C295]">co nakupujeme,<br />proč a kdy prodáváme</span>. Naše
						výsledky<br />si tam může kdokoliv zpětně dohledat.<br />V tomto deníku můžete
						nahlédnout<br />pod pokličku zdarma a učit se přímo z<br />vybraných nákupů a zpětně i z
						našeho<br />portfolia.
					</p>
				</div>

				<!-- Card 3 (Shield) -->
				<div
					class="p-6 rounded-[20px] flex flex-col gap-4 border border-white/5 transition-all duration-300 hover:border-white/10"
					style="background: linear-gradient(135deg, rgba(17, 17, 22, 0.7) 0%, rgba(28, 35, 48, 0.7) 50%, rgba(17, 17, 22, 0.7) 100%); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"
				>
					<img
						src="/assets/Vector-2.svg"
						alt="Shield Icon"
						class="w-[21px] h-[24px] object-contain select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3 class="text-white text-[20px] md:text-[22px] font-bold leading-[1.3] tracking-tight">
						Podílíme se na investicích<br />v řádech
						<span class="text-[#D3C295]">stovek milionů<br />korun</span>
					</h3>
					<p class="text-white text-[15px] font-medium leading-[1.6]">
						Nejsme žádní teoretici - spravujeme<br />kapitál pro kvalifikované investory a<br
						/><span class="text-[#D3C295]">uzavíráme stovky obchodů ročně</span>. To,<br />co vás
						učíme, sami aplikujeme každý<br />den s reálnými penězi na akciových<br />trzích.
					</p>
				</div>
			</div>

			<!-- CTA Badge at the end -->
			<div
				class="z-10 px-4 py-1.5 mt-15 bg-gradient-to-r from-[#4B1F7A] via-[#8724C9] to-[#4B1F7A] rounded-[10px] shadow-lg"
			>
				<span class="text-white text-[15px] font-regular tracking-wide"> A to nejlepší? </span>
			</div>
			<p
				class="z-10 relative mt-4 text-center text-[18px] md:text-[22px] text-white font-medium leading-[1.6]"
			>
				Pamatuju si, jak moc mi v začátcích<br />
				chyběl někdo, komu bych mohl koukat<br />
				přes rameno. Proto vám teď chci dát<br />
				tuto <span class="text-[#D3C295] font-bold">možnost inspirace zdarma</span>.
			</p>

			<!-- MMMM1 1 Image Wrapper -->
			<div class="relative z-10 mx-auto mt-4 px-4 w-full md:max-w-[880px]">
				<div
					class="relative rounded-[20px] overflow-hidden shadow-2xl p-px"
					style="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); -webkit-box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); will-change: transform; transform: translate3d(0, 0, 0);"
				>
					<img
						src="/assets/addpics/MMMM1 1.png"
						alt="Portfolio Review Chart"
						class="w-full h-auto rounded-[20px] select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>

			<button
				onclick={() => {
					document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
				}}
				class="group relative px-13 py-3.5 mt-10 bg-[#FFC300] text-[#000000] text-[20px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
			>
				<span class="relative z-10">Přidat se zdarma</span>
				<div
					class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
				></div>
			</button>
		</div>
	</div>
</section>
