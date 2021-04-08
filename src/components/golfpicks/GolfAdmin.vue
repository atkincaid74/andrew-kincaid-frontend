<template>
  <v-card
      max-width="95%"
      class="mx-auto mt-2"
  >
    <v-card-title>
      <div class="mt-3">Players</div>
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          :append-icon="searchIcon"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :loading="loading"
          :items-per-page="-1"
          dense
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-toolbar-title>Add Player</v-toolbar-title>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  New Player
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.name"
                            label="Name"
                            autofocus
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                          v-for="player in headers.map(e => e.text).filter(e => e.startsWith('player'))"
                      >
                        <v-select
                            v-model="editedItem[player]"
                            :label="player"
                            :items="playerOptions[player]"
                        ></v-select>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.winning_score"
                            label="winning_score"
                            @keyup.enter="save"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>

    </v-card-actions>
  </v-card>
</template>

<script>
import {mdiMagnify} from '@mdi/js';
import { toTitleCase } from "@/helpers";

export default {
  name: "GolfAdmin",
  data: () => ({
    rawData: null,
    search: '',
    searchIcon: mdiMagnify,
    loading: false,
    status: '',
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {
      name: '',
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: '',
      winning_score: '',
    },
    defaultItem: {
      name: '',
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: '',
      winning_score: '',
    },
    playerOptions: {
      player1: [
        'Dustin Johnson',
        'Justin Thomas',
        'Jon Rahm',
        'Collin Morikawa',
        'Bryson DeChambeau',
        'Xander Schauffele',
        'Patrick Reed',
        'Tyrrell Hatton',
        'Patrick Cantlay',
        'Webb Simpson',
      ],
      player2: [
        'Rory McIlroy',
        'Brooks Koepka',
        'Tony Finau',
        'Viktor Hovland',
        'Daniel Berger',
        'Matthew Fitzpatrick',
        'Paul Casey',
        'Sungjae Im',
        'Lee Westwood',
        'Harris English',
      ],
      player3: [
        'Matthew Wolff',
        'Tommy Fleetwood',
        'Louis Oosthuizen',
        'Hideki Matsuyama',
        'Adam Scott',
        'Ryan Palmer',
        'Cameron Smith',
        'Abraham Ancer',
        'Joaquin Niemann',
        'Kevin Na',
        'Will Zalatoris',
        'Robert MacIntyre',
      ],
      player4: [
        'Jason Kokrak',
        'Scottie Scheffler',
        'Victor Perez',
        'Billy Horschel',
        'Christiaan Bezuidenhout',
        'Kevin Kisner',
        'Max Homa',
        'Justin Rose',
        'Marc Leishman',
        'Shane Lowry',
        'Brian Harman',
        'Zach Johnson',
      ],
      player5: [
        'Corey Conners',
        'Sergio Garcia',
        'Bernd Wiesberger',
        'Carlos Ortiz',
        'Jason Day',
        'Si Woo Kim',
        'Lanto Griffin',
        'Brendon Todd',
        'Gary Woodland',
        'Jordan Spieth',
        'Phil Mickelson',
        'Charl Schwartzel',
      ],
      player6: [
        'Matt Wallace',
        'Mackenzie Hughes',
        'Matt Kuchar',
        'Bubba Watson',
        'Sebastian Munoz',
        'Ian Poulter',
        'Dylan Frittelli',
        'Danny Willett',
        'Cameron Champ',
        'Francesco Molinari',
        'Matt Jones',
        'C.T. Pan',
      ],
    }
  }),
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  computed: {
    width() {
      return '95%';
    },
    headers() {
      if (this.rawData) {
        const baseHeaders = Object.keys(this.rawData[0]).map(key => ({text: toTitleCase(key), align: 'left', value: key}));
        const actionHeader = [{ text: 'Actions', value: 'actions', sortable: false }, ];
        return baseHeaders.concat(actionHeader);
      } else {
        return []
      }
    },
    items() {
      if (this.rawData) {
        return Object.values(this.rawData);
      } else {
        return []
      }
    },
    formTitle() {
      return this.editedIndex === -1 ? 'New Player' : 'Edit Player'
    },
  },
  beforeMount() {
    this.getPlayers();
  },
  methods: {
    toTitleCase,
    async getPlayers() {
      this.loading = true;
      const response = await this.$store.dispatch('getPlayers');
      this.rawData = JSON.parse(response.data);
      this.loading = false;
    },
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    async deleteItemConfirm () {
      await this.$store.dispatch('deletePlayer', this.editedItem)
      this.closeDelete()
      await this.getPlayers()
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    async save () {
      if (this.editedIndex > -1) {
        await this.$store.dispatch('editPlayer', this.editedItem)
      } else {
        await this.$store.dispatch('addPlayer', this.editedItem)
      }
      this.close()
      await this.getPlayers()
    },
  }
}
</script>

<style scoped>

</style>