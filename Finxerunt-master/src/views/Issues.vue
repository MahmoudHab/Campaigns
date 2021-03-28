<template>
  <div>
    <IssuesGallery :issues="issues"/>

  </div>
</template>

<script>
import IssuesGallery from "@/components/IssuesGallery";
export default {
  name: "Issues",
  components: {IssuesGallery},
  data() {
    return {
      issues: [
        {
          id: 0,
          title: "Issue Title",
          blurb: "This is a blurb of what the issue is about.",
        },
        {
          id: 1,
          title: "Issue Title",
          blurb: "This is a blurb of what the issue is about.",
        },
        {
          id: 2,
          title: "Issue Title",
          blurb: "This is a blurb of what the issue is about.",
        },
        {
          id: 3,
          title: "Issue Title",
          blurb: "This is a blurb of what the issue is about.",
        },
      ]
    };
  }
}
</script>

<style scoped>

</style>