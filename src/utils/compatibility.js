import compatibilityData from '../data/compatibilityData.js';

const { harmonyGroups, destinyCompatibility, assetCompatibility } = compatibilityData;

/**
 * Check if two numbers are in the same harmony group
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {boolean} True if numbers are in same harmony group
 */
const areInSameHarmonyGroup = (num1, num2) => {
    for (const group of harmonyGroups) {
        if (group.includes(num1) && group.includes(num2)) {
            return true;
        }
    }
    return false;
};

/**
 * Get harmony group for a number
 * @param {number} num - Number to check
 * @returns {Array|null} Harmony group containing the number
 */
const getHarmonyGroup = (num) => {
    for (const group of harmonyGroups) {
        if (group.includes(num)) {
            return group;
        }
    }
    return null;
};

/**
 * Check compatibility between two numbers based on harmony groups
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {Object} Compatibility result
 */
const checkNumberCompatibility = (num1, num2) => {
    // Validate inputs
    if (!num1 || !num2 || num1 < 1 || num1 > 9 || num2 < 1 || num2 > 9) {
        throw new Error('Invalid numbers provided. Must be between 1 and 9.');
    }

    const inSameGroup = areInSameHarmonyGroup(num1, num2);
    const group1 = getHarmonyGroup(num1);
    const group2 = getHarmonyGroup(num2);

    return {
        compatible: inSameGroup,
        status: inSameGroup ? 'Harmonious' : 'Challenging',
        num1Group: group1,
        num2Group: group2,
        description: inSameGroup
            ? `Numbers ${num1} and ${num2} are in the same harmony group ${JSON.stringify(group1)}. They naturally complement each other.`
            : `Numbers ${num1} and ${num2} are in different harmony groups (${JSON.stringify(group1)} vs ${JSON.stringify(group2)}). This may require conscious effort to harmonize.`
    };
};

/**
 * Get destiny compatibility between two destiny numbers
 * @param {number} destiny1 - First destiny number
 * @param {number} destiny2 - Second destiny number
 * @returns {Object} Detailed compatibility information
 */
const getDestinyCompatibility = (destiny1, destiny2) => {
    // Validate inputs
    if (!destiny1 || !destiny2 || destiny1 < 1 || destiny1 > 9 || destiny2 < 1 || destiny2 > 9) {
        throw new Error('Invalid destiny numbers provided. Must be between 1 and 9.');
    }

    const person1Data = destinyCompatibility[destiny1];
    const person2Data = destinyCompatibility[destiny2];

    if (!person1Data || !person2Data) {
        throw new Error('Compatibility data not found for provided destiny numbers.');
    }

    // Check person1's view of person2
    let status1, category1;
    if (person1Data.good && person1Data.good.includes(destiny2)) {
        status1 = 'Good';
        category1 = 'good';
    } else if (person1Data.not && person1Data.not.includes(destiny2)) {
        status1 = 'Not Recommended';
        category1 = 'not';
    } else if (person1Data.avoid && person1Data.avoid.includes(destiny2)) {
        status1 = 'Avoid';
        category1 = 'avoid';
    } else if (person1Data.neutral && person1Data.neutral.includes(destiny2)) {
        status1 = 'Neutral';
        category1 = 'neutral';
    } else {
        status1 = 'Neutral';
        category1 = 'neutral';
    }

    // Check person2's view of person1
    let status2, category2;
    if (person2Data.good && person2Data.good.includes(destiny1)) {
        status2 = 'Good';
        category2 = 'good';
    } else if (person2Data.not && person2Data.not.includes(destiny1)) {
        status2 = 'Not Recommended';
        category2 = 'not';
    } else if (person2Data.avoid && person2Data.avoid.includes(destiny1)) {
        status2 = 'Avoid';
        category2 = 'avoid';
    } else if (person2Data.neutral && person2Data.neutral.includes(destiny1)) {
        status2 = 'Neutral';
        category2 = 'neutral';
    } else {
        status2 = 'Neutral';
        category2 = 'neutral';
    }

    // Determine overall compatibility
    let overallStatus;
    if (category1 === 'good' && category2 === 'good') {
        overallStatus = 'Highly Compatible';
    } else if (category1 === 'avoid' || category2 === 'avoid') {
        overallStatus = 'Highly Incompatible';
    } else if (category1 === 'not' || category2 === 'not') {
        overallStatus = 'Not Recommended';
    } else if (category1 === 'good' || category2 === 'good') {
        overallStatus = 'Good Compatibility';
    } else {
        overallStatus = 'Neutral';
    }

    return {
        destiny1,
        destiny2,
        person1View: {
            status: status1,
            category: category1,
            description: person1Data.description
        },
        person2View: {
            status: status2,
            category: category2,
            description: person2Data.description
        },
        overallStatus,
        mutual: status1 === status2,
        recommendation: getCompatibilityRecommendation(overallStatus)
    };
};

/**
 * Get recommendation based on compatibility status
 * @param {string} status - Overall compatibility status
 * @returns {string} Recommendation text
 */
const getCompatibilityRecommendation = (status) => {
    const recommendations = {
        'Highly Compatible': 'This is an excellent match. Both individuals naturally support and understand each other.',
        'Good Compatibility': 'This is a positive match with good potential. Some effort may be needed to maintain harmony.',
        'Neutral': 'This relationship requires conscious effort and understanding from both sides. Success depends on mutual respect.',
        'Not Recommended': 'This match faces challenges. If pursued, both parties need to be aware of potential conflicts and work actively to resolve them.',
        'Highly Incompatible': 'This match is not recommended. Fundamental differences may lead to persistent conflicts.'
    };
    return recommendations[status] || 'Compatibility depends on individual efforts.';
};

/**
 * Get asset synergy status with destiny number
 * @param {number} assetNum - Asset number (house/vehicle/phone number reduced to single digit)
 * @param {number} destinyNum - Destiny number of the person
 * @returns {string} Synergy status: Auspicious/Good/Neutral/Avoid
 */
const getAssetSynergyStatus = (assetNum, destinyNum) => {
    // Validate inputs
    if (!assetNum || !destinyNum || assetNum < 1 || assetNum > 9 || destinyNum < 1 || destinyNum > 9) {
        throw new Error('Invalid numbers provided. Must be between 1 and 9.');
    }

    const compatibility = assetCompatibility[destinyNum];

    if (!compatibility) {
        throw new Error('Asset compatibility data not found for destiny number.');
    }

    if (compatibility.auspicious && compatibility.auspicious.includes(assetNum)) {
        return 'Auspicious';
    } else if (compatibility.good && compatibility.good.includes(assetNum)) {
        return 'Good';
    } else if (compatibility.avoid && compatibility.avoid.includes(assetNum)) {
        return 'Avoid';
    } else if (compatibility.neutral && compatibility.neutral.includes(assetNum)) {
        return 'Neutral';
    }

    return 'Neutral';
};

/**
 * Get detailed asset synergy analysis
 * @param {number} assetNum - Asset number
 * @param {number} destinyNum - Destiny number
 * @returns {Object} Detailed synergy analysis
 */
const getAssetSynergyAnalysis = (assetNum, destinyNum) => {
    const status = getAssetSynergyStatus(assetNum, destinyNum);
    const compatibility = assetCompatibility[destinyNum];

    const descriptions = {
        'Auspicious': 'This is the most favorable number for your assets. It enhances prosperity and positive energy.',
        'Good': 'This number is beneficial for your assets. It brings supportive energy and growth.',
        'Neutral': 'This number has a neutral effect on your assets. Neither highly beneficial nor harmful.',
        'Avoid': 'This number may create challenges or obstacles. Consider choosing a different number if possible.'
    };

    return {
        assetNumber: assetNum,
        destinyNumber: destinyNum,
        status,
        description: descriptions[status],
        auspiciousNumbers: compatibility.auspicious,
        goodNumbers: compatibility.good,
        neutralNumbers: compatibility.neutral,
        avoidNumbers: compatibility.avoid,
        recommendation: status === 'Avoid'
            ? `Consider changing to one of these numbers: ${[...compatibility.auspicious, ...compatibility.good].join(', ')}`
            : status === 'Neutral'
            ? `For better results, consider these numbers: ${[...compatibility.auspicious, ...compatibility.good].join(', ')}`
            : 'This is a favorable choice. Maintain positive intentions with this asset.'
    };
};

/**
 * Check compatibility between multiple numbers
 * @param {Array} numbers - Array of numbers to check
 * @returns {Object} Compatibility matrix
 */
const checkMultipleNumbersCompatibility = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length < 2) {
        throw new Error('Please provide at least 2 numbers in an array.');
    }

    const matrix = {};

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const key = `${numbers[i]}-${numbers[j]}`;
            matrix[key] = checkNumberCompatibility(numbers[i], numbers[j]);
        }
    }

    return matrix;
};

export {
    checkNumberCompatibility,
    getDestinyCompatibility,
    getAssetSynergyStatus,
    getAssetSynergyAnalysis,
    areInSameHarmonyGroup,
    getHarmonyGroup,
    getCompatibilityRecommendation,
    checkMultipleNumbersCompatibility
};

export default {
    checkNumberCompatibility,
    getDestinyCompatibility,
    getAssetSynergyStatus,
    getAssetSynergyAnalysis
};
