<script lang="ts">
	import '../app.global.css'
	import Nav from '$lib/components/Nav.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import type { LayoutData } from './$types'
	import { page } from '$app/stores'
	import { beforeUpdate } from 'svelte'
	import { generatePageTitle } from '$lib/functions'

	export let data: LayoutData
	export let ssConfigPub = data.ssConfigPub

	let page_title: string = ''

	beforeUpdate(() => {
		page_title = generatePageTitle(ssConfigPub.projectName, $page.url.pathname)
	})
</script>

<svelte:head>
	<title>{page_title}</title>
</svelte:head>

{#if ssConfigPub.showNavbar}
	<Nav />
{/if}

<div class="main p-4">
	<slot />
</div>

{#if ssConfigPub.showFooter}
	<Footer />
{/if}
