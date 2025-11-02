/**
 * Check for special remedies based on numerological chart and dashas
 * @param {Object} digitCounts - Count of each digit (1-9) in the chart
 * @param {number} destinyNumber - Destiny/Life Path number
 * @param {number} mahaDasha - Current Maha Dasha period number
 * @param {number} annualDasha - Current Annual Dasha number
 * @returns {Array} Array of remedy objects
 */
const checkSpecialRemedies = (digitCounts = {}, destinyNumber, mahaDasha, annualDasha) => {
    const remedies = [];

    // Helper function to check if a number exists in chart
    const hasNumberInChart = (num) => {
        return digitCounts[num] && digitCounts[num] > 0;
    };

    // Helper function to check if a number is in any dasha
    const hasNumberInDasha = (num) => {
        return mahaDasha === num || annualDasha === num;
    };

    // Rule 1: Number 4 in chart OR dasha of 4 → Garbh Gauri Rudraksha
    if (hasNumberInChart(4) || hasNumberInDasha(4)) {
        remedies.push({
            type: 'rudraksha',
            name: 'Garbh Gauri Rudraksha',
            reason: hasNumberInChart(4)
                ? 'Number 4 present in your numerological chart'
                : 'Currently in Dasha period of number 4',
            benefits: 'Provides protection, harmony, and balance for Rahu (number 4) influences',
            priority: 'high'
        });
    }

    // Rule 2: Number 8 in chart OR dasha of 8 → 8 Mukhi Rudraksha
    if (hasNumberInChart(8) || hasNumberInDasha(8)) {
        remedies.push({
            type: 'rudraksha',
            name: '8 Mukhi Rudraksha',
            reason: hasNumberInChart(8)
                ? 'Number 8 present in your numerological chart'
                : 'Currently in Dasha period of number 8',
            benefits: 'Removes obstacles, provides success, and neutralizes Saturn (number 8) challenges',
            deity: 'Lord Ganesha',
            mantra: 'Om Hum Namah',
            priority: 'high'
        });
    }

    // Rule 3: Destiny 4 → Specific remedy (Gauri Shankar Rudraksha)
    if (destinyNumber === 4) {
        remedies.push({
            type: 'rudraksha',
            name: 'Gauri Shankar Rudraksha',
            reason: 'Destiny number is 4 - requires harmony and relationship balance',
            benefits: 'Promotes harmony in relationships, emotional stability, removes self-doubt',
            deity: 'Shiva & Parvati',
            mantra: 'Om Gauri Shankaraya Namah',
            priority: 'medium',
            note: 'Wear on Monday after sunrise during Shiv Muhurat'
        });
    }

    // Rule 4: 9 and 4 present without 5 → 3 Mukhi protection
    if (hasNumberInChart(9) && hasNumberInChart(4) && !hasNumberInChart(5)) {
        remedies.push({
            type: 'rudraksha',
            name: '3 Mukhi Rudraksha',
            reason: 'Numbers 9 and 4 present without balancing number 5',
            benefits: 'Removes negativity, purifies the soul, burns past karma, provides protection',
            deity: 'Agni (Fire God)',
            mantra: 'Om Kleem Namah',
            priority: 'high',
            note: 'Protects from Mars-Rahu conflict'
        });
    }

    // Rule 5: Odd count of 4 → Ganesh Rudraksha
    if (digitCounts[4] && digitCounts[4] % 2 !== 0) {
        remedies.push({
            type: 'rudraksha',
            name: 'Ganesh Rudraksha',
            reason: `Odd count of number 4 (${digitCounts[4]}) in chart - creates imbalance`,
            benefits: 'Removes obstacles, enhances analytical skills, provides success in new projects',
            deity: 'Lord Ganesha',
            mantra: 'Om Gam Ganapataye Namah',
            priority: 'medium',
            availability: 'Rare',
            note: 'Especially beneficial for new ventures'
        });
    }

    // Rule 6: Multiple 1s without Destiny 1 → 1 Mukhi + Surya Arghya
    if (digitCounts[1] && digitCounts[1] >= 2 && destinyNumber !== 1) {
        remedies.push({
            type: 'rudraksha',
            name: '1 Mukhi Rudraksha',
            reason: `Multiple 1s (${digitCounts[1]}) in chart without Destiny 1 - needs grounding`,
            benefits: 'Leadership, confidence, charisma, prosperity, connection to divine consciousness',
            deity: 'Lord Shiva / Surya',
            mantra: 'Om Hreem Namah',
            priority: 'medium',
            metal: 'Gold/Copper',
            wearingDay: 'Monday'
        });

        remedies.push({
            type: 'ritual',
            name: 'Surya Arghya',
            reason: `Multiple 1s (${digitCounts[1]}) in chart - requires Sun worship`,
            benefits: 'Balances ego, reduces stress, promotes humility and inner balance',
            practice: 'Offer water to the Sun in early morning',
            frequency: 'Daily, especially on Sundays',
            priority: 'high',
            note: 'Face east at sunrise while offering water'
        });
    }

    // Additional check: Multiple 2s → Emotional balance needed
    if (digitCounts[2] && digitCounts[2] >= 3) {
        remedies.push({
            type: 'practice',
            name: 'Creative Expression and Moon Worship',
            reason: `Multiple 2s (${digitCounts[2]}) in chart - emotional sensitivity`,
            benefits: 'Emotional balance, creative outlet, mental peace',
            practice: 'Engage in creative hobbies (dancing, painting), light lamp on Mondays',
            priority: 'medium'
        });
    }

    // Additional check: Multiple 8s → Saturn appeasement
    if (digitCounts[8] && digitCounts[8] >= 2) {
        remedies.push({
            type: 'ritual',
            name: 'Saturday Donations',
            reason: `Multiple 8s (${digitCounts[8]}) in chart - Saturn's strong influence`,
            benefits: 'Reduces hardships, brings patience, improves karma',
            practice: 'Donate mustard oil, black lentils, or shoes; feed dogs rotis with mustard oil',
            frequency: 'Saturdays',
            priority: 'medium'
        });
    }

    // Additional check: Multiple 9s → Energy management
    if (digitCounts[9] && digitCounts[9] >= 3) {
        remedies.push({
            type: 'practice',
            name: 'Energy Management Practice',
            reason: `Multiple 9s (${digitCounts[9]}) in chart - high Mars energy`,
            benefits: 'Channels energy positively, reduces impulsiveness, improves focus',
            practice: 'Regular running, meditation, physical exercise',
            priority: 'medium'
        });
    }

    return remedies;
};

/**
 * Get remedy priority level description
 * @param {string} priority - Priority level (high/medium/low)
 * @returns {string} Priority description
 */
const getRemedyPriorityDescription = (priority) => {
    const descriptions = {
        high: 'Highly recommended - should be implemented as soon as possible',
        medium: 'Recommended - beneficial for overall balance',
        low: 'Optional - can enhance positive effects'
    };
    return descriptions[priority] || 'Beneficial practice';
};

/**
 * Filter remedies by type
 * @param {Array} remedies - Array of remedy objects
 * @param {string} type - Type to filter (rudraksha/ritual/practice)
 * @returns {Array} Filtered remedies
 */
const filterRemediesByType = (remedies, type) => {
    return remedies.filter(remedy => remedy.type === type);
};

/**
 * Get high priority remedies
 * @param {Array} remedies - Array of remedy objects
 * @returns {Array} High priority remedies
 */
const getHighPriorityRemedies = (remedies) => {
    return remedies.filter(remedy => remedy.priority === 'high');
};

/**
 * Format remedies for display
 * @param {Array} remedies - Array of remedy objects
 * @returns {Array} Formatted remedies
 */
const formatRemediesForDisplay = (remedies) => {
    return remedies.map(remedy => ({
        ...remedy,
        priorityDescription: getRemedyPriorityDescription(remedy.priority)
    }));
};

export {
    checkSpecialRemedies,
    getRemedyPriorityDescription,
    filterRemediesByType,
    getHighPriorityRemedies,
    formatRemediesForDisplay
};

export default checkSpecialRemedies;
