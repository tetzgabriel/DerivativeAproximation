var pontos = "0";
var calculo = "central";

function getPontos(selectObject) {
    pontos = selectObject.value;
    document.getElementById("calculo").disabled = false;  
}

function getCalculo(selectObject) {
    calculo = selectObject.value;

    createTable();
}

function createTable() {
    if(pontos == "2"){
        if(calculo == "progressiva") {
            document.getElementById("error").style.display = "none";  
            document.getElementById("3pontosRegr").style.display = "none";            
            document.getElementById("3pontosProg").style.display = "none";

            document.getElementById("2pontosRegr").style.display = "none";            
            document.getElementById("2pontosCent").style.display = "none";
            document.getElementById("2pontosProg").style.display = "flex";
        } else if(calculo == "central") {
            document.getElementById("error").style.display = "none";  
            document.getElementById("3pontosRegr").style.display = "none";            
            document.getElementById("3pontosProg").style.display = "none";
            
            document.getElementById("2pontosRegr").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";            
            document.getElementById("2pontosCent").style.display = "flex";
        } else if(calculo == "regressiva") {
            document.getElementById("error").style.display = "none";
            document.getElementById("3pontosRegr").style.display = "none";            
            document.getElementById("3pontosProg").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "flex";            
        }
    } else {
        if(calculo == "progressiva") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "none";

            document.getElementById("3pontosRegr").style.display = "none";            
            document.getElementById("3pontosProg").style.display = "flex";
        } else if(calculo == "central") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "none";
            
            document.getElementById("3pontosRegr").style.display = "none";            
            document.getElementById("3pontosProg").style.display = "none";  
            
            document.getElementById("error").style.display = "flex";  
        } else if(calculo == "regressiva") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "none";
            
            document.getElementById("3pontosProg").style.display = "none";  
            document.getElementById("3pontosRegr").style.display = "flex";            
        }
    }
}

function calcula() {
    if(pontos == "2"){
        if(calculo == "progressiva") {
            calculaProg2();
        } else if(calculo == "central") {
            calculaCent2();
        } else if(calculo == "regressiva") {
            calculaRegr2();
        }
    } else {
        if(calculo == "progressiva") {
            calculaProg3();
        } else if(calculo == "central") {
            alert("Selecione um m??todo v??lido");
            document.getElementById("result-explanation").style.display = "none";
            document.getElementById("result-section").style.display = "none";
        } else if(calculo == "regressiva") {
            calculaRegr3();
        }
    }
}

function calculaProg2() {
    var result;

    const x = document.getElementById("xProg2").value;
    const fx = document.getElementById("f(x)Prog2").value;

    const xi = document.getElementById("x+iProg2").value;
    const fxi = document.getElementById("f(x+i)Prog2").value;
    if (x == "" || fx == "" || xi == "" || fxi == "") {
        document.getElementById("result-explanation").style.display = "block";
        result = "(f(x+i) - f(x))/((x+i) - x)";
    } else {
        document.getElementById("result-explanation").style.display = "none";
        result = (fxi - fx)/(xi - x);
    }
    showResult(result);
}

function calculaCent2() {
    var result;

    const ix = document.getElementById("x-iCent2").value;
    const fix = document.getElementById("f(x-i)Cent2").value;

    const xi = document.getElementById("x+iCent2").value;
    const fxi = document.getElementById("f(x+i)Cent2").value;

    if (ix == "" || fix == "" || xi == "" || fxi == "") {
        document.getElementById("result-explanation").style.display = "block";
        result = "(f(x+i) - f(x-i))/((x+i) - (x-i))";
    } else {
        document.getElementById("result-explanation").style.display = "none";
        result = (fxi - fix)/(xi - ix);
    }
    showResult(result);
}

function calculaRegr2() {
    var result;

    const ix = document.getElementById("x-iRegr2").value;
    const fix = document.getElementById("f(x-i)Regr2").value;

    const x = document.getElementById("xRegr2").value;
    const fx = document.getElementById("f(x)Regr2").value;

    if (x == "" || fx == "" || ix == "" || fix == "") {
        document.getElementById("result-explanation").style.display = "block";
        result = "(f(x) - f(x-i))/(x - (x-i))";
    } else {
        document.getElementById("result-explanation").style.display = "none";
        result = (fx - fix)/(x - ix);
    }
    showResult(result);
}

function calculaProg3() {
    var result;

    const x = document.getElementById("xProg3").value;
    const fx = document.getElementById("f(x)Prog3").value;

    const xi = document.getElementById("x+iProg3").value;
    const fxi = document.getElementById("f(x+i)Prog3").value;

    const fx2i = document.getElementById("f(x+2i)Prog3").value;

    if(x == "" || fx == "" || xi == "" || fxi == "" || fx2i == "") {
        document.getElementById("result-explanation").style.display = "block";
        result = "(-3f(x)+4f(x+1)-f(x+2i))/2h";
    } else {
        document.getElementById("result-explanation").style.display = "none";
        result = ((-3*fx)+(4*fxi) - fx2i)/(2*(xi - x));
    }
    showResult(result);
}

function calculaRegr3() {
    var result;

    const x = document.getElementById("xRegr3").value;
    const fx = document.getElementById("f(x)Regr3").value;

    const xi = document.getElementById("x-iRegr3").value;
    const fxi = document.getElementById("f(x-i)Regr3").value;

    const fx2i = document.getElementById("f(x-2i)Regr3").value;

    
    if(x == "" || fx == "" || xi == "" || fxi == "" || fx2i == "") {
        result = "(f(x-2i) - 4f(x-i) + 3f(x))/2h";
        document.getElementById("result-explanation").style.display = "block";
    } else {
        document.getElementById("result-explanation").style.display = "none";
        result = (fx2i - 4*fxi + 3*fx)/(2*(x - xi));
    }

    showResult(result);
}

function showResult(result) {
    document.getElementById("result-section").style.display = "block";
    document.getElementById("result").textContent = "Resultado: " + result;
}