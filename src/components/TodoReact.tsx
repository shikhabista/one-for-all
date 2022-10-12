import { useState } from 'react';

export default function TodoReact() {
    const [item, setItem] = useState<string>("");
    const [items, setItems] = useState<Array<string>>([]);
    const onSubmit = (e: Event) => {
        e.preventDefault();
        setItems([
            item,
            ...items
        ]);
        setItem("");
    };
    return <div class="card">
        <div class="card-header">
            <h5 className="card-title">
                ReactJS
            </h5>
            <form action="" onSubmit={onSubmit}>
                <input type="text" class="input" value={item} onChange={(e) => setItem(e.target.value)} />
            </form>
        </div>
        <ul>
            {items.map(singleItem => (<li class='todo-item'>{singleItem}</li>))}
        </ul>
    </div>;
}