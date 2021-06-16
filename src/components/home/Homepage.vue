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
            <v-card-text class="skills mx-auto" v-if="section === 'skills'">
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
            <v-card-text class="experience" v-if="section === 'experience'">
              <v-expansion-panels v-model="experienceOpen">
                <v-expansion-panel v-for="[exp, expObj] of Object.entries(cardObject.experience)">
                  <v-expansion-panel-header>
                    <v-row>
                      <v-col
                          class="my-auto job-title"
                          cols="0"
                          md="4"
                          lg="3"
                      >
                        {{ expObj.title }}
                      </v-col>
                      <v-col
                          class="my-auto"
                          cols="0"
                          md="1"
                          lg="2"
                      >
                        <v-divider class="my-auto"></v-divider>
                      </v-col>
                      <v-col
                          class="my-auto date"
                          cols="0"
                          md="3"
                          lg="2"
                          justify="center"
                      >
                        {{ expObj.dates[0] }} - {{ expObj.dates[1] }}
                      </v-col>
                      <v-col
                          class="my-auto"
                          cols="0"
                          md="1"
                          lg="2"
                      >
                        <v-divider class="my-auto"></v-divider>
                      </v-col>
                      <v-col
                          class="my-auto employer"
                          cols="0"
                          md="3"
                      >
                        {{ expObj.employer }}
                      </v-col>
                    </v-row>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-list-item
                          v-for="desc in expObj.description"
                      >
                        <v-list-item-icon><v-icon>{{ workIcon }}</v-icon></v-list-item-icon>
                        {{ desc }}
                      </v-list-item>
                    </v-list>
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
    import { mdiBriefcaseOutline } from '@mdi/js';

    export default {
        name: "Homepage",
        data: () => ({
            githubLink: 'https://github.com/atkincaid74/andrew-kincaid-frontend',
            publicPath: process.env.BASE_URL,
            workIcon: mdiBriefcaseOutline,
            experienceOpen: 0,
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
                title: 'Experience',
                experience: {
                  quant2: {
                    dates: ['12/2019', 'present'],
                    title: 'Quantitative Analyst II',
                    employer: 'AM Best Rating Services',
                    description: [
                      "Owner of all analytical Python code for the Quantitative Analysis Team, including a capital " +
                      "adequacy model, projection model, and other credit rating tools. Responsible for reviewing the" +
                      " code of colleagues to make sure the team's standards were met",
				              "Acted as the team's subject matter expert for the investment risk component and made " +
                      "significant enhancements to the credit risk component of AM Best's Capital Adequacy Ratio model",
                      "Contributed to the Vue.js single page application and Django API that allows internal analysts" +
                      " and external clients to access and view the output of models"
                    ]
                  },
                  quant1: {
                    dates: ['06/2018', '12/2019'],
                    title: 'Quantitative Analyst I',
                    employer: 'AM Best Rating Services',
                    description: [
                      "Created all of the quantitative analysis group's database schemas and objects. Collaborated " +
                      "with the database administrators to constantly enhance the efficiency of the database",
				              "Acted as the representative for my team of developers to the company's IT department to ensure" +
                      " that goals and timelines were aligned"
                    ]
                  },
                  assAnal: {
                    dates: ['06/2017', '06/2018'],
                    title: 'Associate Analyst',
                    employer: 'AM Best Rating Services',
                    description: [
                      "6 week orientation that gave a strong working knowledge of the insurance sector and an in " +
                      "depth look at rating agencies and their role in the market",
				              "Converted a suite of existing MS Excel/VBA models into Python. Brought 8 separate models into " +
                      "one code base to drastically improve maintainability"
                    ]
                  },
                }
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
.date, .employer {
  font-size: 0.9rem;
}
.employer {
  justify-content: end;
}
.job-title {
  font-size: 1.4rem;
}
.summary {
  max-height: 60%;
}
.skills, .experience {
  max-height: 80%;
}
.skills {
  max-width: 800px;
}
.v-expansion-panel-header {
  padding-top: 2px;
  padding-bottom: 2px;
}
.no-icon {
  margin-right: 24px;
}
</style>