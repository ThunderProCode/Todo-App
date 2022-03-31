import React from "react";

function useLocalStorage(itemName, initialValue){

    //Simulate getting data from Api
    const [error, setError] = React.useState(false);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [ item, setItem ] = React.useState(initialValue);
    
    React.useEffect(()=> {
      //Simulate it takes 1 second to load
      setTimeout(()=> {
        try{
  
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem; 
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          }else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
        }catch(error){ 
          setError=(error);
        }
      }, 
      );
    }, [sincronizedItem]);
    
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error){
        setError(error);
      }
    }
  
    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }

    return{
      item,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
  }

export { useLocalStorage } ;