//div[@class='flex flex-wrap justify-center mx-auto max-width']


const parentDiv = document.querySelector('div[class="flex flex-wrap justify-center mx-auto max-width"]');

const div1Collection = Array.from(parentDiv.children).filter(child => child.tagName.toLowerCase() === 'div');


console.log(div1Collection);