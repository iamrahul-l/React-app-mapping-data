import React from "react";
import emojipedia from "./emojipedia";
import EmojiDisplay from "./components/Emojidisplay";

function createEntry(e){
    return (
        <EmojiDisplay
        key={e.id}
        emoji={e.emoji}
        name={e.name}
        meaning={e.meaning}
        />
    )
}   

function App() {
    return (
        <div>
            <h1 className="heading1">
            Emoji<span>Pedia</span>
            </h1>
            {emojipedia.map(createEntry)}
        </div>
    )
}

export default App;