import React from "react";
import Quiz from "./Quiz";

const App = () => {
  const family = [
    {
      name: "Lala",
      hair: "black",
      isNoseBig: false,
      teeth: 32,
      favoriteBooks: ["Harry Potter", "Jungle Book"],
      date: {
        age: 37,
        yearOfBirth: 1985,
        education: {
          city: "Baku",
          year: 2001,
        },
      },
    },
    {
      name: "Papa",
      hair: "gray",
      isNoseBig: true,
      teeth: 2,
      favoriteBooks: ["Jirtdan", "Qaraqiz"],
      date: {
        age: 65,
        yearOfBrith: 1954,
        education: {
          city: "Ujar",
          year: 1970,
        },
      },
    },
    {
      name: "Mama",
      hair: "ash",
      isNoseBig: false,
      teeth: 3,
      favoriteBooks: ["Medicine", "Anatomy"],
      date: {
        age: 55,
        yearOfBirth: 1960,
        education: {
          city: "Baku",
          year: 1978,
        },
      },
    },
    {
      name: "Leyla",
      hair: "brown",
      isNoseBig: true,
      teeth: 31,
      favoriteBooks: ["Phd", "Doctor"],
      date: {
        age: 39,
        yearOfBirth: 1983,
        education: {
          city: "Baku",
          year: 1999,
        },
      },
    },
    {
      name: "Ibo",
      hair: "black",
      isNoseBig: false,
      teeth: 32,
      favoriteBooks: ["Coding", "Vancouver"],
      date: {
        age: 26,
        yearOfBirth: 1996,
        education: {
          city: "Baku",
          year: 2015,
        },
      },
    },
  ];

  const years = [1954, 1960, 1983, 1985, 1996];

  const favoriteMovies = {
    title: "Mehelle",
    year: 2005,
    publishedBy: "Magomed",
  };

  return (
    <div>
      <Quiz />
      {family[4].favoriteBooks.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

// add more code

export default App;
