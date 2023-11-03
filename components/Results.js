import React from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

function Results({ mwResults, mwSynonyms, word }) {
  let synonyms = mwSynonyms[0]?.meta?.syns[0];
  return (
    <div className="results-wrap">
      <LayoutGroup>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            mass: 5,
            stiffness: 70,
            damping: 40,
            friction: 50,
          }}
          
          className="square"
        ></motion.div>
        <div className="results">
          <div className="word-wrap">
            <div className="word-heading">
              <motion.h1 initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity: 0}} transition={{duration:0.5, type: 'spring'}} style={{ fontSize: "40px" }}>{word}</motion.h1>
            </div>
            {mwResults[0]?.hwi?.prs && <p>{mwResults[0]?.hwi?.prs[0]?.mw}</p>}
          </div>
          <div className="definitions">
            {mwResults.map((result) => (
              <AnimatePresence mode="wait">
                <motion.div
                  style={{
                    borderLeft: "solid",
                    paddingLeft: "40px",
                    borderColor: "rgb(175, 175, 175)",
                  }}
                  initial={{ y: -500 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    mass: 5,
                    stiffness: 70,
                    damping: 40,
                    friction: 50,
                  }}
                  exit={{
                    y: -200,
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      damping: 20,
                    },
                  }}
                  key={result?.meta?.id}
                >
                  <motion.h3
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      type: "spring",
                      mass: 5,
                      stiffness: 70,
                      damping: 40,
                      friction: 50,
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 20,
                      },
                    }}
                    style={{ color: "rgb(3, 76, 187)", fontSize: "20px" }}
                    key={result?.fl}
                  >
                    {result?.fl}
                  </motion.h3>
                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      type: "spring",
                      mass: 5,
                      stiffness: 70,
                      damping: 40,
                      friction: 50,
                    }}
                    style={{
                      fontSize: "20px",
                      borderColor: "rgb(475, 475, 475)",
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                      transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 20,
                      },
                    }}
                    key={result?.meta?.id}
                  >
                    {result?.meta?.id}
                  </motion.p>
                  {result?.shortdef?.map((definition, index) => (
                    <motion.p
                      initial={{ x: -700, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        mass: 5,
                        stiffness: 70,
                        damping: 40,
                        friction: 50,
                      }}
                      exit={{
                        x: -200,
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          damping: 20,
                        },
                      }}
                      style={{ fontSize: "17px" }}
                      key={definition}
                    >
                      {definition}
                    </motion.p>
                  ))}
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
        <div className="synonym-wrap">
          {synonyms?.map((synonym, index) => (
            <>
              
                <p style={{ fontSize: "17px" }} key={index}>
                 {synonym}
                </p>
              
            </>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
}

export default Results;
