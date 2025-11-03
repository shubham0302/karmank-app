// Core numerology calculation utilities

/**
 * Reduces a number to a single digit (1-9)
 * Exception: Master numbers 11, 22, 33 are not reduced
 * @param {number} num - Number to reduce
 * @returns {number} - Reduced number
 */
export const reduceToSingleDigit = (num) => {
  // Handle master numbers
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }

  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }

  return num;
};

/**
 * Calculate Basic Number (Moolank) from birth day
 * @param {Date} dob - Date of birth
 * @returns {number} - Basic number (1-9)
 */
export const calculateBasicNumber = (dob) => {
  const day = dob.getDate();
  return reduceToSingleDigit(day);
};

/**
 * Calculate Destiny Number (Bhagyank) from full date of birth
 * Sums all individual digits of the complete DOB
 * @param {Date} dob - Date of birth
 * @returns {number} - Destiny number (1-9, or master numbers 11, 22, 33)
 */
export const calculateDestinyNumber = (dob) => {
  const day = dob.getDate();
  const month = dob.getMonth() + 1; // JavaScript months are 0-indexed
  const year = dob.getFullYear();

  // Create DOB string and sum all individual digits
  const dobString = `${day}${month}${year}`;
  const sum = dobString.split('').reduce((acc, digit) => acc + parseInt(digit), 0);

  return reduceToSingleDigit(sum);
};

/**
 * Build the base Kundli grid from date of birth
 * Uses DD+MM+YY format (last 2 digits of year only)
 * Layout: [3, 1, 9, 6, 7, 5, 2, 8, 4] for 3x3 display
 * @param {Date} dob - Date of birth
 * @param {number} basicNumber - Basic number
 * @param {number} destinyNumber - Destiny number
 * @returns {Object} - Grid with counts for each number 1-9
 */
export const buildBaseKundliGrid = (dob, basicNumber, destinyNumber) => {
  const grid = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  // Format: DD + MM + YY (2-digit year)
  const day = String(dob.getDate()).padStart(2, '0');
  const month = String(dob.getMonth() + 1).padStart(2, '0');
  const year = String(dob.getFullYear()).substring(2); // Last 2 digits only

  // Combine and remove zeros
  const dobString = (day + month + year).replace(/0/g, '');

  // Count each digit 1-9
  for (const char of dobString) {
    const digit = parseInt(char);
    if (digit > 0 && digit <= 9) {
      grid[digit]++;
    }
  }

  // Add destiny number to grid
  grid[destinyNumber]++;

  // Add basic number if day > 9 (compound numbers)
  const dayNum = dob.getDate();
  if (dayNum > 9 && dayNum % 10 !== 0) {
    grid[basicNumber]++;
  }

  return grid;
};

/**
 * Build dynamic Kundli grid by adding active dasha numbers to base grid
 * @param {Object} baseGrid - Base Kundli grid
 * @param {Object} activeDashas - Object with daily, monthly, yearly, maha dasha numbers
 * @returns {Object} - Dynamic grid with dasha influences
 */
export const buildDynamicKundliGrid = (baseGrid, activeDashas = {}) => {
  const dynamicGrid = { ...baseGrid };

  // Add active dasha numbers
  if (activeDashas.daily) dynamicGrid[activeDashas.daily]++;
  if (activeDashas.monthly) dynamicGrid[activeDashas.monthly]++;
  if (activeDashas.yearly) dynamicGrid[activeDashas.yearly]++;
  if (activeDashas.maha) dynamicGrid[activeDashas.maha]++;

  return dynamicGrid;
};

/**
 * Get Kundli grid layout for 3x3 display
 * @param {Object} grid - Grid object with counts
 * @returns {Array} - 3x3 array of numbers
 */
export const getKundliGridLayout = (grid) => {
  const layout = [3, 1, 9, 6, 7, 5, 2, 8, 4];

  return layout.map(num => ({
    number: num,
    count: grid[num] || 0,
    display: grid[num] ? num.toString().repeat(grid[num]) : ''
  }));
};

/**
 * Check if a specific yoga is present in the chart
 * @param {Object} yoga - Yoga definition with numbers, empty, activation_rules
 * @param {Object} digitCounts - Kundli grid counts
 * @param {number} basicNumber - Basic number
 * @param {number} destinyNumber - Destiny number
 * @returns {boolean} - Whether yoga is active
 */
export const checkYoga = (yoga, digitCounts, basicNumber, destinyNumber) => {
  // Validate yoga structure
  if (!yoga || !yoga.numbers || !Array.isArray(yoga.numbers)) {
    return false;
  }

  // Check if all required numbers are present
  const hasAllRequired = yoga.numbers.every(num => digitCounts[num] > 0);

  // Check if none of the empty numbers are present
  const hasNoEmpty = !yoga.empty || yoga.empty.every(num => digitCounts[num] === 0);

  if (!hasAllRequired || !hasNoEmpty) {
    return false;
  }

  // Check advanced activation rules if present
  if (yoga.activation_rules) {
    return checkAdvancedYoga(yoga.activation_rules, digitCounts, basicNumber, destinyNumber);
  }

  return true;
};

/**
 * Check advanced yoga activation rules
 * @param {string} rules - Rule string to evaluate
 * @param {Object} digitCounts - Kundli grid counts
 * @param {number} basicNumber - Basic number
 * @param {number} destinyNumber - Destiny number
 * @returns {boolean} - Whether advanced rules pass
 */
const checkAdvancedYoga = (rules, digitCounts, basicNumber, destinyNumber) => {
  // This function evaluates complex yoga rules
  // Rules can include: destiny_is, basic_is, count_exact, count_atleast, etc.

  try {
    // Replace placeholders with actual values
    let evalRules = rules
      .replace(/destiny_is\((\d+)\)/g, (_, num) => destinyNumber === parseInt(num))
      .replace(/basic_is\((\d+)\)/g, (_, num) => basicNumber === parseInt(num))
      .replace(/count\((\d+)\)/g, (_, num) => digitCounts[parseInt(num)] || 0)
      .replace(/count_exact\((\d+),(\d+)\)/g, (_, num, count) =>
        (digitCounts[parseInt(num)] || 0) === parseInt(count))
      .replace(/count_atleast\((\d+),(\d+)\)/g, (_, num, count) =>
        (digitCounts[parseInt(num)] || 0) >= parseInt(count));

    // Safely evaluate the expression
    return eval(evalRules);
  } catch (error) {
    console.error('Error evaluating yoga rules:', error);
    return false;
  }
};

/**
 * Detect all active yogas in the chart
 * @param {Array} yogasList - List of all yoga definitions
 * @param {Object} digitCounts - Kundli grid counts
 * @param {number} basicNumber - Basic number
 * @param {number} destinyNumber - Destiny number
 * @returns {Array} - List of active yogas
 */
export const detectYogas = (yogasList, digitCounts, basicNumber, destinyNumber) => {
  const activeYogas = [];

  for (const [yogaKey, yoga] of Object.entries(yogasList)) {
    if (checkYoga(yoga, digitCounts, basicNumber, destinyNumber)) {
      activeYogas.push({
        key: yogaKey,
        ...yoga
      });
    }
  }

  // Special case: Raj Yoga (Basic 2 + Destiny 1)
  if (basicNumber === 2 && destinyNumber === 1) {
    activeYogas.push({
      key: 'raj_yoga',
      name: 'Raj Yoga',
      description: 'A powerful combination that brings leadership with emotional intelligence.',
      traits: ['Natural authority', 'Diplomatic skills', 'Success in governance']
    });
  }

  return activeYogas;
};

/**
 * Analyze recurring numbers in the chart
 * @param {Object} digitCounts - Kundli grid counts
 * @param {number} destinyNumber - Destiny number
 * @returns {Array} - List of recurring number analyses
 */
export const analyzeRecurringNumbers = (digitCounts, destinyNumber) => {
  const analyses = [];

  for (let num = 1; num <= 9; num++) {
    const count = digitCounts[num] || 0;

    if (count >= 2) {
      let influence = '';

      // Define influences based on count and number
      if (count === 2) {
        influence = getDoubleInfluence(num, destinyNumber);
      } else if (count >= 3) {
        influence = getTripleOrMoreInfluence(num, destinyNumber);
      }

      if (influence) {
        analyses.push({
          number: num,
          count,
          influence
        });
      }
    }
  }

  return analyses;
};

/**
 * Get influence description for doubled numbers
 */
const getDoubleInfluence = (num, destinyNumber) => {
  const influences = {
    1: 'Enhanced leadership and ambition, but watch for ego conflicts.',
    2: 'Deep emotional sensitivity and intuition.',
    3: 'Strong communication skills and wisdom.',
    4: 'Increased analytical thinking, potential for overthinking.',
    5: 'Heightened versatility and adaptability.',
    6: 'Amplified nurturing and responsibility.',
    7: 'Deep spiritual seeking and introspection.',
    8: 'Strong discipline and material focus.',
    9: 'Intense energy and courage.'
  };

  return influences[num] || '';
};

/**
 * Get influence description for tripled or more numbers
 */
const getTripleOrMoreInfluence = (num, destinyNumber) => {
  const influences = {
    1: 'Excessive ego and need for control. May face authority challenges.',
    2: 'Overwhelming emotional turbulence and mood swings.',
    3: 'Scattered energy in communication. May talk too much without action.',
    4: 'Extreme mental confusion and instability.',
    5: 'Restlessness and inability to settle.',
    6: 'Over-responsibility leading to burnout.',
    7: 'Isolation and detachment from reality.',
    8: 'Heavy karmic burden, delays in success.',
    9: 'Aggressive behavior and constant conflict.'
  };

  return influences[num] || '';
};

/**
 * Calculate asset vibration number
 * @param {string} assetNumber - Asset number string
 * @returns {number} - Vibration number (1-9)
 */
export const calculateAssetVibration = (assetNumber) => {
  // Extract only digits
  const digits = assetNumber.replace(/\D/g, '');

  if (!digits) return 0;

  // Sum all digits
  const sum = digits.split('').reduce((total, digit) => total + parseInt(digit), 0);

  return reduceToSingleDigit(sum);
};

/**
 * Format date to readable string
 * @param {Date} date - Date object
 * @returns {string} - Formatted date (DD MMM YYYY)
 */
export const formatDate = (date) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * Check if a number is positive in the chart
 * Used for various forecast calculations
 */
export const isPositiveNumber = (num, digitCounts, destinyNumber) => {
  const count = digitCounts[num] || 0;

  switch(num) {
    case 1:
      return count <= 1 || destinyNumber === 1;
    case 3:
      return count <= 1;
    case 5:
      return count === 0 || count === 1 || destinyNumber === 5;
    case 6:
      return count === 0 || destinyNumber === 6;
    case 7:
      return count < 3 || destinyNumber === 7;
    case 8:
      // Even count is positive
      return count % 2 === 0;
    case 9:
      return destinyNumber === 9 || count === 1;
    default:
      return true;
  }
};
