const environment = process.env.environment;
const isProd = environment === 'PROD';

module.exports = {
	isProd: isProd
}
