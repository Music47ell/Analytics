<script>
	import siteMetadata from '$lib/data/siteMetadata';
</script>

<nav class="w-full border-y border-yellow-500 bg-stone-900 px-6 py-4 shadow-inner">
	<ul class="flex justify-center gap-x-4">
		{#each siteMetadata.NavLinks as link}
			<li>
				<a href={link.href} class="text-gray-100 hover:text-yellow-500" aria-label={link.title}>
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
</nav>
