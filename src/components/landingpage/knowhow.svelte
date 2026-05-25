<script lang="ts">
</script>

<section class="bg-[#0C0914] py-20">
	<div
		class="relative flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto text-center"
	>
		<!-- Heading -->
		<h2
			class="z-10 px-4 text-center text-[36px] md:text-[40px] text-white font-extrabold leading-tight"
		>
			Naše <span class="text-[#FFBA00]">know-how</span> už
			<br />
			pomáhá stovkám
			<br />
			investorů
		</h2>

		<!-- Description/Subtitle -->
		<p
			class="z-10 mt-4 px-4 max-w-[950px] text-center text-[20px] md:text-[24px] text-white font-medium leading-[160%]"
		>
			A vy teď máte možnost <span class="text-[#D3C295] font-semibold">nahlédnout</span><br />
			<span class="text-[#D3C295] font-semibold">k vybraným obchodům</span> z našeho<br />
			portfolia zdarma
		</p>

		<!-- Knowhow Image Wrapper -->
		<div class="relative z-10 mx-auto mt-4 px-4 w-full md:max-w-[880px]">
			<div
				class="relative rounded-[20px] overflow-hidden shadow-2xl p-px"
				style="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); -webkit-box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); will-change: transform; transform: translate3d(0, 0, 0);"
			>
				<img
					decoding="sync"
					src="/assets/addpics/knowhow.webp"
					alt="Know-how Preview"
					class="w-full h-auto rounded-[10px] select-none pointer-events-none"
					draggable="false"
					loading="eager"
				/>
			</div>
		</div>
		<div class="flex items-center justify-center mt-4 w-full mb-5">
			<div class="flex-1 flex justify-end">
				<img
					decoding="sync"
					src="/assets/addpics/cclogo.webp"
					alt="Czech Crunch Logo"
					class="h-[40px] md:h-[60px] w-auto mr-[40px] md:mr-[130px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
					draggable="false"
					loading="eager"
				/>
			</div>

			<div class="flex-none">
				<img
					decoding="sync"
					src="/assets/addpics/LC_logo_blackBG_02_2.webp"
					alt="LC Logo"
					class="w-[40px] md:w-[63px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
					draggable="false"
					loading="eager"
				/>
			</div>

			<div class="flex-1 flex justify-start">
				<img
					decoding="sync"
					src="/assets/addpics/forbeslogo.webp"
					alt="Forbes Logo"
					class="w-[100px] h-auto md:w-[169px] ml-[34px] md:ml-[120px] opacity-70 hover:opacity-100 transition-all duration-300 select-none pointer-events-none"
					draggable="false"
					loading="eager"
				/>
			</div>
		</div>

		<!-- Final Callout Paragraph -->
		<p
			class="z-10 relative mt-8 text-center text-[18px] md:text-[22px] text-white font-medium leading-[1.6]"
		>
			Přidejte se a sledujte naše myšlenky<br />
			<span class="text-[#D3C295] font-bold">o aktuálním dění na trzích</span> přímo ve vaší<br />
			schránce za 5 minut týdně.
		</p>

		<!-- Email Sketches Container (Desktop: side-by-side, Moody's left, Reddit right, larger) -->
		<div
			class="flex flex-col md:flex-row gap-4 md:gap-6 mt-5 px-4 w-full max-w-[345px] md:max-w-[840px] md:justify-center z-10"
		>
			<!-- Sketch 1 (Reddit) - Top on mobile, Right on desktop -->
			<div class="relative overflow-hidden p-px w-full md:max-w-[400px] order-1 md:order-2">
				<img
					decoding="sync"
					src="/assets/addpics/Email for fast sketching (1) 3.webp"
					alt="Email Sketch 1"
					class="w-full h-auto select-none pointer-events-none"
					draggable="false"
					loading="eager"
				/>
			</div>

			<!-- Sketch 2 (Moody's) - Bottom on mobile, Left on desktop -->
			<div class="relative overflow-hidden p-px w-full md:max-w-[400px] order-2 md:order-1">
				<img
					decoding="sync"
					src="/assets/addpics/Email for fast sketching (2) 3.webp"
					alt="Email Sketch 2"
					class="w-full h-auto select-none pointer-events-none"
					draggable="false"
					loading="eager"
				/>
			</div>
		</div>
		<button
			onclick={() => {
				document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
			}}
			class="group relative px-13 py-3.5 mt-25 bg-[#FFC300] text-[#000000] text-[20px] font-bold rounded-[10px] shadow-[0_0_25px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-105 overflow-hidden"
		>
			<span class="relative z-10">Přidat se zdarma</span>
			<div
				class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
			></div>
		</button>
	</div>
</section>
