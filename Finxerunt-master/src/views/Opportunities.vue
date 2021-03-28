<template>
  <div class="issues">
    <div class="the-box">
      <h1>Global Civic Leadership & Research for All</h1>
      <br>
      <p>2021 Programs</p>
    </div>
    <div class="transbg"></div>
    <div class="info-opp">
      <h2>2021 Harvard Policython Attendees</h2>
      <p>If you attended the 2021 Harvard Education Policython
        & you have to join over 200 students in making a major impact in the world.
        <a href="https://www.finxerunt.org/opportunity">Apply here by February 25, 2021</a></p>
      <h2>Spring 2021 Applications Are Now Closed</h2>
      <p>We have received over 600 applicants for this Spring Semester, as we are very excited to interview many of you.
        For those of you waiting to be notified on the status of your application, please note that this is a regular
        commitment from February to early June 2021. With a institution-wide 60% acceptance rate, spots are extremely
        limited and also competitive.</p>
      <h2>Let's Make A Positive Impact <i>Together</i></h2>
      <p>At Finxerunt, our philosophy is that everyone can make a positive impact on the world,
        regardless of race, gender, age, or skill-sets. Take your skills & together we will make a huge difference
        in our world this fall every Saturdays from February 6th to June 6th, 2021.</p>
    </div>
  </div>

  <br>
  <h1>With the Support of Faculty At</h1>
  <div class="supporters-images"></div>

  <div class="eligibility">
    <h2>Eligibility:</h2>
    <ul>
      <li>Open to all high school and college students globally</li>
      <li>All application responses must be over 50 words</li>
      <li>Webcam & microphones must be turned on at all meetings</li>
      <li>Availability at sign-up times are a must with an 85% attendance minimum</li>
      <li>Due to a 60% program acceptance-rate, eligible applicants will be interviewed </li>
      <li>EXCLUSIVELY FOR POLICYTHON ATTENDEES</li>
    </ul>
  </div>
  <div class="ISL">
    <iframe src="https://www.youtube.com/embed/wCedMh0R-iQ" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>

    <div class="info-ISL">
      <h3><b>International Socioeconomics Laboratory™</b></h3>
      <br>
      <br>
      <h3><b>STEM+</b> Research Fellowship - Spring 2021 Cohort</h3>
      <p>
        Spring Research Program on General Economics, Social Science, Sociology, Psychology, &
        Public Policy open to all high school and college students globally. Learn more about the world around you
        through a hands-on virtual research experience by addressing issues you care about the most,
        while getting published with your own registered DOI citations.
      </p>
      <p>Every Saturdays 11AM - 12PM EST or 3:30PM - 4:30PM</p>
    </div>
  </div>

  <div class="Finxerunt">
    <iframe src="https://www.youtube.com/embed/uQxbUbP5KFA" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>

    <div class="info-FINXPol">
      <h3><b>Finxerunt™ Policy Action and Lobbying</b></h3>
      <p>
        Spring Student Policy Lobbying and Activism Program on Socioeconomics Issues & Public Policy open to all high
        school and college students globally.
        Learn more about the world around you through working on developing campaigns and working with representatives.
      </p>
      <p>Every Saturdays 12 PM - 1 PM EST</p>
    </div>
  </div>
</template>

<script>
export default {
name: "Opportunities"
}
</script>

<style scoped>
h1{
  margin-left: 10%;
  font-size: 36px;
}

.eligibility{
  margin-top: 3%;
  margin-left: 10%;
}

.eligibility li{
  margin-left: 4%;
  padding: .5%;
  font-size: 110%;
}

iframe{
  width: 560px;
  height: 315px;;
  margin-left: 10%;
}

.ISL{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 6%;
  width: auto;
}

.info-ISL h3{
  font-size: 130%;
  color: #104E8B;
}

.info-ISL p{
  margin-top: 4%;
  margin-right: 30%;
}

.Finxerunt{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 6%;
  width: auto;
  background-color: #1C86EE;
}

.info-FINXPol h3{
  font-size: 130%;
  color: white;
}

.info-FINXPol p{
  margin-top: 4%;
  margin-right: 20%;
  color: white;
}

@media (max-width: 376px) {
  h1 {
    font-size: 120%;
  }

  .eligibility {
    font-size: 65%;
  }

  .ISL {
    grid-template-columns: 1fr;
  }

  .info-ISL {
    margin-left: 5%;
    font-size: 80%;
  }

  iframe {
    width: 375px;
    height: 180px;
    margin-left: 0%;
    margin-top: 10%;
    margin-bottom: 5%;
  }

  .Finxerunt {
    grid-template-columns: 1fr;
  }

  .info-FINXPol {
    font-size: 80%;
  }
}
* {
  margin: 0;
  padding: 0;
}
body{
  overflow-x: hidden;
}
.transbg{
  height: 260px;
  width: auto;
  background-image: url(../assets/images/issues-page.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 25% 85%;
  opacity: 0.4;
  position: relative;
  top: -105px;
}

.the-box{
  color: #104E8B;
  font-size: 130%;
  font-weight: bolder;
  position: relative;
  top: 6em;
  left: 4em;
  max-width: 90vw;
}

.info-opp{
  margin-left: 10%;
  margin-right: 10%;
}

.info-opp h2{
  font-size: 200%;
  color: #104E8B;
  margin-bottom: 2%;
}
.info-opp p{
  margin-bottom: 2%;
  font-size: 120%;
}
* {
  margin: 0;
  padding: 0;
}
body{
  overflow-x: hidden;
}
.transbg{
  height: 260px;
  width: auto;
  background-image: url(../assets/images/issues-page.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 25% 80%;
  opacity: 0.4;
  position: relative;
  top: -105px;
}

.the-box{
  color: #104E8B;
  font-size: 130%;
  font-weight: bolder;
  position: relative;
  top: 6em;
  left: 4em;
}

.info-opp{
  margin-left: 10%;
  margin-right: 10%;
}

.info-opp h2{
  font-size: 200%;
  color: #104E8B;
  margin-bottom: 2%;
}
.info-opp p{
  margin-bottom: 2%;
  font-size: 120%;
}
a{
  color: black;
}
</style>