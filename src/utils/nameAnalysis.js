import letterData from '../data/letterData.js';

/**
 * Check if a character is a vowel
 * @param {string} char - Character to check
 * @returns {boolean} True if vowel
 */
const isVowel = (char) => {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    return vowels.includes(char.toUpperCase());
};

/**
 * Check if a number is a master number
 * @param {number} num - Number to check
 * @returns {boolean} True if master number (11, 22, 33)
 */
const isMasterNumber = (num) => {
    return num === 11 || num === 22 || num === 33;
};

/**
 * Reduce a number to single digit, preserving master numbers
 * @param {number} num - Number to reduce
 * @returns {number} Reduced number
 */
const reduceNumber = (num) => {
    while (num > 9 && !isMasterNumber(num)) {
        num = String(num)
            .split('')
            .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
};

/**
 * Calculate letter frequency in a name
 * @param {string} name - Name to analyze
 * @returns {Object} Letter frequency map
 */
const getLetterFrequency = (name) => {
    const frequency = {};
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');

    for (const letter of cleanName) {
        frequency[letter] = (frequency[letter] || 0) + 1;
    }

    return frequency;
};

/**
 * Find repeated letters (appearing 2 or more times)
 * @param {Object} frequency - Letter frequency map
 * @returns {Array} Array of repeated letters with counts
 */
const getRepeatedLetters = (frequency) => {
    return Object.entries(frequency)
        .filter(([letter, count]) => count >= 2)
        .map(([letter, count]) => ({
            letter,
            count,
            meaning: letterData[letter]?.repeat || 'No specific meaning'
        }));
};

/**
 * Find missing letters in a name
 * @param {Object} frequency - Letter frequency map
 * @returns {Array} Array of missing letters
 */
const getMissingLetters = (frequency) => {
    const allLetters = Object.keys(letterData);
    return allLetters.filter(letter => !frequency[letter]);
};

/**
 * Calculate Expression Number (full name)
 * @param {string} name - Full name
 * @returns {number} Expression number
 */
const calculateExpression = (name) => {
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;

    for (const letter of cleanName) {
        if (letterData[letter]) {
            sum += letterData[letter].num;
        }
    }

    return reduceNumber(sum);
};

/**
 * Calculate Soul Urge Number (vowels only)
 * @param {string} name - Full name
 * @returns {number} Soul Urge number
 */
const calculateSoulUrge = (name) => {
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;

    for (const letter of cleanName) {
        if (isVowel(letter) && letterData[letter]) {
            sum += letterData[letter].num;
        }
    }

    return reduceNumber(sum);
};

/**
 * Calculate Personality Number (consonants only)
 * @param {string} name - Full name
 * @returns {number} Personality number
 */
const calculatePersonality = (name) => {
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
    let sum = 0;

    for (const letter of cleanName) {
        if (!isVowel(letter) && letterData[letter]) {
            sum += letterData[letter].num;
        }
    }

    return reduceNumber(sum);
};

/**
 * Get first letter information
 * @param {string} name - Name
 * @returns {Object} First letter info
 */
const getFirstLetterInfo = (name) => {
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
    if (!cleanName) return null;

    const firstLetter = cleanName[0];
    const letterInfo = letterData[firstLetter];

    return {
        letter: firstLetter,
        number: letterInfo?.num,
        meaning: letterInfo?.firstLetter
    };
};

/**
 * Get first vowel information
 * @param {string} name - Name
 * @returns {Object} First vowel info
 */
const getFirstVowelInfo = (name) => {
    const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');

    for (const letter of cleanName) {
        if (isVowel(letter)) {
            const letterInfo = letterData[letter];
            return {
                letter,
                number: letterInfo?.num,
                meaning: letterInfo?.meaning
            };
        }
    }

    return null;
};

/**
 * Analyze a name for all numerological aspects
 * @param {string} name - Full name to analyze
 * @returns {Object} Complete name analysis
 */
const analyzeName = (name) => {
    if (!name || typeof name !== 'string') {
        throw new Error('Invalid name provided');
    }

    const frequency = getLetterFrequency(name);
    const expression = calculateExpression(name);
    const soulUrge = calculateSoulUrge(name);
    const personality = calculatePersonality(name);
    const firstLetter = getFirstLetterInfo(name);
    const firstVowel = getFirstVowelInfo(name);
    const repeatedLetters = getRepeatedLetters(frequency);
    const missingLetters = getMissingLetters(frequency);

    return {
        expression,
        soulUrge,
        personality,
        firstLetter,
        firstVowel,
        repeatedLetters,
        missingLetters
    };
};

export {
    analyzeName,
    calculateExpression,
    calculateSoulUrge,
    calculatePersonality,
    getFirstLetterInfo,
    getFirstVowelInfo,
    getRepeatedLetters,
    getMissingLetters,
    isVowel,
    isMasterNumber,
    reduceNumber
};

export default analyzeName;
