var text = "FOR BEST RESULT \nPC Input Limit : 50  \nMobile Limit : 25"
alert(text);
function star() {
    var inp = document.getElementById('input').value;
    console.log(inp);

    var starPattern = "";
    if (inp == 0) {
        starPattern="INVALID INPUT";
    }
    else {

        for (var i = 0; i < inp; i++) {
            for (var j = 1; j <= inp; j++) {
                if ((i + j) >= inp) {
                    starPattern += "* ";
                } else {
                    starPattern += " ";
                }
            }
            starPattern += "<br>";
        }
    }
        document.querySelector('.star').innerHTML = starPattern;
}
