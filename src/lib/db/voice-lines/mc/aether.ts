export const aetherVL = {
  quotes: {
    '0': {
      title: 'About the Windmills',
      audio: 'VO_Aether_About_the_Windmills',
      text: "#___: Mondstadt has so many windmills, doesn't it?\\n___: Well, the city is built above water, so it probably relies on the windmills to draw the water upwards.\\n___: That's correct! The winds blow through Mondstadt all year, so this supply of water is very stable.\\n___: Also, the windmills are what they call \"visible winds\" — and wind chimes are called the \"audible winds.\"\\n___: ___ guesses they can be thought of as mascots and prayers to the Anemo Archon for protection.\\n___: Ah, mascots. So, like you then, ___?\\n___: No! Not at all! They're made of wood, and you can't eat them in an emergency either, 'cause all you'll do is grind your teeth down!\\n___: Uhh...\\n___: ...I don't know what to say to that.",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '1': {
      title: 'About the Tavern Owner',
      audio: 'VO_Aether_About_the_Tavern_Owner',
      text: "#___: I've heard that if you give tavern owners a considerable tip, they'll be willing to give some information on the down low.\\n___: You mean the Angel's Share? But Master Diluc seems like a very rich man.\\n___: How big a tip is \"considerable,\" anyway?\\n___: Uh... Maybe I might have heard wrong.\\n___: Or maybe I might have heard this rumor in another world...\\n___: You sure have been to many worlds, haven't you?",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '2': {
      title: 'About Cider Lake',
      audio: 'VO_Aether_About_Cider_Lake',
      text: "#___: Cider Lake never freezes, no matter what time of year it is.\\n___: The best apple ciders in Mondstadt can only be made using the fresh water from this lake.\\n___: It really does taste great! ___ could drink two big bottles in a second!\\n___: Wow.\\n___: Tee-hee!\\n___: With your size, I can't believe that you can drink that much liquid...\\n___: ...And not explode like an Anemo Slime.\\n___: ___ has a special stomach just for tasty drinks!\\n___: A special stomach? ...I have so many questions about how this world works.",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '3': {
      title: "About the Library's Restricted Section",
      audio: "VO_Aether_About_the_Library's_Restricted_Section",
      text: '#___: About those books in the "restricted section" that Lisa mentioned...\\n___: Have you ever wondered what sort of books might be kept in there?\\n___: Perhaps...\\n___: ...It contains books not suitable for children?\\n___: Huh? But "The Boar Princess" isn\'t in the restricted section!\\n___: What could be more unsuitable for children than that? ...Hmm, ___\'s curious...',
      tips: 'Complete "Troublesome Work"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 10101,
              questTitle: 'Lost Book',
              chapterId: 2004,
              chapterTitle: 'Troublesome Work',
            },
          ],
        },
      ],
    },
    '4': {
      title: 'About Effort and Reward',
      audio: 'VO_Aether_About_Effort_and_Reward',
      text: "#___: ___ finds that hard work hardly works here in Mondstadt.\\n___: Why do you say that?\\n___: Just look at Huffman from the Knights of Favonius. He does his best at his duties every day...\\n___: But the ever-relaxed Captain Kaeya is his boss.\\n___: Hmm, but isn't Jean, who works the hardest, the Acting Grand Master?\\n___: W—Well, how about this, then...\\n___: Venti's the god of Mondstadt, and he's the laziest of them all!",
      tips: 'Complete "For a Tomorrow Without Tears"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 384,
              questTitle: 'Reunion With the Dragon',
              chapterId: 1002,
              chapterTitle: 'For a Tomorrow Without Tears',
            },
          ],
        },
      ],
    },
    '5': {
      title: 'About the Goth Grand Hotel',
      audio: 'VO_Aether_About_the_Goth_Grand_Hotel',
      text: "#___: Sure would be nice to spend a night at the Goth Grand Hotel...\\n___: ___ thinks so too!\\n___: The rooms are sure to be big and clean.\\n___: Still, I've heard Mr. Goth say that they've had all kinds of strange problems ever since the Fatui moved in.\\n___: The Electro Cicins that their mages brought in attracted a lot of dust with static electricity, which ended up killing a lot of those Cicins.\\n___: Then, someone mixed up the Mist Grass Pollen and the pepper...\\n___: And the Agents ended up brawling amongst themselves, each insisting that the other owed them money for wine.\\n___: ...Hang in there, Goth Grand Hotel...",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '6': {
      title: 'About the Way the Wind Blows',
      audio: 'VO_Aether_About_the_Way_the_Wind_Blows',
      text: '#___: Everyone says that Mondstadt is the land of the wind.\\n___: But I wonder which direction the seasonal winds come from.\\n___: Why don\'t we ask Venti?\\n___: He\'ll probably just dodge the question with a "hehe" or something...\\n___: True. The Anemo Archon is just a Tone-Deaf Bard. What does he know about the wind?',
      tips: 'Complete "For a Tomorrow Without Tears"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 384,
              questTitle: 'Reunion With the Dragon',
              chapterId: 1002,
              chapterTitle: 'For a Tomorrow Without Tears',
            },
          ],
        },
      ],
    },
    '7': {
      title: 'About Alchemy',
      audio: 'VO_Aether_About_Alchemy',
      text: "#___: So here in Mondstadt, alchemy is practiced out on the streets?\\n___: Is that so strange?\\n___: In many of the worlds I've been to in the past, alchemy has always been a secretive art.\\n___: Watching alchemy being practiced as a part of daily life is like being in a world where people have three stomachs...\\n___: ___ thinks only having one stomach is weird!\\n___: Uh...\\n___: Are you serious?\\n___: What do you think?",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '8': {
      title: 'About Teyvat',
      audio: 'VO_Aether_About_Teyvat',
      text: "#___: Teyvat's day and night both seem particularly short.\\n___: The skies here are full of stars, but they aren't the same as the ones seen from my home.\\n___: I wonder if the fates of people from Teyvat are also related to their constellations.\\n___: Oh? Do you know how to read the stars, too? That's amazing! Not a lot of people outside Sumeru can do it.\\n___: ___'s curious! Come on, do a reading for me, quick!\\n___: Hmm...\\n___: The night sky pictured on ___'s cape... flows with the light of many stars, and also of the deep ocean...\\n___: The movement of these stars... tells me that... in, say, seven days from now...\\n___: ...In seven days what?\\n___: Something good, or something bad, might occur...\\n___: Heh, right... your theory sounds as rock solid as a Geo Slime... And about as brainy, too.",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '9': {
      title: 'About the God of Freedom',
      audio: 'VO_Aether_About_the_God_of_Freedom',
      text: "#___: On the way back to Mondstadt after rescuing Dvalin...\\n___: We finally got to see one of the Seven Archons, didn't we? It was interesting to see what kind of god he was.\\n___: Hmm... Haven't we known Venti for quite a while now?\\n___: As Venti, yes... But still, this was the first time that we got to see him as the Anemo Archon, Barbatos.\\n___: Normally, he hides his true divinity behind the facade of a bard.\\n___: \"What does freedom really mean, when demanded of you by a god?\"\\n___: That question that he asked Dvalin... I'm still contemplating that, you know?",
      tips: 'Complete "Song of the Dragon and Freedom"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 396,
              questTitle: 'Ending Note',
              chapterId: 1003,
              chapterTitle: 'Song of the Dragon and Freedom',
            },
          ],
        },
      ],
    },
    '10': {
      title: "About Mondstadt's Terrain",
      audio: "VO_Aether_About_Mondstadt's_Terrain",
      text: '#___: Mondstadt is full of wide plains and rolling hills.\\n___: People say that when Barbatos made this land, he used the storm to flatten the cliffs and valleys...\\n___: Still, it looks like he missed a few spots.\\n___: Like Starsnatch Cliff?\\n___: Exactly.\\n___: On the map, it almost looks as if it was meant to be the apex of a vertical structure, but ended up at the wrong orientation.\\n___: Wh—What\'s an "apex"?',
      tips: 'Complete "For a Tomorrow Without Tears"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 384,
              questTitle: 'Reunion With the Dragon',
              chapterId: 1002,
              chapterTitle: 'For a Tomorrow Without Tears',
            },
          ],
        },
      ],
    },
    '11': {
      title: 'About Couplets',
      audio: 'VO_Aether_About_Couplets',
      text: "___: ___'s heard that couplets are a traditional art form in Liyue. If you can write a line that works as a second half to one that someone else has written, you'll be well paid!\\n___: But linking the couplet is hard, so it's not easy money.\\n___: Not only does the rhythm need to match, but the meaning has to as well.\\n___: Hmm... Care to give an example?\\n___: Uh... \"Windrise's winds never churn.\"\\n___: ...Um, \"But the Sea of Clouds' clouds always return.\"\\n___: Huh... Not bad!\\n___: Let's not waste time here. We've got some money to make!",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '12': {
      title: 'About "Don\'t Play With Food, or With Money"',
      audio: "VO_Aether_About_Don't_Play_With_Food_or_With_Money",
      text: "___: There's a saying of Rex Lapis' that's commonly used here in Liyue. ___ thinks its rough meaning is... \"Don't play with your money.\"\\n___: It's because the first Mora were minted from his golden form and given to humans in trust.\\n___: Heh, Kaeya sure seems to enjoy playing with his money...\\n___: And that's why you shouldn't learn from him.\\n___: Well, as a child, I was taught not to play with my food.\\n___: Yup, yup. You've got to respect your food.\\n___: ...Wh—What are you looking at ___ for?",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '13': {
      title: "About Heart's Desire",
      audio: "VO_Aether_About_Heart's_Desire",
      text: '#___: Walk in seven clockwise circles, then walk in seven anticlockwise circles, then open your eyes...\\n___: Are you sleepwalking?\\n___: Nope! ___ is just trying to see if that antique shop from "Heart\'s Desire" actually exists!\\n___: Well, assuming that a shop in a story does exist, what would you like to buy, ___?\\n___: A Slime Creator!\\n___: Does such a thing even exist?',
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '14': {
      title: 'About the Guhua Clan',
      audio: 'VO_Aether_About_the_Guhua_Clan',
      text: "#___: Lately, some Guhua Clan disciples have been retelling an ancient story.\\n___: The Guhua Clan, huh? ___ bets it's a heroic story!\\n___: Several male disciples decided to partake of a contest of arms to see who would marry their female junior, and she approved.\\n___: Ooh, ___'s heard this one. In Liyue, they call this \"a joust for a spouse\"!\\n___: But the night before the contest, she stole the eldest disciple's favorite sword.\\n___: Ah, so she wanted him to lose... Poor guy...\\n___: I know, right? Forced to use a sword he wasn't used to, the eldest disciple suffered a crushing defeat.\\n___: Unable to accept this result, he fell to his knees and wept.\\n___: Oh no... He must have really loved her, right?\\n___: In the end, he was forced to... marry her in front of everyone.\\n___: Wait... so the loser had to marry her!?",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '15': {
      title: 'About Dihua Marsh',
      audio: 'VO_Aether_About_Dihua_Marsh',
      text: "#___: Did you know the reeds in Dihua Marsh are common materials used in making paper?\\n___: The solid reed cores are used to make pens, while the hollow part is used to make flutes. It's all very sophisticated.\\n___: Over the years, many heroes and swordsmen have also chosen Dihua Marsh as the location of their duels.\\n___: The more reeds, the more elegant the place. But in places where the reeds are the thickest, the water can be quite deep...\\n___: So there are a lot of unlucky duelists who fall in and drown while the duel is on...\\n___: And what's my takeaway from all of this supposed to be?\\n___: Don't get into a fight in Dihua Marsh!",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '16': {
      title: 'About the Gentleman Bird',
      audio: 'VO_Aether_About_the_Gentleman_Bird',
      text: '#___: ___\'s heard that in Liyue, people call the crane the "gentleman bird."\\n___: And do you know why that is?\\n___: Hmm... ___\'s not quite sure...\\n___: Well then, let me tell you the story of the lucky crane repaying its debts.\\n___: A long, long time ago, there was a kind-hearted scholar who saved a lucky crane that had fallen into a trap.\\n___: Later, on a cold winter\'s night, a beautiful maiden came to his door, asking to lodge with him.\\n___: The maiden shouldered a greatsword on her back, and taught all that she knew of swordsmanship to the scholar, supervising him as he studied day and night.\\n___: Whoa...\\n___: Once he had finished his training, he went out into the wilds with the maiden to do good and fight for justice.\\n___: Ten years later, the lucky crane took the form of a gentleman, and finally came to return the favor, but discovered the couple had already lived out a fortuitous life...\\n___: And that is the story known as "The Gentleman\'s 10-Year Debt."\\n___: Ahh...',
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '17': {
      title: 'About Jueyun Karst',
      audio: 'VO_Aether_About_Jueyun_Karst',
      text: "#___: Rumor has it that Jueyun Karst is the abode of the adepti.\\n___: Wow — the abode of the adepti!\\n___: Perhaps we'll meet the adepti on those cloud-piercing mountain peaks.\\n___: Wow — meeting adepti!\\n___: But I wonder, how would one normally communicate with the adepti?\\n___: Wow — communicating with adepti!\\n___: Hmm. My emergency rations seem to be going bad. Best to consume them quickly...\\n___: Ahem. Well... ___ thinks that shouting from the mountaintop should work.\\n___: That seems more like a way of getting the attention of a hilichurl, rather than an adeptus.",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '18': {
      title: 'About the God of Contracts',
      audio: 'VO_Aether_About_the_God_of_Contracts',
      text: "#___: To think that the Geo Archon had signed a contract with the Cryo Archon.\\n___: I wonder what the contents of their agreement were...\\n___: ___ doesn't care who you are, making a deal with the Tsaritsa is super dangerous!\\n___: Be that as it may...\\n___: Since Morax is the god who understands the basis of contracts the best...\\n___: He's definitely given this some thought.\\n___: Well that's true. Morax himself called it the \"contract to end all contracts\"...\\n___: I trust that we will witness the truth, and its denouement, play out...",
      tips: 'Complete "A New Star Approaches"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 1025,
              questTitle: 'The Fond Farewell',
              chapterId: 1103,
              chapterTitle: 'A New Star Approaches',
            },
          ],
        },
      ],
    },
    '19': {
      title: 'About Divine Predictions in Liyue',
      audio: 'VO_Aether_About_Divine_Predictions_in_Liyue',
      text: "#___: Come to think of it, while Rex Lapis enjoys visiting his people in private, he only descends officially once every year.\\n___: None of the other gods do this. Hmm... Does Rex Lapis have any deeper intentions?\\n___: I have my guesses...\\n___: You see, those annual divine predictions have already captured the hearts of the people of Liyue too much.\\n___: Round and around they analyze and scrutinize every single word, finding limitless \"hidden meanings\" within them...\\n___: What do you think would happen to Liyue if such predictions were available every day?\\n___: Ah!\\n___: ___ gets it now. ___ would be offering Rex Lapis' favorite snacks to him every day!\\n___: If you could just get Mora straight from Morax's hands, who would ever need to do a day of honest work?\\n___: Heh... you made... some logical leaps, but that's basically how it is.",
      tips: 'Complete "Of the Land Amidst Monoliths"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 1018,
              questTitle: 'Dust to Dust',
              chapterId: 1101,
              chapterTitle: 'Of the Land Amidst Monoliths',
            },
          ],
        },
      ],
    },
    '20': {
      title: "About Benny's Adventure Team",
      audio: "VO_Aether_About_Benny's_Adventure_Team",
      text: "#___: If you want to adventure together with Benny's Adventure Team, you have to come prepared.\\n___: Domains are very dangerous, so you should always take care to double- and triple-check your supplies in advance.\\n___: ___'s heard that the Adventurers' Guild has compiled a list of 463 different ways of dying in these domains...\\n___: If Bennett got you killed by accident, ___ and Bennett would never forgive ourselves!\\n___: ...Why am I the only one dying here?\\n___: Well, that's because according to the numbers, ___ can avoid 322 causes of death just by floating!\\n___: I suddenly don't feel like exploring these domains...",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '21': {
      title: 'About Bennett',
      audio: 'VO_Aether_About_Bennett',
      text: "#___: I've heard that Albert, being the leader of Barbara's fan club...\\n___: ...Sometimes gets bumps and bruises on purpose so he can go to the Cathedral to see her.\\n___: ___ feels the Knights of Favonius should keep a closer watch on weirdos like that.\\n___: But it seems that a month later, Albert discovered that Bennett was managing to see Barbara far more than he was.\\n___: Well... Bennett does have the natural advantage when it comes to getting injured, after all.\\n___: What is this, a \"let's bother Barbara\" contest?",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '22': {
      title: 'About the "Idol"',
      audio: 'VO_Aether_About_the_Idol',
      text: "#___: Barbara's really popular, isn't she?\\n___: Well, she is the idol of the people of Mondstadt.\\n___: Come to think of it... ___ doesn't really know what an \"idol\" is.\\n___: It's an occupation in which one's work is to be cute, be well-loved, and earn a boat-load of Mora.\\n___: Isn't that the same thing as being a mascot?\\n___: That's... heh, one way to put it.",
      tips: 'Complete "Song of the Dragon and Freedom"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 396,
              questTitle: 'Ending Note',
              chapterId: 1003,
              chapterTitle: 'Song of the Dragon and Freedom',
            },
          ],
        },
      ],
    },
    '23': {
      title: 'About Being Sisters',
      audio: 'VO_Aether_About_Being_Sisters',
      text: "#___: Lisa and Amber feel a bit like sisters.\\n___: Huh? Why's that?\\n___: Amber often runs errands for Lisa. Older siblings asking their younger siblings to do things for them so that they can slack off is a rather common practice...\\n___: But my sister and I are the same age, so we had to decide these things via rock-paper-scissors.\\n___: Whoa. So, doesn't that make you my younger brother?\\n___: What do you mean?\\n___: Well, since ___ floats, you're the only one who can \"run\" any errands!\\n___: ...Seriously?",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '24': {
      title: "About Kaeya's Eye Patch",
      audio: "VO_Aether_About_Kaeya's_Eye_Patch",
      text: "#___: ___, have you ever seen what Kaeya looks like under that eye patch?\\n___: Nope.\\n___: So, it would seem he never takes it off...\\n___: Actually, ___ already knows why!\\n___: Oh?\\n___: He must be hiding some big secret!\\n___: Really, a secret?\\n___: See, Kaeya heads out for assignments more than anyone else.\\n___: So the skin under that eye patch has to be way lighter than the rest of him.\\n___: So... if he ever takes that eye patch off...\\n___: He'll definitely become the butt of everyone's jokes. Maybe he'll even get a weird nickname!\\n___: Like, say, \"Pasty Eye\"!\\n___: Guess he didn't need to take it off to get a weird nickname...",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '25': {
      title: 'About Kaeya and Diluc',
      audio: 'VO_Aether_About_Kaeya_and_Diluc',
      text: "#___: Strange...\\n___: What's wrong?\\n___: Diluc and Kaeya are really alike, so why don't they get along?\\n___: How are they alike, again?\\n___: Well, Kaeya's the kind of guy who acts shady in the light of day...\\n___: While Diluc is a shining beacon of justice in the dark of night!\\n___: Don't you think that's kinda the same thing...?\\n___: Uhh... I still don't see it.",
      tips: 'Complete "The Darknight Hero\'s Alibi"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 466,
              questTitle: "Darknight Hero's Alibi",
              chapterId: 2002,
              chapterTitle: "Darknight Hero's Alibi",
            },
          ],
        },
      ],
    },
    '26': {
      title: 'About Measuring Fighting Strength',
      audio: 'VO_Aether_About_Measuring_Fighting_Strength',
      text: "#___: If one hilichurl could beat, say, three wild boars...\\n___: Then how many hilichurls would it take to reach the fighting prowess of Master Jean and Master Diluc?\\n___: Not sure... but if you heard the way everyone talks in Mondstadt, you'd know that Master Jean is the strongest.\\n___: Uhh... I'd say that if Diluc strikes first, Master Jean wouldn't be able to counter.\\n___: Oh, she'd find a way.\\n___: There's no way.\\n___: Master Jean's Elemental Burst is really strong, you know~\\n___: Yes, but that \"field\" would also make Diluc stronger.\\n___: ___ doesn't think Master Jean would even need her Vision to take on Master Diluc, because—\\n___: Diluc would only need a beginner's greatsword to—\\n___: Argh...\\n___: Ugh...\\n___: *sigh* ...This is so dumb.\\n___: They both fight for Mondstadt, so they wouldn't come to blows.\\n___: That's why ___ likes your idea of measuring their fighting strength in number of hilichurls.\\n___: ...Or in ___'s case, in fifths of a wild boar.",
      tips: 'Complete "True Treasure"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 10202,
              questTitle: 'A Very Volatile Treasure',
              chapterId: 2009,
              chapterTitle: 'True Treasure',
            },
          ],
        },
      ],
    },
    '27': {
      title: 'About Razor',
      audio: 'VO_Aether_About_Razor',
      text: "#___: ___, you know what a brush is, right?\\n___: Of course! Kinda like pens but with animal hair at one end for calligraphy, right?\\n___: That's correct! They say that finely-made brushes sell for high prices among Liyue's merchants!\\n___: So, would you like to make some too?\\n___: Uh-huh! But wild wolves are too fierce, so we should use Razor's fur to make brushes instead!\\n___: Razor's fur is all downy and soft. It'll definitely make great wolf-fur brushes! We could make lots of Mora like this!\\n___: Brushes made like that would conduct electricity. I'm not sure we could use them.\\n___: Besides, Razor isn't a wolf, nor are wolf-fur brushes made from actual wolves' fur...\\n___: Huh? Why are they called wolf-fur brushes, then?\\n___: Well, does Cider Lake look like it's full of cider to you?\\n___: Hmm. You have a point.",
      tips: 'Complete "The Meaning of Lupical"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 454,
              questTitle: "Fate's Chosen Lupical",
              chapterId: 2005,
              chapterTitle: 'The Meaning of Lupical',
            },
          ],
        },
      ],
    },
    '28': {
      title: 'About Klee',
      audio: 'VO_Aether_About_Klee',
      text: "#___: Klee's a really interesting kid.\\n___: All the Knights seem to like her a lot, too. You could even say they spoil her.\\n___: I wonder who makes the better mascot: ___ or Klee?\\n___: Oh wait, I forgot. ___'s not a mascot, ___'s emergency—\\n___: Hey! ___ knows exactly what you're going to say. That joke stopped being funny a long time ago.",
      tips: 'Complete "True Treasure"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 10202,
              questTitle: 'A Very Volatile Treasure',
              chapterId: 2009,
              chapterTitle: 'True Treasure',
            },
          ],
        },
      ],
    },
    '29': {
      title: 'About the "Wondermaid"',
      audio: 'VO_Aether_About_the_Wondermaid',
      text: "#___: It's time for ___'s Little Life Tips!\\n___: \"Little Life Tips\"?\\n___: In Mondstadt, if there's something you can't fix, or there's something you can't get clean no matter what you do...\\n___: If you ever run into something you can't handle yourself, you just need to shout this name into the skies:\\n___: \"Noeeeelle!\"\\n___: And everything that's troubling you will be swept away in an instant.\\n___: So this is one of the tricks to living in Mondstadt... Pretty impressive...",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '30': {
      title: 'About Fischl',
      audio: 'VO_Aether_About_Fischl',
      text: "#___: Fischl makes a very unique impression, doesn't she?\\n___: How so?\\n___: Well, she travels together with a talking raven, for starters.\\n___: Well, I'm traveling with you. It's not all that different.\\n___: Still, Oz can also translate for Fischl. You, on the other hand...\\n___: What!? ___'s way better than some bird!\\n___: Haha, how so?\\n___: Well, um... uh... at least ___ doesn't need wings to fly!",
      tips: 'Complete "For a Tomorrow Without Tears"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 384,
              questTitle: 'Reunion With the Dragon',
              chapterId: 1002,
              chapterTitle: 'For a Tomorrow Without Tears',
            },
          ],
        },
      ],
    },
    '31': {
      title: 'About Pets',
      audio: 'VO_Aether_About_Pets',
      text: '#___: Speaking of Fischl, she also claims to be a "visitor from another world"...\\n___: We\'re similar in that way. We even bring a pet along with us.\\n___: Pet? Now, wait just a minute, here...\\n___: But her raven, Oz... He looks cool, and is polite to boot.\\n___: More importantly, he can both scout and fight — very useful indeed.\\n___: Maybe I should make arrangements with Fischl to trade companions once in a while for, say, a week or two at a time. It should be quite interesting.\\n___: Hey! Doesn\'t ___ get a say in this!?',
      tips: 'Complete "For a Tomorrow Without Tears"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 384,
              questTitle: 'Reunion With the Dragon',
              chapterId: 1002,
              chapterTitle: 'For a Tomorrow Without Tears',
            },
          ],
        },
      ],
    },
    '32': {
      title: 'About Beidou',
      audio: 'VO_Aether_About_Beidou',
      text: "#___: How do you become as popular and cool as Captain Beidou?\\n___: With enough experience...?\\n___: ___'s already seen lots of things from adventuring together with you!\\n___: One also needs to experience trials and setbacks...\\n___: ___ almost drowned that one time...\\n___: ...Maintain an inspirational disposition...\\n___: Uh-huh! ___'s always rooted for you!\\n___: One must also have a... mature outlook towards problems.\\n___: Hey! Are you just trying to say that ___ can't make it?",
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '33': {
      title: 'About Ningguang',
      audio: 'VO_Aether_About_Ningguang',
      text: "#___: How does a person become as rich... no, as super rich as Lady Ningguang?\\n___: Is that the only impression she gives you? Riches?\\n___: Well, there's the huge Jade Chamber, too! But isn't that also made of Mora?\\n___: Well, you need an excellent mind...\\n___: Well... ___'s really good at giving people nicknames!\\n___: You need to be very familiar with the workings of the markets...\\n___: A serving of Fisherman's Toast goes for 1,025 Mora, and no discounts — even on rainy days.\\n___: You also need to be willing to work really hard...\\n___: Okay then... so, how do you make friends with a really rich person?\\n___: Wait, you're giving up already!?",
      tips: 'Complete "Farewell, Archaic Lord"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 1016,
              questTitle: "Zhongli's Treat",
              chapterId: 1102,
              chapterTitle: 'Farewell, Archaic Lord',
            },
          ],
        },
      ],
    },
    '34': {
      title: 'About Qiqi Being a Zombie',
      audio: 'VO_Aether_About_Qiqi_Being_a_Zombie',
      text: "#___: Umm... Do you think that Qiqi... needs to drink blood?\\n___: Heh... That's not a zombie, ___. That's a vampire.\\n___: Then, will she transform during a full moon?\\n___: Werewolves, ___. Not zombies.\\n___: Huh... As expected of a traveler, you really know a lot!\\n___: So, what special things can zombies do?\\n___: Exercises?\\n___: Ah, that makes a lot of sense! So, the ones that do exercises are zombies — got it!",
      tips: 'Complete "Farewell, Archaic Lord"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 1016,
              questTitle: "Zhongli's Treat",
              chapterId: 1102,
              chapterTitle: 'Farewell, Archaic Lord',
            },
          ],
        },
      ],
    },
    '35': {
      title: 'About Flying',
      audio: 'VO_Aether_About_Flying',
      text: "#___: Come on, ___, ___'ll teach you how to fly!\\n___: Three, two, one!\\n___: Ah, ___'s gone.\\n___: Well, whatever. I'm tired. Let's just sit here for a bit...\\n___: I'm flying with you in my heart... Mm...",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '36': {
      title: 'About Slimes',
      audio: 'VO_Aether_About_Slimes',
      text: "#___: What sort of slime do you like the most, ___?\\n___: Pyro Slimes, I suppose. You can feel their warmth just by getting close. That's something you'll need in the winter.\\n___: That's very practical, as expected of a traveler.\\n___: What about you, ___?\\n___: ___ likes them all! They're all very tasty!\\n___: Tasty? Hmm...\\n___: Turning slimes into bubbly, lovely, jubbly meals is the ___ Special!\\n___: Well then...\\n___: I suppose that's one more thing I can eat before you become emergency rations, huh, ___?\\n___: Uhh... ___ would rather not be on that list at all!",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '37': {
      title: 'About Hilichurls',
      audio: 'VO_Aether_About_Hilichurls',
      text: "#___: Do you think that we're too harsh on the hilichurls?\\n___: Well... sometimes we really do seem like children who just can't resist kicking the hornet's nest...\\n___: I think we're doing more than just kicking it...",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '38': {
      title: 'About the Sleepers',
      audio: 'VO_Aether_About_the_Sleepers',
      text: '#___:  The "Sleeper tribe"... The hilichurls sure have interesting tribe names.\\n___: The Sleeper tribe will take any opportunity they can to take a nap.\\n___: ___\'s heard that their animal-skin beds are really soft. Would you like to try them?\\n___: Not going to try it yourself, ___?\\n___: ___ can sleep while floating! The air is the softest bed. Pretty sweet, huh?\\n___: ...Just a little.',
      tips: 'Unlock the teleport waypoint at Dadaupa Gorge, Mondstadt',
      tasks: null,
    },
    '39': {
      title: 'About the Meaties',
      audio: 'VO_Aether_About_the_Meaties',
      text: '#___: The "Meaty tribe"...? Hahaha, these hilichurls pick the funniest names.\\n___: The hilichurls of the Meaty tribe make regular sacrifices. The altars they build are really huge.\\n___: What do they pray for?\\n___: "For meat to eat every day"! It\'s an awesome wish, isn\'t it?\\n___: ...I suppose I should have expected that answer.',
      tips: 'Unlock the teleport waypoint at Dadaupa Gorge, Mondstadt',
      tasks: null,
    },
    '40': {
      title: 'About the Eclipse Tribe',
      audio: 'VO_Aether_About_the_Eclipse_Tribe',
      text: "#___: The \"Eclipse tribe\"... So the hilichurls have normal-sounding tribe names like these, too.\\n___: The hilichurls of the Eclipse tribe are really mysterious.\\n___: All the hilichurls of that tribe can draw an eclipse symbol.\\n___: But rumor has it that only the Dada Samachurl of the Eclipse tribe knows why the eclipse symbol is so revered within their tribe.\\n___: An eclipse symbol...\\n___: Hmm? Did you say something, ___?\\n___: Ah... I was... asking you what sort of soup you'd like to have tonight.\\n___: Can't stop thinking about food, huh? Seems like you'd be more at home in the Meaty tribe than the Eclipse tribe. But anyway, ___ wants boar soup. Thanks!",
      tips: 'Unlock the teleport waypoint at Dadaupa Gorge, Mondstadt',
      tasks: null,
    },
    '41': {
      title: 'About Riches',
      audio: 'VO_Aether_About_Riches',
      text: "#___: ___ doesn't feel so good...\\n___: What's the matter?\\n___: ___ hasn't opened a treasure chest in so long. If this keeps up... *whimpers*\\n___: If this keeps up, you'll one day get caught in a hunting trap with a single Mora as bait...\\n___: Hey! ___ floats, so that'll never work.",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '42': {
      title: 'About Weight Gain',
      audio: 'VO_Aether_About_Weight_Gain',
      text: "#___: Wow, we've really had a lot of good food recently, haven't we?\\n___: You know what they say: \"Have food, will travel\"!\\n___: Hmm... Won't you be unable to fly if you get fat?\\n___: Nope! ___ never gets fat!\\n___: Huh...\\n___: So ___ demands more food!\\n___: Ever eating but never growing... Don't you fail as emergency rations, then?\\n___: Yeah, yeah... Well it sure doesn't look like you have any other candidates... So you'll have to make do with ___!",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '43': {
      title: 'About Cat People and Dog People',
      audio: 'VO_Aether_About_Cat_People_and_Dog_People',
      text: "#___: Which do you like more: cats or dogs?\\n___: I prefer ___.\\n___: Aww, that's cheating~!\\n___: Wait, no! ___'s not a pet!",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '44': {
      title: 'About the Sound of the Ocean',
      audio: 'VO_Aether_About_the_Sound_of_the_Ocean',
      text: "#___: People say that if you put a Starconch close to your ear, you can hear the whispers of the ocean!\\n___: Do you want to give it a go, ___?\\n___: No need, ___ just heard it!\\n___: Oh? And what did the ocean say?\\n___: The ocean said... that it's time to eat, so let's go! ___ wants some Fisherman's Toast!",
      tips: 'Unlock the teleport waypoint at Yaoguang Shoal, Liyue',
      tasks: null,
    },
    '45': {
      title: 'About Rock, Paper, Scissors',
      audio: 'VO_Aether_About_Rock_Paper_Scissors',
      text: "#___: We should get something tasty to eat! Uh, but ___ doesn't wanna have to go get it...\\n___: Shall we decide with a game of rock-paper-scissors, then?\\n___: Ooh, okay!\\n___: Alright then. Rock, paper—\\n___: —Super ___ Tornado!\\n___: ...What!?",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '46': {
      title: 'About Relaxing',
      audio: 'VO_Aether_About_Relaxing',
      text: "#___: Phew! ___'s been working so hard recently. Any ideas on how to relax?\\n___: ...Sleeping?\\n___: Sleeping's boring.\\n___: ...Reading?\\n___: ___'ll get dizzy.\\n___: ...Having a chat with some friends?\\n___: ...Ugh.\\n___: But those're all things that require thinking.\\n___: And not thinking is more relaxing.\\n___: And thus the \"___ Paradox,\" famed in the histories of philosophy in Teyvat, was put forth...",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '47': {
      title: 'About Dietary Differences',
      audio: 'VO_Aether_About_Dietary_Differences',
      text: "#___: Liyue's cuisine is very different from that of Mondstadt.\\n___: For example, you can hardly find spicy fried dishes anywhere in Mondstadt.\\n___: That's why they say \"climate creates cuisine,\" ya know?\\n___: But wait... Why do all of Teyvat's slimes taste the same, then?\\n___: That's because you only know one way of cooking them...",
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '48': {
      title: 'About Saving Money',
      audio: 'VO_Aether_About_Saving_Money',
      text: "#___: Wow, a weasel thief's backpack can really hide a lot of Mora!\\n___: Well, it's because weasels, by nature, enjoy collecting shiny objects.\\n___: ___'s heard that the origin of the weasel thieves has something to do with the Treasure Hoarders...\\n___: Also, aren't crows the type to collect shinies as well?\\n___: ___ wonders if Oz has a secret stash of Mora that he collects behind Fischl's back.\\n___: Well, now that you mention it, ___...\\n___: I wonder, do you—\\n___: —Uhh... Nope. Nothing here! You won't find any Mora in ___'s shoes, no way!",
      tips: 'Complete "For a Tomorrow Without Tears"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 384,
              questTitle: 'Reunion With the Dragon',
              chapterId: 1002,
              chapterTitle: 'For a Tomorrow Without Tears',
            },
          ],
        },
      ],
    },
    '49': {
      title: 'About Adventure Stories',
      audio: 'VO_Aether_About_Adventure_Stories',
      text: "#___: ___, have you ever read \"Vera's Melancholy\" before?\\n___: Well, it sure sounds familiar!\\n___: That book's pretty popular, and I've heard that the author made a tidy sum off of it...\\n___: *sigh* ___ would love to make lots and lots of Mora...\\n___: Hmm... It's decided, then! ___ will write an adventure story as well!\\n___: A tale of adventure, by ___?\\n___: Correct! It'll be a story in which the brave traveler defeats the dragon, saves the world...\\n___: And then sits down with his reliable companion for ten servings of Sticky Honey Roast!\\n___: Ten!?\\n___: Uh-huh! A happy ending attracts the readers, after all!\\n___: It's decided, then! We'll call it \"___'s Happiness!\"\\n___: Wait, what?",
      tips: 'Complete "Song of the Dragon and Freedom"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 396,
              questTitle: 'Ending Note',
              chapterId: 1003,
              chapterTitle: 'Song of the Dragon and Freedom',
            },
          ],
        },
      ],
    },
    '50': {
      title: 'About Nightmares',
      audio: 'VO_Aether_About_Nightmares',
      text: "#___: Have you ever had one of those super scary nightmares, ___?\\n___: Um, I've dreamed of falling through endless darkness...\\n___: Without a wind glider.\\n___: Eek...\\n___: I've also dreamed of my sister walking away from me, while I'm unable to catch up to her no matter how fast I run.\\n___: ...She tells me that I've \"come too late.\"\\n___: Oh...\\n___: Yours are quite different from the ones that ___'s had.\\n___: ___'s scariest dream was being eaten by a super giant slime.",
      tips: 'Complete "For a Tomorrow Without Tears"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 384,
              questTitle: 'Reunion With the Dragon',
              chapterId: 1002,
              chapterTitle: 'For a Tomorrow Without Tears',
            },
          ],
        },
      ],
    },
    '51': {
      title: 'About Seelie',
      audio: 'VO_Aether_About_Seelie',
      text: "#___: Where do those treasure-chasing Seelie come from, I wonder?\\n___: Maybe they grow out of the ground — or maybe they fall from trees?\\n___: Well, ___ doesn't know where they come from, but where there are Seelie, treasure's not far away!\\n___: Still... why do I feel a certain sadness every time they touch those treasures?\\n___: Hmm?\\n___: No, it's probably just my imagination.\\n___: Well... if you don't want the treasure, ___ can hang onto it for you, free of charge!",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '52': {
      title: 'About Someone Unforgettable',
      audio: 'VO_Aether_About_Someone_Unforgettable',
      text: "#___: Has anyone left a big impression on you during our recent travels?\\n___: For ___, that's Sara.\\n___: Timmie.\\n___: ...Huh? Why him?\\n___: His face comes to mind every time I've eaten a Sweet Madame recently... Really makes it hard to chow down.",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '53': {
      title: 'About Language',
      audio: 'VO_Aether_About_Language',
      text: "#___: You learn new things so quickly.\\n___: You've already got such a good grasp of Teyvat's language.\\n___: You're a good teacher, ___.\\n___: Aww, hehehe...\\n___: Who knows, maybe the quality of your nasty nicknames will improve someday.",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '54': {
      title: "About ___'s Species",
      audio: "VO_Aether_About_Paimon's_Species",
      text: '___: What monster made the deepest impression on you?\\n___: Monsters, huh? Probably... Ruin Guards.\\n___: Does a Ruin Guard really count as a monster? It\'s more like a machine...\\n___: ___ thinks that you can call anything that causes us trouble and needs to be defeated a "monster."\\n___: Just like how we call anything that can be hunted "prey."\\n___: Is that so... Well then, I think I\'m finally able to classify you now, ___.\\n___: Eh? What do you mean?\\n___: You can be hooked and reeled in... therefore, you\'re a fish!\\n___: Hmph!',
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '55': {
      title: 'About Storing Weapons',
      audio: 'VO_Aether_About_Storing_Weapons',
      text: "#___: Hey, do that again! You know, that thing!\\n___: Which one?\\n___: The one where you make your weapon disappear with a swish, and then, fwoosh — you make it appear behind your back again!\\n___: Oh, that? Haven't you seen that a ton already?\\n___: But ___ hasn't figured out how you do it yet. Could you explain it?\\n___: Well, can you explain how you suddenly appear in front of me, and then disappear just as suddenly?\\n___: Uh... well... ___ seems to have always been able to do this. But ___ doesn't know how...\\n___: Precisely. I believe that the art of putting my weapon away follows the same principle.\\n___: Maybe it's this similarity that makes us such good friends?",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '56': {
      title: 'About Chests',
      audio: 'VO_Aether_About_Chests',
      text: "#___: ___, what do you think of treasure chests?\\n___: I believe that they were left behind by great travelers who once passed this way.\\n___: Every time I open one and look at its contents, I can feel a certain kinship with those who came before...\\n___: And that's how you get adventure experience!",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '57': {
      title: 'About Eyes',
      audio: 'VO_Aether_About_Eyes',
      text: "#___: Look into ___'s eyes!\\n___: Something the matter?\\n___: Kaeya said that people's eyes will betray them.\\n___: He can tell if someone is telling the truth or not just by looking into their eyes.\\n___: Huh...\\n___: ___ loves Fisherman's Toast!\\n___: That should be the truth. Haha, well, that's also because you love everything that can be eaten.\\n___: Hehe.\\n___: Speaking of looking into people's eyes... I remember one gaze that left a particularly deep impression on me.\\n___: Whose gaze was that?\\n___: A Ruin Guard's. Really made me want to poke its eye out...",
      tips: 'Complete "Secret Pirate Treasure"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 463,
              questTitle: "Kaeya's Gain",
              chapterId: 2001,
              chapterTitle: 'Secret Pirate Treasure',
            },
          ],
        },
      ],
    },
    '58': {
      title: 'About Imitating Others',
      audio: 'VO_Aether_About_Imitating_Others',
      text: "#___: Ugh, ___'s so bored... So tired...\\n___: Well, since we're bored either way, wanna imitate the other Knights for fun?\\n___: Huh? Isn't that a bit disrespectful?\\n___: Haha, I see you already have the knightly virtue of modesty and politeness. Very impressive.\\n___: Hey! ___ sees what you're doing. Cut it out!",
      tips: 'Complete "Secret Pirate Treasure"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 463,
              questTitle: "Kaeya's Gain",
              chapterId: 2001,
              chapterTitle: 'Secret Pirate Treasure',
            },
          ],
        },
      ],
    },
    '59': {
      title: 'About the Luck of the Draw',
      audio: 'VO_Aether_About_the_Luck_of_the_Draw',
      text: "#___: Urrrrgh...\\n___: Hmm? Are there pigeons around?\\n___: No, ___'s just hungry.\\n___: What ___ needs right now is a traveler who can whip up some delicious Sticky Honey Roast.\\n___: So, who's going to be the lucky traveler? Hmm?",
      tips: 'Complete "The Outlander Who Caught the Wind"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 309,
              questTitle: null,
              chapterId: 1001,
              chapterTitle: 'The Outlander Who Caught the Wind',
            },
          ],
        },
      ],
    },
    '109': {
      title: 'About the Vision Hunt Decree',
      audio: 'VO_Aether_About_the_Vision_Hunt_Decree',
      text: "#___: It's hard to talk about the recent events in Inazuma and not mention the Vision Hunt Decree.\\n___: But you don't have a Vision, so you don't have to worry about losing one.\\n___: On the flip side, if you are caught by the Tenryou Commission, ___, you also can't surrender your Vision in exchange for your life...\\n___: I can tell them that you are my Vision.\\n___: Another reason to have ___ around... Wait, WHAT!?\\n___: Don't worry, I wouldn't let them take you, ___.\\n___: That's more like it.\\n___: We'd just go to jail and suffer punishment together...\\n___: Uh... W—Well, if that's how it would go down, then maybe you should hand me over to them...\\n___: ...Wait a minute! How about we just don't get caught in the first place?",
      tips: 'Complete "Stillness, the Sublimation of Shadow"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 2009,
              questTitle: 'In the Name of the Resistance',
              chapterId: 1203,
              chapterTitle: 'Stillness, the Sublimation of Shadow',
            },
          ],
        },
      ],
    },
    '110': {
      title: 'About the Resistance',
      audio: 'VO_Aether_About_the_Resistance',
      text: "#___: Only the ones who have the will to fight back are allowed into the Resistance!\\n___: Huh. In that case, ___ also qualifies as a member.\\n___: And what exactly are you trying to resist, ___?\\n___: ___ has been resisting against the fate of being squished all this time!\\n___: Then you probably won't get in.\\n___: Why? Is it because ___ isn't fighting for the same cause as the Resistance?\\n___: It's because you're fighting for a lost cause, I'm afraid...\\n___: *sob* Y—You meanie!",
      tips: 'Complete "Stillness, the Sublimation of Shadow"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 2009,
              questTitle: 'In the Name of the Resistance',
              chapterId: 1203,
              chapterTitle: 'Stillness, the Sublimation of Shadow',
            },
          ],
        },
      ],
    },
    '111': {
      title: 'About Kamuijima Cannons',
      audio: 'VO_Aether_About_Kamuijima_Cannons',
      text: "#___: Kamuileon... Cannon? Kamuijuicy... Cannon? Kamuijimmy... Cannon? Ugh... What a mouthful.\\n___: What are you reading, ___?\\n___: Look, it's the super weapon the Shogunate army has constructed nearby to protect Tatarasuna.\\n___:  Kamuijima! Cannon!\\n___: It looks really powerful... And yet, we didn't see it do anything while we were in Tatarasuna.\\n___: It seems like the Resistance knew how strong it was, so before formally waging war against the Shogunate, they had covertly occupied this place.\\n___: But this Kamui... Kamuijima Cannon needs either special ammunition or Electro to work, so it's no use to the Resistance.\\n___: The Shogunate army put so much time and effort into creating this weapon... ___ really wants to see the extent of its power.\\n___: If all you need is an Electro user, perhaps I can help.\\n___: That's right! Now we just need something that would serve as our cannon ball...\\n___: Huh? ...Why are you giving me that look? Hey—",
      tips: 'Complete "Stillness, the Sublimation of Shadow"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 2009,
              questTitle: 'In the Name of the Resistance',
              chapterId: 1203,
              chapterTitle: 'Stillness, the Sublimation of Shadow',
            },
          ],
        },
      ],
    },
    '112': {
      title: 'About Taroumaru',
      audio: 'VO_Aether_About_Taroumaru',
      text: "#___: You know what? When we first arrived at the Komore Teahouse, ___ really thought that Taroumaru would be able to speak...\\n___: You sound a bit disappointed.\\n___: Of course! If Taroumaru could speak, ___ feels that he'd say something really interesting!\\n___: For example?\\n___: Hmm... \"Thoma, stop hiding around here, you're in my way! *woof*\"\\n___: Huh, that makes sense.\\n___: Or... \"Kozue, you're bound to me for the rest of your life, unless our contract is terminated! *woof* *woof*\"\\n___: You didn't believe Kozue when she said she'd signed a secret contract forcing her to work part-time at the Teahouse, did you?\\n___: Oh! ___ just thought of another one. This one's quite good—\\n___: \"Just look at this visitor! ___, is it? Look at how cute and clever she is. Today, all her meals are on the house! *woof*\"\\n___: There's no way Taroumaru would say something like that.\\n___: Hee-hee...",
      tips: 'Complete "Stillness, the Sublimation of Shadow"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 2009,
              questTitle: 'In the Name of the Resistance',
              chapterId: 1203,
              chapterTitle: 'Stillness, the Sublimation of Shadow',
            },
          ],
        },
      ],
    },
    '113': {
      title: 'About Gorou',
      audio: 'VO_Aether_About_Gorou',
      text: "#___: Hmm...\\n___: What are you mulling over, ___?\\n___: ___, do you remember Gorou's fluffy ears?\\n___: ___ really wants something like that... Or maybe horns similar to the ones Ganyu has. Ganyu's horns are pretty cute as well.\\n___: ___, do you have any ideas?\\n___: Let me see, hmm... Oh, I found something!\\n___: Really? Aw, ___, ___ always knew you were reliable!\\n___: Ta-da! I present to you the Tusk of Monoceros Caeli!\\n___: ___ doesn't need that!\\n___: *sigh* If ___ can't have Gorou's fluffy ears, then maybe at least something like his fluffy tail...\\n___: Bubadada! Here you go — Tail of Boreas!\\n___: ...Not that! Also, combining those two is definitely not the look ___ is going for!",
      tips: 'Complete "Stillness, the Sublimation of Shadow"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 2009,
              questTitle: 'In the Name of the Resistance',
              chapterId: 1203,
              chapterTitle: 'Stillness, the Sublimation of Shadow',
            },
          ],
        },
      ],
    },
    '114': {
      title: 'About Publishing Novels',
      audio: 'VO_Aether_About_Publishing_Novels',
      text: "#___: It's amazing that Inazuma has places like the Yae Publishing House which specializes in publishing novels!\\n___: They even host competitions! Wow!\\n___: If that's the case, then perhaps you can submit a draft of the book you've been working on, \"___'s Happiness.\"\\n___: Well, about that... ___ has misplaced the drafts on our way to Inazuma...\\n___: ...Really?\\n___: Fine! ___ hasn't started writing it yet...\\n___: It's not ___'s fault! ___'s been meaning to do it but three days ago, ___'s pen broke. The day before yesterday, ___ had hand cramps. Yesterday — a sprained foot. Today... ___... Hmmm... ___'s hungry!\\n___: Hehe, it sounds like you'll sooner write \"A Thousand Excuses with ___\" than \"___'s Happiness.\"",
      tips: 'Complete "Stillness, the Sublimation of Shadow"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 2009,
              questTitle: 'In the Name of the Resistance',
              chapterId: 1203,
              chapterTitle: 'Stillness, the Sublimation of Shadow',
            },
          ],
        },
      ],
    },
    '115': {
      title: 'About Kaedehara Kazuha',
      audio: 'VO_Aether_About_Kaedehara_Kazuha',
      text: "#___: Kazuha is a free spirit, wouldn't you say?\\n___: Yeah, he seems to be a bit of a loner too.\\n___: Being able to explore the world at his leisure while savoring the beauty of everything around him. That doesn't sound too shabby...\\n___: ___, you aren't thinking of sneaking off to go on a solo adventure, right?\\n___: Aw, I would never leave you, ___.\\n___: ___'s really happy to hear that. Here... Hee—hee, have this...\\n___: Monthly food expenses... 300,000 Mora!?\\n___: Hey! Wait! ___, Where are you going?\\n___: I suddenly feel like going solo. Maybe it's not a bad idea after all.\\n___: Please don't go! Wait for ___!",
      tips: 'Complete "Autumn Winds, Scarlet Leaves"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 2002,
              questTitle: 'Follow the Wind',
              chapterId: 1201,
              chapterTitle: 'Autumn Winds, Scarlet Leaves',
            },
          ],
        },
      ],
    },
    '116': {
      title: 'About Kamisato Ayaka',
      audio: 'VO_Aether_About_Kamisato_Ayaka',
      text: "#___: Hmmm...\\n___: ___, you look so serious today.\\n___: That's because ___'s thinking about serious things.\\n___: ___'s jealous of people from wealthy and influential families. They have an endless supply of Mora and mountains of delicious food to eat...\\n___: I can't disagree. Those are exactly the things you're fond of.\\n___: But after getting to know Ayaka better, ___ realized that a young lady from a noble family can also have her share of hardships.\\n___: She needs to shoulder her clan's duties and responsibilities. She works so hard and has very little time for herself.\\n___: Ayaka must be exhausted, she should try to relax a bit...\\n___: Ah, that's right! Let's invite Ayaka to the next festival!\\n___: If she got an invite from us, there's no way she'd refuse.\\n___: Yeah, I'd like to go to another festival with her.\\n___: Besides, if Ayaka's around, she can pick up the tab for us...\\n___: ...I should've seen that coming...",
      tips: 'Complete "The Whispers of the Crane and the White Rabbit"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 12008,
              questTitle: 'With You',
              chapterId: 2022,
              chapterTitle: 'The Whispers of the Crane and the White Rabbit',
            },
          ],
        },
      ],
    },
    '117': {
      title: 'About Imitating Ayaka',
      audio: 'VO_Aether_About_Imitating_Ayaka',
      text: '#___: Ayaka gives a sense of noble elegance with every gesture she makes.\\n___: Can you do an Ayaka impression, ___?\\n___: Let\'s give it a try.\\n___: "Oh my, you\'ve been picking mushrooms so earnestly just to make Chicken-Mushroom Skewers for me?"\\n___: "How cute..."\\n___: That was nothing like Ayaka. But...\\n___: Even though you didn\'t sound like yourself, it didn\'t feel completely out of place for you either...',
      tips: 'Complete "The Whispers of the Crane and the White Rabbit"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 12008,
              questTitle: 'With You',
              chapterId: 2022,
              chapterTitle: 'The Whispers of the Crane and the White Rabbit',
            },
          ],
        },
      ],
    },
    '118': {
      title: 'About Festival Traditions',
      audio: 'VO_Aether_About_Festival_Traditions',
      text: "#___: It's a well-established tradition that during Inazuman celebrations everyone's wearing festive masks.\\n___: ___ tried to look around the stalls, but hasn't found any mask that fits...\\n___: So you really want a mask of your own?\\n___: Of course! Not wearing a mask during an Inazuman festival is the same as not receiving a bouquet at the Windblume Festival...\\n___: Let me make one for you.\\n___: Whoa! ___, you're the best!\\n___: Hmmm, I wonder what kind of mask will fit you best? How about... a slime mask?\\n___: Yay, ___ Slime!",
      tips: 'Complete "The Whispers of the Crane and the White Rabbit"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 12008,
              questTitle: 'With You',
              chapterId: 2022,
              chapterTitle: 'The Whispers of the Crane and the White Rabbit',
            },
          ],
        },
      ],
    },
    '119': {
      title: 'About Yoimiya',
      audio: 'VO_Aether_About_Yoimiya',
      text: "#___: Do you think Yoimiya's dad's poor hearing is related to fireworks?\\n___: He's been making and testing fireworks for many years now, and being exposed to the sound of gunpowder explosions on a daily basis... ___ can see how that might've worn down his ears...\\n___: Yikes! Since Yoimiya is inheriting her family business, does that mean she'll have trouble hearing other people in the future, just like her dad?\\n___: ___ won't let that happen! Let's think of some way to help her!\\n___: Do you have any suggestions, ___?\\n___: Uh... Um...\\n___: ___ could follow Yoimiya around and cover her ears whenever needed...\\n___: Then you'd need to leave me.\\n___: ...Without ___, you'd lose your guide. ___ wouldn't leave you like that!\\n___: But... What should we do for Yoimiya...\\n___: Actually, she can simply wear earplugs while working with fireworks.\\n___: Oh yeah! ___ didn't think of that solution! You're so smart!\\n___: Heh... That was the first thing that came to my mind, but I wanted to give you an opportunity for a mental workout.\\n___: Eh? So you knew this whole time, but didn't tell ___?\\n___: How could you! You bully!",
      tips: 'Complete "Dreamlike Timelessness"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 12013,
              questTitle: 'Together Under the Fireworks',
              chapterId: 2021,
              chapterTitle: 'Dreamlike Timelessness',
            },
          ],
        },
      ],
    },
    '120': {
      title: "About Sayu's Troubles",
      audio: "VO_Aether_About_Sayu's_Troubles",
      text: "#___: Sayu seems to have a lot on her mind.\\n___: ___ can't understand why she'd have so many worries.\\n___: I guess this is what they call growing pains.\\n___: Hmm, ___ can't relate to that.\\n___: After all, it's not ___ly to worry too much.\\n___: Hmmm...\\n___: Bad news! We're almost out of Mora. I guess we'll have to tighten the purse strings for the next few days...\\n___: Wh-What? Noooo!\\n___: See, you're not as carefree as you thought.\\n___: Ooh... How could you prank ___ like that...",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '121': {
      title: 'About Onikabuto',
      audio: 'VO_Aether_About_Onikabuto',
      text: "#___: Those Onikabuto bugs look so scary! The patterns on their backs are terrifying!\\n___: Do you mean those demonic patterns? It's because they don't like to fight, so they purposely evolved their patterns in a way that scares their enemies away.\\n___: That's really smart. We should try to learn a thing or two from them!\\n___: We could borrow Xiao's mask. If a hilichurl saw you wearing it, do you think they'd run in fear?\\n___: Uh... I don't think Xiao would agree to that...\\n___: Yeah... Hmm, how about we ask Sayu to steal his mask for us?\\n___: She knows ninjutsu that allows her to vanish into thin air. She can steal it for sure! Problem solved!\\n___: Uh... If we are afraid of Xiao evening the score with us, how about we steal Childe's mask? We've kicked his butt many times before!\\n___: I don't think stealing other people's belongings is a good idea. Also, what if Sayu doesn't agree to all of this?\\n___: Th—Then let's... Let's visit Albedo first.\\n___: If Albedo can develop a growth serum for Sayu, she'll help us for sure!\\n___: Brilliant, now we just need you to come up with a way to make Albedo help us.\\n___: Ugh! ___'s head is going to explode. Let's stick to festival masks for now.",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '122': {
      title: 'About Naku Weed',
      audio: 'VO_Aether_About_Naku_Weed',
      text: '#___: Even though Naku Weed has a flower-like structure, its "petals" are in fact leaves.\\n___: Its actual bloom is rather fragile, so the surrounding leaves try their hardest to grow strong and protect it...\\n___: Hee-hee, just like ___ is protecting you right now.\\n___: Just like you? Oh, is Naku Weed edible too?\\n___: Yeah, that\'s right! ...Wait? What are you trying to say?',
      tips: 'Unlock the Statue of The Seven (Electro) in Tatarasuna, Inazuma',
      tasks: null,
    },
    '123': {
      title: 'About Naku Weed and Storms',
      audio: 'VO_Aether_About_Naku_Weed_and_Storms',
      text: "#___: Did you know? The people in Inazuma use the vibrations of Naku Weed to forecast thunderstorms.\\n___: Because Naku Weed grows in areas that are infused with Electro, it's naturally drawn to thunder and lightning.\\n___: Does that mean Naku Weed is similar to you, ___?\\n___: Eh? How so?\\n___: You know, because you usually hang out in areas infused with gourmet food and are naturally drawn to tasty snacks!\\n___: Hee-hee, that's true!\\n___: ___ radar activated...\\n___: *beep* Delicacies, here we go!",
      tips: 'Unlock the Statue of The Seven (Electro) in Tatarasuna, Inazuma',
      tasks: null,
    },
    '124': {
      title: 'About Sakura Blooms',
      audio: 'VO_Aether_About_Sakura_Blooms',
      text: "#___: The blossoms drifting down from the Sacred Sakura are so dazzling!\\n___: ___ heard that those flower petals can stay suspended in the air for so long because of being infused with Electro.\\n___: Is it the same principle behind your levitation abilities?\\n___: Uh... Ah... That's because...\\n___: You do know what allows you to fly, don't you, ___?\\n___: ___ can fly because of... mysterious powers, obviously!\\n___: Got it. Seems like you have no idea.\\n___: How about we let Albedo do some research? He's good at cracking such mysteries...\\n___: Please don't!",
      tips: 'Unlock teleport waypoints in Grand Narukami Shrine',
      tasks: null,
    },
    '125': {
      title: 'About Lavender Melons',
      audio: 'VO_Aether_About_Lavender_Melons',
      text: "#___: Lavender Melons sure are useful!\\n___: Their flesh can be eaten, and their skin can be processed to make dyes.\\n___: ___ sure is useful!\\n___: She can serve as my guide, and she can also give other people ugly nicknames, haha.\\n___: Yep! Thank you for your validation!\\n___: Wait a minute, is there more? Is ___ about to get roasted?\\n___: ___'s gonna cover your mouth to stop you from talking!",
      tips: 'Unlock teleport waypoints in Konda Village',
      tasks: null,
    },
    '126': {
      title: 'About Swords',
      audio: 'VO_Aether_About_Swords',
      text: "#___: ___, have you noticed?\\n___: In Inazuma, people who wear swords on their waists are a minority. Most soldiers use spears.\\n___: Could it be that swords are a symbol of status... Should we wear them as well?\\n___: But the swords here are all too big for ___... There's no other way, we'll have to find a famous swordsmith to make a custom one!\\n___: A custom-made sword will cost a lot of Mora though.\\n___: Are you saying that Mora is more important than the desires of your lovely companion?\\n___: ...Actually, I've already prepared something for you, ___.\\n___: Really? Really? Let's have a look!\\n___: Hey! Isn't that the knife we use to cut fruit?\\n___: Well, at least it's the right size for you...\\n___: Ahem, \"What matters isn't the value of the sword, it's the fighting spirit.\"\\n___: Nice try, but ___ won't fall for this, no matter how cool it sounds!",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '127': {
      title: 'About Hot Springs',
      audio: 'VO_Aether_About_Hot_Springs',
      text: "#___: Did you know there are hot springs in Inazuma?\\n___: ...But there are no volcanoes.\\n___: Umm, ___ heard that the heat comes from a giant furnace!\\n___: If we get the chance, ___ also wants to check out a hot spring. Unfortunately, it seems like only the big shots are granted entry.\\n___: Hmmm...\\n___: Let's head back to the Dadaupa Gorge in Mondstadt!\\n___: Eh? Why so sudden?\\n___: Back in the Dadaupa Gorge, the hilichurls have a huge cauldron that's heated by Flaming Flowers. It should be similar to a hot spring, right? You can bathe in their... soup, I guess?\\n___: ???",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '128': {
      title: 'About Jugemu',
      audio: 'VO_Aether_About_Jugemu',
      text: '#___: In Inazuma, it\'s customary for parents to choose a lucky name for their child.\\n___: Those names symbolize everyone\'s expectations and wishes for the child, like prosperity, wealth, good health, and safety.\\n___: Because of these expectations, parents often pick extra long names, and cram all sorts of blessings into them.\\n___: So hypothetically, if one day a little girl fell into a lake on her way back home, then her friends might rush to her house to tell everyone, "Something bad happened!"\\n___: "Oh, what happened?"\\n___: Ozvaldo Hrafnavins, Prinzessin der Verurteilung Fischl von Luftschloss Narfidort, come quick! Centennial Genius Astrologist Mona Megistus has fallen into the water!\\n___: ...Mona falling into the water doesn\'t sound like an emergency situation though.\\n___: Precisely. The fast-swimming Mona would come back home around the same time her friends are done saying her name, haha.',
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '129': {
      title: "About Inazuma's Islands",
      audio: "VO_Aether_About_Inazuma's_Islands",
      text: "#___: Inazuma's scenery is quite different than what we've seen so far.\\n___: Yeah, Inazuma's an island nation.\\n___: Before the invention of boats, how did the people living on different islands communicate with one another?\\n___: According to Yoimiya's dad, they probably used smoke signals to transmit information.\\n___: Or, they would...\\n___: Yeah...?\\n___: They would commission people who could freeze the water surface to travel between the islands and deliver messages.\\n___: Whoa! If Kaeya had lived in Inazuma back then, he would've been even busier than Master Jean now!",
      tips: 'Unlock teleport waypoints in Ritou',
      tasks: null,
    },
    '130': {
      title: 'About Tanuki',
      audio: 'VO_Aether_About_Tanuki',
      text: "#___: Tanuki are really mysterious creatures.\\n___: I think they are really cute.\\n___: Yeah, they're cute... until they start talking.\\n___: Hmm, I wonder... If you couldn't talk, would you appear to be more mysterious and noble?\\n___: Are you trying to mock me?\\n___: *randomly humming innocently*",
      tips: 'Unlock teleport waypoints in Chinju Forest',
      tasks: null,
    },
    '131': {
      title: 'About Tanuki and Their Illusions',
      audio: 'VO_Aether_About_Tanuki_and_Their_Illusions',
      text: "#___: Did anyone tell you that there are monsters called tanuki in Inazuma that can take on the form of any human they see?\\n___: I heard such rumors before. They must know some mysterious transformation techniques.\\n___: What if one day a tanuki tricked you by transforming into ___? Oh no... ___'s worried now! \\n___: No worries, I'd surely be able to tell the difference— Wait! You're just concerned about my Mora, aren't you?\\n___: Of course... Ah! ...No, no! ___'s only concerned about your safety, ___!\\n___: Hmph, stop looking at ___ like that. *pouting* Look, just think about it! If there were two ___s, how would you find out which one is the real one?\\n___: ...Eh-he.\\n___: What do you mean \"eh-he\"!?\\n___: See, only the real ___ would respond like that.\\n___: Ah! ___ got tricked again...",
      tips: 'Unlock teleport waypoints in Chinju Forest',
      tasks: null,
    },
    '132': {
      title: 'About Other Shrines',
      audio: 'VO_Aether_About_Other_Shrines',
      text: "#___: We've been passing by a lot of small shrines lately, but none of them seem to be dedicated to the Electro Archon.\\n___: They were probably built for lesser deities. The people of Inazuma believe that everything around them has a spirit, and those spirits will help them in their time of need.\\n___: Oh, so the people make shrines for them, and give them offerings.\\n___: Yeah. In a way, it's a form of prayer and a token of appreciation.\\n___: ___ gets it now! Let's find Ayaka, and have her put up a shrine for us!\\n___: If we do that, we'll be able to get lots of offerings as well!\\n___: ___'s so happy!\\n___: Hehe. Uh... I—Is that an acceptable thing to do?\\n___: What's wrong? Haven't we been helping out everyone this whole time? We may be doing an even better job than those deities!\\n___: You do have a point...\\n___: But when I picture people placing flowers or fruits in front of a shrine for me... it doesn't feel right.",
      tips: 'Unlock teleport waypoints in Araumi',
      tasks: null,
    },
    '133': {
      title: 'About the Rain on Yashiori Island',
      audio: 'VO_Aether_About_the_Rain_on_Yashiori_Island',
      text: "#___: It never stops raining on Yashiori Island. I heard it's because of the lingering evil energy.\\n___: \"Evil energy\"? What's that? Sounds terrifying.\\n___: It's caused by the remains of an evil god somewhere on the island. Because its power hasn't fully dispersed, the remaining energy causes all sorts of misfortunes. That's what I meant when I said \"evil energy.\"\\n___: Oh, that makes sense. But ___ doesn't think rain is a bad thing.\\n___: Maybe that god has been crying all this time because they were bullied.\\n___: Crying? I don't think gods can cry. I mean, I've never seen Venti or Zhongli cry before.\\n___: There are exceptions! If you pinch ___, you'll be able to see a crying god.\\n___: Hmm? Are you a god?\\n___: ___ sure is!\\n___: Okay, let me guess... The flying god of silly questions? The god of slimes? Or the god of being fished out from the water?\\n___: ___'s none of those! Hmph!\\n___: As your bodyguard, ___, ___ is the god of protection! Hehe.",
      tips: 'Unlock teleport waypoints in Nazuchi Beach',
      tasks: null,
    },
    '134': {
      title: 'About Bantan Sango Detective Agency',
      audio: 'VO_Aether_About_Bantan_Sango_Detective_Agency',
      text: "#___: In Hanamizaka, there's a place called the Bantan Sango Detective Agency.\\n___: ___ remembers. It's the one run by Sango and Ryuuji, right? Everyone speaks highly of them.\\n___: Uh, I heard that they frequently get caught up in strange incidents, and some places have banned them from entering their premises...\\n___: ___ thinks that's undeserved. After all, Sango and Ryuuji have helped a lot of people...\\n___: Would you invite them if you were organizing a dinner party?\\n___: What if halfway through the meal, one of the guests suddenly shrieked and collapsed onto the ground...\\n___: I—If that's the case, then ___ thinks it's a bad idea. ___ suddenly feels that hanging out with them could be dangerous...\\n___: Well, that's the price you pay for being a famous detective.",
      tips: 'Unlock teleport waypoints in Inazuma City: Streets',
      tasks: null,
    },
    '135': {
      title: 'About Drawing Fortune Slips',
      audio: 'VO_Aether_About_Drawing_Fortune_Slips',
      text: "#___: Oh yeah, have you drawn fortune slips at the shrine before, ___?\\n___: If we draw them before our next adventure, they may provide us with some guidance.\\n___: Hmm, but what if our draws are inauspicious or turn out to be a bad omen? If that happened, we'd probably end up in a bad mood...\\n___: Oh, that's fine. According to the shrine maidens, if someone draws a bad omen, they just need to hang it on a tree in the shrine...\\n___: So, we should keep on drawing and drawing, until we get a super lucky draw! Then, we'll hang all the bad ones on the tree!\\n___: If everyone did that, there'd be no more space left to hang the slips...",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '136': {
      title: 'About Musou no Hitotachi',
      audio: 'VO_Aether_About_Musou_no_Hitotachi',
      text: "#___: Musou no Hitotachi is amazing!\\n___: It can beat any enemy with a single slash!\\n___: Uh, but for Childe, it might need three slashes...\\n___: Y—Yeah!\\n___: Anyway, if you mastered that technique, ___ wouldn't have to worry about you for the rest of our journey!\\n___: So, where can one learn that technique?\\n___: Yeah, where can one learn that technique?\\n___: Hm?\\n___: Quit looking at ___ like that! O—Okay, ___ will keep an eye on you during our adventures...",
      tips: 'Complete "Omnipresence Over Mortals"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
      ],
    },
    '137': {
      title: 'About Sangonomiya Kokomi',
      audio: 'VO_Aether_About_Sangonomiya_Kokomi',
      text: '#___: Did you know, ___? That Sangonomiya Kokomi, she\'s Watatsumi Island\'s Divine Priestess.\\n___: In other words, she\'s the ruler of Watatsumi Island! The whole of Watatsumi Island is controlled by her.\\n___: ___ also wants to become a big shot like her...\\n___: What will you do after you become a big shot?\\n___: Then, ___ will deliver justice. For example... Ahem.\\n___: The suspect in question, known as the Traveler, ate two Dango for lunch and only gave one to the victim, ___. This is a serious violation of article thirty seven, "Fairness and Justice," of the "___ Decree."\\n___: Oh... may I ask how Your Excellency ___ plans to resolve this issue?\\n___: Of course. As compensation for your wrongdoings, you will have to make even more Dango for ___, hee-hee!',
      tips: 'Complete "Omnipresence Over Mortals"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
      ],
    },
    '138': {
      title: 'About Transience',
      audio: 'VO_Aether_About_Transience',
      text: "#___: ___ wonders what the previous Shogun was like.\\n___: It appears that she was a person who understood the fleeting nature of things, and accepted the inevitable fate of departing this world one day.\\n___: After all, realizing the fragility of things in front of you makes you treasure them even more.\\n___: This way of thinking must've influenced Inazuma's aesthetics. This world is transient, people come and go. The fun times we shared, our companionship, and the delicious foods we got to savor — those emotions and experiences are real things that existed at some point in time, not just empty concepts.\\n___: Even though... Even though every banquet must eventually come to an end, it'd be nice to enjoy those happy moments for a little longer.\\n___: \"Shifting seasons and elusive dreams, the ephemeral and fleeting, with thine companionship, all are eternal.\"\\n___: ___ doesn't get it!\\n___: I'm saying that I'm having a lot of fun traveling with you, ___. It'd be nice if we could just go on like this forever.\\n___: ___'ll take your word for it then.",
      tips: 'Complete "Omnipresence Over Mortals"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
      ],
    },
    '139': {
      title: 'About Shrine Maidens',
      audio: 'VO_Aether_About_Shrine_Maidens',
      text: "#___: The clothes that shrine maidens wear are quite unique.\\n___: I heard that after the Sakoku Decree is lifted, Yae Miko plans to run a rental service where people can try on shrine maiden outfits as a tourist attraction in various places. Combined with the latest Kamera technology from Fontaine, it seems like a real Mora maker.\\n___: Oh!\\n___: {M#The shrine maidens in the Grand Shrine even asked me if I knew any pretty girls who are willing to become models. All they need to do is to dress up in a shrine maiden outfit and smile to the Kamera. They even asked me to be a model and said all I needed was some makeup.}{F#The shrine maidens in the Grand Shrine even asked me if I was interested in becoming a model! All I need to do is wear a shrine maiden outfit and smile to the Kamera. They also asked me if I knew any other cute girls.}\\n___: What!?\\n___: I immediately shared this idea with Rosaria. I feel like they can do something similar at the Church of Favonius with the garments they wear.\\n___: Wait, ___ doesn't think that a...\\n___: Sadly, Rosaria found the idea of it too troublesome.\\n___: Maybe it's for the better...",
      tips: 'Complete "Omnipresence Over Mortals"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
      ],
    },
    '140': {
      title: 'About the Artist Utamarou',
      audio: 'VO_Aether_About_the_Artist_Utamarou',
      text: "#___: Aoi gave ___ a painting. Turns out it's not edible, but ___ is still very happy with that gift!\\n___: Aoi? The general goods shop owner? Let me see.\\n___: Here, but be careful. It was painted by a famous artist, Utamarou. It's quite valuable!\\n___: Utamarou? Hmm... I think I've heard that name before...\\n___: Of course, master Utamarou's works can be found all around Inazuma after all!\\n___: Did you see one of them in Ayaka's residence? The one that ___ has right now isn't too shabby either.\\n___: Oh, I remember now! One of those paintings was used by Yoimiya as kindling, right?\\n___: Eh? Kindling?\\n___: Uh, yeah! I think Thoma used it as padding for table legs as well.\\n___: What? Padding?\\n___: And, if I remember correctly, I also saw Sayu use a stack of those paintings as a cushion for her nap.\\n___: Sayu has several of those works? That can't be right...\\n___: Real masterpieces aren't mass-produced. If you ask me, that Utamarou isn't a real master at all.\\n___: Hey—",
      tips: 'Complete "Omnipresence Over Mortals"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
      ],
    },
    '141': {
      title: 'About the Teahouse and Its Owner',
      audio: 'VO_Aether_About_the_Teahouse_and_Its_Owner',
      text: "#___: The Komore Teahouse is doing surprisingly well. They have a great number of visitors every day.\\n___: We should also open a teahouse. ___ feels that it'd be really profitable!\\n___: Hmm... Well, if we do end up opening a teahouse, then you're gonna be the boss, for sure.\\n___: Eh? Deal!\\n___: ___ didn't think that you'd have so much faith in ___'s abilities... ___ will make sure to be a responsible manager, and make our shop the best teahouse in Teyvat!\\n___: Uhh, I don't think it'd need to be managed... Do you remember Taroumaru?\\n___: Yup, he's the owner of the Komore Teahouse, right? A lot of the clients go to the Teahouse to play with him rather than drink tea.\\n___: So I was thinking, if you were running the shop, you'd definitely be more popular than Taroumaru.\\n___: Hee-hee, of course... Hey! So you don't really trust ___'s management skills, you just want a mascot!?",
      tips: 'Complete "Omnipresence Over Mortals"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
      ],
    },
    '142': {
      title: 'About the Sakoku Decree',
      audio: 'VO_Aether_About_the_Sakoku_Decree',
      text: "#___: With the abolishment of the Vision Hunt Decree, I guess the Sakoku Decree will be the next one to go.\\n___: Here's hoping that everything goes well.\\n___: Let's encourage everyone to hold on for just a bit longer.\\n___: Yeah!\\n___: If we get the chance, let's find Atsuko and tell her that the sakura trees in her homeland are blooming.\\n___: How is that supposed to comfort her!?",
      tips: 'Complete "Omnipresence Over Mortals"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
      ],
    },
    '143': {
      title: 'About Kimonos',
      audio: 'VO_Aether_About_Kimonos',
      text: "#___: *sigh* Ogura Mio says that she hardly has any fancy kimonos in stock these days. So, chances are that you won't be able to buy one, even if you can afford it.\\n___: It's a real tragedy... ___ wants to look glamorous, too.\\n___: But the Sakoku Decree's been abolished... She should be able to import silk from Liyue now.\\n___: *gasp* You're right! Great, so there's hope for ___'s kimono-dream after all!\\n___: Just imagine it... ___ emerges from Ogura's shop wearing a custom-made pure-silk one-of-a-kind kimono. Total transformation! This ___'s going places!\\n___: No longer just a sidekick in the legendary Traveler's adventure story... Oh no, say hello to ___ the Elegant, wearer of fine silks and fated friend of heroes!\\n___: Ahhh... Wouldn't that be amazing?\\n___: ...It would, wouldn't it, ___? Um, so—\\n___: What I'm hearing is... you want me to pay for your new wardrobe.\\n___: Exactly, you read ___'s mind! See, that's what being \"fated friends\" is all about!\\n___: Um, so ___ was thinking seven different styles, one for each day of the week. Still not sure on the specific designs though, let ___ think...\\n___: ...Uh, suddenly, I'm not so interested in buying.",
      tips: 'Complete "Transient Dreams"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 12042,
              questTitle: 'Radiant Sakura',
              chapterId: 2027,
              chapterTitle: 'Transient Dreams',
            },
          ],
        },
      ],
    },
    '144': {
      title: 'About Canned Knowledge',
      audio: 'VO_Aether_About_Canned_Knowledge',
      text: "#___: Free knowledge without having to study at all? Canned Knowledge is amazing!\\n___: Could Sumeru have Canned Knowledge about the different customs of the seven nations, too?\\n___: If so, ___ could just open a can every time we get to a new place. ___ wouldn't have to explain things ever again!\\n___: Or we could just open them all here in Sumeru.\\n___: But... but traveling wouldn't be any fun without surprises to look forward to!\\n___: Ooh, plus, if we opened them all here, I wouldn't even need ___ as a guide anymore.\\n___: Okay scrap that idea! No more Canned Knowledge, let's save our Mora for something else!\\n___: Something like... Oh! Tipping ___ for guide services! Heehee, seems fair, right?",
      tips: 'Complete "The Morn a Thousand Roses Brings."',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 3012,
              chapterId: 1302,
              chapterTitle: 'The Morn a Thousand Roses Brings',
            },
          ],
        },
      ],
    },
    '145': {
      title: 'About The Eremites',
      audio: 'VO_Aether_About_The_Eremites',
      text: "#___: The Eremites are a real motley crew...\\n___: There's certainly a diverse range of characters.\\n___: Hmmm... yeah, that could explain it! ___ can play lots of different characters too.\\n___: Judgy ___, knowledgeable ___, helpful ___...\\n___: ...And of course the classic, completely-misses-the-point ___.",
      tips: 'Complete "The Morn a Thousand Roses Brings."',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 3012,
              chapterId: 1302,
              chapterTitle: 'The Morn a Thousand Roses Brings',
            },
          ],
        },
      ],
    },
    '146': {
      title: 'About Beliefs',
      audio: 'VO_Aether_About_Beliefs',
      text: "#___: Have you noticed something? People in Sumeru don't seem to have a lot of faith in Lesser Lord Kusanali.\\n___: Back in Liyue and Inazuma, people were pretty enthusiastic about Rex Lapis and the Almighty Shogun.\\n___: Those strange scholars are one thing, but even everyone living downtown only ever seems to talk about Greater Lord Rukkhadevata.\\n___: Yeah. And the most delicious mushrooms are said to be Greater Lord Rukkhadevata's blessing.\\n___: Speaking of which, lots of the dishes in Liyue are said to have been taught and approved by Rex Lapis himself...\\n___: Aha! So as long as a god blesses their people with delicious food, people will worship them!\\n___: Hehe, if their name is ___, sure.\\n___: Huh? Wait, so... ___, what do you believe in, then?\\n___: Me? Hmm... ___, of course.\\n___: Heehee, that's right!",
      tips: 'Complete "The Morn a Thousand Roses Brings."',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 3012,
              chapterId: 1302,
              chapterTitle: 'The Morn a Thousand Roses Brings',
            },
          ],
        },
      ],
    },
    '147': {
      title: 'About the Wall of Samiel',
      audio: 'VO_Aether_About_the_Wall_of_Samiel',
      text: "#___: The first time we saw the Wall of Samiel, ___ was stunned... It seems to go on forever.\\n___: Well, it was built to protect the entire rainforest, after all.\\n___: And, it's so, so tall...\\n___: Who knows if ___'ll be able to climb all the way to the top.\\n___: I doubt it...? Also, why do I have to climb it, exactly?\\n___: Uh... because it's right there?\\n___: Hmm, even so... No.\\n___: The Wall of Samiel is right there in front of us!\\n___: I know, I know, but it's way too—\\n___: But it's the Wall of Samiel...\\n___: Fine! I'll go, okay?",
      tips: 'Complete "The Morn a Thousand Roses Brings."',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 3012,
              chapterId: 1302,
              chapterTitle: 'The Morn a Thousand Roses Brings',
            },
          ],
        },
      ],
    },
    '148': {
      title: 'About Akasha Terminals',
      audio: 'VO_Aether_About_Akasha_Terminals',
      text: "#___: All these Sumeru scholars seem to wear Akasha Terminals so they can get information from the Akasha system.\\n___: It's like they're carrying an interactive encyclopedia with them wherever they go. ___'s kinda jealous.\\n___: Well, I'm not jealous. I have an even better encyclopedia that automatically follows me around, gives me the A-to-Z on everything in Teyvat, and the best part is, it can even talk!\\n___: Huh? Was that a compliment? Aw, you're making ___ blush... ___ definitely doesn't know as much as an encyclopedia! A-to-Y at most.\\n___: Well, you know... maybe if you ate a little less, you'd have room for Z, too.\\n___: Hey!!!",
      tips: 'Complete "The Morn a Thousand Roses Brings."',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 3012,
              chapterId: 1302,
              chapterTitle: 'The Morn a Thousand Roses Brings',
            },
          ],
        },
      ],
    },
    '149': {
      title: 'About Aranara Names',
      audio: 'VO_Aether_About_Aranara_Names',
      text: '#___: Arama, Arana, Araja, Arakavi... Whew, Aranara names are so hard to remember...\\n___: The only bit ___\'s sure of is that they all start with "Ara"!\\n___: Right, so if you were an Aranara, your name would be "Arapaimon."\\n___: Yup, and as for ___...\\n___: Hmm, actually, they\'d probably call you Nara ___...\\n___: Yeah, we\'re all Nara to them...\\n___: So if there was someone whose actual name was "Nara," what would the Aranara call them?\\n___: "Nara Nara"... I guess. Sounds kinda cute.\\n___: Hehe, yeah.',
      tips: 'Complete "???"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 73032,
              questTitle: 'Festival Utsava',
              chapterId: 10076,
              chapterTitle: 'Dream Nursery',
            },
          ],
        },
      ],
    },
    '150': {
      title: 'About Aranara Cuisine',
      audio: 'VO_Aether_About_Aranara_Cuisine',
      text: "#___: For some reason, the Aranara's food all tasted a little too... um, how to put this... a little too \"fresh.\"\\n___: It's totally different from what we usually eat.\\n___: Yeah, but their ingredients are top-quality.\\n___: Yeah, that's true. Still, those mushrooms and fruits were so raw, it felt like they were gonna keep growing in ___'s stomach!\\n___: Heh, you're exaggerating, right? You do have a point, though — maybe the best ingredients don't need a lot of fancy cooking.\\n___: You're right. If the ingredients are good enough, they'll taste great even when cooked with the simplest methods.\\n___: Just like ___. Just a little salt and pepper, and—\\n___: Hey! For crying out loud, we're in Sumeru now! Don't you think that joke's getting a little old?",
      tips: 'Complete "???"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 73032,
              questTitle: 'Festival Utsava',
              chapterId: 10076,
              chapterTitle: 'Dream Nursery',
            },
          ],
        },
      ],
    },
    '151': {
      title: "About Dori's Genie",
      audio: "VO_Aether_About_Dori's_Genie",
      text: "#___: How did a genie that big get into Dori's lamp?\\n___: Only one way to find out: In you go, ___.\\n___: Not a chance! There's no way ___ would fit in there!\\n___: Okay, well... if you want, you can be the genie of the Serenitea Pot instead?\\n___: Oooh, great idea! ___'s down!\\n___: You seem pretty excited about this...\\n___: Uh, yeah! ___'s been wanting to try this for ages! ...Poof! Didst thou summon me, O Traveler from a distant land?\\n___: Come on, come on, now you have to grant ___ three wishes! ___'s first wish is... bring ___ lots of delicious food!\\n___: Hey, you're not supposed to be the one making wishes!",
      tips: 'Complete "A Teapot to Call Home: Part I"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 11008,
              questTitle: 'A Teapot to Call Home: Part I',
            },
          ],
        },
      ],
    },
    '152': {
      title: 'About Bimarstan',
      audio: 'VO_Aether_About_Bimarstan',
      text: "#___: Whoa, healthcare is FREE in Sumeru?\\n___: Are you feeling unwell, ___?\\n___: No, not right now. Thanks for asking, though.\\n___: Hehe... Eating the street food on every corner has never sounded so tempting!\\n___: Hehe, your stomach is gonna punish you for that!\\n___: If so, ___'ll go see a doctor and get treated — it's all for free! It'd be a waste not to take advantage of this, don't you think?\\n___: Maybe... but then again, the treatment would likely include a restricted diet.\\n___: *gasp* Oh no! So no more delicious food, then?\\n___: That, plus the doctor would make you take the most bitter-tasting medicine ever.\\n___: O—Okay... Maybe ___ needs to reconsider this idea...",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '153': {
      title: 'About the Scholars',
      audio: 'VO_Aether_About_the_Scholars',
      text: "#___: So many people in Sumeru want to become scholars.\\n___: Motivated by this ambition, they all study really hard to try and achieve it...\\n___: But ___ bets that the first ever scholar didn't set out to become a scholar...\\n___: Hmm... so what do you think the first ever scholar's ambition was?\\n___: Probably... to get their research paper written as quickly as possible.\\n___: Huh? But isn't a scholar's ultimate goal supposed to be \"pursuing the highest and greatest knowledge\" or something?\\n___: ___'s sure that it must have been because of a fervent desire for knowledge that they became Sumeru's first true scholar.\\n___: Writing papers is how you pursue knowledge.\\n___: But what about when it's the highest and greatest knowledge of all...\\n___: Even then, if you wanted to prove it, you'd need a research paper.\\n___: And after that, you'd need to start working on another paper to validate your original thesis...\\n___: O—Okay, ___'s got it! Come on, don't look so sad! It's not like you have to worry about writing papers yourself!\\n___: ...Y—You've never had to write a paper before, right...?",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '154': {
      title: 'About Amurta',
      audio: 'VO_Aether_About_Amurta',
      text: "#___: ___ wants to go visit the Amurta scholars!\\n___: Hehe, when did you become such an avid student, ___?\\n___: Well, ___ heard that the Amurta scholars' research is all about nature.\\n___: Which means... they must have to research which animals are edible, and which ones taste the best, and... y'know that kind of thing!\\n___: ___ thinks it'd be really fun to help them out with their research.\\n___: In other words, you've got a craving for some tasty, organic dishes.\\n___: No! ___ genuinely thinks that it's a really meaningful research topic and wants to help out!\\n___: Hmm, well in that case... I think the Amurta scholars might be more interested to find out about ___'s species and behavioral patterns.\\n___: Uh... Gee is that the time? ___ just remembered we have something else more important to do!",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '155': {
      title: 'About Sumpter Beasts',
      audio: 'VO_Aether_About_Sumpter_Beasts',
      text: '#___: Sumpter Beasts are adorable! ___ likes how the people who keep them give them each a special name based on their most distinctive traits!\\n___: For all we know, the Sumpter Beasts might be giving each of us a name in return. Maybe that\'s how they respond when we call their name.\\n___: Really? So what kind of name do think they\'d give us?\\n___: (Sumpter Beast noises)\\n___: How is anyone supposed to understand that!\\n___: A rough translation would be...\\n___: "Vociferous Pestiferous Melliculus Niveous Micro-Bipedal."\\n___: That\'s the scientific name, of course.\\n___: Oh? What would the common name be then?\\n___: "Noisy Two-Legged Critter"\\n___: Hey! Why keep only the negative traits?',
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '156': {
      title: 'About the Seventh Darshan',
      audio: 'VO_Aether_About_the_Seventh_Darshan',
      text: "#___: There are six Darshans in Sumeru.\\n___: It would be cool if ___ had her own Darshan too!\\n___: It'll be called... ___ology!\\n___: What wisdom would ___ology stand for?\\n___: Uh... practical wisdom for everyday life!\\n___: So ___ology scholars would specialize in the art of cooking slimes in a hundred different ways, never letting a single Mora escape their grasp, giving people ugly nicknames... et cetera?\\n___: Whoa, you read ___'s mind! Also, don't forget \"How to Become the Best Travel Guide in Teyvat\"!\\n___: This is a fantastic idea! Come on, let's go submit a Darshan application to the Akademiya! From this day on, ___'ll be the Grand Sage of ___ology!\\n___: I'd like to decline the honor, please...",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '157': {
      title: 'About Shroomboars',
      audio: 'VO_Aether_About_Shroomboars',
      text: "#___: Did you know that there are all kinds of strange Shroom-Kin in Sumeru?\\n___: Oh, yeah. Here's a fun one — legend has it that there were some forest boars who couldn't live without mushrooms, and the two species gradually formed a symbiotic relationship with each other. Now they're known as \"Shroomboars.\"\\n___: Whoa, that's a lot like us! ___ can't live without ___ either.\\n___: If you can't live without me, that means... I'm the shroom, and ___'s the...\\n___: Boar!\\n___: Hey, wait a second...",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '158': {
      title: 'About the Grand Bazaar',
      audio: 'VO_Aether_About_the_Grand_Bazaar',
      text: "#___: The residents of the Grand Bazaar are all so talented!\\n___: They sell their own woven goods, beautiful vases and jars, and delicious-smelling spices that make ___'s tummy start rumbling...\\n___: And they all sing and dance really well! ___ wishes she could do that.\\n___: Well, if you're serious about it, there's no reason you couldn't learn.\\n___: What? Really?\\n___: Well for starters, you have a natural advantage when it comes to dancing.\\n___: You won't trip over yourself, or accidentally step on someone else's foot...\\n___: Oh yeah! ___ always forgets how useful flying can be!\\n___: Alright then! Let's go bust a move at the Grand Bazaar and watch everyone shower ___ with admiration!\\n___: Aha, so that's what this is all about.",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '159': {
      title: 'About Divination',
      audio: 'VO_Aether_About_Divination',
      text: "#___: People in Sumeru seem to take divination and fortune-telling pretty seriously.\\n___: For starters, there's astrology, although only the scholars get to practice that. But ordinary citizens have their ways, too. They can do divinations with just a cup of coffee!\\n___: It's the nation of wisdom after all. It seems like people have an insatiable curiosity to learn about everything, including their own future.\\n___: ___ heard that they can tell your fate just by looking at the bottom of a finished cup of coffee...\\n___: Sounds way easier than climbing to the top of a tower and staring at the stars all night!\\n___: Oh, so you're interested in learning your fate now?\\n___: Yeah... although, ___'s really more interested in finding out what the coffee tastes like.",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '160': {
      title: 'About Purbiruni and Pursina',
      audio: 'VO_Aether_About_Purbiruni_and_Pursina',
      text: '#___: Khedive and Anisa kept talking about "Purbiruni" this and "Pursina" that...\\n___: Why do all these words have "pur" at the front?\\n___: Well, "Pur" means "descendant," and also "student"... So in this case, they\'re referring to themselves as the children and students of the great sages of old.\\n___: Huh, so that\'s what it means... From the way they were throwing these words around, ___ was sure it\'d be something to be proud of.\\n___: Wait... But isn\'t it?\\n___: Well, ___ for one would much rather be known as the founding father than have a name that basically says "So-and-so\'s my daddy." Pretty embarrassing, don\'t you think?\\n___: Um... I have to admit, I\'ve never thought about it like that...',
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '161': {
      title: 'About Studying Abroad',
      audio: 'VO_Aether_About_Studying_Abroad',
      text: "#___: It's not only Sumeru locals at the Akademiya, huh. There are students from other nations too.\\n___: Imagine leaving your hometown behind and traveling to a faraway and unfamiliar land in the pursuit of learning... How inspiring!\\n___: We travel to unfamiliar lands pretty often, too.\\n___: Huh, you're right! That means we're also super inspiring!\\n___: Not in the pursuit of learning, though.\\n___: Oh... So we're not as inspiring as the students after all...\\n___: Buuut we do know the best places to eat in Sumeru, and who you can rely on to help you out! That counts as knowledge, right?\\n___: Yeah, and to many people, it could be extremely valuable knowledge.\\n___: Great, so we're just as inspiring as them after all!",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '162': {
      title: 'About the Divine Tree',
      audio: 'VO_Aether_About_the_Divine_Tree',
      text: "#___: The whole of Sumeru City is built on top of a giant tree. How amazing is that!\\n___: We've seen lots of incredible trees on our journey, haven't we? There's our old stomping ground at Windrise, the Frostbearing Tree on Dragonspine, and the Sacred Sakura in Inazuma!\\n___: Sumeru's tree doesn't seem to have a fancy name though. People just call it \"the Divine Tree\"...\\n___: Sometimes, the most important things have the simplest names.\\n___: Really? Hmm, maybe you have a point. Long names would be kinda inconvenient if you had to say them every day.\\n___: Anyway, people in the city only have to say \"down below\" and everyone knows they mean the bottom of the tree.\\n___: What's that saying again? \"Names aren't things themselves, they're just words for things.\"\\n___: So is ___ just a word for a thing, too?\\n___: Yeah. Well, uh, kinda. But... wait, no! No, ___ is just ___!",
      tips: 'Unlock the Statue of The Seven at Mondstadt - Windrise – Anemo',
      tasks: null,
    },
    '163': {
      title: 'About Inter-Darshan Relations',
      audio: 'VO_Aether_About_Inter-Darshan_Relations',
      text: '#___: So, with Sumeru having so many scholars in different Darshans, do you think they end up arguing a lot?\\n___: You know, just like the rivalry between Li cuisine and Yue cuisine in Liyue.\\n___: I\'m sure they do. Conflict between different schools of thought is the most normal thing ever. As the Liyue martial arts novels say: "Wherever there are people, there will be conflict."\\n___: Wow, what a line. That\'s heavy... But the scholars in Sumeru probably don\'t duel like Liyue martial artists, right?\\n___: Maybe they settle things with a game of Genius Invokation TCG.\\n___: Ohh, good point! A duel of wits!\\n___: ___ can just imagine it: When one scholar can\'t convince another in an argument, he takes out his deck of cards, calmly sits down opposite his opponent, thinks for a moment, and then secures his victory!\\n___: That does sound like something that would happen in Sumeru.\\n___: The game ends, and the winner says "good game" as a sign of respect to his opponent. After that, both sides are back on good terms.\\n___: Um... saying that would probably only escalate the conflict.\\n___: Huh? Why?',
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '164': {
      title: 'About Port Ormos',
      audio: 'VO_Aether_About_Port_Ormos',
      text: "#___: Whew, Port Ormos definitely has a different vibe to Sumeru City...\\n___: It's a bustling area, and there's so many outlanders. Plus, no one needs to spend all their time buried in their studies, which is nice.\\n___: Yes, but that's why they end up being disciplined by the port authorities. So you see, ___? If you don't study hard, you'll end up just like them!\\n___: Oh...\\n___: Wait! What was that tone of voice for!?",
      tips: 'Unlock teleport waypoints in Sumeru -Port Ormos',
      tasks: null,
    },
    '165': {
      title: 'About the Alliance of the Twenty-Nine Ocean Deys',
      audio: 'VO_Aether_About_the_Alliance_of_the_Twenty-Nine_Ocean_Deys',
      text: "#___: Port Ormos is built on the ruins of the fortress of The Alliance of the... the... the alliance of something, anyway.\\n___: Ugh, the name's too long, ___ can't remember it! Anyway, that's what all the bookish people in Sumeru say.\\n___: Oh, you mean \"The Alliance of the Twenty-Nine Ocean Deys\"?\\n___: Apparently, the alliance was formed by a bunch of arrogant pirate leaders, none of whom wanted to work for any of the others. They fought and looted each other constantly, causing endless chaos in coastal Sumeru...\\n___: Finally, one day, they decided to enter into an alliance with one another and divide power equally between themselves. The members of the alliance were called \"Deys\"...\\n___: Oh... And so after that... there was no more fighting and no more stealing, so everyone could get along happily and make a boatload of Mora together! Right?\\n___: ...\\n___: Right...?\\n___: Well... presumably that's what they were hoping...\\n___: Huh...?\\n___: Before long, they were forming factions again, and the infighting between them escalated into the biggest internal battle they'd seen yet. Their fortress at Port Ormos was completely destroyed, and all the Deys were done for!\\n___: Whaaat?\\n___: Following that, an unprecedented period of peace finally came to Port Ormos, and the area began to develop into what we see today...\\n___: Huh... So the Alliance was just a bunch of dumb bad guys...",
      tips: 'Unlock teleport waypoints in Sumeru -Port Ormos',
      tasks: null,
    },
    '166': {
      title: 'About Cyno and Genius Invokation TCG...',
      audio: 'VO_Aether_About_Cyno_and_Genius_Invokation_TCG',
      text: "#___: Cyno's super into that card game \"Genius Invokation TCG,\" isn't he?\\n___: Doesn't it seem kinda weird for the General Mahamatra to be into playing cards...?\\n___: Hmm... not when you consider his hairstyle.\\n___: Huh? What has his hairstyle got to do with it?\\n___: When you're playing a card game, the fancier your hairstyle, the more distracting it is for your opponent.\\n___: \"What's going on with this guy? How did he manage to shape his hair like that?\"\\n___: When your opponent's mind is consumed with thoughts like this, you'll quickly gain the upper hand.\\n___: Hmm, really? Then we'd better think twice before playing against him...\\n___: I don't know... I think I might just have an advantage over him.\\n___: But you don't have a fancy hairstyle at all. And your clothes look pretty normal too...\\n___: But I do have ___.\\n___: You know, he'd be like: \"What's up with this guy? And what's that pesky flying companion of his up to?\"\\n___: As long as you're floating by my side, Cyno's mind will be consumed with thoughts like this.\\n___: I, on the other hand, would be completely unfazed by his hairstyle. So I'd be able to focus, and victory would be mine.\\n___: Forget it! If you wanna play cards, go get a funny haircut!",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '167': {
      title: 'About Sumeru Nursery Rhymes...',
      audio: 'VO_Aether_About_Sumeru_Nursery_Rhymes',
      text: "#___: ♪ Curry, curry, in the air~ Hungry children it's time to come home~ ♪\\n___: ♪ Curry, curry, in the air~ ♪\\n___: Wow! Good job, so you remember the tune as well!\\n___: Good job to you too, ___. You sing really well.\\n___: Heehee, that's because ___'s got a great plan!\\n___: Have you heard this story? Once upon a time, there was a hilihound who was given meat to eat whenever the samachurls started dancing. Eventually, the hilihound started drooling whenever it heard the sound of dancing.\\n___: Whenever we hear the curry song, we get curry to eat. So, all ___ has to do is learn the song by heart, and then in the future, whenever ___ is craving a big bowl of tasty curry, all she has to do is sing it!\\n___: Hey, aren't you gonna say something?\\n___: ♪ Curry, curry, in the air~ Hungry children it's time to come home~ ♪",
      tips: 'Complete "???"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 73032,
              questTitle: 'Festival Utsava',
              chapterId: 10076,
              chapterTitle: 'Dream Nursery',
            },
          ],
        },
      ],
    },
    '168': {
      title: 'About Aranara Tongue Twisters...',
      audio: 'VO_Aether_About_Aranara_Tongue_Twisters',
      text: '#___: ___, do you ever find that the word "Aranara" trips you up?\\n___: Hmm? Why, does it trip you up? Maybe that\'s because you don\'t really say anything most of the time.\\n___: Unlike ___! ___ has to talk all the time, so she never gets stuck on words.\\n___: Okay, well, try reading this then.\\n___: What is it? Let\'s see here...\\n___: Arana the Aranara exercises Ararakalari in the nearby area.\\n___: Narana the Nara picks Padisarahs in a parallel area further afield.\\n___: Narana the Padisarah-picking Nara had arranged to invite Arana the Aranara to the bar to befriend Lambad, but alas, Arana the Ararakalari-exercising Aranara professed a preference to Padisarah-picking Nara, Narana, for venturing to Vanarana to view the panorama.\\n___: On account of Arana the Aranara\'s antipathy to bar drama, Narana the Nara relented and, upon accompanying the latter on a Vanarana-panorama adventure, encountered another Aranara, named "Arama."\\n___: This must be one of those really weird dreams, right...\\n___: Ugh, but this headache feels pretty real...',
      tips: 'Complete "???"',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 73032,
              questTitle: 'Festival Utsava',
              chapterId: 10076,
              chapterTitle: 'Dream Nursery',
            },
          ],
        },
      ],
    },
    '169': {
      title: 'About the Prophesied Crisis...',
      audio: 'VO_Aether_About_the_Prophesied_Crisis',
      text: "#___: ___ just thought of a great way to deal with Fontaine's prophesied crisis!\\n___: Okay, let's hear it.\\n___: You know those great big clockwork meka they use for digging tunnels? Well, why not send them deep underwater and get them to dig a load of drainage holes? Then no one'll have to worry about the water level rising anymore.\\n___: Sounds logical enough, but where do you think the water will go?\\n___: Ah, what does that matter! Think of it like... a coin pouch. When there's a hole in it, what's the use in racking your brains trying to figure out where all the Mora went? 'Cause the fact is, a coin pouch with a hole wouldn't be able to hold it all anyway.\\n___: Well, I'd certainly like to know where all my Mora goes. But from what you're saying, it doesn't sound like you keep track...\\n___: Hey, what's that supposed to mean? ___ doesn't know where your... uh, P—___ doesn't know where your... Mora goes... hehe, heh...",
      tips: 'Complete "As Light Rain Falls Without Reason"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 4002,
              chapterId: 1402,
              chapterTitle: 'As Light Rain Falls Without Reason',
            },
          ],
        },
      ],
    },
    '170': {
      title: 'About Magic...',
      audio: 'VO_Aether_About_Magic',
      text: "#___: Lyney's magic shows are amazing! ___ never would've guessed how he did it before he revealed his secret.\\n___: Hold on... I just thought of a magic trick!\\n___: Huh? You know how to do magic too?\\n___: Yep. I can make a big magician's hat float in the air, and even make it move at my command.\\n___: Whoa! Really? How do you do that?\\n___: Hehe, simple! I put ___ inside the hat.\\n___: What? Why would ___ be... Ohhh, so ___'s the one making it float!\\n___: Hehe, in that case, ___ has an idea for an even better magic trick!\\n___: Huh? What is it?\\n___: Behold, the bottomless hat! No matter how many plates of delicious food you throw into it, it'll never get full!\\n___: Uh... Wait, so where would the plates go?\\n___: Oh, good point! Umm... Oh, the hat spits the empty plates back out! Tada! Whaddya think?",
      tips: 'Complete "As Light Rain Falls Without Reason"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 4002,
              chapterId: 1402,
              chapterTitle: 'As Light Rain Falls Without Reason',
            },
          ],
        },
      ],
    },
    '171': {
      title: 'About Patented Flying Technology...',
      audio: 'VO_Aether_About_Patented_Flying_Technology',
      text: "#___: Fontaine's aquabuses are pretty cool. But imagine if they could run without tracks. Then you could go anywhere you want pretty much without having to move a muscle! Traveling would be way less tiring.\\n___: But you already fly everywhere. Does that even get tiring?\\n___: Fly... Fly? Wait, that's it! If we could find a way to make the boats float in the air, then they wouldn't need rails anymore. Hehe, and we could call them \"airboats\"!\\n___: C'mon, let's go apply for one of those, uh... oh yeah — \"patents\"! We can't let ___'s genius go to waste. Quick, before someone else beats us to it!\\n___: Patents don't work like that... You can't just have a name for your invention. You also need to provide details of the original technical solution that makes your airboats float.\\n___: Technical, huh? Hmm... Okay, got it! We just need to attach a giant propeller on top of the boats!\\n___: Okay... But how would you prevent the boat from spinning along with the propeller? And how would you control the direction of movement?\\n___: Um... Uh... Ugh. ___ never realized flying was so complicated! It's always been second nature to ___...\\n___: Hmm... Well, there might be an easier solution if we ditch the direction and speed control requirements?\\n___: Huh? Really!?\\n___: Yeah. It involves starting at a high altitude and flying downwards at a rapidly-increasing velocity.\\n___: Hey! That isn't flying, that's free-falling!",
      tips: 'Complete "As Light Rain Falls Without Reason"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 4002,
              chapterId: 1402,
              chapterTitle: 'As Light Rain Falls Without Reason',
            },
          ],
        },
      ],
    },
    '172': {
      title: 'About the Dark Side of Publishing...',
      audio: 'VO_Aether_About_the_Dark_Side_of_Publishing',
      text: "#___: The Steambird's Great Detective Hurlock series is gonna be published by Yae Publishing House, right?\\n___: Seems like it.\\n___: But The Steambird clearly doesn't need help with printing and distribution. Why don't they just publish it themselves?\\n___: Hehehe, you still have a lot to learn about the dark side of the publishing industry...\\n___: Ugh, okay, you know-it-all! Go on then, give ___ one good reason why The Steambird can't publish its own novels, when it already publishes a newspaper that's read all over Teyvat.\\n___: Because the key to a successful light novel is...\\n___: Uh-huh?\\n___: The illustrations!\\n___: What!? No way. Try telling that to all the writers and editors in Teyvat! They're the ones working their butts off coming up with ideas!\\n___: Maybe so, but the Yae Publishing House has all the best illustrators on their payroll, and poaching them can't be easy. Artists like Calx must be virtually impossible to contact without going through them.\\n___: Ohhh... Yeah, that's a fair point.\\n___: Mm-hmm. But there's another reason, too...\\n___: Hm?\\n___: Only works published by the Yae Publishing House make it into Genius Invokation TCG crossovers!\\n___: Huh, ___ never knew!\\n___: That's the deepest, darkest secret of the publishing industry: It's not about stories anymore, it's about products and how to commercialize them.\\n___: Hmph! That's just... sickening!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '173': {
      title: 'About Armchair Detectives...',
      audio: 'VO_Aether_About_Armchair_Detectives',
      text: "#___: So apparently, some detectives in Fontaine manage to solve cases without ever setting foot outside their homes. They call them \"armchair detectives\"...\\n___: That's what they call \"working from home,\" right? Sounds pretty cushy.\\n___: Still, how do they figure out the truth if they never even go to the crime scene? ...Oh, ___ knows! They must be using divination.\\n___: You're thinking of fortune-tellers, ___. Not detectives.\\n___: Oh... yeah...\\n___: In any case, surely the evidence isn't just dropping itself off at the detective's doorstep.\\n___: You mean... Oh, the detective must have people collecting information for them...\\n___: Perhaps, or... Maybe they post commissions at the Adventurers' Guild?\\n___: Huh? But... that would mean the detective gets all the credit for our hard work! Bet they make a tidy sum of Mora off of it, too! Hmph, ___ won't stand for that. Let's go have a little talk with Detective Armchair right now!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '174': {
      title:
        'About the Mysterious Treasure of the Fontaine Research Institute...',
      audio:
        'VO_Aether_About_the_Mysterious_Treasure_of_the_Fontaine_Research_Institute',
      text: "#___: At the Fontaine Research Institute, they research clockwork and different energy sources, right? So how come there are rumors about a mystery treasure?\\n___: It'd make more sense if the treasure was owned by a bandit or a pirate.\\n___: But ___'s not sure that the researchers' and technicians' definition of \"treasure\" is really mysterious enough to get excited about...\\n___: Hmm... What about \"researcher by day, bandit by night\"? Does that sound mysterious enough?\\n___: Umm... Well for starters, it sounds exhausting. Imagine finishing your day job, then working a whole other job all night... When would they get time to rest?\\n___: Maybe they wouldn't need to rest... If they were actually a clockwork meka in disguise!\\n___: Ooh! A mystery treasure left by a clockwork meka who's a researcher by day and a bandit by night... Now that sounds more like it!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '175': {
      title: 'About the Big No-No of Detective Novels...',
      audio: 'VO_Aether_About_the_Big_No-No_of_Detective_Novels',
      text: "#___: Detective stories like \"Great Detective Hurlock\" and \"The Case Files of Miss Orith\" are really popular in Fontaine.\\n___: They're also pretty complex. Can you even follow the plot?\\n___: Don't you underestimate ___! If ___ read any of those novels, she'd definitely solve the mystery before she's even halfway through.\\n___: Okay, well if you do, then keep it to yourself. You don't want to spoil the story for anyone else.\\n___: ___ would never do that!\\n___: Although you also have to watch out for people who use \"no spoilers\" as an excuse to shut down discussions, when the truth is, they're just annoyed that a story they can't stand is getting so much attention.\\n___: Huh. Well, ___ doesn't read much, so she wouldn't know anything about that kinda thing.\\n___: You see it a lot when two fans of Onibudou get talking. Someone'll butt in and say something like, \"Stop, don't spoil it for me! I'm only up to chapter two of volume one!\"\\n___: Chapter two? Hah, yeah, clearly they have no intention of reading any further.\\n___: Hey ___... You wanna hear a secret?\\n___: Um... sure?\\n___: Listen carefully...\\n___: Mm-hmm?\\n___: ...Zhongli is Rex Lapis.\\n___: *gasp* What a crazy twist! Why would you spoil— Wait a second, we figured out that one ages ago!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 1025,
              questTitle: 'The Fond Farewell',
              chapterId: 1103,
              chapterTitle: 'A New Star Approaches',
            },
          ],
        },
      ],
    },
    '176': {
      title: 'About Claiming Self-Defense...',
      audio: 'VO_Aether_About_Claiming_Self-Defense',
      text: "#___: Pro tip. While we're in Fontaine, if someone ever picks a fight with you, you should never fight back unless there are witnesses around.\\n___: Huh? Why's that?\\n___: 'Cause without any evidence, the court'll probably reject your claim of self-defense, and they'll just rule that it was an intentional street fight.\\n___: Okay, and then what?\\n___: Well if that happens, you'll almost certainly end up having to duel before you're put to trial.\\n___: At that point, you'll either have to fight the same person all over again, or go head-to-head with their Champion Duelist.\\n___: ...___ just feels bad for whoever has to fight you.",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '177': {
      title: "About The Steambird's Editors...",
      audio: "VO_Aether_About_The_Steambird's_Editors",
      text: "#___: Pretty crazy how things that happened only yesterday show up in today's issue of The Steambird...\\n___: Even stuff that happened late at night way outside the city makes it in. How do they manage to get these articles written up so quickly?\\n___: Yeah, not to mention printed first thing in the morning.\\n___: Hehe, ___ gets it! There must be a magic printer at The Steambird's office. As soon as the reporters bring in the latest news, they feed it to the printer, and it goes om-nom-nom-nom-nom, gobbling all the writing up ready to spit it back out when it's printing time!\\n___: They probably have some reporters bursting in through the doors at the last minute, yelling \"WAIT! There's one last article to feed to the printer!\"\\n___: That's definitely a very compelling image. But as far as I know, magic printers like that don't exist — it's all thanks to the tireless work of the editing team that The Steambird gets printed on time every day. They sit there going \"Huh? Hmph! Uhh... Oh no!\" as they race through correcting spelling errors, then they squeeeeeeeze it all into neat vertical columns of text, and run to their colleagues shouting \"Just give me five more minutes, please!\" That's the real magic behind meeting publishing deadlines.\\n___: Whoa... It's pretty amazing that they're able to make a whole newspaper in just one day. Do they ever get time to sleep?",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '178': {
      title: "About Fontaine's Novels...",
      audio: 'VO_Aether_About_the_Big_No-No_of_Detective_Novels',
      text: "#___: Huh, novels in Fontaine have weirdly long names. This one's called \"Do Clockwork Meka Dream of Cogwheel Chiropractors?\"\\n___: But the writing style and themes are pretty different from Inazuma's light novels.\\n___: According to the synopsis, this novel is about a clockwork meka experiencing back pain due to bending over for extended periods. It finally gives in, quits its job as an illustrator, then goes on a long journey looking for a chiropractor to cure its mechanical spine...\\n___: That actually sounds pretty interesting.\\n___: But why a chiropractor, though? Wouldn't an engineer do the job better? They could just go to the Fontaine Research Institute, and save themselves the long journey.\\n___: Well yeah, but... Having met some of the engineers from the institute, ___ can see why they wouldn't want to...\\n___: Oh yeah, that's true. But anyway, even though the protagonist of the story is a clockwork meka, you can still tell that it was written by a human. Imagine if they got a real clockwork meka to write a novel... I wonder what they'd write about?\\n___: Hmm... How about this: \"I Awoke One Morning and Found Myself Human!\"\\n___: Hey, that's a good one, ___.",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '179': {
      title: 'About Trials and Shows...',
      audio: 'VO_Aether_About_Trials_and_Shows',
      text: "#___: The Opera Epiclese is used for both criminal trials and performances, so... wait...\\n___: Hmm? What's bothering you, ___?\\n___: Well, what if someone did a show about a criminal trial there? How would the audience be able to tell whether it's a real trial or not?\\n___: That's a very good question. Can you imagine the looks that the actor playing the criminal would get out on the street the following day? Everyone who recognized them would say \"Hey! Weren't you the one on trial yesterday!?\"\\n___: Yeah, exactly! It would get sooo confusing!\\n___: The actor would constantly be telling everyone: \"It was just a show, for goodness' sake! Stop treating it like it's real!\"\\n___: Hmph, well they'd only have themselves to blame. What do they expect, staging a show about a trial in the Opera Epiclese? Clearly they're just trying to confuse people. What a terrible idea.\\n___: Yeah, it is a terrible idea. What were you thinking, ___!?\\n___: Wait, what? Nothing! Just... what a terrible idea it would be if... someone... came up with that idea...",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '180': {
      title: 'About Fonta...',
      audio: 'VO_Aether_About_Fonta',
      text: "#___: Fonta tastes amazing, don't you think?\\n___: Yep. It's so refreshing, especially when you down the whole thing in one big gulp.\\n___: Can you buy a glass for ___? ___'s always wanted to try that thing.\\n___: What thing?\\n___: Just buy it, you'll see in a minute!\\n___: Glug glug glug glug...\\n___: Ahhhhh.\\n___: That's what those drunkards do after they clink their glasses together. ___'s been itching to try it for ages!\\n___: Don't imitate them, ___... It's not a good look on you.",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '181': {
      title: 'About Gardemeks...',
      audio: 'VO_Aether_About_Gardemeks',
      text: "#___: Gardemeks carry out whatever task they're programmed to do. So basically, they can do whatever you tell them to!\\n___: Got another bright idea, ___?\\n___: Yep! ___ needs a commission-handling Gardemek, a material-harvesting Gardemek, and a domain-exploring Gardemek...\\n___: Ooh, and a gourmet-chef Gardemek, too! Then we can sit back and enjoy our new, fully automated lifestyle!\\n___: They're extremely expensive to own and operate, though. And don't forget there's maintenance and repair costs as well.\\n___: Okay, lemme do some quick napkin-math here... Using a Gardemek, the average cost to harvest a single Mint would come to around 6,300 Mora...\\n___: What!? That's eye wateringly expensive...\\n___: ...Suddenly, ___ feels like we adventurers don't get paid enough for the high-value work we do!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '182': {
      title: 'About Diving...',
      audio: 'VO_Aether_About_Diving',
      text: "#___: Fontaine's underwater world is so pretty! There's so many kinds of fish that ___'s never seen before.\\n___: If only we could swim underwater in other places too.\\n___: Yeah, it's a real shame...\\n___: If you could go diving anywhere you wanted, where would you choose?\\n___: Hmm... Probably... either Liyue Harbor or Guyun Stone Forest.\\n___: Ooh, great idea! There's gotta be some sunken ships around there full of treasure! We could make a fortune!\\n___: Ooh, there's also Sangonomiya Shrine in Inazuma. The view underwater must be stunning around there. So, what about you, ___? Where would you go?\\n___: Let ___ think... Well, since you already chose places in Liyue and Inazuma, ___'s gonna go for... Cider Lake!\\n___: Not a bad choice. But you gotta be careful, because just when you're swimming along, minding your own business...\\n___: Y—Yeah?\\n___: Suddenly, you notice something slowly sinking in front of you...\\n___: Huh!?\\n___: It's round and chubby, with a red-and-white pattern on its surface. The moment you realize what it is, you know it's already too late...\\n___: A Jumpy Dumpty!\\n___: BOOM!\\n___: Waaaaaah! And ___ goes flying into the sky!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '183': {
      title: 'About Art...',
      audio: 'VO_Aether_About_Art',
      text: "#___: There seems to be a lot of eccentric artists in the Court of Fontaine. Apparently, they often stage artistic performances at the opera house, too.\\n___: The people of Fontaine sure place a lot of importance on the arts. Guess that's why they call it the \"City of the Arts\"!\\n___: It's nothing like Sumeru, where people had to do their performances in secret...\\n___: You're pretty into the arts, huh?\\n___: Of course! ___'s pretty much a connoisseur.\\n___: Okay, so what makes something \"art\" in your opinion?\\n___: Well... Art should be something that's out of the ordinary. Something that sparkles like the stars at night!\\n___: Hmm... By that definition, I have a work of art following me around wherever I go.\\n___: ...Huh?\\n___: Wait... You don't mean ___, do you?\\n___: Yup! And now that I think about it, you should consider doing a performance some time. ___, live at the opera house... I bet a lot of people would go to see that.\\n___: No way! Not gonna happen!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '184': {
      title: 'About Fixing Malfunctions...',
      audio: 'VO_Aether_About_Fixing_Malfunctions',
      text: "#___: You know what's strange? Clockwork meka are extremely intricate, and yet people regularly manage to fix them just by whacking them a few times. How does that work?\\n___: I guess if a gear or drive shaft comes loose, sometimes whacking it or giving it a shake is enough to make the parts latch back on to each other.\\n___: Huh? ___ didn't follow that...\\n___: Well, simply put, if the meka isn't actually broken, a little tap can nudge the parts back into the right places.\\n___: But on the other hand, if one of the parts is damaged, then no amount of whacking is ever gonna fix it.\\n___: Ohh! So it's like knocking sense into people. It works fine as long as they've got a brain, and they're just having a dumb moment. But if they're a total airhead, there's nowhere for the sense to go!\\n___: ...Wait, why are you staring at ___'s forehead?\\n___: Don't worry, I'm not gonna whack you in the head. It wouldn't work anyway.\\n___: Phew, well that's a relief— Wait... Hey!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '185': {
      title: 'About the Fortress of Meropide...',
      audio: 'VO_Aether_About_the_Fortress_of_Meropide',
      text: "#___: So there's this place in Fontaine called the Fortress of Meropide. Was it named after someone called Meropide?\\n___: I've never heard anything about that, but you could be right.\\n___: ___'s kinda envious. Having a building named after you must be an amazing feeling... When you have the time, can you build something in your Serenitea Pot and name it \"the Fortress of ___\"?\\n___: Sure. In fact, I can do one better — I'll build it in downtown Fontaine.\\n___: Really? But surely that'd be way too expensive. Are you sure you can afford it?\\n___: Oh, absolutely. It won't actually cost that much.\\n___: Wow, you're so generous! So, what're you gonna build...?\\n___: I was thinking a cozy little clay... bungalow, with a wood-burner for under-floor heating, a waterbed... a few chopped onions, salt and pepper, some greens... and, um...\\n___: Hey! Ugh, you are unbelievable! Can't we get through one nation without you cracking this stupid joke!?",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: [
        {
          type: 'finishSubQuest',
          questList: [
            {
              id: 11008,
              questTitle: 'A Teapot to Call Home: Part I',
            },
          ],
        },
      ],
    },
    '186': {
      title: 'About Supermeka...',
      audio: 'VO_Aether_About_Supermeka',
      text: "#___: ___'s heard that the earliest clockwork components ever invented actually work on a very simple principle!\\n___: You take a long object made from a durable material, bend it, and wait for it to return to its original shape. As it rebounds, you can use the energy it gives off to power gears and stuff, and then you basically have an engine!\\n___: Hmm... A long object made from a durable material... *gasp* You know what that reminds me of?\\n___: Cryo and Pyro Regisvines! Don't you think?\\n___: Eek! Of all the things you could've thought of, why those two?\\n___: Huh, but come to think of it, the regisvines are pretty good at whipping their stalks around...\\n___: And they're really strong too. If you let them charge up their energy and swing at you...\\n___: They'll knock down anyone in their path. Even me — and we both know how strong I am!\\n___: So are you saying that... you could turn the Regisvines into a clockwork mechanism?\\n___: Well, think about it. Since Cryo and Pyro lifeforms are highly incompatible, if we put them both next to each other at a slight incline, so their necks are tilted towards one another...\\n___: They'd spin non-stop to avoid touching each other!\\n___: It would be the world's most powerful clockwork mechanism! Once we found a way to harness it, it would generate enough energy to power most of the machines in Fontaine!\\n___: Ohhh! Yeah, you're right!\\n___: This is a genius idea! Eat your heart out, Fontaine Research Institute!\\n___: All we need to do now is find a way to bring the Regisvines to Fontaine, put them in position, and...\\n___: Wait a sec... How the heck are we gonna get those overgrown ferns to Fontaine?\\n___: As soon as we've tackled the minor issues of practicality and cost-effectiveness...\\n___: ...How about we explore the details ahead of us later?",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '187': {
      title: 'About Underwater Cafés...',
      audio: 'VO_Aether_About_Underwater_Caf_s',
      text: "#___: ___ thought we'd be saying goodbye to the amazing cafés after we left Sumeru. But it seems like people in Fontaine are big coffee drinkers too!\\n___: They sure are. Even the newspapers run articles about how great coffee is at keeping you awake and alert. And at boosting your energy levels, so you can keep performing at peak efficiency during a long working day.\\n___: Whew, any job where you need coffee to stay energized must be exhausting...\\n___: Like, umm... Blacksmiths? Maybe chefs too... And adventurers — they're always running around all over the place. Hey, and what about divers?\\n___: Divers, huh? That's definitely the odd one out here...\\n___: How are divers supposed to drink coffee when they work underwater the entire time?\\n___: Yeah, that's a good question!\\n___: They can't take off their helmets underwater, so they'd probably have to shut themselves inside an even bigger glass box and drain all the water out before they could finally drink their coffee. Probably from a bottle...\\n___: No, wait... If the coffee's already in a bottle, all they'd need is a long straw that goes from the bottle into their helmet. Then they'd be able to take a sip of coffee whenever they want!\\n___: Hehe, eww, haha. But then the coffee would go cold!\\n___: Cold coffee is just gross. With the important exception of iced coffee, but that's its own thing.\\n___: Well that's no problem. They can just bring a stove with them underwater.\\n___: You've seen the kind of stove that most people use in Fontaine, right? It only has one small opening up at the top. As long as that's sealed nice and tight, it won't go out even underwater!\\n___: Wait a second... No way, is that... That's it! That must be the whole reason stoves in Fontaine are made that way!\\n___: Ding ding ding, right answer! That is indeed the reason behind the design of the Fontaine-style stove.\\n___: Hehe, ___'s the smartest!\\n___: Hey, how about we open an underwater café? ___ bets there's lots of divers out there craving some coffee while they're down in the depths... Yeah, this could be a huge opportunity for us!\\n___: Once we open the world's first-ever underwater café, the Mora will come rolling in! Heck, and why stop at cafés? The ocean's our oyster! We could build a whole shopping mall down there! Then a whole underwater business district...\\n___: Hee-hee! Ah, it's gotta be the best feeling in the world, making Mora through your very own stroke of business genius!\\n___: Just one thing, okay? ...Don't go taking out a loan in my name!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '188': {
      title: 'About The Steambird...',
      audio: 'VO_Aether_About_The_Steambird',
      text: "#___: The Steambird's head office is in Fontaine, right? ___ wonders what stories make it into their newspapers.\\n___: Do you think they reported on our adventures with Dvalin? Or our duel with the Raiden Shogun? Oh, and everything that happened at the Akademiya!\\n___: I'm sure they cover just about everything that goes on. It's more a question of where it would appear — they probably have different sections reserved for different topics.\\n___: Ooh, well in that case, we must make it onto the front page all the time! Surely that's where all the most exciting stories go.\\n___: Hmm... I'm not so sure. We might've made front-page news once or twice, I guess. But I wouldn't be surprised if the headlines focus mostly on hit new operas or well-known actors.\\n___: You know, stuff like, \"Actor X Spotted Drinking Coffee on Street,\" \"Actor Y Goes Public About New Relationship,\" or \"Actor Z to Retire From Performing.\"\\n___: Why would they fill the best page with stuff like that? It's completely pointless.\\n___: Well... trivial, maybe, but not pointless. Those are the stories that grab people's attention and convince them to buy the paper to get all the details.\\n___: *sigh* ...Fine. Well... Maybe we'll be on the first few pages then? Surely, they've gotta put some real news in there. And it's gotta be interesting enough to keep people reading after they've gotten their dose of celebrity gossip. Right?\\n___: The first few pages cover positive local news stories in the Court of Fontaine. Things like food and commodity prices going down, or progress updates on the aquabus expansions.\\n___: They put these reports at the most prominent locations inside the newspaper. The point of them is mostly just to kill time.\\n___: What goes on at the Akademiya might be important, but it doesn't directly impact the lives of people in Fontaine.\\n___: Huh... So, where would they put our stories then?\\n___: I'd guess on the very back page, after everything else.\\n___: Aww... Why so far back!?\\n___: I think they call it... \"saving the best till last.\"\\n___: The editors probably embellish things a lot to flesh the story out, then break it into several chunks to make it into a series that runs over several days.\\n___: Alright, so... what's the \"point\" of the final page, then?\\n___: It gives the newspaper its \"raison d'etre.\"",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 2021,
              chapterId: 1204,
              chapterTitle: 'Omnipresence Over Mortals',
            },
          ],
        },
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 3012,
              chapterId: 1302,
              chapterTitle: 'The Morn a Thousand Roses Brings',
            },
          ],
        },
      ],
    },
    '189': {
      title: 'About Clockwork Meka...',
      audio: 'VO_Aether_About_Clockwork_Meka',
      text: "#___: ___ was not expecting to see clockwork meka dancing... As dangerous as it is to get too close to them, it sure is nice to watch them from a distance.\\n___: Hehe, imagine if they had ones that could sing and play musical instruments, too. That'd be really cool!\\n___: Then you'd just need some meka for the audience, and you'd have a show by meka, for meka.\\n___: Uhhh... Somehow, that's a pretty scary thought...\\n___: Anyway, meka are meant to do stuff, not sit there and watch a show... Ooh! How about meka that can paint? ___ bets their paintings would look just like photos taken with a Kamera.\\n___: Sounds like you could just use a Kamera.\\n___: Oh, right, yeah... Hmm...\\n___: Ugh, ___'s brain's stopped working. What about you? If you could make a clockwork meka do anything at all, what would it be?\\n___: Hmm... Travel guiding, perhaps.\\n___: Bleep-blorp. This is your guidebot speaking. Please go straight on at the next crossroads. Bloop-blerp.\\n___: Uh, P—___'s just remembered how much training you need before you can own a clockwork meka! And how expensive they are! Also, who knows if they even work outside of Fontaine, heh...\\n___: The best travel guide in Teyvat will not lose her job to some machine! At least... at least not yet!",
      tips: 'Unlock the "Erinnyes" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '190': {
      title: 'About Fountains...',
      audio: 'VO_Aether_About_Fountains',
      text: "#___: There always seems to be people throwing Mora into the fountain on Erinnyes.\\n___: Yeah. Supposedly, the fountain fairies listen to people's wishes. That's probably how the custom began.\\n___: Huh? So even fountain fairies need Mora?\\n___: Whoa, they must be living the dream! All they need to do is find a fountain to live in, and they're all set! No need to work, just sit back and wait for people to literally throw Mora to you.\\n___: I don't think that's quite how it works... You have to grant wishes, remember?\\n___: Oh, okay, well... \"Oh young traveler, your wishes have been heard. Which lost sword is it that you seek? The Dull Blade, or the Silver Sword?\"\\n___: They both look like trash, to be honest.\\n___: Just choose one.\\n___: \"Oh fair maiden of the fountain, neither of these swords is mine, and neither do I desire, for what I seek is my lost travel companion.\"\\n___: Huh? You... You are a sneaky one, young traveler... Okay then, the fountain fairy shall grant your wish and become your best travel companion ever!",
      tips: 'Unlock the "Opera Epiclese" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '191': {
      title: 'About Opera...',
      audio: 'VO_Aether_About_Opera',
      text: "#___: Operas in Fontaine come in so many different genres. Historical, myths and legends, even fairytales and modern romances...\\n___: And lots of adventure stories too.\\n___: Oh yeah, like \"Tancrede et Chariclea\"! Oh Tancrede, you fool! If only you'd recognized Chariclea before it was too late...\\n___: Apparently, the story's based on true events.\\n___: Ooh... Does that mean that there'll be opera adaptations of our adventures one day?\\n___: We've been through so many adventures together. There's gotta be a scriptwriter out there who's interested in taking our story to the stage!\\n___: And they won't have to worry about crafting the perfect tragedy, either. Everyone loves a happy ending, right?\\n___: Ooh, how about we get a head start and assign voices to ourselves?\\n___: Hmm... ___ thinks you have a baritone voice. What do you think ___ should be?\\n___: Remind me — what's that shrill voice that most prima donnas have?\\n___: Oh, you must be thinking of coloratura soprano— Hey!",
      tips: 'Unlock the "Opera Epiclese" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '192': {
      title: 'About Melusines...',
      audio: 'VO_Aether_About_Melusines',
      text: "#___: Apparently, every Melusine gets their own special token when they're born. They treat it as a symbol of their very being.\\n___: If you were a Melusine, what would your token be?\\n___: Definitely a fork! To represent ___'s lifelong mission to taste all the delicious food in the whole world!\\n___: Not Mora, then?\\n___: Ooh, good point... Yeah, if it were Mora, it'd mean that ___'s destined to be a super rich person. Then ___ could buy anything she wants!\\n___: Hmmmmm... Argh, ___'s so torn! Both are so tempting...\\n___: How about a fork made from Mora? Then you can have your cake and eat it, so to speak.\\n___: Wow, that's a great idea!\\n___: Anyway, enough about ___. Your token would probably be... a cooking pot, to represent being ___'s personal gourmet chef!\\n___: No no no, my token would be ___.\\n___: Aw, really?\\n___: With ___ as my token, everything that you have would ultimately belong to me.\\n___: Uh... Okay sure. Friends share everything, right?\\n___: Haha, yeah... My stuff would still be mine...\\n___: Hey, no fair!",
      tips: 'Unlock the "Merusea Village" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '193': {
      title: 'About the Palais Mermonia...',
      audio: 'VO_Aether_About_the_Palais_Mermonia',
      text: "#___: People in the city keep telling us how Palais Mermonia is a suuuper stressful place to work.\\n___: But when we went to see it for ourselves, it seemed like hardly anyone works there, and the few people who do work there were hardly working.\\n___: In fact, they looked like they didn't have a care in the world... What part of working there is supposed to be so stressful, exactly?\\n___: Maybe the work they carry out is essential, but insignificant.\\n___: How can something be both of those things at the same time?\\n___: Well... Okay, so imagine that one day, you suddenly forgot how to fly and fell to the ground...\\n___: That'll never happen. Flying's a piece of cake for ___.\\n___: Probably not — but just in case, we should make sure that there's a cart loaded with cushions ready to catch you at all times.\\n___: The cart would have to be designed to withstand any environment and weather conditions, and the cushions would need to be soft enough to break your fall gently...\\n___: It would need to be built from the sturdiest timber and strongest rope, and packed with plenty of medical supplies and snacks...\\n___: And all because keeping ___ safe and sound is absolutely essential.\\n___: You really mean that? Aw, thanks, hehe... But there's really no need to go to all that trouble.\\n___: ___'s been flying for a really long time. There's no way ___'s gonna suddenly drop out of the air. So you don't need to worry about it.\\n___: See? That's why it's insignificant.\\n___: If it ever did happen, the consequences would be disastrous — hence why it's essential to be prepared.\\n___: But practically speaking, the chances of it happening are next to nothing. So it's insignificant at the same time.\\n___: If someone in the Palais Mermonia was assigned a task like that, it'd be up to them to decide how busy they wanna get. Chances are, they'd probably just sit back and do nothing.\\n___: But... What if ___ really does forget how to fly one day? What's gonna happen when ___ falls to the ground?\\n___: I'll be here to catch you, no matter what. Because you're not \"essential but insignificant\" — you're the best travel companion ever!",
      tips: 'Unlock the Statue of The Seven (Hydro) at the Palais Mermonia in Fontaine',
      tasks: null,
    },
    '194': {
      title: "About the Children of Echoes' Gems...",
      audio: "VO_Aether_About_the_Children_of_Echoes'_Gems",
      text: "#___: Hey, so the valleys here are just bursting with shiny gemstones!\\n___: This could be a huge opportunity for us! We should get digging ASAP. With any luck, we'll hit the jackpot and we'll never have to worry about Mora again!\\n___: Hmm... But how would you actually know when you've hit the jackpot? Can you even tell which stones are the valuable ones?\\n___: Uhh, well... ___ just figured... the shinier the stone, the more valuable it is! Yeah, that should be about right!\\n___: You're starting to sound like an evil fairytale dragon, hoarding all the shinies they can get their greedy claws on...\\n___: Hehe, except we're in Natlan now — so instead of \"evil dragon,\" it's \"noble Saurian\"!\\n___: \"O brave and cunning ___, follow this noble Saurian, for she shall lead you to the most precious gemstone in the entire world!\"\\n___: Great! Except she can't tell which stones are the valuable ones, so how's that gonna work?",
      tips: 'Unlock the "Children of Echoes" Teleport Waypoint in Natlan',
      tasks: null,
    },
    '195': {
      title: 'About the Scions of the Canopy...',
      audio: 'VO_Aether_About_the_Scions_of_the_Canopy',
      text: "#___: The Scions of the Canopy sure do love their extreme outdoor sports. Seems like they have a real appetite for danger.\\n___: Free solo climbing, skysurfing, volcano parkour, bungee jumping off cliffs... Whew, even the thought of it makes ___ light-headed!\\n___: Really? Honestly, some of the stuff we've done is at least as dangerous as that... We froze half to death on Dragonspine, narrowly avoided being fried in all those thunderstorms, got sandblasted in the scorching desert, stared death in the face in those eerie Withering Zones... The list goes on.\\n___: Huh, when you put it like that... Yeah, we've been through some pretty extreme stuff.\\n___: Mhm, but we're built different. Most people's idea of \"danger\" is probably just an average day on the road for us. That's probably how it is for the Scions of the Canopy with their extreme sports as well.\\n___: Whoa, wait a second! Let's get one thing straight: YOU might be built different, but ___ sure as heck isn't.\\n___: Now, ___'s sure you and your danger-braving buddies know what you're doing, but the second we find ourselves in serious trouble, ___'s gonna... hide behind you until it's over.",
      tips: 'Unlock the "Scions of the Canopy" Teleport Waypoint in Natlan',
      tasks: null,
    },
    '196': {
      title: 'About the Hot Springs of Natlan...',
      audio: 'VO_Aether_About_the_Hot_Springs_of_Natlan',
      text: "#___: The People of the Springs are so chill. If they're not relaxing in a hot spring, they're planning their next big soak...\\n___: Apparently, some of them even hire musicians to play some relaxing music while they take a dip. The warm water relaxes the body, and the soothing music relaxes the mind...\\n___: Whoa, that sounds so nice, ___ wants to try it for herself...\\n___: Alright. Well, next time you visit the hot springs, I'll play some Aranara music for you.\\n___: Ooh~ ...Um, but ___ doesn't play any instruments, so what happens when it's your turn to go in the spring?\\n___: You can sing me a song. Maybe... an opera from Fontaine?\\n___: That's way too hard! Also — not exactly relaxing! That kind of music will put your blood pressure through the roof!\\n___: How about some Natlan rap instead? ___'s been practicing, check this out:\\n___: \"Hey! Flyin' in your face, it's ___ the guide, no stranger to danger, takes it in her stride...\"\\n___: \"Saw a beast called blubber in the nation of water, my Guhua brother got his weapons in order, sword in one hand and a spear in the other...\"\\n___: Wow, very smooth!\\n___: If I was listening to that in a hot spring, I'd be tapping the water to the beat like a drum.\\n___: Yeah, it'd be like a big music festival! And anyone who's late to the party, the rhythm of the water would get them right into the groove!\\n___: Uhhh... Wait, didn't we start this by saying how the hot springs are meant to be relaxing?",
      tips: 'Unlock the "People of the Springs" Teleport Waypoint in Natlan',
      tasks: null,
    },
    '197': {
      title: 'About the Collective of Plenty...',
      audio: 'VO_Aether_About_the_Collective_of_Plenty',
      text: "#___: Don't you think those masked warriors look super cool?\\n___: Yeah, really gives them an air of mystery.\\n___: Right!? Don't you think ___ should get in on this too? Put on a mask and win some wrestling matches with the Collective of Plenty? She could make a whole new name for herself!\\n___: ___'s even thought of some catchphrases, get this: \"A saurian warrior never removes her mask!\"\\n___: Famous adventurer by day, mighty saurian warrior by night. Does that sound cool or what!?\\n___: Yeah, it does, but there's just one problem...\\n___: Hmm? What's that?\\n___: You'll just look like ___ in a mask. No air of mystery there.",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '198': {
      title: 'About Woven Goods...',
      audio: 'VO_Aether_About_Woven_Goods',
      text: '#___: Here in Natlan, they seem to use woven scrolls where most nations would use books. It feels so different reading off of them.\\n___: Yeah. They say it started with the Masters of the Night-Wind, when the Shamans began recording their tribal history and legends on woven material. As the practice became more widely adopted, the number and variety of stories grew.\\n___: Ooh, ___ should make a record of all our adventures as well! That way, if you ever start a tribe called the Travelers, you\'ll have your very own historical record!\\n___: Plus, it could make a really cool cape. And an extra blanket when you\'re camping in the wild...\\n___: That would make for one "weathered" chronicle.',
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '199': {
      title: 'About the Collective of Plenty and the Flower-Feather Clan...',
      audio:
        'VO_Aether_About_the_Collective_of_Plenty_and_the_Flower-Feather_Clan',
      text: "#___: ___'s heard that everyone from the Collective of Plenty is built like a bricklayer!\\n___: Maybe you should go stay with them for a while. Grow those muscles out.\\n___: No! ___ likes herself the way she is now.\\n___: Okay, then what about staying with the Flower-Feather Clan instead? Their thing is flying. I bet they could help you sharpen your skills!\\n___: Huh? But... isn't ___ good enough at flying already?\\n___: Yeah, but then you'd be able to carry me when you fly.\\n___: Nope, not happening! How would that even be possible?\\n___: Well, if you had those muscles I talked about...\\n___: Oh, geez, not this again... For the last time, no!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '200': {
      title: 'About Ways to Make Friends With Saurians...',
      audio: 'VO_Aether_About_Ways_to_Make_Friends_With_Saurians',
      text: "#___: Oooh, there are so many cute Saurians in Natlan! ___'s gonna make friends with every single one!\\n___: Oh? Someone sounds confident...\\n___: You bet! ___'s got it all figured out!\\n___: Oh you do, huh? Come on then, what's the secret to making Saurian friends?\\n___: It's really simple! First, you've gotta sweet-talk them, show 'em you mean well so they relax their defenses. Then, you gently pat them on the head — that makes them feel more comfortable around you.\\n___: Last but not least: Get 'em some good grub! The way to a Saurian's heart is through the stomach, after all! What do you think? Solid plan, huh?\\n___: Hmm, what do I think... I think that all of these tactics would also work really well on you, ___.\\n___: Would not! ___ can't be won over by some cheap tricks!\\n___: Huh? Oh, you misunderstand! I meant to say that you're as cute as a baby Saurian!\\n___: Hah! Flattery, really? You think that'll work on ___? Think again!\\n___: But I was being sincere, ___! Ah, how can I prove it to you? With some Sweet Madame, perhaps?\\n___: ...Wait, really? Sweet Madame? Oh, heck yes! ___ could totally go for some of that right now!\\n___: ...Uhh... What's with that smug look on your face? ...What!? Is ___ missing something?",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '201': {
      title: 'About Archaeology...',
      audio: 'VO_Aether_About_Archaeology',
      text: "#___: Word is that speed's of the essence when doing archaeology work with the Children of Echoes. Why's that?\\n___: It's probably because this place is absolutely overflowing with relics...\\n___: Uh, but isn't that a good thing?\\n___: Well, more relics means more competition! Imagine you saw a really cool stone slate one day, and planned to come back and grab it the day after — only to show up the next day and find someone else had already beaten you to it!\\n___: Um, ___ still doesn't get it...\\n___: Okay, here's another analogy: Imagine one night you're all ready to dig in to a delicious snack... but then you find a piece of it's missing!\\n___: Ahh! Yeah, that'd be terrible!\\n___: ...Wait a sec, that's exactly what happened last night... Anything you wanna confess, ___?",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '202': {
      title: 'About Resolving Conflicts...',
      audio: 'VO_Aether_About_Resolving_Conflicts',
      text: "#___: ___'s heard that even in Natlan, there are lots of ways to resolve conflict that don't involve contests of strength.\\n___: Really? In the Nation of War?\\n___: Yeah! Like, apparently, some people in the Children of Echoes settle their disputes by holding a dance-off!\\n___: A dance-off? So, they mutually decide on a time and place...\\n___: Uh-huh!\\n___: And just dance their socks off?\\n___: Mm-hmm!\\n___: Until one person gets so exhausted, they can't get up anymore?\\n___: Yep!\\n___: ...Wait, what the... Hold on, that IS a contest of strength!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '203': {
      title: 'About Ways to Make a Fortune...',
      audio: 'VO_Aether_About_Ways_to_Make_a_Fortune',
      text: "#___: Guess what? ___ just thought of the best Mora-making idea ever!\\n___: Oh? Do tell.\\n___: Just look at how many people pass by this place every day. If we opened a business here, right outside the Stadium, we'd make a fortune without even trying!\\n___: So... What would you sell?\\n___: Uhhh... maybe... alchemical potions from Mondstadt?\\n___: I think there's already people selling similar stuff...\\n___: In that case, ummm... Ooh! Ores from Liyue! Yeah, we could make a killing off of those!\\n___: Pretty sure the Children of Echoes are already in that business, too...\\n___: Yeah... Wait, ___'s got it — rugs from Sumeru! Those'll definitely be a hit!\\n___: Unfortunately, that's the specialty of the Masters of the Night-Wind.\\n___: Well then... we'll fence the whole Stadium up! And charge an admission fee to everyone who tries to get inside, whether they're a contestant or a spectator!\\n___: You'll be locked up before your fence is even half-finished...\\n___: Grrrrrrrr! Why does getting rich have to be so hard?",
      tips: 'Complete "Black Stone Under a White Stone"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5007,
              chapterId: 1501,
              chapterTitle: 'Black Stone Under a White Stone',
            },
          ],
        },
      ],
    },
    '204': {
      title: 'About Saurian Stylists...',
      audio: 'VO_Aether_About_Saurian_Stylists',
      text: "#___: ___ will never forget the first saurians we saw in Natlan. They're just fascinating creatures.\\n___: There was the Tepetlisaurs with their bouncy heads, the Koholasaurs with their smooth backs, and then the Yumkasaurs with their fluffy ears and heads.\\n___: I bet a baby Yumkasaur would make the best teddy bear...\\n___: Yeah... Hey, their fur probably keeps growing out as they get older, right? Do you think it starts getting in the way eventually?\\n___: Like, imagine if a Yumkasaur had really long fur around the ears and head... they'd barely be able to see where they're going. And that could be kinda dangerous...\\n___: You seem to have thought a lot about this. Are you planning on becoming a saurian hairstylist?\\n___: Uh... Are you serious?\\n___: Just think about it. Once you get famous, you'll be rolling in Mora!\\n___: Oh... You're right! This is it, this is how ___ makes her fortune!\\n___: ___'s gonna become the hairstylist for every Yumkasaur in Natlan! Hehehe, so much Mora...\\n___: No, wait, the Mora's secondary! The best part of this plan is making friends with all the Yumkasaurs! Life will be sooo happy!\\n___: But they're big, you know. It's gotta take a long time to style all that fur with just an ordinary pair of scissors. You might find you can only take one customer per day...\\n___: If you're serious about this stylist business, you'd better start building some strength! At the very least, aim to lift a pair of scissors as big as the Dull Blade!\\n___: The Dull Blade? But isn't that your weapon?\\n___: Yeah, but I can let you borrow it for training. Come on! Let's get practicing!\\n___: Hey... This isn't \"training,\" this is \"give ___ the sword and let her fight the monsters instead\"! ___ did not sign up for this!",
      tips: 'Complete "Black Stone Under a White Stone"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5007,
              chapterId: 1501,
              chapterTitle: 'Black Stone Under a White Stone',
            },
          ],
        },
      ],
    },
    '205': {
      title: 'About Ancient Names...',
      audio: 'VO_Aether_About_Ancient_Names',
      text: '#___: So in Natlan, warriors who impress the Wayob enough get an Ancient Name. ___\'s so jealous! Having an Ancient Name would be so cool!\\n___: Huh? Don\'t you already have a bucket load of titles, ___?\\n___: Hmm? Oh wait... Yeah, you\'re right!\\n___: ___\'s your "best travel companion" and "trusty guide," plus she\'s the "Trendy Flyer," "Silver Companion," and "Assistant to the Honorary Senior Researcher"... Heck yeah, ___\'s an actual legend!\\n___: If the people of Natlan end up making a record of our adventures, ___\'s gonna make sure they use every single one of those titles!\\n___: Huh? But wouldn\'t that make everything too long?\\n___: Just think about it. If the locals also used all of their names, records would look something like:\\n___: On this day, "Uthabiti" Kachina of the Children of Echoes, otherwise known as the Nanatzcayans, and "Umoja" Mualani of the People of the Springs, of Meztli fame, encountered "Malipo" Kinich of the Scions of the Canopy of Huitztlan, traveling alongside his impish partner, K\'uhul Ajaw, while on their way to the Masters of the Night-Wind in Mictlan...\\n___: Okay, okay, you can stop now! Geez, with a document that long, it\'d stretch from here to the Stadium and back... and that\'s before it even got to the point!\\n___: Well, if ___ had to pick just one out of all her titles... Yep, it\'d have to be: "Best companion ever"!',
      tips: 'Complete "Black Stone Under a White Stone"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5007,
              chapterId: 1501,
              chapterTitle: 'Black Stone Under a White Stone',
            },
          ],
        },
      ],
    },
    '206': {
      title: 'About the Stadium of the Sacred Flame...',
      audio: 'VO_Aether_About_the_Stadium_of_the_Sacred_Flame',
      text: "#___: So just between the two of us... ___'s been wondering about something. It's to do with the competitions at the Stadium.\\n___: You know how there's a point system? First everyone fights in teams, then for the teams that make it through, there's a set number of one-on-one matches, and after that, everyone's ranked based on their final scores.\\n___: Why did they structure it like that?\\n___: Maybe it's to maintain suspense until the final round? Everyone loves to see the underdog make a comeback at the last minute.\\n___: Could be, could be... Or maybe it's because they wanna avoid a situation where there's only two contestants and they're evenly matched?\\n___: Yeah... They'd end up having to call it a draw and quit.\\n___: Exactly! It'd be like pitting the most aggressive Tatankasaur against the most slippery Yumkasaur. Tatankasaur attacks, Yumkasaur dodges, and so on and so forth, until a whole day and night has passed...\\n___: By this point, the audience is starving, so they end the fight and agree to a round two some other time.\\n___: But round two comes and goes, and there's still no clear winner. This time, the fight only ends because the Yumkasaur makes an illegal surprise attack and injures the Tatankasaur.\\n___: ...Before long, we've ended up with \"Tatanka vs. Yumka,\" \"Tatanka vs. Yumka 2,\" \"Tatanka vs. Yumka: Return of the Sacred Scales,\" \"Tatanka vs. Yumka: Over the Volcano\"... and the sequels show no signs of stopping.\\n___: ...Wait, we should totally get those made into a film series! We'd make a ton of Mora.\\n___: Not a bad idea... Although, I don't think the Scions of the Canopy would be too happy about you making their Saurian the villain!\\n___: Alright, well you pitch an idea then, if you're such a film critic!",
      tips: 'Complete "Black Stone Under a White Stone"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5007,
              chapterId: 1501,
              chapterTitle: 'Black Stone Under a White Stone',
            },
          ],
        },
      ],
    },
    '207': {
      title: "About Natlan's Adventurers...",
      audio: "VO_Aether_About_Natlan's_Adventurers",
      text: "#___: The Natlanese don't seem to leave Natlan much, do they?\\n___: Nope, and there are some good reasons for that.\\n___: Hmm... That must make things pretty difficult for anyone who wants to be an adventurer, huh?\\n___: Think about it — if they can't go to other nations, they miss out on a ton of potential commissions. If they can't go exploring unknown ruins, surely they can't make a whole lot of Mora... It's too bad.\\n___: You'd think so, wouldn't you? But in fact, they've found ways around it.\\n___: Huh?\\n___: I've heard of a group in the People of the Springs who call themselves \"wayfinders.\" They have a wealth of knowledge about Natlan's geography and ancient ruins, so a lot of foreign adventurers hire them as guides when they visit.\\n___: Of course, that means they get paid for each trip, regardless of whether their client actually finds the treasure. So in the long run, they might actually earn more than a traditional adventurer would.\\n___: Wow, okay... But wait — if they know so much about Natlan's ancient ruins, why don't they just go find the treasure themselves?\\n___: Well, here's the thing... What if there never was any treasure to begin with?\\n___: Whoa... Okay, ___'s gonna need a minute to let that sink in...",
      tips: 'Complete "Black Stone Under a White Stone"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5007,
              chapterId: 1501,
              chapterTitle: 'Black Stone Under a White Stone',
            },
          ],
        },
      ],
    },
    '208': {
      title: 'About Graffiti...',
      audio: 'VO_Aether_About_Graffiti',
      text: '#___: The Natlanese seem to do a lot of doodling everywhere. Except they don\'t call it "doodling," do they? They call it, uh... flow-something?\\n___: "Phlogiston engraving." But strictly speaking, that refers to the engraving of special stone tablets. What you\'re talking about is just regular graffiti.\\n___: Take this one, for example. It basically just says, "You\'re in Nanatzcayan territory now! Children of Echoes for the win!"\\n___: That\'s pretty fun! Now ___ wants in. Shall we do some graffiti of our own?\\n___: We sure can. But what do you think we should draw?\\n___: Well that\'s easy — a portrait of the best travel guide in all of Teyvat! Now let\'s see... Ah, there! Put it right there on that cliff face.\\n___: So you want me to do the honors, huh? Alright then, lemme think about this... Yep, first we need to capture that classic ___ facial expression: seething with rage...\\n___: Mhm-hmm— Wait, what!? Grr... You know what, forget it! ___ has decided to find a professional Natlanese graffiti artist instead!',
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '209': {
      title: 'About Saurian Companions...',
      audio: 'VO_Aether_About_Saurian_Companions',
      text: "#___: The Natlanese seem to have a genuinely close relationship with their saurians.\\n___: Yeah! They're true companions, just like us. Inseparable wherever they go!\\n___: So... let's say there was a competition between you and the saurians. Who do you think would win the title of champion companion?\\n___: Huh? What sort of a question is that!?\\n___: I mean, the more I think about it, it's like... You can't burrow into the ground like the tepetlisaurs, and you don't fly as fast as the qucusaurs...\\n___: H—Hey! Y—You're thinking about this all wrong! For starters, ___ flies way faster than any tepetlisaur, and she's better than the qucusaurs at, uh... at picking out the tastiest Chicken-Mushroom Skewer from the grill!\\n___: And most importantly of all, ___ has been at my side longer than any saurian.\\n___: Exactly! Let's not forget who's the best travel guide in all of Teyvat, hehe!\\n___: Alright, my trusty companion, shall we set off on our next adventure?\\n___: Um, actually, now that ___'s mentioned it, she feels like her Chicken-Mushroom-Skewer-picking-out skills have gotten a little rusty... C'mon, you should cook up a few so ___ can practice!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '210': {
      title: 'About Ajaw...',
      audio: 'VO_Aether_About_Ajaw',
      text: "#___: ___'s been dying to hear your thoughts about this... What is the deal with Ajaw? And don't say you haven't noticed.\\n___: Noticed what?\\n___: ...! Try everything! He's completely different from every other Saurian! For starters, he can talk — matter of fact, he never shuts up! Also, he's always hovering around Kinich instead of walking on the ground. Oh, and don't get ___ started on those stupid sunglasses! Why would a Saurian wear sunglasses? It doesn't make any sense!\\n___: Hmm...\\n___: Why are you looking at ___ like that...?\\n___: It's just... You talk a lot too, and you fly, plus... didn't you get yourself a pair of silly-looking glasses in Fontaine?\\n___: ...That is completely different!\\n___: But anyway, there's a more glaring issue here... Ajaw is flat as a pancake! He's floating around looking like a little cardboard cutout, and no one in Natlan bats an eyelid! Don't you think that's strange?\\n___: It's definitely unusual. Then again, maybe everyone's just used to it by now.\\n___: Ultimately, it nobody's business but Ajaw's, so if you want answers, you'd probably have to ask him.\\n___: But would he even tell us the truth? ___ gets the feeling he'd just make up a bunch of phony-baloney to get us off his case...\\n___: *gasp* Or maybe... He'd be like, \"Okay, if you really wanna know... I'll show you!\" And then poof! He'd turn us into cardboard cutouts too!\\n___: Heh... Cardboard-cutout ___, now that I would love to see, hehehe...\\n___: Hey... Cut it out! ___ doesn't wanna be flat as a pancake...",
      tips: 'Complete "Yupanqui\'s Turnfire"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 15004,
              chapterId: 2054,
              chapterTitle: "Kinich's Deal",
            },
          ],
        },
      ],
    },
    '211': {
      title: "About Natlan's Body Painting Practices...",
      audio: "VO_Aether_About_Natlan's_Body_Painting_Practices",
      text: "#___: Have you noticed the... makeup that Natlanese people wear? Or body paint, or tattoos, or graffiti, or whatever it's called — anyway, it looks really cool!\\n___: I have noticed! \"Body paint\" is right, although it's not just any old paint. Apparently, it contains phlogiston.\\n___: Wow, really?\\n___: Yep. If you're interested to try it out, I'm pretty sure they offer a body painting experience specially for tourists — but they just use normal paint for that.\\n___: Ooh! Well, since we're here... why don't we try it? All part of the experience.\\n___: Sure thing. You'll need to pick a color palette and a motif first though. Each tribe has its own style.\\n___: Alright, ___ chooses, uh... ___ chooses... Ugh! They all look so cool! Choosing between them is impossible.\\n___: Meh, choosing is losing! ___ will take them all!\\n___: Wow... Today I learned that ___ is a maximalist... Well, I'm sure some people would say \"less is more,\" but I say — you do you, ___!\\n___: What are you talking about!? ___ never said anything about using them all at once! She just wants options, so she can switch up her style every day!\\n___: ...Oh. That's too bad... I woulda loved to see ___ with an elaborate arm-tattoo...\\n___: Stop! Nope! Stop it! No imagining ___ with an arm-tattoo! Not allowed!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '212': {
      title: 'About Living With Saurians...',
      audio: 'VO_Aether_About_Living_With_Saurians',
      text: "#___: The people and saurians of Natlan have a great relationship, huh? They live together, fight together, even fly together...\\n___: Just like us, right? Except you're too small to take me flying... It's just a shame you can't grow any bigger. Not for want of trying, of course — you do eat a lot of Chicken-Mushroom Skewers...\\n___: Hmph... Let's not forget that saurians can't be your guide. Or your conversation partner.\\n___: It's strange to think that there was once a time when humans and saurians were enemies. And now they co-exist peacefully. Must've taken a lot of work to get to where things are today.\\n___: If ___ was a saurian, all it would have taken is some tasty food.\\n___: You say that, but... what if you demanded a hundred chicken skewers per day, and the humans couldn't provide that much?\\n___: Umm... ___ could probably settle for fifty a day...\\n___: Or even better — maybe the humans could team up with you and you could go hunting together. Then there'd be enough meat for everyone to eat their fill!\\n___: Uh-huh! Peace between species all starts with a full stomach!",
      tips: 'Complete "Black Stone Under a White Stone"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5007,
              chapterId: 1501,
              chapterTitle: 'Black Stone Under a White Stone',
            },
          ],
        },
      ],
    },
    '213': {
      title: 'About the Volcano...',
      audio: 'VO_Aether_About_the_Volcano',
      text: "#___: That volcano is so huge, you can see it from anywhere in Natlan... Where do you think all that magma comes from, though?\\n___: One legend holds that an enormous Pyro Dragon slumbers in the deepest depths of Natlan. Within the dragon's body dwells the world's first flame, burning eternally, and causing boils to form on the dragon's back. Every once in a while, these boils spew out fire, which takes the form of magma when it comes above ground.\\n___: For real!? But... what happens if the dragon ever wakes up? Natlan will be doomed!\\n___: Yep, and that's why the Pyro Archon gets the tribes to periodically join forces and go pacify the dragon, to make sure it stays asleep.\\n___： ...Wait, what? No, that's to fight the Abyss! Isn't it?\\n___： ...Well, not if this story from a woven scroll I bought on the street is to be believed.\\n___: Ugh, ___ knew it!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
  },
  story: {
    '0': {
      title: 'Character Details',
      title2: null,
      text: 'The keeper is fading away; the creator has not yet come.\\nBut the world shall burn no more, for you shall ascend.',
      text2: null,
      tips: '',
    },
    '1': {
      title: 'Character Story 1',
      title2: null,
      text: 'A boy and a girl stood amidst the tumult, under an unfamiliar sky.\\nYou were a pair of traveling twins, passing through countless worlds during your journey.\\nDescending upon a continent named Teyvat, you hoped that you would be able to enjoy your time here.\\nBut as you awoke among the falling stars, you saw the world in turmoil, a cataclysm raging across the land...\\nYou sought to leave this place and move on to the next world, but then an unknown god stood before you, barring the way.\\nThis deity was spotless, floating over a world of chaos.\\nLooking down on you.\\nThe god took your only kin away, and you were sealed and cast into a deep slumber filled with nightmares...\\nWhen you reawakened, the world was changed.\\nThe flames of war raged no longer, and nothing was left that looked familiar.\\nHow long had you been asleep? You had no answers.\\nThus, you began a lonely journey, seeking the deity that you had once laid eyes upon...',
      text2: null,
      tips: '',
    },
    '2': {
      title: 'Character Story 2',
      title2: null,
      text: 'After that, you met ___, and wandered together for some time.\\nYou learned that this world has seven deities who rule the seven nations as the Seven Archons.\\nYour first stop was the free city of wine and song, Mondstadt, a city built by the Anemo Archon.\\nAs you stepped into Mondstadt as an outlander, it was, as the other nations were, beset on both sides by non-human and human threats.\\nThe non-human threat was comprised of the confederacy known as the Abyss Order.\\nThe human threat, on the other hand stemmed, from the ambition of the Tsaritsa, god of Snezhnaya.\\nThe Abyss Order had corrupted an ally of the Anemo Archon, the Dragon of the East of the Four Winds of Mondstadt.\\nThe envoys of Snezhnaya, for their part, used this opposition to the Abyss as an excuse to put pressure on Mondstadt.\\nThese threats from without and within caused the return of the Anemo Archon, who took on the form of a bard and joined you in your journey to save the dragon.\\nYet there was something then that you did not see — for as the dragon fell to the Abyss, a certain figure had been reflected in its eyes...\\nThe one who rules the Abyss.\\nShe had once traveled with you, and you had once crossed many worlds together.',
      text2: null,
      tips: 'Complete "Song of the Dragon and Freedom"',
    },
    '3': {
      title: 'Character Story 3',
      title2: null,
      text: 'Though you made no promises, though it was an "agreement" the other party made one-sidedly,\\nYou nonetheless set out on a sojourn across the Seven Nations to reach "the journey\'s end."\\nIt would be a stretch to call this a pleasant path — as your feet took you forward, you witnessed and were pulled into the crises each nation faced...\\nPerhaps this is no coincidence. Perhaps some tremendous tremor deeper beneath the world is to blame for the waves of catastrophe.\\nThe Tsaritsa\'s plan to collect the Gnoses persists apace, while the terrifying force corrupting the world awaits opportunities to strike.\\nAnd the Abyss Order, the organization led by your own flesh and blood...\\nFrom the Loom of Fate operational launch to the Atlas of the New World\'s completion, you know deep down that their actions are changing the fate of this world.\\nAs you gradually understand said world, you have also come to understand the things your sister...\\nBut this has not made your journey any easier, nor your footsteps lighter. That was not what you expected at first.',
      text2: null,
      tips: 'Complete "A Space and Time for You"',
    },
    '4': {
      title: 'Character Story 4',
      title2: null,
      text: 'Not yet available',
      text2: null,
      tips: 'Complete "???"',
    },
    '5': {
      title: 'Character Story 5',
      title2: null,
      text: 'Not yet available',
      text2: null,
      tips: 'Complete "???"',
    },
    '6': {
      title: 'Loom of Fate',
      title2: null,
      text: 'Not yet available',
      text2: null,
      tips: 'Complete "???"',
    },
    '7': {
      title: 'Vision',
      title2: null,
      text: "When faced with circumstances that they cannot control, humans often bemoan their powerlessness.\\nBut if a person is found to have surpassing ambition even as their life reaches such a desperate turning point, then the gods would look upon them with favor.\\nThis favor is the Vision, an external magical focus given to those who have been acknowledged by the gods which they can use to channel elemental power.\\nCelestia is the realm of the gods, and the wielders of Visions walk the earth below. When they depart from this world, the chosen will ascend.\\nAfter coming to this world, you often hear people speak of such things.\\nYou, for your part, can never receive a Vision, for an alien lifeform does not belong...\\nIs it wise to allow a moment's ambition to dominate one's entire life?\\nYou have needed to consider many such thought-provoking questions, ones that require lengthy consideration, during your journey through many worlds...",
      text2: null,
      tips: 'Complete "The Outlander Who Caught the Wind"',
    },
  },
};
