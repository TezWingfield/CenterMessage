/* Terry Wingfield http://www.tezwingfield.co.uk Plugin to show messages*/
(function ($)
{
    $.fn.centerMe = function (options)
    {
        //Default settings
        var settings = $.extend(
            {
                image: "csloader.gif",
                width: '100%',
                message: "Well Done Complete", 
                seconds: 2000,
                position: 'fixed',
                top: '10%',
                bgColor: '#32CD32',
                fontColor: '#fff',
                type: 'alert'
            }, options);

        //Return item
        return this.each(function ()
        {
            if ($(this).is('body'))
            {
                var img = "";
                if (settings.type == "insert")
                {
                    img = "<img src='/images/" + settings.image + "'" + "width='75' alt='Pending request' title='Pending request'/>";
                }

                //Create Message HTML
                $(this).append("<div class='overlay'></div>");
                $('.overlay').show();
                $(this).append("<div class='center-me-wrapper'><p class='center-me-content'>" + img + settings.message + "</p></div>");

                //Target newly created container HTML
                $('.center-me-wrapper').css(
                    {
                        position: settings.position,
                        top: settings.top,
                        width: settings.width
                    });

                $('.center-me-wrapper').css('background-color', settings.bgColor);
                $('.center-me-wrapper').css('color', settings.fontColor);

                //Wait x seconds then fade and remove
                setTimeout(function () {
                    $('.overlay').fadeOut("normal", function ()
                    {
                        $(this).remove();
                    });
                    $('.center-me-wrapper').fadeOut("normal", function () {
                         $(this).remove();
                    });
                }, settings.seconds);
            }
        });
    }
})(jQuery);