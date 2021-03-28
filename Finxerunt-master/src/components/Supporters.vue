<template>
  <div class="supporters">
    <div class="supporters-container">
      <div
          v-for="supporter in supporters"
          v-bind:key="supporter.id"
          class="supporter-container"
      >
        <div class="left-side">
          <img
            alt="pfp"
            class="profile-picture"
            src="../assets/images/default-profile.png"
          />
          <div>
           <h1 class="name">{{ supporter.name }}</h1>
           <p class="position">{{ supporter.position }}</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="right-side">
          <p class="quote">{{ supporter.quote }}</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Supporters",
  props: ["supporters"],
};
</script>

<style scoped>
.profile-picture {
  border-radius: 100%;
  height: 250px;
  width: 250px;
  margin: 10px 0;
}

.supporters {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.supporters-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.supporter-container {
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  border: #ff8800 solid 2px;
  border-radius: 10px;
  margin: 25px;
  width: 50vw;
}
.supporter-container .left-side {
  width: 40%;
  padding:2rem;
}
.supporter-container .right-side {
  width: 60%;
  padding: 1rem;
}

.supporter-container  .profile-picture {
  height: 200px;
  width: 200px;
  margin: auto;
  border: 10px solid #f8f8f8;
}

.left-side .name {
  font-size: 36px;
  font-weight: normal;
  color: #ed6f48;
}

.left-side .position {
  font-size: 18px;
}
.divider {
  display: inline-block;
  border-left: 1px solid #ccc;
  padding: 10px 0;
  margin: 15px 0;
  height: inherit;
}

.right-side {
  margin: auto;
}
.right-side .quote {
  font-size: 1.25rem;
}

@media only screen and (max-width: 1498px) {
  .supporter-container {
    width: 60vw;
  }
}
@media only screen and (max-width: 1367px) {
  .supporter-container {
    width: 70vw;
  }
}
@media only screen and (max-width: 1028px) {
  .supporter-container {
    flex-direction: column;
  }
  .supporter-container .left-side {
    width: auto;
  }
  .supporter-container .right-side {
    width: auto;
  }
  .divider {
    display: inline-block;
    border-bottom: 1px solid #ccc;
    padding: 0;
    margin:  0 40px;

  }
}
</style>
