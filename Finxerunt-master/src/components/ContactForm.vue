<template>
  <div class="form-style-6">
    <h1>Contact Us</h1>
    <form
      action="https://script.google.com/macros/s/AKfycbzotNjUYRcKpCdl7jh_-SmvleJOce9GVgMBSDDTyV0Comu91ZG1QsqC/exec"
      method="POST"
    >
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Email Address" />
      <input type="text" name="subject" placeholder="Subject" />
      <textarea name="message" placeholder="Type your Message"></textarea>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "contactForm"
};
</script>

<style>
.form-style-6 {
  max-width: 60vw;
  margin: 70px auto;
  padding: 16px;
  border-radius: 10px;
  background: #fff;
  box-shadow: rgb(224, 226, 226) 6px 2px 16px 0, rgb(244, 245, 245) -6px -2px 16px 0;}

.form-style-6 h1 {
  font-size: 2rem;
  background: #fff;
  padding: 20px 0;
  font-weight: 300;
  text-align: center;
  color: #fb0800;
  margin: -16px -16px 0 -16px;
  border-radius: 10px;

}
.form-style-6 input[type="text"],
.form-style-6 input[type="date"],
.form-style-6 input[type="datetime"],
.form-style-6 input[type="email"],
.form-style-6 input[type="number"],
.form-style-6 input[type="search"],
.form-style-6 input[type="time"],
.form-style-6 input[type="url"],
.form-style-6 textarea,
.form-style-6 select {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 90%;
  margin: 0 0 1% 5%;
  border: 0 solid #ccc;
  border-bottom: 1px solid #e0e0e0;
  padding: 3% 5% 2.5% 5%;
  color: black;
}
.form-style-6 textarea {
  padding-bottom: 1%;
  height: 7rem;
}
.form-style-6 input[type="text"]:focus,
.form-style-6 input[type="date"]:focus,
.form-style-6 input[type="datetime"]:focus,
.form-style-6 input[type="email"]:focus,
.form-style-6 input[type="number"]:focus,
.form-style-6 input[type="search"]:focus,
.form-style-6 input[type="time"]:focus,
.form-style-6 input[type="url"]:focus,
.form-style-6 textarea:focus,
.form-style-6 select:focus {
  padding: 3%;
  border-bottom: 1px solid #fb0800;
}

.form-style-6 input[type="submit"],
.form-style-6 input[type="button"] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-appearance: none;
  width: 30%;
  padding: 2%;
  background: #fd0800;
  border-bottom: none;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-radius: 10px;
  color: #fff;
  margin: 10px 35%;
  font-size: 1.5rem;
}
.form-style-6 input[type="submit"]:hover,
.form-style-6 input[type="button"]:hover {
  background: #ff6763;
}
</style>