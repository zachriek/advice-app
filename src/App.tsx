import { Card, ThemeToggler } from './components';
import { useAdvice } from './hooks';

const App = () => {
  const { advice, fetchAdvice, isLoading } = useAdvice();

  return (
    <div className="container bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen min-w-full flex items-center justify-center">
      <Card advice={advice} isLoading={isLoading} handleClick={fetchAdvice} />
      <ThemeToggler />
    </div>
  );
};

export default App;
