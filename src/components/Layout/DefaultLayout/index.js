import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <div className="defaultLayout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
