<script lang="ts">
	import { IconFortuneCookie } from '../Icons'

	let icon_fortuneCookie = IconFortuneCookie(40)
</script>

<div class="modal">
	<div
		class="alert-warning rounded-md text-secondary-content bg-secondary max-w-fit mx-4 my-6 flex"
	>
		<div class="grid-flow-col flex items-center p-3">
			<div class="justify-center items-center">
				{@html icon_fortuneCookie}
			</div>
			<div class="text-center">
				<p>We use 'cookies' to save your user preferences.</p>
			</div>
			<div class="w-full text-center">
				<button class="btn btn-sm btn-accent m-1">Deny</button>
				<button class="btn btn-sm btn-primary m-1">Accept</button>
			</div>
		</div>
	</div>
</div>
