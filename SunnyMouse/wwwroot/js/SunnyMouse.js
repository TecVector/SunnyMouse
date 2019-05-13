var boxElements = new Array();
var textElements = new Array();

$(document).ready(function () {
    boxElements = document.getElementsByClassName('sunnyMouseBox');
    textElements = document.getElementsByClassName('sunnyMouseText');
});

$('html').mousemove(function (event) {
    SetHighlights(event.pageX, event.pageY);
});

function SetHighlights(xPos, yPos) {
    for (var i = 0; i < boxElements.length; i++) {
        var btn = $(boxElements[i]);
        var ButtonPosition = btn.position();
        var buttonTop = parseInt(ButtonPosition.top);
        var buttonHeight = btn.outerHeight();
        var buttonBottom = ButtonPosition.top + buttonHeight;
        var buttonLeft = parseInt(ButtonPosition.left);
        var buttonWidth = btn.outerWidth();
        var maxOffsetX = btn.data('max-offsetx');
        var maxOffsetY = btn.data('max-offsety');
        var color = btn.data('highlight-color');
        var spread = btn.data('highlight-spread');
        var inset = btn.data('highlight-inset');
        var marginY = parseInt(btn.css('margin-top')) + parseInt(btn.css('margin-bottom'));
        var marginX = parseInt(btn.css('margin-left')) + parseInt(btn.css('margin-right'));
        var buttonCenterY = buttonTop + ((buttonHeight + marginY) / 2);
        var buttonCenterX = buttonLeft + ((buttonWidth + marginX) / 2);

        //Setting defaults
        if (color == null) {
            color = '#6f6f6f';
        }
        if (maxOffsetX == null) {
            maxOffsetX = 10;
        }
        if (maxOffsetY == null) {
            maxOffsetY = 10;
        }
        if (spread == null) {
            spread = 10;
        }
        if (inset == null) {
            inset = '';
        }
        var yOffset = maxOffsetY;
        var xOffset = maxOffsetX;


        //Setting up for Y Movement
        if (yPos < buttonCenterY) {
            var verticalShadow = ((buttonCenterY - yPos) / 10);
            if (verticalShadow >= maxOffsetY) {
                yOffset = maxOffsetY;
            } else {
                yOffset = verticalShadow;
            }
        }
        else if (yPos == buttonCenterY) {
            yOffset = 0;
        }
        else if (yPos > buttonCenterY) {
            var verticalShadow = ((buttonCenterY - yPos) / 10) * -1;
            if (verticalShadow >= maxOffsetY) {
                yOffset = maxOffsetY * -1;
            } else {
                yOffset = verticalShadow * -1;
            }
        };

        //Setting up for X Movement
        if (xPos < buttonCenterX) {
            var verticalShadow = ((buttonCenterX - xPos) / 10);
            if (verticalShadow >= maxOffsetY) {
                xOffset = maxOffsetX;
            } else {
                xOffset = verticalShadow;
            }
        }
        else if (xPos == buttonCenterX) {
            xOffset = 0;
        }
        else if (xPos > buttonCenterX) {
            var verticalShadow = ((buttonCenterX - xPos) / 10) * -1;
            if (verticalShadow >= maxOffsetY) {
                xOffset = maxOffsetX * -1;
            } else {
                xOffset = verticalShadow * -1;
            }
        };

        //Setting up the 'blur' effect based on distance
        var blurX = xOffset;
        var blurY = yOffset;
        if (blurX < 0) {
            blurX = blurX * -1;
        };
        if (blurY < 0) {
            blurY = blurY * -1;
        };
        var blur = Math.round((blurY + blurX) / 3);
        if (inset != "inset") {
            inset = "";
        };
        var styleTag = xOffset + "px " + yOffset + "px " + blur + "px " + spread + "px " + color + " " + inset;
        btn.css("box-shadow", styleTag);
    };


    for (var i = 0; i < textElements.length; i++) {
        var textToHightlight = $(textElements[i]);
        var ButtonPosition = textToHightlight.position();
        var buttonTop = parseInt(ButtonPosition.top);
        var buttonHeight = textToHightlight.outerHeight();
        var buttonBottom = ButtonPosition.top + buttonHeight;
        var buttonLeft = parseInt(ButtonPosition.left);
        var buttonWidth = textToHightlight.outerWidth();
        var maxOffsetX = textToHightlight.data('max-offsetx');
        var maxOffsetY = textToHightlight.data('max-offsety');
        var color = textToHightlight.data('highlight-color');
        var buttonCenterY = buttonTop + (buttonHeight / 2);
        var buttonCenterX = buttonLeft + (buttonWidth / 2);

        //Setting defaults
        if (color == null) {
            color = '#6f6f6f';
        }
        if (maxOffsetX == null) {
            maxOffsetX = 10;
        }
        if (maxOffsetY == null) {
            maxOffsetY = 10;
        }

        var yOffset = maxOffsetY;
        var xOffset = maxOffsetX;

        //Setting up for Y Movement
        if (yPos < buttonCenterY) {
            var verticalShadow = ((buttonCenterY - yPos) / 10);
            if (verticalShadow >= maxOffsetY) {
                yOffset = maxOffsetY;
            } else {
                yOffset = verticalShadow;
            }
        }
        else if (yPos == buttonCenterY) {
            yOffset = 0;
        }
        else if (yPos > buttonCenterY) {
            var verticalShadow = ((buttonCenterY - yPos) / 10) * -1;
            if (verticalShadow >= maxOffsetY) {
                yOffset = maxOffsetY * -1;
            } else {
                yOffset = verticalShadow * -1;
            }
        };

        //Setting up for X Movement
        if (xPos < buttonCenterX) {
            var verticalShadow = ((buttonCenterX - xPos) / 10);
            if (verticalShadow >= maxOffsetY) {
                xOffset = maxOffsetX;
            } else {
                xOffset = verticalShadow;
            }
        }
        else if (xPos == buttonCenterX) {
            xOffset = 0;
        }
        else if (xPos > buttonCenterX) {
            var verticalShadow = ((buttonCenterX - xPos) / 10) * -1;
            if (verticalShadow >= maxOffsetY) {
                xOffset = maxOffsetX * -1;
            } else {
                xOffset = verticalShadow * -1;
            }
        };

        //Setting up the 'blur' effect based on distance
        var blurX = xOffset;
        var blurY = yOffset;
        if (blurX < 0) {
            blurX = blurX * -1;
        };
        if (blurY < 0) {
            blurY = blurY * -1;
        };
        var blur = Math.round((blurY + blurX) / 1.5);
        textToHightlight.css("text-shadow", xOffset + "px " + yOffset + "px " + blur + "px " + color);
    };
}