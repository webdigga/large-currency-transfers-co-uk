const environment = process.env.environment;
const isProd = environment === 'Prod';

module.exports = {
	isProd: isProd
}
