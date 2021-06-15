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
            <v-card-text class="summary" v-if="section === 'intro'">
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
                      {{ numYears }}+ years developing a full-stack web application from the ground up, with ownership of the python
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
            <v-card-text class="skills" v-if="section === 'skills'">
              <v-expansion-panels>
                <v-expansion-panel v-for="[skill, skillObj] of Object.entries(cardObject.skills)">
                  <v-expansion-panel-header
                      v-if="'subSkills' in skillObj"
                  >
                    <v-slider
                        readonly
                        :label="skillObj.name"
                        :value="skillObj.value"
                    ></v-slider>
                  </v-expansion-panel-header>
                  <v-expansion-panel-header
                      v-else
                      expand-icon=""
                      disabled
                  >
                    <v-slider
                        readonly
                        class="no-icon"
                        :label="skillObj.name"
                        :value="skillObj.value"
                    ></v-slider>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content v-if="'subSkills' in skillObj">
                    <v-slider
                        v-for="[subSkill, subSkillObj] of Object.entries(skillObj.subSkills)"
                        class="no-icon ml-3"
                        readonly
                        :label="subSkillObj.name"
                        :value="subSkillObj.value"
                    ></v-slider>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
                title: 'Andrew&nbsp;<b>KINCAID</b>',
                subtitle: 'Quantitative Analyst',
              },
              skills: {
                title: 'Skills',
                skills: {
                  python: {
                    name: 'Python',
                    value: 99,
                    subSkills: {
                      pandas: {name: 'Pandas', value: 95},
                      sqlAlchemy: {name: 'SQLAlchemy', value: 90},
                      django: {name: 'Django', value: 80}
                    }
                  },
                  js: {
                    name: 'JavaScript',
                    value: 70,
                    subSkills: {
                      vue: {name: 'Vue.js', value: 70}
                    }
                  },
                  sql: {
                    name: 'SQL',
                    value: 92,
                    subSkills: {
                      oracle: {name: 'Oracle', value: 95},
                      sqlite: {name: 'SQLite', value: 90},
                      postgresql: {name: 'PostgreSQL', value: 70}
                    }
                  },
                  git: {
                    name: 'Git',
                    value: 85
                  },
                  docker: {
                    name: 'Docker',
                    value: 50
                  },
                  azure: {
                    name: 'Azure DevOps',
                    value: 65
                  }
                }
              },
              experience: {
                title: 'Experience'
              },
              education: {
                title: 'Education'
              }
            }
        }),
        computed: {
            numYears: function () {
                const startDate = new Date(2017, 5, 1);
                const today = new Date();
                let days = (today - startDate) / 1000 / 60 / 60 / 24;

                return Math.floor(days / 365);
            }
        },
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
}
.summary {
  max-height: 60%;
}
.skills {
  max-height: 80%;
}
.v-expansion-panel-header {
  padding-top: 2px;
  padding-bottom: 2px;
}
.no-icon {
  margin-right: 24px;
}
</style>