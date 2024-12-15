<script setup>

</script>

<template>
     <v-row class="ma-auto top-container">
        <v-col
          class="d-flex flex-column align-center justify-center"
        >
          <p class="hello outlined-text text-center">Hello !<br />Moi c'est</p>
          <div class="names d-flex ga-2 pe-1">
            <h1
              class="firstName outlined-text"
              style="color: #17b9f9; text-decoration: underline"
            >
              Lionel
            </h1>
            <h1
              class="lastName outlined-text"
              style="color: #fe6e1f; text-decoration: underline"
            >
              Feuga
            </h1>
          </div>
          <p class="text-center outlined-text" style="font-size: 2rem;
          ">
            𝑫é𝒗𝒆𝒍𝒐𝒑𝒑𝒆𝒖𝒓 𝒘𝒆𝒃 <br />
            𝑭𝒖𝒍𝒍-𝑺𝒕𝒂𝒄𝒌
          </p>
          <div class="cta-btn mt-2 py-3 px-6">Me contacter</div>
        </v-col>
        
     
      </v-row>
</template>

<style scoped>
.top-container {
  max-height: 100dvh;
  min-height: 100dvh;
  max-width: 100dvw;
  background-color: #ffffff;
  background: none;
}

.hello {
  letter-spacing: -3px;
  font-size: 2.5rem;
}

.names {
  letter-spacing: -01px;
  font-size: 2.8rem;
  font-family: "Bebas Neue", serif;
}

.cta-btn {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  background: #124E78;   

  border-radius: 500px;
  cursor: pointer;
  transition: 0.3s ease;
}

.cta-btn:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px 9px #E8C547;
}

@media (max-width: 500px) {
  .hide-on-small {
    display: none !important;
  }
}
</style>