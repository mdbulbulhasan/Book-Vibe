const getStoreBook = () => {
    const storedBookSTR = localStorage.getItem("readList");

    if(storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
}

const addToStoreDb = (id) => {
    const storedBookData = getStoreBook();
    
    if(storedBookData.includes(id)) {
        alert("Bhai ai id already exist");
    }
    else {
        storedBookData.push(id);
        console.log(storedBookData);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
    }
}
export {addToStoreDb}