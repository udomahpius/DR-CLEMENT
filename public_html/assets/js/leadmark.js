/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
})


// change title of a display button

let titleEl = document.querySelector(".change-title");

// item one
document.querySelector(".research").addEventListener("click", () => {
    titleEl.innerHTML = "RESEARCH UNDERTAKEN"
})
// item two
document.querySelector(".service").addEventListener("click", () => {
    titleEl.innerHTML = "NATIONAL/STATE/ " + "<br>" + "COMMUNITY SERVICES"
})
// item three
document.querySelector(".conference").addEventListener("click", () => {
    titleEl.innerHTML = "Doctor Uwem Clament Akpan Conference Papers"
})