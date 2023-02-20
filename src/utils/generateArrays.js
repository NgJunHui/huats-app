const generateRandomArray = () => {
    const arr = [];
    while (arr.length < 4) {
        const randomNum = Math.floor(Math.random() * 4) + 1;
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }
    return arr;
};

export const generateTilesArray = () => generateRandomArray();

export const generateAnimalsArray = () => generateRandomArray();