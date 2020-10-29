<template>
  <div class="register">
    <section class="bg-credentials">
      <div class="credentials-content">
        <h1>Cadê meu Pet?</h1>
        <p>Seu bichinho a um clique!</p>
      </div>
    </section>

    <section class="bg-form">
      <div class="bg-formContent">
        <h1>Cadastre-se!</h1>
      <form>

        <label for="" class="required">Qual é seu perfil?</label> <br>
        <input type="radio" value="1" name="ong">Sou Ong
        <input type="radio" value="2" name="pet_lover">Quero adotar
        <br> <br>


        <label for="">Nome:</label> <br>
        <input type="text" requrired>

        <!-- <div class="form-valid--error">
          <p>O campo nome é obrigatório</p>
        </div> -->


        <label for="">Email:</label><br>
        <input type="email"
              required>
        <br><br>

        <label for="">Senha:</label><br>
        <input type="password"
              minlength="6"
              maxlength="24"
              required> <br><br>

        <label for="">Confirme sua senha:</label><br>
        <input type="password"
              minlength="6"
              maxlength="24"><br><br>

        <div class="center-content">
          <button id="js-submitItem">Salvar</button>
        </div>
      </form>
      <div class="footer-register"> Já possui conta? <a href="/login"> Realizar Login</a></div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'Register',

}
</script>

<style scoped>
.register {
  display: flex;
}

.bg-credentials {
	background: url('../../assets/register-cover.jpeg') center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 50vw;
	height: 100vh;
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.credentials-content {
	padding: 10px;
}

.credentials-content h1 {
	color: #fff;
	font-size: 5em;
	text-shadow: 2px 1px #222;
}

.credentials-content p {
	color: #fff;
	letter-spacing: 4px;
	font-size: 1.4em;
	text-shadow: 1px 1px #222;
	padding-left: 20px;
	padding-bottom: 0;
}


.bg-form {
	width: 50vw;
	height: 100vh;
	border-top: 1px solid #eee;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

.bg-formContent {
	width: 400px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

h1 {
	color: #222;
	font-size: 2em;
	text-align: center;
}

p {
	padding: 20px 0;
	text-align: center;
}

button {
	margin-top: 20px;
	width: 160px;
	background: #3498db;
	color: #fff;
	padding: 10px;
	border: transparent;
	font-size: 1em;
	cursor: pointer;
}


label {
	color: #95a5a6;
	font-size: .8em;
	font-weight: bold;
}

.required::after {
	content: '*';
	padding-left: 5px;
	color: #e74c3c;
	font-size: 1.3em
}

input {
	background: transparent;
	border: 0;
	border-bottom: 1px solid #3498db;
	width: 400px;
	height: 30px;
	font-size: 1.4em;
}

input:focus {
  outline: none;
	border-bottom: 2px solid #34495e;
}

.center-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.form-valid--error {
	font-size: .9em;
	color: red;
}

.form-valid--error p {
	text-align: left;
	font-size: .9em;
	color: red;
}

.footer-register {
  margin-top: 50px;

}
</style>
