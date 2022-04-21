import React from 'react';

const Sponser = () => {
  const [PopupOpen,setPopupOpen] = React.useState(true);
  
  if(PopupOpen)
  return (<>
    <div 
    style={{
      backgroundColor: '#C1E8F9',
    }}
    className="text-center w-screen px-[20px] py-[23px] relative shadow-inner">
        Use Code: <b>TRYSEEKHO</b> to get a 14 day trial at just <b>Re. 1</b> (Valid for first transaction only)  <button className="underline"><b>Try Now</b></button>
    <button 
    onClick={()=>setPopupOpen(false)}
    className='absolute top-1 right-8'>
      <img src='/images/icons/x.svg' width="20px" height="20px" alt='close' />
    </button>
    </div>

  </>
  );

  else return null;
  };

  export default Sponser;