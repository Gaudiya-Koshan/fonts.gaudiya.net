<script lang="ts">
	import { onMount } from 'svelte'
	import { IconCarbonSun, IconCarbonMoon } from '../Icons'
	import { SleestakConfigPublic as ssConfigPub } from '$lib/sleestack_config/ss_public.config.js'

	let theme = ssConfigPub.daisyThemes.default
	let themeDark = ssConfigPub.daisyThemes.dark
	let themeLight = ssConfigPub.daisyThemes.light

	let themeIcon: Element

	async function themeToggle() {
		if (theme == themeDark) {
			theme = themeLight
			themeIcon.innerHTML = IconCarbonSun(30)
		} else if (theme == themeLight) {
			theme = themeDark
			themeIcon.innerHTML = IconCarbonMoon(30)
		}
		document.documentElement.setAttribute('data-theme', theme)

		const cookieSet = await fetch('/api/themeCookie', {
			method: 'POST',
			body: JSON.stringify({ requestType: 'set', theme: theme }),
			headers: {
				'content-type': 'application/json'
			}
		})
		const { cookieTheme } = await cookieSet.json()

		if (!cookieTheme) {
			// chuck error that theme cookie wasn't set
		}
	}

	onMount(async () => {
		const cookieGet = await fetch('/api/themeCookie', {
			method: 'POST',
			body: JSON.stringify({ requestType: 'get', theme: theme }),
			headers: {
				'content-type': 'application/json'
			}
		})

		const { cookieTheme } = await cookieGet.json()
		document.documentElement.setAttribute('data-theme', cookieTheme)
		theme = cookieTheme

		// change icon to match theme
		if (cookieTheme == themeLight) {
			themeIcon.innerHTML = IconCarbonSun(30)
		} else {
			themeIcon.innerHTML = IconCarbonMoon(30)
		}
	})
</script>

<div class="switcher">
	<button id="themeButton" class="themeToggleButton" bind:this={themeIcon} on:click={themeToggle} />
</div>

<style>
	.switcher button {
		display: flex;
		vertical-align: middle;
		align-items: center;
	}
</style>
