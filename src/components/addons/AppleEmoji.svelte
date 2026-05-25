<script lang="ts">
	interface Props {
		symbol: string;
		size?: number;
	}
	let { symbol, size = 24 }: Props = $props();

	// Helper to get hex code points of string
	function getEmojiHex(str: string): string {
		const points = [];
		for (let i = 0; i < str.length; i++) {
			const code = str.codePointAt(i);
			if (code) {
				points.push(code.toString(16));
				if (code > 0xffff) i++; // skip surrogate pair
			}
		}
		return points.join('-');
	}

	let hex = $derived(getEmojiHex(symbol));
	let src = $derived(`https://cdn.jsdelivr.net/gh/iamcal/emoji-data@master/img-apple-160/${hex}.png`);
</script>

<img
	{src}
	alt={symbol}
	style="width: {size}px; height: {size}px; display: inline-block; vertical-align: middle; image-rendering: -webkit-optimize-contrast;"
	class="select-none pointer-events-none align-middle"
	draggable="false"
	decoding="sync"
	loading="eager"
/>
