# fonts.gaudiya.net

[here](https://fonts.gaudiya.net/)

## ------------ General ------------

- Don't install or run with ```npm```! Use ```pnpm``` instead to be kind to disk as it reuses packages.


- To preview this README.md file use ``` Ctrl/CMD+Shift+V ```
 
 
## ------------ Start Dev Server ------------

```bash
pnpm run dev
```

or start the server and open the app in a new browser tab

```bash
pnpm run dev -- --open
```  

## ------------ DaisyUI Config ------------

- Pick a `light` and a `dark` theme here:  https://daisyui.com/docs/themes/
- Replace the defaults with the names of your themes in the `tailwind.config.css` file:

```c
const config = {
	plugins:  [require("daisyui")],
	daisyui: {
		themes: ["bumblebee","coffee"]
	}
}
```
The first theme listed will be the default light theme. The second name in the array is the alternate theme. I've defaulted to a light `bumblebee` theme with a dark `coffee` theme.

- Copy the `.env-example` file in the root directory and rename it to `.env`
- Replace the values for the theme environment variables with your own values

```c
PUBLIC_THEME_LIGHT="bumblebee"
PUBLIC_THEME_DARK="coffee"
PUBLIC_THEME_DEFAULT="bumblebee"
```

# -------- AND THAT'S IT! ---------

> The stuff below is just for reference.
 

## ------------ DaisyUI Install ------------

> This is just here for reference. DaisyUI is already installed in this bundle.

```
pnpx svelte-add@latest tailwindcss@latest

pnpm install
```

check:
```
pnpm run dev
```

install DaisyUI:
```
pnpm i daisyui@latest
```

then add DaisyUI to tailwind.config.js
```c
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins:  [require("daisyui")],

};

module.exports = config;
```

check:
```
pnpm run dev
```

## -------- OLD ICON INSTRUCTIONS --------

> This is just here for reference. We're using the custom SVG Icon method above which is way easier.


We're going to use unplug-icons from:
https://www.npmjs.com/package/unplugin-icons

@iconify/json (~120MB) includes all the iconsets from Iconify so you can install once and use any of them as you want (only the icons you actually use will be bundled into the production build).

## Install and Config:
```bash
pnpm i -D unplugin-icons@latest unplugin-auto-import@latest
pnpm i -D @types/@iconify/json@latest
```

The unplugin-icons plugin should be configured in the vite.config.js configuration file:

```c
import { defineConfig } from 'vitest/config'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		AutoImport({
			resolvers: [
				IconsResolver({
					prefix: 'Icon',
					extension: 'svelte'
				})
			]
		}),
		Icons({
			compiler: 'svelte'
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
})
```

Then just use the icon via the autoimport method:

```c
<IconLogosSvelteIcon width={32} height={32} />
```

or just:
```c
<IconLogosSvelteIcon />
```

### ------------- Search for Icons -------------

> https://icones.js.org/ 


