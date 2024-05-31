import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  interface EmotionDescriptions {
    happy: string[];
    anxious: string[];
    excited: string[];
    content: string[];
    frustrated: string[];
    hopeful: string[];
    tired: string[];
    curious: string[];
    relaxed: string[];
    confused: string[];
    joyful: string[];
    nervous: string[];
    thrilled: string[];
    satisfied: string[];
    angry: string[];
    optimistic: string[];
    sleepy: string[];
    interested: string[];
    calm: string[];
    puzzled: string[];
  }

  type Emotion = keyof EmotionDescriptions;

  for (let i = 0; i <= 100; i += 1) {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const image = faker.image.avatar();
    const publicVal = Math.random() < 0.5;
    const emailDate = faker.date.past({ years: 1 });
    const checkCount = Math.floor(Math.random() * 6) + 1;
    const userChecks = [];
    const emotions: Emotion[] = [
      "happy",
      "anxious",
      "excited",
      "content",
      "frustrated",
      "hopeful",
      "tired",
      "curious",
      "relaxed",
      "confused",
      "joyful",
      "nervous",
      "thrilled",
      "satisfied",
      "angry",
      "optimistic",
      "sleepy",
      "interested",
      "calm",
      "puzzled",
    ];

    const emotionDescriptions: EmotionDescriptions = {
      happy: [
        "feeling or showing pleasure or contentment.",
        "experiencing joy and satisfaction.",
        "being in a good mood.",
        "radiating positive vibes.",
        "smiling frequently.",
        "feeling light-hearted.",
        "having a sense of well-being.",
        "feeling grateful and appreciative.",
        "experiencing a sense of delight.",
        "feeling cheerful and uplifted.",
      ],
      anxious: [
        "experiencing worry, unease, or nervousness.",
        "feeling apprehensive about the future.",
        "being on edge or tense.",
        "having a sense of impending doom.",
        "struggling to relax.",
        "feeling jittery or restless.",
        "worrying excessively.",
        "experiencing a racing heart.",
        "feeling overwhelmed by stress.",
        "having trouble concentrating.",
      ],
      excited: [
        "feeling very enthusiastic and eager.",
        "buzzing with anticipation.",
        "having heightened energy levels.",
        "unable to sit still.",
        "feeling thrilled about something.",
        "having butterflies in my stomach.",
        "being eager for something to happen.",
        "feeling a surge of adrenaline.",
        "having an elevated mood.",
        "feeling ecstatic about upcoming events.",
      ],
      content: [
        "in a state of peaceful happiness.",
        "feeling satisfied with what I have.",
        "experiencing a sense of fulfillment.",
        "being at ease and comfortable.",
        "feeling no need for more.",
        "experiencing inner peace.",
        "being happy with the current state of affairs.",
        "feeling serene and untroubled.",
        "having a calm and satisfied mind.",
        "feeling that everything is just right.",
      ],
      frustrated: [
        "feeling or expressing distress and annoyance.",
        "experiencing obstacles to my goals.",
        "feeling stuck and unable to progress.",
        "having a sense of irritation.",
        "feeling thwarted in my efforts.",
        "experiencing a high level of stress.",
        "feeling exasperated by delays or issues.",
        "struggling to find a solution.",
        "feeling angry at the lack of results.",
        "having a sense of helplessness.",
      ],
      hopeful: [
        "feeling or inspiring optimism about a future event.",
        "having a positive outlook on the future.",
        "believing that good things will happen.",
        "feeling encouraged about prospects.",
        "experiencing a sense of anticipation.",
        "being optimistic about outcomes.",
        "feeling a sense of possibility.",
        "expecting positive results.",
        "looking forward with confidence.",
        "feeling a sense of promise for the future.",
      ],
      tired: [
        "in need of sleep or rest; weary.",
        "feeling exhausted and drained.",
        "having low energy levels.",
        "struggling to stay awake.",
        "feeling drowsy and sluggish.",
        "experiencing fatigue.",
        "needing to rest and recover.",
        "feeling worn out and depleted.",
        "lacking vitality and enthusiasm.",
        "feeling physically and mentally spent.",
      ],
      curious: [
        "eager to know or learn something.",
        "having a strong desire to discover.",
        "feeling inquisitive about the world.",
        "being interested in new experiences.",
        "wanting to explore and understand.",
        "having a thirst for knowledge.",
        "feeling investigative.",
        "being open to new ideas.",
        "experiencing wonder and fascination.",
        "wanting to ask questions and find answers.",
      ],
      relaxed: [
        "free from tension and anxiety.",
        "feeling calm and at ease.",
        "experiencing tranquility.",
        "having a peaceful state of mind.",
        "being free from stress.",
        "feeling laid-back and unhurried.",
        "experiencing a sense of serenity.",
        "having a mellow attitude.",
        "feeling composed and unruffled.",
        "being in a restful state.",
      ],
      confused: [
        "unable to think clearly; bewildered.",
        "feeling perplexed and uncertain.",
        "experiencing a lack of clarity.",
        "having trouble understanding.",
        "feeling disoriented.",
        "being unsure of what to do.",
        "experiencing mental fog.",
        "feeling baffled by a situation.",
        "struggling to make sense of things.",
        "feeling puzzled and mixed up.",
      ],
      joyful: [
        "feeling, expressing, or causing great pleasure and happiness.",
        "experiencing intense delight.",
        "radiating happiness.",
        "feeling blissfully content.",
        "being full of joy and cheer.",
        "experiencing a sense of jubilation.",
        "feeling elated and buoyant.",
        "having a heart full of happiness.",
        "feeling a surge of positive emotions.",
        "being in a state of high spirits.",
      ],
      nervous: [
        "easily agitated or alarmed; tending to be anxious.",
        "feeling tense and uneasy.",
        "experiencing jitters.",
        "being worried about an upcoming event.",
        "feeling a knot in my stomach.",
        "struggling to calm my nerves.",
        "having sweaty palms.",
        "experiencing a racing heart.",
        "feeling apprehensive and on edge.",
        "having a sense of dread or fear.",
      ],
      thrilled: [
        "feeling intense excitement and happiness.",
        "being overjoyed with anticipation.",
        "experiencing an adrenaline rush.",
        "feeling electrified by joy.",
        "being ecstatic about something.",
        "having a heart-pounding excitement.",
        "feeling immensely happy.",
        "being over the moon with joy.",
        "feeling exuberant and lively.",
        "having a sense of euphoria.",
      ],
      satisfied: [
        "contented; pleased with the outcome.",
        "feeling fulfillment from accomplishments.",
        "experiencing a sense of achievement.",
        "being happy with results.",
        "feeling gratified and pleased.",
        "experiencing no further desire.",
        "feeling a sense of completion.",
        "being content with what I have.",
        "feeling rewarded and fulfilled.",
        "having no complaints or desires.",
      ],
      angry: [
        "feeling or showing strong annoyance, displeasure, or hostility.",
        "experiencing intense irritation.",
        "feeling a surge of rage.",
        "being furious about something.",
        "having a short temper.",
        "feeling a desire to shout or lash out.",
        "experiencing a strong sense of injustice.",
        "feeling infuriated by a situation.",
        "having a seething anger.",
        "feeling hostile and antagonistic.",
      ],
      optimistic: [
        "hopeful and confident about the future.",
        "expecting positive outcomes.",
        "having a bright outlook on life.",
        "feeling confident about what lies ahead.",
        "experiencing a sense of hope.",
        "believing that things will turn out well.",
        "being positive about future events.",
        "feeling encouraged and uplifted.",
        "having a can-do attitude.",
        "expecting the best possible outcomes.",
      ],
      sleepy: [
        "needing sleep; drowsy.",
        "feeling ready to fall asleep.",
        "experiencing heavy eyelids.",
        "struggling to keep my eyes open.",
        "yawning frequently.",
        "feeling groggy and sluggish.",
        "having a low level of alertness.",
        "desiring to rest or nap.",
        "experiencing a lack of energy.",
        "feeling physically and mentally fatigued.",
      ],
      interested: [
        "showing curiosity or concern about something or someone.",
        "being engaged and attentive.",
        "wanting to learn more about a topic.",
        "feeling a sense of involvement.",
        "having a desire to explore.",
        "being intrigued by new information.",
        "feeling an eagerness to understand.",
        "being attentive and curious.",
        "wanting to participate in something.",
        "experiencing a keen interest.",
      ],
      calm: [
        "not showing or feeling nervousness, anger, or other strong emotions.",
        "feeling peaceful and untroubled.",
        "experiencing a sense of serenity.",
        "being composed and relaxed.",
        "having a tranquil state of mind.",
        "feeling unruffled by stress.",
        "experiencing inner peace.",
        "being cool and collected.",
        "having a steady and stable mood.",
        "feeling no emotional agitation.",
      ],
      puzzled: [
        "unable to understand; perplexed.",
        "feeling confused about a situation.",
        "experiencing a sense of bafflement.",
        "having trouble making sense of something.",
        "feeling bewildered and perplexed.",
        "struggling to find an answer.",
        "experiencing mental confusion.",
        "being mystified by a problem.",
        "having a sense of disorientation.",
        "feeling unsure and lost.",
      ],
    };

    const emotionBodyDescriptions: EmotionDescriptions = {
      happy: [
        "I feel a lightness in my step.",
        "My face is relaxed with a smile.",
        "I feel warmth in my chest.",
        "My eyes sparkle with joy.",
        "I feel energetic and lively.",
        "I have a constant urge to laugh.",
        "My body feels relaxed and tension-free.",
        "I notice a positive glow in my skin.",
        "I feel a sense of openness in my heart.",
        "My breathing is steady and calm.",
      ],
      anxious: [
        "My heart races rapidly.",
        "I feel a tightness in my chest.",
        "My hands tremble slightly.",
        "I have a knot in my stomach.",
        "My muscles are tense and rigid.",
        "I feel short of breath.",
        "My palms are sweaty.",
        "I have an uneasy feeling in my gut.",
        "My legs feel restless and jittery.",
        "I experience frequent headaches.",
      ],
      excited: [
        "I feel butterflies in my stomach.",
        "My heart beats faster with anticipation.",
        "I have a surge of energy.",
        "My hands tingle with excitement.",
        "I can't stop smiling.",
        "I feel an adrenaline rush.",
        "My body feels light and bouncy.",
        "I have a sparkle in my eyes.",
        "I feel warmth radiating from my core.",
        "I can't sit still due to excitement.",
      ],
      content: [
        "I feel a gentle warmth in my chest.",
        "My body is relaxed and at ease.",
        "I have a peaceful smile on my face.",
        "My breathing is slow and steady.",
        "I feel a pleasant heaviness in my limbs.",
        "My mind is calm and clear.",
        "I have a sense of inner peace.",
        "My muscles are loose and relaxed.",
        "I feel a gentle hum of satisfaction.",
        "My body feels balanced and centered.",
      ],
      frustrated: [
        "I feel a tightness in my jaw.",
        "My fists clench involuntarily.",
        "I have a knot in my stomach.",
        "My muscles feel tense and stiff.",
        "I experience a surge of heat in my face.",
        "My breathing is shallow and rapid.",
        "I have an urge to pace or move around.",
        "I feel a throbbing in my temples.",
        "My body feels restless and agitated.",
        "I have a strong urge to sigh or groan.",
      ],
      hopeful: [
        "I feel a lightness in my chest.",
        "My heart feels open and warm.",
        "I have a gentle smile on my face.",
        "My breathing is calm and deep.",
        "I feel a pleasant tingling sensation.",
        "My body feels relaxed and uplifted.",
        "I have a sense of strength in my core.",
        "My eyes shine with optimism.",
        "I feel an overall sense of well-being.",
        "My muscles feel loose and flexible.",
      ],
      tired: [
        "I feel a heaviness in my eyelids.",
        "My body feels sluggish and slow.",
        "I have a constant urge to yawn.",
        "My muscles feel sore and fatigued.",
        "I experience a dull ache in my head.",
        "My movements are slow and deliberate.",
        "I feel a lack of energy in my limbs.",
        "My thoughts are foggy and unclear.",
        "I have trouble keeping my eyes open.",
        "My body feels drained of vitality.",
      ],
      curious: [
        "I feel a tingling sensation in my scalp.",
        "My eyes widen with interest.",
        "I have a slight forward lean in my posture.",
        "My heart beats a bit faster.",
        "I feel a buzzing in my brain.",
        "My body feels alert and awake.",
        "I have a sense of readiness in my limbs.",
        "My breathing quickens slightly.",
        "I feel an urge to explore and move.",
        "My senses feel heightened and sharp.",
      ],
      relaxed: [
        "I feel a gentle heaviness in my limbs.",
        "My muscles are loose and comfortable.",
        "I have a soft, contented smile.",
        "My breathing is deep and even.",
        "I feel warmth spreading through my body.",
        "My mind is calm and quiet.",
        "I feel a pleasant tingling in my skin.",
        "My posture is open and easy.",
        "I have a sense of peace in my heart.",
        "My eyes are soft and unfocused.",
      ],
      confused: [
        "I feel a furrow in my brow.",
        "My shoulders tense up.",
        "I have a knot in my stomach.",
        "My breathing is irregular.",
        "I feel a sense of dizziness.",
        "My mind feels foggy and unclear.",
        "I have trouble focusing my eyes.",
        "My heart beats irregularly.",
        "I feel a sense of imbalance.",
        "My body feels out of sync.",
      ],
      joyful: [
        "I feel a radiant warmth in my chest.",
        "My face lights up with a smile.",
        "I have an urge to laugh and shout.",
        "My body feels light and buoyant.",
        "I feel an energetic rush through my limbs.",
        "My heart feels like it's soaring.",
        "I have a glow in my skin.",
        "My eyes sparkle with joy.",
        "I feel a pleasant tingling all over.",
        "My movements are quick and lively.",
      ],
      nervous: [
        "I feel a fluttering in my stomach.",
        "My heart races and pounds.",
        "I have a tightness in my chest.",
        "My hands are clammy and sweaty.",
        "I feel a tremor in my hands.",
        "My breathing is shallow and quick.",
        "I have a sense of unease in my gut.",
        "My legs feel weak and shaky.",
        "I feel a lump in my throat.",
        "My muscles are tense and tight.",
      ],
      thrilled: [
        "I feel an electrifying rush through my body.",
        "My heart races with excitement.",
        "I have a big, uncontrollable smile.",
        "My hands tremble with anticipation.",
        "I feel a surge of energy.",
        "My eyes light up with joy.",
        "I have a tingly sensation all over.",
        "My body feels light and airy.",
        "I have an urge to jump or dance.",
        "My voice becomes animated and lively.",
      ],
      satisfied: [
        "I feel a warm glow of contentment.",
        "My muscles are relaxed and loose.",
        "I have a pleasant heaviness in my body.",
        "My breathing is deep and even.",
        "I feel a sense of completeness.",
        "My heart feels full and warm.",
        "I have a gentle smile on my face.",
        "My eyes are calm and peaceful.",
        "I feel a sense of balance and harmony.",
        "My body feels rested and fulfilled.",
      ],
      angry: [
        "I feel a burning heat in my chest.",
        "My fists clench tightly.",
        "I have a tightness in my jaw.",
        "My breathing is fast and shallow.",
        "I feel a surge of adrenaline.",
        "My face feels hot and flushed.",
        "I have a tense, rigid posture.",
        "My muscles are tight and ready to act.",
        "I feel a pounding in my temples.",
        "My voice becomes louder and sharper.",
      ],
      optimistic: [
        "I feel a lightness in my chest.",
        "My heart feels open and warm.",
        "I have a smile on my face.",
        "My breathing is calm and steady.",
        "I feel a pleasant tingling sensation.",
        "My body feels relaxed and uplifted.",
        "I have a sense of strength in my core.",
        "My eyes shine with optimism.",
        "I feel an overall sense of well-being.",
        "My muscles feel loose and flexible.",
      ],
      sleepy: [
        "I feel a heaviness in my eyelids.",
        "My body feels sluggish and slow.",
        "I have a constant urge to yawn.",
        "My muscles feel sore and fatigued.",
        "I experience a dull ache in my head.",
        "My movements are slow and deliberate.",
        "I feel a lack of energy in my limbs.",
        "My thoughts are foggy and unclear.",
        "I have trouble keeping my eyes open.",
        "My body feels drained of vitality.",
      ],
      interested: [
        "I feel a tingling sensation in my scalp.",
        "My eyes widen with interest.",
        "I have a slight forward lean in my posture.",
        "My heart beats a bit faster.",
        "I feel a buzzing in my brain.",
        "My body feels alert and awake.",
        "I have a sense of readiness in my limbs.",
        "My breathing quickens slightly.",
        "I feel an urge to explore and move.",
        "My senses feel heightened and sharp.",
      ],
      calm: [
        "I feel a gentle heaviness in my limbs.",
        "My muscles are loose and comfortable.",
        "I have a soft, contented smile.",
        "My breathing is deep and even.",
        "I feel warmth spreading through my body.",
        "My mind is calm and quiet.",
        "I feel a pleasant tingling in my skin.",
        "My posture is open and easy.",
        "I have a sense of peace in my heart.",
        "My eyes are soft and unfocused.",
      ],
      puzzled: [
        "I feel a furrow in my brow.",
        "My shoulders tense up.",
        "I have a knot in my stomach.",
        "My breathing is irregular.",
        "I feel a sense of dizziness.",
        "My mind feels foggy and unclear.",
        "I have trouble focusing my eyes.",
        "My heart beats irregularly.",
        "I feel a sense of imbalance.",
        "My body feels out of sync.",
      ],
    };

    const imageLinks = [
      "https://images.unsplash.com/photo-1657664073337-31394d7e5c7a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716718405779-79c152f0f831?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716694318677-dc75a9d7e439?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716677951293-853a3948f633?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716792588036-c2834e00afc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1544885935-98dd03b09034?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1542865763-0339b28c4a34?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616696695535-98369e260e7a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585417606876-215992ddd304?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1599410110298-56ab00841c11?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    for (let j = 0; j < checkCount; j += 1) {
      const imageIndex = Math.floor(Math.random() * imageLinks.length);
      const imageLink = imageLinks[imageIndex];
      const emotionIndex = Math.floor(Math.random() * emotions.length);
      const emotionWord: Emotion = emotions[emotionIndex];

      // Ensure emotionDescriptions[emotionWord] is defined before accessing its length
      if (emotionDescriptions[emotionWord]) {
        const descriptionArray = emotionDescriptions[emotionWord];
        const bodyDescriptionArray = emotionBodyDescriptions[emotionWord];
        const descriptionIndex1 = Math.floor(
          Math.random() * descriptionArray.length
        );
        const descriptionIndex2 = Math.floor(
          Math.random() * descriptionArray.length
        );
        const descriptionIndex3 = Math.floor(
          Math.random() * descriptionArray.length
        );
        const descriptionIndex4 = Math.floor(
          Math.random() * descriptionArray.length
        );
        const descriptionIndex5 = Math.floor(
          Math.random() * descriptionArray.length
        );
        const description = `I am ${descriptionArray[descriptionIndex1]} I am ${descriptionArray[descriptionIndex2]} I am ${descriptionArray[descriptionIndex3]} I am ${descriptionArray[descriptionIndex4]}  I am ${descriptionArray[descriptionIndex5]}`;
        const bodyDescription = `${bodyDescriptionArray[descriptionIndex1]} ${bodyDescriptionArray[descriptionIndex2]} ${bodyDescriptionArray[descriptionIndex3]} ${bodyDescriptionArray[descriptionIndex4]}  ${bodyDescriptionArray[descriptionIndex5]}`;
        userChecks.push({
          title: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          image: imageLink,
          word: emotionWord,
          description: description,
          body: bodyDescription,
          trigger: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          reaction: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          response: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          physical: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          thoughts: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          action: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          grateful: faker.lorem.word({
            length: { min: 5, max: 7 },
            strategy: "fail",
          }),
          public: publicVal,
        });
      } else {
        console.warn(
          `Emotion word '${emotionWord}' not found in emotionDescriptions.`
        );
      }
    }

    const user = await prisma.user.upsert({
      where: { email: email },
      update: {},
      create: {
        email: email,
        emailVerified: emailDate,
        name: name,
        image: image,
        public: publicVal,
        checks: {
          create: userChecks,
        },
      },
    });
    console.log(user)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
