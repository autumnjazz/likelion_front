var menu = [
    {
        "name": "밥",
        "img_src":"https://image.flaticon.com/icons/svg/267/267915.svg"
    },{
        "name": "면",
        "img_src":"https://image.flaticon.com/icons/svg/267/267916.svg"
    },{
        "name": "햄버거",
        "img_src":"https://image.flaticon.com/icons/svg/267/267872.svg"
    },{
        "name": "피자",
        "img_src":"https://image.flaticon.com/icons/svg/267/267875.svg"
    },{
        "name": "치킨",
        "img_src":"https://image.flaticon.com/icons/svg/267/267876.svg"
    },
]

var flexCss = {
    "display": "flex",
    "justify-content": "center",
    "align-itmes": "center",
    "flex-direction": "column"
}

function introFadeIn() {
    $("#intro").fadeIn("slow");
    $("#intro").css(flexCss);
}
function loadFadeIn() {
    $("#intro").fadeOut("slow");
    $("#load").fadeIn("slow");
    $("#load").css(flexCss);
}
function mainFadeIn() {
    $("#load").fadeOut("slow");
    $("#main").fadeIn("slow");
    toggleMainContent();
}

function toggleMainContent() {
    menu.map(e => {
        $('.grid').append(`
            <div class="item">
                <div class="item-content">
                    <img src="${e.img_src}"
                        style="width: 60px; margin: auto;">
                    <p>${e.name}</p>
                </div>
            </div>
        `)
    })
    var grid = new Muuri('.grid', { dragEnabled: true });

    $('.carousel').slick({  //클래스명 수정하기
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
}


var dev = true; //개발중인 상태일때

//$(function(){...} : shorthand)
$(document).ready(function () {
    if (!dev) {
        introFadeIn();
        setTimeout(loadFadeIn, 2000);
        setTimeout(mainFadeIn, 4000); //위에 실행되면서 실행되므로. 4초 설정해야 위의 함수로부터 2초후
    }
    else mainFadeIn();

    // $("#main").click(function(){
    //     console.log("hi")
    // })



})