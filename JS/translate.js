function translate_page(lang)
{
	var url = self.location;
    var base = document.getElementsByTagName('base');
    if(base.length>0)
    {
    	url = base[0].href;
    }
	top.location='http://www.google.com/translate?hl=fr&sl=auto&tl='+lang+'&u='+url;
    return true;
}
var html_389 = "<a style=\"cursor:pointer;margin:1px;display:inline-block;\" onclick=\"translate_page(\'en\');\"><div style=\"width:38px;height:28px;background:url(\'http://services.webestools.com/translator/styles/images/s4.png\');background-position:-0px 0px;display:inline-block;padding:0px;margin:0px;\" onmouseover=\"this.style.backgroundPosition=\'-0px -28px\';\" onmouseout=\"this.style.backgroundPosition=\'-0px 0px\';\" alt=\"English\"></div></a><a style=\"cursor:pointer;margin:1px;display:inline-block;\" onclick=\"translate_page(\'es\');\"><div style=\"width:38px;height:28px;background:url(\'http://services.webestools.com/translator/styles/images/s4.png\');background-position:-38px 0px;display:inline-block;padding:0px;margin:0px;\" onmouseover=\"this.style.backgroundPosition=\'-38px -28px\';\" onmouseout=\"this.style.backgroundPosition=\'-38px 0px\';\" alt=\"Espa&ntilde;ol\"></div></a>";
document.getElementById('translator_389').innerHTML=html_389;