function hideAll() {
    $("#telaInicial").hide();
    $("#telaEsqueceuSenha").hide();
    $("#telaCadastro").hide();
    $("#telaRedefinirSenha").hide();
    $("#telaEmail").hide();
    $("#telaSenhaRedefinidaSucesso").hide();
    $(".header").show();
    $(".footer").show();
}


$(".cnpj-only").hide();


//$('.if-cep input[type=text]').attr("disabled", true);
$(".if-cep").hide();


$("#cep").change(function(event) {
    //$('.if-cep input[type=text]').attr("disabled", false);
    $(".if-cep").show();


    $("#rua").val("Rua jose berreto parente");
    //$("#numero").val("210");
    $("#bairro").val("Vila mariana");
    $("#cidade").val("São Paulo");
    $("#estado").val("São Paulo");
    $("#pais").val("Brasil");
});



$("#recuperar").click(function() {
	hideAll();
    $("#telaEmail").show();
    $(".header").hide();
    $(".footer").hide();
});

$("#esqueceu").click(function() {
	hideAll();
    $("#telaEsqueceuSenha").show();
});

$("#redefinir").click(function() {
	hideAll();
    $("#telaSenhaRedefinidaSucesso").show();
});



$("#recuperarSenha").click(function() {
	hideAll();
    $("#telaRedefinirSenha").show();
});

$("#cadastro").click(function() {
	hideAll();
    $("#telaCadastro").show();
});

$("#opcaoCPF, #opcaoCNPJ").click(function() {
    $("#opcaoCPF").toggleClass('active btn-gray');
    $("#opcaoCNPJ").toggleClass('active btn-gray');

    $(".cpf-only").toggle();
    $(".cnpj-only").toggle();

});

hideAll();
$("#telaInicial").show();