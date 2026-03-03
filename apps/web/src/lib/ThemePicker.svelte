<script lang="ts">
	import { onMount } from 'svelte';
	import { DAISYUI_THEMES } from '$lib/themes';

	const STORAGE_KEY = 'daisyui-theme';

	let selected: string = $state('dark');

	onMount(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		const current = document.documentElement.getAttribute('data-theme');
		if (stored && DAISYUI_THEMES.includes(stored)) {
			selected = stored;
			document.documentElement.setAttribute('data-theme', stored);
		} else if (current && DAISYUI_THEMES.includes(current)) {
			selected = current;
		}
		const handler = (e: CustomEvent<{ theme: string }>) => {
			selected = e.detail.theme;
		};
		window.addEventListener('theme-change', handler);
		return () => window.removeEventListener('theme-change', handler);
	});

	function selectTheme(theme: string) {
		selected = theme;
		localStorage.setItem(STORAGE_KEY, theme);
		document.documentElement.setAttribute('data-theme', theme);
		window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
		if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
	}
</script>

<div class="dropdown dropdown-end">
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions a11y_no_static_element_interactions -->
	<div tabindex="0" role="button" class="btn btn-ghost gap-2" aria-label="Change theme" aria-haspopup="listbox" aria-expanded="false">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
			/>
		</svg>
		<span class="capitalize">{selected}</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<ul tabindex="0" role="listbox" class="dropdown-content menu bg-base-200 rounded-box z-[1] mt-2 max-h-80 w-52 overflow-y-auto shadow-xl">
		{#each DAISYUI_THEMES as theme}
			<li>
				<button
					type="button"
					class:active={selected === theme}
					onclick={() => selectTheme(theme)}
					onkeydown={(e) => e.key === 'Enter' && selectTheme(theme)}
				>
					<span class="capitalize">{theme}</span>
					{#if selected === theme}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
						</svg>
					{/if}
				</button>
			</li>
		{/each}
	</ul>
</div>
