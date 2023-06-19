var quizzData = [
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description:
            'Какой тип кухни интересует',
        name: 'Тип кухни',
        answers: [
            {
                value: 'Прямая',
                image: './assets/image/quizz/1.webp',
                text: 'Прямая',
            },
            {
                value: 'Угловая',
                image: './assets/image/quizz/2.webp',
                text: 'Угловая',
            },
            {
                value: 'П образная',
                image: './assets/image/quizz/3.webp',
                text: 'П образная',
            },
            {
                value: 'С островом',
                image: './assets/image/quizz/4.webp',
                text: 'С островом',
            },
        ],
    },
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description: 'Вы знаете размер вашей кухни?',
        name: 'Размер кухни',
        answers: [
            {
                value: 'Да',
                text: 'Да',

            },
            {
                value: 'Нет, не знаю',
                text: 'Нет, не знаю',
            },
        ],
    },
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description: 'Выберите материал фасадов или укажите свой',
        name: 'Материал фасадов',
        answers: [
            {
                value: 'МДФ в пленке',
                text: 'МДФ в пленке',
            },
            {
                value: 'Пластик',
                text: 'Пластик',
            },
            {
                value: 'Акрил',
                text: 'Акрил',
            },
            {
                value: 'Шпон',
                text: 'Шпон',
            },
            {
                value: 'Натуральное дерево',
                text: 'Натуральное дерево',
            },
            {
                value: 'Крашеная эмаль',
                text: 'Крашеная эмаль',
            },
            {
                value: 'FENIX самовосстанавливающийся ',
                text: 'MS1FENIX самовосстанавливающийся 55',
            },
            {
                type: 'text',
                placeholder: 'Другое',
                name: 'Другое',
            },
        ],
    },
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description: 'Выберите столешницу',
        name: 'Столешница',
        answers: [
            {
                value: 'Ламинированная влагостойкая ДСП',
                text: 'Ламинированная влагостойкая ДСП',
            },
            {
                value: 'Деревянная из ценных пород',
                text: 'Деревянная из ценных пород',
            },
            {
                value: 'Кварцевая',
                text: 'Кварцевая',
            },
            {
                value: 'Акриловая (искусственный камень)',
                text: 'Акриловая (искусственный камень)',
            },
        ],
    },
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description:
            'Выберите тип фурнитуры',
        name: 'Тип фурнитуры',
        answers: [
            {
                value: 'BLUM фурнитура премиум класса',
                image: './assets/image/quizz/5.webp',
                text: 'BLUM фурнитура премиум класса',
            },
            {
                value: 'GRASS фурнитура среднего класса',
                image: './assets/image/quizz/6.webp',
                text: 'GRASS фурнитура среднего класса',
            },
            {
                value: 'NO NAME фурнитура эконом класса',
                image: './assets/image/quizz/7.webp',
                text: 'NO NAME фурнитура эконом класса',
            },
            {
                value: 'Другое...',
                image: './assets/image/quizz/7.webp',
                text: 'Другое...',
            },
        ],
    },
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description: 'Предполагаемый бюджет',
        name: 'Тип кухни',
        answers: [
            {
                value: 'от 90-120 тыс. руб.',
                text: 'от 90-120 тыс. руб.',
            },
            {
                value: 'от 120-160 тыс. руб.',
                text: 'от 120-160 тыс. руб.',
            },
            {
                value: 'от 160-200 тыс. руб.',
                text: 'от 160-200 тыс. руб.',
            },
            {
                value: 'более 200 тыс. руб.',
                text: 'более 200 тыс. руб.',
            },
        ],
    },
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description: 'Когда планируете установку кухни?',
        name: 'Время установки кухни',
        answers: [
            {
                value: 'В ближайшее время',
                text: 'В ближайшее время',
            },
            {
                value: 'Через месяц',
                text: 'Через месяц',
            },
            {
                value: 'В течение трех месяцев',
                text: 'В течение трех месяцев',
            },
            {
                value: 'Прицениваюсь',
                text: 'Прицениваюсь',
            },
        ],
    },
    {
        title: 'Узнайте стоимость вашей кухни на заказ',
        description:
            'Выслать расчет на:',
        name: 'Куда выслать расчет',
        answers: [
            {
                value: 'Whats App',
                image: './assets/image/quizz/8.webp',
                text: 'Whats App',
            },
            {
                value: 'SMS',
                image: './assets/image/quizz/9.webp',
                text: 'SMS',
            },
        ],
    },
    {
        html: `
                <h3 class="q-laststep-title">Заполните контактные данные для получения расчета вашей кухни</h3>
                <p class="q-laststep-description">Наш менеджер уже рассчитывает цену вашего заказа.</p>
                <div class="q-laststep-form">
                    <div class="q-laststep-form-group">
                        <label class="q-laststep-label">Введите имя</label>
                        <input type="text" name="Имя" placeholder="Имя">
                    </div>
                    <div class="q-laststep-form-group">
                        <label class="q-laststep-label">Введите ТЕЛЕФОН</label>
                        <input required type="number" name="Телефон" placeholder="Телефон">
                    </div>
                    <button id="q-laststep-button" type="submit" class="q-laststep-button">Получить скидку</button>
                </div>
            `,
    },
]
