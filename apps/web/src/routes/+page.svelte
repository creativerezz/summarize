<script lang="ts">
	import { BRAND } from '$lib/brand';
</script>

<svelte:head>
	<title>Summarize — Link → Summary</title>
	<meta name="description" content="Summarize any link. URLs, files, YouTube, podcasts. Chrome Side Panel, Firefox Sidebar, CLI." />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" aria-hidden="true"></div>
	<div class="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative">
		<div class="max-w-3xl mx-auto text-center">
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-base-content mb-6">
				Link → <span class="text-primary">Summary</span>
			</h1>
			<p class="text-lg md:text-xl text-base-content/70 mb-10 max-w-2xl mx-auto">
				Fast AI summaries from URLs, files, YouTube, and podcasts. Works in the terminal, Chrome Side Panel, and Firefox Sidebar.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href={BRAND.chromeStoreUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary btn-lg gap-2"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 256 256" aria-hidden="true">
						<path fill="#FFF" d="M128.003 199.216c39.335 0 71.221-31.888 71.221-71.223S167.338 56.77 128.003 56.77S56.78 88.658 56.78 127.993s31.887 71.223 71.222 71.223"/>
						<path fill="#229342" d="M35.89 92.997Q27.92 79.192 17.154 64.02a127.98 127.98 0 0 0 110.857 191.981q17.671-24.785 23.996-35.74q12.148-21.042 31.423-60.251v-.015a63.993 63.993 0 0 1-110.857.017Q46.395 111.19 35.89 92.998"/>
						<path fill="#FBC116" d="M128.008 255.996A127.97 127.97 0 0 0 256 127.997A128 128 0 0 0 238.837 64q-36.372-3.585-53.686-3.585q-19.632 0-57.152 3.585l-.014.01a63.99 63.99 0 0 1 55.444 31.987a63.99 63.99 0 0 1-.001 64.01z"/>
						<path fill="#1A73E8" d="M128.003 178.677c27.984 0 50.669-22.685 50.669-50.67s-22.685-50.67-50.67-50.67c-27.983 0-50.669 22.686-50.669 50.67s22.686 50.67 50.67 50.67"/>
						<path fill="#E33B2E" d="M128.003 64.004H238.84a127.973 127.973 0 0 0-221.685.015l55.419 95.99l.015.008a63.993 63.993 0 0 1 55.415-96.014z"/>
					</svg>
					Get Chrome Extension
				</a>
				<a
					href={BRAND.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-outline btn-lg gap-2"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
					</svg>
					View on GitHub
				</a>
			</div>
			<p class="text-sm text-base-content/50 mt-6">
				CLI: <code class="px-1.5 py-0.5 rounded bg-base-200 font-mono text-sm">npm i -g {BRAND.npmPackage}</code>
			</p>
		</div>
	</div>
</section>

<!-- Features -->
<section class="container mx-auto px-4 py-16 md:py-24">
	<h2 class="text-2xl md:text-3xl font-bold text-center text-base-content mb-12">Everything you need to read less, know more</h2>
	<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
		<div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
			<div class="card-body">
				<div class="text-3xl mb-4">⚡</div>
				<h3 class="card-title text-lg">Side panel</h3>
				<p class="text-base-content/70">
					One-click summarizer for the current tab. Chrome Side Panel or Firefox Sidebar. Streams Markdown with metrics and status.
				</p>
			</div>
		</div>
		<div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
			<div class="card-body">
				<div class="text-3xl mb-4">🖥️</div>
				<h3 class="card-title text-lg">Terminal CLI</h3>
				<p class="text-base-content/70">
					URLs, files, PDFs, YouTube, podcasts, audio, video. Pipe content in or point to a path. Streaming output with auto model selection.
				</p>
			</div>
		</div>
		<div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
			<div class="card-body">
				<div class="text-3xl mb-4">📑</div>
				<h3 class="card-title text-lg">Media & slides</h3>
				<p class="text-base-content/70">
					YouTube slide screenshots with OCR, timestamped seek, transcripts. Podcasts, RSS, Apple/Spotify. Local Whisper or cloud.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- How it works -->
<section class="bg-base-200/50 py-16 md:py-24">
	<div class="container mx-auto px-4">
		<h2 class="text-2xl md:text-3xl font-bold text-center text-base-content mb-12">How it works</h2>
		<div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
			<div class="flex flex-col items-center text-center max-w-[200px]">
				<span class="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-content font-bold text-xl mb-3">1</span>
				<p class="font-medium text-base-content">Paste a link or path</p>
				<p class="text-sm text-base-content/60">URL, file, YouTube, podcast, RSS</p>
			</div>
			<div class="hidden md:block text-base-content/30" aria-hidden="true">→</div>
			<div class="flex flex-col items-center text-center max-w-[200px]">
				<span class="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-content font-bold text-xl mb-3">2</span>
				<p class="font-medium text-base-content">Extract clean text</p>
				<p class="text-sm text-base-content/60">Readability, transcripts, OCR</p>
			</div>
			<div class="hidden md:block text-base-content/30" aria-hidden="true">→</div>
			<div class="flex flex-col items-center text-center max-w-[200px]">
				<span class="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-content font-bold text-xl mb-3">3</span>
				<p class="font-medium text-base-content">Get your summary</p>
				<p class="text-sm text-base-content/60">Streaming AI, multiple models</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="container mx-auto px-4 py-20 md:py-28">
	<div class="max-w-2xl mx-auto text-center">
		<h2 class="text-2xl md:text-3xl font-bold text-base-content mb-4">Ready to summarize?</h2>
		<p class="text-base-content/70 mb-8">Install the extension or run from the terminal. No account required for CLI.</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href={BRAND.chromeStoreUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-primary gap-2"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" viewBox="0 0 256 256" aria-hidden="true">
					<path fill="#FFF" d="M128.003 199.216c39.335 0 71.221-31.888 71.221-71.223S167.338 56.77 128.003 56.77S56.78 88.658 56.78 127.993s31.887 71.223 71.222 71.223"/>
					<path fill="#229342" d="M35.89 92.997Q27.92 79.192 17.154 64.02a127.98 127.98 0 0 0 110.857 191.981q17.671-24.785 23.996-35.74q12.148-21.042 31.423-60.251v-.015a63.993 63.993 0 0 1-110.857.017Q46.395 111.19 35.89 92.998"/>
					<path fill="#FBC116" d="M128.008 255.996A127.97 127.97 0 0 0 256 127.997A128 128 0 0 0 238.837 64q-36.372-3.585-53.686-3.585q-19.632 0-57.152 3.585l-.014.01a63.99 63.99 0 0 1 55.444 31.987a63.99 63.99 0 0 1-.001 64.01z"/>
					<path fill="#1A73E8" d="M128.003 178.677c27.984 0 50.669-22.685 50.669-50.67s-22.685-50.67-50.67-50.67c-27.983 0-50.669 22.686-50.669 50.67s22.686 50.67 50.67 50.67"/>
					<path fill="#E33B2E" d="M128.003 64.004H238.84a127.973 127.973 0 0 0-221.685.015l55.419 95.99l.015.008a63.993 63.993 0 0 1 55.415-96.014z"/>
				</svg>
				Get Chrome Extension
			</a>
			<a
				href={BRAND.githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline"
			>
				GitHub
			</a>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-base-300 bg-base-200/30 py-8">
	<div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
		<p class="text-sm text-base-content/60">Summarize · MIT License</p>
		<nav class="flex gap-6 text-sm">
			<a href={BRAND.githubUrl} target="_blank" rel="noopener noreferrer" class="link link-hover text-base-content/70 hover:text-primary">
				GitHub
			</a>
			<a href="https://www.npmjs.com/package/{BRAND.npmPackage}" target="_blank" rel="noopener noreferrer" class="link link-hover text-base-content/70 hover:text-primary">
				npm
			</a>
		</nav>
	</div>
</footer>
