<script>
	let { showModal = $bindable() } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});
   /**
   * @type {string}
   */
   let title = $state('');

   /**
   * @type {string}
   */
   let purpose = $state('');

   function showName() {
	   dialog.close()
       console.log(title);
	   console.log(purpose);
   }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div>
		<h2>
				m8k scrapbook 
		</h2>

		<h3>Title</h3>
		<p>what should we call it? 0:</p>
		<input type="text" placeholder="title" bind:value={title}>
		<h3>Purpose</h3>
		<p>Every scrapbook needs a reason...</p>
		<input id="name" type="text" bind:value={purpose}>

		
		 <!-- svelte-ignore a11y_autofocus -->
		 <button autofocus onclick={showName}>Create Scrapbook</button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
