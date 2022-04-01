/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'img1.doubanio.com',
			'img2.doubanio.com',
			'img3.doubanio.com',
			'img9.doubanio.com',
		],
	},
	env: {
		LEANCLOUD_APP_ID: process.env.LEANCLOUD_APP_ID,
		LEANCLOUD_APP_KEY: process.env.LEANCLOUD_APP_KEY,
		LEANCLOUD_SERVER_URL: process.env.LEANCLOUD_SERVER_URL,
	}
}

module.exports = nextConfig
