import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


function getRandomIntByRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Scrambler = ({
  className,
  style,
  iterations,
  text,
  keepWhiteSpace,
  scrambleTextLength,
  scrambleClassName,
  charset,
  delay = 0,
}) => {
  const [renderedText, setRenderedText] = useState(text);
  const [scrambleState, setScrambleState] = useState(0);
  const [appliedScrambleClassName, setAppliedScrambleClassName] = useState(``);

  const getJibberish = (length, originalText) => {
    const characters = {};

    if (charset) {
      characters.charset = charset;
    }

    characters.consonants = [
      `b`,
      `c`,
      `d`,
      `f`,
      `g`,
      `h`,
      `j`,
      `k`,
      `l`,
      `m`,
      `n`,
      `p`,
      `r`,
      `s`,
      `t`,
      `v`,
      `w`,
    ];

    characters.vowels = [`a`, `e`, `i`, `o`, `u`, ` `];
    characters.result = ``;

    characters.getLetter = (datasource) => {
      const key = Math.floor(Math.random() * datasource.length);
      return datasource[key];
    };

    let loopStat = 0;

    while (loopStat < length) {
      let originalChar = originalText.charAt(loopStat);

      // keep spaces, if desired.
      if (keepWhiteSpace) {
        // this regex returns true if the character is any kind of whitespace
        if (/\s/.test(originalChar)) {
          characters.result += originalChar;
          loopStat += 1;
          continue;
        }
      }

      // if we've been given a charset, use it
      if (characters.charset) {
        characters.result += characters.getLetter(characters.charset);
      } else {
        // otherwise, alternate between vowels and constonants
        if (loopStat === null || loopStat % 2) {
          characters.result += characters.getLetter(characters.vowels);
        } else {
          characters.result += characters.getLetter(characters.consonants);
        }
      }

      loopStat += 1;
    }

    return characters.result;
  };

  //

  useEffect(() => {
    let scrambleIterations = iterations;

    if (!scrambleIterations) {
      scrambleIterations = text.length - renderedText.length;

      if (scrambleIterations < 0) {
        scrambleIterations = -scrambleIterations;
      }

      if (scrambleIterations < 20) {
        scrambleIterations = 20;
      }
    }

    // kick of the scrambler by setting scramble state to a number that represents the number of text changes
    setTimeout(() => {
      setScrambleState(scrambleIterations);
    }, delay);
  }, [text]);

  useEffect(() => {
    if (!window) {
      return () => {};
    }

    if (scrambleState === 0) {
      setRenderedText(text);

      // scramble is over, clear the scramble classname
      setAppliedScrambleClassName(``);

      return () => {};
    }

    // scramble is on, set the scramble classname
    if (scrambleClassName && appliedScrambleClassName === ``) {
      setAppliedScrambleClassName(scrambleClassName);
    }

    //

    // let previousLength = renderedText?.length || parseInt(text.length / 2);
    // let newLength = previousLength + (scrambleState < iterations / 2 ? 1 : -1);
    // console.log("newLength:", newLength);
    // let jibberishLength = newLength;

    // let jibberishLength = scrambleTextLength || text.length; //getRandomIntByRange(scrambleTextLength || text.length - 3, text.length);

    let jibberishLength = getRandomIntByRange(
      scrambleTextLength || text.length - 3,
      scrambleTextLength || text.length
    );

    if (jibberishLength < 2) {
      jibberishLength = 2;
    }

    setRenderedText(getJibberish(jibberishLength, text));

    //

    const scrambleTimeout = setTimeout(() => {
      setScrambleState(scrambleState - 1);
    }, 35);

    return () => {
      clearTimeout(scrambleTimeout);
    };
  }, [scrambleState]);

  //

  return (
    <span
      className={`scrambler ${className} ${appliedScrambleClassName}`}
      style={style}
    >
      {renderedText}
    </span>
  );
};

Scrambler.defaultProps = {
  className: ``,
  scrambleClassName: ``,
  delay: 0,
  style: {},
  iterations: null,
  keepWhiteSpace: false,
  scrambleTextLength: null,
};

Scrambler.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  scrambleClassName: PropTypes.string, // applies only while scrambling
  delay: PropTypes.number,
  iterations: PropTypes.number,
  scrambleTextLength: PropTypes.number,
  text: PropTypes.string.isRequired,
  keepWhiteSpace: PropTypes.bool,
};

export default Scrambler;
