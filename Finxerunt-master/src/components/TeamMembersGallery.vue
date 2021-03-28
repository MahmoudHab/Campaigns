<template>
  <div class="team-members-gallery">
    <div v-for="member in team"
         v-bind:key="member.id"
         class="member-container"
    >
      <img alt="Default Image" src="../assets/images/default-profile.png"/>
      <div class="text-container">
        <h1>{{ member.name }}</h1>
        <p>{{ member.position }}</p>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "TeamMembersGallery",
  props: ["team"],
}
</script>

<style scoped>
.team-members-gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 80vw;
  margin: 0 auto;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 100%;
  margin-bottom: auto;
}

h1 {
  font-weight: lighter;
  font-size: 24px;
  text-align: center;
}

p {
  font-size: 18px;
  font-weight: lighter;
  text-align: center;
}

h1, p {
  color: #004665;
}

.text-container {
  padding: 1rem;
  transition: all 0.3s ease 0.1s;
}

.member-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  border: 1px #004665 solid;
  margin: 20px;
  transition: all 0.3s ease 0.1s;
}

.member-container:hover {
  border: #ff8800 2px solid;
  padding: 24px;
}

.member-container:hover .text-container *{
  color: #ff8800;
}
</style>