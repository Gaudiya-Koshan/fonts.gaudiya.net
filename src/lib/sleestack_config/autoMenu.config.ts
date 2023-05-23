export default function MenuTree() {
	/*
    
    Add a menu object to the menuData object in this format:

		VisibleMenuText: {                      	// object name is not in quotes (this could be anything, eg. banana01)
            title: "Menu Item",                  	// this is the visible text 
			includeIn: ['left_side', 'top_center'], // which menus will this show up in?
            URL: 'https://how.now',             	// OPTIONAL: URL field. if not added it justs open a submenu
			newTab: false,							// open link in a new tab or not
			children: {                         	// sub-menu children follow the same format 
				'Menu SubItem 1': {
                    title: "Menu SubItem 1",
					includeIn: ['left_side', 'top_center'],
					URL: 'https://here.now',
					newTab: true
				},
				'Menu SubItem 2': {                     		// you can only build menus two layers deep
                    title: "Menu SubItem 2",            		// parent & child only. no 'grandchildren'
					includeIn: ['left_side', 'top_center'],      
					URL: 'https://where.now',
					newTab: false
				}
			}
		},
*/

	const menuData = {
		// add objects in the order that you want them to be visible

		Fonts: {
			title: 'Fonts',
			includeIn: ['left_side', 'top_center'],
			URL: '/',
			newTab: false
		},
		About: {
			title: 'About',
			includeIn: ['left_side', 'top_center'],
			URL: '/about',
			newTab: false
		}
	}
	return menuData
}
