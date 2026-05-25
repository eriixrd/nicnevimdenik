<script lang="ts">
</script>

<footer class="bg-[#000000] text-slate-400 border-t border-white/5 py-16">
	<div
		class="max-w-[1200px] mx-auto pl-12 pr-6 md:px-6 flex flex-col md:flex-row justify-center items-start md:items-center gap-10 md:gap-40"
	>
		<!-- Left Column: Logo & Contact -->
		<div class="flex flex-col items-start gap-5">
			<!-- Brand Logo -->
			<div class="-ml-2">
				<img
					decoding="sync"
					src="/assets/addpics/NN logooo 3.webp"
					alt="Nic Nevim Logo"
					class="h-[80px] w-auto select-none pointer-events-none"
					draggable="false"
					loading="eager"
					style="image-rendering: -webkit-optimize-contrast;"
				/>
			</div>

			<!-- Contact Section -->
			<div class="flex flex-col items-start gap-1">
				<h4 class="text-white text-[17px] font-bold tracking-wide">Kontakt</h4>
				<a
					href="mailto:nicnevim@nicnevim.com"
					class="text-white text-[16px] font-semibold hover:text-[#FFC300] transition-colors duration-200"
				>
					nicnevim@nicnevim.com
				</a>
			</div>
		</div>

		<!-- Right Column: Payments & Legal Links -->
		<div class="flex flex-col items-start gap-4">
			<!-- Payment Icons -->
			<div>
				<img
					decoding="sync"
					src="/assets/addpics/Group 75.webp"
					alt="Platební metody"
					class="h-[32px] md:h-[25px] w-auto select-none pointer-events-none"
					draggable="false"
					loading="eager"
					style="image-rendering: -webkit-optimize-contrast;"
				/>
			</div>

			<!-- Legal Links -->
			<div class="flex flex-col items-start gap-2">
				<a
					href="/Zásady-ochrany-osobních-údajů"
					class="text-[13px] md:text-[12px] text-white/90 hover:text-[#FFC300] transition-colors duration-200 underline decoration-white/30 underline-offset-4"
				>
					Zásady ochrany osobních údajů
				</a>
				<button
					type="button"
					onclick={() => {
						if (typeof window !== 'undefined' && (window as any).openCookieSettings) {
							(window as any).openCookieSettings();
						}
					}}
					class="text-[13px] md:text-[12px] text-white/90 hover:text-[#FFC300] transition-colors duration-200 underline decoration-white/30 underline-offset-4 bg-transparent border-none p-0 cursor-pointer text-left focus:outline-none"
				>
					Nastavení cookies
				</button>
			</div>
		</div>
	</div>
</footer>
