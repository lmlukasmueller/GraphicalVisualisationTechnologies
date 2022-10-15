(function () {

    const auto = 150;
    const allImages = 24;
    const imageWidth =  200;
    const imageHeight = 200;


    var image_dom = document.getElementById('sprite');
    var Image = 0;
    update();

    var active = false;
    var interval = 0;

    /**
     * Listener für Tastatureingabe 
     */
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'r':
                // Rechts
                drehR();
                break;
            case 'l':
                //Links
                drehL();
                break;
            case 'a':
                // Automatisch
                Auto();
                break;
        }
    });

    /**
     * Uhrzeigerrichtig
     */
    function drehL() {
        Image++;
        if (Image >= allImages) Image = 0;
        update();
    }

    /**
     * Gegen den drehL
     */
    function drehR() {
        Image--;
        if (Image < 0) Image = allImages - 1;
        update();
    }

    function Auto() {
        active = !active;
        if (!active) clearInterval(interval);
        else {
            interval = window.setInterval(function() {
                drehL();
            }, auto);
        }
    }

    function update() {
        image_dom.setAttribute('style', `background-position: -${Image*imageWidth}px 0px`);
    }

})();