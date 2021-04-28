const resolver = {
	Query: {
		getMessage: () => {
			return 'hello world';
		},
	},
	Mutation: {},
};

module.exports = resolver;
