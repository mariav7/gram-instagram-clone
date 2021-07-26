import { useEffect } from 'react';
import { Header } from '../components';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found - Oops';
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found ! 👾</p>
      </div>
    </div>
  );
};

export default NotFound;
