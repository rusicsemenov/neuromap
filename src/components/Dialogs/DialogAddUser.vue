<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn color="primary lighten-2" dark v-on="on" text>
        {{ btnName }} <v-icon v-text="btnIcon" v-if="btnIcon" right></v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-form ref="form" v-model="validForm" @submit.prevent="save">
        <v-card-title class="headline grey lighten-2" primary-title>
          Добавить пользователя
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row cols="12">
              <v-text-field
                v-model="editedUser.name"
                label="Имя"
                :rules="rules.nameRules"
                required
              ></v-text-field>
            </v-row>
            <v-row cols="12">
              <v-text-field
                v-model="editedUser.firstName"
                label="Фамилия"
                :rules="rules.nameRules"
                required
              ></v-text-field>
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
  </v-dialog>
</template>

<script>
import { rules } from "../../rules";
export default {
  mixins: [rules],
  props: {
    btnName: {
      type: String,
      default: "добавить"
    },
    btnIcon: {
      type: String,
      default: "mdi-account-plus-outline"
    },
    editedUser: {
      type: Object,
      default: () => {
        return {
          name: "",
          firstName: ""
        };
      }
    }
  },
  data() {
    return {
      validForm: false,
      dialog: false
    };
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.senddata = true;
        this.editedUser.id = `u${(+new Date()).toString(16)}`;
        this.$store.dispatch("addUser", this.editedUser);

        this.senddata = false;
        this.dialog = false;
      }
    }
  },
  watch: {
    dialog(val) {
      if (this.$refs.form && val) this.$refs.form.resetValidation();
    }
  }
};
</script>
