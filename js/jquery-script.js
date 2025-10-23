//efeito de esconder formulário de cadastro
 $(document).ready(function(){
 $("#botao-cadastrar").click(function(){
 $("#form-cadastrar").slideToggle("slow");
 $("#section-login").slideToggle("slow");
 $("#botao-cadastrar").hide();
 });
 });

  <input type="button"value="Cadastrar"class="btn btn-primary"id="bt-cadastrar"
 onclick="cadastro()" />

 function cadastro() {
 alert("Cadastrado com sucesso!");
 window.location.href ="index.html";
 }
