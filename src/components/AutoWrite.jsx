import React, { useState, useEffect } from 'react';

const AutoWrite = () => {
  

  useEffect(() => {
    //push the spans letter
    const words = ['Finance', 'Digital Marketing', 'Product Managment'],
      text = document.getElementById('animation_text');

    // Generator (iterate from 0-3)
    function* generator() {
      var index = 0;
      while (true) {
        yield index++;
        if (index > 2) {
          index = 0;
        }
      }
    }

    // Printing effect
    function printChar(word) {
      let i = 0;
      text.innerHTML = '';
      let id = setInterval(() => {
        if (i >= word.length) {
          deleteChar();
          clearInterval(id);
        } else {
          text.innerHTML += word[i];
          i++;
        }
      }, 200);
    }

    // Deleting effect
    function deleteChar() {
      let word = text.innerHTML;
      let i = word.length - 1;
      let id = setInterval(() => {
        if (i >= 0) {
          text.innerHTML = text.innerHTML.substring(
            0,
            text.innerHTML.length - 1
          );
          i--;
        } else {
          printChar(words[gen.next().value]);
          clearInterval(id);
        }
      }, 100);
    }

    // Initializing generator
    let gen = generator();

    printChar(words[gen.next().value]);
  }, []);

  return (
    <div className='h-9'>
      <span id='animation_text'></span>
    </div>
  );
};

export default React.memo(AutoWrite);
