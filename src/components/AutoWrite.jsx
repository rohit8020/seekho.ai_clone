import React , {useState, useEffect} from 'react';

const AutoWrite = ({ AutoWriteText }) => {

  return (<>To Be Fixed</>)

  const speed = 100;
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  // const [interval, setInterval] = useState(null);


  const [idx, setidx] = React.useState(0);
  React.useEffect(() => {
    const timer = window.setInterval(() => setidx(v => v + 1), speed);
    return () => window.clearInterval(timer);
  })


  useEffect(() => {
    setText(AutoWriteText[index]);
      setInterval(() => {
        setIndex(index + 1);
        if (index === AutoWriteText.length - 1) {
          setIndex(0);
        }
      }, 5000)
  }, [index, AutoWriteText]);

  return (
    <>
      <div>{text.substr(0,idx)}</div>
    </>
  );
};

export default React.memo(AutoWrite);

