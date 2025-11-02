const yogaDetails = {
    rajYoga: {
        name: "Raj Yoga",
        description: "A powerful combination for leadership and success. This yoga is formed when the Basic Number is 2 and the Destiny Number is 1, blending the intuitive qualities of the Moon with the authoritative energy of the Sun.",
        traits: ["Natural leadership ability", "High potential for public recognition and fame", "Success in administrative or governmental roles", "Strong intuition guiding decisive actions"],
    },
    shaniRahuYoga: { name: "Shani-Rahu Yoga (Shrapit Yoga)", description: "Life may feel heavy and difficult. You might feel stuck, frustrated, or misunderstood. But this yoga also gives you the power to lead big changes in society, especially in politics or large groups. Intense combination indicating dissatisfaction, illusion, and unconventional behavior.", traits: ["Persistent career obstacles and setbacks", "Unconventional or taboo behavior", "Chronic and mysterious health issues"], numbers: [8, 4], empty: [2] },
    suryaKetuYoga: { name: "Surya-Ketu Yoga", description: "You may struggle with self-worth or ego. However, you are deeply spiritual and may have psychic abilities. You could have ups and downs with authority figures like your father or boss.", traits: ["Crisis of confidence and diminished ego", "Profound intuition and psychic insight", "Compelling path toward spirituality and self-realization"], numbers: [1, 7], empty: [8] },
    mangalKetuYoga: { name: "Mangal-Ketu Yoga", description: "You are like a spiritual warrior—bold, fearless, and full of energy. But you may hide anger inside or get hurt unexpectedly.", traits: ["Very spiritual and always searching for deeper meaning", "Has a strong gut feeling and understands things deeply.", "Follows unique goals and does things differently.", "Sometimes hides anger, but it can come out suddenly.", "Can get hurt easily or may need medical help."], numbers: [9, 7], empty: [3] },
    shaniKetuYoga: { name: "Shani-Ketu Yoga", description: "Life may bring constant tests, making you serious and thoughtful. You might feel isolated but grow wise and disciplined over time.", traits: ["Often faces repeated problems and carries past-life burdens.", "Thinks deeply about life and may like a simple, spiritual lifestyle.", "Is very hard on themselves and often feels not good enough.", "Becomes an expert in a specific skill or subject.", "May struggle at work and feel unhappy with their career."], numbers: [7, 8], empty: [1] },
    chandraShukraYoga: { name: "Chandra-Shukra Yoga", description: "You are emotional, romantic, and artistic. You need love and affection to feel balanced. May get too emotionally involved in relationships.", traits: ["Has a strong sense of beauty and deep feelings.", "Needs love, care, and emotional support from others.", "Can get involved in love too easily or have love affairs.", "Very talented in art, music, or other creative things.", "Emotions change quickly, but has a charming personality."], numbers: [2, 6], empty: [3] },
    budhMangalYoga: { name: "Budh-Mangal Yoga", description: "You have a quick and logical mind. You think sharply, can be a clever speaker, and love debates.", traits: ["Very sharp and logical mind", "Either talks a lot or stays quiet and thinks deeply.", "Can be clever in getting what they want, sometimes by manipulating.", "Good with technical work and solving problems.", "Has a sarcastic and sharp sense of humor."], numbers: [9, 5], empty: [4] },
    mangalBudhRahuYoga: { name: "Mangal-Budh-Rahu Yoga (Multi-task)", description: "You are smart, quick, and great at juggling many things at once. This is the ideal yoga for business people, but it can also lead to stress or burnout.", traits: ["Very good at handling many tasks and managing business.", "Can solve problems in unusual or creative ways, especially during tough times.", "Highly skilled in technology and communication.", "Speaks in a powerful and convincing way.", "Sometimes crosses ethical lines or may manipulate situations.", "Can get tired or stressed easily, or show anger."], numbers: [9, 5, 4] },
    guruKetuRahuYoga: { name: "Guru-Ketu-Rahu Yoga (Stability with Wisdom)", description: "You feel torn between spiritual growth and material success. You may challenge old beliefs and seek deep meaning in life.", traits: ["Wants to grow and succeed, but feels unstable inside.", "Has unusual beliefs and wants to change or improve the system.", "Very influential, like a teacher or guide, but may not always follow the rules.", "Always searching for deeper meaning or purpose of life.", "Life goes through big ups and downs in success and reputation."], numbers: [3, 7, 4] },
    guruSuryaMangalYoga: { name: "Guru-Surya-Mangal Yoga", description: "This is the combination of a wise king! You have a very sharp mind. You think clearly, learn fast, and remember things well", traits: ["Has a strong and confident personality.", "Leads others with bold and clear decisions.", "Sticks firmly to their beliefs and opinions.", "Can achieve high position or respect, especially in leadership or teaching.", "May become too proud or act bossy at times."], numbers: [3, 1, 9] },
    chandraKetuMangalYoga: { name: "Chandra-Ketu-Mangal Yoga", description: "You often feel emotionally unstable or restless. You want a luxurious life but may make impulsive decisions.", traits: ["Wants a comfortable, rich, and steady life.", "Feelings can change quickly and mind often feels unsettled.", "Stays strong and brave during tough times.", "May have a difficult or sensitive relationship with their mother.", "Tends to make quick decisions and can get hurt easily."], numbers: [2, 7, 9] },
    suryaChandraYoga: { name: "Surya Chandra Yoga", description: "A lucky combination for a successful and well-recognized career. You might receive government support or fame.", traits: [ "Becomes well-known and successful in their career.", "Easily builds good connections with powerful or government people.", "Achieves goals smoothly with fewer problems.", "Loves and often lives a rich, comfortable, and successful life." ], numbers: [1, 2], empty: [3, 6] },
    chandraKetuBudhYoga: { name: "Chandra-Ketu-Budh Yoga", description: "You attract money, relationships, and popularity easily. You are charming and a natural networker", traits: ["Earns money easily, without much struggle.", "Quickly forms romantic or love relationships.", "Very charming and naturally attractive to others.", "Good at making contacts and building social connections."], numbers: [2, 7, 5], empty: [6] },
    guruShukrYoga: { name: "Guru–Shukr Yoga", description: "You value your freedom and may avoid serious relationships or marriage. You enjoy both spiritual and sensual pleasures.", traits: ["Loves personal freedom and independence.", "Not very interested in traditional marriage or commitments.", "Feels confident handling life alone, without needing others much.", "Struggles inside between spiritual goals and physical desires."], numbers: [3, 6], empty: [2] },
    guruShukrChandraYoga: { name: "Guru–Shukr–Chandra Yoga", description: "Adds deep emotional understanding to your need for freedom. You combine emotion, romance, and spirituality beautifully.", traits: ["All traits of Guru-Shukr Yoga", "Understands their emotions well, even while valuing personal freedom.", "Mixes spiritual thinking, emotional depth, and enjoyment of life's pleasures."], numbers: [3, 6, 2] },
    chandraShaniYoga: { name: "Chandra–Shani Yoga", description: "You may go through emotional ups and downs. Depression or fear might be challenges, but you can also be very disciplined and spiritual.", traits: ["Can sometimes feel low, sad, or not good enough.", "May face accidents or unexpected delays in life.", "Has a very organized and focused mind when emotionally stable.", "Feels naturally drawn toward spirituality and staying detached from worldly things."], numbers: [2, 8], empty: [4] },
    luxuriousYoga: { name: "Luxurious Yoga (Shukra-Ketu-Budh Yoga)", description: "You enjoy a higher quality of life than others around you. You have refined taste and enjoy luxury.", traits: ["Enjoys a very high level of comfort and luxury in life.", "Has classy taste and lives in a stylish way.", "Lives more comfortably or richly than most family members or friends."], numbers: [6, 7, 5] },
    suryaMangalYoga: { name: "Surya-Mangal Yoga", description: "You are brave, smart, and driven. A natural leader with great focus in education and action.", traits: ["Very good at learning and studies, with strong focus.", "Bold, confident, and sometimes aggressive in nature.", "Has sharp vision—either sees things clearly or understands things deeply.", "Leads others with strong energy and expressive style."], numbers: [1, 9], empty: [3] },
    budhKetuYoga: { name: "Budh-Ketu Yoga", description: "You are smart and precise, but emotionally distant. Great at analysis but not very expressive with feelings.", traits: ["Feels attracted to others but does not show much emotion.", "Talks in a smart, logical way but may seem cold or distant.", "Very accurate and good at analyzing things."], numbers: [5, 7], empty: [6,2] },
    suryaGuruYoga: { name: "Surya-Guru Yoga", description: "You are a wise and respected leader or teacher. You do the right thing and lead with knowledge and confidence.", traits: ["Honest and has a noble, good-hearted nature.", "Very smart and quick at learning new things.", "Leads others with wisdom and earns respect.", "Knows how to use knowledge in real-life situations."], numbers: [1, 3], empty: [9] },
    chandraRahuYoga: { name: "Chandra-Rahu Yoga (Grahan Yoga)", description: "You may feel emotionally unbalanced or go through mood swings. It can affect how you see yourself and relate to others.", traits: ["Self-confidence goes up and down often.", "Feelings and thoughts are sometimes unstable or unsettled.", "Can get hurt easily because of not paying attention or being mentally distracted."], numbers: [2, 4], empty: [8] },
    rahuBudhYoga: { name: "Rahu-Budh Yoga (Jadatva Yoga)", description: "Your mind may become obsessive. You could face legal issues or mysterious health problems.", traits: ["Often gets involved in legal issues or arguments.", "May suffer from ongoing or hard-to-diagnose health problems.", "When things go wrong, the results can be very serious or harmful."], numbers: [4, 5], empty: [9] },
    suryaShaniYoga: { name: "Surya-Shani Yoga", description: "A difficult combination that can cause problems with people in power, chances of being disrespected, and even damage to one's reputation—especially when things are not going well.", traits: ["Often has conflicts with people in power, like father, boss, or government.","May face disrespect or criticism from superiors.","Can act rebellious or defiant when feeling frustrated with authority.","Has a high chance of being blamed or talked badly about in public.","Might face public shame or lose a respected position."], numbers: [1, 8], empty: [7] },
    shukraKetuYoga: { name: "Shukra-Ketu Yoga", description: "You are charming but feel empty inside when it comes to love or luxury. You may go through many relationships without feeling fulfilled.", traits: ["Has a mysterious and strong charm that attracts others easily.","Takes a distant or unusual approach in love, always looking for the perfect partner.","Deep down, is searching for a pure, spiritual kind of love.","Finds it hard to maintain peace and balance in long-term relationships.","Has unique and emotional creative talents","Sometimes doesn't feel fully satisfied with luxury or material things—feels they lack deeper meaning"], numbers: [6, 7], empty: [5] },
    rahuMangalYoga: { name: "Rahu-Mangal Yoga (Angarak Yoga)", description: "This is a fiery, aggressive yoga. It can bring courage and energy but also sudden accidents, anger, or extreme beliefs.", traits: ["If energy is used in the right way, can be extremely brave and driven.","Often gets into arguments","At risk of accidents involving fire, weapons, or vehicles.","Can face sudden health issues.","Has a strong temper and can get very angry quickly.","Tends to act without thinking and takes big risks.","Might become too extreme or stubborn about their beliefs or goals."], numbers: [9, 4], empty: [5] },
    suryaChandraRahuYoga: { name: "Surya-Chandra-Rahu Yoga (Eclipse Yoga)", description: "You have great charisma and ambition but may manipulate others or make unclear decisions.", traits: ["Has very big ambitions and a strong, commanding presence.","Can cleverly influence or control others to reach their goals.","May not always follow clear morals when it comes to money or relationships.","Has a powerful charm that can strongly attract or influence people."], numbers: [1, 2, 4], empty: [3, 6, 9, 5] },
    guruKetuYoga: { name: "Guru-Ketu Yoga (God Believer Yoga / Ganesha Yoga)", description: "You are deeply spiritual and may feel disconnected from material life. You believe strongly in divine guidance, awakening an 'inner guru'.", traits: ["Has a deep and strong personal faith in the divine.","Not very interested in chasing money or material things.","Very intuitive and wise from within—like having an inner teacher.","Loves learning about philosophy, ancient knowledge, and spiritual healing.","Often feels different or not fully understood by people who only care about material life."], numbers: [3, 7], empty: [9] },
    mangalGuruKetuYoga: { name: "Mangal-Guru-Ketu Yoga (Spiritual Warrior)", description: "A powerful leader of truth and justice. Combines spiritual wisdom with fearless action.", traits: ["Follows a spiritual path through action — they practice what they believe.","Has deep knowledge of spiritual texts, philosophy, and higher truths.","Leads with courage and inspires others for a noble or spiritual purpose.","Strongly believes in doing what is right and standing up for others.","May sometimes become too rigid, overly passionate, or extreme in their beliefs."], numbers: [3, 7, 9] },
    chandraShaniRahuYoga: { name: "Chandra-Shani-Rahu Yoga", description: "You may face deep emotional confusion and extreme ups and downs in life. Often struggles with self-worth.", traits: ["Feels very unsure about themselves — sometimes overly confident, other times not good enough.","Can get extremely angry and lose all emotional control.","Life is full of big ups and downs, with many sudden changes.","Often struggles with deep emotional issues, anxiety, or fears.","Can be very manipulative and hard to predict."], numbers: [2, 8, 4] },
    chandraShukraEmotionalAffairYoga: {
        name: "Chandra-Shukra Yoga (Emotional Affair Yoga)",
        description: "You crave deep emotional and romantic connections and may make big life choices based on feelings and beauty.",
        traits: ["Makes decisions based on emotions and a sense of beauty or feeling.","Feels emotionally dependent on their partner and needs love and reassurance to feel safe.","Can easily get into deep emotional or physical relationships if their emotional needs aren't met.","Has an extreme mindset—either goes all-in for luxury or gives it up completely to find emotional peace."],
        activation_rules: {
            requires_counts: { "2": 2 },
            requires_presence: [6],
            requires_absence: [3]
        }
    },
    chandraShukraHighIntensityYoga: {
        name: "Chandra-Shukra Yoga (High Intensity)",
        description: "Your entire life revolves around beauty and love. You may become a genius in art or suffer deep emotional pain.",
        traits: ["Deeply needs beauty and emotional warmth—can't handle cold or unpleasant environments.","Feels heavily emotionally dependent on their partner and may feel hopeless without love.","Always seeks romantic excitement, which can lead to intense or multiple relationships.","Swings between living in luxury and giving it all up after an emotional pain.","Has incredible artistic talent, possibly at a genius level.","Very charming and naturally attracts people like a magnet.","Extremely sensitive and emotionally delicate—small things can deeply affect them."],
        activation_rules: {
            requires_counts: { "2": 2, "6": 2 },
            requires_absence: [3]
        }
    },
    mangalBudhSharpMindYoga: {
        name: "Mangal-Budh Yoga (Sharp Mind Personality)",
        description: "You are smart and quick-thinking. You can be very talkative or very quiet, and you know how to get what you want.",
        traits: ["Very intelligent and sharp-minded.","Can be super chatty or very silent.","Good at understanding people and situations.","Clever and knows how to plan things well.","Sometimes uses others to get ahead."],
        activation_rules: {
            requires_counts: { "5": 2 },
            requires_presence: [9],
            requires_absence: [4]
        }
    },
    mangalBudhDeepLearnerYoga: {
        name: "Mangal-Budh Yoga (Deep Learner Yoga)",
        description: "You learn slowly but deeply. You may seem slow at first, but you retain knowledge for life..",
        traits: ["Learns in a careful and steady way, not by rushing.","May seem slow in fast settings but understands deep, important basics others often miss.","Becomes skilled through regular practice and discipline over time.","Once learned, their knowledge stays strong and lasts a lifetime."],
        activation_rules: {
            requires_counts: { "9": 2 },
            requires_presence: [5],
            requires_absence: [4]
        }
    },
    mangalBudhFraudProneYoga: {
        name: "Fraud Prone Yoga (Afflicted Rahu-Budh)",
        description: "There's a tendency to cheat or be dishonest for money. Financial life may be unstable and risky.",
        traits: ["May get involved in cheating or dishonest actions without feeling much guilt.", "Believes it's okay to lie or trick others to reach their goals.", "Money comes and goes quickly—financial life is unstable.", "Not dependable when it comes to money or business—can't always be trusted."],
        activation_rules: {
            requires_counts: { "5": 3 },
            requires_presence: [9],
            requires_absence: [4]
        }
    },
    mangalBudhGoodLearnerYoga: {
        name: "Good Learner Yoga (Mangal-Budh with repetitions)",
        description: "You may take time to learn, but once you do, you become very fast and confident in that subject.",
        traits: ["Learns new things slowly and step-by-step, needing a clear and organized process.", "Once the topic is understood, they can talk about it quickly and clearly with great confidence.", "Their slow learning phase helps them build strong knowledge through practice and repetition."],
        activation_rules: {
            requires_counts: { "9": 2, "5": 2 }
        }
    },
    mahaketuYoga:  {
        name: "Maha Ketu",
        description: "You are sharp, intense, and driven by precision. This combination is ideal for fields that require focus, discipline, and the courage to uncover hidden truths.",
        traits: ["Good for careers in sports, law, and detective work.", "Strong perfectionist tendencies with a focus on accuracy.", "Highly observant and analytical under pressure.", "Driven by a sense of purpose and inner strength."],
        activation_rules: {
            requires_counts: { "7": 3 }
        }
    },
    mahaguruYoga: {
        name: "Maha Guru",
        description: "You are intuitive, imaginative, and drawn to hidden truths. This energy is ideal for creative and mystical pursuits.",
        traits: ["Good in occult sciences and mystical studies.","Attracted to the unknown or mysterious."],
        activation_rules: {
            requires_counts: { "3": 3 }
        }
    }
};

export default yogaDetails;
