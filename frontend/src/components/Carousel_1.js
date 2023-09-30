import React, { useEffect, useState } from 'react';
import Carousel_middle from './Carousel_midde';
import axios from 'axios';

export default function Carousel_1() {
  const [blogmodels, setBlogmodels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const blogmodelsUrl = 'http://127.0.0.1:8000/blogmodels/';
  const categoryUrl = 'http://127.0.0.1:8000/categories/';
  const userrsUrl = 'http://127.0.0.1:8000/users/';

  useEffect(() => {
    axios.get(categoryUrl)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching category data:', error);
      });

    axios.get(userrsUrl)
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching authors data:', error);
      });

    axios.get(blogmodelsUrl)
      .then((response) => {
        setBlogmodels(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blogmodels data:', error);
      });
  }, [blogmodelsUrl, categoryUrl, userrsUrl]);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          {blogmodels.slice(0, 2).map((item, index) => {
            // Find the category with a matching ID
            const category = categories.find((category) => category.id === item.category);
            // Find the author with a matching ID
            const author = authors.find((author) => author.id === item.author);

            return (
              <div key={item.id} className={`relative mt-6`}>
                <div className="flex justify-center items-center h-64 w-96 lg:ml-14 rounded-lg">
                  <img
                    src={item.image}
                    alt=""
                    className="max-h-full max-w-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 lg:left-14 w-full rounded-b-lg">
                  <p className="text-gray-200 font-bold">{item.title}</p>
                  <p className="text-gray-200 font-bold">Category: {category ? category.name : 'Unknown'}</p>
                  <p className="text-gray-200 font-bold">Author: {author ? author.email : 'Unknown'}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-1 relative">
          <div className="lg:sticky lg:top-0 lg:h-screen">
            <Carousel_middle />
          </div>
        </div>
        <div className="lg:col-span-1">
          {blogmodels.slice(2, 4).map((item, index) => {
            // Find the category with a matching ID
            const category = categories.find((category) => category.id === item.category);
            // Find the author with a matching ID
            const author = authors.find((author) => author.id === item.author);

            return (
              <div key={item.id} className={`relative mt-6`}>
                <div className="flex justify-center items-center h-64 w-96 lg:ml-14 rounded-lg">
                  <img
                    src={item.image}
                    alt=""
                    className="max-h-full max-w-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 px-4 py-1 bg-gray-500/50 lg:left-14 w-full rounded-b-lg">
                  <p className="text-gray-200 font-bold">{item.title}</p>
                  <p className="text-gray-200 font-bold">Category: {category ? category.name : 'Unknown'}</p>
                  <p className="text-gray-200 font-bold">Author: {author ? author.email : 'Unknown'}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
