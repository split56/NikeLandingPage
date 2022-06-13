let slideIndex = 0;

let slider = document.getElementById('slider')

let slides = document.getElementsByClassName('container')

let slideControl = document.getElementById('slide-control')
console.log(slideControl)

let slideControlItems = slideControl.getElementsByClassName('slide-control-item')


slider.style.marginTop = '-' + slideIndex + '00vh'

setTimeout(() => {
	slideControlItems[slideIndex].classList.add('active')
	slides[slideIndex].classList.add('active')
}, 500)

let chooseProduct = (index) => {
    if(index===slideIndex) return 
    slideIndex = index
    let curSlideCon = slideControl.querySelector('.slide-control-item.active')
    curSlideCon.classList.remove('active')

    let curSlide = slider.querySelector('.container.active')
    curSlide.classList.remove('active')
    setTimeout(() => {
		slider.style.marginTop = '-' + slideIndex + '00vh'
		slideControlItems[slideIndex].classList.add('active')
		slides[slideIndex].classList.add('active')
	}, 1500)
}

Array.from(slideControlItems).forEach((element,index) => {
    element.addEventListener('click',()=>chooseProduct(index))
});

let modal = document.getElementById('modal')

let closeBtn = document.getElementById('modal-close')

closeBtn.onclick = () => {
	modal.style.display = 'none'
}

let moreImages = document.getElementsByClassName('more-img-item')

let previewImages = document.getElementsByClassName('img-preview')

Array.from(moreImages).forEach((el) => {
	el.addEventListener('click',() => {
		let imgItems = el.parentNode.getElementsByTagName('img')

		Array.from(imgItems).forEach((item, index) => {
			previewImages[index].src = item.src
		})

		let img = el.querySelector('img')
		modal.style.display = 'block'

		let modalContent = modal.querySelector('.modal-content')
		modalContent.src = img.src

		let temp = modalContent.cloneNode(true)
		modalContent.parentNode.replaceChild(temp, modalContent)
	})
})