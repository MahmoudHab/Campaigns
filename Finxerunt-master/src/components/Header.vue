<template>
  <header>
    <img
      alt="Finxerunt Policy Institute"
      class="logo"
      src="../assets/images/New_Logo.jpg"
    />
    <nav class="desktop">
      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about-us">About Us</router-link>
        </li>
        <li>
          <router-link to="/our-team">Our Team</router-link>
        </li>
        <li>
          <router-link to="/issues">Issues</router-link>
        </li>
        <li>
          <router-link to="/opportunities">Opportunities</router-link>
        </li>
        <li>
          <router-link to="/contact-us">Contact Us</router-link>
        </li>
        <li>
          <router-link to="education-campaign">Edu</router-link>
        </li>
      </ul>
    </nav>

    <button class="show-mobile-bar" @click="showMobileMenu">&#9776;</button>
    <nav class="mobile">
      <button class="hide-mobile-bar" @click="hideMobileMenu">X</button>

      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about-us">About Us</router-link>
        </li>
        <li>
          <router-link to="/our-team">Our Team</router-link>
        </li>
        <li>
          <router-link to="/issues">Issues</router-link>
        </li>
        <li>
          <router-link to="/opportunities">Opportunities</router-link>
        </li>
        <li>
          <router-link to="/contact-us">Contact Us</router-link>

        </li>
      </ul>
    </nav>

    <a
        href="https://www.gofundme.com/f/finxerunt?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link-tip"
    >
      <button>Donate</button>
    </a>

  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    showMobileMenu() {
      document.querySelector("nav.mobile").style.display = "initial";
      document.querySelector("button.hide-mobile-bar").style.display =
        "initial";
    },

    hideMobileMenu() {
      document.querySelector("nav.mobile").style.display = "none";
      document.querySelector("button.hide-mobile-bar").style.display = "none";
    }
  }
};
</script>

<style scoped>
nav.desktop {
  display: none;
}

nav.mobile {
  display: none;
  background: azure;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
nav.mobile > .nav-links {
  display: flex;
  flex-direction: column;
}

button.hide-mobile-bar {
  display: none;
}

@media only screen and (min-width: 780px) {
  nav.mobile {
    display: none;
  }

  nav.desktop {
    display: initial;
  }

  button.show-mobile-bar {
    display: none;
  }
}

li,
a,
button {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  /* helps adjust size when different screens */
  flex-wrap: wrap;
}

.nav-links {
  /* browser was adding extra padding on left */
  padding: 0;
  list-style: none;
}
.nav-links li {
  transition: all 0.3s ease 0s;
  cursor: pointer;
  display: inline-block;
  padding: 1rem;
  border-radius: 5px;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
}

.nav-links li:hover {
  border-bottom: #ff8800 5px solid;
}

.nav-links li a {
  transition: all 0.3s ease 0s;
}

.nav-links li:hover a {
  color: #ff8800;
  cursor: pointer;
}

.logo {
  height: 125px;
  width: 222px;
}
</style>