<script>
let item = "";
let items = [];

const onSubmit = () => {
    items = [
        item,
        ...items
    ];
    item = "";
};

</script>

<div class="card">
    <div class="card-header">
        <h5 class="card-title">
            Svelte
        </h5>
        <form action="" on:submit|preventDefault={onSubmit}>
            <input type="text" class="input" bind:value={item}/>
        </form>
    </div>
    <ul>
        {#each items as singleItem}
            <li class='todo-item'>{singleItem}</li>
        {/each}
    </ul>
</div>