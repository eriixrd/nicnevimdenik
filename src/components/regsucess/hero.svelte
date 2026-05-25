<script lang="ts">
</script>

<section class="bg-[#0C0914]">
	<div
		class="relative flex flex-col items-center justify-center py-12 px-4 max-w-[460px] w-full mx-auto text-center"
	>
		<!-- Green Status Badge -->
		<div
			class="z-10 bg-[#16331C]/60 border border-[#2B6134]/30 rounded-[10px] px-5 py-3 flex items-center justify-center gap-2 shadow-md"
		>
			<span class="text-[16px] select-none pointer-events-none">✅</span>
			<span class="text-white font-semibold text-[15px] tracking-wide"
				>Registrace proběhla úspěšně</span
			>
		</div>

		<!-- Main Heading -->
		<h1
			class="z-10 mt-6 text-[36px] md:text-[40px] text-white font-extrabold leading-tight tracking-tight"
		>
			Na váš e-mail<br />
			jsme <span class="text-[#FFBA00]">odeslali zprávu</span><br />
			s dalšími kroky
		</h1>

		<!-- Main Image & Overlapping Card Container -->
		<div class="relative w-full flex flex-col items-center mt-6">
			<!-- Hoodie Speaker Image -->
			<img decoding="sync"
				src="/assets/addpics/knowhow.webp"
				alt="Deník Nic Nevím"
				class="z-10 w-[88%] h-auto rounded-[15px] shadow-2xl object-cover aspect-[1.58/1] select-none pointer-events-none"
				draggable="false"
				loading="eager"
				style="image-rendering: -webkit-optimize-contrast;"
			/>

			<!-- Gold Info Card overlaying the image bottom -->
			<div
				class="flex items-center justify-center w-full -mt-7 z-20 rounded-[20px] py-8 px-6 shadow-lg text-black animate-fade-in"
				style="background: linear-gradient(to bottom right, #C9A44A 0%, #D3C295 50%, #C9A44A 100%);"
			>
				<p class="text-[#000000] text-[18px] md:text-[24px] font-bold leading-[1.3] text-center">
					Už teď tam naleznete<br />
					první lekci a náhled do<br />
					našeho portfolia.
				</p>
			</div>
		</div>

		<!-- Info Card (Spam Warning) -->
		<div
			class="z-10 mt-6 w-full border border-white/10 rounded-[15px] p-6 flex flex-col items-center gap-3 shadow-xl"
		>
			<!-- Gold Info SVG Icon -->
			<img decoding="sync"
				src="/assets/icons/info.svg"
				alt="Info"
				class="w-6 h-6 select-none pointer-events-none"
				draggable="false"
				loading="eager"
			/>

			<p class="text-white text-[15px] md:text-[16px] font-medium leading-[1.5] text-center">
				Pokud e-mail neuvidíte během<br />
				několika minut, <span class="text-[#D3C295] font-bold">zkontrolujte složky</span><br />
				<span class="text-[#D3C295] font-bold">Spam nebo Hromadné.</span>
			</p>
		</div>

		<!-- Footer Support Contact -->
		<div class="z-10 mt-8 text-center">
			<p class="text-white/60 text-[14px] md:text-[15px] leading-[1.5]">
				V případě potíží nás kontaktujte na<br />
				<a
					href="mailto:nicnevim@nicnevim.com"
					class="text-white hover:text-[#FFC300] transition-colors duration-200 underline underline-offset-4 font-semibold"
				>
					nicnevim@nicnevim.com
				</a>
			</p>
		</div>
	</div>
</section>

<style>
	:global(body) {
		background-color: #0c0914 !important;
		background-image: none !important;
	}
</style>
