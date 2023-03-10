
// đặt biến biding các phần tử từ document

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActiveFirst = $('.tab-item.active');
const line = $('.tabs .line');

lineActive(tabActiveFirst);

function lineActive(tabActive) {
    line.style.width = tabActive.offsetWidth + 'px';
    line.style.left = tabActive.offsetLeft + 'px';
}
tabs.forEach((tab, index) => {

    const pane = panes[index];

    tab.onclick = function() {

       $('.tab-item.active').classList.remove('active');
       this.classList.add('active');
       lineActive(this);

       $('.tab-pane.active').classList.remove('active');
       pane.classList.add('active');
    }
});