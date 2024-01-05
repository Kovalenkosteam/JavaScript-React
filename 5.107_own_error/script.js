'use strict';

const data = [
	{
		id: 'box',
		tag: 'div'
	},
	{
		id: 'ert',
		tag: 'nav'
	},
	{
		id: 'circle',
		tag: ''
	}
];

try {
	data.forEach((blockObj, i) => {
		const block = document.createElement(blockObj.tag);

		if (!blockObj.id) throw new SyntaxError(`в данных под номером ${i + 1} нет id`);

		block.setAttribute('id', blockObj.id);
		document.body.append(block);
	});
} catch (e) {
	// console.error(e.name);
	// console.log(e.massage);
	// console.log(e.stack);
	if (e.name === 'SyntaxError') {
		console.log(e.message);
	} else throw e;
}



// const err = new Error('error');
// console.log(err.name, err.message, err.stack);