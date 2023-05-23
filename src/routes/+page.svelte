<script lang="ts">
	// this data is available in all child directories from 'routes' dir.
	// it is invoked in routes/+layout.server.ts
	export let data
	let ssConfigPub = data.ssConfigPub

	let previewTextDefault: string = 'ā ī ū ṛ ṝ ṅ ñ ṭ ḍ ṇ ś ṣ ṃ ḥ ḷ ḹ ḻ ḏ ẏ'
	let previewText: string = previewTextDefault
	let userPreviewText: string = ''

	async function newPreviewText() {
		if (userPreviewText == '') {
			previewText = previewTextDefault
		} else {
			previewText = userPreviewText
		}
	}
</script>

<div class="container mx-auto">
	<div class="flex bg-primary rounded-md p-5">
		<div class="w-20 pt-3"><p class="primary-focus">Your text:</p></div>
		<div class="w-full">
			<input
				bind:value={userPreviewText}
				on:keyup={newPreviewText}
				type="text"
				class="input w-full"
				placeholder="Type your preview text here."
			/>
		</div>
	</div>
</div>

<div><pre /></div>

<div class="container mx-auto my-5 w-full">
	<div class="w-full bg-secondary rounded-md p-2 mt-3">
		<div class="flex">
			<div class="w-1/3"><h1>Pangolin</h1></div>
			<div class="w-2/3">License</div>
		</div>
		<div class="w-full showFont" style="font-family:pangolin">{previewText}</div>
	</div>
	<div class="w-full bg-secondary rounded-md p-2 mt-3">
		<div class="flex">
			<div class="w-1/3"><h1>Montserrat</h1></div>
			<div class="w-2/3">License</div>
		</div>
		<div class="w-full showFont" style="font-family:montserrat">{previewText}</div>
	</div>
</div>

<style>
	.showFont {
		font-size: 3em;
	}
	@font-face {
		font-family: pangolin;
		src: url(Pangolin-Regular.ttf);
	}
	@font-face {
		font-family: montserrat;
		src: url(Montserrat.ttf);
	}
</style>
