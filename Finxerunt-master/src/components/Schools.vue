<template>
  <h1 class="supporters-header">With the Support of Faculty At</h1>
  <div class="schools">
    <img
        src="../assets/images/City_College_of_New_York_seal_Logo.png"
        id="city-college-of-new-york-seal-logo"
    />
    <img
        src="../assets/images/Columbia_University_Logo.png"
        id="columbia-university-logo"
    />
    <img
        src="../assets/images/Fordham_University_Logo.png"
        id="fordham-university-logo"
    />
    <img
        src="../assets/images/NYU_Logo.png"
        id="nyu-logo"
    />
    <img
        src="../assets/images/Manhattan_Collage_Logo.jpg"
        id="manhattan-collage-logo"
    />
  </div>
</template>

<script>
export default {
name: "Schools"
}
</script>

<style scoped>
.supporters-header {
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
}
.schools {
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  justify-content: space-around;
}
.schools img {
  height: 10vw;
}
#city-college-of-new-york-seal-logo {
  width: 10vw;
}
#columbia-university-logo {
  width: 11.55vw;
}
#fordham-university-logo {
  width: 7.7vw;
}
#nyu-logo {
  width: 10vw;
}

#manhattan-collage-logo {
  width: 13.35vw;
}

@media only screen and (max-width: 1000px) {
  .supporters-header {
    font-size: 1rem;
  }
}
</style>