const remedies = {
    1: {
        general: "Embrace leadership roles but practice humility. Avoid arrogance. Wear shades of orange, gold, and yellow. Sunday is your power day.",
        mantra: "Om Suryaya Namah (ॐ सूर्याय नमः) - Chant this mantra, especially on Sundays, to harness the Sun's energy.",
        donation: "Donate wheat, jaggery (gur), or copper on Sundays to strengthen the Sun's positive influence."
    },
    2: {
        general: "Control emotional fluctuations and avoid being overly sensitive. Practice mindfulness. Wear white, silver, and light blue. Monday is your power day.",
        mantra: "Om Chandraya Namah (ॐ चंद्राय नमः) - Chanting this can bring emotional balance and peace.",
        donation: "Donate rice, sugar, milk, or silver on Mondays to appease the Moon."
    },
    3: {
        general: "Share your wisdom, but avoid being preachy or dogmatic. Respect your elders and teachers. Wear yellow and cream. Thursday is your power day.",
        mantra: "Om Gurave Namah (ॐ गुरवे नमः) - This mantra enhances wisdom, knowledge, and good fortune.",
        donation: "Donate bananas, yellow lentils (chana dal), or books on Thursdays."
    },
    4: {
        general: "Be mindful of impulsive decisions and overthinking. Ground yourself with a routine. Avoid dark colors, especially black. Focus on shades of brown and grey.",
        mantra: "Om Rahave Namah (ॐ राहवे नमः) - Chanting this can help mitigate the unpredictable effects of Rahu.",
        donation: "Donate black sesame seeds (til) or blankets to the needy on Saturdays."
    },
    5: {
        general: "Use your communication skills wisely and honestly. Avoid gossip. Stay adaptable but finish what you start. Wear shades of green. Wednesday is your power day.",
        mantra: "Om Budhaya Namah (ॐ बुधाय नमः) - Enhances intellect, communication, and business acumen.",
        donation: "Donate green moong dal, green vegetables, or clothes to the young on Wednesdays."
    },
    6: {
        general: "Enjoy luxury but avoid overindulgence. Maintain harmony in relationships. Appreciate beauty in all its forms. Wear bright white, pink, and floral prints. Friday is your power day.",
        mantra: "Om Shukraya Namah (ॐ शुक्राय नमः) - This mantra can attract love, beauty, and material comforts.",
        donation: "Donate yogurt, ghee, or perfumes on Fridays."
    },
    7: {
        general: "Balance your spiritual pursuits with worldly responsibilities. Trust your intuition but don't detach completely. Wear light, smoky, or multi-colored fabrics.",
        mantra: "Om Ketave Namah (ॐ केतवे नमः) - Helps in spiritual growth and protects from hidden enemies.",
        donation: "Donate a brown or multi-colored blanket or feed street dogs."
    },
    8: {
        general: "Be patient and persistent; your hard work will pay off. Practice discipline and fairness. Avoid being too pessimistic. Wear dark blue and black. Saturday is your power day.",
        mantra: "Om Shanaishcharaya Namah (ॐ शनैश्चराय नमः) - Chanting this helps reduce the hardships associated with Saturn.",
        donation: "Donate mustard oil, black lentils (urad dal), or shoes on Saturdays."
    },
    9: {
        general: "Channel your high energy into constructive activities. Control your temper and impulsiveness. Stand up for the helpless. Wear shades of red and coral. Tuesday is your power day.",
        mantra: "Om Angarakaya Namah (ॐ अंगारकाय नमः) - Boosts courage, energy, and helps overcome obstacles.",
        donation: "Donate red lentils (masoor dal) or red fruits like pomegranates on Tuesdays."
    }
};

const multipleNumberRemedies = {
    1: { focus: "To Counteract Negative Effects of Number 1", recommendation: "To balance the challenging influences of the number 1, such as ego and stress, it is recommended to offer water to the Sun (Surya Arghya) in the early morning. Practice yoga with a focus on releasing tension in the shoulders and neck. When acquiring property or making large investments, exercise caution and perform thorough checks to avoid impulsive decisions. Observing a spiritual discipline like fasting on Sundays can help promote humility and inner balance." },
    2: { focus: "For Creativity and Spiritual Practice", recommendation: "Dedicate at least two hours of your time alternately to engaging hobbies like dancing, painting, or other creative pursuits. Every Monday, light a lamp (diya) in your home shrine (mandir) and consider fasting. It is also recommended to personally feed a cow and incorporate running into your routine." },
    3: { focus: "For Health and Detoxification", recommendation: "For better health, it is advisable to avoid alcohol and other toxic beverages, including sugary cold drinks. Be mindful and take special care of your liver's health." },
    4: { focus: "For Physical Fitness", recommendation: "Maintain a consistent fitness regimen that includes a mix of general exercise, physical activity, meditation, and gym workouts." },
    5: { focus: "For Mind-Body Balance", recommendation: "Prioritize regular physical activity and exercise to keep your body healthy. Complement this with mind-relaxation techniques such as meditation and yoga for overall harmony." },
    6: { focus: "For Focus and Relationships", recommendation: "Invest time in nurturing your relationships. To improve your concentration and mental clarity, make meditation a regular practice." },
    7: { focus: "For Intellectual Stimulation", recommendation: "Engage your intellect by getting involved in research work. You might also enjoy exploring subjects like occult sciences or reading detective novels." },
    8: { focus: "For Patience and Karma", recommendation: "Approach your goals with hard work and patience. As an act of service, consider feeding dogs rotis (flatbread) made with mustard oil." },
    9: { focus: "For Energy Management", recommendation: "Keep your personal energy positive and well-directed by engaging in activities such as running, meditation, and regular physical exercise." }
};

const mantraRemedies = {
    1: { planet: "Sun", mantra: "Om Hraam Hreem Hraum Sah Suryaya Namah", deity: "Surya", purpose: "Vitality, Confidence", metal: "Gold", finger: "Ring", day: "Sunday", count: 108, mala: "Rudraksha", notes: "Face east at sunrise" },
    2: { planet: "Moon", mantra: "Om Shraam Shreem Shraum Sah Chandraya Namah", deity: "Chandra", purpose: "Emotions, Peace", metal: "Silver", finger: "Little", day: "Monday", count: 108, mala: "Pearl/Lotus", notes: "Chant at night or morning" },
    9: { planet: "Mars", mantra: "Om Kraam Kreem Kraum Sah Bhaumaya Namah", deity: "Mangal", purpose: "Energy, Blood", metal: "Copper", finger: "Ring", day: "Tuesday", count: 108, mala: "Red Sandalwood", notes: "Face southeast" },
    5: { planet: "Mercury", mantra: "Om Braam Breem Braum Sah Budhaya Namah", deity: "Budha", purpose: "Intellect, Speech", metal: "Bronze", finger: "Little", day: "Wednesday", count: 108, mala: "Tulsi", notes: "Chant in calm mind" },
    3: { planet: "Jupiter", mantra: "Om Graam Greem Graum Sah Gurave Namah", deity: "Guru", purpose: "Wisdom, Dharma", metal: "Gold", finger: "Index", day: "Thursday", count: 108, mala: "Rudraksha", notes: "Avoid non-veg on day" },
    6: { planet: "Venus", mantra: "Om Draam Dreem Draum Sah Shukraya Namah", deity: "Shukra", purpose: "Beauty, Love", metal: "Silver/Platinum", finger: "Ring/Middle", day: "Friday", count: 108, mala: "Kamalgatta/Crystal", notes: "Fast till sunset" },
    8: { planet: "Saturn", mantra: "Om Praam Preem Praum Sah Shanaishcharaya Namah", deity: "Shani", purpose: "Patience, Career", metal: "Iron", finger: "Middle", day: "Saturday", count: 108, mala: "Black Rudraksha", notes: "Face west, no oil" },
    4: { planet: "Rahu", mantra: "Om Bhraam Bhreem Bhraum Sah Rahave Namah", deity: "Rahu", purpose: "Foreign, Illusion", metal: "Lead/Silver", finger: "Middle", day: "Saturday", count: 108, mala: "8-Mukhi Rudraksha", notes: "New moon best time" },
    7: { planet: "Ketu", mantra: "Om Sraam Sreem Sraum Sah Ketave Namah", deity: "Ketu", purpose: "Moksha, Insight", metal: "Lead", finger: "Middle", day: "Tuesday", count: 108, mala: "Spatika", notes: "Best during eclipse" }
};

const rudrakshaRemedies = {
    1: { mukhi: "1 Mukhi / 12 Mukhi", planet: "Sun", deity: "Shiva / Surya", mantra: "Om Hreem Namah", wearingDay: "Monday", benefits: { general: "Leadership, confidence, charisma, prosperity.", spiritual: "Connection to divine consciousness, self-realization.", health: "Good for heart, eyes, bones." }, method: "Wear on a Monday after washing with Ganga water and chanting the mantra.", finger: "Ring", metal: "Gold/Copper" },
    2: { mukhi: "2 Mukhi / Gauri Shankar", planet: "Moon", deity: "Ardhanarishvara", mantra: "Om Namah", wearingDay: "Monday", benefits: { general: "Emotional balance, harmony in relationships.", spiritual: "Unity of masculine and feminine energies.", health: "Good for kidneys, intestines." }, method: "Wear on a Monday after washing with Ganga water and chanting the mantra.", finger: "Little", metal: "Silver" },
    9: { mukhi: "3 Mukhi", planet: "Mars", deity: "Agni", mantra: "Om Kleem Namah", wearingDay: "Monday", benefits: { general: "Removes negativity, purifies the soul, boosts energy.", spiritual: "Burns past karma, aids in spiritual growth.", health: "Good for blood pressure, digestion." }, method: "Wear on a Monday after washing with Ganga water and chanting the mantra.", finger: "Ring", metal: "Gold/Copper" },
    5: { mukhi: "4 Mukhi", planet: "Mercury", deity: "Brahma", mantra: "Om Hreem Namah", wearingDay: "Monday", benefits: { general: "Enhances intellect, communication, creativity.", spiritual: "Increases knowledge and wisdom.", health: "Good for throat, memory." }, method: "Wear on a Monday after washing with Ganga water and chanting the mantra.", finger: "Little", metal: "Silver" },
    3: { mukhi: "5 Mukhi", planet: "Jupiter", deity: "Kalagni Rudra", mantra: "Om Hreem Namah", wearingDay: "Thursday", benefits: { general: "Peace of mind, good health, prosperity.", spiritual: "Aids in meditation and spiritual practices.", health: "Good for liver, blood pressure." }, method: "Wear on a Thursday after washing with Ganga water and chanting the mantra.", finger: "Index", metal: "Gold" },
    6: { mukhi: "6 Mukhi / 13 Mukhi", planet: "Venus", deity: "Kartikeya / Kamadeva", mantra: "Om Hreem Hum Namah", wearingDay: "Friday", benefits: { general: "Attracts love, enhances charm, brings luxury.", spiritual: "Fulfillment of desires, spiritual magnetism.", health: "Good for reproductive organs." }, method: "Wear on a Friday after washing with Ganga water and chanting the mantra.", finger: "Middle", metal: "Silver" },
    8: { mukhi: "7 Mukhi / 14 Mukhi", planet: "Saturn", deity: "Mahalakshmi / Hanuman", mantra: "Om Hum Namah", wearingDay: "Saturday", benefits: { general: "Overcomes financial difficulties, brings good fortune.", spiritual: "Protection from negative energies.", health: "Good for bones, nerves." }, method: "Wear on a Saturday after washing with Ganga water and chanting the mantra.", finger: "Middle", metal: "Silver/Gold" },
    4: { mukhi: "8 Mukhi", planet: "Rahu", deity: "Ganesha", mantra: "Om Hum Namah", wearingDay: "Wednesday", benefits: { general: "Removes obstacles, brings success.", spiritual: "Grounding energy, protection from malefic effects.", health: "Good for nervous system, skin." }, method: "Wear on a Wednesday after washing with Ganga water and chanting the mantra.", finger: "Middle", metal: "Silver" },
    7: { mukhi: "9 Mukhi", planet: "Ketu", deity: "Durga", mantra: "Om Hreem Hum Namah", wearingDay: "Tuesday", benefits: { general: "Courage, victory over enemies, dynamism.", spiritual: "Protection from evil forces, spiritual awakening.", health: "Good for skin, body pains." }, method: "Wear on a Tuesday after washing with Ganga water and chanting the mantra.", finger: "N/A", metal: "Silver/Gold" }
};

const advancedRudrakshaRemedies = {
    1: { primary: "1 Mukhi", secondary: "12 Mukhi", reasoning: "Represents Sun" },
    2: { primary: "2 Mukhi", secondary: "Gauri Shankar", reasoning: "Signifies emotional balance" },
    3: { primary: "5 Mukhi", secondary: "10 Mukhi", reasoning: "Ruled by Jupiter" },
    4: { primary: "8 Mukhi", secondary: "N/A", reasoning: "Ruled by Rahu" },
    5: { primary: "4 Mukhi", secondary: "10 Mukhi", reasoning: "Represents Mercury" },
    6: { primary: "6 Mukhi", secondary: "13 Mukhi", reasoning: "Ruled by Venus" },
    7: { primary: "9 Mukhi", secondary: "N/A", reasoning: "Ruled by Ketu" },
    8: { primary: "7 Mukhi", secondary: "14 Mukhi", reasoning: "Governed by Saturn" },
    9: { primary: "3 Mukhi", secondary: "N/A", reasoning: "Ruled by Mars" }
};

const specialRudrakshaRemedies = {
    4: {
        type: 'detailedRudraksha',
        title: "Special Guidance for Number 4 (Rahu)",
        rudrakshaName: "Ganesh Rudraksha",
        deity: "Lord Ganesha",
        rulingPlanet: "Rahu",
        mantra: "Om Gam Ganapataye Namah",
        significance: "Removes all obstacles and provides wisdom, learning, and success in new ventures.",
        benefits: "Removes obstacles, enhances analytical skills, provides success in new projects, and protects against enemies.",
        remedyFor: "Malefic effects of Rahu, constant failures, legal troubles, lung diseases, and anxiety.",
        whoShouldWear: "Anyone starting a new venture.",
        availability: "Rare",
        form: "Bead with a trunk-like protrusion"
    },
    8: {
        type: 'detailedRudraksha',
        title: "Special Guidance for Number 8 (Saturn)",
        rudrakshaName: "7 Mukhi Rudraksha",
        deity: "Goddess Mahalakshmi",
        rulingPlanet: "Saturn",
        mantra: "Om Hum Namah",
        significance: "Bestows wealth, prosperity, and success; overcomes financial and career difficulties.",
        benefits: "Attracts financial opportunities, removes bad luck, provides career growth, and neutralizes negative energies.",
        remedyFor: "Malefic effects of Saturn (Sade Sati), financial struggles, career stagnation, and chronic body pain.",
        whoShouldWear: "Business owners, service professionals, traders, and anyone facing financial hardship.",
        availability: "Common",
        form: "Round/Oval"
    }
};

const destinyBasedRemedies = {
    4: {
        type: 'detailedRudraksha',
        title: "Additional Rudraksha for Destiny 4: Harmony in Relationships",
        rudrakshaName: "Gauri Shankar Rudraksha",
        deity: "Shiva & Parvati",
        rulingPlanet: "Moon",
        mantra: "Om Gauri Shankaraya Namah",
        significance: "Represents the divine union of masculine and feminine energies; excellent for family harmony and relationships.",
        benefits: "Promotes harmony in all relationships, brings emotional stability, removes self-doubt, and enhances creativity.",
        remedyFor: "Wear on a Monday after sunrise during Shiv Muhurat; chant "Om Gauri Shankaraya Namah" 108 times; offer water, milk, and bilva leaves to Shiva Linga weekly; meditate daily for harmony.",
        whoShouldWear: "Couples, those seeking a partner",
        availability: "Rare",
        form: "Two beads naturally joined"
    }
};

const chakraData = {
    "Sahasrara (Crown)": { location: "Top of the head", mukhi: ["1 Mukhi"], effect: "Connects to universal consciousness, enhances intuition, and promotes enlightenment." },
    "Ajna (Third Eye)": { location: "Between eyebrows", mukhi: ["14 Mukhi"], effect: "Awakens intuition, foresight, and psychic abilities; improves decision-making." },
    "Vishuddha (Throat)": { location: "Throat region", mukhi: ["4 Mukhi", "6 Mukhi"], effect: "Improves communication, self-expression, and confidence." },
    "Anahata (Heart)": { location: "Center of chest", mukhi: ["15 Mukhi", "Gauri Shankar"], effect: "Heals emotional trauma, fosters compassion, love, and harmonious relationships." },
    "Manipura (Solar Plexus)": { location: "Above the navel", mukhi: ["3 Mukhi", "12 Mukhi"], effect: "Boosts willpower, self-esteem, vitality, and leadership qualities." },
    "Swadhisthana (Sacral)": { location: "Lower abdomen", mukhi: ["6 Mukhi", "13 Mukhi"], effect: "Enhances creativity, emotional balance, and healthy desires." },
    "Mooladhara (Root)": { location: "Base of the spine", mukhi: ["8 Mukhi", "9 Mukhi"], effect: "Provides grounding, stability, security, and courage; removes fear." }
};

const shaktiBeejMantras = {
    "Hreem": { beej: "ह्रीं", deity: "Kali / Bhuvaneshwari", purpose: "Protection, Power", day: "Friday / Amavasya", mala: "Rudraksha", notes: "Tantra sadhana base", count: 108 },
    "Kleem": { beej: "क्लीं", deity: "Kamakhya / Lalita", purpose: "Attraction, Love", day: "Friday", mala: "Crystal", notes: "Avoid misuse", count: 108 },
    "Shreem": { beej: "श्रीं", deity: "Mahalakshmi", purpose: "Wealth, Grace", day: "Friday", mala: "Kamalgatta", notes: "Chant with devotion", count: 108 },
    "Aim": { beej: "ऐं", deity: "Saraswati", purpose: "Knowledge, Speech", day: "Thursday", mala: "White Lotus", notes: "Best in morning", count: 108 },
    "Dum": { beej: "दुं", deity: "Durga", purpose: "Protection, Courage", day: "Tuesday", mala: "Red Coral", notes: "Combine with Navarna", count: 108 }
};

export default {
    remedies,
    multipleNumberRemedies,
    mantraRemedies,
    rudrakshaRemedies,
    advancedRudrakshaRemedies,
    specialRudrakshaRemedies,
    destinyBasedRemedies,
    chakraData,
    shaktiBeejMantras
};
