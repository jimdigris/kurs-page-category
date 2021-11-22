'use strict';
console.log('script-load');
// разворачивание фильтров на десктопе
(function () {
    const filters = document.querySelector('#filters');
    const classes = {
        oneFilter: '.left-column__filters-one',
        inputsFilter: '.left-column__filters-one-inputs',
        btnExpandFilter: '.left-column__filters-one-btn-expand',
        btnClearFilter: '.left-column__filters-manager-buttons-clear',
        expandStatus: 'left-column__filters-one-inputs-expand'
    };

    if (filters) {
        // массив одиночных фильтров
        //const filtersOne = Array.from(filters.querySelectorAll(classes.oneFilter));
        const filtersOne = Array.prototype.slice.call(filters.querySelectorAll(classes.oneFilter));
        // кнопка очистки фильтров
        const clearFilterBtn = filters.querySelector(classes.btnClearFilter);


        // --- ---


        filtersOne.forEach(function (filterOne) {
            // ищем кнопку "Показать все варианты"
            let button = filterOne.querySelector(classes.btnExpandFilter);
            // если нашли
            if (button) {
                // ищем блок с инпутами-чекбоксами фильтра, соответствующий этой кнопке
                let inputs = filterOne.querySelector(classes.inputsFilter);
                // и вешаем на него обработчик клика
                button.addEventListener('click', (function () { changeFilterSize(inputs, button); }));
            }
        });

        clearFilterBtn.addEventListener('click', executeClearFilter);


        // --- ---


        // кликнули на кн Показать все варианты
        function changeFilterSize(inputs, button) {
            let status = button.getAttribute('data-status');

            if (status === 'collapsed') {
                inputs.classList.add(classes.expandStatus);
                button.textContent = 'Свернуть';
                button.setAttribute('data-status', 'expanded');
            } else {
                inputs.classList.remove(classes.expandStatus);
                button.textContent = 'Показать все варианты';
                button.setAttribute('data-status', 'collapsed');
            }
        }

        // кликнули на кн Сбросить
        function executeClearFilter() {
            filtersOne.forEach(function (filterOne) {
                let inputs = filterOne.querySelector(classes.inputsFilter);
                //let checkboxs = Array.from(inputs.querySelectorAll('input'));
                let checkboxs = Array.prototype.slice.call(inputs.querySelectorAll('input'));

                checkboxs.forEach((function (checkboxs) { checkboxs.checked = false; }));
            });
        }
    }
})();

// разворачивание фильтров на мобильных
(function () {
    const filters = document.querySelector('#filters');
    const classes = {
        oneFilter: '.left-column__filters-one',
        titleFilter: '.left-column__filters-one-title',
        inputsFilter: '.left-column__filters-one-inputs',
        btnExpandFilter: '.left-column__filters-one-btn-expand',
        btnClearFilter: '.left-column__filters-manager-buttons-clear',
        expandStatus: 'left-column__filters-one-inputs-expand'
    };

    if (filters) {
        // массив заголовков фильтров
        //const filtersOne = Array.from(filters.querySelectorAll(classes.oneFilter));
        const filtersOne = Array.prototype.slice.call(filters.querySelectorAll(classes.oneFilter));


        // ---


        filtersOne.forEach(function (filterOne) {
            // ищем заголовок фильтра
            let titleFilter = filterOne.querySelector(classes.titleFilter);
            // ищем блок с инпутами-чекбоксами фильтра, соответствующий этому заголовку
            let inputs = filterOne.querySelector(classes.inputsFilter);
            // вешаем обработчик обытия клика по заголовку
            titleFilter.addEventListener('click', (function () { changeFilterSize(inputs, titleFilter); }));
        });


        // ---


        // кликнули по заголовку фильтра
        function changeFilterSize(inputs, titleFilter) {
            let status = titleFilter.getAttribute('data-status');
            let screenMobile;
            if (document.documentElement.clientWidth < 992) { screenMobile = true; } else { screenMobile = false; }

            // если маленький экран
            if (screenMobile) {
                if (status === 'collapsed') {
                    inputs.classList.add(classes.expandStatus);
                    titleFilter.setAttribute('data-status', 'expanded');
                } else {
                    inputs.classList.remove(classes.expandStatus);
                    titleFilter.setAttribute('data-status', 'collapsed');
                }
            }
        }
    }
})();


// разворачивание Каталога-меню на мобильных
(function () {
    const menuCatalog = document.querySelector('.left-column__left-menu');
    const classes = {
        titleMenuCatalog: '.left-column__filters-title',
        expandStatus: 'left-column__left-menu-expand'
    };

    if (menuCatalog) {
        let titleMenuCatalog = menuCatalog.querySelector(classes.titleMenuCatalog);
        let ulMenuCatalog = menuCatalog.querySelector('ul');


        // ---


        titleMenuCatalog.addEventListener('click', (function () { changeMenuCatalogSize(ulMenuCatalog, titleMenuCatalog); }))


        // ---


        // кликнули по заголовку Каталога-меню
        function changeMenuCatalogSize(ulMenuCatalog, titleMenuCatalog) {
            let status = titleMenuCatalog.getAttribute('data-status');
            let screenMobile;
            if (document.documentElement.clientWidth < 992) { screenMobile = true; } else { screenMobile = false; }

            // если маленький экран
            if (screenMobile) {
                if (status === 'collapsed') {
                    ulMenuCatalog.classList.add(classes.expandStatus);
                    titleMenuCatalog.setAttribute('data-status', 'expanded');
                } else {
                    ulMenuCatalog.classList.remove(classes.expandStatus);
                    titleMenuCatalog.setAttribute('data-status', 'collapsed');
                }
            }
        }
    }
})();