import React, { useState, useEffect } from 'react';

export default function MostRead_tablet(props) {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);

  // Define the fetchNextArticle function outside of useEffect
  const fetchNextArticle = async () => {
    try {
      // Fetch the next article data
      const response = await fetch('your-api-endpoint');
      const data = await response.json();

      // Set the current article to the next article
      setCurrentArticle(data);

      // Fetch the next article for the next time
      // (You can modify this logic to determine what's the next article)
      const nextResponse = await fetch('your-next-article-endpoint');
      const nextData = await nextResponse.json();

      setNextArticle(nextData);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    // Fetch the initial article when the component mounts
    fetchNextArticle();
  }, []);

  if (!currentArticle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Display the current article */}
      <div className="rounded-b-lg grid justify-items-center mx-6">
        <img src={currentArticle.image} alt="" className='mt-10 rounded-lg h-48 w-96' />
        <p className='flex text-start justify-center w-80 font-bold'>{currentArticle.text}</p>
      </div>
      <div>
        <div className='ml-8 py-2 flex font-bold'>
          <p className=''>{currentArticle.name}</p>
          <p className='ml-14'>{currentArticle.date}</p>
        </div>
      </div>

      {/* You can add navigation or a button to fetch the next article */}
      {nextArticle && (
        <button onClick={fetchNextArticle}>Next Article</button>
      )}
    </div>
  );
}
