
function filterMembers () {
    const parentDiv = document.querySelector('div[class="flex flex-wrap justify-center mx-auto max-width"]');
    const div1Collection = Array.from(parentDiv.children).filter(child => child.tagName.toLowerCase() === 'div');
    const filteredCollection = [];

    div1Collection.forEach(div => {
      //  var memberId = div.firstElementChild.getAttribute('id');
        if (div.classList.contains('card-p')) {
            filteredCollection.push(div);
        } else {
            hiddenDiv = div.querySelector('div.sdh.col-12.relative.flex.flex-column')
                .querySelector('div.flex.items-center.mx1-5.mt1-5.relative')
                .querySelector('div.icon-membership')
                .querySelector('div[hidden]');
            if (hiddenDiv.innerText !== 'Standard Member') {
                filteredCollection.push(div);
            }
        }
    });
    return filteredCollection;
}

function sendMessages(filteredCollection){
    filteredCollection.forEach(div => {
         var element = div.querySelector('[data-chatmemberid]');
         if(element.getAttribute('data-chatmemberid')==='2340509'){
             console.log(element);
             element.click();
         }
    });
}

sendMessages(filterMembers())