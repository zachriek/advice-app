interface Props {
  advice?: string;
  isLoading: boolean;
  handleClick: () => void;
}

const Card = ({ advice, isLoading, handleClick }: Props) => {
  return (
    <div className="card">
      {isLoading ? (
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h5 className="card-title text-center mb-6">{advice}</h5>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-indigo-700 to-indigo-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg py-3 px-8 text-center mr-2 mb-2"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
