function laiks() {
    var then = new Date(now);
    var now = new Date();
    then.setHours(21, 0, 0, 0);
    time = then - now;
    var hours = Math.floor( (time/(1000*60*60)) % 24 );
    var minutes = Math.floor( (time/1000/60) % 60 );
    var seconds = Math.floor( (time/1000) % 60 );
    str = hours + ":" + minutes + ":" + seconds
    document.getElementById("laiks").innerHTML = str;
}
setInterval(laiks, 1000);