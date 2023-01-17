import { useState } from "preact/hooks";


export default function NavList(): Element {
    const [showLearnMore, setShowLearnMore] = useState(false)

    return (
        <div>
            <button class="text-white" onclick={() => setShowLearnMore(!showLearnMore)}>About</button>
            {showLearnMore && (
                <div class="text-white">Houssem</div>
            )}
        </div>
    )
}