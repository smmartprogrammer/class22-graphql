let crypto = require('crypto');
let localData = {};
const resolver = {
	Query: {
		getMessage: () => {
			return 'jay shree raam';
		},
		getName: () => {
			return 'raghunandan raam';
		},
	},
	Mutation: {
		createMessage: (args) => {
			console.log(args);
			let id = crypto.randomBytes(10).toString('utf-8');
			console.log('id', id);
			// localData[id] = args;
			// return args;
		},
	},
};

module.exports = resolver;
