<script>
    import {Tipex} from "@friendofsvelte/tipex";
    import { page } from '$app/stores';
    // const foldertitle = $page.url.searchParams.get('title')
    let folderid = $page.url.searchParams.get('id')
    console.log(folderid)
    // console.log(foldertitle)
    // console.log(folderid)
    import { liveQuery } from "dexie";
    import { db } from '../../lib/db';
    let body = `<p>Talk to me plz :3</p>`;

    // Query parameters:

    $: folders = liveQuery(async () => {
    //
    // Query Dexie's API
    //
    const folders = await db.folders
      .where('id')
      .equals(Number(folderid))
      .toArray();

    // Return result
    return folders;
  });


</script>

<section>
    {#if $folders}
          {#each $folders as folder (folder.id)}
            <h1>{folder.title}</h1>
            <p>{folder.purpose}</p>
          {/each}
          <Tipex 
    {body} 
    controls 
    floating
    style="margin-top: 1rem; margin-bottom: 0;"
    class="h-[70vh] border border-neutral-200"
    />

    {/if}
    


</section>

