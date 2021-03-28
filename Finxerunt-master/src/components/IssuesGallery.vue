<template>
  <div class="issues-gallery">
    <ul
      v-for="issue in issues"
      v-bind:key="issue.id"
      class="issue-container">
      <li>
            <h1>{{ issue.title }}</h1>
            <p>{{ issue.blurb }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IssuesGallery",
  props: ["issues"],
}
</script>

<style scoped>
a:link {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
}

a:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
}

li {
  list-style: none;
}
.issues-gallery {
  display: flex;
  max-width: 80vw;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
}

.issue-container {
  padding: 1.5rem;
  width: 45%;
  min-width: 404px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0, rgba(255, 255, 255, 0.8) -6px -2px 16px 0;
  margin: 1rem auto 1rem auto;
  border-radius: 10px;
}

.issues-gallery :hover *{
  color: #217da7;
}

h1 {
  font-size: 1.5rem;
  padding-bottom: 1rem;
}

@media only screen and (max-width: 1003px) {
  .issue-container {
    min-width: 80vw;
  }
}

</style>