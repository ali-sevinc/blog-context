import Header from "./components/ui/Header";
import Main from "./components/ui/Main";
import Archive from "./components/blog/Archive";
import Footer from "./components/ui/Footer";
import ModeButton from "./components/ui/ModeButton";

export type PostType = { title: string; body: string };

function App() {
  return (
    <section>
      <ModeButton />

      <Header />

      <Main />
      <Archive />

      <Footer />
    </section>
  );
}

export default App;
