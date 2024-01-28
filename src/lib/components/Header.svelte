<script>
	import siteMetadata from '$lib/data/siteMetadata';
	import News47ell from '$lib/components/icons/News47ell.svelte';
	import Mastodon from '$lib/components/icons/Mastodon.svelte';
	import X from '$lib/components/icons/X.svelte';
	import RSS from '$lib/components/icons/RSS.svelte';
</script>

<header class="flex w-full items-center justify-between bg-stone-900 px-6 py-4">
	<div>
		<a href="/" aria-label={siteMetadata.title}>
			<News47ell />
		</a>
	</div>
	<div class="flex gap-x-4">
		<a
			rel="me"
			style="display:none"
			href={`https://mastodon.social/@${siteMetadata.author.username}`}>Find Ahmet on Mastodon</a
		>
		<a rel="me" href={`https://mastodon.social/@${siteMetadata.username}`}>
			<Mastodon />
		</a>
		<a href={`https://twitter.com/${siteMetadata.username}`}>
			<X />
		</a>
		<a href={`${siteMetadata.siteUrl}/blog/feed.xml`}>
			<RSS />
		</a>
	</div>
</header>
