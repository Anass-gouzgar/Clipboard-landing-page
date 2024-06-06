import Hero from "./components/Hero/index.jsx"
import Track from "./components/Track/index.jsx"
import Access from "./components/Access/index.jsx"
import Footer from "./components/Footer/index.jsx"
import Partners from "./components/Partners/index.jsx"
import Supercharge from "./components/Supercharge/index.jsx"
import Clipboard from "./components/Clipboard/index.jsx"


export default function Home() {
  return (
<main className="font-Bai">
<Hero/>
<Track/>
<Access/>
<Supercharge/>
<Partners/>
<Clipboard/>
<Footer/>
</main>
  );
}
