import { createSignal, For } from "solid-js";

export default function TodoSolid() {
    const [item, setItem] = createSignal<string>("");
    const [items, setItems] = createSignal<Array<string>>([]);
    const onSubmit = (e: Event) => {
        e.preventDefault();
        setItems([
            item(),
            ...items()
        ]);
        setItem("");
    };
    return <div class="card">
        <div class="card-header">
            <h5 className="card-title">
                SolidJS
            </h5>
            <form action="" onSubmit={onSubmit}>
                <input type="text" class="input" value={item()} onChange={(e) => setItem(e.target.value)} />
            </form>
        </div>
        <ul>
            <For each={items()}>
                {(singleItem) => <li class='todo-item'>{singleItem()}</li>}
            </For>
        </ul>
    </div>;
}