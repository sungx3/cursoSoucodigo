// Responsável por adicionar os números na tela
function insert(num) {
    document.getElementById("resultado").value += num;
}

// Responsável por limpar todos os números da tela de uma vez 
function clean() {
    document.getElementById("resultado").value = "";
}

// Responável por limpar um número da tela por vez 
function back() {
    var exp = document.getElementById("resultado").value;
    document.getElementById("resultado").value = exp.substring(0, exp.length - 1);
}

// Responsável por calcular as expressões 
function calcular() {
    var exp = document.getElementById("resultado").value;
    if (exp) {
        document.getElementById("resultado").value =eval(exp);
    }
}

// Responsável por calcular a raiz quadrada do valor inserido
function raizQuadrada() {
    var valor = document.getElementById("resultado").value;
    document.getElementById("resultado").value = Math.sqrt(valor);
}

// Responsável por fazer a exponenciação
function pow() {
    var valor = document.getElementById("resultado").value;
    if(valor){
        document.getElementById("resultado").value = Math.pow(valor, 2);
    }
}

// Responsável pro calcular a porcentagem


function buscaposicao(result, operacao)
{
    var pos = result.indexOf("*");
    if (pos < 0){
        pos = result.indexOf("/"); 
        if (pos < 0){
            pos = result.indexOf("+"); 
            if (pos < 0){
                pos = result.indexOf("-");
            }
        }
    }
    return pos;
}

function buscaoperacao(result, operacao)
{
    var pos = result.indexOf("*");
    var op="*";
    if (pos < 0){
        pos = result.indexOf("/");
        op = "/"; 
            if (pos < 0){
            pos = result.indexOf("+");
            op = "+"; 
            if (pos < 0){
                pos = result.indexOf("-");
                op = "-";
                if (pos < 0){
                    op = "";
                }
            }
        }
    }
    return op;
}
function buscaresultado(num1,num2,op){
    if (op == "*"){
        return (num1 * (num2/100)); 
    }else{
        if (op == "/"){
            return ((num1*100) / (num2)); 
        }else{
            if (op == "+"){
                return (num1 + (num1 * (num2/100)));
            }else{
                if (op == "-"){
                    return (num1 - (num1 * (num2/100)));
                }else{
                    return (-1);
                }
            }
        }
    }
}
function percent()
{
    var resultado = document.getElementById("resultado").value;
    if (resultado){
        var tamanhoString = resultado.length;
        var posicao = buscaposicao(resultado);
        var operacao = buscaoperacao(resultado);
        var primeiroNumero = resultado.substr(0,(posicao))
        var segundoNumero = resultado.substr((posicao+1),(tamanhoString -1))
        if (primeiroNumero && segundoNumero){
            var b = buscaresultado(parseInt(primeiroNumero), 
                        parseInt(segundoNumero), operacao);
            document.getElementById("resultado").value = 
                            buscaresultado(parseInt(primeiroNumero), 
                            parseInt(segundoNumero), operacao);
        }
    }
}

// Responsável por calcular o Seno

function sin() {
    var valor = document.getElementById("resultado").value;
    if(valor){
        document.getElementById("resultado").value = Math.sin(valor);
    }
}

// Responsável por calcular o Cosseno

function cos() {
    var valor = document.getElementById("resultado").value;
    if (valor) {
        document.getElementById("resultado").value = Math.cos(valor);
    }
}

// Responsável por calcular a Tangente 

function tan() {
    var valor = document.getElementById("resultado").value;
    if (valor) {
        document.getElementById("resultado").value = Math.tan(valor);
    }
}
