const harmonyGroups = [[1, 5, 7], [2, 4, 8], [3, 6, 9]];

const vowels = ["A", "E", "I", "O", "U"];

const destinyCompatibility = {
    1: { good: [3, 6, 8], not: [1, 2], neutral: [4, 5, 7, 9], description: "As a Leader (1), you seek partners who complement your drive. You find harmony with the creative (3), the nurturing (6), and the ambitious (8). Clashes can occur with another Leader (1) or the sensitive Mediator (2)." },
    2: { good: [2, 3, 6, 7, 8, 9], not: [1], avoid: [4, 5], description: "As a Mediator (2), you need emotional security. You connect well with most, especially other Mediators (2), Creators (3), and Nurturers (6). The forceful Leader (1) can be overwhelming, while the unpredictable Builder (4) and Adventurer (5) may cause instability." },
    3: { good: [3, 5, 7, 9], neutral: [1, 2, 4, 6, 8], description: "As a Creator (3), you thrive on expression and intellect. You have joyful connections with other Creators (3), Adventurers (5), and Seekers (7). You can find common ground with anyone who shares strong moral values." },
    4: { good: [3, 6, 7, 8], not: [5], avoid: [2], neutral: [1, 9], description: "As a Builder (4), you value stability. You form strong bonds with the Creator (3), Nurturer (6), and Powerhouse (8). The restless Adventurer (5) is a volatile match, and the sensitive Mediator (2) may clash with your pragmatic nature." },
    5: { good: [3, 5, 7, 8, 9], not: [4], avoid: [2], neutral: [1, 6], description: "As an Adventurer (5), you seek excitement and freedom. You connect well with the Creator (3), other Adventurers (5), and the Powerhouse (8). The structured Builder (4) can feel restrictive, and the emotional Mediator (2) may desire more stability than you offer." },
    6: { good: [1, 2, 6, 7], neutral: [3, 4, 5, 8, 9], description: "As a Nurturer (6), your focus is on love and family. You create beautiful bonds with the Leader (1), Mediator (2), other Nurturers (6), and the Seeker (7). Your adaptable nature allows you to get along with almost anyone." },
    7: { good: [1, 3, 5, 7, 9], neutral: [2, 4, 6, 8], description: "As a Seeker (7), you desire a deep, intellectual connection. You find this with the Leader (1), Creator (3), and Adventurer (5). Your partnership is based on spiritual understanding and a quest for truth." },
    8: { good: [1, 2, 3, 5, 7, 9], neutral: [4, 6], description: "As a Powerhouse (8), you are ambitious and goal-oriented. You form a successful team with the Leader (1), Mediator (2), and Creator (3), who support your drive. Mutual respect for ambition is key." },
    9: { good: [1, 3, 5, 7], neutral: [2, 4, 6, 8], description: "As a Humanitarian (9), you are compassionate and idealistic. You connect deeply with the Leader (1), Creator (3), and Seeker (7), who share your desire to make a positive impact." },
};

const assetCompatibility = {
    1: { auspicious: [1], good: [2, 3], neutral: [5, 6, 7, 9], avoid: [4, 8] },
    2: { auspicious: [2], good: [1, 3], neutral: [5, 6, 7, 9], avoid: [4, 8] },
    3: { auspicious: [3], good: [1, 2], neutral: [5, 6, 7, 9], avoid: [4, 8] },
    4: { auspicious: [6], good: [5], neutral: [1, 2, 3, 7, 9], avoid: [4, 8] },
    5: { auspicious: [5], good: [6], neutral: [1, 2, 3, 7, 9], avoid: [4, 8] },
    6: { auspicious: [6], good: [5], neutral: [1, 2, 3, 7, 9], avoid: [4, 8] },
    7: { auspicious: [7], good: [9], neutral: [1, 2, 3, 5, 6], avoid: [4, 8] },
    8: { auspicious: [7, 8], good: [9], neutral: [1, 2, 3, 5, 6], avoid: [4] },
    9: { auspicious: [9], good: [7], neutral: [1, 2, 3, 5, 6], avoid: [4, 8] }
};

export default {
    harmonyGroups,
    vowels,
    destinyCompatibility,
    assetCompatibility
};
