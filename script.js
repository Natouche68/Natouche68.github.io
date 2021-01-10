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
$('tr#css').hide()
$('tr#javascript').hide()
$('tr#php').hide()
$('tr#sql').hide()
$('tr#csharp').hide()
$('tr#python').hide()

$('img#html').on('click', function() { imageFullScreen('html') })
$('h3#html').on('click', function() { afficheExCode('html') })
$('img#css').on('click', function() { imageFullScreen('css') })
$('h3#css').on('click', function() { afficheExCode('css') })
$('img#javascript').on('click', function() { imageFullScreen('javascript') })
$('h3#javascript').on('click', function() { afficheExCode('javascript') })
$('img#php').on('click', function() { imageFullScreen('php') })
$('h3#php').on('click', function() { afficheExCode('php') })
$('img#sql').on('click', function() { imageFullScreen('sql') })
$('h3#sql').on('click', function() { afficheExCode('sql') })
$('img#csharp').on('click', function() { imageFullScreen('csharp') })
$('h3#csharp').on('click', function() { afficheExCode('csharp') })
$('img#python').on('click', function() { imageFullScreen('python') })
$('h3#python').on('click', function() { afficheExCode('python') })