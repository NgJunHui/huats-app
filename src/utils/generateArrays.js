
import Cat from '../images/Cat';
import Rat from '../images/Rat';
import Chicken from '../images/Chicken';
import Centipede from '../images/Centipede';

const generateRandomArray = (images) => {
    const arr = [];
    while (arr.length < 4) {
        const randomNum = Math.floor(Math.random() * images.length);
        const randomImage = images[randomNum];
        if (!arr.includes(randomImage)) {
            arr.push(randomImage);
        }
    }
    return arr;
};

const tileImages = ['東', "南", "西", "北"];
const animalImages = [<Rat />, <Cat />, <Chicken />, <Centipede />];

export const generateTilesArray = () => generateRandomArray(tileImages);
export const generateAnimalsArray = () => generateRandomArray(animalImages);
