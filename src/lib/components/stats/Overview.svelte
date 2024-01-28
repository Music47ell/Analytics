<script lang="ts">
	export let title: string;
	export let lastDay: { total: string }[] = [{ total: '0' }];
	export let lastWeek: { total: string }[] = [{ total: '0' }];
	export let lastMonth: { total: string }[] = [{ total: '0' }];
	export let lastYear: { total: string }[] = [{ total: '0' }];
</script>

<div class="border border-red-500 px-4 py-2">
	<h2 class="uppercase">{title}</h2>
</div>

<div class="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-2">
	{#if lastDay}
		<div class="flex flex-col space-y-1 border border-yellow-500 px-4 py-3 sm:col-span-1">
			<span class="text-sm text-nfh-text-primary">Last 24 hours</span>
			{#each $lastDay as { total }}
				<span>{total}</span>
			{/each}
		</div>
	{/if}

	{#if lastWeek}
		<div class="flex flex-col space-y-1 border border-yellow-500 px-4 py-3 sm:col-span-1">
			<span class="text-sm text-nfh-text-primary">Last 7 days</span>
			{#each $lastWeek as { total }}
				<span>{total}</span>
			{/each}
		</div>
	{/if}

	{#if lastMonth}
		<div class="flex flex-col space-y-1 border border-yellow-500 px-4 py-3 sm:col-span-1">
			<span class="text-sm text-nfh-text-primary">Last 30 days</span>
			{#each $lastMonth as { total }}
				<span>{total}</span>
			{/each}
		</div>
	{/if}

	{#if lastYear}
		<div class="flex flex-col space-y-1 border border-yellow-500 px-4 py-3 sm:col-span-1">
			<span class="text-sm text-nfh-text-primary">Last 365 days</span>
			{#each $lastYear as { total }}
				<span>{total}</span>
			{/each}
		</div>
	{/if}
</div>
