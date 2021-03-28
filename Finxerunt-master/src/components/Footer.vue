<template>
  <footer>
    <nav>
      <ul class="compact-flex-container">
        <li class="flex-item">
          <a href="https://www.instagram.com/finxerunt/"
            ><i class="fa fas fa-instagram fa-2x" aria-hidden="true"></i
          ></a>
        </li>
        <li class="flex-item">
          <a href="https://www.facebook.com/finxeruntpolicy/"
            ><i class="fa fab fa-facebook-f fa-2x" aria-hidden="true"></i
          ></a>
        </li>
        <li class="https://twitter.com/finxeruntpolicy">
          <a href="#"><i class="fa fas fa-twitter fa-2x"></i></a>
        </li>
        <li class="flex-item">
          <a href="https://www.linkedin.com/company/finxerunt"><i class="fa fas fa-linkedin fa-2x"></i></a>
        </li>
        <li class="flex-item">
          <a href="#"><i class="fa fas fa-envelope fa-2x"></i></a>
        </li>
      </ul>
    </nav>
    <ul class="footer-flex">
      <li>Copyright © 2017 Finxerunt, Inc.</li>
      <li>Terms & Conditions | Privacy Policy</li>
      <li>Info@finxerunt.org - (646) 450-5871</li>
      <li>
        <router-link to="/contact-us">Contact Us</router-link>
      </li>
      <li>Tax ID: 85-3527102</li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
* {
  color: #004766;
  font-family: sans-serif;
  margin-bottom: 0;
}

html,
body {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
  display: inline;
}

a {
  text-decoration: none;
}

h1 {
  display: flex;
  justify-content: space-around;
  padding: 50px;
  font-weight: normal;
  font-size: 48px;
}

.flex-item h1 {
  font-weight: normal;
}

.flex-item h2 {
  font-weight: bolder;
  font-size: 26px;
}

p {
  color: black;
  font-size: 16px;
  line-height: 1.5;
}

hr {
  height: 2px;
  margin: 0 75px;
  background: black;
  border-width: 0;
}

.compact-flex-container {
  display: flex;
  margin-top: 30px;
  justify-content: center;
}

.compact-flex-container .flex-item {
  padding: 5px;
}

footer {
  margin: 0;
  background: #ff8800;
}

.footer-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer li {
  padding: 15px;
  color: white;
}
</style>
