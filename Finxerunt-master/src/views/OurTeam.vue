<template>
  <div class="our-team">
    <div class="introduction">
      <h1>Meet the Team</h1>
      <p>
        As a multinational family-like team, we come together from all over the world with different
        ideas and backgrounds to work towards the common goal of creating a better world.
      </p>
      <p>
        With 10 different and unique departments we help fulfill our mission.
      </p>
    </div>
    <TeamMembersGallery :team="team"/>
    </div>
</template>

<script>
import TeamMembersGallery from "@/components/TeamMembersGallery";
export default {
name: "OurTeam",
  components: {TeamMembersGallery},
  data() {
    return {
      team: [
        {
          id: 0,
          name: "Ryan Ahmed",
          position: "Founder",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 1,
          name: "Mahmoud Abdellatif",
          position: "President",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 2,
          name: "Sarah Infante",
          position: "VP/Director of Public Relation",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 3,
          name: "Shreya Pandit",
          position: "Director of Film",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 4,
          name: "Depa Saha",
          position: "CSO",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 5,
          name: "Mamadou Barry",
          position: "Director of Social Media",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 6,
          name: "Grace Lorch",
          position: "Director of Social Media",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 7,
          name: "Aroni Goongoon",
          position: "DOSO/Coordinating",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 8,
          name: "Ryan Curran",
          position: "Director of Journalism",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 9,
          name: "Jolly Zheng",
          position: "Director of Fundraising",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 10,
          name: "Sadiqah Quadery",
          position: "Director of Fundraising",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 11,
          name: "Marilyn Alvares",
          position: "Senior Director",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 12,
          name: "Mamadou Barry",
          position: "Director of Social Media",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 13,
          name: "Afran Ahmed",
          position: "Director of Social Science",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 14,
          name: "Alan Shnir",
          position: "Director of Economic Research",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 15,
          name: "Rahib Taher",
          position: "Director of Film",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 16,
          name: "Rehan Yazdani",
          position: "Director of Lobbying",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 17,
          name: "Aarushi Kaushal",
          position: "Director of Social Science",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 18,
          name: "Rafiul Kashfi",
          position: "Director of Software Development",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 19,
          name: "Sarah Derkach ",
          position: "Director of Economic Research",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 20,
          name: "Michelle Seucan",
          position: "Director of Journalism",
          img_src: "\"../assets/images/default-profile.png\""
        },
        {
          id: 21,
          name: "Akitoye Ayo-Vaughan",
          position: "Student Advisor",
          img_src: "\"../assets/images/default-profile.png\""
        }
      ]
    }
  }
}
</script>

<style scoped>
.introduction {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 40vw;
}

.introduction p {
  margin: 10px 0;
  font-size: 18px;
}
</style>