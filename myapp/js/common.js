$(function() {
    //time
    if (window.innerHeight < 821 || window.screen.height < 821) {
        $('.time__num').on('click', function(){
            $(this).parent().siblings().children().removeClass('active');
            $(this).next().toggleClass('active');
        });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".time__num"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.time__num').parent().siblings().children().removeClass('active');
            }
        });
    }
    $('.stations__slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        let carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.reviews__slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        let carousel = e.relatedTarget;
        $('.slider-counter--reviews').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>', '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="matrix(1 0 0 -1 0 1008)"><path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z"/></g></g></svg>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});



// document.addEventListener('DOMContentLoaded', function(){
// //menu
//     var menu = document.querySelector('.menu-toggle');
//     menu.addEventListener('click', function(){
//         var nav = document.querySelector('.main-menu');
//         nav.classList.toggle('active');
//         var navGamb = document.querySelector('.menu-toggle');
//         navGamb.classList.toggle('active');
//     });
// //tabs
// 	// store tabs variable
// 	var myTabs = document.querySelectorAll("ul.header__tabs > li");
//     function myTabClicks(tabClickEvent) {
// 		for (var i = 0; i < myTabs.length; i++) {
// 			myTabs[i].classList.remove("active");
// 		}
// 		var clickedTab = tabClickEvent.currentTarget;
// 		clickedTab.classList.add("active");
// 		tabClickEvent.preventDefault();
// 		var myContentPanes = document.querySelectorAll(".tab-pane");
// 		for (i = 0; i < myContentPanes.length; i++) {
// 			myContentPanes[i].classList.remove("active");
// 		}
//         var anchorReference = tabClickEvent.target;
//         console.log(anchorReference);
//         var activePaneId = anchorReference.getAttribute("href");
//         console.log(activePaneId);
//         var activePane = document.querySelector(activePaneId);
//         console.log(activePaneId);
// 		activePane.classList.add("active");
//     }
//     for (i = 0; i < myTabs.length; i++) {
// 		myTabs[i].addEventListener("click", myTabClicks)
// 	}





// });
