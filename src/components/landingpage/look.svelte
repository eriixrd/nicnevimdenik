<script lang="ts">
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';

	let name = '';
	let surname = '';
	let email = '';
	let isSubmitting = false;

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (isSubmitting) return;
		isSubmitting = true;

		try {
			const formData = new URLSearchParams();
			formData.append('name', name);
			formData.append('surname', surname);
			formData.append('email', email);

			await fetch(
				'https://nanoczm.ecomailapp.cz/public/subscribe/5/ed07fd6b07ff0199fabc8509f995f058',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					mode: 'no-cors',
					body: formData.toString()
				}
			);

			// Direct redirect to registration success page
			goto('/registrace-uspesna');
		} catch (error) {
			console.error('Subscription error:', error);
			toast.error('Něco se nepovedlo. Zkontrolujte prosím připojení.');
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet" />
</svelte:head>

<section class="bg-[#11082A] py-20" id="lead-form">
	<div
		class="relative flex flex-col items-center justify-center w-full max-w-[1200px] mx-auto text-center px-4"
	>
		<!-- Logo (Copied styling from Hero) -->
		<img
			src="/assets/addpics/logo.png"
			alt="Logo"
			class="z-10 h-[80px] w-auto select-none pointer-events-none"
			draggable="false"
			loading="lazy"
			style="max-width:160px; image-rendering: -webkit-optimize-contrast;"
		/>

		<!-- Tag Badge (Copied styling from Hero) -->
		<div
			class="z-10 px-4 py-1.5 bg-gradient-to-r from-[#4B1F7A] via-[#8724C9] to-[#4B1F7A] rounded-[10px] shadow-lg cursor-default"
		>
			<span class="text-white text-[15px] font-regular tracking-wide">
				Nic Nevim deník zdarma
			</span>
		</div>

		<!-- Heading (Copied styling from Hero with exact line wrapping from the image) -->
		<h1
			class="z-10 mt-6 max-w-[950px] px-4 text-center text-[36px] md:text-[40px] text-white text-nowrap font-extrabold leading-tight"
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

		<!-- Image under heading -->
		<div class="z-10 mt-8 w-full max-w-[600px] md:px-0">
			<img
				src="/assets/addpics/majk.png"
				alt="Majk"
				class="w-full h-auto rounded-[20px] shadow-lg object-cover select-none pointer-events-none"
				draggable="false"
				loading="lazy"
			/>
		</div>

		<!-- "Co vše dostanete" Lavender Card -->
		<div class="z-10 -mt-14 w-full max-w-[650px] px-2 md:px-0">
			<div class="w-full bg-[#E7E1FB] rounded-[20px] p-6 md:p-8 flex flex-col text-[#000000] gap-1">
				<h3
					class="text-[22px] md:text-[24px] mt-6 text-[#000000] font-bold text-left tracking-tight"
				>
					Co vše dostanete:
				</h3>

				<div class="flex flex-col gap-3">
					<!-- Item 1 -->
					<div class="flex items-start gap-2 md:gap-3">
						<img
							src="/assets/icons/Checkmark.png"
							alt="Check"
							class="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 mt-[5px] select-none pointer-events-none"
							draggable="false"
							loading="lazy"
						/>
						<p class="text-[15px] md:text-[18px] font-normal text-left leading-relaxed">
							<strong class="font-extrabold text-[#000000]">Deníky Nic Nevim</strong> - Jak
							přemýšlíme<br class="block md:hidden" /> nad našimi obchody za 5 minut týdně
						</p>
					</div>

					<!-- Item 2 -->
					<div class="flex items-start gap-2 md:gap-3">
						<img
							src="/assets/icons/Checkmark.png"
							alt="Check"
							class="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 mt-[5px] select-none pointer-events-none"
							draggable="false"
							loading="lazy"
						/>
						<p class="text-[15px] md:text-[18px] font-normal text-left leading-relaxed">
							<strong class="font-extrabold text-[#000000]">Aktuální příležitosti</strong>, které
							máme<br class="block md:hidden" /> v hledáčku
						</p>
					</div>

					<!-- Item 3 -->
					<div class="flex items-start gap-2 md:gap-3">
						<img
							src="/assets/icons/Checkmark.png"
							alt="Check"
							class="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 mt-[5px] select-none pointer-events-none"
							draggable="false"
							loading="lazy"
						/>
						<p class="text-[15px] md:text-[18px] font-normal text-left leading-relaxed">
							<strong class="font-extrabold text-[#000000]">Jednorázový snímek našeho</strong><br
								class="block md:hidden"
							/>
							<strong class="font-extrabold text-[#000000]">portfolia</strong> pro inspiraci a učení
						</p>
					</div>

					<!-- Item 4 -->
					<div class="flex items-start gap-2 md:gap-3">
						<img
							src="/assets/icons/Checkmark.png"
							alt="Check"
							class="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 mt-[5px] select-none pointer-events-none"
							draggable="false"
							loading="lazy"
						/>
						<p class="text-[15px] md:text-[18px] font-normal text-left leading-relaxed">
							<strong class="font-extrabold text-[#000000]">Rozbor našich reálných obchodů</strong
							>,<br class="block md:hidden" />
							uvidíte, jak principy používáme v<br class="block md:hidden" /> praxi
						</p>
					</div>

					<!-- Item 5 -->
					<div class="flex items-start gap-2 md:gap-3">
						<img
							src="/assets/icons/Checkmark.png"
							alt="Check"
							class="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 mt-[5px] select-none pointer-events-none"
							draggable="false"
							loading="lazy"
						/>
						<p class="text-[15px] md:text-[18px] font-normal text-left leading-relaxed">
							Koukáte přes rameno člověku, který<br class="block md:hidden" /> se podílí na
							investicích v
							<strong class="font-extrabold text-[#000000]">řádu stovek</strong><br
								class="block md:hidden"
							/>
							<strong class="font-extrabold text-[#000000]">milionů korun</strong>
						</p>
					</div>
				</div>

				<!-- Arrow pointing down -->
				<div class="flex justify-center mt-10">
					<img
						src="/assets/addpics/šipkaaaaaaaaaaaa.svg"
						alt="Šipka"
						class="w-10 h-auto opacity-95 select-none pointer-events-none"
						draggable="false"
						loading="lazy"
					/>
				</div>

				<!-- Tag Badge -->
				<div class="flex justify-center mt-6">
					<div
						class="px-5 py-1.5 bg-gradient-to-r from-[#4B1F7A] via-[#8A35C3] to-[#4B1F7A] rounded-[10px] shadow-md border border-white/10 backdrop-blur-md cursor-default"
					>
						<span class="text-white text-[15px] font-bold tracking-wide">
							Zbývá poslední krok
						</span>
					</div>
				</div>

				<!-- Heading -->
				<h2
					class="mt-6 text-center text-[28px] md:text-[34px] text-[#000000] font-extrabold leading-tight"
				>
					Vyplňte, kam vám<br />máme deník posílat
				</h2>

				<!-- Description -->
				<p
					class="mt-4 text-center text-[15px] md:text-[16px] text-black/80 font-normal leading-relaxed"
				>
					Ihned vám přijde uvítací email s prvním<br />
					nahlédnutím do našeho portfolia
				</p>

				<!-- Sign up Form Container -->
				<form
					on:submit={handleSubmit}
					class="mt-8 flex flex-col gap-3.5 w-full max-w-[480px] mx-auto"
				>
					<input
						type="text"
						name="firstname"
						placeholder="Vaše křestní jméno"
						required
						autocomplete="given-name"
						bind:value={name}
						class="w-full px-4 py-3 bg-transparent border border-black/80 rounded-[10px] text-black placeholder-black/40 text-[15px] font-normal focus:outline-none focus:border-black/50 transition-colors"
					/>
					<input
						type="text"
						name="lastname"
						placeholder="Vaše příjmení"
						required
						autocomplete="family-name"
						bind:value={surname}
						class="w-full px-4 py-3 bg-transparent border border-black/80 rounded-[10px] text-black placeholder-black/40 text-[15px] font-normal focus:outline-none focus:border-black/50 transition-colors"
					/>
					<input
						type="email"
						name="email"
						placeholder="Váš e-mail"
						required
						autocomplete="email"
						bind:value={email}
						class="w-full px-4 py-3 bg-transparent border border-black/80 rounded-[10px] text-black placeholder-black/40 text-[15px] font-normal focus:outline-none focus:border-black/50 transition-colors"
					/>

					<!-- CTA Submit Button -->
					<button
						type="submit"
						disabled={isSubmitting}
						class="group relative w-full py-3.5 mt-3 bg-[#FFC300] text-[#000000] text-[20px] font-extrabold rounded-[10px] shadow-[0_0_20px_rgba(254,194,1,0.2)] cursor-pointer transition-all duration-200 hover:scale-[102%] text-center focus:outline-none disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden"
					>
						<span class="relative z-10">{isSubmitting ? 'Odesílám...' : 'Přidat se zdarma'}</span>
						<div
							class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-full"
						></div>
					</button>

					<!-- Footer text -->
					<p
						class="mt-2 text-[13px] md:text-[14px] text-black/60 font-normal text-center leading-normal"
					>
						Žádný spam. Kdykoliv se můžete<br />
						odhlásit jedním kliknutím.
					</p>

					<!-- Overlapping Reviews/Avatars & Rating -->
					<div class="mt-2 flex justify-center w-full">
						<img
							src="/assets/addpics/formreview.png"
							alt="Hodnocení"
							class="w-[260px] md:w-[280px] h-auto select-none pointer-events-none"
							draggable="false"
							loading="lazy"
							style="image-rendering: -webkit-optimize-contrast;"
						/>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
