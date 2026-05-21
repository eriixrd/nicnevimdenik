<script lang="ts">
</script>

<svelte:head>
	<link rel="preconnect" href="https://player.vimeo.com">
	<script src="https://player.vimeo.com/api/player.js"></script>
	<link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet" />
</svelte:head>

<section class="bg-[#0C0914] pt-6 pb-15">
	<div class="relative flex flex-col items-center justify-center w-full max-w-full">
		<img decoding="async"
			src="/assets/addpics/logo.png"
			alt="Logo"
			class="z-10 h-[80px] w-auto select-none pointer-events-none"
			draggable="false"
			fetchpriority="high"
			style="max-width:160px; image-rendering: -webkit-optimize-contrast;"
		/>

		<div
			class="z-10 px-4 py-1.5 bg-gradient-to-r from-[#4B1F7A] via-[#8724C9] to-[#4B1F7A] rounded-[10px] shadow-lg"
		>
			<span class="text-white text-[15px] font-regular tracking-wide">
				Nic Nevim deník zdarma
			</span>
		</div>

		<h1
			class="z-10 mt-6 max-w-[950px] px-4 text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
		>
			Nahlédněte <span class="font-['Playball'] text-[#FFBA00] font-normal">do našeho</span>
			<br />
			<span class="font-['Playball'] text-[#FFBA00] font-normal mr-1.5">portfolia</span> a sledujte,
			jak
			<br />
			aktuálně přemýšlíme
			<br />
			nad trhem
		</h1>

		<p
			class="z-10 mt-2 max-w-[950px] px-4 text-center text-[20px] md:text-[24px] text-white font-medium leading-[160%]"
		>
			Sledujte naše myšlenkové procesy, jaké <br class="hidden md:block" />
			máme plány a kde právě teď na trzích <br class="hidden md:block" />
			vidíme
			<span
				class="bg-gradient-to-r from-[#C9A44A] via-[#D3C295] to-[#C9A44A] bg-clip-text text-transparent font-semibold"
				>reálné příležitosti</span
			>
			v pravidelných <br class="hidden md:block" />
			e-mailových lekcích.
		</p>

		<img decoding="async"
			src="/assets/addpics/formreview.png"
			alt="Form Review"
			class="z-10 w-[260px] md:w-[280px] h-auto mt-4 select-none pointer-events-none"
			draggable="false"
			loading="lazy"
		/>

		<div class="relative z-10 mx-auto mt-5 px-4 w-full md:max-w-[880px]">
			<div
				class="relative rounded-[20px] overflow-hidden shadow-2xl aspect-video p-px"
				style="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); -webkit-box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); will-change: transform; transform: translate3d(0, 0, 0);"
			>
				<iframe
					src="https://player.vimeo.com/video/1193758413?h=5e3bc3c930&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1"
					frameborder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					class="absolute top-0 left-0 w-full h-full"
					title="NicNevim deníky VSL video"
				></iframe>
			</div>
		</div>

		<div class="z-10 mt-6 px-4 w-full max-w-[1200px] flex flex-col md:flex-row gap-4">
			<div
				class="flex-1 p-6 rounded-[10px] border border-white/10"
				style="background: linear-gradient(90deg, #4F00A3 0%, #7B00FF 50%, #4F00A3 100%);"
			>
				<div class="flex items-center gap-2.5">
					<img decoding="async"
						src="/assets/icons/Vector.svg"
						alt="Icon"
						class="w-5 h-auto select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3 class="text-white text-[18px] font-semibold">Stačí 5 minut týdně</h3>
				</div>
				<p class="text-white text-[14px] md:text-[16px] font-normal opacity-90">
					a pochopíte, jak dnes přemýšlíme nad trhy.
				</p>
			</div>

			<div
				class="flex-1 p-6 rounded-[10px] border border-white/10"
				style="background: linear-gradient(90deg, #4F00A3 0%, #7B00FF 50%, #4F00A3 100%);"
			>
				<div class="flex items-center gap-2.5">
					<img decoding="async"
						src="/assets/icons/Vector-1.svg"
						alt="Icon"
						class="w-6 h-auto select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3 class="text-white text-[18px] font-semibold">Sdílíme příležitosti</h3>
				</div>
				<p class="text-white text-[14px] md:text-[16px] font-normal opacity-90">
					které máme aktuálně v hledáčku.
				</p>
			</div>

			<div
				class="flex-1 p-6 rounded-[10px] border border-white/10"
				style="background: linear-gradient(90deg, #4F00A3 0%, #7B00FF 50%, #4F00A3 100%);"
			>
				<div class="flex items-center gap-2.5">
					<img decoding="async"
						src="/assets/icons/Vector-2.svg"
						alt="Icon"
						class="w-4.5 h-auto select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
					<h3 class="text-white text-[18px] font-semibold">450+ investorů</h3>
				</div>
				<p class="text-white text-[14px] md:text-[16px] font-normal opacity-90">
					už sledují naše aktuální myšlenky.
				</p>
			</div>
		</div>

		<div class="flex flex-col items-center">
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

			<p class="mt-5 text-white/40 text-[16px] font-normal text-center leading-tight">
				Kdykoliv se můžete odhlásit <br />
				jedním kliknutím
			</p>
		</div>
	</div>
</section>
