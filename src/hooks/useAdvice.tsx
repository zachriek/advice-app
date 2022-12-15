import { useState, useEffect } from 'react';

const useAdvice = () => {
  const [advice, setAdvice] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return { advice, fetchAdvice, isLoading };
};

export default useAdvice;
