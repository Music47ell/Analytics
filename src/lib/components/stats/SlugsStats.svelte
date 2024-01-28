<script lang="ts">
	import siteMetadata from '$lib/data/siteMetadata';
	export let slugs: string = '';
	export let title: string;
</script>

<div class="border border-red-500 px-4 py-2">
	<h2 class="uppercase">{title}</h2>
</div>
{#if $slugs.length > 0}
	<ul class="m-0 p-0 border border-yellow-500 px-4 py-2">
		{#each $slugs as { slug, title, total }, index}
			<li class="m-0 p-0 flex items-center gap-4 leading-[3rem]">
				<small
					class="flex shrink-0 items-center justify-center w-6 h-6 rounded-full font-bold leading-4 border-2"
				>
					{index + 1}
				</small>

				<div class="truncate">
					<a href={`${siteMetadata.siteUrl}${slug}`} class="capitalize text-sm">
						{title}
					</a>
				</div>

				<strong class="flex justify-end grow">{`x${total}`}</strong>
			</li>
		{/each}
	</ul>
{:else}
	<p>No data available.</p>
{/if}
