<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
	import CookiePrompt from '$lib/components/CookiePrompt.svelte'
	import AutoMenu from '$lib/components/AutoMenu.svelte'
	import { IconArrowDown } from '../Icons'
	import { SleestakConfigPublic as ssConfigPub } from '$lib/sleestack_config/ss_public.config'

	let project_name = ssConfigPub.projectName

	let icon_ArrowDown = IconArrowDown(25)
</script>

<div class="navbar bg-primary text-primary-content">
	<!-- ---------- Left section of navbar ---------- -->

	<div class="navbar-start">
		<!-- ---------- left 'hamburger' menu (visible on small devices) ---------- -->
		<AutoMenu menuType="left_side" />
		<!-- ---------- end of hidden menu ---------- -->
		<!-- ---------- Title ---------- -->
		<a class="text-xl mx-2" href="/">
			<div class="title-wrapper flex">
				<div><img src="icon-512.png" alt="K" class="icon" /></div>
				<div class="pt-2 ml-2">{project_name}</div>
			</div>
		</a>
		<!-- ---------- end of Title ---------- -->
	</div>
	<!-- ---------- end of left section of navbar ---------- -->

	<!-- ---------- Middle section of navbar (visible on larger screens) ---------- -->
	<div class="navbar-center hidden lg:flex">
		<!-- ---------- Main Menu (visible on larger screens) ---------- -->
		<AutoMenu menuType="top_center" />
		<!-- ---------- end of Main Menu ---------- -->

		<!-- ---------- end of Search Field ---------- -->
	</div>
	<!-- ---------- end of Middle section of navbar   ---------- -->
	<!-- ---------- Middle section of navbar (visible on all screens) ---------- -->
	<div class="navbar-end gap-2">
		<!-- ---------- Light/Dark mode toggle ---------- -->
		<div>
			<ThemeSwitch />
		</div>
		<!-- ---------- end of Light/Dark mode toggle ---------- -->
	</div>
	<!-- ---------- end of End section of navbar   ---------- -->
</div>

<CookiePrompt />

<style lang="postcss">
	.icon {
		width: 40px;
	}
</style>
