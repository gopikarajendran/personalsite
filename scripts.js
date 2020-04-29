if (document.querySelector('.drawer-label')) {
	let drawerLabels = document.querySelectorAll('.drawer-label')

	for (let i = 0; i < drawerLabels.length; i++) {
	  drawerLabels[i].addEventListener('click', function() {
	  	if (document.querySelector('.drawer-active')) {
	  		document.querySelector('.drawer-active').classList.remove('drawer-active')
	  	}
	    this.parentElement.classList.toggle('drawer-active')    
	  })
	}
}

if (document.querySelector('.color-mode')) {
	let mode = document.querySelector('.color-mode')
	mode.addEventListener('click', function() {
		document.body.classList.toggle('dark')
	})
}

if (document.querySelector('.scroll-top')) {
	let scrollTops = document.querySelectorAll('.scroll-top')
	let interiors = document.querySelectorAll('.drawer-content-interior')
	for (let i = 0; i < scrollTops.length; i++) {
		scrollTops[i].addEventListener('click', function(e) {
			e.preventDefault()
			for (let i = 0; i < interiors.length; i++) {
				interiors[i].scrollTop = 0
			}
		})
	}
}