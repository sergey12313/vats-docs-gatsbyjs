const menuType = {
    header: 1,
    item:2,
    chapter:3,
    itemMain: 4

};
exports.menuType = menuType;
exports.menu = [
    {type: menuType.header, title:"Документация ВАТС"},
    {type: menuType.itemMain, title: "Введение", path: '/'},
    {type: menuType.header, title:"Начало работы с порталом"},
    {type: menuType.item, title: "Веб-кабинет пользователя", path: '/work-start/web-cabinet.mdx'},
    {type: menuType.item, title: "Главная страница веб-кабинета ВАТС", path: '/work-start/main-page.mdx'},
  
    {type: menuType.header, title:"Описание Пунктов Меню"},
    {type: menuType.chapter, title: "Настройки ВАТС", path: '/common-settings/README.mdx', child: [
            {type: menuType.item, title: "Настройки", path: '/common-settings/settings.mdx'},
            {type: menuType.item, title: "История операций", path: '/common-settings/history-operations.mdx'},
            {type: menuType.item, title: "Тарифы", path: '/common-settings/tariffs.mdx'},
            {type: menuType.item, title: "Аудиофайлы", path: '/common-settings/audiofiles.mdx'},
            {type: menuType.item, title: "Маршрутизация", path: '/common-settings/routing.mdx'},
    ] },
    {type: menuType.item, title: "Сотрудники", path: '/users/README.mdx'},
    {type: menuType.item, title: "Профиль пользователя", path: '/user-profile/README.mdx'},
    {type: menuType.item, title: "Голосовая почта", path: '/voicemail/README.mdx'},
    {type: menuType.chapter, title: "Сервисы", path: '/services/README.mdx', child: [
        {type: menuType.item, title: "Группы обзвона", path: '/services/groups.mdx'},
        {type: menuType.item, title: "Конференции", path: '/services/confs.mdx'},
        {type: menuType.item, title: "Голосовое Меню", path: '/services/ivr.mdx'},
        {type: menuType.item, title: "Виртуальные факсы", path: '/services/faxes.mdx'},
        
    ]},
    {type: menuType.item, title: "Аналитика", path: '/analistics/README.mdx'},
    {type: menuType.item, title: "Записи разговоров", path: '/records/README.mdx'},
    {type: menuType.item, title: "Приложения", path: '/misc/Readme.mdx'},
    {type: menuType.item, title: "Интеграция с Битрикс24", path: '/crm/bitrix.mdx'},
]