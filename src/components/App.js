import Videos from "./videos";
import Header from "./header/Header";
import Route from "./route/Route";
import Home from "./home/Home";
import WikiSearch from "./wikisearch/WikiSearch";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/videos">
        <Videos />
      </Route>
      <Route path="/wikisearch">
        <WikiSearch />
      </Route>
    </div>
  );
};

export default App;
