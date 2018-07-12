
function stats_start(id)


{

window.localStorage.setItem("power", 5);
window.localStorage.setItem("dex", 5);
window.localStorage.setItem("wiz", 5);
window.localStorage.setItem("hp", 5);
window.localStorage.setItem("statpoint", 10);



}


function get_power_plus(id)


{



var key = "power"

var p = window.localStorage.getItem(key);
var s = window.localStorage.getItem("statpoint");

if (s>0 && p<10) {


p = p*1+1

$("#power").val(p)


window.localStorage.setItem(key, p);

statpoint_minus(id)
}

}

function get_dex_plus(id)
{
var key = "dex"

var d = window.localStorage.getItem(key);
var s = window.localStorage.getItem("statpoint");

if (s>0 && d<10) {


d = d*1+1

$("#dex").val(d)


window.localStorage.setItem(key, d);

statpoint_minus(id)
}

}


function get_wiz_plus(id)
{
var key = "wiz"

var w = window.localStorage.getItem(key);

var s = window.localStorage.getItem("statpoint");

if (s>0 && w<10) {


w = w*1+1

$("#wiz").val(w)


window.localStorage.setItem(key, w);

statpoint_minus(id)
}
}


function get_hp_plus(id)
{
var key = "hp"

var h = window.localStorage.getItem(key);

var s = window.localStorage.getItem("statpoint");

if (s>0 && h<10) {

h = h*1+1

$("#hp").val(h)


window.localStorage.setItem(key, h);

statpoint_minus(id)

}
}

function get_power_minus(id)
{
var key = "power"

var p = window.localStorage.getItem(key);


var s = window.localStorage.getItem("statpoint");

if (p>2) {

p = p*1-1

$("#power").val(p)


window.localStorage.setItem(key, p);

statpoint_plus(id)
}
}


function get_dex_minus(id)
{
var key = "dex"

var d = window.localStorage.getItem(key);

var s = window.localStorage.getItem("statpoint");

if (d>2) {


d = d*1-1

$("#dex").val(d)


window.localStorage.setItem(key, d);

statpoint_plus(id)
}
}


function get_wiz_minus(id)
{
var key = "wiz"

var w = window.localStorage.getItem(key);

var s = window.localStorage.getItem("statpoint");

if (w>2) {

w = w*1-1

$("#wiz").val(w)


window.localStorage.setItem(key, w);

statpoint_plus(id)

}
}


function get_hp_minus(id)
{
var key = "hp"

var h = window.localStorage.getItem(key);

var s = window.localStorage.getItem("statpoint")

if (h>2) {

h = h*1-1

$("#hp").val(h)


window.localStorage.setItem(key, h);

statpoint_plus(id)
}
}



function clear_stat()
{

window.localStorage.clear();

}


function statpoint_plus(id)


{

var key = "statpoint"

var s = window.localStorage.getItem(key);


s = s*1+1

$("#statpoint").val(s)


window.localStorage.setItem(key, s);

}



function statpoint_minus(id)


{

var key = "statpoint"

var s = window.localStorage.getItem(key);


s = s*1-1

$("#statpoint").val(s)


window.localStorage.setItem(key, s);
}


