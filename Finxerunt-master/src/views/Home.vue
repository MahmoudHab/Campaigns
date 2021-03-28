<template>
  <div class="home">
    <div class="grid-container">
      <div class="grey-box"></div>
      <div class="top-left">
        <WordWheel/>
      </div>
      <div class="bottom-left">
        <p class="bigger-paragraph">Home of the <a href="https://socioeconlabs.org/">International Socioeconomics
          Laboratory™</a></p>
      </div>
      <div class="magnified-logo">
        <img src="../assets/images/magnified_logo.png" alt="Magnified Logo"/></div>
    </div>

    <div class="statistics">

      <div class="statistic">
        <h1>10,000+</h1>
        <p>Volunteer Hours</p>
      </div>

      <div class="statistic">
        <h1>$2740</h1>
        <p>Fundraised</p>
      </div>

      <div class="statistic">
        <h1>900+</h1>
        <p>Supporters Globally</p>
      </div>

      <div class="statistic">
        <h1>8x Finalists</h1>
        <p>Policy at Harvard</p>
      </div>

    </div>

  </div>

  <div class="articles">
    <div class="article" id="article1">
      <h1><a href="#">Civic Engagement</a></h1>
      <img src="../assets/images/handshake.png" alt="handshake"/>
    </div>
    <div class="article" id="article2">
      <h1><a href="#">Social Justice</a></h1>
      <img src="../assets/images/house.png" alt="house"/>
    </div>
    <div class="article" id="article3">
      <h1><a href="#">Economics</a></h1>
      <img src="../assets/images/balance.png" alt="balance"/>
    </div>
    <div class="article" id="article4">
      <h1><a href="#">Socioeconomics</a></h1>
      <img src="../assets/images/earth.png" alt="earth"/>
    </div>
  </div>

  <Schools/>
  <Supporters :supporters="supporters"/>
  <div class="partnerships">
    <h1 class="text-left">Partnerships</h1>
    <p class="text-left">
      We collaborate with our partners on various projects, programs, and
      initiatives. If your organization is interested in partnering with us,
      please email us at info@finxerunt.org and you will receive a partnership
      agreement form once your proposal has been reviewed and accepted.
    </p>
  </div>
  <div class="flex-container">
    <div class="vertical-flex-container">
      <h1>Make a Donation!</h1>
      <p>Help Students Fight Covid-19!</p>
      <a
          href="https://www.gofundme.com/f/finxerunt?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link-tip"
      ><button>Donate Here!</button></a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Supporters from "@/components/Supporters";
import Schools from "@/components/Schools";
import WordWheel from "@/components/WordWheel";
// import SlideshowContainer from "@/components/SlideshowContainer";

export default {
  name: "Home",
  components: {
    WordWheel,
    Schools,
    Supporters
  },
  data() {
    return {
      supporters: [
        {
          id: 0,
          name: "Jacob Alspector",
          position: "Distinguished Lecturer and Professor at CCNY",
          quote:
              '"I joined Finxerunt because I believe in the power, energy, and ability of young people to make necessary transformations to our world."'
        },
        {
          id: 1,
          name: "Centers for Disease Control and Prevention",
          position: "Office of the Chief of Staff",
          quote:
              '"The Centers for Disease Control and Prevention (CDC) commends Finxerunt’s mission to go beyond passive activism by empowering the youth to address systemic socioeconomic issues and lead tangible change."'
        },
        {
          id: 2,
          name: "Christos Lolis",
          position: "Fundraising Partner",
          quote:
              '"Together we fundraised hundreds of dollars for Flushing Hospital in Queens, NY in April 2020. Congratulations on serving both the country and global community. Thank you for all you guys do."'
        }
      ]
    };
  }
};
</script>

<style scoped>

.grid-container {
  display: grid;
  position: relative;
  height: 500px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 42px);
}

.grey-box {
  grid-column: 1 / end;
  grid-row: 1 / end;
  background: #f6f7f7;
}

.grid-container .top-left {
  grid-column: 2 / span 5;
  grid-row: 4 / span 3;
}

.bottom-left {
  grid-column: 2/ span 5;
  grid-row: 8 / span 3;
}

.bottom-left .bigger-paragraph {
  font-size: 24px;
}

.magnified-logo {
  grid-column: 8 / 12;
  grid-row: start / 1;
  border-radius: 10px;
  margin: auto;
}

.magnified-logo img {
  width: 25vw;
  height: 25vw;
}

.statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 25px 100px;
}

.statistics .statistic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
}
.statistics .statistic h1 {
  font-weight: lighter;
  font-size: calc((2.5 - 1) * 1.2vw + 1rem);
  font-style: normal;
  letter-spacing: .02em;
  text-transform: none;
}
.statistics .statistic p {
  font-weight: bolder;
  font-size: 24px;
  color: black;
}

.articles .article {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.articles .article h1 {
  grid-column: 3 / 7;
  padding: 15px 0;
}

.articles a {
  color: white;
}

.articles img {
  grid-column: 9 / span 10;
  height: 100px;
  width: 100px;
}

#article1 {
  background: linear-gradient(to right, #ff8800, #f89329);
}
#article2 {
  background: linear-gradient(to right, #f89329, #ffaa58);
}
#article3 {
  background: linear-gradient(to right, #ffaa58, #ffb77d);
}
#article4 {
  background: linear-gradient(to right, #ffb77d, #fdd6bb);
}

.orange-box {
  display: inline-block;
  padding: 20px 20px;
  /* orange box will expand once image added within */
  background: #ff8800;
  border-radius: 30px;
}

.flex-container {
  margin: 50px 10px;
  display: flex;
  justify-content: space-around;
}
.vertical-flex-container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
.partnerships {
  margin: 50px auto;
  width: 80vw;
}
.partnerships h1 {
  text-align: center;
}

@media (max-width: 800px) {
  .statistics {
    flex-direction: column;
  }
  .flex-container {
    flex-direction: column;
  }
  .orange-box {
    width: 80%;
  }
}

</style>
