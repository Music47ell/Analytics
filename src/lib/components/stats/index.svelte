<script context="module">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	export const lastDay = writable(null);
	export const lastWeek = writable(null);
	export const lastMonth = writable(null);
	export const lastYear = writable(null);
	export const slugs = writable([]);
	export const cities = writable([]);
	export const countries = writable([]);
	export const referrers = writable([]);
	export const loading = writable(true);
</script>

<script>
	import siteMetadata from '$lib/data/siteMetadata';
	import Overview from './Overview.svelte';
	import SlugsStats from './SlugsStats.svelte';
	import CitiesStats from './CitiesStats.svelte';
	import CountriesStats from './CountriesStats.svelte';
	import ReferrersStats from './ReferrersStats.svelte';

	async function fetchData() {
		try {
			const response = await fetch(`${siteMetadata.siteUrl}/api/turso/analytics`);
			const jsonData = await response.json();
			lastDay.set(jsonData.lastDay);
			lastWeek.set(jsonData.lastWeek);
			lastMonth.set(jsonData.lastMonth);
			lastYear.set(jsonData.lastYear);
			slugs.set(jsonData.topTenSlugs);
			cities.set(jsonData.topTenCities);
			countries.set(jsonData.topTenCountries);
			referrers.set(jsonData.topTenReferrers);
		} catch (error) {
			console.error('Error fetching data:', error);
		} finally {
			loading.set(false);
		}
	}

	onMount(fetchData);
</script>

{#if $loading}
	<div class="flex justify-center items-center">
		<div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
	</div>
{:else}
	<Overview title="Overview" {lastDay} {lastWeek} {lastMonth} {lastYear} />
	<SlugsStats title="Top 10 Blog Posts" {slugs} />
	<CitiesStats title="Top 10 Cities" {cities} />
	<CountriesStats title="Top 10 Countries" {countries} />
	<ReferrersStats title="Top 10 Referrers" {referrers} />
{/if}
