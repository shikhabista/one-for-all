import { h, Fragment } from 'preact';
import {signal} from '@preact/signals';
import { useState } from 'preact/hooks';

export default function TodoPreact() {
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
            <h5 class="card-title">
                PreactJS
            </h5>
            <form action="" onSubmit={onSubmit}>
                <input type="text" class="input" value={item} onInput={(e) => setItem(e.target.value)} />
            </form>
        </div>
        <ul>
            {items.map(singleItem => (<li class='todo-item'>{singleItem}</li>))}
        </ul>
    </div>;
}