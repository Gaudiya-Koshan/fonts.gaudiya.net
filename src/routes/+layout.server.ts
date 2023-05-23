import { SleestakConfigPublic } from '$lib/sleestack_config/ss_public.config'
import type { LayoutServerLoad } from './$types'

export const load = (() => {
	return {
		ssConfigPub: SleestakConfigPublic
	}
}) satisfies LayoutServerLoad
