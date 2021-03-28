<template>
  <section class="rw-wrapper">
    <h2 class="rw-sentence">
      <span>Join the movement</span>
      <br>
      <span>If you are</span>
      <div class="rw-words rw-words-1">
        <span>passionate.</span>
        <span>courageous.</span>
        <span>a leader.</span>
        <span>an innovator.</span>
        <span>a hero.</span>
      </div>
    </h2>
  </section>
</template>

<script>
export default {
name: "WordWheel"
}
</script>

<style scoped>
.rw-wrapper{
  width: 80%;
  position: relative;
}
.rw-sentence{
  margin: 0;
  text-align: left;
  text-shadow: 1px 1px 1px rgba(255,255,255,0.8);
}
.rw-sentence span{
  white-space: nowrap;
  font-size: 200%;
  font-weight: normal;
}
.rw-words{
  display: inline;
  text-indent: 10px;
}
.rw-words span{
  position: absolute;
  opacity: 0;
  overflow: hidden;
  width: 100%;
  color: #ec7d23;
}
.rw-words-1 span{
  animation: rotateWordsFirst 10s linear infinite 0s;
}

.rw-words span:nth-child(2) {
  animation-delay: 2s;
}
.rw-words span:nth-child(3) {
  animation-delay: 4s;
}
.rw-words span:nth-child(4) {
  animation-delay: 6s;
}
.rw-words span:nth-child(5) {
  animation-delay: 8s;
}
@keyframes rotateWordsFirst {
  0% { opacity: 1; animation-timing-function: ease-in; height: 0px; }
  8% { opacity: 1; height: 60px; }
  19% { opacity: 1; height: 60px; }
  25% { opacity: 0; height: 60px; }
  100% { opacity: 0; }
}

</style>