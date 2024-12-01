<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";

const isOpen = ref(false);
let spans = [];
let dropdownMenu = null;
let dropdownItems = [];

const toggleMenu = async () => {
  if (!isOpen.value) {
    isOpen.value = true;
    await nextTick();
    dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownItems = document.querySelectorAll(".dropdown-item");
    openAnimation();
  } else {
    closeAnimation();
  }
};

const openBurgerAnimation = () => {
  gsap.to(spans[0], {
    left: "5px",
    top: "7px",
    rotation: 45,
    duration: 0.1,
    backgroundColor: "white",
  });
  gsap.to(spans[1], {
    left: "calc(50% - 5px)",
    top: "7px",
    rotation: -45,
    duration: 0.1,
    backgroundColor: "white",
  });
  gsap.to(spans[2], {
    left: "-50%",
    opacity: 0,
    duration: 0.1,
    backgroundColor: "white",
  });
  gsap.to(spans[3], {
    left: "100%",
    opacity: 0,
    duration: 0.1,
    backgroundColor: "white",
  });
  gsap.to(spans[4], {
    left: "5px",
    top: "29px",
    rotation: -45,
    duration: 0.1,
    backgroundColor: "white",
  });
  gsap.to(spans[5], {
    left: "calc(50% - 5px)",
    top: "29px",
    rotation: 45,
    duration: 0.1,
    backgroundColor: "white",
  });
};

const closeBurgerAnimation = () => {
  gsap.to(spans[0], {
    left: "0px",
    top: "0px",
    rotation: 0,
    duration: 0.1,
    backgroundColor: "black",
  });
  gsap.to(spans[1], {
    left: "50%",
    top: "0px",
    rotation: 0,
    duration: 0.1,
    backgroundColor: "black",
  });
  gsap.to(spans[2], {
    left: "0px",
    opacity: 1,
    duration: 0.1,
    backgroundColor: "black",
  });
  gsap.to(spans[3], {
    left: "50%",
    opacity: 1,
    duration: 0.1,
    backgroundColor: "black",
  });
  gsap.to(spans[4], {
    left: "0px",
    top: "36px",
    rotation: 0,
    duration: 0.1,
    backgroundColor: "black",
  });
  gsap.to(spans[5], {
    left: "50%",
    top: "36px",
    rotation: 0,
    duration: 0.1,
    backgroundColor: "black",
  });
};

const openAnimation = () => {
  openBurgerAnimation();

  gsap.fromTo(
    dropdownMenu,
    { y: "-100%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 0.3, ease: "power2.out" }
  );

  gsap.fromTo(
    dropdownItems,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.2,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.3,
    }
  );
};

const closeAnimation = () => {
  gsap.to(dropdownItems, {
    y: "-100%",

    duration: 0.3,
    ease: "power2.in",
  });

  gsap.to(dropdownMenu, {
    y: "-100%",
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",

    onComplete: () => {
      isOpen.value = false;
    },
  });

  closeBurgerAnimation();
};

onMounted(() => {
  spans = document.querySelectorAll(".burger span");
});
</script>

<template>
  <v-row align="center" justify="space-between" class="header d-flex">
    <v-col cols="4">
      <img
        src="../assets/lfLogo.png"
        class="logo mt-5 ms-5"
        alt="Logo Lionel Feuga"
      />
    </v-col>

    <v-col cols="4" class="d-flex justify-end me-5">
      <div class="burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div v-show="isOpen" class="dropdown-menu d-flex-lg ga-7">
        <div class="dropdown-item">Accueil</div>
        <div class="dropdown-item">À propos</div>
        <div class="dropdown-item">Compétences</div>
        <div class="dropdown-item">Portfolio</div>
        <div class="dropdown-item">Contactez-moi</div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.logo {
  height: 5.25rem;
  border-radius: 999px;
}

.dropdown-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  opacity: 0;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  font-size: 3.5rem;
  color: white;
  font-weight: 700;
  position: relative;
  opacity: 0;
}

.dropdown-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background-color: white;
  transition: width 0.3s ease;
}

.dropdown-item:hover {
  transform: scale(1.1);
  color: #f0a500;
}

.dropdown-item:hover::after {
  width: 100%;
}

.burger {
  position: relative;
  width: 60px;
  height: 45px;
  cursor: pointer;
  z-index: 1001;
  transition: ease 0.3s;
}

.burger:hover {
  transform: scale(1.05);
}

.burger span {
  display: block;
  position: absolute;
  height: 7px;
  width: 50%;
  background-color: black;
  opacity: 1;
  border-radius: 0 9px 9px 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.burger span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

.burger span:nth-child(even) {
  left: 50%;
}

.burger span:nth-child(1),
.burger span:nth-child(2) {
  top: 0px;
}

.burger span:nth-child(3),
.burger span:nth-child(4) {
  top: 18px;
}

.burger span:nth-child(5),
.burger span:nth-child(6) {
  top: 36px;
}
</style>
