import { useEffect, useState } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Loader } from './components/Loader';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app" id="top">
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
};
