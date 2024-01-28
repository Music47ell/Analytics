<script>
	import siteMetadata from '$lib/data/siteMetadata';
	import Slash from '$lib/components/icons/Slash.svelte';
</script>

<footer class="m-auto px-4 flex max-w-md flex-col items-center gap-4 print:hidden">
	<div class="grid grid-cols-1 gap-y-2">
		<div class="flex items-center justify-between gap-x-3">
			{#each siteMetadata.author.socials as link}
				<a href={link.url} class="text-gray-100 hover:text-yellow-500" aria-label={link.title}>
					{link.title}
				</a>
			{/each}
		</div>
		<div class="copyright mt-2 text-center text-xs" itemprop="copyrightYear">
			COPYRIGHT © 2013 / <span class="year">{new Date().getFullYear()}</span>{' '}
			{siteMetadata.altTitle}. ALL RIGHTS RESERVED.
		</div>
		<div class="mt-2 text-center">
			<a href="https://xn--sr8hvo.ws/%F0%9F%9B%81%F0%9F%9A%BC%F0%9F%A6%83/previous">←</a>
			An IndieWeb Webring 🕸💍
			<a href="https://xn--sr8hvo.ws/%F0%9F%9B%81%F0%9F%9A%BC%F0%9F%A6%83/next">→</a>
			<p class="text-xs">
				Have a good {new Date().toLocaleString('default', { weekday: 'long' })}!
			</p>
		</div>
		<div class="m-auto my-6">
			<a href="/" aria-label={siteMetadata.title}>
				<Slash />
			</a>
		</div>
	</div>
</footer>
