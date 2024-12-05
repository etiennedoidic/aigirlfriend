<script lang="ts">
    import {Tipex} from "@friendofsvelte/tipex";
	import MakeFolderModal from '$lib/components/MakeFolderModal.svelte';
	let body = `<p>Talk to me plz :3</p>`;
	let showModal = $state(false);
	import '../app.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Welcome to <br />AI G0rlF4iend
	</h1>

	<button onclick={() => (showModal = true)}> lets make a scrapbook &lt;3 </button>

	<MakeFolderModal bind:showModal></MakeFolderModal>

	<Tipex 
    {body} 
    controls 
    floating
    style="margin-top: 1rem; margin-bottom: 0;"
    class="h-[70vh] border border-neutral-200"
/>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

</style>
