<template>
  <v-container>
    <v-row justify="center" no-gutters class="mt-sm-3 mt-md-6 mt-lg-9">
      <v-col cols="12" class="mb-12">
        <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">
          Andrew
          <span class="font-weight-bold text-uppercase">Kincaid</span>
        </div>
        <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 grey--text">
          Quantitative Analyst
        </div>
        <v-row justify="space-around" class="mt-8">
          <v-col cols="12" sm="9" md="7">
            <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3">
              A Bit About Me
            </div>
            <ul>
              <li>
                Quantitative Analyst by title, full-stack developer by trade
              </li>
              <li>
                {{ numYears }}+ years of full-stack web development
                <ul>
                  <li>
                    Helped build full application from the ground up, with
                    ownership of the python package responsible for all
                    insurance-related models
                  </li>
                </ul>
              </li>
              <li>Fast-learner and a team player with a strong work ethic</li>
              <li>
                Passionate about using my problem-solving skills to find
                creative solutions
              </li>
              <li>Dedicated to writing efficient, yet practical code</li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-img
              contain
              max-height="600"
              alt="my beautiful face"
              :src="require('@/assets/FBkincaid15.jpg')"
              class="rounded mx-auto pt-8"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="my-12">
        <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3">
          Work Experience
        </div>
        <v-row justify="center" justify-md="start">
          <v-col
            v-for="(item, idx) in experience"
            :key="idx"
            cols="12"
            sm="9"
            md="6"
            :offset-md="offset(idx)"
          >
            <v-card class="my-2">
              <v-card-title
                class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4"
              >
                {{ item.title }}
                <v-spacer />
                <span class="text-subtitle-1">
                  {{ item.dates[0] }} - {{ item.dates[1] }}
                </span>
              </v-card-title>
              <v-card-subtitle
                class="text-subtitle-2 text-sm-subtitle-1 text-md-h6 text-lg-h5"
              >
                {{ item.employer }}
              </v-card-subtitle>
              <v-card-text>
                <ul>
                  <li
                    v-for="(duty, descriptionIdx) in item.description"
                    :key="descriptionIdx"
                  >
                    {{ duty }}
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="my-12">
        <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3 mb-4">
          Education and Training
        </div>
        <v-row justify="space-around">
          <v-col cols="12" sm="9" md="7" lg="5">
            <v-card>
              <v-img
                src="https://www.muhlenberg.edu/media/muhlenbergedu/contentassets/buildimages/rightnavigation/tower1220x523.jpg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="175px"
                position="top left"
              />
              <v-card-title>Muhlenberg College</v-card-title>
              <v-card-subtitle class="pb-0">
                B.S. - Mathematics, Chemistry minor
              </v-card-subtitle>
              <v-card-text>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-school-outline</v-icon>
                    </v-list-item-icon>
                    Graduated with Honors in Mathematics and a 3.9 major GPA
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-license</v-icon>
                    </v-list-item-icon>
                    Awarded the Harry A Benfer Memorial Scholarship for
                    "promoting goodwill and demonstrating an appreciation for
                    all phases of college life"
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-football</v-icon>
                    </v-list-item-icon>
                    Voted captain of the varsity football team; named to the
                    Academic Honor Roll
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="9" md="7" lg="5">
            <v-card>
              <v-card-title>Exams & Designations</v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-seal-variant</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        Associate in Insurance Accounting and Finance
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        The Institutes
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-pencil-box-multiple-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Exams P & FM</v-list-item-title>
                      <v-list-item-subtitle>
                        Society of Actuaries
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="my-12">
        <div class="text-h6 text-sm-h5 text-md-h4 text-lg-h3">Misc</div>
        <v-row justify="space-around">
          <v-col cols="12" sm="9" md="7" lg="5">
            <v-card>
              <v-card-title>Skills</v-card-title>
              <v-card-text>
                <v-list dense>
                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>Python</v-list-item-title>
                        <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Pandas</v-list-item-title>
                        <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>SQLAlchemy</v-list-item-title>
                        <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Django</v-list-item-title>
                        <v-list-item-subtitle>
                          Intermediate
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>JavaScript</v-list-item-title>
                        <v-list-item-subtitle>
                          Intermediate
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>VueJS</v-list-item-title>
                        <v-list-item-subtitle>
                          Intermediate
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                  <v-list-group>
                    <template v-slot:activator>
                      <v-list-item-content>
                        <v-list-item-title>SQL</v-list-item-title>
                        <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                      </v-list-item-content>
                    </template>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>Oracle</v-list-item-title>
                        <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>SQLite</v-list-item-title>
                        <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>PostgreSQL</v-list-item-title>
                        <v-list-item-subtitle>
                          Intermediate
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Git</v-list-item-title>
                      <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Windows</v-list-item-title>
                      <v-list-item-subtitle>Advanced</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>
                        GNU/Linux (Ubuntu, RHEL)
                      </v-list-item-title>
                      <v-list-item-subtitle>Intermediate</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Docker</v-list-item-title>
                      <v-list-item-subtitle>Intermediate</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Azure DevOps</v-list-item-title>
                      <v-list-item-subtitle>Intermediate</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="9" md="7" lg="5">
            <v-card>
              <v-card-title>Hobby Projects</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-group v-for="project in projects" :key="project.name">
                    <template v-slot:activator>
                      <v-list-item-title>{{ project.name }}</v-list-item-title>
                    </template>
                    <v-list-item
                      v-for="(note, idx) in project.notes"
                      :key="`project~${project.name}~note~${idx}`"
                    >
                      <v-list-item-content v-html="note"></v-list-item-content>
                    </v-list-item>
                  </v-list-group>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <!--    <v-card-->
  <!--        class="mx-auto my-2"-->
  <!--        max-width="95%"-->
  <!--        height="88vh"-->
  <!--    >-->
  <!--      <v-carousel-->
  <!--          hide-delimiter-background-->
  <!--          height="100%"-->
  <!--      >-->
  <!--        <v-carousel-item-->
  <!--            v-for="[section, cardObject] of Object.entries(cardInfo)"-->
  <!--            :key="section"-->
  <!--        >-->
  <!--          <v-card-->
  <!--              class="mx-auto"-->
  <!--              max-width="90%"-->
  <!--              height="90%"-->
  <!--          >-->
  <!--            <v-card-title v-html="cardObject.title"></v-card-title>-->
  <!--            <v-card-subtitle-->
  <!--                v-if="'subtitle' in cardObject"-->
  <!--                v-html="cardObject.subtitle"-->
  <!--            ></v-card-subtitle>-->
  <!--            <v-card-text class="summary" v-if="section === 'intro'">-->
  <!--              <v-row>-->
  <!--                <v-col-->
  <!--                    cols="12"-->
  <!--                    sm="3"-->
  <!--                >-->
  <!--                  <v-img-->
  <!--                      contain-->
  <!--                      max-height="220"-->
  <!--                      max-width="160"-->
  <!--                      alt="my beautiful face"-->
  <!--                      :src="`${publicPath}FBkincaid15.jpg`"-->
  <!--                      class="rounded mx-auto pt-8"-->
  <!--                  />-->
  <!--                </v-col>-->
  <!--                <v-col class="pt-0">-->
  <!--                  <v-list>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon small>mdi-check-circle-outline</v-icon></v-list-item-icon>-->
  <!--                      Quantitative Analyst by title, full-stack developer by trade-->
  <!--                    </v-list-item>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon small>mdi-check-circle-outline</v-icon></v-list-item-icon>-->
  <!--                      {{ numYears }}+ years developing a full-stack web application from the ground up, with ownership-->
  <!--                      of the python package responsible for all insurance-related models-->
  <!--                    </v-list-item>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon small>mdi-check-circle-outline</v-icon></v-list-item-icon>-->
  <!--                      Fast-learner and a team player with a strong work ethic-->
  <!--                    </v-list-item>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon small>mdi-check-circle-outline</v-icon></v-list-item-icon>-->
  <!--                      Passionate about using my problem-solving skills to find creative solutions-->
  <!--                    </v-list-item>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon small>mdi-check-circle-outline</v-icon></v-list-item-icon>-->
  <!--                      Dedicated to writing efficient, yet practical code-->
  <!--                    </v-list-item>-->
  <!--                  </v-list>-->
  <!--                </v-col>-->
  <!--              </v-row>-->
  <!--            </v-card-text>-->
  <!--            <v-card-text class="skills mx-auto" v-if="section === 'skills'">-->
  <!--              <v-expansion-panels>-->
  <!--                <v-expansion-panel v-for="[skill, skillObj] of Object.entries(cardObject.skills)">-->
  <!--                  <v-expansion-panel-header-->
  <!--                      v-if="'subSkills' in skillObj"-->
  <!--                  >-->
  <!--                    <v-slider-->
  <!--                        readonly-->
  <!--                        :label="skillObj.name"-->
  <!--                        :value="skillObj.value"-->
  <!--                    ></v-slider>-->
  <!--                  </v-expansion-panel-header>-->
  <!--                  <v-expansion-panel-header-->
  <!--                      v-else-->
  <!--                      expand-icon=""-->
  <!--                      disabled-->
  <!--                  >-->
  <!--                    <v-slider-->
  <!--                        readonly-->
  <!--                        class="no-icon"-->
  <!--                        :label="skillObj.name"-->
  <!--                        :value="skillObj.value"-->
  <!--                    ></v-slider>-->
  <!--                  </v-expansion-panel-header>-->
  <!--                  <v-expansion-panel-content v-if="'subSkills' in skillObj">-->
  <!--                    <v-slider-->
  <!--                        v-for="[subSkill, subSkillObj] of Object.entries(skillObj.subSkills)"-->
  <!--                        class="no-icon ml-3"-->
  <!--                        readonly-->
  <!--                        :label="subSkillObj.name"-->
  <!--                        :value="subSkillObj.value"-->
  <!--                    ></v-slider>-->
  <!--                  </v-expansion-panel-content>-->
  <!--                </v-expansion-panel>-->
  <!--              </v-expansion-panels>-->
  <!--            </v-card-text>-->
  <!--            <v-card-text class="experience" v-if="section === 'experience'">-->
  <!--              <v-expansion-panels v-model="experienceOpen">-->
  <!--                <v-expansion-panel v-for="[exp, expObj] of Object.entries(cardObject.experience)">-->
  <!--                  <v-expansion-panel-header>-->
  <!--                    <v-row>-->
  <!--                      <v-col-->
  <!--                          class="my-auto job-title"-->
  <!--                          cols="0"-->
  <!--                          md="4"-->
  <!--                          lg="3"-->
  <!--                      >-->
  <!--                        {{ expObj.title }}-->
  <!--                      </v-col>-->
  <!--                      <v-col-->
  <!--                          class="my-auto"-->
  <!--                          cols="0"-->
  <!--                          md="1"-->
  <!--                          lg="2"-->
  <!--                      >-->
  <!--                        <v-divider class="my-auto"></v-divider>-->
  <!--                      </v-col>-->
  <!--                      <v-col-->
  <!--                          class="my-auto date"-->
  <!--                          cols="0"-->
  <!--                          md="3"-->
  <!--                          lg="2"-->
  <!--                          justify="center"-->
  <!--                      >-->
  <!--                        {{ expObj.dates[0] }} - {{ expObj.dates[1] }}-->
  <!--                      </v-col>-->
  <!--                      <v-col-->
  <!--                          class="my-auto"-->
  <!--                          cols="0"-->
  <!--                          md="1"-->
  <!--                          lg="2"-->
  <!--                      >-->
  <!--                        <v-divider class="my-auto"></v-divider>-->
  <!--                      </v-col>-->
  <!--                      <v-col-->
  <!--                          class="my-auto employer"-->
  <!--                          cols="0"-->
  <!--                          md="3"-->
  <!--                      >-->
  <!--                        {{ expObj.employer }}-->
  <!--                      </v-col>-->
  <!--                    </v-row>-->
  <!--                  </v-expansion-panel-header>-->
  <!--                  <v-expansion-panel-content>-->
  <!--                    <v-list dense>-->
  <!--                      <v-list-item-->
  <!--                          v-for="desc in expObj.description"-->
  <!--                      >-->
  <!--                        <v-list-item-icon><v-icon dense>mdi-briefcase-outline</v-icon></v-list-item-icon>-->
  <!--                        {{ desc }}-->
  <!--                      </v-list-item>-->
  <!--                    </v-list>-->
  <!--                  </v-expansion-panel-content>-->
  <!--                </v-expansion-panel>-->
  <!--              </v-expansion-panels>-->
  <!--            </v-card-text>-->
  <!--            <v-card-text class="education" v-if="section === 'education'">-->
  <!--              <v-card>-->
  <!--                <v-img-->
  <!--                    src="https://www.muhlenberg.edu/media/muhlenbergedu/contentassets/buildimages/rightnavigation/tower1220x523.jpg"-->
  <!--                    class="white&#45;&#45;text align-end"-->
  <!--                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"-->
  <!--                    height="175px"-->
  <!--                    position="top left"-->
  <!--                >-->
  <!--                  <v-card-title>Muhlenberg College</v-card-title>-->
  <!--                </v-img>-->
  <!--                <v-card-subtitle class="pb-0">B.S. - Mathematics, Chemistry minor</v-card-subtitle>-->
  <!--                <v-card-text>-->
  <!--                  <v-list dense>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon>mdi-school-outline</v-icon></v-list-item-icon>-->
  <!--                      Graduated with Honors in Mathematics and a 3.9 major GPA-->
  <!--                    </v-list-item>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon>mdi-license</v-icon></v-list-item-icon>-->
  <!--                      Awarded the Harry A Benfer Memorial Scholarship for "promoting goodwill and demonstrating an-->
  <!--                      appreciation for all phases of college life"-->
  <!--                    </v-list-item>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon>mdi-football</v-icon></v-list-item-icon>-->
  <!--                      Voted captain of the varsity football team; named to the Academic Honor Roll-->
  <!--                    </v-list-item>-->
  <!--                  </v-list>-->
  <!--                </v-card-text>-->
  <!--              </v-card>-->
  <!--              <v-card>-->
  <!--                <v-card-title>Exams & Designations</v-card-title>-->
  <!--                <v-card-text>-->
  <!--                  <v-list dense>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon>mdi-seal-variant</v-icon></v-list-item-icon>-->
  <!--                      <b>Associate in Insurance Accounting and Finance</b>&nbsp;- The Institutes-->
  <!--                    </v-list-item>-->
  <!--                    <v-list-item>-->
  <!--                      <v-list-item-icon><v-icon>mdi-pencil-box-multiple-outline</v-icon></v-list-item-icon>-->
  <!--                      <b>Exams P & FM</b>&nbsp;- Society of Actuaries-->
  <!--                    </v-list-item>-->
  <!--                  </v-list>-->
  <!--                </v-card-text>-->
  <!--              </v-card>-->
  <!--            </v-card-text>-->
  <!--            <v-card-text class="projects" v-if="section === 'projects'">-->
  <!--              <v-list shaped>-->
  <!--                <v-list-item-->
  <!--                    v-for="projObj in cardObject.projects"-->
  <!--                >-->
  <!--                  <v-list-group class="width100" :value="projObj.value">-->
  <!--                    <template v-slot:prependIcon><v-icon dense>mdi-glasses</v-icon></template>-->
  <!--                    <template v-slot:activator><v-list-item-title>{{ projObj.name }}</v-list-item-title></template>-->
  <!--                    <v-list-item v-for="note in projObj.notes">-->
  <!--                      <v-list-item-icon class="pl-4"><v-icon dense>mdi-pencil-ruler</v-icon></v-list-item-icon>-->
  <!--                      <v-list-item-content v-html="note" class="d-inline"></v-list-item-content>-->
  <!--                    </v-list-item>-->
  <!--                  </v-list-group>-->
  <!--                </v-list-item>-->
  <!--              </v-list>-->
  <!--            </v-card-text>-->
  <!--            <v-card-actions v-if="section === 'intro'">-->
  <!--              <v-spacer></v-spacer>-->
  <!--              <v-btn-->
  <!--                  :href="githubLink"-->
  <!--                  target="_blank"-->
  <!--                  color="primary"-->
  <!--                  class="black&#45;&#45;text font-weight-bold"-->
  <!--              >github</v-btn>-->
  <!--              <v-spacer></v-spacer>-->
  <!--              <v-tooltip top>-->
  <!--                <template v-slot:activator="{ on }">-->
  <!--                  <v-btn-->
  <!--                      href="mailto:andrew@andrew-kincaid.com"-->
  <!--                      v-on="on"-->
  <!--                      color="primary"-->
  <!--                      class="black&#45;&#45;text font-weight-bold"-->
  <!--                  >email-->
  <!--                  </v-btn>-->
  <!--                </template>-->
  <!--                <span>andrew@andrew-kincaid.com</span>-->
  <!--              </v-tooltip>-->
  <!--              <v-spacer></v-spacer>-->
  <!--              <v-btn-->
  <!--                  :href="`${publicPath}AndrewKincaidResume.pdf`"-->
  <!--                  target="_blank"-->
  <!--                  color="primary"-->
  <!--                  class="black&#45;&#45;text font-weight-bold"-->
  <!--              >resume-->
  <!--              </v-btn>-->
  <!--              <v-spacer></v-spacer>-->
  <!--            </v-card-actions>-->
  <!--          </v-card>-->
  <!--        </v-carousel-item>-->
  <!--      </v-carousel>-->
  <!--    </v-card>-->
</template>

<script>
export default {
  name: "Homepage",
  data: () => ({
    githubLink: "https://github.com/atkincaid74",
    publicPath: process.env.BASE_URL,
    experienceOpen: 0,
    intro: {
      title: "Andrew&nbsp;<b>KINCAID</b>",
      subtitle: "Quantitative Analyst",
    },
    experience: [
      {
        dates: ["12/2019", "present"],
        title: "Quantitative Analyst II",
        employer: "AM Best Rating Services",
        description: [
          "Owned analytical Python package for the Quantitative Analysis Team, including a capital " +
            "adequacy model, projection model, and other credit rating tools;" +
            " reviewed the code for all pull requests to the package to make sure the team's standards " +
            "were met",
          "Contributed to the Vue.js single page application and Django API that allowed internal " +
            "analysts and external clients to interact with the models",
          "Communicated directly with the analysts using the application to gather feedback and " +
            "constantly improve the product before and after its official launch",
          "Worked closely with the system engineer to deploy the application on Red Hat Enterprise Linux " +
            "servers",
        ],
      },
      {
        dates: ["06/2018", "12/2019"],
        title: "Quantitative Analyst I",
        employer: "AM Best Rating Services",
        description: [
          "Created the quantitative analysis group's database schemas and objects. Collaborated " +
            "with the database administrators to constantly enhance the efficiency of the database",
          "Acted as the representative for my team of developers to the company's IT department to ensure" +
            " that goals and timelines were aligned",
        ],
      },
      {
        dates: ["06/2017", "06/2018"],
        title: "Associate Analyst",
        employer: "AM Best Rating Services",
        description: [
          "6 week orientation that gave a strong working knowledge of the insurance sector and an in " +
            "depth look at rating agencies and their role in the market",
          "Converted a suite of existing MS Excel/VBA models into Python. Brought 8 separate models into " +
            "one code base to drastically improve maintainability",
        ],
      },
    ],
    projects: [
      {
        name: "Personal Website",
        value: true,
        notes: [
          "Vue.js frontend, Django (Python) API, PostgreSQL database",
          "Deployed and hosted on Heroku as a separate frontend and backend",
          "Used as a host for my living resume and many ad-hoc projects",
        ],
      },
      {
        name: "Raspberry Pi Home Server",
        value: false,
        notes: [
          "Built Pi 4 into home development server for website with Docker containers for Vue frontend," +
            " Django backend, and Postgres DB",
          "Planning to add automated testing and task managing containers next",
        ],
      },
      {
        name: "Raspberry Pi Magic Mirror",
        value: false,
        notes: [
          'Used the <a target="_blank" href="https://github.com/MichMich/MagicMirror">Magic Mirror</a> ' +
            "GitHub project to turn a Pi Zero and an old monitor into an info hub",
          "Currently working on integrating the mirror with Alexa",
        ],
      },
    ],

    cardInfo: {
      intro: {
        title: "Andrew&nbsp;<b>KINCAID</b>",
        subtitle: "Quantitative Analyst",
      },
      education: {
        title: "Education",
      },
      skills: {
        title: "Skills",
        skills: {
          python: {
            name: "Python",
            value: 99,
            subSkills: {
              pandas: { name: "Pandas", value: 95 },
              sqlAlchemy: { name: "SQLAlchemy", value: 90 },
              django: { name: "Django", value: 80 },
            },
          },
          js: {
            name: "JavaScript",
            value: 70,
            subSkills: {
              vue: { name: "Vue.js", value: 70 },
            },
          },
          sql: {
            name: "SQL",
            value: 92,
            subSkills: {
              oracle: { name: "Oracle", value: 95 },
              sqlite: { name: "SQLite", value: 90 },
              postgresql: { name: "PostgreSQL", value: 70 },
            },
          },
          git: {
            name: "Git",
            value: 85,
          },
          windows: {
            name: "Windows",
            value: 100,
          },
          linux: {
            name: "Linux",
            value: 85,
          },
          docker: {
            name: "Docker",
            value: 50,
          },
          azure: {
            name: "Azure DevOps",
            value: 65,
          },
        },
      },
    },
  }),
  computed: {
    numYears: function () {
      const startDate = new Date(2017, 5, 1);
      const today = new Date();
      let days = (today - startDate) / 1000 / 60 / 60 / 24;

      return Math.floor(days / 365);
    },
  },
  methods: {
    offset(idx) {
      return idx * 3;
    },
    logResume() {
      if (this.$route.path === "/resume") {
        this.$store.dispatch("logResumeHit");
      }
    },
  },
  mounted() {
    this.logResume();
  },
};
</script>

<style scoped>
.v-card__title {
  font-size: 3rem;
  line-height: 1.01;
  word-break: normal;
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
.date,
.employer {
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
.skills,
.experience,
.education,
.projects {
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
.width100 {
  width: 100%;
}
</style>
