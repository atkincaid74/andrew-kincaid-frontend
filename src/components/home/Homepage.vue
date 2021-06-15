<template>
    <v-card
        class="mx-auto my-2"
        max-width="95%"
        height="95%"
    >
      <v-carousel
          :dark="$vuetify.theme.dark"
          :light="!$vuetify.theme.dark"
          hide-delimiter-background
          height="100%"
      >
        <v-carousel-item
            v-for="[section, cardObject] of Object.entries(cardInfo)"
            :key="section"
        >
          <v-card
              class="mx-auto"
              max-width="90%"
              height="90%"
          >
            <v-card-title v-html="cardObject.title"></v-card-title>
            <v-card-subtitle
                v-if="'subtitle' in cardObject"
                v-html="cardObject.subtitle"
            ></v-card-subtitle>
            <v-card-text class="scroll" v-if="section === 'intro'">
              <v-row>
                <v-col
                    cols="12"
                    sm="3"
                >
                  <v-img
                      contain
                      max-height="220"
                      max-width="160"
                      alt="my beautiful face"
                      :src="`${publicPath}FBkincaid15.jpg`"
                      class="rounded mx-auto pt-8"
                  />
                </v-col>
                <v-col class="pt-0">
                  <v-list>
                    <v-list-item>
                      Quantitative Analyst by title, full-stack developer by trade
                    </v-list-item>
                    <v-list-item>
                      4+ years developing a full-stack web application from the ground up, with ownership of the python
                      package responsible for all insurance-related models
                    </v-list-item>
                    <v-list-item>
                      Fast-learner and a team player with a strong work ethic
                    </v-list-item>
                    <v-list-item>
                      Passionate about using my problem-solving skills to find creative solutions
                    </v-list-item>
                    <v-list-item>
                      Dedicated to writing efficient, yet practical code
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions v-if="section === 'intro'">
              <v-spacer></v-spacer>
              <v-btn
                  :href="githubLink"
                  target="_blank"
                  color="primary"
                  class="black--text font-weight-bold"
              >github</v-btn>
              <v-spacer></v-spacer>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                      href="mailto:andrew@andrew-kincaid.com"
                      v-on="on"
                      color="primary"
                      class="black--text font-weight-bold"
                  >email
                  </v-btn>
                </template>
                <span>andrew@andrew-kincaid.com</span>
              </v-tooltip>
              <v-spacer></v-spacer>
              <v-btn
                  :href="`${publicPath}AndrewKincaidResume.pdf`"
                  target="_blank"
                  color="primary"
                  class="black--text font-weight-bold"
              >resume
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-card>
</template>

<script>
    export default {
        name: "Homepage",
        data: () => ({
            githubLink: 'https://github.com/atkincaid74/andrew-kincaid-frontend',
            publicPath: process.env.BASE_URL,
            cardInfo: {
              intro: {
                title: 'Andrew <b>KINCAID</b>',
                subtitle: 'Quantitative Analyst',
              },
              skills: {
                title: 'Skills'
              },
              experience: {
                title: 'Experience'
              },
              education: {
                title: 'Education'
              }
            }
        }),
        methods: {
            logResume() {
                if (this.$route.path === '/resume') {
                    this.$store.dispatch('logResumeHit');
                }
            }
        },
        mounted() {
            this.logResume();
        }
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;1,400;1,600&display=swap');

.v-card {
  font-family: "Raleway", sans-serif;
}
.v-card__title {
  font-size: 3rem;
  line-height: 1.01;
}
.v-card__subtitle {
  padding-top: 0.3em;
  font-size: 2rem;
  line-height: 1.01;
}
.v-card__text {
  font-size: 1rem;
  overflow-y: auto;
  max-height: 60%;
}
</style>