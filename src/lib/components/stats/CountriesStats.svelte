<script lang="ts">
	export let countries: { country: string; flag: string; total: number }[] = [];
	export let title: string;
</script>

<div class="border border-red-500 px-4 py-2">
	<h2 class="uppercase">{title}</h2>
</div>
{#if $countries.length > 0}
	<ul class="m-0 p-0 border border-yellow-500 px-4 py-2">
		{#each $countries as { country, flag, total }, index}
			<li class="m-0 p-0 flex items-center gap-4 leading-[3rem]">
				<small
					class="flex shrink-0 items-center justify-center w-6 h-6 rounded-full font-bold leading-4 border-2"
				>
					{index + 1}
				</small>

				<div class="flex grow items-center gap-2">
					<span class="mt-1">{flag}</span>
					<span>{country}</span>
				</div>
				<strong>{`x${total}`}</strong>
			</li>
		{/each}
	</ul>
{:else}
	<p>No data available.</p>
{/if}
