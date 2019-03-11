// This is just an example,
// so you can safely delete all default props below

export default {
  global: {
    dialog: {
      cancel: "Отмена",
      yes: "Да",
      ok: "Да"
    },
    btn: {
      save: "Сохранить",
      cancel: "Отмена"
    }
  },
  loginOrRegisterMenu: {
    enter: "Войти",
    register: "Зарегистрироваться"
  },
  app: {
    loading: "Загрузка...",
    canNotConnectApi: "Невозможно соединиться с API."
  },
  captcha: {
    newCommentBtn: "Выдать новое изображение",
    waitMessage: "Что бы сгенерировать новый токен, нужно немного подождать, попробуйте через некоторое время",
    enterToken: "Введите текст с картинки",
    required: "@:captcha.enterToken",
  },
  userMenu: {
    profile: "Профиль",
    yourAccount: "Личный кабинет",
    adminPanel: "Админка",
    exit: "Выйти",
    logoutNotifyMessage: "Вы вышли",
  },
  login: {
    nameOrEmail: "Имя или email",
    password: "Пароль",
    entering: "Заходим...",
    enterBtn: "Войти",
    forgotPassword: "Забыли пароль?",
    notMyComputer: "Чужой компьютер",
    enterSuccess: "Вы зашли",
    validation: {
      nameOrEmail: {
        required: "Введите имя или email"
      },
      password: {
        required: "Введите пароль"
      },
    }
  },
  register: {
    title: "Зарегистрироваться",
    userName: "Имя пользователя",
    email: "Email",
    password: "Пароль",
    password2: "Подтвердите пароль",
    registerBtn: "@:register.title",
    registering: "Регистрируемся...",
    emailSent: "Сообщение с ссылкой для регистрации отправлено на email",
    validation: {
      userName: {
        required: "Введите имя пользователя",
        minLength: "Имя пользователя должно быть не менее чем из 3 букв",
        maxLength: `Имя пользователя должно состоять не более чем из ${config.DbColumnSizes.Users_UserName} символов`
      },
      email: {
        required: "Введите email",
        emailSig: "Неправильная сигнатура email",
        maxLength: `Email должен состоять не более чем из ${config.DbColumnSizes.Users_Email} символов`
      },
      password: {
        required: "Введите пароль",
        minLength: `Пароль должен состоять не менее чем из ${config.PasswordValidation.MinLength} символов`,
        minDifferentChars: `В пароле должно быть не менее ${config.PasswordValidation.MinDifferentChars} разных символов`
      },
      password2: {
        equals: "Пароли должны совпадать"
      }
    }
  },
  addEditComment: {
    required: "Введите сообщение",
    htmlTextSizeOrHasImage: "Минимальная длинна текста - 5",
    spamProtectionMessage: "Нельзя так часто отправлять сообщения. Подождите немного."
  },
  addEditMaterial: {
    title: "Заголовок",
    description: "Короткое описание",
    tags: "Метки",
    validation: {
      title: {
        required: "Введите заголовок",
        minLength: "Минимальная длинна заголовка - 3",
        maxLength: `Максимальная длинна заголовка - ${config.DbColumnSizes.Materials_Title}`,
      },
      text: {
        required: "Введите текст",
        htmlTextSizeOrHasImage: "Минимальная длинна текста - 5",
      },
      description: {
        maxLength: "Максимально допустимая длинна " + config.DbColumnSizes.Materials_Description
      },
      category: {
        required: "Выберите раздел"
      }
    }
  },
  myEditor: {
    uploadImages: "Добавить изображения"
  },
  material: {
    category: "раздел:",
    edit: "Редактировать",
    tags: "Метки:"
  },
  readComment: {
    edit: "редактировать",
    deleteDialogComment: "Удалить сообщение?"
  },
  postInList: {
    commentsCount: "сообщений",
    readMore: "Читать дальше"
  },
  blog: {
    newPost: "Новый пост"
  },
  settingsMenu: {
    goToProfile: "Просмотреть профиль",
    changeEmail: "Изменить email",
    changePassword: "Изменить пароль",
    changeLink: "Изменить link",
    changeName: "Изменить имя",
    changeYourInformation: "Изменить информацию о вас",
    changePhoto: "Изменить фотографию",
    banedUsersList: "Забаненые пользователи"
  },
  settingsPage: {
    title: "Личный кабинет"
  },
  changeName: {
    title: "Изменить имя пользователя",
    successNotify: "Имя изменено",
    nameValidationInfo: "Имя может состоять из букв, цифр, пробела и символа '-', длинны не менее 3.",
    save: "@:global.btn.save",
    name: "Имя",
    password: "Пароль",
    validation: {
      password: {
        required: "Введите пароль"
      },
      name: {
        required: "Введите имя",
        minLength: "Длинна имени должна быть не меньше 3",
        allowedChars: "Возможно использование только допустимых символов",
        nameInDb: "Это имя уже занято"
      }
    }
  },
  changeLink: {
    title: "Редактировать Link пользователя",
    linkEditedMessage: "Link отредактирован",
    link: "Link",
    linkValidationInfo: "Link должен состоять не менее чем из 3 символов <span class='text-brown-9'>'a-z', 'A-Z', '-', '0-9'</span>. И содержать хотя бы одну букву.",
    saveBtn: "@:global.btn.save",
    validation: {
      minLength: "Длинна link должна быть не менее 3",
      allowedChars: "Допустимы только буквы английского алфавита и цифры",
      numberNotAllow: "Необходимо что бы в link входили буквы",
      linkInDb: "Этот link уже занят"
    }
  },
  changeEmail: {
    title: "Редактировать email пользователя",
    successNotify: "Сообщение с ссылкой для подтверждения email отправлено по почте",
    validation: {
      password: {
        required: "Необходимо ввести пароль"
      },
      email: {
        required: "Необходимо ввести email",
        emailSig: "Введите валидный email"
      }
    }
  },
  changePassword: {
    title: "Изменить пароль",
    successNotify: 'Пароль изменён.',
    changeBtn: "Изменить пароль",
    passwordOld: "Старый пароль",
    password: "Новый пароль",
    password2: "Подтвердите новый пароль",
    validation: {
      passwordOld: {
        required: "Необходимо ввести старый пароль"
      },
      password: {
        required: "@:register.validation.password.required",
        minLength: "@:register.validation.password.minLength",
        minDifferentChars: "@:register.validation.password.minDifferentChars",
      },
      password2: {
        equals: "@:register.validation.password2.equals",
      }
    }
  },
  forumPanel: {
    newTopics: "Новые сообщения",
    sections: "Разделы"
  },
  topic: {
    lastFrom: "Последнее от"
  },
  activity: {
    material: "Текст",
    comment: "Комментарий"
  },
  thread: {
    newTopicBtn: "Новая тема",
    topic: "Тема",
    last: "Последнее"
  },
  newTopics: {
    titleStart: "Новые темы",
    newTopicBtn: "@:thread.newTopicBtn",
    topic: "@:thread.topic",
    last: "@:thread.last"
  },
  admin: {
    adminPanel: {
      title: "Админка"
    },
    adminMenu: {
      categoriesAdmin: "Категории",
      rolesPermissions: "Настройка прав",
      rolesUsers: "Группы пользователей"
    },
    editCategory: {
      title: "Редактировать категорию",
      deleteBtn: "Удалить категорию",
      saveBtn: "@:global.btn.save",
      cancelBtn: "@:global.btn.cancel",
    },
    addCategory: {
      title: "Добавить категорию",
      createBtn: "Создать",
      cancelBtn: "@:global.btn.cancel",
    },
    categoryForm: {
      name: "Имя категории (eng)",
      title: "Заголовок",
      shortDescription: "Короткое описание",
      header: "Шапка категории",
      selectParent: "Выберите родительскую категорию",
      sectionType: "Тип категории",
      deleteConfirm: "Вы уверены что хотите удалить категорию?\nВсё содержание категории также будут удалено.",
      parent: "Родитель: "
    },
    categoriesAdminPage: {
      title: "Админка категорий",
      addCategoryBtn: "Добавить категорию"
    }
  },
}
