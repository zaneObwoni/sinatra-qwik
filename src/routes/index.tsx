import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div>
            <h1>
                Welcome to Qwik <span class="lightning">⚡️</span>
            </h1>
            <Link class="mindblow" href="/flower/">
                Blow my mind 🤯
            </Link>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Sinatra | High fidelity music",
    meta: [
        {
            name: "description",
            content: "Qwik site description"
        }
    ]
};
