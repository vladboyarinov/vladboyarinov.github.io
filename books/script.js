// const cartWrapper = document.querySelector('.wr-cart');


// window.addEventListener('click', function(event){


//     if (event.target.hasAttribute('data-cart')){
        
//         const cart = event.target.closest('.bestseller__ul__li');
//         console.log(cart);
        
//         const productInfo = {
//             id: cart.dataset.id,
//             imgSrc: cart.querySelector('.bestseller__ul__li__img').getAttribute('src'),
//             title: cart.querySelector('.bestseller__ul__li__txt').innerText,
//             btn: cart.querySelector('.bestseller__ul__li__btn').innerText,
//         }
//         const cartItemHTML = `
//         <li data-id="${productInfo.id}" class="bestseller__ul__li">
//                     <img class="bestseller__ul__li__img" src="${productInfo.imgSrc}" alt="">
//                     <h3 class="bestseller__ul__li__txt">${productInfo.title}</h3>
//                     <button  data-cart class="bestseller__ul__li__btn">${productInfo.btn}</button>
//                 </li>`
//         cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
//     }

// });
document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;

function mySort() {
    let nav = document.querySelector('#nav');
    for(let i = 0; i < nav.children.length;i++){
        for(let j = i; j < nav.children.length; j++){
            if (+nav.children[i].getAttribute('data-sort') > +nav.children[j].getAttribute('data-sort')){
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);

            }       
        }
    }
}


function mySortDesc() {
    let nav = document.querySelector('#nav');
    for(let i = 0; i < nav.children.length;i++){
        for(let j = i; j < nav.children.length; j++){
            if (+nav.children[i].getAttribute('data-sort') < +nav.children[j].getAttribute('data-sort')){
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                insertAfter(replacedNode, nav.children[i]);
            }       
        }
    }
}

// function insertAfter(elem, refElem) {
//     return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
// }

// document.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById('form');
// 	form.addEventListener('submit', formSend);

// 	async function formSend(e) {
// 		e.preventDefault();

// 		let error = formValidate(form);

// 		let formData = new FormData(form);
// 		formData.append('image', formImage.files[0]);

// 		if (error === 0) {
// 			form.classList.add('_sending');
// 			let response = await fetch('sendmail.php', {
// 				method: 'POST',
// 				body: formData
// 			});
// 			if (response.ok) {
// 				let result = await response.json();
// 				alert(result.message);
// 				formPreview.innerHTML = '';
// 				form.reset();
// 				form.classList.remove('_sending');
// 			} else {
// 				alert("????????????");
// 				form.classList.remove('_sending');
// 			}
// 		} else {
// 			alert('?????????????????? ???????????????????????? ????????');
// 		}

// 	}


// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll('._req');

// 		for (let index = 0; index < formReq.length; index++) {
// 			const input = formReq[index];
// 			formRemoveError(input);

// 			if (input.classList.contains('_email')) {
// 				if (emailTest(input)) {
// 					formAddError(input);
// 					error++;
// 				}
// 			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
// 				formAddError(input);
// 				error++;
// 			} else {
// 				if (input.value === '') {
// 					formAddError(input);
// 					error++;
// 				}
// 			}
// 		}
// 		return error;
// 	}
// 	function formAddError(input) {
// 		input.parentElement.classList.add('_error');
// 		input.classList.add('_error');
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove('_error');
// 		input.classList.remove('_error');
// 	}
// 	//?????????????? ?????????? email
// 	function emailTest(input) {
// 		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// 	}

// 	//???????????????? ?????????? file ?? ????????????????????
// 	const formImage = document.getElementById('formImage');
// 	//???????????????? ?????? ?????? ???????????? ?? ????????????????????
// 	const formPreview = document.getElementById('formPreview');

// 	//?????????????? ?????????????????? ?? ???????????? file
// 	formImage.addEventListener('change', () => {
// 		uploadFile(formImage.files[0]);
// 	});

// 	function uploadFile(file) {
// 		// ???????????????????? ?????? ??????????
// 		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
// 			alert('?????????????????? ???????????? ??????????????????????.');
// 			formImage.value = '';
// 			return;
// 		}
// 		// ???????????????? ???????????? ?????????? (<2 ????)
// 		if (file.size > 2 * 1024 * 1024) {
// 			alert('???????? ???????????? ???????? ?????????? 2 ????.');
// 			return;
// 		}

// 		var reader = new FileReader();
// 		reader.onload = function (e) {
// 			formPreview.innerHTML = `<img src="${e.target.result}" alt="????????">`;
// 		};
// 		reader.onerror = function (e) {
// 			alert('????????????');
// 		};
// 		reader.readAsDataURL(file);
// 	}
// });