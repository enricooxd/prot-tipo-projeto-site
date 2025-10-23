//efeito do botão voltar ao Topo
<button id="voltar-topo"type="button" class="btn btn-outline
primary"onclick="topo()">&uarr;Voltar ao topo</button>

 function topo() {
 window.scrollTo({
 top: 0,
 left: 0,
 behavior:'smooth'
 })
 }
//Validação de Login
<input type="button" value="login"class="btn btn-primary"id="bt
login" onclick="login()" />

function login(){
 var logado= 0;
 var usuario =document.getElementsByName('usuario')[0].value;
 usuario= usuario.toLowerCase();
 var senha = document.getElementById('senha').value;
 senha =senha.toLowerCase();
 if(usuario=="admin" && senha == "123456"){
 window.location= "index.html";
 logado= 1;
 }
 if(logado == 0){
 alert("Acesso Negado.Dadosincorretos");
 }
 }

//Ativar alert no botão cadastrar
 <div id="botao-cadastrar">
 <button type="button" class="btn btninfo">Não écadastrado ainda? Cadastre-se</button>
 </div>