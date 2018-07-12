function mostra_tradizioni()
{
    //mostra o nasconde il sottomenu delle tradizioni
    if($("#tradizioni_submenu").is(':visible') && $("#submenu").is(':visible'))
    {
        $("#tradizioni_submenu").fadeOut("slow");
        document.getElementById("canti_submenu").style.display="none";
        document.getElementById("natale_nel_mondo_submenu").style.display="none";
        document.getElementById("riferimenti_biblici_submenu").style.display="none";
        $("#submenu").fadeOut("slow");
    }
    else
    {
        $("#tradizioni_submenu").fadeIn("slow");
        document.getElementById("canti_submenu").style.display="none";
        document.getElementById("natale_nel_mondo_submenu").style.display="none";
        document.getElementById("riferimenti_biblici_submenu").style.display="none";
        $("#submenu").fadeIn("slow");
    }
}
function mostra_canti()
{
    //mostra o nasconde il sottomenu dei canti
    if($("#canti_submenu").is(':visible') && $("#submenu").is(':visible'))
    {
        $("#canti_submenu").fadeOut("slow");
        document.getElementById("tradizioni_submenu").style.display="none";
        document.getElementById("natale_nel_mondo_submenu").style.display="none";
        document.getElementById("riferimenti_biblici_submenu").style.display="none";
        $("#submenu").fadeOut("slow");
    }
    else
    {
        $("#canti_submenu").fadeIn("slow");
        document.getElementById("tradizioni_submenu").style.display="none";
        document.getElementById("natale_nel_mondo_submenu").style.display="none";
        document.getElementById("riferimenti_biblici_submenu").style.display="none";
        $("#submenu").fadeIn("slow");
    }
}
function mostra_natalemondo()
{
    //mostra o nasconde il sottomenu del natale nel mondo
    if($("#natale_nel_mondo_submenu").is(':visible') && $("#submenu").is(':visible'))
    {
        $("#natale_nel_mondo_submenu").fadeOut("slow");
        document.getElementById("canti_submenu").style.display="none";
        document.getElementById("tradizioni_submenu").style.display="none";
        document.getElementById("riferimenti_biblici_submenu").style.display="none";
        $("#submenu").fadeOut("slow");
    }
    else
    {
        $("#natale_nel_mondo_submenu").fadeIn("slow");
        document.getElementById("canti_submenu").style.display="none";
        document.getElementById("tradizioni_submenu").style.display="none";
        document.getElementById("riferimenti_biblici_submenu").style.display="none";
        $("#submenu").fadeIn("slow");
    }
}
function mostra_riferimentibiblici()
{
    //mostra o nasconde il sottomenu dei riferimenti biblici
    if($("#riferimenti_biblici_submenu").is(':visible') && $("#submenu").is(':visible'))
    {
        $("#riferimenti_biblici_submenu").fadeOut("slow");
        document.getElementById("canti_submenu").style.display="none";
        document.getElementById("natale_nel_mondo_submenu").style.display="none";
        document.getElementById("tradizioni_submenu").style.display="none";
        $("#submenu").fadeOut("slow");
    }
    else
    {
        $("#riferimenti_biblici_submenu").fadeIn("slow");
        document.getElementById("canti_submenu").style.display="none";
        document.getElementById("natale_nel_mondo_submenu").style.display="none";
        document.getElementById("tradizioni_submenu").style.display="none";
        $("#submenu").fadeIn("slow");
    }
}
