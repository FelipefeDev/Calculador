 $(function (){
      $("button").on("click", function () {
        let digito = $(this).html();
        let novo_valor = $('#calcular').val() + digito;

        $("#calcular").val(novo_valor);
      });


 });