$(function () {
    var timer;
    var opacity;
    $("#start").click(function () {
        let width = $('#width').val();
        let growthSmount = $('#gamount').val();
        let growthrate = $('#rate').val();
        let numberOfCircle = $('#noCircle').val();
        for (let i = 0; i < numberOfCircle; i++) {
            createCircle(width, i * 100);
        }
        $("#circle").css("margin", "auto");
        eventHandler();
        if (!timer) {
            timer = setInterval(changeSize, growthrate, growthSmount);
        }
    });

    function createCircle(width, pos) {
        width += "px";
        $("#circle")
            .append(
                $("<span>", {
                    "css": {
                        "width": width,
                        "height": width,
                        "background-color": `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                        "border-radius": width,
                        "margin": "auto",
                        "text-align": "center",
                        "position": "absolute",
                        "left": Math.floor(Math.random() * screen.width) + "px",
                    }
                }
                ).attr('id', 'circ')
            );
    }

    function changeSize(value) {
        $("span")
            .css({
                "height": ((idx, old) => parseInt(old) + parseInt(value) + "px"),
                "width": ((idx, old) => parseInt(old) + parseInt(value) + "px"),
                "border-radius": ((idx, old) => parseInt(old) + parseInt(value) + "px")
            });
    }

    function eventHandler() {
        let time;
        $("#circle > span").hover(function () {
                if (!opacity) {
                    opacity = 1;
                }
                time = setInterval(opaque, 250, this, opacity)
            },
            function () {
                $(this).css("opacity", "1");
                clearInterval(time);
            });

        $("#circle > span").click(function () {
            $(this).hide()
        });
    }

    function opaque(arg, opacity) {
        opacity -= 0.5;
        $(arg).css("opacity", opacity)
    }
});
