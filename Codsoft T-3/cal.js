let d=document.getElementById("displaybox");
function display(val)
{
    d.value+=val;
}
function clearl()
{
    d.value=" ";
}
function calcu()
{
    d.value=eval(d.value);
}