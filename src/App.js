import "./App.css";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./Components/streams/StreamCreate";
import StreamEdit from "./Components/streams/StreamEdit";
import StreamDelete from "./Components/streams/StreamDelete";
import StreamList from "./Components/streams/StreamList";
import StreamShow from "./Components/streams/StreamShow";
import Header from "./Components/Header";
import History from "./history";
import Footer from "./Components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
function App() {
  return (
    <>
      <Router history={History}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/stream/new" component={StreamCreate}></Route>
          <Route path="/stream/edit/:id" component={StreamEdit}></Route>
          <Route path="/stream/delete/:id" component={StreamDelete}></Route>
          <Route path="/stream/show/:id" component={StreamShow}></Route>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
