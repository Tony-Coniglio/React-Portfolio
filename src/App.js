import './App.css'
import 'bulma/css/bulma.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <section class="hero is-link">
      <div class="hero-body">
        <p class="title">
      <Header />
      </p>
      </div>
      </section>
      <div class="footer">
        <footer class="content has-text-centered">
      <Footer />
      </footer>
      </div>
    </div>
  );
}

export default App;
