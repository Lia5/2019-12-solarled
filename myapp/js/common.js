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
	// Custom JS

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
