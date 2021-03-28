<template>
  <div class="about">
    <article>
      <h1>What is Finx?</h1>
      <section>
        <h2>Recognitions</h2>
        <ul>
          <li>
            <q>
              The Centers for Disease Control and Prevention (CDC) commends
              Finxerunt’s mission to go beyond passive activism by empowering
              the youth to address systemic socioeconomic issues and lead
              tangible change.
            </q>
          </li>
        </ul>
      </section>
      <section>
        <h2>What is Finxerunt?</h2>
        <p>
          Finxerunt, Inc. is a growing international student-led non-profit
          organization founded on July 10th, 2017 on the basis of building a
          sustainable future, due to the several conceptual issues in current
          global systems in economics, education, healthcare, and equity among
          all people.
        </p>
        <p>
          Finxerunt in Latin means to imagine and create. With its four
          principle research-based campaigns, the organization takes on tough
          global issues along with thousands of students globally through active
          civic engagement. The organization's peer-reviewed intense research is
          done at our laboratory network where students and experts work
          side-by-side to collect data to come up with the much needed courses
          of actions to create a sustainable future. Then after, Finxerunt
          develops campaigns and policies, while working with politicians and
          representatives to bring change to public policy globally. At the same
          time, the grassroots aspects creating a diverse community comes
          together around educating people on these researched issues through
          film-making, journalism, and social media.
        </p>
        <p>
          Finxerunt is a student-led international non-profit that works to go
          beyond passive activism by empowering the youth to address systemic
          socioeconomic issues and lead tangible change to build a sustainable
          future.
        </p>
      </section>
      <section class="college-affiliations">
        <img
          alt="Logo of Fordham University"
          src="../assets/images/Fordham_University_Logo.png"
        />
        <img
          alt="Logo of Harvard University"
          src="../assets/images/harvard-university-logo.png"
        />
        <img
          alt="Logo of Columbia University"
          src="../assets/images/Columbia_University_Logo.png"
        />
      </section>
      <section class="light-gray-background">
        <div class="gray-background">
          <h2>Join the Movement</h2>
          <p>
            The support of people all over the world will be quintessential
            towards putting together a movement that is driven to build a better
            future for all and to tackle the root issues in our world today.
            Anyone can help push this movement forward and even the smallest
            contributions would be gladly appreciated. From informing family and
            peers about the movement, to making a very small donation to the
            organization, the movement will be able to leave a foundation
            towards a brighter future. People representing any position at all
            would help this organization grow. Students represent the future of
            the planet and beyond, as educating students and receiving
            contribution from students would further help in the long-run.
            Doctors, lawyers, teachers, engineers, and people representing any
            other position can help in developing a world-class system of
            medicine, science, leadership, technology, and more. Please join the
            movement and help lead a movement for real change in our society.
          </p>
          <button>Join Us</button>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {}
};
</script>

<style scoped>
p,
q {
  text-align: left;
  padding: 1rem;
}

h1 {
  font-size: 3rem;
  font-weight: lighter;
  margin: 25px 10% 0 10%;
}

h2 {
  font-size: 2rem;
  font-weight: lighter;
}

ul {
  padding-left: 1rem;
}

li {
  list-style: none;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 0 10%;
}

.about section {
  margin-top: 50px;
}

.gray-background {
  background: #f8f8f8;
  margin-left: 0;
  margin-right: 0;
  padding: 1rem;
}

.college-affiliations img {
  height: 200px;
  width: auto;
  display: initial;
}
</style>