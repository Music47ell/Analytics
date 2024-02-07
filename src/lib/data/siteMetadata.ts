const siteMetadata = {
	title: 'News47ell',
	altTitle: 'NEWS FOR HELL',
	description: 'Tech news, reviews and interesting links',
	username: 'news47ell',
	siteUrl: 'https://www.news47ell.com',
	siteLogo: '/images/brand/logo.png',
	email: 'ahmet@news47ell.com',
	locale: 'en-US',
	githubSponsorUrl: 'https://github.com/sponsors/Music47ell',
	socials: [
		{ title: 'Twitter', url: 'https://twitter.com/news47ell' },
		{ title: 'Facebook', url: 'https://www.facebook.com/news47ell' },
		{ title: 'LinkedIn', url: 'https://www.linkedin.com/company/news47ell' },
		{ title: 'Mastodon', url: 'https://mastodon.social/@news47ell' }
	],
	author: {
		name: 'Ahmet ALMAZ',
		username: 'Music47ell',
		occupation: 'Founder and Editor-in-Chief | Full Stack Developer',
		avatar: '/images/others/me.png',
		location: {
			country: 'Türkiye',
			emojiFlag: '🇹🇷'
		},
		socials: [
			{ title: 'Twitter', url: 'https://twitter.com/music47ell' },
			{ title: 'GitHub', url: 'https://github.com/music47ell' },
			{ title: 'LinkedIn', url: 'https://www.linkedin.com/in/music47ell' },
			{ title: 'Mastodon', url: 'https://mastodon.social/@music47ell' }
		]
	},
	NavLinks: [
		{ title: 'Home', href: 'https://www.news47ell.com', activePath: /^\/$/ },
		{ title: 'Blog', href: 'https://www.news47ell.com/blog', activePath: /^\/blog*/ },
		{ title: 'Tags', href: 'https://www.news47ell.com/blog/tags', activePath: /^\/blog\/tags*/ },
		{ title: 'Projects', href: 'https://www.news47ell.com/projects', activePath: /^\/projects*/ },
		{ title: 'Colophon', href: 'https://www.news47ell.com/colophon', activePath: /^\/colophon*/ },
		{ title: 'Sponsors', href: 'https://www.news47ell.com/sponsors', activePath: /^\/sponsors*/ }
	]
};

export default siteMetadata;
