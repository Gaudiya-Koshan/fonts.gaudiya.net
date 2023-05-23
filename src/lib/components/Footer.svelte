<script lang="ts">
	import { IconTwitter, IconYouTube, IconFacebook, IconInstagram, IconCopyright } from '$lib/Icons'
	import { SleestakConfigPublic as ssConfigPub } from '$lib/sleestack_config/ss_public.config'

	let icon_copyright = IconCopyright(20)
	let icon_twitter = IconTwitter(20)
	let icon_youtube = IconYouTube(20)
	let icon_facebook = IconFacebook(20)
	let icon_instagram = IconInstagram(20)

	let project_name = ssConfigPub.projectName
	let year = new Date().getFullYear()
</script>

<div class="footer-container">
	<footer
		class="footer fixed bottom-0 p-1 bg-neutral text-neutral-content grid-flow-col gap-16 justify-center items-center"
	>
		<div class="grid-flow-col flex items-center">
			<div>
				{@html icon_copyright}
			</div>
			<div class="text-center">
				<p class="text-xs">{year} - {project_name}</p>
			</div>
		</div>
		<div>
			<div class="grid grid-flow-col gap-4 justify-center">
				<!-- <a href="/">
					{@html icon_twitter}
				</a>
				<a href="/">
					{@html icon_youtube}
				</a>
				<a href="/">
					{@html icon_facebook}
				</a>
				<a href="/">
					{@html icon_instagram}
				</a> -->
			</div>
		</div>
	</footer>
</div>
