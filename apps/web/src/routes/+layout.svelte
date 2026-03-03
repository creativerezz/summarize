<script lang="ts">
	import '$lib/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-base-100">
	<header class="navbar bg-base-200/80 backdrop-blur-sm sticky top-0 z-50 justify-between gap-2 px-4 md:px-8 py-3 shadow-sm">
		<a href="/" class="text-xl font-bold text-primary hover:text-primary/90 transition-colors">Summarize</a>
	</header>
	<main>
		{@render children()}
	</main>
</div>
