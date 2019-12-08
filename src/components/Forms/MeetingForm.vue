<template>
  <v-card>
    <v-form ref="form" v-model="validForm" @submit.prevent="save">
      <v-card-title class="headline grey lighten-2" primary-title>
        Добавить встречу
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-text-field
              v-model="editMeeting.title"
              label="Тема"
              :rules="rules.nameRules"
              required
            ></v-text-field>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="dateTimeStart"
                :label="
                  `Начало встречи: ${new Date(dateTimeStart).toLocaleString(
                    'ru-RU'
                  )}`
                "
                :rules="rules.dateRules"
                hint="ГГГ-ММ-ДД, ЧЧ:ММ"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="dateTimeFinish"
                :label="
                  `Окончание встречи ${new Date(dateTimeFinish).toLocaleString(
                    'ru-RU'
                  )}`
                "
                :rules="rules.dateRules"
                hint="ГГГ-ММ-ДД, ЧЧ:ММ"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-autocomplete
              v-model="editMeeting.facilitator"
              label="Фасилиатор"
              :item-text="'name'"
              :item-id="'id'"
              :items="facilitatorUsers"
              return-object
              :rules="rules.required"
              required
            >
              <template slot="selection" slot-scope="data"
                >{{ data.item.name }} {{ data.item.firstName }}</template
              >
              <template slot="item" slot-scope="data"
                >{{ data.item.name }} {{ data.item.firstName }}</template
              >
            </v-autocomplete>
          </v-row>
          <v-row>
            <v-autocomplete
              v-model="editMeeting.secretar"
              label="Секретарь"
              :item-text="'name'"
              :item-id="'id'"
              :items="secretarUsers"
              return-object
              :rules="rules.required"
              required
            >
              <template slot="selection" slot-scope="data"
                >{{ data.item.name }} {{ data.item.firstName }}</template
              >
              <template slot="item" slot-scope="data"
                >{{ data.item.name }} {{ data.item.firstName }}</template
              >
            </v-autocomplete>
          </v-row>
          <v-row>
            <v-select
              v-model="editMeeting.members"
              :items="usersForSelect"
              attach
              label="Участники"
              multiple
              persistent-hint
            >
            </v-select>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" type="submit" text>
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { rules } from "../../rules";
import { mapGetters } from "vuex";

export default {
  mixins: [rules],
  data() {
    return {
      editMeeting: {},
      validForm: false,
      dateTimeStart: new Date()
        .toISOString()
        .substr(0, 16)
        .replace("T", ", "),
      dateTimeFinish: new Date(new Date().getTime() + 1000 * 60 * 60)
        .toISOString()
        .substr(0, 16)
        .replace("T", ", ")
    };
  },
  computed: {
    ...mapGetters(["allUsers"]),
    usersForSelect() {
      let sortUser = [...this.allUsers];

      const indexSecretar = this.allUsers.indexOf(this.editMeeting.secretar);
      if (indexSecretar != -1) sortUser.splice(indexSecretar, 1);

      const indexFacilitator = this.allUsers.indexOf(
        this.editMeeting.facilitator
      );
      if (indexFacilitator != -1) sortUser.splice(indexFacilitator, 1);

      return sortUser.map(u => `${u.name} ${u.firstName}`) || [];
    },
    facilitatorUsers() {
      let sortUser = [...this.allUsers];
      const indexSecretar = this.allUsers.indexOf(this.editMeeting.secretar);
      if (indexSecretar != -1) sortUser.splice(indexSecretar, 1);
      return sortUser;
    },
    secretarUsers() {
      let sortUser = [...this.allUsers];
      const indexFacilitator = this.allUsers.indexOf(
        this.editMeeting.facilitator
      );
      if (indexFacilitator != -1) sortUser.splice(indexFacilitator, 1);
      return sortUser;
    }
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.editMeeting.dateTimeStart = new Date(this.dateTimeStart).getTime();
        this.editMeeting.dateTimeFinish = new Date(
          this.dateTimeFinish
        ).getTime();
        this.$store.dispatch("addMeeting", this.editMeeting);
        this.editMeeting = {};
        this.$refs.form.resetValidation();
        this.$emit("close");
      }
    }
  }
};
</script>
