(function () {

    var image_dom = document.getElementById('sprite2');

    const auto = 150;
    const allImages = 4;
    const imageWidth =  155;
    const imageHeight = 155;

    var Image = 0;
 
    window.setInterval(function() {
        Image++;
        if (Image>= allImages) Image = 0;
        image_dom.setAttribute('style', `background-position: -${Image*imageHeight}px 0px`);
    }, auto);
})();