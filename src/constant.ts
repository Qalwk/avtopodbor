
export const siteText = {

    contact: {
      title: "Почему стоит обратиться к нам",
      description: "Мы убережем вас от:",
      text1: "Скрутка пробега",
      text2: "Вложения в автомобиль",
      text3: "Технические проблемы",
      text4: "Восстановленная безопасность",
      text5: "Авто после ДТП",
      text6: "Юридически проблемы",
    },

    guarantee: {
      title: "Гарантия вашей уверенности",
      card1: {
        text: "Юридическая",
        description: "Вы приобретаете автомобиль без кредитных и залоговых обязательств, измененных маркировок, запрета на регистрацию и других ограничений.",
      },
      card2: {
        text: "Техническая",
        description: "Отремонтируем ваш автомобиль. Если неисправность не была выявлена при диагностике автомобиля.",
      },
      card3: {
        text: "100% Возврат денег",
        description: "Если мы не сможем найти для вас требуемый автомобиль в установленные сроки — вернем предоплату в полном объёме.",
      },
    },

    action: {
      title: "Оставить заявку",
      description: "Найдем вам идеальное предложение на рынке, которое полностью соответствует вашим требованиям и обладает безупречной юридической и технической документацией",
    },

}


export const SERVICES_1TITLE = "Что мы проверяем"
export const SERVICES_TITLE = {
  first: "Наши услуги",
  second: "Выездная диагностика",
  third: "Эксперт на день",
  fourth: "Экспресс подбор",
  fifth: "Анализ рынка",
  sixth: "Предпродажная оценка",
}
export const SERVICES_CARDS = {
    first: {
        title: "Подбор под ключ",
        price: "от 30.000рублей",
        description: [
          "Экономия личного времени и денег", 
          "Сопровождение процесса покупки", 
          "Контроль передачи денег и оформления документов",
          "Поиск автомобиля до результата", 
          "Возможность получить лучший авто за свои деньги",
          "Диагностический лист на фирменном бланке",
        ],
        button: "Подробнее",
        img: "./img/services/Frame1.png"
    },
    second: {
        title: "Выездная диагностика",
        price: "от 5.000рублей ",
        description: [
          "Оценка стоимости автомобиля",
          "Вы получите описание состояния и полный перечень неисправностей",
          "Ищем предмет для аргументированного торга с продавцом",
          "Экспертная оценка целесообразности покупки",
          "Диагностический лист на фирменном бланке",
        ],
        button: "Подробнее",
        img: "./img/services/Frame2.png"
    },
    third: {
      title: "Эксперт на день",
      price: "от 15.000рублей ",
      description: [
        "Советы по выбору объявлений",
        "Неограниченное количество в течение рабочего дня",
        "Перемещение на авто эксперта",
        "Вы получите описание состояния и полный перечень неисправностей",
        "Цена выгоднее, чем при разовом выезде",
        "Диагностический лист на фирменном бланке",
      ],
      button: "Подробнее",
      img: "./img/services/Frame3.png"
    },
    fourth: {
      title: "Экспресс подбор",
      price: "от 30.000рублей ",
      description: [
        "Анализ и осмотр на подъемнике",
        "Получить авто в кротчайшие сроки (2-3 дня)",
        "Стоимость выгоднее, чем при разовом выезде",
        "Диагностический лист на фирменном бланке",
      ],
      button: "Подробнее",
      img: "./img/services/Frame4.png"
    },
    fifth: {
      title: "Анализ рынка",
      price: "от 5.000рублей ",
      description: [
        "Подбор потенциально хороших объявлений по Вашим критериям",
        "Исключение сомнительных объявлений, от «перекупов» и «серых» салонов",
        "Прозвон объявлений и составление списка объявлений к осмотру",
        "Рекомендации по выбору альтернативных марок авто",
      ],
      button: "Подробнее",
      img: "./img/services/Frame5.png"
    },
    sixth: {
      title: "Предпродажная оценка",
      price: "от 5.000рублей ",
      description: [
        "Выезд Эксперта в удобное для Вас место и время",
        "Оценка рыночной стоимости",
        "Оценка максимальной стоимости продажи",
        "Рекомендации по продаже",
        "Диагностический лист на фирменном бланке",
      ],
      button: "Подробнее",
      img: "./img/services/Frame6.png"
    },
}
export type ServicesCardsType = keyof typeof SERVICES_CARDS

export const HERO_INFO = {
  title: "Подбор автомобиля с пробегом под ключ",
  description: "Мы поможем вам найти идеальный подержанный автомобиль, который соответствует вашим потребностям и бюджету. Наш индивидуальный подход и прозрачный процесс гарантируют, что вы получите лучший автомобиль по лучшей цене.",
  button: "Подобрать авто"
}

export const PLUS_INFO = [
    { text: "Работаем с 2015 года", img: "./img/plus/Time.svg" },
    { text: "Более 1000 клиентов", img: "./img/plus/People.svg" },
    { text: "Доступные цены", img: "./img/plus/Money.svg" },
    { text: "Быстро и качественно", img: "./img/plus/Flash.svg" },
    { text: "Работаем по договору", img: "./img/plus/Document.svg" },
]

export const SUPPORT_INFO = {
    title: "Сопровождение покупки автомобиля",
    items: [
      { text: "Поиск и проверка автомобилей", icon: "./img/support/Search.svg" },
      { text: "Сопровождение сделки", icon: "./img/support/People.svg" },
      { text: "Комплексная проверка", icon: "./img/support/Light.svg" },
      { text: "Торг с продавцом", icon: "./img/support/Brief.svg" },
    ]
}

export const MISSION_INFO = {
  title: "Наша задача",
  items: [
    "Найти вам идеальный автомобиль под ваши задачи и бюджет.",
    "Сделать процесс покупки авто прозрачным — избежим серых схем и обмана.",
    "Найти технически исправный и юридически чистый автомобиль, который прослужит долгие годы. Или ликвидный автомобиль, который вы сможете без проблем продать через пару лет эксплуатации.",
  ]
}

export const CHECK_TITLE = "Что мы проверяем"

export const CHECK_CARDS = {
    card1: {
      text: "ДВС.",
      description: "Проверка состояния течи, запотевания, компрессии, эндоскопия, компьютерная диагностика.",
      icon: "./img/check/DVS.svg"
    },
    card2: {
      text: "Кузов.",
      description: "Проверка кузова на следы ремонта, перекраски, замены деталей.",
      icon: "./img/check/Body.svg"
    },
    card3: {
      text: "Рулевое управление.",
      description: "Проверка наличия люфтов, стуков, подтеков рабочей жидкости и равномерный ход.",
      icon: "./img/check/Steering.svg"
    },
    card4: {
      text: "Безопасность.",
      description: "Проверка на срабатывание системы безопасности.",
      icon: "./img/check/Safety.svg"
    },
    card5: {
      text: "АКПП.",
      description: "Проверка правильности переключения передач, компьютерная диагностика, отсутствие течи.",
      icon: "./img/check/AKPP.svg"
    },
    card6: {
      text: "Юридическая чистота.",
      description: "Сверка маркировочных табличек и VIN номера, проверка по базам ГИБДД и Реестра залогов, подтверждение подлинности ПТС.",
      icon: "./img/check/Legal.svg"
    },
    card7: {
      text: "Тормоза.",
      description: "Проверка состояния дисков, колодок, тормозных механизмов и систем помощи при торможении.",
      icon: "./img/check/Brakes.svg"
    },
    card8: {
      text: "Турбина.",
      description: "Проверка давления наддува, отсутствие подтеков масла.",
      icon: "./img/check/Turbine.svg"
    },
}

export type CheckCardsType = keyof typeof CHECK_CARDS

export const RISK_TITLE = "Чем вы рискуете при самостоятельной покупке"

export const RISK_CARD = {
  card1: {
    text: "Деньгами",
    description: "– Крупные непредвиденные вложения после покупки которые вы могли не заметить",
    icon: "./img/risk/Money.svg"
  },
  card2: {
    text: "Временем",
    description: "– Долгие поиски нужного варианта мы возьмем это на себя",
    icon: "./img/risk/Timer.svg"
  },
  card3: {
    text: "Нервами",
    description: "– Позаботьтесь о своем спокойствие, все нудные переговоры и поиски оставьте специалистам",
    icon: "./img/risk/Heart.svg"
  },
}

export type RiskCardsType = keyof typeof RISK_CARD