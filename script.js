function imageFullScreen(nomLangage)
{
    if (screen.width < screen.height)
    {
        $('body').html('<p><img src="images/logo_' + nomLangage + '.png" alt="" height=' + (screen.width - 200) + ' /></p>')
    }
    else
    {
        $('body').html('<p><img src="images/logo_' + nomLangage + '.png" alt="" height=' + (screen.height - 200) + ' /></p>')
    }
}

$('img#html').on('click', function() { imageFullScreen('html') })