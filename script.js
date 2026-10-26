const img = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelectorAll(".arrow-prev");
const next = document.querySelectorAll(".arrow-next");

var n = 0;

function Change_slider()
{
    for( var i = 0; i < img.length; i++)
    {
        img[i].style.display = "none";
    }

    img[n].style.display = "block";
}

Change_slider();

// Assuming prev is a NodeList returned by querySelectorAll
prev.forEach(function(element) {
    element.addEventListener("click", function(e) {
        if (n > 0) {
            n--;
        } else {
            n = img.length - 1;
        }

        Change_slider();
    });
});

next.forEach(function(element1) {
    element1.addEventListener("click", function(e) {
        if (n < img.length - 1) {
            n++;
        } else {
            n = 0;
        }

        Change_slider();
    });
});

