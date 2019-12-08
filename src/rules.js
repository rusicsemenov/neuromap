export const rules = {
  data() {
    return {
      rules: {
        title: [
          v => !!v || "Наименование обязателено",
          v => (v && v.length >= 3) || "Не менее 3 символов"
        ],
        required: [v => !!v || "Обязателено к заполнения"],
        number: [
          v => (!isNaN(parseFloat(v)) && isFinite(v)) || "Не верное число"
        ],
        passwordRules: [
          v => !!v || "Пароль обязателен",
          v => (v && v.length >= 8) || "Не менее 8 символов"
        ],
        emailRules: [
          v => !!v || "E-mail обязателен",
          v => /.+@.+\..+/.test(v) || "E-mail не валиден"
        ],
        nameRules: [
          v => !!v || "Имя обязателено",
          v => (v && v.length >= 3) || "Не менее 3 символов"
        ],
        dateRules: [
          v => !!v || "Обязателено к заполнения",
          v => new Date(v) != "Invalid Date" || "Невалидная дата"
        ]
      }
    };
  }
};
