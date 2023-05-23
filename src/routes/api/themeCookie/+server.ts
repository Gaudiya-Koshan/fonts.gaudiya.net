import { json } from '@sveltejs/kit'
import { SleestakConfigPublic as ssConfigPub } from '$lib/sleestack_config/ss_public.config'

export const POST = async ({ request, cookies }) => {
	const { requestType, theme } = await request.json()

	if (requestType == 'get') {
		const cookieTheme = cookies.get('colourtheme')
		// console.log(cookieTheme)
		// if cookie isn't set, send back default theme
		if (cookieTheme === undefined) {
			return json({ cookieTheme: ssConfigPub.daisyThemes.default })
		} else {
			return json({ cookieTheme: cookieTheme })
		}
	} else if (requestType == 'set') {
		cookies.set('colourtheme', theme, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		})
		return json({ cookieTheme: theme })
	}
}
