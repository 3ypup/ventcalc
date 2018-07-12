function get_stat_plus(id)
{
var key = "stat"+ id

var x = window.localStorage.getItem(key);

x = x*1+1

$("#x").val(x)

window.localStorage.setItem(key, x);


}


function get_stat_minus(id)
{
var key = "stat"+ id

var x = window.localStorage.getItem(key);

x = x*1-1

$("#x").val(x)

window.localStorage.setItem(key, x);


}


