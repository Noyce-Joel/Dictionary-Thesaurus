"use client";

import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Results from "../../components/Results";
import { SocialIcon } from "react-social-icons";
export default function Home() {
  const [mwResults, setMwResults] = useState([]);
  const [mwSynonyms, setMwSynonyms] = useState([]);
  const [wordInput, setWordInput] = useState("");
  const [word, setWord] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchResults = () => {
    let reqOpt = {
      method: "GET",
    };

    fetch(
      `https://dictionaryapi.com/api/v3/references/collegiate/json/${wordInput}?key=ad1dff85-a50c-48bd-8eef-accb8964867e`,
      reqOpt
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("word not found");
        }
        return response.json();
      })
      .then((result) => {
        setMwResults(result);
        setError(null);
      })
      .catch((error) => setError(error.message));
  };

  const fetchSynonyms = () => {
    let reqOpt = {
      method: "GET",
    };

    fetch(
      `https://dictionaryapi.com/api/v3/references/thesaurus/json/${wordInput}?key=d24a2433-786a-48b0-9a27-246cf052ade0`,
      reqOpt
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("word not found");
        }
        return response.json();
      })
      .then((result) => {
        setMwSynonyms(result);
        setError(null);
      })
      .catch((error) => setError(error.message));
  };

  const handleWord = (e) => {
    e.preventDefault();
    const word = e.target.word.value;
    setWordInput(word);
    setWord(wordInput);
    fetchResults();
    fetchSynonyms();
  };

  return (
    <main className="main-wrap">
      <div className="social-icons">
        <SocialIcon style={{width: '29px', height: '29px'}} url="github.com"/>
        <SocialIcon style={{width: '29px', height: '29px'}}url='linkedin.co.uk' />
      </div>
      <div className="title">
      <h1>
          NOYCE WORDS
        </h1>
        <h2>Dictionary & Thesaurus</h2>
        </div>
       
      <div className="form-wrap">
        
        <form onSubmit={handleWord} type="submit" className="word-input">
          <input
            type="text"
            name="word"
            onChange={(e) => setWordInput(e.target.value)}
            placeholder="Enter a word"
            className="input"
            style={{ outline: 0 }}
          ></input>
          <button type="submit" className="btn">
            <MagnifyingGlassIcon className="search" />
          </button>
        </form>
      </div>
      
        <Results mwResults={mwResults} word={word} mwSynonyms={mwSynonyms}/>
      
    </main>
  );
}
