'use strict';

const item = document.querySelectorAll('.item');
const propsList = document.querySelectorAll('.props__list');
const listThree = document.querySelector('.item_five .props__list');
const listFive = document.querySelector('.item_three .props__list');


const propsItemFour = document.querySelectorAll('.props__item_four');

item[3].after (item[0]);

propsItemFour[2].after(document.querySelector('.item_two .props__item_four'));

document.querySelector('.ads').remove();
document.querySelector('.item_three .content').append(listThree);
document.querySelector('.item_five .content').append(listFive);

item[2].querySelector('.props__list').
    append(document.querySelector('.item_six .props__item_two'),
        document.querySelector('.item_six .props__item_two').
            nextElementSibling);