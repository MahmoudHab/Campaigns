<template>
  <div class="slideshow-items-container">
    <slot></slot>
  </div>
  <button @click="showNextItem">
    Next
  </button>
</template>

<script>
export default {
  name: "SlideshowContainer",
  mounted() {
    this.items = document.querySelector(".slideshow-items-container").children;

    // so not all images are shown at once
    this.items.forEach(item => (item.style.display = "none"));
    this.items[0].style.display = "initial";
  },
  methods: {
    showNextItem() {
      this.items[this.currentItemIndex].style.display = "none";

      this.currentItemIndex++;

      this.currentItemIndex %= this.items.length;

      this.items[this.currentItemIndex].style.display = "initial";
    }
  },
  data() {
    return {
      currentItemIndex: 0,
      items: undefined
    };
  }
};
</script>

<style scoped></style>