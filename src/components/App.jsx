import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { exampleItems } from "../lib/constants";

function App() {
    const [items, setItems] = useState(exampleItems);

    return (
        <>
            <BackgroundHeading />
            <main>
                <Header />
                <ItemList items={items} />
                <Sidebar setItems={setItems} />
            </main>
            <Footer />
        </>
    );
}

export default App;
