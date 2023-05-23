export function formatDate(date: Date) {
	return Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)
}

export function convertStringToBoolean(input: string): boolean | undefined {
	try {
		return JSON.parse(input.toLowerCase())
	} catch (e) {
		return undefined
	}
}

export function capitalizeFirstLetter(input: string): string | undefined {
	return input.charAt(0).toUpperCase() + input?.slice(1)
}

export function generatePageTitle(title: string, path: string): string {
	const paths = path.split('/')
	const lastPath = [...paths].pop()
	if (lastPath) {
		title += ' 🍄 ' + capitalizeFirstLetter(lastPath) // lastPath.charAt(0).toUpperCase() + lastPath?.slice(1)
	}
	return title
}
