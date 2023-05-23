<script lang="ts">
	import { IconMenuLeft, IconArrowRight, IconArrowDown } from '../Icons'
	import MenuTree from '$lib/sleestack_config/autoMenu.config'

	export let menuType: string
	export const menuData = MenuTree()

	let icon_MenuLeft = IconMenuLeft(30)
	let icon_ArrowRight = IconArrowRight(25)
	let icon_ArrowDown = IconArrowDown(25)

	export function renderMenuItem(menuType: string, itemInfo: any) {
		let itemHTML: string = '<li>'
		let parent: boolean = false

		if (itemInfo.children !== undefined) {
			parent = true
		}

		if (parent) {
			if (menuType == 'left_side') {
				itemHTML +=
					`<span class="justify-between">` +
					itemInfo.title +
					`<span class="fill-secondary-content">` +
					icon_ArrowRight +
					`</span></span>`
			} else if (menuType == 'top_center') {
				itemHTML += '<a>' + itemInfo.title + icon_ArrowDown + '</a>'
			}
		}

		if (itemInfo.URL !== undefined) {
			itemHTML += `<a href='${itemInfo.URL}'`
			if (itemInfo.newTab) {
				itemHTML += ` target='_blank'`
			}
			itemHTML += `>` + itemInfo.title + `</a>`
		}

		if (parent) {
			itemHTML += renderChildMenu(menuType, itemInfo.children)
		}

		itemHTML += `</li>`

		return itemHTML
	}

	export function renderChildMenu(menuType: string, childrenInfo: object) {
		let childrenHTML: string = ''

		childrenHTML += `<ul class="p-2 bg-secondary text-secondary-content border-2 border-accent-content z-40">`

		Object.values(childrenInfo).forEach((childInfo) => {
			if (childInfo.includeIn.includes(menuType)) {
				childrenHTML += renderMenuItem(menuType, childInfo)
			}
		})
		childrenHTML += '</ul>'
		return childrenHTML
	}

	export function generateMenuTree(menuType: string, menuData: object) {
		let menuHTML: string = ''
		Object.values(menuData).forEach((itemInfo) => {
			if (itemInfo.includeIn.includes(menuType)) {
				menuHTML += renderMenuItem(menuType, itemInfo)
			}
		})
		// console.log(menuHTML)

		return menuHTML
	}

	export function createMenu(menuType: string, menuData: object) {
		let menuHTML: string = ''
		// -----------  generate beginning of menu HTML -----------------
		if (menuType == 'left_side') {
			menuHTML +=
				`
                <!-- ---------- dropdown menu (visible on small devices) ---------- -->
                <div class="dropdown">
                    <label class="btn btn-ghost lg:hidden" tabindex="0"> 
			            <input type="hidden" />
			        ` +
				icon_MenuLeft +
				`
		            </label>
		            <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-secondary text-secondary-content border-2 border-accent-content" tabindex="0">
                `
		} else if (menuType == 'top_center') {
			menuHTML += `<ul class="menu menu-horizontal px-1 text-sm z-40">`
		}
		// -----------  generate menu item tree -----------------

		menuHTML += generateMenuTree(menuType, menuData)
		// -----------  generate end of menu HTML -----------------

		menuHTML += `</ul>`

		if (menuType == 'left_side') {
			menuHTML += `</div>`
		}
		// console.log(menuHTML)

		return menuHTML
	}
</script>

{@html createMenu(menuType, menuData)}
