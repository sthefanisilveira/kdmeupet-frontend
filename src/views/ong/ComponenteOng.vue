<template>
  <div class="ong">
    <div class="info1-ong">
      <p>Data de cadastro: 12/12/2012</p>
      <img src="../../assets/ong.jpg" width="344" height="351" />
    </div>
    <div class="info2-ong">
      <ul>
        <li>
          <p>Abrigo Animal Joinville</p>
          <p>Sthéfani Silveira</p>
          <p>R. Coronel Camacho, 246 - Centro</p>
          <p>34352635 | abrigo@animal.com</p>
          <p>abrigoanimal.com.br</p>
        </li>
      </ul>
    </div>
    <div class="info3-ong">
      <p>ONG de Joinville destinada a receber animais de rua Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi nam iste labore quis eveniet dignissimos voluptas at praesentium aliquid aut vero reprehenderit cumque aspernatur perferendis pariatur, porro vel aliquam.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponenteOng',
}
</script>

<style>

.ong {
  margin-left: 50px;
  margin-right: 50px;
  border: solid 1px grey;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 40px;
  background: #fafafa;
  padding: 30px;
}

.ong p {
  text-align: left;
}
.info2-ong {
  padding-left: 30px;
  display: flex;
  align-items: center;
  width: 400px;
}
.info3-ong {
  display: flex;
  align-items: center;
  width: 400px;
}
</style>