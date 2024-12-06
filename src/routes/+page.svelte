<script lang="ts">
    import { liveQuery } from "dexie";
    import { db } from '../lib/db';
	import MakeFolderModal from '$lib/components/MakeFolderModal.svelte';
	let showModal = $state(false);
	import '../app.css';

    //
    // Query
    //
    let folders = $derived(liveQuery(async () => {
        //
        // Query Dexie's API
        //
        const folders = await db.folders
        .toArray();

        // Return result
        return folders;
    }));


</script>

<svelte:head>
	<title>AI GIRLFRIEND HOME</title>
	<meta name="description" content="AI Notetaking App" />
</svelte:head>

<section>
	<h1>
		Welcome to <br />AI G0rlF4iend
	</h1>

	<button onclick={() => (showModal = true)}> lets make a scrapbook &lt;3 </button>

	<MakeFolderModal bind:showModal></MakeFolderModal>

    <ul>
        {#if $folders}
          {#each $folders as folder (folder.id)}
            <li>
                <a href='/folders?id={folder.id}'>{folder.title}</a>
            </li>
          {/each}
        {/if}
      </ul>

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
