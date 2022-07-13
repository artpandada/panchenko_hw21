'use strict';
const menu = {
    burgerMenu: [
        {
            item: 'Burger',
            time: 2000,
        },
        {
            item: 'Cola',
            time: 500,
        },
        {
            item: 'Ff',
            time: 1000,
        },
    ],
    pizzaMenu: [
        {
            item: 'Pizza',
            time: 3000,
        },
        {
            item: 'Pepsi',
            time: 500,
        },
        {
            item: 'souse',
            time: 500,
        },
    ],
};


function createOrder(order, callbackDone) {
    const result = [];
    let count = 0;
    let id;

    function doneItemOrder(item) {
        result.forEach((elem, index) => {
            if (elem === item) {
                result[index] += ' done';
                count++;

                if (count === order.length) {
                    callbackDone(result);
                    clearTimeout(id);

                }
            }
        },
        );

    }

    function queueOrder(time, item, callbackDoneItem) {
        id = setTimeout(() => {
            callbackDoneItem(item);
        }, time);


    }

    order.forEach(elem => {

        result.push(elem.item);
        queueOrder(elem.time, elem.item, doneItemOrder);

    });


}


createOrder(menu.burgerMenu, (result) => alert(result));



