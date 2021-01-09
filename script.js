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

function afficheExCode(nomLangage)
{
    $('tr#' + nomLangage).show()
}

$('tr#html').hide()

$('img#html').on('click', function() { imageFullScreen('html') })
$('h3#html').on('click', function() { afficheExCode('html') })