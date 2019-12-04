const base = window.location;
const protocol = base.protocol;
const host = base.host;
const server = protocol + '//' + host;

export const environment = {
	production: false,
	url: `${server}:8080/api`
};
