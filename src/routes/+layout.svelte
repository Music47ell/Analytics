<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<html lang="en">
	<body class="bg-stone-950 text-gray-100 antialiased">
		<div class="flex min-h-screen flex-col justify-between">
			<Header />
			<Nav />
			<h1 class="text-4xl font-bold text-center mt-8 mb-4 print:mt-0 print:mb-0">Analytics</h1>
			<p class="text-center mb-8 print:mb-0">
				<em
					>This website displays analytics for News47ell. <a
						class="text-yellow-500 hover:text-yellow-400"
						href="https://www.news47ell.com/projects#news47ells-analytics">More Info</a
					></em
				>
			</p>
			<section
				class="container mx-auto flex max-w-screen-sm gap-4 flex-col py-8 px-4 print:my-0 print:items-center print:justify-center"
			>
				<slot />
			</section>
			<Footer />
		</div>
	</body>
</html>
