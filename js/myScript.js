const parentDiv = document.querySelector('div[class="flex flex-wrap justify-center mx-auto max-width"]');
const div1Collection = Array.from(parentDiv.children).filter(child => child.tagName.toLowerCase() === 'div');
const filteredCollection = [];

div1Collection.forEach(div => {
    const firstChildDiv = div.querySelector('div.sdh.col-12.relative.flex.flex-column');
    if (firstChildDiv) {
        const secondChildDiv = firstChildDiv.querySelector('div.flex.items-center.mx1-5.mt1-5.relative');
        if (secondChildDiv) {
            const thirdChildDiv = secondChildDiv.querySelector('div.icon-membership');
            if (thirdChildDiv) {
                const hiddenDiv = thirdChildDiv.querySelector('div[hidden]');
                if (!(hiddenDiv && hiddenDiv.innerText.trim() === 'Standard Member')) {
                    filteredCollection.push(div);
                }
            }
        }
    } else if (div.classList.contains('card-p')) {
        filteredCollection.push(div);
    }
});

console.log("Отфильтрованная коллекция:", filteredCollection);
