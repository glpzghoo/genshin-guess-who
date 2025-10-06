export const lumineVL = {
  quotes: {
    '0': {
      title: 'About the Windmills',
      audio: '24001',
      text: "#<color=#37FFFF>Paimon:</color> Mondstadt has so many windmills, doesn't it?\\n<color=#37FFFF>{NICKNAME}:</color> Well, the city is built above water, so it probably relies on windmills to draw the water upwards.\\n<color=#37FFFF>Paimon:</color> That's correct! The winds blow through Mondstadt all year, so this supply of water is very stable.\\n<color=#37FFFF>Paimon:</color> Also, the windmills are what they call \"visible winds\" — and wind chimes are called the \"audible winds.\"\\n<color=#37FFFF>Paimon:</color> Paimon guesses they can be thought of as mascots and prayers to the Anemo Archon for protection.\\n<color=#37FFFF>{NICKNAME}:</color> Ah, mascots. So, like you then, Paimon?\\n<color=#37FFFF>Paimon:</color> No! Not at all! They're made of wood, and you can't eat them in an emergency either, 'cause all you'll do is grind your teeth down!\\n<color=#37FFFF>{NICKNAME}:</color> Umm...\\n<color=#37FFFF>{NICKNAME}:</color> ...I don't know what to say to that.",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '1': {
      title: 'About the Tavern Owner',
      audio: '25001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> I've heard that if you give tavern owners a considerable tip, they'll be willing to share some information on the down low.\\n<color=#37FFFF>Paimon:</color> You mean the Angel's Share? But Master Diluc seems like a very rich man.\\n<color=#37FFFF>Paimon:</color> How big a tip is \"considerable,\" anyway?\\n<color=#37FFFF>{NICKNAME}:</color> Huh... Maybe I might have heard wrong.\\n<color=#37FFFF>{NICKNAME}:</color> Or, maybe I might have heard this rumor in another world...\\n<color=#37FFFF>Paimon:</color> You sure have been to many worlds, haven't you?",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '2': {
      title: 'About Cider Lake',
      audio: '26001',
      text: "#<color=#37FFFF>Paimon:</color> Cider Lake never freezes, no matter what time of year it is.\\n<color=#37FFFF>Paimon:</color> The best apple ciders in Mondstadt can only be made using the fresh water from this lake.\\n<color=#37FFFF>Paimon:</color> It really does taste great! Paimon could drink two big bottles in a second!\\n<color=#37FFFF>{NICKNAME}:</color> Wow.\\n<color=#37FFFF>Paimon:</color> Tee-hee!\\n<color=#37FFFF>{NICKNAME}:</color> With your size, I can't believe that you can drink that much liquid...\\n<color=#37FFFF>{NICKNAME}:</color> ...And not explode like an Anemo Slime.\\n<color=#37FFFF>Paimon:</color> Paimon has a special stomach just for tasty drinks!\\n<color=#37FFFF>{NICKNAME}:</color> Huh... I guess the world really is a big place. So many things to consider...",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '3': {
      title: "About the Library's Restricted Section",
      audio: '37001',
      text: '#<color=#37FFFF>{NICKNAME}:</color> About those books in the "restricted section" that Lisa mentioned...\\n<color=#37FFFF>{NICKNAME}:</color> Have you ever wondered what sort of books might be kept in there?\\n<color=#37FFFF>{NICKNAME}:</color> Perhaps...\\n<color=#37FFFF>{NICKNAME}:</color> ...It contains books not suitable for children?\\n<color=#37FFFF>Paimon:</color> Huh? But "The Boar Princess" isn\'t in the restricted section!\\n<color=#37FFFF>Paimon:</color> What could be more unsuitable for children than that? ...Hmm, Paimon\'s curious...',
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
      audio: '31001',
      text: "#<color=#37FFFF>Paimon:</color> Paimon finds that hard work hardly works here in Mondstadt.\\n<color=#37FFFF>{NICKNAME}:</color> Why do you say that?\\n<color=#37FFFF>Paimon:</color> Just look at Huffman from the Knights of Favonius. He does his best at his duties every day...\\n<color=#37FFFF>Paimon:</color> But the ever-relaxed Captain Kaeya is his boss.\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... But isn't Jean, who works the hardest, the Acting Grand Master?\\n<color=#37FFFF>Paimon:</color> W—Well, how about this, then...\\n<color=#37FFFF>Paimon:</color> Venti's the god of Mondstadt, and he's the laziest of them all!",
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
      audio: '56001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Ah... Sure would be nice to spend a night at the Goth Grand Hotel...\\n<color=#37FFFF>Paimon:</color> Paimon thinks so too!\\n<color=#37FFFF>Paimon:</color> The rooms are sure to be big and clean.\\n<color=#37FFFF>{NICKNAME}:</color> Still, I've heard Mr. Goth say that they've had all kinds of strange problems ever since the Fatui moved in.\\n<color=#37FFFF>{NICKNAME}:</color> The Electro Cicins that their mages brought in attracted a lot of dust with static electricity, which ended up killing a lot of those Cicins.\\n<color=#37FFFF>{NICKNAME}:</color> Then, someone mixed up the Mist Grass Pollen and the pepper...\\n<color=#37FFFF>{NICKNAME}:</color> And the Agents ended up brawling amongst themselves, each insisting that the other owed them money for wine.\\n<color=#37FFFF>Paimon:</color> ...Hang in there, Goth Grand Hotel...",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '6': {
      title: 'About the Way the Wind Blows',
      audio: '64001',
      text: '#<color=#37FFFF>{NICKNAME}:</color> Everyone says that Mondstadt is the land of the wind.\\n<color=#37FFFF>{NICKNAME}:</color> But, I wonder which direction the seasonal winds come from.\\n<color=#37FFFF>Paimon:</color> Why don\'t we ask Venti?\\n<color=#37FFFF>{NICKNAME}:</color> He\'ll probably just dodge the question with a "hehe" or something...\\n<color=#37FFFF>Paimon:</color> True. The Anemo Archon is just a Tone-Deaf Bard. What does he know about the wind?',
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
      audio: '66001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> So here in Mondstadt, alchemy is practiced out on the streets?\\n<color=#37FFFF>Paimon:</color> Is that so strange?\\n<color=#37FFFF>{NICKNAME}:</color> In many of the worlds I've been to in the past, alchemy has always been a secretive art.\\n<color=#37FFFF>{NICKNAME}:</color> Watching alchemy being practiced as a part of daily life is like being in a world where people all have three stomachs...\\n<color=#37FFFF>Paimon:</color> Paimon thinks only having one stomach is weird!\\n<color=#37FFFF>{NICKNAME}:</color> Uh...\\n<color=#37FFFF>{NICKNAME}:</color> Are you serious?\\n<color=#37FFFF>Paimon:</color> What do you think?",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '8': {
      title: 'About Teyvat',
      audio: '11001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Teyvat's day and night both seem particularly short.\\n<color=#37FFFF>{NICKNAME}:</color> The skies here are full of stars, but they aren't the same as the ones back home.\\n<color=#37FFFF>{NICKNAME}:</color> I wonder if the fates of people from Teyvat are also related to their constellations.\\n<color=#37FFFF>Paimon:</color> Oh? Do you know how to read the stars, too? That's amazing! Not a lot of people outside Sumeru can do it.\\n<color=#37FFFF>Paimon:</color> Paimon's curious! Come on, do a reading for me, quick!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm...\\n<color=#37FFFF>{NICKNAME}:</color> The night sky pictured on Paimon's cape... flows with the light of many stars, and also of the deep ocean...\\n<color=#37FFFF>{NICKNAME}:</color> The movement of these stars... tells me that, uh... in, say, seven days from now...\\n<color=#37FFFF>Paimon:</color> ...In seven days what?\\n<color=#37FFFF>{NICKNAME}:</color> Something good, or something bad, might occur...\\n<color=#37FFFF>Paimon:</color> Heh, right... your theory sounds as rock solid as a Geo Slime... And about as brainy, too.",
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
      audio: '67001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> On the way back to Mondstadt after rescuing Dvalin...\\n<color=#37FFFF>{NICKNAME}:</color> We finally got to see one of the Seven Archons, didn't we? It was interesting to see what kind of god he was.\\n<color=#37FFFF>Paimon:</color> Hmm... Haven't we known Venti for quite a while now?\\n<color=#37FFFF>{NICKNAME}:</color> As Venti, yes... But still, this was the first time that we got to see him as the Anemo Archon, Barbatos.\\n<color=#37FFFF>{NICKNAME}:</color> Normally, he hides his true divinity behind the facade of a bard.\\n<color=#37FFFF>{NICKNAME}:</color> \"What does freedom really mean, when demanded of you by a god?\"\\n<color=#37FFFF>{NICKNAME}:</color> That was the question that he asked Dvalin... I'm still contemplating that... you know?",
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
      audio: '69001',
      text: '#<color=#37FFFF>Paimon:</color> Mondstadt is full of wide plains and rolling hills.\\n<color=#37FFFF>Paimon:</color> People say that when Barbatos made this land, he used the storm to flatten the cliffs and valleys...\\n<color=#37FFFF>{NICKNAME}:</color> Still, it looks like he missed a few spots.\\n<color=#37FFFF>Paimon:</color> Like Starsnatch Cliff?\\n<color=#37FFFF>{NICKNAME}:</color> Exactly.\\n<color=#37FFFF>{NICKNAME}:</color> On the map, it almost looks as if it was meant to be the apex of a vertical structure, but ended up at the wrong orientation.\\n<color=#37FFFF>Paimon:</color> Wh—What\'s an "apex"?',
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
      audio: '47001',
      text: "#<color=#37FFFF>Paimon:</color> Paimon's heard that couplets are a traditional art form in Liyue. If you can write a line that works as a second half to one that someone else has written, you'll be well paid!\\n<color=#37FFFF>Paimon:</color> But linking the couplet is hard, so it's not easy money.\\n<color=#37FFFF>Paimon:</color> Not only does the rhythm need to match, but the meaning has to as well.\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... Care to give an example?\\n<color=#37FFFF>Paimon:</color> Uh... \"Windrise's winds never churn.\"\\n<color=#37FFFF>{NICKNAME}:</color> ...Um, \"But the Sea of Clouds' clouds always return.\"\\n<color=#37FFFF>Paimon:</color> Huh... Not bad!\\n<color=#37FFFF>Paimon:</color> Let's not waste time here. We've got some money to make!",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '12': {
      title: 'About "Don\'t Play With Food, or With Money"',
      audio: '59001',
      text: "#<color=#37FFFF>Paimon:</color> There's a saying of Rex Lapis' that's commonly used here in Liyue. Paimon thinks its rough meaning is... \"Don't play with your money.\"\\n<color=#37FFFF>Paimon:</color> It's because the first Mora were minted from his golden form and given to humans in trust.\\n<color=#37FFFF>{NICKNAME}:</color> Kaeya sure seems to enjoy playing with his money...\\n<color=#37FFFF>Paimon:</color> And that's why you shouldn't learn from him.\\n<color=#37FFFF>{NICKNAME}:</color> Well, as a child, I was taught not to play with my food.\\n<color=#37FFFF>Paimon:</color> Yup, yup. You've got to respect your food.\\n<color=#37FFFF>Paimon:</color> ...Wh—What are you looking at Paimon for?",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '13': {
      title: "About Heart's Desire",
      audio: '62001',
      text: '#<color=#37FFFF>Paimon:</color> Walk in seven clockwise circles, then walk in seven anticlockwise circles, then open your eyes...\\n<color=#37FFFF>{NICKNAME}:</color> Are you... sleepwalking?\\n<color=#37FFFF>Paimon:</color> Nope! Paimon is just trying to see if that antique shop from "Heart\'s Desire" actually exists!\\n<color=#37FFFF>{NICKNAME}:</color> Well, assuming that a shop in a story does exist, what would you like to buy, Paimon?\\n<color=#37FFFF>Paimon:</color> A Slime Creator!\\n<color=#37FFFF>{NICKNAME}:</color> Does such a thing even exist?',
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '14': {
      title: 'About the Guhua Clan',
      audio: '32001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Lately, some Guhua Clan disciples have been retelling an ancient story.\\n<color=#37FFFF>Paimon:</color> The Guhua Clan, huh? Paimon bets it's a heroic story!\\n<color=#37FFFF>{NICKNAME}:</color> Several female disciples decided to partake of a contest of arms to see who would marry their male junior, and he approved.\\n<color=#37FFFF>Paimon:</color> Ooh, Paimon's heard this one. In Liyue, they call this \"a joust for a spouse\"!\\n<color=#37FFFF>{NICKNAME}:</color> But the night before the contest, he stole the eldest disciple's favorite sword.\\n<color=#37FFFF>Paimon:</color> Ah, so he wanted her to lose... Poor girl...\\n<color=#37FFFF>{NICKNAME}:</color> I know, right? Forced to use a sword she wasn't used to, the eldest disciple suffered a crushing defeat.\\n<color=#37FFFF>{NICKNAME}:</color> Unable to accept this result, she fell to her knees and wept.\\n<color=#37FFFF>Paimon:</color> Oh no... She must have really loved him, right?\\n<color=#37FFFF>{NICKNAME}:</color> In the end, she was forced to marry him in front of everyone. Hahaha.\\n<color=#37FFFF>Paimon:</color> Wait... so the loser had to marry him!?",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '15': {
      title: 'About Dihua Marsh',
      audio: '29001',
      text: "#<color=#37FFFF>Paimon:</color> Did you know the reeds in Dihua Marsh are common materials used in making paper?\\n<color=#37FFFF>Paimon:</color> The solid reed cores are used to make pens, while the hollow part is used to make flutes. It's all very sophisticated.\\n<color=#37FFFF>Paimon:</color> Over the years, many heroes and swordsmen have also chosen Dihua Marsh as the location of their duels.\\n<color=#37FFFF>Paimon:</color> The more reeds, the more elegant the place. But in places where the reeds are the thickest, the water can be quite deep...\\n<color=#37FFFF>Paimon:</color> So there are a lot of unlucky duelists who fall in and drown while the duel is on...\\n<color=#37FFFF>{NICKNAME}:</color> Huh. And what's my takeaway from all of this supposed to be?\\n<color=#37FFFF>Paimon:</color> Don't get into a fight in Dihua Marsh!",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '16': {
      title: 'About the Gentleman Bird',
      audio: '28001',
      text: "#<color=#37FFFF>Paimon:</color> Paimon's heard that in Liyue, people call the crane the \"gentleman bird.\"\\n<color=#37FFFF>{NICKNAME}:</color> And do you know why that is?\\n<color=#37FFFF>Paimon:</color> Hmm... Paimon's not quite sure...\\n<color=#37FFFF>{NICKNAME}:</color> Well then, let me tell you about the story of the lucky crane repaying its debts.\\n<color=#37FFFF>{NICKNAME}:</color> A long, long time ago, there was a kind-hearted scholar who saved a lucky crane that had fallen into a trap.\\n<color=#37FFFF>{NICKNAME}:</color> Later, on a cold winter's night, a beautiful maiden came to his door, asking to lodge with him.\\n<color=#37FFFF>{NICKNAME}:</color> The maiden shouldered a greatsword on her back, and taught all that she knew of swordsmanship to the scholar, supervising him as he studied day and night.\\n<color=#37FFFF>Paimon:</color> Whoa...\\n<color=#37FFFF>{NICKNAME}:</color> Once he had finished his training, he went out into the wilds with the maiden to do good and fight for justice.\\n<color=#37FFFF>{NICKNAME}:</color> Ten years later, the lucky crane took the form of a gentleman, and finally came to return the favor, but discovered the couple had already lived out a fortuitous life...\\n<color=#37FFFF>{NICKNAME}:</color> And that's the story known as \"The Gentleman's 10-Year Debt.\"\\n<color=#37FFFF>Paimon:</color> Ahh...",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '17': {
      title: 'About Jueyun Karst',
      audio: '43001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Rumor has it that Jueyun Karst is the abode of the adepti.\\n<color=#37FFFF>Paimon:</color> Wow — the abode of the adepti!\\n<color=#37FFFF>{NICKNAME}:</color> Perhaps we'll meet the adepti on those cloud-piercing mountain peaks.\\n<color=#37FFFF>Paimon:</color> Wow — meeting adepti!\\n<color=#37FFFF>{NICKNAME}:</color> But I wonder... how would one normally communicate with the adepti?\\n<color=#37FFFF>Paimon:</color> Wow — communicating with adepti!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm. My emergency rations seem to be going bad. *sigh* Best to consume them quickly...\\n<color=#37FFFF>Paimon:</color> Ahem. Well... Paimon thinks that shouting from the mountaintop should work.\\n<color=#37FFFF>{NICKNAME}:</color> That seems more like a way for getting the attention of a hilichurl instead of an adeptus.",
      tips: 'Unlock the Statue of The Seven (Geo) at Dihua Marsh, Liyue',
      tasks: null,
    },
    '18': {
      title: 'About the God of Contracts',
      audio: '68001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> To think that the Geo Archon had signed a contract with the Cryo Archon.\\n<color=#37FFFF>{NICKNAME}:</color> I wonder what the contents of their agreement were...\\n<color=#37FFFF>Paimon:</color> Paimon doesn't care who you are, making a deal with the Tsaritsa is super dangerous!\\n<color=#37FFFF>{NICKNAME}:</color> Be that as it may...\\n<color=#37FFFF>{NICKNAME}:</color> Since Morax is the god who understands the basis of contracts the best...\\n<color=#37FFFF>{NICKNAME}:</color> He's definitely given this some thought.\\n<color=#37FFFF>Paimon:</color> Well that's true. Morax himself called it the \"contract to end all contracts\"...\\n<color=#37FFFF>{NICKNAME}:</color> I trust that we will witness the truth, and its denouement, play out...",
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
      audio: '70001',
      text: "#<color=#37FFFF>Paimon:</color> Come to think of it, while Rex Lapis enjoys visiting his people in private, he only descends officially once every year.\\n<color=#37FFFF>Paimon:</color> None of the other gods do this. Hmm... Does Rex Lapis have any deeper intentions?\\n<color=#37FFFF>{NICKNAME}:</color> I have my guesses...\\n<color=#37FFFF>{NICKNAME}:</color> You see, those annual divine predictions have already captured the hearts of the people of Liyue too much.\\n<color=#37FFFF>{NICKNAME}:</color> Round and around they analyze and scrutinize every single word, finding limitless \"hidden meanings\" within them...\\n<color=#37FFFF>{NICKNAME}:</color> What do you think would happen to Liyue if such divine predictions were available every day?\\n<color=#37FFFF>Paimon:</color> Ah!\\n<color=#37FFFF>Paimon:</color> Paimon gets it now. Paimon would be offering Rex Lapis' favorite snacks to him every day!\\n<color=#37FFFF>Paimon:</color> If you could just get Mora straight from Morax's hands, who would ever need to do a day of honest work?\\n<color=#37FFFF>{NICKNAME}:</color> You made... some logical leaps, but that's basically how it is.",
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
      audio: '27001',
      text: "#<color=#37FFFF>Paimon:</color> If you want to adventure together with Benny's Adventure Team, you have to come prepared.\\n<color=#37FFFF>Paimon:</color> Domains are very dangerous, so you should always take care to double- and triple-check your supplies in advance.\\n<color=#37FFFF>Paimon:</color> Paimon's heard that the Adventurers' Guild has compiled a list of 463 different ways of dying in these domains...\\n<color=#37FFFF>Paimon:</color> If Bennett got you killed by accident, Paimon and Bennett would never forgive ourselves!\\n<color=#37FFFF>{NICKNAME}:</color> ...Why am I the only one dying here?\\n<color=#37FFFF>Paimon:</color> Well, that's because according to the numbers, Paimon can avoid 322 causes of death just by floating!\\n<color=#37FFFF>{NICKNAME}:</color> I suddenly don't feel like exploring these domains...",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '21': {
      title: 'About Bennett',
      audio: '34001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> I've heard that Albert, being the leader of Barbara's fan club...\\n<color=#37FFFF>{NICKNAME}:</color> ...Sometimes gets bumps and bruises on purpose so that he can go to the Cathedral to see her.\\n<color=#37FFFF>Paimon:</color> Paimon feels the Knights of Favonius should keep a closer watch on weirdos like that.\\n<color=#37FFFF>{NICKNAME}:</color> But it seems that a month later, Albert discovered that Bennett was managing to see Barbara far more than he was.\\n<color=#37FFFF>{NICKNAME}:</color> On second thought, Bennett does have the natural advantage when it comes to getting injured.\\n<color=#37FFFF>Paimon:</color> What is this, a \"let's bother Barbara\" contest?",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '22': {
      title: 'About the "Idol"',
      audio: '61001',
      text: "#<color=#37FFFF>Paimon:</color> Barbara's really popular, isn't she?\\n<color=#37FFFF>{NICKNAME}:</color> Well, she is the idol of the people of Mondstadt.\\n<color=#37FFFF>Paimon:</color> Come to think of it... Paimon doesn't really know what an \"idol\" is.\\n<color=#37FFFF>{NICKNAME}:</color> It's an occupation in which one's work is to be cute, be well-loved, and earn a boat-load of Mora.\\n<color=#37FFFF>Paimon:</color> Isn't that the same thing as being a mascot?\\n<color=#37FFFF>{NICKNAME}:</color> That's... one way to put it.",
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
      audio: '40001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Lisa and Amber feel a bit like sisters.\\n<color=#37FFFF>Paimon:</color> Huh? Why's that?\\n<color=#37FFFF>{NICKNAME}:</color> Amber often runs errands for Lisa. Older siblings asking their younger siblings to do things for them so they can slack off is a rather common practice...\\n<color=#37FFFF>{NICKNAME}:</color> But, my brother and I are the same age, so we had to decide these things via rock-paper-scissors.\\n<color=#37FFFF>Paimon:</color> Whoa. So, doesn't that make you my younger sister?\\n<color=#37FFFF>{NICKNAME}:</color> What do you mean?\\n<color=#37FFFF>Paimon:</color> Well, since Paimon floats, you're the only one who can \"run\" any errands!\\n<color=#37FFFF>{NICKNAME}:</color> ...Seriously?",
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
      audio: '41001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Paimon, have you ever seen what Kaeya looks like under that eye patch?\\n<color=#37FFFF>Paimon:</color> Nope.\\n<color=#37FFFF>{NICKNAME}:</color> So, it would seem that he never takes it off...\\n<color=#37FFFF>Paimon:</color> Actually, Paimon already knows why!\\n<color=#37FFFF>{NICKNAME}:</color> Oh?\\n<color=#37FFFF>Paimon:</color> He must be hiding some big secret!\\n<color=#37FFFF>{NICKNAME}:</color> Really, a secret?\\n<color=#37FFFF>Paimon:</color> See, Kaeya heads out for assignments more than anyone else.\\n<color=#37FFFF>Paimon:</color> So the skin under that eye patch has to be way lighter than the rest of him.\\n<color=#37FFFF>{NICKNAME}:</color> So if he ever takes that eye patch off...\\n<color=#37FFFF>Paimon:</color> He'll definitely become the butt of everyone's jokes. Maybe he'll even get a weird nickname!\\n<color=#37FFFF>Paimon:</color> Like, say, \"Pasty Eye\"!\\n<color=#37FFFF>{NICKNAME}:</color> Guess he didn't need to take it off to get a weird nickname...",
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
      audio: '60001',
      text: "#<color=#37FFFF>Paimon:</color> Strange...\\n<color=#37FFFF>{NICKNAME}:</color> What's wrong?\\n<color=#37FFFF>Paimon:</color> Diluc and Kaeya are really alike, so why don't they get along?\\n<color=#37FFFF>{NICKNAME}:</color> How are they alike, again?\\n<color=#37FFFF>Paimon:</color> Well, Kaeya's the kind of guy who acts shady in the light of day...\\n<color=#37FFFF>Paimon:</color> While Diluc is a shining beacon of justice in the dark of night!\\n<color=#37FFFF>Paimon:</color> Don't you think that's kinda the same thing...?\\n<color=#37FFFF>{NICKNAME}:</color> Uhh... I still don't see it.",
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
      audio: '58001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> If one hilichurl could beat, say, three wild boars...\\n<color=#37FFFF>{NICKNAME}:</color> Then how many hilichurls would it take to reach the fighting prowess of Master Jean and Master Diluc?\\n<color=#37FFFF>Paimon:</color> Not sure... but if you heard the way everyone talks in Mondstadt, you'd know that Master Jean is the strongest.\\n<color=#37FFFF>{NICKNAME}:</color> I'd say that if Diluc strikes first, Master Jean wouldn't be able to counter.\\n<color=#37FFFF>Paimon:</color> Oh, she'd find a way.\\n<color=#37FFFF>{NICKNAME}:</color> There's no way.\\n<color=#37FFFF>Paimon:</color> Master Jean's Elemental Burst is really strong, you know~\\n<color=#37FFFF>{NICKNAME}:</color> Yes, but that \"field\" would also make Diluc stronger.\\n<color=#37FFFF>Paimon:</color> Paimon doesn't think Master Jean would even need her Vision to take on Master Diluc, because—\\n<color=#37FFFF>{NICKNAME}:</color> Diluc would only need a beginner's greatsword to—\\n<color=#37FFFF>Paimon:</color> Argh...\\n<color=#37FFFF>{NICKNAME}:</color> Ugh...\\n<color=#37FFFF>{NICKNAME}:</color> *sigh* This... is so dumb.\\n<color=#37FFFF>{NICKNAME}:</color> They both fight for Mondstadt, so they wouldn't come to blows.\\n<color=#37FFFF>Paimon:</color> That's why Paimon likes your idea of measuring their fighting strength in number of hilichurls.\\n<color=#37FFFF>Paimon:</color> ...Or in Paimon's case, in fifths of a wild boar.",
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
      audio: '33001',
      text: "#<color=#37FFFF>Paimon:</color> {NICKNAME}, you know what a brush is, right?\\n<color=#37FFFF>{NICKNAME}:</color> Of course! Kinda like pens but with animal hair at one end for calligraphy, right?\\n<color=#37FFFF>Paimon:</color> That's correct! They say that finely-made brushes sell for high prices among Liyue's merchants!\\n<color=#37FFFF>{NICKNAME}:</color> So, would you like to make some too?\\n<color=#37FFFF>Paimon:</color> Uh-huh! But wild wolves are too fierce, so we should use Razor's fur to make brushes instead!\\n<color=#37FFFF>Paimon:</color> Razor's fur is all downy and soft. It'll definitely make great wolf-fur brushes! We could make lots of Mora like this!\\n<color=#37FFFF>{NICKNAME}:</color> Brushes made like that would conduct electricity. I'm not sure we could use them.\\n<color=#37FFFF>{NICKNAME}:</color> Besides, Razor isn't a wolf, nor are wolf brushes made from actual wolves' fur...\\n<color=#37FFFF>Paimon:</color> Huh? Why are they called wolf-fur brushes, then?\\n<color=#37FFFF>{NICKNAME}:</color> Well, does Cider Lake look like it's full of cider to you?\\n<color=#37FFFF>Paimon:</color> Hmm. You have a point.",
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
      audio: '57001',
      text: "#<color=#37FFFF>Paimon:</color> Klee's a really interesting kid.\\n<color=#37FFFF>Paimon:</color> All the Knights seem to like her a lot, too. You could even say they spoil her.\\n<color=#37FFFF>{NICKNAME}:</color> I wonder, who makes the better mascot: Paimon, or Klee?\\n<color=#37FFFF>{NICKNAME}:</color> Oh wait, I forgot. Paimon's not a mascot, Paimon is emergency—\\n<color=#37FFFF>Paimon:</color> Hey! Paimon knows exactly what you're going to say. That joke stopped being funny a long time ago.",
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
      audio: '30001',
      text: "#<color=#37FFFF>Paimon:</color> It's time for Paimon's Little Life Tips!\\n<color=#37FFFF>{NICKNAME}:</color> \"Little Life Tips\"?\\n<color=#37FFFF>Paimon:</color> In Mondstadt, if there's something you can't fix, or there's something you can't get clean no matter what you do...\\n<color=#37FFFF>Paimon:</color> If you ever run into something you can't handle yourself, you just need to shout this name into the skies:\\n<color=#37FFFF>Paimon:</color> \"Noeeeelle!\"\\n<color=#37FFFF>Paimon:</color> And everything that's troubling you will be swept away in an instant.\\n<color=#37FFFF>{NICKNAME}:</color> So this is one of the tricks to living in Mondstadt... Pretty impressive...",
      tips: 'Unlock teleport waypoints in Mondstadt City',
      tasks: null,
    },
    '30': {
      title: 'About Fischl',
      audio: '35001',
      text: "#<color=#37FFFF>Paimon:</color> Fischl makes a very unique impression, doesn't she?\\n<color=#37FFFF>{NICKNAME}:</color> How so?\\n<color=#37FFFF>Paimon:</color> Well, she travels together with a talking raven, for starters.\\n<color=#37FFFF>{NICKNAME}:</color> Well, I'm traveling with you. It's not all that different.\\n<color=#37FFFF>{NICKNAME}:</color> Still, Oz can also translate for Fischl. You, on the other hand...\\n<color=#37FFFF>Paimon:</color> What!? Paimon's way better than some bird!\\n<color=#37FFFF>{NICKNAME}:</color> Haha, how so?\\n<color=#37FFFF>Paimon:</color> Well, um... uh... at least Paimon doesn't need wings to fly!",
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
      audio: '36001',
      text: '#<color=#37FFFF>{NICKNAME}:</color> Speaking of Fischl, she also claims to be a "visitor from another world"...\\n<color=#37FFFF>{NICKNAME}:</color> We\'re similar in that way. We even bring a pet along with us.\\n<color=#37FFFF>Paimon:</color> Pet? Now, wait just a minute, here...\\n<color=#37FFFF>{NICKNAME}:</color> But her raven, Oz... He looks cool, and is polite to boot.\\n<color=#37FFFF>{NICKNAME}:</color> More importantly, he can both scout and fight — very useful indeed.\\n<color=#37FFFF>{NICKNAME}:</color> Maybe I should make arrangements with Fischl to trade companions once in a while for, say, a week or two at a time? Hehe, it should be quite interesting.\\n<color=#37FFFF>Paimon:</color> Hey! Doesn\'t Paimon get a say in this!?',
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
      audio: '52001',
      text: "#<color=#37FFFF>Paimon:</color> How do you become as popular and cool as Captain Beidou?\\n<color=#37FFFF>{NICKNAME}:</color> With enough experience...?\\n<color=#37FFFF>Paimon:</color> Paimon's already seen lots of things from adventuring together with you!\\n<color=#37FFFF>{NICKNAME}:</color> One also needs to experience trials and setbacks...\\n<color=#37FFFF>Paimon:</color> Paimon almost drowned that one time...\\n<color=#37FFFF>{NICKNAME}:</color> ...And maintain an inspirational disposition...\\n<color=#37FFFF>Paimon:</color> Uh-huh! Paimon's always rooted for you!\\n<color=#37FFFF>{NICKNAME}:</color> One must also have a... mature outlook towards problems.\\n<color=#37FFFF>Paimon:</color> Hey! Are you just trying to say that Paimon can't make it?",
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '33': {
      title: 'About Ningguang',
      audio: '53001',
      text: "#<color=#37FFFF>Paimon:</color> How does a person become as rich... no, as super rich as Lady Ningguang?\\n<color=#37FFFF>{NICKNAME}:</color> Hah... Is that the only impression she gives you? Riches?\\n<color=#37FFFF>Paimon:</color> Well, there's the huge Jade Chamber, too! But isn't that also made of Mora?\\n<color=#37FFFF>{NICKNAME}:</color> Well, you need an excellent mind...\\n<color=#37FFFF>Paimon:</color> Well... Paimon's really good at giving people nicknames!\\n<color=#37FFFF>{NICKNAME}:</color> You need to be very familiar with the workings of the markets...\\n<color=#37FFFF>Paimon:</color> A serving of Fisherman's Toast goes for 1,025 Mora, and no discounts — even on rainy days.\\n<color=#37FFFF>{NICKNAME}:</color> You also need to be willing to work really hard...\\n<color=#37FFFF>Paimon:</color> Okay then... so, how do you make friends with a really rich person?\\n<color=#37FFFF>{NICKNAME}:</color> Wait, you're giving up already!?",
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
      audio: '38001',
      text: "#<color=#37FFFF>Paimon:</color> Umm... Do you think that Qiqi... needs to drink blood?\\n<color=#37FFFF>{NICKNAME}:</color> That's not a zombie, Paimon. That's a vampire.\\n<color=#37FFFF>Paimon:</color> Then, will she transform during a full moon?\\n<color=#37FFFF>{NICKNAME}:</color> Werewolves, Paimon. Not zombies.\\n<color=#37FFFF>Paimon:</color> Huh... As expected of a traveler, you really know a lot!\\n<color=#37FFFF>Paimon:</color> So, what special things can zombies do?\\n<color=#37FFFF>{NICKNAME}:</color> Exercises?\\n<color=#37FFFF>Paimon:</color> Ah, that makes a lot of sense! So, the ones that do exercises are zombies — got it!",
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
      audio: '10001',
      text: "#<color=#37FFFF>Paimon:</color> Come on, {NICKNAME}, Paimon'll teach you how to fly!\\n<color=#37FFFF>Paimon:</color> Three, two, one!\\n<color=#37FFFF>{NICKNAME}:</color> Ah, Paimon's gone.\\n<color=#37FFFF>{NICKNAME}:</color> Well, whatever. *sigh* I'm tired. Let's just... sit here for a bit.\\n<color=#37FFFF>{NICKNAME}:</color> *yawn* I'm flying with you... in my heart... Mm...",
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
      audio: '12001',
      text: "#<color=#37FFFF>Paimon:</color> What sort of slime do you like the most, {NICKNAME}?\\n<color=#37FFFF>{NICKNAME}:</color> Cryo Slimes, I think. You feel cold just getting close to them — you'll need that sort of thing in summer.\\n<color=#37FFFF>Paimon:</color> That's very practical, as expected of a traveler.\\n<color=#37FFFF>{NICKNAME}:</color> What about you, Paimon?\\n<color=#37FFFF>Paimon:</color> Paimon likes them all! They're all very tasty!\\n<color=#37FFFF>{NICKNAME}:</color> Tasty, huh...\\n<color=#37FFFF>Paimon:</color> Turning slimes into bubbly, lovely, jubbly meals is the Paimon Special!\\n<color=#37FFFF>{NICKNAME}:</color> Well then...\\n<color=#37FFFF>{NICKNAME}:</color> I suppose that's one more thing I can eat before you become emergency rations, huh, Paimon?\\n<color=#37FFFF>Paimon:</color> Uhh... Paimon would rather not be on that list at all!",
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
      audio: '13001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Do you think that we're too harsh on the hilichurls?\\n<color=#37FFFF>Paimon:</color> Well... sometimes we really do seem like children who just can't resist kicking the hornet's nest...\\n<color=#37FFFF>{NICKNAME}:</color> I think we're doing more than just kicking it...",
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
      audio: '14001',
      text: '#<color=#37FFFF>{NICKNAME}: </color> The "Sleeper tribe"... The hilichurls sure have interesting tribe names.\\n<color=#37FFFF>Paimon:</color> The Sleeper tribe will take any opportunity they can to take a nap.\\n<color=#37FFFF>Paimon:</color> Paimon\'s heard that their animal-skin beds are really soft. Would you like to try them?\\n<color=#37FFFF>{NICKNAME}:</color> Not gonna try it yourself, Paimon?\\n<color=#37FFFF>Paimon:</color> Paimon can sleep while floating! The air is the softest bed. Pretty sweet, huh?\\n<color=#37FFFF>{NICKNAME}:</color> ...Just a little.',
      tips: 'Unlock the teleport waypoint at Dadaupa Gorge, Mondstadt',
      tasks: null,
    },
    '39': {
      title: 'About the Meaties',
      audio: '15001',
      text: '#<color=#37FFFF>{NICKNAME}:</color> The "Meaty tribe," huh? These hilichurls pick the funniest names.\\n<color=#37FFFF>Paimon:</color> The hilichurls of the Meaty tribe make regular sacrifices. The altars they build are really huge.\\n<color=#37FFFF>{NICKNAME}:</color> What do they pray for?\\n<color=#37FFFF>Paimon:</color> "For meat to eat every day"! It\'s an awesome wish, isn\'t it?\\n<color=#37FFFF>{NICKNAME}:</color> ...I suppose I should have expected that answer.',
      tips: 'Unlock the teleport waypoint at Dadaupa Gorge, Mondstadt',
      tasks: null,
    },
    '40': {
      title: 'About the Eclipse Tribe',
      audio: '16001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> The \"Eclipse tribe\"... Huh. So the hilichurls have normal-sounding tribe names like these, too.\\n<color=#37FFFF>Paimon:</color> The hilichurls of the Eclipse tribe are really mysterious.\\n<color=#37FFFF>Paimon:</color> All the hilichurls of that tribe can draw an eclipse symbol.\\n<color=#37FFFF>Paimon:</color> But rumor has it that only the Dada Samachurl of the Eclipse tribe knows why the eclipse symbol is so revered within their tribe.\\n<color=#37FFFF>{NICKNAME}:</color> An eclipse symbol...\\n<color=#37FFFF>Paimon:</color> Hmm? Did you say something, {NICKNAME}?\\n<color=#37FFFF>{NICKNAME}:</color> Ah... I was... asking you what sort of soup you'd like to have tonight.\\n<color=#37FFFF>Paimon:</color> Can't stop thinking about food, huh? Seems like you'd be more at home in the Meaty tribe than the Eclipse tribe. But anyway, Paimon wants boar soup. Thanks!",
      tips: 'Unlock the teleport waypoint at Dadaupa Gorge, Mondstadt',
      tasks: null,
    },
    '41': {
      title: 'About Riches',
      audio: '17001',
      text: "#<color=#37FFFF>Paimon:</color> Paimon doesn't feel so good...\\n<color=#37FFFF>{NICKNAME}:</color> What's the matter?\\n<color=#37FFFF>Paimon:</color> Paimon hasn't opened a treasure chest in so long. If this keeps up... *whimpers*\\n<color=#37FFFF>{NICKNAME}:</color> If this keeps up, you'll one day get caught in a hunting trap with a single Mora as bait...\\n<color=#37FFFF>Paimon:</color> Hey! Paimon floats, so that'll never work.",
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
      audio: '19001',
      text: "#<color=#37FFFF>Paimon:</color> Wow, we've really had a lot of good food recently, haven't we?\\n<color=#37FFFF>Paimon:</color> You know what they say: \"Have food, will travel\"!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... Won't you be unable to fly if you get fat?\\n<color=#37FFFF>Paimon:</color> Nope! Paimon never gets fat!\\n<color=#37FFFF>{NICKNAME}:</color> Huh...\\n<color=#37FFFF>Paimon:</color> So Paimon demands more food!\\n<color=#37FFFF>{NICKNAME}:</color> Ever eating but never growing... Don't you fail as emergency rations, then?\\n<color=#37FFFF>Paimon:</color> Yeah, yeah... Well it sure doesn't look like you have any other candidates... So you'll have to make do with Paimon!",
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
      audio: '20001',
      text: "#<color=#37FFFF>Paimon:</color> Which do you like more: cats or dogs?\\n<color=#37FFFF>{NICKNAME}:</color> I prefer Paimon.\\n<color=#37FFFF>Paimon:</color> Aww, that's cheating~!\\n<color=#37FFFF>Paimon:</color> Wait, no! Paimon's not a pet!",
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
      audio: '44001',
      text: "#<color=#37FFFF>Paimon:</color> People say that if you put a Starconch close to your ear, you can hear the whispers of the ocean!\\n<color=#37FFFF>{NICKNAME}:</color> Do you want to give it a go, Paimon?\\n<color=#37FFFF>Paimon:</color> No need, Paimon just heard it!\\n<color=#37FFFF>{NICKNAME}:</color> Really? And what did the ocean say?\\n<color=#37FFFF>Paimon:</color> The ocean said... that it's time to eat, so let's go! Paimon wants some Fisherman's Toast!",
      tips: 'Unlock the teleport waypoint at Yaoguang Shoal, Liyue',
      tasks: null,
    },
    '45': {
      title: 'About Rock, Paper, Scissors',
      audio: '45001',
      text: "#<color=#37FFFF>Paimon:</color> We should get something tasty to eat! Uh, but Paimon doesn't wanna have to go get it...\\n<color=#37FFFF>{NICKNAME}:</color> Hmm, shall we decide with a game of rock-paper-scissors, then?\\n<color=#37FFFF>Paimon:</color> Ooh, okay!\\n<color=#37FFFF>{NICKNAME}:</color> Great! Alright, ready? Rock, paper—\\n<color=#37FFFF>Paimon:</color> —Super Paimon Tornado!\\n<color=#37FFFF>{NICKNAME}:</color> ...What?",
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
      audio: '46001',
      text: "#<color=#37FFFF>Paimon:</color> Phew! Paimon's been working so hard recently. Any ideas on how to relax?\\n<color=#37FFFF>{NICKNAME}:</color> Uhh... Sleeping?\\n<color=#37FFFF>Paimon:</color> Sleeping's boring.\\n<color=#37FFFF>{NICKNAME}:</color> Reading?\\n<color=#37FFFF>Paimon:</color> Paimon'll get dizzy.\\n<color=#37FFFF>{NICKNAME}:</color> ...Okay, having a chat with some friends?\\n<color=#37FFFF>Paimon:</color> ...Ugh.\\n<color=#37FFFF>Paimon:</color> But those're all things that require thinking.\\n<color=#37FFFF>Paimon:</color> And not thinking is more relaxing.\\n<color=#37FFFF>{NICKNAME}:</color> *sigh* And thus the \"Paimon Paradox,\" famed in the histories of philosophy in Teyvat, was put forth...",
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
      audio: '48001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Liyue's cuisine is very different from that of Mondstadt.\\n<color=#37FFFF>{NICKNAME}:</color> For example, in Mondstadt you can hardly find spicy fried dishes anywhere.\\n<color=#37FFFF>Paimon:</color> That's why they say \"climate creates cuisine,\" ya know?\\n<color=#37FFFF>Paimon:</color> But wait... Why do all of Teyvat's slimes taste the same, then?\\n<color=#37FFFF>{NICKNAME}:</color> That's because you only know one way of cooking them...",
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '48': {
      title: 'About Saving Money',
      audio: '49001',
      text: "#<color=#37FFFF>Paimon:</color> Wow, a weasel thief's backpack can really hide a lot of Mora!\\n<color=#37FFFF>{NICKNAME}:</color> Well, it's because weasels, by nature, enjoy collecting shiny objects.\\n<color=#37FFFF>Paimon:</color> Paimon's heard that the origin of the weasel thieves has something to do with the Treasure Hoarders...\\n<color=#37FFFF>Paimon:</color> Also, aren't crows the type to collect shinies as well?\\n<color=#37FFFF>Paimon:</color> Paimon wonders if Oz has a secret stash of Mora that he collects behind Fischl's back.\\n<color=#37FFFF>{NICKNAME}:</color> Well, now that you mention it, Paimon...\\n<color=#37FFFF>{NICKNAME}:</color> I wonder, do you have—\\n<color=#37FFFF>Paimon:</color> —Uhh... Nope. Nothing here! You won't find any Mora in Paimon's shoes, no way!",
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
      audio: '39001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Paimon, have you ever read \"Vera's Melancholy\" before?\\n<color=#37FFFF>Paimon:</color> Well, it sure sounds familiar!\\n<color=#37FFFF>{NICKNAME}:</color> That book's pretty popular, and I've heard that the author made a tidy sum off of it...\\n<color=#37FFFF>Paimon:</color> *sigh* Paimon would love to make lots and lots of Mora...\\n<color=#37FFFF>Paimon:</color> Hmm... It's decided, then! Paimon will write an adventure story as well!\\n<color=#37FFFF>{NICKNAME}:</color> A tale of adventure, by Paimon?\\n<color=#37FFFF>Paimon:</color> Correct! It'll be a story in which the brave traveler defeats the dragon, saves the world...\\n<color=#37FFFF>Paimon:</color> And then sits down with her reliable companion for ten servings of Sticky Honey Roast!\\n<color=#37FFFF>{NICKNAME}:</color> ...Ten!?\\n<color=#37FFFF>Paimon:</color> Uh-huh! A happy ending attracts the readers, after all!\\n<color=#37FFFF>Paimon:</color> It's decided, then! We'll call it \"Paimon's Happiness!\"\\n<color=#37FFFF>{NICKNAME}:</color> Wait, what?",
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
      audio: '50001',
      text: "#<color=#37FFFF>Paimon:</color> Have you ever had one of those super scary nightmares, {NICKNAME}?\\n<color=#37FFFF>{NICKNAME}:</color> Um, I've dreamt of falling through endless darkness...\\n<color=#37FFFF>{NICKNAME}:</color> Without a wind glider.\\n<color=#37FFFF>Paimon:</color> Eek...\\n<color=#37FFFF>{NICKNAME}:</color> I've also dreamt of my brother walking away from me, while I'm unable to catch up to him no matter how fast I run.\\n<color=#37FFFF>{NICKNAME}:</color> ...He tells me that I've \"come too late.\"\\n<color=#37FFFF>Paimon:</color> Oh...\\n<color=#37FFFF>Paimon:</color> Yours are quite different from the ones that Paimon's had.\\n<color=#37FFFF>Paimon:</color> Paimon's scariest dream was being eaten by a super giant slime.",
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
      audio: '51001',
      text: "#<color=#37FFFF>{NICKNAME}:</color> I wonder where those treasure-chasing Seelie come from.\\n<color=#37FFFF>Paimon:</color> Maybe they grow out of the ground — or maybe they fall from trees?\\n<color=#37FFFF>Paimon:</color> Well, Paimon doesn't know where they come from, but where there are Seelie, treasure's not far away!\\n<color=#37FFFF>{NICKNAME}:</color> *sigh* Still... why do I feel a certain sadness every time they touch those treasures?\\n<color=#37FFFF>Paimon:</color> Hmm?\\n<color=#37FFFF>{NICKNAME}:</color> ...No, it's probably just my imagination.\\n<color=#37FFFF>Paimon:</color> Well... if you don't want the treasure, Paimon can hang onto it for you, free of charge!",
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
      audio: '54001',
      text: "#<color=#37FFFF>Paimon:</color> Has anyone left a big impression on you during our recent travels?\\n<color=#37FFFF>Paimon:</color> For Paimon, that's Sara.\\n<color=#37FFFF>{NICKNAME}:</color> Timmie.\\n<color=#37FFFF>Paimon:</color> ...Huh? Why him?\\n<color=#37FFFF>{NICKNAME}:</color> *sigh* His face comes to mind every time I've eaten a Sweet Madame recently... Really makes it hard to chow down.",
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
      audio: '21001',
      text: "#<color=#37FFFF>Paimon:</color> You learn new things so quickly.\\n<color=#37FFFF>Paimon:</color> You've already got such a good grasp of Teyvat's language.\\n<color=#37FFFF>{NICKNAME}:</color> You're a good teacher, Paimon.\\n<color=#37FFFF>Paimon:</color> Aww, hehehe...\\n<color=#37FFFF>{NICKNAME}:</color> Who knows, maybe the quality of your nasty nicknames will improve someday.",
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
      title: "About Paimon's Species",
      audio: '18001',
      text: '#<color=#37FFFF>{NICKNAME}:</color> What monster made the deepest impression on you?\\n<color=#37FFFF>Paimon:</color> Monsters, huh? Probably... Ruin Guards.\\n<color=#37FFFF>{NICKNAME}:</color> Does a Ruin Guard really count as a monster? It\'s more like a machine...\\n<color=#37FFFF>Paimon:</color> Paimon thinks that you can call anything that causes us trouble and needs to be defeated a "monster."\\n<color=#37FFFF>Paimon:</color> Just like how we call anything that can be hunted "prey."\\n<color=#37FFFF>{NICKNAME}:</color> Is that so... Well then, I think I\'m finally able to classify you now, Paimon.\\n<color=#37FFFF>Paimon:</color> Eh? What do you mean?\\n<color=#37FFFF>{NICKNAME}:</color> You can be hooked and reeled in... therefore, you\'re a fish!\\n<color=#37FFFF>Paimon:</color> Hmph!',
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
      audio: '22001',
      text: "#<color=#37FFFF>Paimon:</color> Hey, do that again! You know, that thing!\\n<color=#37FFFF>{NICKNAME}:</color> Which one?\\n<color=#37FFFF>Paimon:</color> The one where you make your weapon disappear with a swish, and then, fwoosh — you make it appear behind your back again!\\n<color=#37FFFF>{NICKNAME}:</color> Oh, that. Haven't you seen that a ton already?\\n<color=#37FFFF>Paimon:</color> But Paimon hasn't figured out how you do it yet. Could you explain it?\\n<color=#37FFFF>{NICKNAME}:</color> Well, can you explain how you suddenly appear in front of me, and then disappear just as suddenly?\\n<color=#37FFFF>Paimon:</color> Uh... well... Paimon seems to have always been able to do this. But Paimon doesn't know how...\\n<color=#37FFFF>{NICKNAME}:</color> Precisely. I believe that the art of putting my weapon away follows the same principle.\\n<color=#37FFFF>{NICKNAME}:</color> Maybe it's this similarity that makes us such good friends.",
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
      audio: '23001',
      text: "#<color=#37FFFF>Paimon:</color> {NICKNAME}, what do you think of treasure chests?\\n<color=#37FFFF>{NICKNAME}:</color> I believe that they were left behind by great travelers who once passed this way.\\n<color=#37FFFF>{NICKNAME}:</color> Every time I open one and look at its contents, I can feel a certain kinship with those who came before...\\n<color=#37FFFF>Paimon:</color> And that's how you get adventure experience!",
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
      audio: '55001',
      text: "#<color=#37FFFF>Paimon:</color> Look into Paimon's eyes!\\n<color=#37FFFF>{NICKNAME}:</color> Something the matter?\\n<color=#37FFFF>Paimon:</color> Kaeya said that people's eyes will betray them.\\n<color=#37FFFF>Paimon:</color> He can tell if someone is telling the truth or not just by looking into their eyes.\\n<color=#37FFFF>{NICKNAME}:</color> Huh...\\n<color=#37FFFF>Paimon:</color> Paimon loves Fisherman's Toast!\\n<color=#37FFFF>{NICKNAME}:</color> That should be the truth. Haha, well, that's also because you love everything that can be eaten.\\n<color=#37FFFF>Paimon:</color> Hehe.\\n<color=#37FFFF>{NICKNAME}:</color> Speaking of looking into people's eyes... I remember one gaze that left a particularly deep impression on me.\\n<color=#37FFFF>Paimon:</color> Whose gaze was that?\\n<color=#37FFFF>{NICKNAME}:</color> A Ruin Guard's. Really made me want to poke its eye out...",
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
      audio: '65001',
      text: "#<color=#37FFFF>Paimon:</color> Ugh, Paimon's so bored... So tired...\\n<color=#37FFFF>{NICKNAME}:</color> Well, since we're bored either way, wanna imitate the other Knights for fun?\\n<color=#37FFFF>Paimon:</color> Huh? Isn't that a bit disrespectful?\\n<color=#37FFFF>{NICKNAME}:</color> Haha, I see you already have the knightly virtue of modesty and politeness. Very impressive.\\n<color=#37FFFF>Paimon:</color> Hey! Paimon sees what you're doing. Cut it out!",
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
      audio: '42001',
      text: "#<color=#37FFFF>Paimon:</color> Urrrrgh...\\n<color=#37FFFF>{NICKNAME}:</color> Huh? Are there pigeons around?\\n<color=#37FFFF>Paimon:</color> No, Paimon's just hungry.\\n<color=#37FFFF>Paimon:</color> What Paimon needs right now is a traveler who can whip up some delicious Sticky Honey Roast.\\n<color=#37FFFF>Paimon:</color> So, who's going to be the lucky traveler? Hmm?",
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
    '60': {
      title: 'Elemental Skill: I',
      audio: '100001',
      text: 'Huh!',
      tips: '',
      tasks: null,
    },
    '61': {
      title: 'Elemental Skill: II',
      audio: '100002',
      text: 'Hah!',
      tips: '',
      tasks: null,
    },
    '62': {
      title: 'Elemental Skill: III',
      audio: '100003',
      text: 'Wind blade!',
      tips: '',
      tasks: null,
    },
    '63': {
      title: 'Elemental Skill: IV',
      audio: '100004',
      text: 'Huh!',
      tips: '',
      tasks: null,
    },
    '64': {
      title: 'Elemental Skill: V',
      audio: '100005',
      text: 'Drop!',
      tips: '',
      tasks: null,
    },
    '65': {
      title: 'Elemental Skill: VI',
      audio: '100006',
      text: 'Starfall!',
      tips: '',
      tasks: null,
    },
    '66': {
      title: 'Elemental Skill: VII',
      audio: '100007',
      text: 'Hah!',
      tips: '',
      tasks: null,
    },
    '67': {
      title: 'Elemental Skill: VIII',
      audio: '100008',
      text: 'Take this!',
      tips: '',
      tasks: null,
    },
    '68': {
      title: 'Elemental Skill: IX',
      audio: '100009',
      text: 'Lightning Slash!',
      tips: '',
      tasks: null,
    },
    '69': {
      title: 'Elemental Skill: X',
      audio: '100010',
      text: 'Hyah!',
      tips: '',
      tasks: null,
    },
    '70': {
      title: 'Elemental Skill: XI',
      audio: '100011',
      text: 'Scatter!',
      tips: '',
      tasks: null,
    },
    '71': {
      title: 'Elemental Skill: XII',
      audio: '100012',
      text: 'Propagate!',
      tips: '',
      tasks: null,
    },
    '72': {
      title: 'Elemental Skill: XIII',
      audio: '100013',
      text: 'Ha!',
      tips: '',
      tasks: null,
    },
    '73': {
      title: 'Elemental Skill: XIV',
      audio: '100014',
      text: 'Go!',
      tips: '',
      tasks: null,
    },
    '74': {
      title: 'Elemental Skill: XV',
      audio: '100015',
      text: 'Water jet!',
      tips: '',
      tasks: null,
    },
    '75': {
      title: 'Elemental Skill: XVI',
      audio: '100016',
      text: 'Hyah!',
      tips: '',
      tasks: null,
    },
    '76': {
      title: 'Elemental Skill: XVII',
      audio: '100017',
      text: 'Time to ignite!',
      tips: '',
      tasks: null,
    },
    '77': {
      title: 'Elemental Skill: XVIII',
      audio: '100018',
      text: 'Scorch and burn!',
      tips: '',
      tasks: null,
    },
    '78': {
      title: 'Elemental Skill: XIX',
      audio: '100019',
      text: 'Haah!',
      tips: '',
      tasks: null,
    },
    '79': {
      title: 'Elemental Skill: XX',
      audio: '100020',
      text: 'Honed in flame!',
      tips: '',
      tasks: null,
    },
    '80': {
      title: 'Elemental Skill: XXI',
      audio: '100021',
      text: 'Blazing light!',
      tips: '',
      tasks: null,
    },
    '81': {
      title: 'Elemental Burst: I',
      audio: '200001',
      text: 'Hyah!',
      tips: '',
      tasks: null,
    },
    '82': {
      title: 'Elemental Burst: II',
      audio: '200002',
      text: 'Be gone!',
      tips: '',
      tasks: null,
    },
    '83': {
      title: 'Elemental Burst: III',
      audio: '200003',
      text: 'Prepare to be blown away!',
      tips: '',
      tasks: null,
    },
    '84': {
      title: 'Elemental Burst: IV',
      audio: '200004',
      text: 'Haah!',
      tips: '',
      tasks: null,
    },
    '85': {
      title: 'Elemental Burst: V',
      audio: '200005',
      text: 'Shake!',
      tips: '',
      tasks: null,
    },
    '86': {
      title: 'Elemental Burst: VI',
      audio: '200006',
      text: 'Crumble apart!',
      tips: '',
      tasks: null,
    },
    '87': {
      title: 'Elemental Burst: VII',
      audio: '200007',
      text: 'He!',
      tips: '',
      tasks: null,
    },
    '88': {
      title: 'Elemental Burst: VIII',
      audio: '200008',
      text: 'Thunder Clap!',
      tips: '',
      tasks: null,
    },
    '89': {
      title: 'Elemental Burst: IX',
      audio: '200009',
      text: 'Bellowing Thunder!',
      tips: '',
      tasks: null,
    },
    '90': {
      title: 'Elemental Burst: X',
      audio: '200010',
      text: 'Hyah!',
      tips: '',
      tasks: null,
    },
    '91': {
      title: 'Elemental Burst: XI',
      audio: '200011',
      text: 'Germinate!',
      tips: '',
      tasks: null,
    },
    '92': {
      title: 'Elemental Burst: XII',
      audio: '200012',
      text: 'Spring forth!',
      tips: '',
      tasks: null,
    },
    '93': {
      title: 'Elemental Burst: XIII',
      audio: '200013',
      text: 'Ha!',
      tips: '',
      tasks: null,
    },
    '94': {
      title: 'Elemental Burst: XIV',
      audio: '200014',
      text: 'Wipeout!',
      tips: '',
      tasks: null,
    },
    '95': {
      title: 'Elemental Burst: XV',
      audio: '200015',
      text: 'Bombs away!',
      tips: '',
      tasks: null,
    },
    '96': {
      title: 'Elemental Burst: XVI',
      audio: '200016',
      text: 'Ha!',
      tips: '',
      tasks: null,
    },
    '97': {
      title: 'Elemental Burst: XVII',
      audio: '200017',
      text: 'A new dawn rises!',
      tips: '',
      tasks: null,
    },
    '98': {
      title: 'Elemental Burst: XVIII',
      audio: '200018',
      text: 'By everlasting flame!',
      tips: '',
      tasks: null,
    },
    '99': {
      title: 'Opening Treasure Chest: I',
      audio: '300001',
      text: 'Is this... an answer from this world?',
      tips: '',
      tasks: null,
    },
    '100': {
      title: 'Opening Treasure Chest: II',
      audio: '300002',
      text: 'A reward on the road.',
      tips: '',
      tasks: null,
    },
    '101': {
      title: 'Opening Treasure Chest: III',
      audio: '300003',
      text: "I'll keep this close.",
      tips: '',
      tasks: null,
    },
    '102': {
      title: 'Ally at Low HP: I',
      audio: '400001',
      text: 'Let me take over!',
      tips: '',
      tasks: null,
    },
    '103': {
      title: 'Ally at Low HP: II',
      audio: '400002',
      text: 'Look out!',
      tips: '',
      tasks: null,
    },
    '104': {
      title: 'Fallen: I',
      audio: '500001',
      text: 'This is not the end...',
      tips: '',
      tasks: null,
    },
    '105': {
      title: 'Fallen: II',
      audio: '500002',
      text: "Maybe I wasn't meant for this world...",
      tips: '',
      tasks: null,
    },
    '106': {
      title: 'Joining Party: I',
      audio: '600001',
      text: 'Just what will we come across this time?',
      tips: '',
      tasks: null,
    },
    '107': {
      title: 'Joining Party: II',
      audio: '600002',
      text: 'This world is full of unsolved mysteries...',
      tips: '',
      tasks: null,
    },
    '108': {
      title: 'Joining Party: III',
      audio: '600003',
      text: "There's still a long road ahead.",
      tips: '',
      tasks: null,
    },
    '109': {
      title: 'About the Vision Hunt Decree',
      audio: '71001',
      text: "#<color=#37FFFF>Paimon: </color>It's hard to talk about the recent events in Inazuma and not mention the Vision Hunt Decree.\\n<color=#37FFFF>Paimon: </color>But you don't have a Vision, so you don't have to worry about losing one.\\n<color=#37FFFF>Paimon: </color>On the flip side, if you are caught by the Tenryou Commission, {NICKNAME}, you also can't surrender your Vision in exchange for your life...\\n<color=#37FFFF>{NICKNAME}: </color>I can tell them that you are my Vision.\\n<color=#37FFFF>Paimon: </color>Another reason to have Paimon around... Wait, WHAT!?\\n<color=#37FFFF>{NICKNAME}: </color>Don't worry, I wouldn't let them take you, Paimon.\\n<color=#37FFFF>Paimon: </color>That's more like it.\\n<color=#37FFFF>{NICKNAME}: </color>We'd just go to jail and suffer punishment together...\\n<color=#37FFFF>Paimon: </color>Uh... W—Well, if that's how it would go down, then maybe you should hand me over to them...\\n<color=#37FFFF>Paimon: </color>...Wait a minute! How about we just don't get caught in the first place?",
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
      audio: '71002',
      text: "#<color=#37FFFF>Paimon: </color>Only the ones who have the will to fight back are allowed into the Resistance!\\n<color=#37FFFF>Paimon: </color>Huh. In that case, Paimon also qualifies as a member.\\n<color=#37FFFF>{NICKNAME}: </color>And what exactly are you trying to resist, Paimon?\\n<color=#37FFFF>Paimon: </color>Paimon has been resisting against the fate of being squished all this time!\\n<color=#37FFFF>{NICKNAME}: </color>Then you probably won't get in.\\n<color=#37FFFF>Paimon: </color>Why? Is it because Paimon isn't fighting for the same cause as the Resistance?\\n<color=#37FFFF>{NICKNAME}: </color>It's because you're fighting for a lost cause, I'm afraid...\\n<color=#37FFFF>Paimon: </color>*sob* Y—You meanie!",
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
      audio: '71003',
      text: "#<color=#37FFFF>Paimon: </color>Kamuileon... Cannon? Kamuijuicy... Cannon? Kamuijimmy... Cannon? Ugh... What a mouthful.\\n<color=#37FFFF>{NICKNAME}: </color>What are you reading, Paimon?\\n<color=#37FFFF>Paimon: </color>Look, it's the super weapon the Shogunate army has constructed nearby to protect Tatarasuna.\\n<color=#37FFFF>Paimon: </color> Kamuijima! Cannon!\\n<color=#37FFFF>{NICKNAME}: </color>It looks really powerful... And yet, we didn't see it do anything while we were in Tatarasuna.\\n<color=#37FFFF>Paimon: </color>It seems like the Resistance knew how strong it was, so before formally waging war against the Shogunate, they had covertly occupied this place.\\n<color=#37FFFF>Paimon: </color>But this Kamui... Kamuijima Cannon needs either special ammunition or Electro to work, so it's no use to the Resistance.\\n<color=#37FFFF>Paimon: </color>The Shogunate army put so much time and effort into creating this weapon... Paimon really wants to see the extent of its power.\\n<color=#37FFFF>{NICKNAME}: </color>If all you need is an Electro user, perhaps I can help.\\n<color=#37FFFF>Paimon: </color>That's right! Now we just need something that would serve as our cannon ball...\\n<color=#37FFFF>Paimon: </color>Huh? ...Why are you giving me that look? Hey—",
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
      audio: '71004',
      text: "#<color=#37FFFF>Paimon: </color>You know what? When we first arrived at the Komore Teahouse, Paimon really thought that Taroumaru would be able to speak...\\n<color=#37FFFF>{NICKNAME}: </color>You sound a bit disappointed.\\n<color=#37FFFF>Paimon: </color>Of course! If Taroumaru could speak, Paimon feels that he'd say something really interesting!\\n<color=#37FFFF>{NICKNAME}: </color>For example?\\n<color=#37FFFF>Paimon: </color>Hmm... \"Thoma, stop hiding around here, you're in my way! *woof*\"\\n<color=#37FFFF>{NICKNAME}: </color>That makes sense.\\n<color=#37FFFF>Paimon: </color>Or... \"Kozue, you're bound to me for the rest of your life, unless our contract is terminated! *woof* *woof*\"\\n<color=#37FFFF>{NICKNAME}: </color>You didn't believe Kozue when she said she'd signed a secret contract forcing her to work part-time at the Teahouse, did you?\\n<color=#37FFFF>Paimon: </color>Oh! Paimon just thought of another one. This one's quite good—\\n<color=#37FFFF>Paimon: </color>\"Just look at this visitor! Paimon, is it? Look at how cute and clever she is. Today, all her meals are on the house! *woof*\"\\n<color=#37FFFF>{NICKNAME}: </color>There's no way Taroumaru would say something like that.\\n<color=#37FFFF>Paimon: </color>Hee-hee...",
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
      audio: '71005',
      text: "#<color=#37FFFF>Paimon: </color>Hmm...\\n<color=#37FFFF>{NICKNAME}: </color>What are you mulling over, Paimon?\\n<color=#37FFFF>Paimon: </color>{NICKNAME}, do you remember Gorou's fluffy ears?\\n<color=#37FFFF>Paimon: </color>Paimon really wants something like that... Or maybe horns similar to the ones Ganyu has. Ganyu's horns are pretty cute as well.\\n<color=#37FFFF>Paimon: </color>{NICKNAME}, do you have any ideas?\\n<color=#37FFFF>{NICKNAME}: </color>Let me see, hmm... Oh, I found something!\\n<color=#37FFFF>Paimon: </color>Really? Aw, {NICKNAME}, Paimon always knew you were reliable!\\n<color=#37FFFF>{NICKNAME}: </color>Ta-da! I present to you the Tusk of Monoceros Caeli!\\n<color=#37FFFF>Paimon: </color>Paimon doesn't need that!\\n<color=#37FFFF>Paimon: </color>*sigh* If Paimon can't have Gorou's fluffy ears, then maybe at least something like his fluffy tail...\\n<color=#37FFFF>{NICKNAME}: </color>Bubadada! Here you go — Tail of Boreas!\\n<color=#37FFFF>Paimon: </color>...Not that! Also, combining those two is definitely not the look Paimon is going for!",
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
      audio: '71007',
      text: "#<color=#37FFFF>Paimon: </color>It's amazing that Inazuma has places like the Yae Publishing House which specializes in publishing novels!\\n<color=#37FFFF>Paimon: </color>They even host competitions! Wow!\\n<color=#37FFFF>{NICKNAME}: </color>If that's the case, then perhaps you can submit a draft of the book you've been working on, \"Paimon's Happiness.\"\\n<color=#37FFFF>Paimon: </color>Well, about that... Paimon has misplaced the drafts on our way to Inazuma...\\n<color=#37FFFF>{NICKNAME}: </color>...Really?\\n<color=#37FFFF>Paimon: </color>Fine! Paimon hasn't started writing it yet...\\n<color=#37FFFF>Paimon: </color>It's not Paimon's fault! Paimon's been meaning to do it but three days ago, Paimon's pen broke. The day before yesterday, Paimon had hand cramps. Yesterday — a sprained foot. Today... Paimon... Hmmm... Paimon's hungry!\\n<color=#37FFFF>{NICKNAME}: </color>Hehe, it sounds like you'll sooner write \"A Thousand Excuses with Paimon\" than \"Paimon's Happiness.\"",
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
      audio: '71008',
      text: "#<color=#37FFFF>Paimon: </color>Kazuha is a free spirit, wouldn't you say?\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, he seems to be a bit of a loner too.\\n<color=#37FFFF>Paimon: </color>Being able to explore the world at his leisure while savoring the beauty of everything around him. That doesn't sound too shabby...\\n<color=#37FFFF>Paimon: </color>{NICKNAME}, you aren't thinking of sneaking off to go on a solo adventure, right?\\n<color=#37FFFF>{NICKNAME}: </color>Aw, I would never leave you, Paimon.\\n<color=#37FFFF>Paimon: </color>Paimon's really happy to hear that. Here... Hee—hee, have this...\\n<color=#37FFFF>{NICKNAME}: </color>Monthly food expenses... 300,000 Mora!?\\n<color=#37FFFF>Paimon: </color>Hey! Wait! {NICKNAME}, Where are you going?\\n<color=#37FFFF>{NICKNAME}: </color>I suddenly feel like going solo. Maybe it's not a bad idea after all.\\n<color=#37FFFF>Paimon: </color>Please don't go! Wait for Paimon!",
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
      audio: '71009',
      text: "#<color=#37FFFF>Paimon: </color>Hmmm...\\n<color=#37FFFF>{NICKNAME}: </color>Paimon, you look so serious today.\\n<color=#37FFFF>Paimon: </color>That's because Paimon's thinking about serious things.\\n<color=#37FFFF>Paimon: </color>Paimon's jealous of people from wealthy and influential families. They have an endless supply of Mora and mountains of delicious food to eat...\\n<color=#37FFFF>{NICKNAME}: </color>I can't disagree. Those are exactly the things you're fond of.\\n<color=#37FFFF>Paimon: </color>But after getting to know Ayaka better, Paimon realized that a young lady from a noble family can also have her share of hardships.\\n<color=#37FFFF>Paimon: </color>She needs to shoulder her clan's duties and responsibilities. She works so hard and has very little time for herself.\\n<color=#37FFFF>Paimon: </color>Ayaka must be exhausted, she should try to relax a bit...\\n<color=#37FFFF>Paimon: </color>Ah, that's right! Let's invite Ayaka to the next festival!\\n<color=#37FFFF>Paimon: </color>If she got an invite from us, there's no way she'd refuse.\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, I'd like to go to another festival with her.\\n<color=#37FFFF>Paimon: </color>Besides, if Ayaka's around, she can pick up the tab for us...\\n<color=#37FFFF>{NICKNAME}: </color>...I should've seen that coming...",
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
      audio: '71010',
      text: '#<color=#37FFFF>Paimon: </color>Ayaka gives a sense of noble elegance with every gesture she makes.\\n<color=#37FFFF>{NICKNAME}: </color>Can you do an Ayaka impression, Paimon?\\n<color=#37FFFF>Paimon: </color>Let\'s give it a try.\\n<color=#37FFFF>Paimon: </color>"Oh my, you\'ve been picking mushrooms so earnestly just to make Chicken-Mushroom Skewers for me?"\\n<color=#37FFFF>Paimon: </color>"How cute..."\\n<color=#37FFFF>{NICKNAME}: </color>That was nothing like Ayaka. But...\\n<color=#37FFFF>{NICKNAME}: </color>Even though you didn\'t sound like yourself, it didn\'t feel completely out of place for you either...',
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
      audio: '71011',
      text: "#<color=#37FFFF>Paimon: </color>It's a well-established tradition that during Inazuman celebrations everyone's wearing festive masks.\\n<color=#37FFFF>Paimon: </color>Paimon tried to look around the stalls, but hasn't found any mask that fits...\\n<color=#37FFFF>{NICKNAME}: </color>So you really want a mask of your own?\\n<color=#37FFFF>Paimon: </color>Of course! Not wearing a mask during an Inazuman festival is the same as not receiving a bouquet at the Windblume Festival...\\n<color=#37FFFF>{NICKNAME}: </color>Let me make one for you.\\n<color=#37FFFF>Paimon: </color>Whoa! {NICKNAME}, you're the best!\\n<color=#37FFFF>{NICKNAME}: </color>Hmmm, I wonder what kind of mask will fit you best? How about... a slime mask?\\n<color=#37FFFF>Paimon: </color>Yay, Paimon Slime!",
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
      audio: '71012',
      text: "#<color=#37FFFF>Paimon: </color>Do you think Yoimiya's dad's poor hearing is related to fireworks?\\n<color=#37FFFF>Paimon: </color>He's been making and testing fireworks for many years now, and being exposed to the sound of gunpowder explosions on a daily basis... Paimon can see how that might've worn down his ears...\\n<color=#37FFFF>Paimon: </color>Yikes! Since Yoimiya is inheriting her family business, does that mean she'll have trouble hearing other people in the future, just like her dad?\\n<color=#37FFFF>Paimon: </color>Paimon won't let that happen! Let's think of some way to help her!\\n<color=#37FFFF>{NICKNAME}: </color>Do you have any suggestions, Paimon?\\n<color=#37FFFF>Paimon: </color>Uh... Um...\\n<color=#37FFFF>Paimon: </color>Paimon could follow Yoimiya around and cover her ears whenever needed...\\n<color=#37FFFF>{NICKNAME}: </color>Then you'd need to leave me.\\n<color=#37FFFF>Paimon: </color>...Without Paimon, you'd lose your guide. Paimon wouldn't leave you like that!\\n<color=#37FFFF>Paimon: </color>But... What should we do for Yoimiya...\\n<color=#37FFFF>{NICKNAME}: </color>Actually, she can simply wear earplugs while working with fireworks.\\n<color=#37FFFF>Paimon: </color>Oh yeah! Paimon didn't think of that solution! You're so smart!\\n<color=#37FFFF>{NICKNAME}: </color>Heh... That was the first thing that came to my mind, but I wanted to give you an opportunity for a mental workout.\\n<color=#37FFFF>Paimon: </color>Eh? So you knew this whole time, but didn't tell Paimon?\\n<color=#37FFFF>Paimon: </color>How could you! You bully!",
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
      audio: '71013',
      text: "#<color=#37FFFF>Paimon: </color>Sayu seems to have a lot on her mind.\\n<color=#37FFFF>Paimon: </color>Paimon can't understand why she'd have so many worries.\\n<color=#37FFFF>{NICKNAME}: </color>I guess this is what they call growing pains.\\n<color=#37FFFF>Paimon: </color>Hmm, Paimon can't relate to that.\\n<color=#37FFFF>Paimon: </color>After all, it's not Paimonly to worry too much.\\n<color=#37FFFF>{NICKNAME}: </color>Hmmm...\\n<color=#37FFFF>{NICKNAME}: </color>Bad news! We're almost out of Mora. I guess we'll have to tighten the purse strings for the next few days...\\n<color=#37FFFF>Paimon: </color>Wh-What? Noooo!\\n<color=#37FFFF>{NICKNAME}: </color>See, you're not as carefree as you thought.\\n<color=#37FFFF>Paimon: </color>Ooh... How could you prank Paimon like that...",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '121': {
      title: 'About Onikabuto',
      audio: '71014',
      text: "#<color=#37FFFF>Paimon: </color>Those Onikabuto bugs look so scary! The patterns on their backs are terrifying!\\n<color=#37FFFF>{NICKNAME}: </color>Do you mean those demonic patterns? It's because they don't like to fight, so they purposely evolved their patterns in a way that scares their enemies away.\\n<color=#37FFFF>Paimon: </color>That's really smart. We should try to learn a thing or two from them!\\n<color=#37FFFF>Paimon: </color>We could borrow Xiao's mask. If a hilichurl saw you wearing it, do you think they'd run in fear?\\n<color=#37FFFF>{NICKNAME}: </color>Uh... I don't think Xiao would agree to that...\\n<color=#37FFFF>Paimon: </color>Yeah... Hmm, how about we ask Sayu to steal his mask for us?\\n<color=#37FFFF>Paimon: </color>She knows ninjutsu that allows her to vanish into thin air. She can steal it for sure! Problem solved!\\n<color=#37FFFF>Paimon: </color>Uh... If we are afraid of Xiao evening the score with us, how about we steal Childe's mask? We've kicked his butt many times before!\\n<color=#37FFFF>{NICKNAME}: </color>I don't think stealing other people's belongings is a good idea. Also, what if Sayu doesn't agree to all of this?\\n<color=#37FFFF>Paimon: </color>Th—Then let's... Let's visit Albedo first.\\n<color=#37FFFF>Paimon: </color>If Albedo can develop a growth serum for Sayu, she'll help us for sure!\\n<color=#37FFFF>{NICKNAME}: </color>Brilliant, now we just need you to come up with a way to make Albedo help us.\\n<color=#37FFFF>Paimon: </color>Ugh! Paimon's head is going to explode. Let's stick to festival masks for now.",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '122': {
      title: 'About Naku Weed',
      audio: '71015',
      text: '#<color=#37FFFF>Paimon: </color>Even though Naku Weed has a flower-like structure, its "petals" are in fact leaves.\\n<color=#37FFFF>Paimon: </color>Its actual bloom is rather fragile, so the surrounding leaves try their hardest to grow strong and protect it...\\n<color=#37FFFF>Paimon: </color>Hee-hee, just like Paimon is protecting you right now.\\n<color=#37FFFF>{NICKNAME}: </color>Just like you? Oh, is Naku Weed edible too?\\n<color=#37FFFF>Paimon: </color>Yeah, that\'s right! ...Wait? What are you trying to say?',
      tips: 'Unlock the Statue of The Seven (Electro) in Tatarasuna, Inazuma',
      tasks: null,
    },
    '123': {
      title: 'About Naku Weed and Storms',
      audio: '71016',
      text: "#<color=#37FFFF>Paimon: </color>Did you know? The people in Inazuma use the vibrations of Naku Weed to forecast thunderstorms.\\n<color=#37FFFF>Paimon: </color>Because Naku Weed grows in areas that are infused with Electro, it's naturally drawn to thunder and lightning.\\n<color=#37FFFF>{NICKNAME}: </color>Does that mean Naku Weed is similar to you, Paimon?\\n<color=#37FFFF>Paimon: </color>Eh? How so?\\n<color=#37FFFF>{NICKNAME}: </color>You know, because you usually hang out in areas infused with gourmet food and are naturally drawn to tasty snacks!\\n<color=#37FFFF>Paimon: </color>Hee-hee, that's true!\\n<color=#37FFFF>{NICKNAME}: </color>Paimon radar activated...\\n<color=#37FFFF>Paimon: </color>*beep* Delicacies, here we go!",
      tips: 'Unlock the Statue of The Seven (Electro) in Tatarasuna, Inazuma',
      tasks: null,
    },
    '124': {
      title: 'About Sakura Blooms',
      audio: '71017',
      text: "#<color=#37FFFF>Paimon: </color>The blossoms drifting down from the Sacred Sakura are so dazzling!\\n<color=#37FFFF>Paimon: </color>Paimon heard that those flower petals can stay suspended in the air for so long because of being infused with Electro.\\n<color=#37FFFF>{NICKNAME}: </color>Is it the same principle behind your levitation abilities?\\n<color=#37FFFF>Paimon: </color>Uh... Ah... That's because...\\n<color=#37FFFF>{NICKNAME}: </color>You do know what allows you to fly, don't you, Paimon?\\n<color=#37FFFF>Paimon: </color>Paimon can fly because of... mysterious powers, obviously!\\n<color=#37FFFF>{NICKNAME}: </color>Got it. Seems like you have no idea.\\n<color=#37FFFF>{NICKNAME}: </color>How about we let Albedo do some research? He's good at cracking such mysteries...\\n<color=#37FFFF>Paimon: </color>Please don't!",
      tips: 'Unlock teleport waypoints in Grand Narukami Shrine',
      tasks: null,
    },
    '125': {
      title: 'About Lavender Melons',
      audio: '71018',
      text: "#<color=#37FFFF>Paimon: </color>Lavender Melons sure are useful!\\n<color=#37FFFF>Paimon: </color>Their flesh can be eaten, and their skin can be processed to make dyes.\\n<color=#37FFFF>{NICKNAME}: </color>Paimon sure is useful!\\n<color=#37FFFF>{NICKNAME}: </color>She can serve as my guide, and she can also give other people ugly nicknames, haha.\\n<color=#37FFFF>Paimon: </color>Yep! Thank you for your validation!\\n<color=#37FFFF>Paimon: </color>Wait a minute, is there more? Is Paimon about to get roasted?\\n<color=#37FFFF>Paimon: </color>Paimon's gonna cover your mouth to stop you from talking!",
      tips: 'Unlock teleport waypoints in Konda Village',
      tasks: null,
    },
    '126': {
      title: 'About Swords',
      audio: '71019',
      text: "#<color=#37FFFF>Paimon: </color>{NICKNAME}, have you noticed?\\n<color=#37FFFF>Paimon: </color>In Inazuma, people who wear swords on their waists are a minority. Most soldiers use spears.\\n<color=#37FFFF>Paimon: </color>Could it be that swords are a symbol of status... Should we wear them as well?\\n<color=#37FFFF>Paimon: </color>But the swords here are all too big for Paimon... There's no other way, we'll have to find a famous swordsmith to make a custom one!\\n<color=#37FFFF>{NICKNAME}: </color>A custom-made sword will cost a lot of Mora though.\\n<color=#37FFFF>Paimon: </color>Are you saying that Mora is more important than the desires of your lovely companion?\\n<color=#37FFFF>{NICKNAME}: </color>...Actually, I've already prepared something for you, Paimon.\\n<color=#37FFFF>Paimon: </color>Really? Really? Let's have a look!\\n<color=#37FFFF>Paimon: </color>Hey! Isn't that the knife we use to cut fruit?\\n<color=#37FFFF>{NICKNAME}: </color>Well, at least it's the right size for you...\\n<color=#37FFFF>{NICKNAME}: </color>Ahem, \"What matters isn't the value of the sword, it's the fighting spirit.\"\\n<color=#37FFFF>Paimon: </color>Nice try, but Paimon won't fall for this, no matter how cool it sounds!",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '127': {
      title: 'About Hot Springs',
      audio: '71020',
      text: "#<color=#37FFFF>Paimon: </color>Did you know there are hot springs in Inazuma?\\n<color=#37FFFF>{NICKNAME}: </color>...But there are no volcanoes.\\n<color=#37FFFF>Paimon: </color>Umm, Paimon heard that the heat comes from a giant furnace!\\n<color=#37FFFF>Paimon: </color>If we get the chance, Paimon also wants to check out a hot spring. Unfortunately, it seems like only the big shots are granted entry.\\n<color=#37FFFF>{NICKNAME}: </color>Hmmm...\\n<color=#37FFFF>{NICKNAME}: </color>Let's head back to the Dadaupa Gorge in Mondstadt!\\n<color=#37FFFF>Paimon: </color>Eh? Why so sudden?\\n<color=#37FFFF>{NICKNAME}: </color>Back in the Dadaupa Gorge, the hilichurls have a huge cauldron that's heated by Flaming Flowers. It should be similar to a hot spring, right? You can bathe in their... soup, I guess?\\n<color=#37FFFF>Paimon: </color>???",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '128': {
      title: 'About Jugemu',
      audio: '71021',
      text: '#<color=#37FFFF>Paimon: </color>In Inazuma, it\'s customary for parents to choose a lucky name for their child.\\n<color=#37FFFF>{NICKNAME}: </color>Those names symbolize everyone\'s expectations and wishes for the child, like prosperity, wealth, good health, and safety.\\n<color=#37FFFF>Paimon: </color>Because of these expectations, parents often pick extra long names, and cram all sorts of blessings into them.\\n<color=#37FFFF>{NICKNAME}: </color>So hypothetically, if one day a little girl fell into a lake on her way back home, then her friends might rush to her house to tell everyone, "Something bad happened!"\\n<color=#37FFFF>Paimon: </color>"Oh, what happened?"\\n<color=#37FFFF>{NICKNAME}: </color>Ozvaldo Hrafnavins, Prinzessin der Verurteilung Fischl von Luftschloss Narfidort, come quick! Centennial Genius Astrologist Mona Megistus has fallen into the water!\\n<color=#37FFFF>Paimon: </color>...Mona falling into the water doesn\'t sound like an emergency situation though.\\n<color=#37FFFF>{NICKNAME}: </color>Precisely. The fast-swimming Mona would come back home around the same time her friends are done saying her name, haha.',
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '129': {
      title: "About Inazuma's Islands",
      audio: '71022',
      text: "#<color=#37FFFF>Paimon: </color>Inazuma's scenery is quite different than what we've seen so far.\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, Inazuma's an island nation.\\n<color=#37FFFF>Paimon: </color>Before the invention of boats, how did the people living on different islands communicate with one another?\\n<color=#37FFFF>{NICKNAME}: </color>According to Yoimiya's dad, they probably used smoke signals to transmit information.\\n<color=#37FFFF>{NICKNAME}: </color>Or, they would...\\n<color=#37FFFF>Paimon: </color>Yeah...?\\n<color=#37FFFF>{NICKNAME}: </color>They would commission people who could freeze the water surface to travel between the islands and deliver messages.\\n<color=#37FFFF>Paimon: </color>Whoa! If Kaeya had lived in Inazuma back then, he would've been even busier than Master Jean now!",
      tips: 'Unlock teleport waypoints in Ritou',
      tasks: null,
    },
    '130': {
      title: 'About Tanuki',
      audio: '71023',
      text: "#<color=#37FFFF>Paimon: </color>Tanuki are really mysterious creatures.\\n<color=#37FFFF>{NICKNAME}: </color>I think they are really cute.\\n<color=#37FFFF>Paimon: </color>Yeah, they're cute... until they start talking.\\n<color=#37FFFF>{NICKNAME}: </color>Hmm, I wonder... If you couldn't talk, would you appear to be more mysterious and noble?\\n<color=#37FFFF>Paimon: </color>Are you trying to mock me?\\n<color=#37FFFF>{NICKNAME}: </color>*randomly humming innocently*",
      tips: 'Unlock teleport waypoints in Chinju Forest',
      tasks: null,
    },
    '131': {
      title: 'About Tanuki and Their Illusions',
      audio: '71024',
      text: "#<color=#37FFFF>Paimon: </color>Did anyone tell you that there are monsters called tanuki in Inazuma that can take on the form of any human they see?\\n<color=#37FFFF>{NICKNAME}: </color>I heard such rumors before. They must know some mysterious transformation techniques.\\n<color=#37FFFF>Paimon: </color>What if one day a tanuki tricked you by transforming into Paimon? Oh no... Paimon's worried now! \\n<color=#37FFFF>{NICKNAME}: </color>No worries, I'd surely be able to tell the difference— Wait! You're just concerned about my Mora, aren't you?\\n<color=#37FFFF>Paimon: </color>Of course... Ah! ...No, no! Paimon's only concerned about your safety, {NICKNAME}!\\n<color=#37FFFF>Paimon: </color>Hmph, stop looking at Paimon like that. *pouting* Look, just think about it! If there were two Paimons, how would you find out which one is the real one?\\n<color=#37FFFF>{NICKNAME}: </color>...Eh-he.\\n<color=#37FFFF>Paimon: </color>What do you mean \"eh-he\"!?\\n<color=#37FFFF>{NICKNAME}:</color> See, only the real Paimon would respond like that.\\n<color=#37FFFF>Paimon: </color>Ah! Paimon got tricked again...",
      tips: 'Unlock teleport waypoints in Chinju Forest',
      tasks: null,
    },
    '132': {
      title: 'About Other Shrines',
      audio: '71025',
      text: "#<color=#37FFFF>Paimon: </color>We've been passing by a lot of small shrines lately, but none of them seem to be dedicated to the Electro Archon.\\n<color=#37FFFF>{NICKNAME}: </color>They were probably built for lesser deities. The people of Inazuma believe that everything around them has a spirit, and those spirits will help them in their time of need.\\n<color=#37FFFF>Paimon: </color>Oh, so the people make shrines for them, and give them offerings.\\n<color=#37FFFF>{NICKNAME}: </color>Yeah. In a way, it's a form of prayer and a token of appreciation.\\n<color=#37FFFF>Paimon: </color>Paimon gets it now! Let's find Ayaka, and have her put up a shrine for us!\\n<color=#37FFFF>Paimon: </color>If we do that, we'll be able to get lots of offerings as well!\\n<color=#37FFFF>Paimon: </color>Paimon's so happy!\\n<color=#37FFFF>{NICKNAME}: </color>Uh... I—Is that an acceptable thing to do?\\n<color=#37FFFF>Paimon: </color>What's wrong? Haven't we been helping out everyone this whole time? We may be doing an even better job than those deities!\\n<color=#37FFFF>{NICKNAME}: </color>You do have a point...\\n<color=#37FFFF>{NICKNAME}: </color>But when I picture people placing flowers or fruits in front of a shrine for me... it doesn't feel right.",
      tips: 'Unlock teleport waypoints in Araumi',
      tasks: null,
    },
    '133': {
      title: 'About the Rain on Yashiori Island',
      audio: '71026',
      text: "#<color=#37FFFF>{NICKNAME}: </color>It never stops raining on Yashiori Island. I heard it's because of the lingering evil energy.\\n<color=#37FFFF>Paimon: </color>\"Evil energy\"? What's that? Sounds terrifying.\\n<color=#37FFFF>{NICKNAME}: </color>It's caused by the remains of an evil god somewhere on the island. Because its power hasn't fully dispersed, the remaining energy causes all sorts of misfortunes. That's what I meant when I said \"evil energy.\"\\n<color=#37FFFF>Paimon: </color>Oh, that makes sense. But Paimon doesn't think rain is a bad thing.\\n<color=#37FFFF>Paimon: </color>Maybe that god has been crying all this time because they were bullied.\\n<color=#37FFFF>{NICKNAME}: </color>Crying? I don't think gods can cry. I mean, I've never seen Venti or Zhongli cry before.\\n<color=#37FFFF>Paimon: </color>There are exceptions! If you pinch Paimon, you'll be able to see a crying god.\\n<color=#37FFFF>{NICKNAME}: </color>Hmm? Are you a god?\\n<color=#37FFFF>Paimon: </color>Paimon sure is!\\n<color=#37FFFF>{NICKNAME}: </color>Okay, let me guess... The flying god of silly questions? The god of slimes? Or the god of being fished out from the water?\\n<color=#37FFFF>Paimon: </color>Paimon's none of those! Hmph!\\n<color=#37FFFF>Paimon: </color>As your bodyguard, {NICKNAME}, Paimon is the god of protection! Hehe.",
      tips: 'Unlock teleport waypoints in Nazuchi Beach',
      tasks: null,
    },
    '134': {
      title: 'About Bantan Sango Detective Agency',
      audio: '71027',
      text: "#<color=#37FFFF>{NICKNAME}: </color>In Hanamizaka, there's a place called the Bantan Sango Detective Agency.\\n<color=#37FFFF>Paimon: </color>Paimon remembers. It's the one run by Sango and Ryuuji, right? Everyone speaks highly of them.\\n<color=#37FFFF>{NICKNAME}: </color>Uh, I heard that they frequently get caught up in strange incidents, and some places have banned them from entering their premises...\\n<color=#37FFFF>Paimon: </color>Paimon thinks that's undeserved. After all, Sango and Ryuuji have helped a lot of people...\\n<color=#37FFFF>{NICKNAME}: </color>Would you invite them if you were organizing a dinner party?\\n<color=#37FFFF>{NICKNAME}: </color>What if halfway through the meal, one of the guests suddenly shrieked and collapsed onto the ground...\\n<color=#37FFFF>Paimon: </color>I—If that's the case, then Paimon thinks it's a bad idea. Paimon suddenly feels that hanging out with them could be dangerous...\\n<color=#37FFFF>{NICKNAME}: </color>Well, that's the price you pay for being a famous detective.",
      tips: 'Unlock teleport waypoints in Inazuma City: Streets',
      tasks: null,
    },
    '135': {
      title: 'About Drawing Fortune Slips',
      audio: '71028',
      text: "#<color=#37FFFF>Paimon:</color> Oh yeah, have you drawn fortune slips at the shrine before, {NICKNAME}?\\n<color=#37FFFF>Paimon:</color> If we draw them before our next adventure, they may provide us with some guidance.\\n<color=#37FFFF>{NICKNAME}:</color> Hmm, but what if our draws are inauspicious or turn out to be a bad omen? If that happened, we'd probably end up in a bad mood...\\n<color=#37FFFF>Paimon:</color> Oh, that's fine. According to the shrine maidens, if someone draws a bad omen, they just need to hang it on a tree in the shrine...\\n<color=#37FFFF>Paimon:</color> So, we should keep on drawing and drawing, until we get a super lucky draw! Then, we'll hang all the bad ones on the tree!\\n<color=#37FFFF>{NICKNAME}:</color> If everyone did that, there'd be no more space left to hang the slips...",
      tips: 'Unlock teleport waypoints in Inazuma City',
      tasks: null,
    },
    '136': {
      title: 'About Musou no Hitotachi',
      audio: '71029',
      text: "#<color=#37FFFF>Paimon:</color> Musou no Hitotachi is amazing!\\n<color=#37FFFF>Paimon:</color> It can beat any enemy with a single slash!\\n<color=#37FFFF>{NICKNAME}:</color> Uh, but for Childe, it might need three slashes...\\n<color=#37FFFF>Paimon:</color> Y—Yeah!\\n<color=#37FFFF>Paimon:</color> Anyway, if you mastered that technique, Paimon wouldn't have to worry about you for the rest of our journey!\\n<color=#37FFFF>{NICKNAME}:</color> So, where can one learn that technique?\\n<color=#37FFFF>Paimon:</color> Yeah, where can one learn that technique?\\n<color=#37FFFF>{NICKNAME}:</color> Hm?\\n<color=#37FFFF>Paimon:</color> Quit looking at Paimon like that! O—Okay, Paimon will keep an eye on you during our adventures...",
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
      audio: '71030',
      text: '#<color=#37FFFF>Paimon:</color> Did you know, {NICKNAME}? That Sangonomiya Kokomi, she\'s Watatsumi Island\'s Divine Priestess.\\n<color=#37FFFF>Paimon:</color> In other words, she\'s the ruler of Watatsumi Island! The whole of Watatsumi Island is controlled by her.\\n<color=#37FFFF>Paimon:</color> Paimon also wants to become a big shot like her...\\n<color=#37FFFF>{NICKNAME}:</color> What will you do after you become a big shot?\\n<color=#37FFFF>Paimon:</color> Then, Paimon will deliver justice. For example... Ahem.\\n<color=#37FFFF>Paimon:</color> The suspect in question, known as the Traveler, ate two Dango for lunch and only gave one to the victim, Paimon. This is a serious violation of article thirty seven, "Fairness and Justice," of the "Paimon Decree."\\n<color=#37FFFF>{NICKNAME}:</color> Oh... may I ask how Your Excellency Paimon plans to resolve this issue?\\n<color=#37FFFF>Paimon:</color> Of course. As compensation for your wrongdoings, you will have to make even more Dango for Paimon, hee-hee!',
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
      audio: '71031',
      text: "#<color=#37FFFF>Paimon:</color> Paimon wonders what the previous Shogun was like.\\n<color=#37FFFF>{NICKNAME}:</color> It appears that she was a person who understood the fleeting nature of things, and accepted the inevitable fate of departing this world one day.\\n<color=#37FFFF>Paimon:</color> After all, realizing the fragility of things in front of you makes you treasure them even more.\\n<color=#37FFFF>{NICKNAME}:</color> This way of thinking must've influenced Inazuma's aesthetics. This world is transient, people come and go. The fun times we shared, our companionship, and the delicious foods we got to savor — those emotions and experiences are real things that existed at some point in time, not just empty concepts.\\n<color=#37FFFF>Paimon:</color> Even though... Even though every banquet must eventually come to an end, it'd be nice to enjoy those happy moments for a little longer.\\n<color=#37FFFF>{NICKNAME}:</color> \"Shifting seasons and elusive dreams, the ephemeral and fleeting, with thine companionship, all are eternal.\"\\n<color=#37FFFF>Paimon:</color> Paimon doesn't get it!\\n<color=#37FFFF>{NICKNAME}:</color> I'm saying that I'm having a lot of fun traveling with you, Paimon. It'd be nice if we could just go on like this forever.\\n<color=#37FFFF>Paimon:</color> Paimon'll take your word for it then.",
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
      audio: '71032',
      text: "#<color=#37FFFF>Paimon:</color> The clothes that shrine maidens wear are quite unique.\\n<color=#37FFFF>{NICKNAME}:</color> I heard that after the Sakoku Decree is lifted, Yae Miko plans to run a rental service where people can try on shrine maiden outfits as a tourist attraction in various places. Combined with the latest Kamera technology from Fontaine, it seems like a real Mora maker.\\n<color=#37FFFF>Paimon:</color> Oh!\\n<color=#37FFFF>{NICKNAME}:</color> {M#The shrine maidens in the Grand Shrine even asked me if I knew any pretty girls who are willing to become models. All they need to do is to dress up in a shrine maiden outfit and smile to the Kamera. They even asked me to be a model and said all I needed was some makeup.}{F#The shrine maidens in the Grand Shrine even asked me if I was interested in becoming a model! All I need to do is wear a shrine maiden outfit and smile to the Kamera. They also asked me if I knew any other cute girls.}\\n<color=#37FFFF>Paimon:</color> What!?\\n<color=#37FFFF>{NICKNAME}:</color> I immediately shared this idea with Rosaria. I feel like they can do something similar at the Church of Favonius with the garments they wear.\\n<color=#37FFFF>Paimon:</color> Wait, Paimon doesn't think that a...\\n<color=#37FFFF>{NICKNAME}:</color> Sadly, Rosaria found the idea of it too troublesome.\\n<color=#37FFFF>Paimon:</color> Maybe it's for the better...",
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
      audio: '71033',
      text: "#<color=#37FFFF>Paimon:</color> Aoi gave Paimon a painting. Turns out it's not edible, but Paimon is still very happy with that gift!\\n<color=#37FFFF>{NICKNAME}:</color> Aoi? The general goods shop owner? Let me see.\\n<color=#37FFFF>Paimon:</color> Here, but be careful. It was painted by a famous artist, Utamarou. It's quite valuable!\\n<color=#37FFFF>{NICKNAME}:</color> Utamarou? Hmm... I think I've heard that name before...\\n<color=#37FFFF>Paimon:</color> Of course, master Utamarou's works can be found all around Inazuma after all!\\n<color=#37FFFF>Paimon:</color> Did you see one of them in Ayaka's residence? The one that Paimon has right now isn't too shabby either.\\n<color=#37FFFF>{NICKNAME}:</color> Oh, I remember now! One of those paintings was used by Yoimiya as kindling, right?\\n<color=#37FFFF>Paimon:</color> Eh? Kindling?\\n<color=#37FFFF>{NICKNAME}:</color> Uh, yeah! I think Thoma used it as padding for table legs as well.\\n<color=#37FFFF>Paimon:</color> What? Padding?\\n<color=#37FFFF>{NICKNAME}:</color> And, if I remember correctly, I also saw Sayu use a stack of those paintings as a cushion for her nap.\\n<color=#37FFFF>Paimon:</color> Sayu has several of those works? That can't be right...\\n<color=#37FFFF>{NICKNAME}:</color> Real masterpieces aren't mass-produced. If you ask me, that Utamarou isn't a real master at all.\\n<color=#37FFFF>Paimon:</color> Hey—",
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
      audio: '71034',
      text: "#<color=#37FFFF>Paimon:</color> The Komore Teahouse is doing surprisingly well. They have a great number of visitors every day.\\n<color=#37FFFF>Paimon:</color> We should also open a teahouse. Paimon feels that it'd be really profitable!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... Well, if we do end up opening a teahouse, then you're gonna be the boss, for sure.\\n<color=#37FFFF>Paimon:</color> Eh? Deal!\\n<color=#37FFFF>Paimon:</color> Paimon didn't think that you'd have so much faith in Paimon's abilities... Paimon will make sure to be a responsible manager, and make our shop the best teahouse in Teyvat!\\n<color=#37FFFF>{NICKNAME}:</color> Uhh, I don't think it'd need to be managed... Do you remember Taroumaru?\\n<color=#37FFFF>Paimon:</color> Yup, he's the owner of the Komore Teahouse, right? A lot of the clients go to the Teahouse to play with him rather than drink tea.\\n<color=#37FFFF>{NICKNAME}:</color> So I was thinking, if you were running the shop, you'd definitely be more popular than Taroumaru.\\n<color=#37FFFF>Paimon:</color> Hee-hee, of course... Hey! So you don't really trust Paimon's management skills, you just want a mascot!?",
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
      audio: '71006',
      text: "#<color=#37FFFF>{NICKNAME}:</color> With the abolishment of the Vision Hunt Decree, I guess the Sakoku Decree will be the next one to go.\\n<color=#37FFFF>Paimon:</color> Here's hoping that everything goes well.\\n<color=#37FFFF>{NICKNAME}:</color> Let's encourage everyone to hold on for just a bit longer.\\n<color=#37FFFF>Paimon:</color> Yeah!\\n<color=#37FFFF>{NICKNAME}:</color> If we get the chance, let's find Atsuko and tell her that the sakura trees in her homeland are blooming.\\n<color=#37FFFF>Paimon:</color> How is that supposed to comfort her!?",
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
      audio: '71035',
      text: "#<color=#37FFFF>Paimon:</color> *sigh* Ogura Mio says that she hardly has any fancy kimonos in stock these days. So, chances are that you won't be able to buy one, even if you can afford it.\\n<color=#37FFFF>Paimon:</color> It's a real tragedy... Paimon wants to look glamorous, too.\\n<color=#37FFFF>{NICKNAME}:</color> But the Sakoku Decree's been abolished... She should be able to import silk from Liyue now.\\n<color=#37FFFF>Paimon:</color> *gasp* You're right! Great, so there's hope for Paimon's kimono-dream after all!\\n<color=#37FFFF>Paimon:</color> Just imagine it... Paimon emerges from Ogura's shop wearing a custom-made pure-silk one-of-a-kind kimono. Total transformation! This Paimon's going places!\\n<color=#37FFFF>Paimon:</color> No longer just a sidekick in the legendary Traveler's adventure story... Oh no, say hello to Paimon the Elegant, wearer of fine silks and fated friend of heroes!\\n<color=#37FFFF>Paimon:</color> Ahhh... Wouldn't that be amazing?\\n<color=#37FFFF>Paimon:</color> ...It would, wouldn't it, {NICKNAME}? Um, so—\\n<color=#37FFFF>{NICKNAME}:</color> What I'm hearing is... you want me to pay for your new wardrobe.\\n<color=#37FFFF>Paimon:</color> Exactly, you read Paimon's mind! See, that's what being \"fated friends\" is all about!\\n<color=#37FFFF>Paimon:</color> Um, so Paimon was thinking seven different styles, one for each day of the week. Still not sure on the specific designs though, let Paimon think...\\n<color=#37FFFF>{NICKNAME}:</color> ...Uh, suddenly, I'm not so interested in buying.",
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
      audio: '71036',
      text: "#<color=#37FFFF>Paimon:</color> Free knowledge without having to study at all? Canned Knowledge is amazing!\\n<color=#37FFFF>Paimon:</color> Could Sumeru have Canned Knowledge about the different customs of the seven nations, too?\\n<color=#37FFFF>Paimon:</color> If so, Paimon could just open a can every time we get to a new place. Paimon wouldn't have to explain things ever again!\\n<color=#37FFFF>{NICKNAME}:</color> Or we could just open them all here in Sumeru.\\n<color=#37FFFF>Paimon:</color> But... but traveling wouldn't be any fun without surprises to look forward to!\\n<color=#37FFFF>{NICKNAME}:</color> Plus, if we opened them all here, I wouldn't even need Paimon as a guide anymore.\\n<color=#37FFFF>Paimon:</color> Okay scrap that idea! No more Canned Knowledge. Let's save our Mora for something else!\\n<color=#37FFFF>Paimon:</color> Something like... Oh! Tipping Paimon for guide services! Heehee, seems fair, right?",
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
      audio: '71037',
      text: "#<color=#37FFFF>Paimon: </color>The Eremites are a real motley crew...\\n<color=#37FFFF>{NICKNAME}: </color>There's certainly a diverse range of characters.\\n<color=#37FFFF>Paimon: </color>Hmmm... yeah, that could explain it! Paimon can play lots of different characters too.\\n<color=#37FFFF>Paimon: </color>Judgy Paimon, knowledgeable Paimon, helpful Paimon...\\n<color=#37FFFF>{NICKNAME}: </color>...And of course the classic, completely-misses-the-point Paimon.",
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
      audio: '71038',
      text: "#<color=#37FFFF>Paimon: </color>Have you noticed something? People in Sumeru don't seem to have a lot of faith in Lesser Lord Kusanali.\\n<color=#37FFFF>Paimon: </color>Back in Liyue and Inazuma, people were pretty enthusiastic about Rex Lapis and the Almighty Shogun.\\n<color=#37FFFF>Paimon: </color>Those strange scholars are one thing, but even everyone living downtown only ever seems to talk about Greater Lord Rukkhadevata.\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, that's true... Even the most delicious mushrooms are said to be Greater Lord Rukkhadevata's blessing.\\n<color=#37FFFF>Paimon: </color>Speaking of which, lots of the dishes in Liyue are said to have been taught and approved by Rex Lapis himself...\\n<color=#37FFFF>Paimon: </color>Aha! So as long as a god blesses their people with delicious food, people will worship them!\\n<color=#37FFFF>{NICKNAME}: </color>If their name is Paimon, sure.\\n<color=#37FFFF>Paimon: </color>Huh? Wait, so... {NICKNAME}, what do you believe in, then?\\n<color=#37FFFF>{NICKNAME}: </color>Me? Hehe... Paimon, of course.\\n<color=#37FFFF>Paimon: </color>Heehee, that's right!",
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
      audio: '71039',
      text: "#<color=#37FFFF>Paimon: </color>The first time we saw the Wall of Samiel, Paimon was stunned... It seems to go on forever.\\n<color=#37FFFF>{NICKNAME}: </color>Well, it was built to protect the entire rainforest, after all.\\n<color=#37FFFF>Paimon: </color>And, it's so, so tall...\\n<color=#37FFFF>Paimon: </color>Who knows if {NICKNAME}'ll be able to climb all the way to the top.\\n<color=#37FFFF>{NICKNAME}: </color>I doubt it...? Also, why do I have to climb it, exactly?\\n<color=#37FFFF>Paimon: </color>Uh... because it's right there?\\n<color=#37FFFF>{NICKNAME}: </color>Hmm, even so... No.\\n<color=#37FFFF>Paimon: </color>The Wall of Samiel is right there in front of us!\\n<color=#37FFFF>{NICKNAME}: </color>I know, I know, but it's way too—\\n<color=#37FFFF>Paimon: </color>But it's the Wall of Samiel...\\n<color=#37FFFF>{NICKNAME}: </color>Fine! I'll go, okay?",
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
      audio: '71040',
      text: "#<color=#37FFFF>Paimon: </color>All these Sumeru scholars seem to wear Akasha Terminals so they can get information from the Akasha system.\\n<color=#37FFFF>Paimon: </color>It's like they're carrying an interactive encyclopedia with them wherever they go. Paimon's kinda jealous.\\n<color=#37FFFF>{NICKNAME}: </color>Well, I'm not jealous. I have an even better encyclopedia that automatically follows me around, gives me the A-to-Z on everything in Teyvat, and the best part is, it can even talk!\\n<color=#37FFFF>Paimon: </color>Huh? Was that a compliment? Aw, you're making Paimon blush... Paimon definitely doesn't know as much as an encyclopedia! A-to-Y at most.\\n<color=#37FFFF>{NICKNAME}: </color>Well, you know... maybe if you ate a little less, you'd have room for Z, too.\\n<color=#37FFFF>Paimon: </color>Hey!!!",
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
      audio: '71041',
      text: '#<color=#37FFFF>Paimon: </color>Arama, Arana, Araja, Arakavi... Whew, Aranara names are so hard to remember...\\n<color=#37FFFF>Paimon: </color>The only bit Paimon\'s sure of is that they all start with "Ara"!\\n<color=#37FFFF>{NICKNAME}: </color>Right, so if you were an Aranara, your name would be "Arapaimon."\\n<color=#37FFFF>Paimon: </color>Yup, and as for {NICKNAME}...\\n<color=#37FFFF>Paimon: </color>Hmm, actually, they\'d probably call you Nara {NICKNAME}...\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, we\'re all Nara to them...\\n<color=#37FFFF>Paimon:</color> So if there was someone whose actual name was "Nara," what would the Aranara call them?\\n<color=#37FFFF>{NICKNAME}: </color>"Nara Nara"... I guess. Sounds kinda cute.\\n<color=#37FFFF>Paimon: </color>Hehe, yeah.',
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
      audio: '71042',
      text: "#<color=#37FFFF>Paimon: </color>For some reason, the Aranara's food all tasted a little too... um, how to put this... a little too \"fresh.\"\\n<color=#37FFFF>Paimon: </color>It's totally different from what we usually eat.\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, but their ingredients are top-quality.\\n<color=#37FFFF>Paimon: </color>Yeah, that's true. Still, those mushrooms and fruits were so raw, it felt like they were gonna keep growing in Paimon's stomach!\\n<color=#37FFFF>{NICKNAME}: </color>Heh, you're exaggerating, right? You do have a point, though — maybe the best ingredients don't need a lot of fancy cooking.\\n<color=#37FFFF>Paimon: </color>You're right. If the ingredients are good enough, they'll taste great even when cooked with the simplest methods.\\n<color=#37FFFF>{NICKNAME}: </color>Just like Paimon. Just a little salt and pepper, and—\\n<color=#37FFFF>Paimon: </color>Hey! For crying out loud, we're in Sumeru now! Don't you think that joke's getting a little old?",
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
      audio: '71043',
      text: "#<color=#37FFFF>Paimon: </color>How did a genie that big get into Dori's lamp?\\n<color=#37FFFF>{NICKNAME}: </color>There's only one way to find out: In you go, Paimon.\\n<color=#37FFFF>Paimon: </color>Not a chance! There's no way Paimon would fit in there!\\n<color=#37FFFF>{NICKNAME}: </color>Okay, well... if you want, you can be the genie of the Serenitea Pot instead?\\n<color=#37FFFF>Paimon: </color>Oooh, great idea! Paimon's down!\\n<color=#37FFFF>{NICKNAME}: </color>You seem pretty excited about this...\\n<color=#37FFFF>Paimon: </color>Uh, yeah! Paimon's been wanting to try this for ages! ...Poof! Didst thou summon me, O Traveler from a distant land?\\n<color=#37FFFF>Paimon: </color>Come on, come on, now you have to grant Paimon three wishes! Paimon's first wish is... bring Paimon lots of delicious food!\\n<color=#37FFFF>{NICKNAME}: </color>Paimon, you're not supposed to be the one making wishes!",
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
      audio: '71044',
      text: "#<color=#37FFFF>Paimon: </color>Whoa, healthcare is FREE in Sumeru?\\n<color=#37FFFF>{NICKNAME}: </color>Are you feeling unwell, Paimon?\\n<color=#37FFFF>Paimon: </color>No, not right now. Thanks for asking, though.\\n<color=#37FFFF>Paimon: </color>Hehe... Eating the street food on every corner has never sounded so tempting!\\n<color=#37FFFF>{NICKNAME}: </color>Your stomach is gonna punish you for that!\\n<color=#37FFFF>Paimon: </color>If so, Paimon'll go see a doctor and get treated — it's all for free! It'd be a waste not to take advantage of this, don't you think?\\n<color=#37FFFF>{NICKNAME}: </color>Maybe... But then again, the treatment would likely include a restricted diet.\\n<color=#37FFFF>Paimon: </color>*gasp* Oh no! So no more delicious food, then?\\n<color=#37FFFF>{NICKNAME}: </color>That, plus the doctor would make you take the most bitter-tasting medicine ever.\\n<color=#37FFFF>Paimon: </color>O—Okay... Maybe Paimon needs to reconsider this idea...",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '153': {
      title: 'About the Scholars',
      audio: '71045',
      text: "#<color=#37FFFF>Paimon: </color>So many people in Sumeru want to become scholars.\\n<color=#37FFFF>Paimon: </color>Motivated by this ambition, they all study really hard to try and achieve it...\\n<color=#37FFFF>Paimon: </color>But Paimon bets that the first ever scholar didn't set out to become a scholar...\\n<color=#37FFFF>Paimon: </color>Hmm... so what do you think the first ever scholar's ambition was?\\n<color=#37FFFF>{NICKNAME}: </color>Probably... to get their research paper written as quickly as possible.\\n<color=#37FFFF>Paimon: </color>Huh? But isn't a scholar's ultimate goal supposed to be \"pursuing the highest and greatest knowledge\" or something?\\n<color=#37FFFF>Paimon: </color>Paimon's sure that it must have been because of a fervent desire for knowledge that they became Sumeru's first true scholar.\\n<color=#37FFFF>{NICKNAME}: </color>Writing papers is how you pursue knowledge.\\n<color=#37FFFF>Paimon: </color>But what about when it's the highest and greatest knowledge of all...\\n<color=#37FFFF>{NICKNAME}: </color>Even then, if you wanted to prove it, you'd need a research paper.\\n<color=#37FFFF>{NICKNAME}: </color>And after that, you'd need to start working on another paper to validate your original thesis...\\n<color=#37FFFF>Paimon: </color>O—Okay, Paimon's got it! Come on, don't look so sad! It's not like you have to worry about writing papers yourself!\\n<color=#37FFFF>Paimon: </color>...Y—You've never had to write a paper before, right...?",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '154': {
      title: 'About Amurta',
      audio: '71046',
      text: "#<color=#37FFFF>Paimon: </color>Paimon wants to go visit the Amurta scholars!\\n<color=#37FFFF>{NICKNAME}: </color>When did you become such an avid student, Paimon?\\n<color=#37FFFF>Paimon: </color>Well, Paimon heard that the Amurta scholars' research is all about nature.\\n<color=#37FFFF>Paimon: </color>Which means... they must have to research which animals are edible, and which ones taste the best, and... y'know that kind of thing!\\n<color=#37FFFF>Paimon: </color>Paimon thinks it'd be really fun to help them out with their research.\\n<color=#37FFFF>{NICKNAME}: </color>In other words, you've got a craving for some tasty, organic dishes.\\n<color=#37FFFF>Paimon: </color>No! Paimon genuinely thinks that it's a really meaningful research topic and wants to help out!\\n<color=#37FFFF>{NICKNAME}: </color>Hmm, well in that case... I think the Amurta scholars might be more interested to find out about Paimon's species and behavioral patterns.\\n<color=#37FFFF>Paimon: </color>Uh... Gee is that the time? Paimon just remembered we have something else more important to do!",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '155': {
      title: 'About Sumpter Beasts',
      audio: '71047',
      text: '#<color=#37FFFF>Paimon: </color>Sumpter Beasts are adorable! Paimon likes how the people who keep them give them each a special name based on their most distinctive traits!\\n<color=#37FFFF>{NICKNAME}: </color>For all we know, the Sumpter Beasts might be giving each of us a name in return. Maybe that\'s how they respond when we call their name.\\n<color=#37FFFF>Paimon: </color>Really? So what kind of name do think they\'d give us?\\n<color=#37FFFF>{NICKNAME}: </color>(Sumpter Beast noises)\\n<color=#37FFFF>Paimon: </color>How is anyone supposed to understand that!\\n<color=#37FFFF>{NICKNAME}: </color>A rough translation would be...\\n<color=#37FFFF>{NICKNAME}: </color>"Vociferous Pestiferous Melliculus Niveous Micro-Bipedal."\\n<color=#37FFFF>{NICKNAME}: </color>That\'s the scientific name, of course.\\n<color=#37FFFF>Paimon: </color>Oh? What would the common name be then?\\n<color=#37FFFF>{NICKNAME}: </color>"Noisy Two-Legged Critter"\\n<color=#37FFFF>Paimon: </color>Hey! Why keep only the negative traits?',
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '156': {
      title: 'About the Seventh Darshan',
      audio: '71048',
      text: "#<color=#37FFFF>Paimon: </color>There are six Darshans in Sumeru.\\n<color=#37FFFF>Paimon: </color>It would be cool if Paimon had her own Darshan too!\\n<color=#37FFFF>Paimon: </color>It'll be called... Paimonology!\\n<color=#37FFFF>{NICKNAME}: </color>And... what wisdom would Paimonology stand for?\\n<color=#37FFFF>Paimon: </color>Uh... practical wisdom for everyday life!\\n<color=#37FFFF>{NICKNAME}: </color>So Paimonology scholars would specialize in the art of cooking slimes in a hundred different ways, and never letting a single Mora escape their grasp, and giving people ugly nicknames... et cetera, et cetera?\\n<color=#37FFFF>Paimon: </color>Whoa, you read Paimon's mind! Also, don't forget \"How to Become the Best Travel Guide in Teyvat\"!\\n<color=#37FFFF>Paimon: </color>This is a fantastic idea! Come on, let's go submit a Darshan application to the Akademiya! From this day on, {NICKNAME}'ll be the Grand Sage of Paimonology!\\n<color=#37FFFF>{NICKNAME}: </color>I'd like to decline the honor, please...",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '157': {
      title: 'About Shroomboars',
      audio: '71049',
      text: "#<color=#37FFFF>Paimon: </color>Did you know that there are all kinds of strange Shroom-Kin in Sumeru?\\n<color=#37FFFF>{NICKNAME}: </color>Yup. Here's a fun one — legend has it that there were some forest boars who couldn't live without mushrooms, and the two species gradually formed a symbiotic relationship with each other. Now they're known as \"Shroomboars.\"\\n<color=#37FFFF>Paimon: </color>Whoa, that's a lot like us! Paimon can't live without {NICKNAME} either.\\n<color=#37FFFF>{NICKNAME}: </color>If you can't live without me, that means... I'm the shroom, and Paimon's the...\\n<color=#37FFFF>Paimon: </color>Boar!\\n<color=#37FFFF>Paimon: </color>Hey, wait a second...",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '158': {
      title: 'About the Grand Bazaar',
      audio: '71050',
      text: "#<color=#37FFFF>Paimon: </color>The residents of the Grand Bazaar are all so talented!\\n<color=#37FFFF>Paimon: </color>They sell their own woven goods, beautiful vases and jars, and delicious-smelling spices that make Paimon's tummy start rumbling...\\n<color=#37FFFF>Paimon: </color>And they all sing and dance really well! Paimon wishes she could do that.\\n<color=#37FFFF>{NICKNAME}: </color>Well, if you're serious about it, there's no reason you couldn't learn.\\n<color=#37FFFF>Paimon: </color>What? Really?\\n<color=#37FFFF>{NICKNAME}: </color>Well for starters, you have a natural advantage when it comes to dancing.\\n<color=#37FFFF>{NICKNAME}: </color>You won't trip over yourself, or accidentally step on someone's foot...\\n<color=#37FFFF>Paimon: </color>Oh yeah! Paimon always forgets how useful flying can be!\\n<color=#37FFFF>Paimon: </color>Alright then! Let's go bust a move at the Grand Bazaar and watch everyone shower Paimon with admiration!\\n<color=#37FFFF>{NICKNAME}: </color>Aha, so that's what this is all about.",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '159': {
      title: 'About Divination',
      audio: '71051',
      text: "#<color=#37FFFF>Paimon: </color>People in Sumeru seem to take divination and fortune-telling pretty seriously.\\n<color=#37FFFF>Paimon: </color>For starters, there's astrology, although only the scholars get to practice that. But ordinary citizens have their ways, too. They can do divinations with just a cup of coffee!\\n<color=#37FFFF>{NICKNAME}: </color>It's the nation of wisdom after all. It seems like people have an insatiable curiosity to learn about everything, including their own future.\\n<color=#37FFFF>Paimon: </color>Paimon heard that they can tell your fate just by looking at the bottom of a finished cup of coffee...\\n<color=#37FFFF>Paimon: </color>Sounds way easier than climbing to the top of a tower and staring at the stars all night!\\n<color=#37FFFF>{NICKNAME}: </color>Oh, so you're interested in learning your fate now?\\n<color=#37FFFF>Paimon: </color>Yeah... although, Paimon's really more interested in finding out what the coffee tastes like.",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '160': {
      title: 'About Purbiruni and Pursina',
      audio: '71052',
      text: '#<color=#37FFFF>Paimon: </color>Khedive and Anisa kept talking about "Purbiruni" this and "Pursina" that...\\n<color=#37FFFF>Paimon: </color>Why do all these words have "pur" at the front?\\n<color=#37FFFF>{NICKNAME}: </color>"Pur" means "descendant," and also "student"... So in this case, they\'re referring to themselves as the children and students of the great sages of old.\\n<color=#37FFFF>Paimon: </color>Huh, so that\'s what it means... From the way they were throwing these words around, Paimon was sure it\'d be something to be proud of.\\n<color=#37FFFF>{NICKNAME}: </color>Wait... But isn\'t it?\\n<color=#37FFFF>Paimon: </color>Well, Paimon for one would much rather be known as the founding father than have a name that basically says "So-and-so\'s my daddy." Pretty embarrassing, don\'t you think?\\n<color=#37FFFF>{NICKNAME}: </color>Um... Yeah, I have to admit, I\'ve never thought about it like that...',
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '161': {
      title: 'About Studying Abroad',
      audio: '71053',
      text: "#<color=#37FFFF>Paimon: </color>It's not only Sumeru locals at the Akademiya, huh. There are students from other nations too.\\n<color=#37FFFF>Paimon: </color>Imagine leaving your hometown behind and traveling to a faraway and unfamiliar land in the pursuit of learning... How inspiring!\\n<color=#37FFFF>{NICKNAME}: </color>We travel to unfamiliar lands pretty often, too.\\n<color=#37FFFF>Paimon: </color>Huh, you're right! That means we're also super inspiring!\\n<color=#37FFFF>{NICKNAME}: </color>Not in the pursuit of learning, though.\\n<color=#37FFFF>Paimon: </color>Oh... So we're not as inspiring as the students after all...\\n<color=#37FFFF>Paimon: </color>Buuut we do know the best places to eat in Sumeru, and who you can rely on to help you out! That counts as knowledge, right?\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, and to many people, it could be extremely valuable knowledge.\\n<color=#37FFFF>Paimon: </color>Great, so we're just as inspiring as them after all!",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '162': {
      title: 'About the Divine Tree',
      audio: '71054',
      text: "#<color=#37FFFF>Paimon: </color>The whole of Sumeru City is built on top of a giant tree. How amazing is that!\\n<color=#37FFFF>Paimon: </color>We've seen lots of incredible trees on our journey, haven't we? There's our old stomping ground at Windrise, the Frostbearing Tree on Dragonspine, and the Sacred Sakura in Inazuma!\\n<color=#37FFFF>Paimon: </color>Sumeru's tree doesn't seem to have a fancy name though. People just call it \"the Divine Tree\"...\\n<color=#37FFFF>{NICKNAME}: </color>Sometimes, the most important things have the simplest names.\\n<color=#37FFFF>Paimon: </color>Really? Hmm, maybe you have a point. Long names would be kinda inconvenient if you had to say them every day.\\n<color=#37FFFF>Paimon: </color>Anyway, people in the city only have to say \"down below\" and everyone knows they mean the bottom of the tree.\\n<color=#37FFFF>Paimon: </color>What's that saying again? \"Names aren't things themselves, they're just words for things.\"\\n<color=#37FFFF>{NICKNAME}: </color>So is Paimon just a word for a thing, too?\\n<color=#37FFFF>Paimon: </color>Yeah. Well, uh, kinda. But... wait, no! No, Paimon is just Paimon!",
      tips: 'Unlock the Statue of The Seven at Mondstadt - Windrise – Anemo',
      tasks: null,
    },
    '163': {
      title: 'About Inter-Darshan Relations',
      audio: '71055',
      text: '#<color=#37FFFF>Paimon: </color>So, with Sumeru having so many scholars in different Darshans, do you think they end up arguing a lot?\\n<color=#37FFFF>Paimon: </color>You know, just like the rivalry between Li cuisine and Yue cuisine in Liyue.\\n<color=#37FFFF>{NICKNAME}: </color>I\'m sure they do. Conflict between different schools of thought is the most normal thing ever. As the Liyue martial arts novels say: "Wherever there are people, there will be conflict."\\n<color=#37FFFF>Paimon: </color>Wow, what a line. That\'s heavy... But the scholars in Sumeru probably don\'t duel like Liyue martial artists, right?\\n<color=#37FFFF>{NICKNAME}: </color>Maybe they settle things with a game of Genius Invokation TCG.\\n<color=#37FFFF>Paimon: </color>Ohh, good point! A duel of wits!\\n<color=#37FFFF>Paimon: </color>Paimon can just imagine it: When one scholar can\'t convince another in an argument, he takes out his deck of cards, calmly sits down opposite his opponent, thinks for a moment, and then secures his victory!\\n<color=#37FFFF>{NICKNAME}: </color>That does sound like something that would happen in Sumeru.\\n<color=#37FFFF>Paimon: </color>The game ends, and the winner says "good game" as a sign of respect to his opponent. After that, both sides are back on good terms.\\n<color=#37FFFF>{NICKNAME}: </color>Umm, not necessarily...\\n<color=#37FFFF>Paimon: </color>Huh? Why?',
      tips: 'Unlock teleport waypoints in Liyue Harbor',
      tasks: null,
    },
    '164': {
      title: 'About Port Ormos',
      audio: '71056',
      text: "#<color=#37FFFF>Paimon: </color>Whew, Port Ormos definitely has a different vibe to Sumeru City...\\n<color=#37FFFF>Paimon: </color>It's a bustling area, and there's so many outlanders. Plus, no one needs to spend all their time buried in their studies, which is nice.\\n<color=#37FFFF>{NICKNAME}: </color>Yes, but that's why they end up being disciplined by the port authorities. So you see, Paimon? If you don't study hard, you'll end up just like them!\\n<color=#37FFFF>Paimon: </color>Oh...\\n<color=#37FFFF>Paimon: </color>Wait! What was that tone of voice for!?",
      tips: 'Unlock teleport waypoints in Sumeru -Port Ormos',
      tasks: null,
    },
    '165': {
      title: 'About the Alliance of the Twenty-Nine Ocean Deys',
      audio: '71057',
      text: "#<color=#37FFFF>Paimon: </color>Port Ormos is built on the ruins of the fortress of The Alliance of the... the... the alliance of something, anyway.\\n<color=#37FFFF>Paimon: </color>Ugh, the name's too long, Paimon can't remember it! Anyway, that's what all the bookish people in Sumeru say.\\n<color=#37FFFF>{NICKNAME}: </color>Oh, you mean \"The Alliance of the Twenty-Nine Ocean Deys\"?\\n<color=#37FFFF>{NICKNAME}: </color>Apparently, the alliance was formed by a bunch of arrogant pirate leaders, none of whom wanted to work for any of the others. They fought and looted each other constantly, causing endless chaos in coastal Sumeru...\\n<color=#37FFFF>{NICKNAME}: </color>Finally, one day, they decided to enter into an alliance with one another and divide power equally between themselves. The members of the alliance were called \"Deys\"...\\n<color=#37FFFF>Paimon: </color>Oh... And so after that... there was no more fighting and no more stealing, so everyone could get along happily and make a boatload of Mora together! Right?\\n<color=#37FFFF>{NICKNAME}: </color>...\\n<color=#37FFFF>Paimon: </color>Right...?\\n<color=#37FFFF>{NICKNAME}: </color>Well... presumably that's what they were hoping...\\n<color=#37FFFF>Paimon: </color>Huh...?\\n<color=#37FFFF>{NICKNAME}: </color>Before long, they were forming factions again, and the infighting between them escalated into the biggest internal battle they'd seen yet. Their fortress at Port Ormos was completely destroyed, and all the Deys were done for!\\n<color=#37FFFF>Paimon: </color>Whaaat?\\n<color=#37FFFF>{NICKNAME}: </color>Following that, an unprecedented period of peace finally came to Port Ormos, and the area began to develop into what we see today...\\n<color=#37FFFF>Paimon: </color>Huh... So the Alliance was just a bunch of dumb bad guys...",
      tips: 'Unlock teleport waypoints in Sumeru -Port Ormos',
      tasks: null,
    },
    '166': {
      title: 'About Cyno and Genius Invokation TCG...',
      audio: '71058',
      text: "#<color=#37FFFF>Paimon: </color>Cyno's super into that card game \"Genius Invokation TCG,\" isn't he?\\n<color=#37FFFF>Paimon: </color>Doesn't it seem kinda weird for the General Mahamatra to be into playing cards...?\\n<color=#37FFFF>{NICKNAME}: </color>Well... not when you consider his hairstyle.\\n<color=#37FFFF>Paimon: </color>Huh? What has his hairstyle got to do with it?\\n<color=#37FFFF>{NICKNAME}: </color>You know, when you're playing a card game, the fancier your hairstyle, the more distracting it is for your opponent.\\n<color=#37FFFF>{NICKNAME}: </color>\"What's going on with this guy? How did he manage to shape his hair like that?\"\\n<color=#37FFFF>{NICKNAME}: </color>When your opponent's mind is consumed with thoughts like this, you'll quickly gain the upper hand.\\n<color=#37FFFF>Paimon: </color>Hmm, really? Then we'd better think twice before playing against him...\\n<color=#37FFFF>{NICKNAME}: </color>I don't know... I think I might just have an advantage over him.\\n<color=#37FFFF>Paimon: </color>But you don't have a fancy hairstyle at all. And your clothes look pretty normal, too...\\n<color=#37FFFF>{NICKNAME}: </color>But I do have Paimon.\\n<color=#37FFFF>{NICKNAME}: </color>\"What's up with her? And what's that pesky flying companion of hers up to?\"\\n<color=#37FFFF>{NICKNAME}: </color>As long as Paimon is floating by my side, Cyno's mind will be consumed with thoughts like this.\\n<color=#37FFFF>{NICKNAME}: </color>I, on the other hand, would be completely unfazed by his hairstyle. So I'd be able to focus, and victory would be mine.\\n<color=#37FFFF>Paimon: </color>Forget it! If you wanna play cards, go get a funny haircut!",
      tips: 'Unlock teleport waypoints in Sumeru City',
      tasks: null,
    },
    '167': {
      title: 'About Sumeru Nursery Rhymes...',
      audio: '71059',
      text: "#<color=#37FFFF>Paimon: </color>♪ Curry, curry, in the air~ Hungry children it's time to come home~ ♪\\n<color=#37FFFF>{NICKNAME}: </color>♪ Curry, curry, in the air~ ♪\\n<color=#37FFFF>Paimon: </color>Wow! Good job, so you remember the tune as well!\\n<color=#37FFFF>{NICKNAME}: </color>Good job to you too, Paimon. You sing really well.\\n<color=#37FFFF>Paimon: </color>Heehee, that's because Paimon's got a great plan!\\n<color=#37FFFF>Paimon: </color>Have you heard this story? Once upon a time, there was a hilihound who was given meat to eat whenever the samachurls started dancing. Eventually, the hilihound started drooling whenever it heard the sound of dancing.\\n<color=#37FFFF>Paimon: </color>Whenever we hear the curry song, we get curry to eat. So, all Paimon has to do is learn the song by heart, and then in the future, whenever Paimon is craving a big bowl of tasty curry, all she has to do is sing it!\\n<color=#37FFFF>Paimon: </color>Hey, aren't you gonna say something?\\n<color=#37FFFF>Paimon: </color>♪ Curry, curry, in the air~ Hungry children it's time to come home~ ♪",
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
      audio: '71060',
      text: '#<color=#37FFFF>{NICKNAME}: </color>Paimon, do you ever find that the word "Aranara" trips you up?\\n<color=#37FFFF>Paimon: </color>Hmm? Why, does it trip you up? Maybe that\'s because you don\'t really say anything most of the time.\\n<color=#37FFFF>Paimon: </color>Unlike Paimon! Paimon has to talk all the time, so she never gets stuck on words.\\n<color=#37FFFF>{NICKNAME}: </color>Okay, well, try reading this then.\\n<color=#37FFFF>Paimon: </color>What is it? Let\'s see here...\\n<color=#37FFFF>Paimon: </color>Arana the Aranara exercises Ararakalari in the nearby area.\\n<color=#37FFFF>Paimon: </color>Narana the Nara picks Padisarahs in a parallel area further afield.\\n<color=#37FFFF>Paimon: </color>Narana the Padisarah-picking Nara had arranged to invite Arana the Aranara to the bar to befriend Lambad, but alas, Arana the Ararakalari-exercising Aranara professed a preference to Padisarah-picking Nara, Narana, for venturing to Vanarana to view the panorama.\\n<color=#37FFFF>Paimon: </color>On account of Arana the Aranara\'s antipathy to bar drama, Narana the Nara relented and, upon accompanying the latter on a Vanarana-panorama adventure, encountered another Aranara, named "Arama."\\n<color=#37FFFF>Paimon: </color>This must be one of those really weird dreams, right...\\n<color=#37FFFF>Paimon: </color>Ugh, but this headache feels pretty real...',
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
      audio: '71061',
      text: "#<color=#37FFFF>Paimon: </color>Paimon just thought of a great way to deal with Fontaine's prophesied crisis!\\n<color=#37FFFF>{NICKNAME}: </color>Okay, let's hear it.\\n<color=#37FFFF>Paimon: </color>You know those great big clockwork meka they use for digging tunnels? Well, why not send them deep underwater and get them to dig a load of drainage holes? Then no one'll have to worry about the water level rising anymore.\\n<color=#37FFFF>{NICKNAME}: </color>Sounds logical enough, but where do you think the water will go?\\n<color=#37FFFF>Paimon: </color>Ah, what does that matter! Think of it like... a coin pouch. When there's a hole in it, what's the use in racking your brains trying to figure out where all the Mora went? 'Cause the fact is, a coin pouch with a hole wouldn't be able to hold it all anyway.\\n<color=#37FFFF>{NICKNAME}: </color>Well, I'd certainly like to know where all my Mora goes. But from what you're saying, it doesn't sound like you keep track...\\n<color=#37FFFF>Paimon: </color>Hey, what's that supposed to mean? Paimon doesn't know where your... uh, P—Paimon doesn't know where your... Mora goes... hehe, heh...",
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
      audio: '71062',
      text: "#<color=#37FFFF>Paimon: </color>Lyney's magic shows are amazing! Paimon never would've guessed how he did it before he revealed his secret.\\n<color=#37FFFF>{NICKNAME}: </color>Hold on... I just thought of a magic trick!\\n<color=#37FFFF>Paimon: </color>Huh? You know how to do magic too?\\n<color=#37FFFF>{NICKNAME}: </color>Yep. I can make a big magician's hat float in the air, and even make it move at my command.\\n<color=#37FFFF>Paimon: </color>Whoa! Really? How do you do that?\\n<color=#37FFFF>{NICKNAME}: </color>Hehe, simple! I put Paimon inside the hat.\\n<color=#37FFFF>Paimon: </color>What? Why would Paimon be... Ohhh, so Paimon's the one making it float!\\n<color=#37FFFF>Paimon: </color>Hehe, in that case, Paimon has an idea for an even better magic trick!\\n<color=#37FFFF>{NICKNAME}: </color>Huh? What is it?\\n<color=#37FFFF>Paimon: </color>Behold, the bottomless hat! No matter how many plates of delicious food you throw into it, it'll never get full!\\n<color=#37FFFF>{NICKNAME}: </color>Uh... Wait, so where would the plates go?\\n<color=#37FFFF>Paimon: </color>Oh, good point! Umm... Oh, the hat spits the empty plates back out! Tada! Whaddya think?",
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
      audio: '71063',
      text: "#<color=#37FFFF>Paimon: </color>Fontaine's aquabuses are pretty cool. But imagine if they could run without tracks. Then you could go anywhere you want pretty much without having to move a muscle! Traveling would be way less tiring.\\n<color=#37FFFF>{NICKNAME}: </color>But you already fly everywhere. Does that even get tiring?\\n<color=#37FFFF>Paimon: </color>Fly... Fly? Wait, that's it! If we could find a way to make the boats float in the air, then they wouldn't need rails anymore. Hehe, and we could call them \"airboats\"!\\n<color=#37FFFF>Paimon: </color>C'mon, let's go apply for one of those, uh... oh yeah — \"patents\"! We can't let Paimon's genius go to waste. Quick, before someone else beats us to it!\\n<color=#37FFFF>{NICKNAME}: </color>Patents don't work like that... You can't just have a name for your invention. You also need to provide details of the original technical solution that makes your airboats float.\\n<color=#37FFFF>Paimon: </color>Technical, huh? Hmm... Okay, got it! We just need to attach a giant propeller on top of the boats!\\n<color=#37FFFF>{NICKNAME}: </color>Okay... But how would you prevent the boat from spinning along with the propeller? And how would you control the direction of movement?\\n<color=#37FFFF>Paimon: </color>Um... Uh... Ugh. Paimon never realized flying was so complicated! It's always been second nature to Paimon...\\n<color=#37FFFF>{NICKNAME}: </color>Hmm... Well, there might be an easier solution if we ditch the direction and speed control requirements?\\n<color=#37FFFF>Paimon: </color>Huh? Really!?\\n<color=#37FFFF>{NICKNAME}: </color>Yeah. It involves starting at a high altitude and flying downwards at a rapidly-increasing velocity.\\n<color=#37FFFF>Paimon: </color>Hey! That isn't flying, that's free-falling!",
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
      audio: '71064',
      text: "#<color=#37FFFF>Paimon: </color>The Steambird's Great Detective Hurlock series is gonna be published by Yae Publishing House, right?\\n<color=#37FFFF>{NICKNAME}: </color>Seems like it.\\n<color=#37FFFF>Paimon: </color>But The Steambird clearly doesn't need help with printing and distribution. Why don't they just publish it themselves?\\n<color=#37FFFF>{NICKNAME}: </color>Hehehe, you still have a lot to learn about the dark side of the publishing industry...\\n<color=#37FFFF>Paimon: </color>Ugh, okay, you know-it-all! Go on then, give Paimon one good reason why The Steambird can't publish its own novels, when it already publishes a newspaper that's read all over Teyvat.\\n<color=#37FFFF>{NICKNAME}: </color>Because the key to a successful light novel is...\\n<color=#37FFFF>Paimon: </color>Uh-huh?\\n<color=#37FFFF>{NICKNAME}: </color>The illustrations!\\n<color=#37FFFF>Paimon: </color>What!? No way. Try telling that to all the writers and editors in Teyvat! They're the ones working their butts off coming up with ideas!\\n<color=#37FFFF>{NICKNAME}: </color>Maybe so, but the Yae Publishing House has all the best illustrators on their payroll, and poaching them can't be easy. Artists like Calx must be virtually impossible to contact without going through them.\\n<color=#37FFFF>Paimon: </color>Ohhh... Yeah, that's a fair point.\\n<color=#37FFFF>{NICKNAME}: </color>Mm-hmm. But there's another reason, too...\\n<color=#37FFFF>Paimon: </color>Hm?\\n<color=#37FFFF>{NICKNAME}: </color>Only works published by the Yae Publishing House make it into Genius Invokation TCG crossovers!\\n<color=#37FFFF>Paimon: </color>Huh, Paimon never knew!\\n<color=#37FFFF>{NICKNAME}: </color>That's the deepest, darkest secret of the publishing industry: It's not about stories anymore, it's about products and how to commercialize them.\\n<color=#37FFFF>Paimon: </color>Hmph! That's just... sickening!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '173': {
      title: 'About Armchair Detectives...',
      audio: '71065',
      text: "#<color=#37FFFF>Paimon: </color>So apparently, some detectives in Fontaine manage to solve cases without ever setting foot outside their homes. They call them \"armchair detectives\"...\\n<color=#37FFFF>Paimon: </color>That's what they call \"working from home,\" right? Sounds pretty cushy.\\n<color=#37FFFF>Paimon: </color>Still, how do they figure out the truth if they never even go to the crime scene? ...Oh, Paimon knows! They must be using divination.\\n<color=#37FFFF>{NICKNAME}: </color>You're thinking of fortune-tellers, Paimon. Not detectives.\\n<color=#37FFFF>Paimon: </color>Oh... yeah...\\n<color=#37FFFF>{NICKNAME}: </color>In any case, surely the evidence isn't just dropping itself off at the detective's doorstep.\\n<color=#37FFFF>Paimon: </color>You mean... Oh, the detective must have people collecting information for them...\\n<color=#37FFFF>{NICKNAME}: </color>Perhaps, or... Maybe they post commissions at the Adventurers' Guild?\\n<color=#37FFFF>Paimon: </color>Huh? But... that would mean the detective gets all the credit for our hard work! Bet they make a tidy sum of Mora off of it, too! Hmph, Paimon won't stand for that. Let's go have a little talk with Detective Armchair right now!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '174': {
      title:
        'About the Mysterious Treasure of the Fontaine Research Institute...',
      audio: '71066',
      text: "#<color=#37FFFF>Paimon: </color>At the Fontaine Research Institute, they research clockwork and different energy sources, right? So how come there are rumors about a mystery treasure?\\n<color=#37FFFF>Paimon: </color>It'd make more sense if the treasure was owned by a bandit or a pirate.\\n<color=#37FFFF>Paimon: </color>But Paimon's not sure that the researchers' and technicians' definition of \"treasure\" is really mysterious enough to get excited about...\\n<color=#37FFFF>{NICKNAME}: </color>Hmm... What about \"researcher by day, bandit by night\"? Does that sound mysterious enough?\\n<color=#37FFFF>Paimon: </color>Umm... Well for starters, it sounds exhausting. Imagine finishing your day job, then working a whole other job all night... When would they get time to rest?\\n<color=#37FFFF>{NICKNAME}: </color>Maybe they wouldn't need to rest... If they were actually a clockwork meka in disguise!\\n<color=#37FFFF>Paimon: </color>Ooh! A mystery treasure left by a clockwork meka who's a researcher by day and a bandit by night... Now that sounds more like it!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '175': {
      title: 'About the Big No-No of Detective Novels...',
      audio: '71067',
      text: "#<color=#37FFFF>Paimon: </color>Detective stories like \"Great Detective Hurlock\" and \"The Case Files of Miss Orith\" are really popular in Fontaine.\\n<color=#37FFFF>{NICKNAME}: </color>They're also pretty complex. Can you even follow the plot?\\n<color=#37FFFF>Paimon: </color>Don't you underestimate Paimon! If Paimon read any of those novels, she'd definitely solve the mystery before she's even halfway through.\\n<color=#37FFFF>{NICKNAME}: </color>Okay, well if you do, then keep it to yourself. You don't want to spoil the story for anyone else.\\n<color=#37FFFF>Paimon: </color>Paimon would never do that!\\n<color=#37FFFF>{NICKNAME}: </color>Although you also have to watch out for people who use \"no spoilers\" as an excuse to shut down discussions, when the truth is, they're just annoyed that a story they can't stand is getting so much attention.\\n<color=#37FFFF>Paimon: </color>Huh. Well, Paimon doesn't read much, so she wouldn't know anything about that kinda thing.\\n<color=#37FFFF>{NICKNAME}: </color>You see it a lot when two fans of Onibudou get talking. Someone'll butt in and say something like, \"Stop, don't spoil it for me! I'm only up to chapter two of volume one!\"\\n<color=#37FFFF>Paimon: </color>Chapter two? Hah, yeah, clearly they have no intention of reading any further.\\n<color=#37FFFF>{NICKNAME}:</color> Hey Paimon... You wanna hear a secret?\\n<color=#37FFFF>Paimon: </color>Um... sure?\\n<color=#37FFFF>{NICKNAME}: </color>Listen carefully...\\n<color=#37FFFF>Paimon: </color>Mm-hmm?\\n<color=#37FFFF>{NICKNAME}: </color>...Zhongli is Rex Lapis.\\n<color=#37FFFF>Paimon: </color>*gasp* What a crazy twist! Why would you spoil— Wait a second, we figured out that one ages ago!",
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
      audio: '71068',
      text: "#<color=#37FFFF>{NICKNAME}: </color>Pro tip. While we're in Fontaine, if someone ever picks a fight with you, you should never fight back unless there are witnesses around.\\n<color=#37FFFF>Paimon: </color>Huh? Why's that?\\n<color=#37FFFF>{NICKNAME}: </color>'Cause without any evidence, the court'll probably reject your claim of self-defense, and they'll just rule that it was an intentional street fight.\\n<color=#37FFFF>Paimon: </color>Okay, and then what?\\n<color=#37FFFF>{NICKNAME}: </color>Well if that happens, you'll almost certainly end up having to duel before you're put to trial.\\n<color=#37FFFF>{NICKNAME}: </color>At that point, you'll either have to fight the same person all over again, or go head-to-head with their Champion Duelist.\\n<color=#37FFFF>Paimon: </color>...Paimon just feels bad for whoever has to fight you.",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '177': {
      title: "About The Steambird's Editors...",
      audio: '71069',
      text: "#<color=#37FFFF>Paimon: </color>Pretty crazy how things that happened only yesterday show up in today's issue of The Steambird...\\n<color=#37FFFF>Paimon: </color>Even stuff that happened late at night way outside the city makes it in. How do they manage to get these articles written up so quickly?\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, not to mention printed first thing in the morning.\\n<color=#37FFFF>Paimon: </color>Hehe, Paimon gets it! There must be a magic printer at The Steambird's office. As soon as the reporters bring in the latest news, they feed it to the printer, and it goes om-nom-nom-nom-nom, gobbling all the writing up ready to spit it back out when it's printing time!\\n<color=#37FFFF>Paimon: </color>They probably have some reporters bursting in through the doors at the last minute, yelling \"WAIT! There's one last article to feed to the printer!\"\\n<color=#37FFFF>{NICKNAME}: </color>That's definitely a very compelling image. But as far as I know, magic printers like that don't exist — it's all thanks to the tireless work of the editing team that The Steambird gets printed on time every day. They sit there going \"Huh? Hmph! Uhh... Oh no!\" as they race through correcting spelling errors, then they squeeeeeeeze it all into neat vertical columns of text, and run to their colleagues shouting \"Just give me five more minutes, please!\" That's the real magic behind meeting publishing deadlines.\\n<color=#37FFFF>Paimon: </color>Whoa... It's pretty amazing that they're able to make a whole newspaper in just one day. Do they ever get time to sleep?",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '178': {
      title: "About Fontaine's Novels...",
      audio: '71070',
      text: "#<color=#37FFFF>Paimon: </color>Huh, novels in Fontaine have weirdly long names. This one's called \"Do Clockwork Meka Dream of Cogwheel Chiropractors?\"\\n<color=#37FFFF>Paimon: </color>But the writing style and themes are pretty different from Inazuma's light novels.\\n<color=#37FFFF>{NICKNAME}: </color>According to the synopsis, this novel is about a clockwork meka experiencing back pain due to bending over for extended periods. It finally gives in, quits its job as an illustrator, then goes on a long journey looking for a chiropractor to cure its mechanical spine...\\n<color=#37FFFF>Paimon: </color>That actually sounds pretty interesting.\\n<color=#37FFFF>{NICKNAME}: </color>But why a chiropractor, though? Wouldn't an engineer do the job better? They could just go to the Fontaine Research Institute, and save themselves the long journey.\\n<color=#37FFFF>Paimon: </color>Well yeah, but... Having met some of the engineers from the institute, Paimon can see why they wouldn't want to...\\n<color=#37FFFF>{NICKNAME}: </color>Oh yeah, that's true. But anyway, even though the protagonist of the story is a clockwork meka, you can still tell that it was written by a human. Imagine if they got a real clockwork meka to write a novel... I wonder what they'd write about?\\n<color=#37FFFF>Paimon: </color>Hmm... How about this: \"I Awoke One Morning and Found Myself Human!\"\\n<color=#37FFFF>{NICKNAME}: </color>Hey, that's a good one, Paimon.",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '179': {
      title: 'About Trials and Shows...',
      audio: '71071',
      text: "#<color=#37FFFF>Paimon: </color>The Opera Epiclese is used for both criminal trials and performances, so... wait...\\n<color=#37FFFF>{NICKNAME}: </color>Hmm? What's bothering you, Paimon?\\n<color=#37FFFF>Paimon: </color>Well, what if someone did a show about a criminal trial there? How would the audience be able to tell whether it's a real trial or not?\\n<color=#37FFFF>{NICKNAME}: </color>That's a very good question. Can you imagine the looks that the actor playing the criminal would get out on the street the following day? Everyone who recognized them would say \"Hey! Weren't you the one on trial yesterday!?\"\\n<color=#37FFFF>Paimon: </color>Yeah, exactly! It would get sooo confusing!\\n<color=#37FFFF>{NICKNAME}: </color>The actor would constantly be telling everyone: \"It was just a show, for goodness' sake! Stop treating it like it's real!\"\\n<color=#37FFFF>Paimon: </color>Hmph, well they'd only have themselves to blame. What do they expect, staging a show about a trial in the Opera Epiclese? Clearly they're just trying to confuse people. What a terrible idea.\\n<color=#37FFFF>{NICKNAME}: </color>Yeah, it is a terrible idea. What were you thinking, Paimon!?\\n<color=#37FFFF>Paimon: </color>Wait, what? Nothing! Just... what a terrible idea it would be if... someone... came up with that idea...",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '180': {
      title: 'About Fonta...',
      audio: '71072',
      text: "#<color=#37FFFF>Paimon: </color>Fonta tastes amazing, don't you think?\\n<color=#37FFFF>{NICKNAME}: </color>Yep. It's so refreshing, especially when you down the whole thing in one big gulp.\\n<color=#37FFFF>Paimon: </color>Can you buy a glass for Paimon? Paimon's always wanted to try that thing.\\n<color=#37FFFF>{NICKNAME}: </color>What thing?\\n<color=#37FFFF>Paimon: </color>Just buy it, you'll see in a minute!\\n<color=#37FFFF>Paimon: </color>Glug glug glug glug...\\n<color=#37FFFF>Paimon: </color>Ahhhhh.\\n<color=#37FFFF>Paimon: </color>That's what those drunkards do after they clink their glasses together. Paimon's been itching to try it for ages!\\n<color=#37FFFF>{NICKNAME}: </color>Don't imitate them, Paimon... It's not a good look on you.",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '181': {
      title: 'About Gardemeks...',
      audio: '71073',
      text: "#<color=#37FFFF>Paimon: </color>Gardemeks carry out whatever task they're programmed to do. So basically, they can do whatever you tell them to!\\n<color=#37FFFF>{NICKNAME}: </color>Got another bright idea, Paimon?\\n<color=#37FFFF>Paimon: </color>Yep! Paimon needs a commission-handling Gardemek, a material-harvesting Gardemek, and a domain-exploring Gardemek...\\n<color=#37FFFF>Paimon: </color>Ooh, and a gourmet-chef Gardemek, too! Then we can sit back and enjoy our new, fully automated lifestyle!\\n<color=#37FFFF>{NICKNAME}: </color>They're extremely expensive to own and operate, though. And don't forget there's maintenance and repair costs as well.\\n<color=#37FFFF>{NICKNAME}: </color>Okay, lemme do some quick napkin-math here... Using a Gardemek, the average cost to harvest a single Mint would come to around 6,300 Mora...\\n<color=#37FFFF>Paimon: </color>What!? That's eye wateringly expensive...\\n<color=#37FFFF>Paimon: </color>...Suddenly, Paimon feels like we adventurers don't get paid enough for the high-value work we do!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '182': {
      title: 'About Diving...',
      audio: '71074',
      text: "#<color=#37FFFF>Paimon: </color>Fontaine's underwater world is so pretty! There's so many kinds of fish that Paimon's never seen before.\\n<color=#37FFFF>{NICKNAME}: </color>If only we could swim underwater in other places too.\\n<color=#37FFFF>Paimon: </color>Yeah, it's a real shame...\\n<color=#37FFFF>Paimon: </color>If you could go diving anywhere you wanted, where would you choose?\\n<color=#37FFFF>{NICKNAME}: </color>Hmm... Probably... either Liyue Harbor or Guyun Stone Forest.\\n<color=#37FFFF>Paimon: </color>Ooh, great idea! There's gotta be some sunken ships around there full of treasure! We could make a fortune!\\n<color=#37FFFF>{NICKNAME}: </color>Ooh, there's also Sangonomiya Shrine in Inazuma. The view underwater must be stunning around there. So, what about you, Paimon? Where would you go?\\n<color=#37FFFF>Paimon: </color>Let Paimon think... Well, since you already chose places in Liyue and Inazuma, Paimon's gonna go for... Cider Lake!\\n<color=#37FFFF>{NICKNAME}: </color>Not a bad choice. But you gotta be careful, because just when you're swimming along, minding your own business...\\n<color=#37FFFF>Paimon: </color>Y—Yeah?\\n<color=#37FFFF>{NICKNAME}: </color>Suddenly, you notice something slowly sinking in front of you...\\n<color=#37FFFF>Paimon: </color>Huh!?\\n<color=#37FFFF>{NICKNAME}: </color>It's round and chubby, with a red-and-white pattern on its surface. The moment you realize what it is, you know it's already too late...\\n<color=#37FFFF>Paimon: </color>A Jumpy Dumpty!\\n<color=#37FFFF>{NICKNAME}: </color>BOOM!\\n<color=#37FFFF>Paimon: </color>Waaaaaah! And Paimon goes flying into the sky!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '183': {
      title: 'About Art...',
      audio: '71075',
      text: "#<color=#37FFFF>Paimon: </color>There seems to be a lot of eccentric artists in the Court of Fontaine. Apparently, they often stage artistic performances at the opera house, too.\\n<color=#37FFFF>Paimon: </color>The people of Fontaine sure place a lot of importance on the arts. Guess that's why they call it the \"City of the Arts\"!\\n<color=#37FFFF>Paimon: </color>It's nothing like Sumeru, where people had to do their performances in secret...\\n<color=#37FFFF>{NICKNAME}: </color>You're pretty into the arts, huh?\\n<color=#37FFFF>Paimon: </color>Of course! Paimon's pretty much a connoisseur.\\n<color=#37FFFF>{NICKNAME}: </color>Okay, so what makes something \"art\" in your opinion?\\n<color=#37FFFF>Paimon: </color>Well... Art should be something that's out of the ordinary. Something that sparkles like the stars at night!\\n<color=#37FFFF>{NICKNAME}: </color>Hmm... By that definition, I have a work of art following me around wherever I go.\\n<color=#37FFFF>Paimon: </color>...Huh?\\n<color=#37FFFF>Paimon: </color>Wait... You don't mean Paimon, do you?\\n<color=#37FFFF>{NICKNAME}: </color>Yup! And now that I think about it, you should consider doing a performance some time. Paimon, live at the opera house... I bet a lot of people would go to see that.\\n<color=#37FFFF>Paimon: </color>No way! Not gonna happen!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '184': {
      title: 'About Fixing Malfunctions...',
      audio: '71076',
      text: "#<color=#37FFFF>Paimon: </color>You know what's strange? Clockwork meka are extremely intricate, and yet people regularly manage to fix them just by whacking them a few times. How does that work?\\n<color=#37FFFF>{NICKNAME}: </color>I guess if a gear or drive shaft comes loose, sometimes whacking it or giving it a shake is enough to make the parts latch back on to each other.\\n<color=#37FFFF>Paimon: </color>Huh? Paimon didn't follow that...\\n<color=#37FFFF>{NICKNAME}: </color>Well, simply put, if the meka isn't actually broken, a little tap can nudge the parts back into the right places.\\n<color=#37FFFF>{NICKNAME}: </color>But on the other hand, if one of the parts is damaged, then no amount of whacking is ever gonna fix it.\\n<color=#37FFFF>Paimon: </color>Ohh! So it's like knocking sense into people. It works fine as long as they've got a brain, and they're just having a dumb moment. But if they're a total airhead, there's nowhere for the sense to go!\\n<color=#37FFFF>Paimon: </color>...Wait, why are you staring at Paimon's forehead?\\n<color=#37FFFF>{NICKNAME}: </color>Don't worry, I'm not gonna whack you in the head. It wouldn't work anyway.\\n<color=#37FFFF>Paimon: </color>Phew, well that's a relief— Wait... Hey!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '185': {
      title: 'About the Fortress of Meropide...',
      audio: '71077',
      text: "#<color=#37FFFF>Paimon: </color>So there's this place in Fontaine called the Fortress of Meropide. Was it named after someone called Meropide?\\n<color=#37FFFF>{NICKNAME}: </color>I've never heard anything about that, but you could be right.\\n<color=#37FFFF>Paimon: </color>Paimon's kinda envious. Having a building named after you must be an amazing feeling... When you have the time, can you build something in your Serenitea Pot and name it \"the Fortress of Paimon\"?\\n<color=#37FFFF>{NICKNAME}: </color>Sure. In fact, I can do one better — I'll build it in downtown Fontaine.\\n<color=#37FFFF>Paimon: </color>Really? But surely that'd be way too expensive. Are you sure you can afford it?\\n<color=#37FFFF>{NICKNAME}: </color>Oh, absolutely. It won't actually cost that much.\\n<color=#37FFFF>Paimon: </color>Wow, you're so generous! So, what're you gonna build...?\\n<color=#37FFFF>{NICKNAME}: </color>I was thinking a cozy little clay... bungalow, with a wood-burner for under-floor heating, a waterbed... a few chopped onions, salt and pepper, some greens... and, um...\\n<color=#37FFFF>Paimon: </color>Hey! Ugh, you are unbelievable! Can't we get through one nation without you cracking this stupid joke!?",
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
      audio: '71078',
      text: "#<color=#37FFFF>Paimon: </color>Paimon's heard that the earliest clockwork components ever invented actually work on a very simple principle!\\n<color=#37FFFF>Paimon: </color>You take a long object made from a durable material, bend it, and wait for it to return to its original shape. As it rebounds, you can use the energy it gives off to power gears and stuff, and then you basically have an engine!\\n<color=#37FFFF>{NICKNAME}: </color>Hmm... A long object made from a durable material... *gasp* You know what that reminds me of?\\n<color=#37FFFF>{NICKNAME}: </color>Cryo and Pyro Regisvines! Don't you think?\\n<color=#37FFFF>Paimon: </color>Eek! Of all the things you could've thought of, why those two?\\n<color=#37FFFF>Paimon: </color>Huh, but come to think of it, the regisvines are pretty good at whipping their stalks around...\\n<color=#37FFFF>{NICKNAME}: </color>And they're really strong too. If you let them charge up their energy and swing at you...\\n<color=#37FFFF>{NICKNAME}: </color>They'll knock down anyone in their path. Even me — and we both know how strong I am!\\n<color=#37FFFF>Paimon: </color>So are you saying that... you could turn the Regisvines into a clockwork mechanism?\\n<color=#37FFFF>{NICKNAME}: </color>Well, think about it. Since Cryo and Pyro lifeforms are highly incompatible, if we put them both next to each other at a slight incline, so their necks are tilted towards one another...\\n<color=#37FFFF>{NICKNAME}: </color>They'd spin non-stop to avoid touching each other!\\n<color=#37FFFF>{NICKNAME}: </color>It would be the world's most powerful clockwork mechanism! Once we found a way to harness it, it would generate enough energy to power most of the machines in Fontaine!\\n<color=#37FFFF>Paimon: </color>Ohhh! Yeah, you're right!\\n<color=#37FFFF>Paimon: </color>This is a genius idea! Eat your heart out, Fontaine Research Institute!\\n<color=#37FFFF>Paimon: </color>All we need to do now is find a way to bring the Regisvines to Fontaine, put them in position, and...\\n<color=#37FFFF>Paimon: </color>Wait a sec... How the heck are we gonna get those overgrown ferns to Fontaine?\\n<color=#37FFFF>{NICKNAME}: </color>As soon as we've tackled the minor issues of practicality and cost-effectiveness...\\n<color=#37FFFF>{NICKNAME}: </color>...How about we explore the details ahead of us later?",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '187': {
      title: 'About Underwater Cafés...',
      audio: '71079',
      text: "#<color=#37FFFF>Paimon: </color>Paimon thought we'd be saying goodbye to the amazing cafés after we left Sumeru. But it seems like people in Fontaine are big coffee drinkers too!\\n<color=#37FFFF>{NICKNAME}: </color>They sure are. Even the newspapers run articles about how great coffee is at keeping you awake and alert. And at boosting your energy levels, so you can keep performing at peak efficiency during a long working day.\\n<color=#37FFFF>Paimon: </color>Whew, any job where you need coffee to stay energized must be exhausting...\\n<color=#37FFFF>Paimon: </color>Like, umm... Blacksmiths? Maybe chefs too... And adventurers — they're always running around all over the place. Hey, and what about divers?\\n<color=#37FFFF>{NICKNAME}: </color>Divers, huh? That's definitely the odd one out here...\\n<color=#37FFFF>{NICKNAME}: </color>How are divers supposed to drink coffee when they work underwater the entire time?\\n<color=#37FFFF>Paimon: </color>Yeah, that's a good question!\\n<color=#37FFFF>Paimon: </color>They can't take off their helmets underwater, so they'd probably have to shut themselves inside an even bigger glass box and drain all the water out before they could finally drink their coffee. Probably from a bottle...\\n<color=#37FFFF>Paimon: </color>No, wait... If the coffee's already in a bottle, all they'd need is a long straw that goes from the bottle into their helmet. Then they'd be able to take a sip of coffee whenever they want!\\n<color=#37FFFF>{NICKNAME}: </color>Hehe, eww, haha. But then the coffee would go cold!\\n<color=#37FFFF>{NICKNAME}: </color>Cold coffee is just gross. With the important exception of iced coffee, but that's its own thing.\\n<color=#37FFFF>Paimon: </color>Well that's no problem. They can just bring a stove with them underwater.\\n<color=#37FFFF>Paimon: </color>You've seen the kind of stove that most people use in Fontaine, right? It only has one small opening up at the top. As long as that's sealed nice and tight, it won't go out even underwater!\\n<color=#37FFFF>Paimon: </color>Wait a second... No way, is that... That's it! That must be the whole reason stoves in Fontaine are made that way!\\n<color=#37FFFF>{NICKNAME}: </color>Ding ding ding, right answer! That is indeed the reason behind the design of the Fontaine-style stove.\\n<color=#37FFFF>Paimon: </color>Hehe, Paimon's the smartest!\\n<color=#37FFFF>Paimon: </color>Hey, how about we open an underwater café? Paimon bets there's lots of divers out there craving some coffee while they're down in the depths... Yeah, this could be a huge opportunity for us!\\n<color=#37FFFF>Paimon: </color>Once we open the world's first-ever underwater café, the Mora will come rolling in! Heck, and why stop at cafés? The ocean's our oyster! We could build a whole shopping mall down there! Then a whole underwater business district...\\n<color=#37FFFF>Paimon: </color>Hee-hee! Ah, it's gotta be the best feeling in the world, making Mora through your very own stroke of business genius!\\n<color=#37FFFF>{NICKNAME}: </color>Just one thing, okay? ...Don't go taking out a loan in my name!",
      tips: 'Unlock the "Court of Fontaine" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '188': {
      title: 'About The Steambird...',
      audio: '71080',
      text: "#<color=#37FFFF>Paimon: </color>The Steambird's head office is in Fontaine, right? Paimon wonders what stories make it into their newspapers.\\n<color=#37FFFF>Paimon: </color>Do you think they reported on our adventures with Dvalin? Or our duel with the Raiden Shogun? Oh, and everything that happened at the Akademiya!\\n<color=#37FFFF>{NICKNAME}: </color>I'm sure they cover just about everything that goes on. It's more a question of where it would appear — they probably have different sections reserved for different topics.\\n<color=#37FFFF>Paimon: </color>Ooh, well in that case, we must make it onto the front page all the time! Surely that's where all the most exciting stories go.\\n<color=#37FFFF>{NICKNAME}: </color>Hmm... I'm not so sure. We might've made front-page news once or twice, I guess. But I wouldn't be surprised if the headlines mostly focus on hit new operas or well-known actors.\\n<color=#37FFFF>{NICKNAME}: </color>You know, stuff like, \"Actor X Spotted Drinking Coffee on Street,\" \"Actor Y Goes Public About New Relationship,\" or \"Actor Z to Retire From Performing.\"\\n<color=#37FFFF>Paimon: </color>Why would they fill the best page with stuff like that? It's completely pointless.\\n<color=#37FFFF>{NICKNAME}: </color>Well... trivial, maybe, but not pointless. Those are the stories that grab people's attention and convince them to buy the paper to get all the details.\\n<color=#37FFFF>Paimon: </color>*sigh* ...Fine. Well... Maybe we'll be on the first few pages then? Surely, they've gotta put some real news in there. And it's gotta be interesting enough to keep people reading after they've gotten their dose of celebrity gossip. Right?\\n<color=#37FFFF>{NICKNAME}: </color>The first few pages cover positive local news stories in the Court of Fontaine. Things like food and commodity prices going down, or progress updates on the aquabus expansions.\\n<color=#37FFFF>{NICKNAME}: </color>They put these reports at the most prominent locations inside the newspaper. The point of them is mostly just to kill time.\\n<color=#37FFFF>{NICKNAME}: </color>What goes on at the Akademiya might be important, but it doesn't directly impact the lives of people in Fontaine.\\n<color=#37FFFF>Paimon: </color>Huh... So, where would they put our stories then?\\n<color=#37FFFF>{NICKNAME}: </color>I'd guess on the very back page, after everything else.\\n<color=#37FFFF>Paimon: </color>Aww... Why so far back!?\\n<color=#37FFFF>{NICKNAME}: </color>I think they call it... \"saving the best till last.\"\\n<color=#37FFFF>{NICKNAME}: </color>The editors probably embellish things a lot to flesh the story out, then break it into several chunks to make it into a series that runs over several days.\\n<color=#37FFFF>Paimon: </color>Alright, so... what's the \"point\" of the final page, then?\\n<color=#37FFFF>{NICKNAME}: </color>It gives the newspaper its \"raison d'etre.\"",
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
      audio: '71081',
      text: "#<color=#37FFFF>Paimon: </color>Paimon was not expecting to see clockwork meka dancing... As dangerous as it is to get too close to them, it sure is nice to watch them from a distance.\\n<color=#37FFFF>Paimon: </color>Hehe, imagine if they had ones that could sing and play musical instruments, too. That'd be really cool!\\n<color=#37FFFF>{NICKNAME}: </color>Then you'd just need some meka for the audience, and you'd have a show by meka, for meka.\\n<color=#37FFFF>Paimon: </color>Uhhh... Somehow, that's a pretty scary thought...\\n<color=#37FFFF>Paimon: </color>Anyway, meka are meant to do stuff, not sit there and watch a show... Ooh! How about meka that can paint? Paimon bets their paintings would look just like photos taken with a Kamera.\\n<color=#37FFFF>{NICKNAME}: </color>Sounds like you could just use a Kamera.\\n<color=#37FFFF>Paimon: </color>Oh, right, yeah... Hmm...\\n<color=#37FFFF>Paimon: </color>Ugh, Paimon's brain's stopped working. What about you? If you could make a clockwork meka do anything at all, what would it be?\\n<color=#37FFFF>{NICKNAME}: </color>Hmm... Travel guiding, perhaps.\\n<color=#37FFFF>{NICKNAME}: </color>Bleep-blorp. This is your guidebot speaking. Please go straight on at the next crossroads. Bloop-blerp.\\n<color=#37FFFF>Paimon: </color>Uh, P—Paimon's just remembered how much training you need before you can own a clockwork meka! And how expensive they are! Also, who knows if they even work outside of Fontaine, heh...\\n<color=#37FFFF>Paimon: </color>The best travel guide in Teyvat will not lose her job to some machine! At least... at least not yet!",
      tips: 'Unlock the "Erinnyes" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '190': {
      title: 'About Fountains...',
      audio: '71082',
      text: "#<color=#37FFFF>Paimon: </color>There always seems to be people throwing Mora into the fountain on Erinnyes.\\n<color=#37FFFF>{NICKNAME}: </color>Yeah. Supposedly, the fountain fairies listen to people's wishes. That's probably how the custom began.\\n<color=#37FFFF>Paimon: </color>Huh? So even fountain fairies need Mora?\\n<color=#37FFFF>Paimon: </color>Whoa, they must be living the dream! All they need to do is find a fountain to live in, and they're all set! No need to work, just sit back and wait for people to literally throw Mora to you.\\n<color=#37FFFF>{NICKNAME}: </color>I don't think that's quite how it works... You have to grant wishes, remember?\\n<color=#37FFFF>Paimon: </color>Oh, okay, well... \"Oh young traveler, your wishes have been heard. Which lost sword is it that you seek? The Dull Blade, or the Silver Sword?\"\\n<color=#37FFFF>{NICKNAME}: </color>They both look like trash, to be honest.\\n<color=#37FFFF>Paimon: </color>Just choose one.\\n<color=#37FFFF>{NICKNAME}: </color>\"Oh fair maiden of the fountain, neither of these swords is mine, and neither do I desire, for what I seek is my lost travel companion.\"\\n<color=#37FFFF>Paimon: </color>Huh? You... You are a sneaky one, young traveler... Okay then, the fountain fairy shall grant your wish and become your best travel companion ever!",
      tips: 'Unlock the "Opera Epiclese" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '191': {
      title: 'About Opera...',
      audio: '71083',
      text: "#<color=#37FFFF>Paimon: </color>Operas in Fontaine come in so many different genres. Historical, myths and legends, even fairytales and modern romances...\\n<color=#37FFFF>{NICKNAME}: </color>And lots of adventure stories too.\\n<color=#37FFFF>Paimon: </color>Oh yeah, like \"Tancrede et Chariclea\"! Oh Tancrede, you fool! If only you'd recognized Chariclea before it was too late...\\n<color=#37FFFF>{NICKNAME}: </color>Apparently, the story's based on true events.\\n<color=#37FFFF>Paimon: </color>Ooh... Does that mean that there'll be opera adaptations of our adventures one day?\\n<color=#37FFFF>Paimon: </color>We've been through so many adventures together. There's gotta be a scriptwriter out there who's interested in taking our story to the stage!\\n<color=#37FFFF>Paimon: </color>And they won't have to worry about crafting the perfect tragedy, either. Everyone loves a happy ending, right?\\n<color=#37FFFF>{NICKNAME}: </color>Ooh, how about we get a head start and assign voices to ourselves?\\n<color=#37FFFF>Paimon: </color>Hmm... Paimon thinks you have a mezzo-soprano voice. What do you think Paimon should be?\\n<color=#37FFFF>{NICKNAME}: </color>Remind me — what's that shrill voice that most prima donnas have?\\n<color=#37FFFF>Paimon: </color>Oh, you must be thinking of coloratura soprano— Hey!",
      tips: 'Unlock the "Opera Epiclese" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '192': {
      title: 'About Melusines...',
      audio: '71084',
      text: "#<color=#37FFFF>Paimon: </color>Apparently, every Melusine gets their own special token when they're born. They treat it as a symbol of their very being.\\n<color=#37FFFF>{NICKNAME}: </color>If you were a Melusine, what would your token be?\\n<color=#37FFFF>Paimon: </color>Definitely a fork! To represent Paimon's lifelong mission to taste all the delicious food in the whole world!\\n<color=#37FFFF>{NICKNAME}: </color>Not Mora, then?\\n<color=#37FFFF>Paimon: </color>Ooh, good point... Yeah, if it were Mora, it'd mean that Paimon's destined to be a super rich person. Then Paimon could buy anything she wants!\\n<color=#37FFFF>Paimon: </color>Hmmmmm... Argh, Paimon's so torn! Both are so tempting...\\n<color=#37FFFF>{NICKNAME}: </color>How about a fork made from Mora? Then you can have your cake and eat it, so to speak.\\n<color=#37FFFF>Paimon: </color>Wow, that's a great idea!\\n<color=#37FFFF>Paimon: </color>Anyway, enough about Paimon. Your token would probably be... a cooking pot, to represent being Paimon's personal gourmet chef!\\n<color=#37FFFF>{NICKNAME}: </color>No no no, my token would be Paimon.\\n<color=#37FFFF>Paimon: </color>Aw, really?\\n<color=#37FFFF>{NICKNAME}: </color>With Paimon as my token, everything that you have would ultimately belong to me.\\n<color=#37FFFF>Paimon: </color>Uh... Okay sure. Friends share everything, right?\\n<color=#37FFFF>{NICKNAME}: </color>Haha, yeah... My stuff would still be mine...\\n<color=#37FFFF>Paimon: </color>Hey, no fair!",
      tips: 'Unlock the "Merusea Village" Teleport Waypoint in Fontaine',
      tasks: null,
    },
    '193': {
      title: 'About the Palais Mermonia...',
      audio: '71085',
      text: "#<color=#37FFFF>Paimon: </color>People in the city keep telling us how Palais Mermonia is a suuuper stressful place to work.\\n<color=#37FFFF>Paimon: </color>But when we went to see it for ourselves, it seemed like hardly anyone works there, and the few people who do work there were hardly working.\\n<color=#37FFFF>Paimon: </color>In fact, they looked like they didn't have a care in the world... What part of working there is supposed to be so stressful, exactly?\\n<color=#37FFFF>{NICKNAME}: </color>Maybe the work they carry out is essential, but insignificant.\\n<color=#37FFFF>Paimon: </color>How can something be both of those things at the same time?\\n<color=#37FFFF>{NICKNAME}: </color>Well... Okay, so imagine that one day, you suddenly forgot how to fly and fell to the ground...\\n<color=#37FFFF>Paimon: </color>That'll never happen. Flying's a piece of cake for Paimon.\\n<color=#37FFFF>{NICKNAME}: </color>Probably not — but just in case, we should make sure that there's a cart loaded with cushions ready to catch you at all times.\\n<color=#37FFFF>{NICKNAME}: </color>The cart would have to be designed to withstand any environment and weather conditions, and the cushions would need to be soft enough to break your fall gently...\\n<color=#37FFFF>{NICKNAME}: </color>It would need to be built from the sturdiest timber and strongest rope, and packed with plenty of medical supplies and snacks...\\n<color=#37FFFF>{NICKNAME}: </color>And all because keeping Paimon safe and sound is absolutely essential.\\n<color=#37FFFF>Paimon: </color>You really mean that? Aw, thanks, hehe... But there's really no need to go to all that trouble.\\n<color=#37FFFF>Paimon: </color>Paimon's been flying for a really long time. There's no way Paimon's gonna suddenly drop out of the air. So you don't need to worry about it.\\n<color=#37FFFF>{NICKNAME}: </color>See? That's why it's insignificant.\\n<color=#37FFFF>{NICKNAME}: </color>If it ever did happen, the consequences would be disastrous — hence why it's essential to be prepared.\\n<color=#37FFFF>{NICKNAME}: </color>But practically speaking, the chances of it happening are next to nothing. So it's insignificant at the same time.\\n<color=#37FFFF>{NICKNAME}: </color>If someone in the Palais Mermonia was assigned a task like that, it'd be up to them to decide how busy they wanna get. Chances are, they'd probably just sit back and do nothing.\\n<color=#37FFFF>Paimon: </color>But... What if Paimon really does forget how to fly one day? What's gonna happen when Paimon falls to the ground?\\n<color=#37FFFF>{NICKNAME}: </color>I'll be here to catch you, no matter what. Because you're not \"essential but insignificant\" — you're the best travel companion ever!",
      tips: 'Unlock the Statue of The Seven (Hydro) at the Palais Mermonia in Fontaine',
      tasks: null,
    },
    '194': {
      title: "About the Children of Echoes' Gems...",
      audio: '71086',
      text: "#<color=#37FFFF>Paimon:</color> Hey, so the valleys here are just bursting with shiny gemstones!\\n<color=#37FFFF>Paimon:</color> This could be a huge opportunity for us! We should get digging ASAP. With any luck, we'll hit the jackpot and we'll never have to worry about Mora again!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... But how would you actually know when you've hit the jackpot? Can you even tell which stones are the valuable ones?\\n<color=#37FFFF>Paimon:</color> Uhh, well... Paimon just figured... the shinier the stone, the more valuable it is! Yeah, that should be about right!\\n<color=#37FFFF>{NICKNAME}:</color> You're starting to sound like an evil fairytale dragon, hoarding all the shinies they can get their greedy claws on...\\n<color=#37FFFF>Paimon:</color> Hehe, except we're in Natlan now — so instead of \"evil dragon,\" it's \"noble Saurian\"!\\n<color=#37FFFF>Paimon:</color> \"O brave and cunning {NICKNAME}, follow this noble Saurian, for she shall lead you to the most precious gemstone in the entire world!\"\\n<color=#37FFFF>{NICKNAME}:</color> Great! Except she can't tell which stones are the valuable ones, so how's that gonna work?",
      tips: 'Unlock the "Children of Echoes" Teleport Waypoint in Natlan',
      tasks: null,
    },
    '195': {
      title: 'About the Scions of the Canopy...',
      audio: '71087',
      text: "#<color=#37FFFF>Paimon:</color> The Scions of the Canopy sure do love their extreme outdoor sports. Seems like they have a real appetite for danger.\\n<color=#37FFFF>Paimon:</color> Free solo climbing, skysurfing, volcano parkour, bungee jumping off cliffs... Whew, even the thought of it makes Paimon light-headed!\\n<color=#37FFFF>{NICKNAME}:</color> Really? Honestly, some of the stuff we've done is at least as dangerous as that... We froze half to death on Dragonspine, narrowly avoided being fried in all those thunderstorms, got sandblasted in the scorching desert, stared death in the face in those eerie Withering Zones... The list goes on.\\n<color=#37FFFF>Paimon:</color> Huh, when you put it like that... Yeah, we've been through some pretty extreme stuff.\\n<color=#37FFFF>{NICKNAME}:</color> Mhm, but we're built different. Most people's idea of \"danger\" is probably just an average day on the road for us. That's probably how it is for the Scions of the Canopy with their extreme sports as well.\\n<color=#37FFFF>Paimon:</color> Whoa, wait a second! Let's get one thing straight: YOU might be built different, but Paimon sure as heck isn't.\\n<color=#37FFFF>Paimon:</color> Now, Paimon's sure you and your danger-braving buddies know what you're doing, but the second we find ourselves in serious trouble, Paimon's gonna... hide behind you until it's over.",
      tips: 'Unlock the "Scions of the Canopy" Teleport Waypoint in Natlan',
      tasks: null,
    },
    '196': {
      title: 'About the Hot Springs of Natlan...',
      audio: '71088',
      text: "#<color=#37FFFF>Paimon:</color> The People of the Springs are so chill. If they're not relaxing in a hot spring, they're planning their next big soak...\\n<color=#37FFFF>{NICKNAME}:</color> Apparently, some of them even hire musicians to play some relaxing music while they take a dip. The warm water relaxes the body, and the soothing music relaxes the mind...\\n<color=#37FFFF>Paimon:</color> Whoa, that sounds so nice, Paimon wants to try it for herself...\\n<color=#37FFFF>{NICKNAME}:</color> Alright. Well, next time you visit the hot springs, I'll play some Aranara music for you.\\n<color=#37FFFF>Paimon:</color> Ooh~ ...Um, but Paimon doesn't play any instruments, so what happens when it's your turn to go in the spring?\\n<color=#37FFFF>{NICKNAME}:</color> You can sing me a song. Maybe... an opera from Fontaine?\\n<color=#37FFFF>Paimon:</color> That's way too hard! Also — not exactly relaxing! That kind of music will put your blood pressure through the roof!\\n<color=#37FFFF>Paimon:</color> How about some Natlan rap instead? Paimon's been practicing, check this out:\\n<color=#37FFFF>Paimon:</color> \"Hey! Flyin' in your face, it's Paimon the guide, no stranger to danger, takes it in her stride...\"\\n<color=#37FFFF>Paimon:</color> \"Saw a beast called blubber in the nation of water, my Guhua brother got his weapons in order, sword in one hand and a spear in the other...\"\\n<color=#37FFFF>{NICKNAME}:</color> Wow, very smooth!\\n<color=#37FFFF>{NICKNAME}:</color> If I was listening to that in a hot spring, I'd be tapping the water to the beat like a drum.\\n<color=#37FFFF>Paimon:</color> Yeah, it'd be like a big music festival! And anyone who's late to the party, the rhythm of the water would get them right into the groove!\\n<color=#37FFFF>{NICKNAME}:</color> Uhhh... Wait, didn't we start this by saying how the hot springs are meant to be relaxing?",
      tips: 'Unlock the "People of the Springs" Teleport Waypoint in Natlan',
      tasks: null,
    },
    '197': {
      title: 'About the Collective of Plenty...',
      audio: '71089',
      text: "#<color=#37FFFF>Paimon</color>: Don't you think those masked warriors look super cool?\\n<color=#37FFFF>{NICKNAME}</color>: Yeah, really gives them an air of mystery.\\n<color=#37FFFF>Paimon</color>: Right!? Don't you think Paimon should get in on this too? Put on a mask and win some wrestling matches with the Collective of Plenty? She could make a whole new name for herself!\\n<color=#37FFFF>Paimon</color>: Paimon's even thought of some catchphrases, get this: \"A saurian warrior never removes her mask!\"\\n<color=#37FFFF>Paimon</color>: Famous adventurer by day, mighty saurian warrior by night. Does that sound cool or what!?\\n<color=#37FFFF>{NICKNAME}</color>: Yeah, it does, but there's just one problem...\\n<color=#37FFFF>Paimon</color>: Hmm? What's that?\\n<color=#37FFFF>{NICKNAME}</color>: You'll just look like Paimon in a mask. No air of mystery there.",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '198': {
      title: 'About Woven Goods...',
      audio: '71090',
      text: '#<color=#37FFFF>Paimon:</color> Here in Natlan, they seem to use woven scrolls where most nations would use books. It feels so different reading off of them.\\n<color=#37FFFF>{NICKNAME}:</color> Yeah. They say it started with the Masters of the Night-Wind, when the Shamans began recording their tribal history and legends on woven material. As the practice became more widely adopted, the number and variety of stories grew.\\n<color=#37FFFF>Paimon:</color> Ooh, Paimon should make a record of all our adventures as well! That way, if you ever start a tribe called the Travelers, you\'ll have your very own historical record!\\n<color=#37FFFF>Paimon:</color> Plus, it could make a really cool cape. And an extra blanket when you\'re camping in the wild...\\n<color=#37FFFF>{NICKNAME}:</color> That would make for one "weathered" chronicle.',
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '199': {
      title: 'About the Collective of Plenty and the Flower-Feather Clan...',
      audio: '71091',
      text: "#<color=#37FFFF>Paimon:</color> Paimon's heard that everyone from the Collective of Plenty is built like a bricklayer!\\n<color=#37FFFF>{NICKNAME}:</color> Maybe you should go stay with them for a while. Grow those muscles out.\\n<color=#37FFFF>Paimon:</color> No! Paimon likes herself the way she is now.\\n<color=#37FFFF>{NICKNAME}:</color> Okay, then what about staying with the Flower-Feather Clan instead? Their thing is flying. I bet they could help you sharpen your skills!\\n<color=#37FFFF>Paimon:</color> Huh? But... isn't Paimon good enough at flying already?\\n<color=#37FFFF>{NICKNAME}:</color> Yeah, but then you'd be able to carry me when you fly.\\n<color=#37FFFF>Paimon:</color> Nope, not happening! How would that even be possible?\\n<color=#37FFFF>{NICKNAME}:</color> Well, if you had those muscles I talked about...\\n<color=#37FFFF>Paimon:</color> Oh, geez, not this again... For the last time, no!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '200': {
      title: 'About Ways to Make Friends With Saurians...',
      audio: '71092',
      text: "#<color=#37FFFF>Paimon:</color> Oooh, there are so many cute Saurians in Natlan! Paimon's gonna make friends with every single one!\\n<color=#37FFFF>{NICKNAME}:</color> Oh? Someone sounds confident...\\n<color=#37FFFF>Paimon:</color> You bet! Paimon's got it all figured out!\\n<color=#37FFFF>{NICKNAME}:</color> Oh you do, huh? Come on then, what's the secret to making Saurian friends?\\n<color=#37FFFF>Paimon:</color> It's really simple! First, you've gotta sweet-talk them, show 'em you mean well so they relax their defenses. Then, you gently pat them on the head — that makes them feel more comfortable around you.\\n<color=#37FFFF>Paimon:</color> Last but not least: Get 'em some good grub! The way to a Saurian's heart is through the stomach, after all! What do you think? Solid plan, huh?\\n<color=#37FFFF>{NICKNAME}:</color> Hmm, what do I think... I think that all of these tactics would also work really well on you, Paimon.\\n<color=#37FFFF>Paimon:</color> Would not! Paimon can't be won over by some cheap tricks!\\n<color=#37FFFF>{NICKNAME}:</color> Huh? Oh, you misunderstand! I meant to say that you're as cute as a baby Saurian!\\n<color=#37FFFF>Paimon:</color> Hah! Flattery, really? You think that'll work on Paimon? Think again!\\n<color=#37FFFF>{NICKNAME}:</color> But I was being sincere, Paimon! Ah, how can I prove it to you? With some Sweet Madame, perhaps?\\n<color=#37FFFF>Paimon:</color> ...Wait, really? Sweet Madame? Oh, heck yes! Paimon could totally go for some of that right now!\\n<color=#37FFFF>Paimon:</color> ...Uhh... What's with that smug look on your face? ...What!? Is Paimon missing something?",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '201': {
      title: 'About Archaeology...',
      audio: '71093',
      text: "#<color=#37FFFF>Paimon:</color> Word is that speed's of the essence when doing archaeology work with the Children of Echoes. Why's that?\\n<color=#37FFFF>{NICKNAME}:</color> It's probably because this place is absolutely overflowing with relics...\\n<color=#37FFFF>Paimon:</color> Uh, but isn't that a good thing?\\n<color=#37FFFF>{NICKNAME}:</color> Well, more relics means more competition! Imagine you saw a really cool stone slate one day, and planned to come back and grab it the day after — only to show up the next day and find someone else had already beaten you to it!\\n<color=#37FFFF>Paimon:</color> Um, Paimon still doesn't get it...\\n<color=#37FFFF>{NICKNAME}:</color> Okay, here's another analogy: Imagine one night you're all ready to dig in to a delicious snack... but then you find a piece of it's missing!\\n<color=#37FFFF>Paimon:</color> Ahh! Yeah, that'd be terrible!\\n<color=#37FFFF>Paimon:</color> ...Wait a sec, that's exactly what happened last night... Anything you wanna confess, {NICKNAME}?",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '202': {
      title: 'About Resolving Conflicts...',
      audio: '71094',
      text: "#<color=#37FFFF>Paimon:</color> Paimon's heard that even in Natlan, there are lots of ways to resolve conflict that don't involve contests of strength.\\n<color=#37FFFF>{NICKNAME}:</color> Really? In the Nation of War?\\n<color=#37FFFF>Paimon:</color> Yeah! Like, apparently, some people in the Children of Echoes settle their disputes by holding a dance-off!\\n<color=#37FFFF>{NICKNAME}:</color> A dance-off? So, they mutually decide on a time and place...\\n<color=#37FFFF>Paimon:</color> Uh-huh!\\n<color=#37FFFF>{NICKNAME}:</color> And just dance their socks off?\\n<color=#37FFFF>Paimon:</color> Mm-hmm!\\n<color=#37FFFF>{NICKNAME}:</color> Until one person gets so exhausted, they can't get up anymore?\\n<color=#37FFFF>Paimon:</color> Yep!\\n<color=#37FFFF>Paimon:</color> ...Wait, what the... Hold on, that IS a contest of strength!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '203': {
      title: 'About Ways to Make a Fortune...',
      audio: '71095',
      text: "#<color=#37FFFF>Paimon:</color> Guess what? Paimon just thought of the best Mora-making idea ever!\\n<color=#37FFFF>{NICKNAME}:</color> Oh? Do tell.\\n<color=#37FFFF>Paimon:</color> Just look at how many people pass by this place every day. If we opened a business here, right outside the Stadium, we'd make a fortune without even trying!\\n<color=#37FFFF>{NICKNAME}:</color> So... What would you sell?\\n<color=#37FFFF>Paimon:</color> Uhhh... maybe... alchemical potions from Mondstadt?\\n<color=#37FFFF>{NICKNAME}:</color> I think there's already people selling similar stuff...\\n<color=#37FFFF>Paimon:</color> In that case, ummm... Ooh! Ores from Liyue! Yeah, we could make a killing off of those!\\n<color=#37FFFF>{NICKNAME}:</color> Pretty sure the Children of Echoes are already in that business, too...\\n<color=#37FFFF>Paimon:</color> Yeah... Wait, Paimon's got it — rugs from Sumeru! Those'll definitely be a hit!\\n<color=#37FFFF>{NICKNAME}:</color> Unfortunately, that's the specialty of the Masters of the Night-Wind.\\n<color=#37FFFF>Paimon:</color> Well then... we'll fence the whole Stadium up! And charge an admission fee to everyone who tries to get inside, whether they're a contestant or a spectator!\\n<color=#37FFFF>{NICKNAME}:</color> You'll be locked up before your fence is even half-finished...\\n<color=#37FFFF>Paimon:</color> Grrrrrrrr! Why does getting rich have to be so hard?",
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
      audio: '71096',
      text: "#<color=#37FFFF>Paimon:</color> Paimon will never forget the first saurians we saw in Natlan. They're just fascinating creatures.\\n<color=#37FFFF>Paimon:</color> There was the Tepetlisaurs with their bouncy heads, the Koholasaurs with their smooth backs, and then the Yumkasaurs with their fluffy ears and heads.\\n<color=#37FFFF>{NICKNAME}:</color> I bet a baby Yumkasaur would make the best teddy bear...\\n<color=#37FFFF>Paimon:</color> Yeah... Hey, their fur probably keeps growing out as they get older, right? Do you think it starts getting in the way eventually?\\n<color=#37FFFF>Paimon:</color> Like, imagine if a Yumkasaur had really long fur around the ears and head... they'd barely be able to see where they're going. And that could be kinda dangerous...\\n<color=#37FFFF>{NICKNAME}:</color> You seem to have thought a lot about this. Are you planning on becoming a saurian hairstylist?\\n<color=#37FFFF>Paimon:</color> Uh... Are you serious?\\n<color=#37FFFF>{NICKNAME}:</color> Just think about it. Once you get famous, you'll be rolling in Mora!\\n<color=#37FFFF>Paimon:</color> Oh... You're right! This is it, this is how Paimon makes her fortune!\\n<color=#37FFFF>Paimon:</color> Paimon's gonna become the hairstylist for every Yumkasaur in Natlan! Hehehe, so much Mora...\\n<color=#37FFFF>Paimon:</color> No, wait, the Mora's secondary! The best part of this plan is making friends with all the Yumkasaurs! Life will be sooo happy!\\n<color=#37FFFF>{NICKNAME}:</color> But they're big, you know. It's gotta take a long time to style all that fur with just an ordinary pair of scissors. You might find you can only take one customer per day...\\n<color=#37FFFF>{NICKNAME}:</color> If you're serious about this stylist business, you'd better start building some strength! At the very least, aim to lift a pair of scissors as big as the Dull Blade!\\n<color=#37FFFF>Paimon:</color> The Dull Blade? But isn't that your weapon?\\n<color=#37FFFF>{NICKNAME}:</color> Yeah, but I can let you borrow it for training. Come on! Let's get practicing!\\n<color=#37FFFF>Paimon:</color> Hey... This isn't \"training,\" this is \"give Paimon the sword and let her fight the monsters instead\"! Paimon did not sign up for this!",
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
      audio: '71097',
      text: '#<color=#37FFFF>Paimon:</color> So in Natlan, warriors who impress the Wayob enough get an Ancient Name. Paimon\'s so jealous! Having an Ancient Name would be so cool!\\n<color=#37FFFF>{NICKNAME}:</color> Huh? Don\'t you already have a bucket load of titles, Paimon?\\n<color=#37FFFF>Paimon:</color> Hmm? Oh wait... Yeah, you\'re right!\\n<color=#37FFFF>Paimon:</color> Paimon\'s your "best travel companion" and "trusty guide," plus she\'s the "Trendy Flyer," "Silver Companion," and "Assistant to the Honorary Senior Researcher"... Heck yeah, Paimon\'s an actual legend!\\n<color=#37FFFF>Paimon:</color> If the people of Natlan end up making a record of our adventures, Paimon\'s gonna make sure they use every single one of those titles!\\n<color=#37FFFF>{NICKNAME}:</color> Huh? But wouldn\'t that make everything too long?\\n<color=#37FFFF>{NICKNAME}:</color> Just think about it. If the locals also used all of their names, records would look something like:\\n<color=#37FFFF>{NICKNAME}:</color> On this day, "Uthabiti" Kachina of the Children of Echoes, otherwise known as the Nanatzcayans, and "Umoja" Mualani of the People of the Springs, of Meztli fame, encountered "Malipo" Kinich of the Scions of the Canopy of Huitztlan, traveling alongside his impish partner, K\'uhul Ajaw, while on their way to the Masters of the Night-Wind in Mictlan...\\n<color=#37FFFF>Paimon:</color> Okay, okay, you can stop now! Geez, with a document that long, it\'d stretch from here to the Stadium and back... and that\'s before it even got to the point!\\n<color=#37FFFF>Paimon:</color> Well, if Paimon had to pick just one out of all her titles... Yep, it\'d have to be: "Best companion ever"!',
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
      audio: '71098',
      text: "#<color=#37FFFF>Paimon:</color> So just between the two of us... Paimon's been wondering about something. It's to do with the competitions at the Stadium.\\n<color=#37FFFF>Paimon:</color> You know how there's a point system? First everyone fights in teams, then for the teams that make it through, there's a set number of one-on-one matches, and after that, everyone's ranked based on their final scores.\\n<color=#37FFFF>Paimon:</color> Why did they structure it like that?\\n<color=#37FFFF>{NICKNAME}:</color> Maybe it's to maintain suspense until the final round? Everyone loves to see the underdog make a comeback at the last minute.\\n<color=#37FFFF>Paimon:</color> Could be, could be... Or maybe it's because they wanna avoid a situation where there's only two contestants and they're evenly matched?\\n<color=#37FFFF>{NICKNAME}:</color> Yeah... They'd end up having to call it a draw and quit.\\n<color=#37FFFF>Paimon:</color> Exactly! It'd be like pitting the most aggressive Tatankasaur against the most slippery Yumkasaur. Tatankasaur attacks, Yumkasaur dodges, and so on and so forth, until a whole day and night has passed...\\n<color=#37FFFF>Paimon:</color> By this point, the audience is starving, so they end the fight and agree to a round two some other time.\\n<color=#37FFFF>Paimon:</color> But round two comes and goes, and there's still no clear winner. This time, the fight only ends because the Yumkasaur makes an illegal surprise attack and injures the Tatankasaur.\\n<color=#37FFFF>Paimon:</color> ...Before long, we've ended up with \"Tatanka vs. Yumka,\" \"Tatanka vs. Yumka 2,\" \"Tatanka vs. Yumka: Return of the Sacred Scales,\" \"Tatanka vs. Yumka: Over the Volcano\"... and the sequels show no signs of stopping.\\n<color=#37FFFF>Paimon:</color> ...Wait, we should totally get those made into a film series! We'd make a ton of Mora.\\n<color=#37FFFF>{NICKNAME}:</color> Not a bad idea... Although, I don't think the Scions of the Canopy would be too happy about you making their Saurian the villain!\\n<color=#37FFFF>Paimon:</color> Alright, well you pitch an idea then, if you're such a film critic!",
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
      audio: '71099',
      text: "#<color=#37FFFF>Paimon:</color> The Natlanese don't seem to leave Natlan much, do they?\\n<color=#37FFFF>{NICKNAME}:</color> Nope, and there are some good reasons for that.\\n<color=#37FFFF>Paimon:</color> Hmm... That must make things pretty difficult for anyone who wants to be an adventurer, huh?\\n<color=#37FFFF>Paimon:</color> Think about it — if they can't go to other nations, they miss out on a ton of potential commissions. If they can't go exploring unknown ruins, surely they can't make a whole lot of Mora... It's too bad.\\n<color=#37FFFF>{NICKNAME}:</color> You'd think so, wouldn't you? But in fact, they've found ways around it.\\n<color=#37FFFF>Paimon:</color> Huh?\\n<color=#37FFFF>{NICKNAME}:</color> I've heard of a group in the People of the Springs who call themselves \"wayfinders.\" They have a wealth of knowledge about Natlan's geography and ancient ruins, so a lot of foreign adventurers hire them as guides when they visit.\\n<color=#37FFFF>{NICKNAME}:</color> Of course, that means they get paid for each trip, regardless of whether their client actually finds the treasure. So in the long run, they might actually earn more than a traditional adventurer would.\\n<color=#37FFFF>Paimon:</color> Wow, okay... But wait — if they know so much about Natlan's ancient ruins, why don't they just go find the treasure themselves?\\n<color=#37FFFF>{NICKNAME}:</color> Well, here's the thing... What if there never was any treasure to begin with?\\n<color=#37FFFF>Paimon:</color> Whoa... Okay, Paimon's gonna need a minute to let that sink in...",
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
      audio: '71100',
      text: '#<color=#37FFFF>Paimon:</color> The Natlanese seem to do a lot of doodling everywhere. Except they don\'t call it "doodling," do they? They call it, uh... flow-something?\\n<color=#37FFFF>{NICKNAME}:</color> "Phlogiston engraving." But strictly speaking, that refers to the engraving of special stone tablets. What you\'re talking about is just regular graffiti.\\n<color=#37FFFF>{NICKNAME}:</color> Take this one, for example. It basically just says, "You\'re in Nanatzcayan territory now! Children of Echoes for the win!"\\n<color=#37FFFF>Paimon:</color> That\'s pretty fun! Now Paimon wants in. Shall we do some graffiti of our own?\\n<color=#37FFFF>{NICKNAME}:</color> We sure can. But what do you think we should draw?\\n<color=#37FFFF>Paimon:</color> Well that\'s easy — a portrait of the best travel guide in all of Teyvat! Now let\'s see... Ah, there! Put it right there on that cliff face.\\n<color=#37FFFF>{NICKNAME}:</color> So you want me to do the honors, huh? Alright then, lemme think about this... Yep, first we need to capture that classic Paimon facial expression: seething with rage...\\n<color=#37FFFF>Paimon:</color> Mhm-hmm— Wait, what!? Grr... You know what, forget it! Paimon has decided to find a professional Natlanese graffiti artist instead!',
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '209': {
      title: 'About Saurian Companions...',
      audio: '71101',
      text: "#<color=#37FFFF>{NICKNAME}:</color> The Natlanese seem to have a genuinely close relationship with their saurians.\\n<color=#37FFFF>Paimon:</color> Yeah! They're true companions, just like us. Inseparable wherever they go!\\n<color=#37FFFF>{NICKNAME}:</color> So... let's say there was a competition between you and the saurians. Who do you think would win the title of champion companion?\\n<color=#37FFFF>Paimon:</color> Huh? What sort of a question is that!?\\n<color=#37FFFF>{NICKNAME}:</color> I mean, the more I think about it, it's like... You can't burrow into the ground like the tepetlisaurs, and you don't fly as fast as the qucusaurs...\\n<color=#37FFFF>Paimon:</color> H—Hey! Y—You're thinking about this all wrong! For starters, Paimon flies way faster than any tepetlisaur, and she's better than the qucusaurs at, uh... at picking out the tastiest Chicken-Mushroom Skewer from the grill!\\n<color=#37FFFF>{NICKNAME}:</color> And most importantly of all, Paimon has been at my side longer than any saurian.\\n<color=#37FFFF>Paimon:</color> Exactly! Let's not forget who's the best travel guide in all of Teyvat, hehe!\\n<color=#37FFFF>{NICKNAME}:</color> Alright, my trusty companion, shall we set off on our next adventure?\\n<color=#37FFFF>Paimon:</color> Um, actually, now that Paimon's mentioned it, she feels like her Chicken-Mushroom-Skewer-picking-out skills have gotten a little rusty... C'mon, you should cook up a few so Paimon can practice!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '210': {
      title: 'About Ajaw...',
      audio: '71102',
      text: "#<color=#37FFFF>Paimon:</color> Paimon's been dying to hear your thoughts about this... What is the deal with Ajaw? And don't say you haven't noticed.\\n<color=#37FFFF>{NICKNAME}:</color> Noticed what?\\n<color=#37FFFF>Paimon:</color> ...! Try everything! He's completely different from every other Saurian! For starters, he can talk — matter of fact, he never shuts up! Also, he's always hovering around Kinich instead of walking on the ground. Oh, and don't get Paimon started on those stupid sunglasses! Why would a Saurian wear sunglasses? It doesn't make any sense!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm...\\n<color=#37FFFF>Paimon:</color> Why are you looking at Paimon like that...?\\n<color=#37FFFF>{NICKNAME}:</color> It's just... You talk a lot too, and you fly, plus... didn't you get yourself a pair of silly-looking glasses in Fontaine?\\n<color=#37FFFF>Paimon:</color> ...That is completely different!\\n<color=#37FFFF>Paimon:</color> But anyway, there's a more glaring issue here... Ajaw is flat as a pancake! He's floating around looking like a little cardboard cutout, and no one in Natlan bats an eyelid! Don't you think that's strange?\\n<color=#37FFFF>{NICKNAME}:</color> It's definitely unusual. Then again, maybe everyone's just used to it by now.\\n<color=#37FFFF>{NICKNAME}:</color> Ultimately, it nobody's business but Ajaw's, so if you want answers, you'd probably have to ask him.\\n<color=#37FFFF>Paimon:</color> But would he even tell us the truth? Paimon gets the feeling he'd just make up a bunch of phony-baloney to get us off his case...\\n<color=#37FFFF>Paimon:</color> *gasp* Or maybe... He'd be like, \"Okay, if you really wanna know... I'll show you!\" And then poof! He'd turn us into cardboard cutouts too!\\n<color=#37FFFF>{NICKNAME}:</color> Heh... Cardboard-cutout Paimon, now that I would love to see, hehehe...\\n<color=#37FFFF>Paimon:</color> Hey... Cut it out! Paimon doesn't wanna be flat as a pancake...",
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
      audio: '71103',
      text: "#<color=#37FFFF>Paimon:</color> Have you noticed the... makeup that Natlanese people wear? Or body paint, or tattoos, or graffiti, or whatever it's called — anyway, it looks really cool!\\n<color=#37FFFF>{NICKNAME}:</color> I have noticed! \"Body paint\" is right, although it's not just any old paint. Apparently, it contains phlogiston.\\n<color=#37FFFF>Paimon:</color> Wow, really?\\n<color=#37FFFF>{NICKNAME}:</color> Yep. If you're interested to try it out, I'm pretty sure they offer a body painting experience specially for tourists — but they just use normal paint for that.\\n<color=#37FFFF>Paimon:</color> Ooh! Well, since we're here... why don't we try it? All part of the experience.\\n<color=#37FFFF>{NICKNAME}:</color> Sure thing. You'll need to pick a color palette and a motif first though. Each tribe has its own style.\\n<color=#37FFFF>Paimon:</color> Alright, Paimon chooses, uh... Paimon chooses... Ugh! They all look so cool! Choosing between them is impossible.\\n<color=#37FFFF>Paimon:</color> Meh, choosing is losing! Paimon will take them all!\\n<color=#37FFFF>{NICKNAME}:</color> Wow... Today I learned that Paimon is a maximalist... Well, I'm sure some people would say \"less is more,\" but I say — you do you, Paimon!\\n<color=#37FFFF>Paimon:</color> What are you talking about!? Paimon never said anything about using them all at once! She just wants options, so she can switch up her style every day!\\n<color=#37FFFF>{NICKNAME}:</color> ...Oh. That's too bad... I woulda loved to see Paimon with an elaborate arm-tattoo...\\n<color=#37FFFF>Paimon:</color> Stop! Nope! Stop it! No imagining Paimon with an arm-tattoo! Not allowed!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '212': {
      title: 'About Living With Saurians...',
      audio: '71104',
      text: "#<color=#37FFFF>Paimon:</color> The people and saurians of Natlan have a great relationship, huh? They live together, fight together, even fly together...\\n<color=#37FFFF>{NICKNAME}:</color> Just like us, right? Except you're too small to take me flying... It's just a shame you can't grow any bigger. Not for want of trying, of course — you do eat a lot of Chicken-Mushroom Skewers...\\n<color=#37FFFF>Paimon:</color> Hmph... Let's not forget that saurians can't be your guide. Or your conversation partner.\\n<color=#37FFFF>{NICKNAME}:</color> It's strange to think that there was once a time when humans and saurians were enemies. And now they co-exist peacefully. Must've taken a lot of work to get to where things are today.\\n<color=#37FFFF>Paimon:</color> If Paimon was a saurian, all it would have taken is some tasty food.\\n<color=#37FFFF>{NICKNAME}:</color> You say that, but... what if you demanded a hundred chicken skewers per day, and the humans couldn't provide that much?\\n<color=#37FFFF>Paimon:</color> Umm... Paimon could probably settle for fifty a day...\\n<color=#37FFFF>{NICKNAME}:</color> Or even better — maybe the humans could team up with you and you could go hunting together. Then there'd be enough meat for everyone to eat their fill!\\n<color=#37FFFF>Paimon:</color> Uh-huh! Peace between species all starts with a full stomach!",
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
      audio: '71105',
      text: "#<color=#37FFFF>Paimon:</color> That volcano is so huge, you can see it from anywhere in Natlan... Where do you think all that magma comes from, though?\\n<color=#37FFFF>{NICKNAME}:</color> One legend holds that an enormous Pyro Dragon slumbers in the deepest depths of Natlan. Within the dragon's body dwells the world's first flame, burning eternally, and causing boils to form on the dragon's back. Every once in a while, these boils spew out fire, which takes the form of magma when it comes above ground.\\n<color=#37FFFF>Paimon:</color> For real!? But... what happens if the dragon ever wakes up? Natlan will be doomed!\\n<color=#37FFFF>{NICKNAME}:</color> Yep, and that's why the Pyro Archon gets the tribes to periodically join forces and go pacify the dragon, to make sure it stays asleep.\\n<color=#37FFFF>Paimon：</color> ...Wait, what? No, that's to fight the Abyss! Isn't it?\\n<color=#37FFFF>{NICKNAME}：</color> ...Well, not if this story from a woven scroll I bought on the street is to be believed.\\n<color=#37FFFF>Paimon:</color> Ugh, Paimon knew it!",
      tips: 'Unlock the Statue of The Seven (Pyro) at Tequemecan Valley in Natlan',
      tasks: null,
    },
    '214': {
      title: 'About the Curse of the Night...',
      audio: '71106',
      text: "#<color=#37FFFF>Paimon</color>: There once was a great knight who was cursed to spend the daylight hours looking like a shabby old drunkard.\\n<color=#37FFFF>Paimon</color>: Only in the dead of night would he return to his true form: a mature, brave, and self-respecting knight.\\n<color=#37FFFF>{NICKNAME}</color>: Is there a way to lift the curse?\\n<color=#37FFFF>Paimon</color>: Only if someone is willing to show genuine, heartfelt respect to the knight.\\n<color=#37FFFF>{NICKNAME}</color>: Alright, I can do that. Let the curse be lifted!\\n<color=#37FFFF>Paimon</color>: Ta-da! The curse has been lifted. Now, Grand Master Varka can choose for himself whether to be an old drunk or a respected knight.\\n<color=#37FFFF>Paimon</color>: And then he said, \"I'm sorry, but I've been a shabby old drunk all along.\" So now he's a shabby old drunk both day and night.\\n<color=#37FFFF>{NICKNAME}</color>: Wait, that's terrible!\\n<color=#37FFFF>Paimon</color>: There's a different version of the story in Natlan that goes like this: There once was a young girl cursed to become a snobby, stuck-up old lady during the day, only turning back into an innocent girl during the night.\\n<color=#37FFFF>Paimon</color>: And, um... the only way to lift the curse was, uhh... having conversations about topics she liked.\\n<color=#37FFFF>{NICKNAME}</color>: Well, I can already guess where this is going. If this was Madam Faruzan, then once the curse gets lifted, she'd probably say something like, \"Hmph, and what's wrong with being old? Do you have a problem with that, young lady?\"\\n<color=#37FFFF>Paimon</color>: Right! And if it was Citlali...\\n<color=#37FFFF>{NICKNAME}</color>: She'd get all anxious and pouty, and say, \"But... but I've been an innocent young girl all along...\"\\n<color=#37FFFF>Paimon</color>: ...There's no actual curse in either of these stories, is there?",
      tips: 'Complete "The Rainbow Destined to Burn"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5014,
              chapterId: 1503,
              chapterTitle: 'The Rainbow Destined to Burn',
            },
          ],
        },
      ],
    },
    '215': {
      title: 'About Spiritways...',
      audio: '71107',
      text: "#<color=#37FFFF>Paimon</color>: Five hundred... One thousand... One thousand two hundred...\\n<color=#37FFFF>{NICKNAME}</color>: What are you up to, Paimon?\\n<color=#37FFFF>Paimon</color>: Aaah! ...Sorry, you made Paimon jump...\\n<color=#37FFFF>Paimon</color>: Hehe, Paimon was counting her Mora. She's been saving up a lot lately! In a few days time, she'll finally have enough to go buy a surfboard from the People of the Springs!\\n<color=#37FFFF>Paimon</color>: Then, Paimon can zip and zoom along the Spiritways, just like Mualani!\\n<color=#37FFFF>{NICKNAME}</color>: ...Spiritway surfing? You?\\n<color=#37FFFF>Paimon</color>: Well, yeah... You don't sound very happy about it, what's wrong?\\n<color=#37FFFF>{NICKNAME}</color>: I'm gonna miss you, that's all. I've enjoyed traveling with you... So many happy memories.\\n<color=#37FFFF>Paimon</color>: Wait, what!? Stop making it sound like Paimon won't survive!\\n<color=#37FFFF>Paimon</color>: Paimon's thought this through, y'know. Even if she falls off, it'll be fine — 'cause Paimon can fly!\\n<color=#37FFFF>Paimon</color>: Mualani definitely has it harder in that sense... How does she even do it? The Spiritways get so steep and go so high, but she makes it look really easy.\\n<color=#37FFFF>{NICKNAME}</color>: I don't think Mualani finds it hard at all, actually. You can tell by the big smile she has on her face even while performing highly complex maneuvers.\\n<color=#37FFFF>Paimon</color>: Wait, so it's not hard, and Paimon's just... useless? ...That's worse!",
      tips: 'Unlock the "People of the Springs" Teleport Waypoint in Natlan',
      tasks: null,
    },
    '216': {
      title: 'About the Pyro Archon...',
      audio: '71108',
      text: "#<color=#37FFFF>Paimon</color>: So it turns out they use the Pilgrimage to select the Pyro Archon!\\n<color=#37FFFF>Paimon</color>: If Paimon was allowed to compete, maybe even she'd have a shot at becoming the Pyro Archon.\\n<color=#37FFFF>{NICKNAME}</color>: Heh... That's the spirit, Paimon.\\n<color=#37FFFF>Paimon</color>: Hey now, don't you underestimate Paimon! After all the gods we've come face-to-face with, you'd better believe Paimon's picked up a few of their signature moves!\\n<color=#37FFFF>{NICKNAME}</color>: ...Like what?\\n<color=#37FFFF>Paimon</color>: Like... A Buoyant Breeze, Slow-Cooked Bamboo Shoot Soup, Halvamazd, Pour la Justice...\\n<color=#37FFFF>{NICKNAME}</color>: Ohh... you mean their signature dishes.\\n<color=#37FFFF>Paimon</color>: Exactly! They should totally add a cook-off stage to the Pilgrimage! Once everything's settled down in Natlan, of course.\\n<color=#37FFFF>Paimon</color>: Paimon can't wait to get a taste of the Pyro Archon's cooking!",
      tips: 'Complete "The Rainbow Destined to Burn"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 5014,
              chapterId: 1503,
              chapterTitle: 'The Rainbow Destined to Burn',
            },
          ],
        },
      ],
    },
    '217': {
      title: 'About Taking a Break...',
      audio: '71109',
      text: "#<color=#37FFFF>Paimon</color>: You know who we haven't seen in a while? Xilonen. Last time we saw her, she was lying down in a tree fast asleep.\\n<color=#37FFFF>{NICKNAME}</color>: And the time before that, she was sunbathing on the roof wearing sunglasses.\\n<color=#37FFFF>Paimon</color>: And the time before that, she was chilling in her home-made rocking chair, sipping fruit juice...\\n<color=#37FFFF>Paimon</color>: That's weird, how come our only memories of Xilonen are of her taking a break?\\n<color=#37FFFF>{NICKNAME}</color>: Hmm... It could be that those memories only stand out because they're so unusual. Maybe she's such a hard worker that she doesn't take breaks very often.\\n<color=#37FFFF>Paimon</color>: You think? Huh. Well, speaking of hard workers, Paimon's been finding herself in that category quite a lot recently.\\n<color=#37FFFF>Paimon</color>: Like when we were chasing down that baby Tepetlisaur. Paimon had to fly up pretty darn high to show you the way.\\n<color=#37FFFF>Paimon</color>: And also the time when we went Cacahuatl-picking, and helped that messenger from the Scions of the Canopy look for their package... Whew, if anything, Paimon's been working TOO hard.\\n<color=#37FFFF>Paimon</color>: Hmph, Paimon's gonna be doing a lot more slacking off during our commissions from now on. But secretly, so you won't notice!\\n<color=#37FFFF>{NICKNAME}</color>: You slack off all you need, Paimon. I'll make sure I don't notice.\\n<color=#37FFFF>Paimon</color>: Aww, that's so nice of you! In that case... whenever you're slacking off, Paimon will make sure not to notice you, either!\\n<color=#37FFFF>Paimon</color>: Although actually... It might be easier if we just slacked off together...\\n<color=#37FFFF>Paimon</color>: Alright, new plan! We'll slack off at the same time, but without watching each other. C'mon, let's go, it's sunbathing time!",
      tips: 'Complete "A Prayer for Blessings, Told to Crested Peaks"',
      tasks: [
        {
          type: 'finishMainQuest',
          questList: [
            {
              id: 15016,
              chapterId: 2060,
              chapterTitle: 'Melodious Chant',
            },
          ],
        },
      ],
    },
    '218': {
      title: 'About the Frostmoon Scions',
      audio: '71110',
      text: '#<color=#37FFFF>Paimon:</color> Paimon heard that the Frostmoon Scions worship the moon. So, what do you think they get up to during the daytime?\\n<color=#37FFFF>{NICKNAME}:</color> Uhh... just go about their normal lives, I guess?\\n<color=#37FFFF>Paimon:</color> No way, not if they\'re up all night worshiping! Paimon bets they have a really unusual daily routine.\\n<color=#37FFFF>{NICKNAME}:</color> Unusual how?\\n<color=#37FFFF>Paimon:</color> Like, uh... When the sun comes up, they probably shapeshift into huge boulders and take a nice long nap.\\n<color=#37FFFF>Paimon:</color> When night falls, they wake back up again — and with a swish and a swoosh, they\'re back in human form! Then, they sneak away to start getting up to their secret, mysterious work...\\n<color=#37FFFF>{NICKNAME}:</color> So let me guess — the worst-case scenario for them is blowing through nap time and doing an all-day and all-nighter?\\n<color=#37FFFF>Paimon:</color> Yeah, exactly! See, you got it!\\n<color=#37FFFF>{NICKNAME}:</color> Yeah, I got it... You\'re getting mixed up between "Scion" and "Sayu" again.',
      tips: "Unlock the Statue of the New Moon on Nod Krai's Lempo Isle",
      tasks: null,
    },
    '219': {
      title: 'About People With Antlers',
      audio: '71111',
      text: "#<color=#37FFFF>Paimon:</color> You know how some people from the Frostmoon Scions have antlers on their heads?\\n<color=#37FFFF>Paimon:</color> In Paimon's view, that's a good sign. 'Cause if you think about it, over the years, everyone else we've met with horns or antlers has turned out to be a total legend!\\n<color=#37FFFF>{NICKNAME}:</color> Yeah, you're right... From the bull warrior of the Collective of Plenty to the Oni King of Hanamizaka, they all share one thing in common...\\n<color=#37FFFF>Paimon:</color> Which is?\\n<color=#37FFFF>{NICKNAME}:</color> You'd better get out of the way, before they... STAMPEEEEDE!\\n<color=#37FFFF>Paimon:</color> Whoooa, yeah! So, do you think that if Lauma ever got really mad, she'd...\\n<color=#37FFFF>Paimon:</color> ...Wait, no, that's ridiculous. Paimon can't picture that happening, like... ever.\\n<color=#37FFFF>{NICKNAME}:</color> Me neither. But at the same time, I can't get the image out of my head...\\n<color=#37FFFF>Paimon:</color> ...Okay, well now Paimon's imagining it too...\\n<color=#37FFFF>Paimon:</color> Ugh, what even is this conversation? Clearly, this is what happens when Paimon goes hungry. We need snacks, pronto!",
      tips: 'Complete "Elegy of Dust and Lamplight"',
      tasks: null,
    },
    '220': {
      title: 'About the Whiz-Kid Mechanic',
      audio: '71112',
      text: "#<color=#37FFFF>Paimon:</color> Aino definitely lives up to her reputation as a whiz-kid mechanic. Everything she builds is so... creative.\\n<color=#37FFFF>Paimon:</color> She uses unlikely materials and slightly wacky designs, but all her inventions work even better than expected!\\n<color=#37FFFF>{NICKNAME}:</color> Which invention have you fallen in love with now, Paimon?\\n<color=#37FFFF>Paimon:</color> The cleaner bot's pretty cool!\\n<color=#37FFFF>Paimon:</color> We should get her to build one for us. It would be really handy to have in the Serenitea Pot!\\n<color=#37FFFF>{NICKNAME}:</color> Really, just the cleaner bot?\\n<color=#37FFFF>Paimon:</color> Hmm, you're right! We might as well make the most of Aino's talents. Let's get a dish-washer bot, a tidy-up bot, a gardener, and one to feed the pets...\\n<color=#37FFFF>Paimon:</color> While we're at it, it'd be great to get a chat bot, too. That way, Tubby will have someone to talk to when we're not around.\\n<color=#37FFFF>{NICKNAME}:</color> Good idea. Anything else to add?\\n<color=#37FFFF>Paimon:</color> Let's see... We could get a cooking bot? Something like the supreme cuisine machine, y'know? It'd be nice to have the option, but of course, there's no substitute for your home cooking, hehe.\\n<color=#37FFFF>Paimon:</color> Although, all these robots everywhere would take up a lot of space... Maybe it'd be better if we got Aino to combine them all into a single machine!\\n<color=#37FFFF>{NICKNAME}:</color> So basically, you want a multifunctional robot for domestic application... Better known as Ineffa.\\n<color=#37FFFF>Paimon:</color> Huh? Wait, you're right... Ineffa can do all of that stuff...\\n<color=#37FFFF>{NICKNAME}:</color> All that, and far more.\\n<color=#37FFFF>{NICKNAME}:</color> She even makes a pretty good travel guide...\\n<color=#37FFFF>Paimon:</color> Uhh... You're not seriously thinking of giving Paimon's job to someone else, are you!?\\n<color=#37FFFF>Paimon:</color> No, no, no, that could never work! There's only one Ineffa, and she has to take care of Aino. We can't separate them!\\n<color=#37FFFF>Paimon:</color> Don't get Paimon wrong, Ineffa's great, but, but... being a housekeeper in the Serenitea Pot would be too easy for her, don't you think? It'd be a real shame for all that talent to go to waste.\\n<color=#37FFFF>{NICKNAME}:</color> Okay, okay... Paimon is the best guide I could ever hope for, and no one's ever gonna separate us.\\n<color=#37FFFF>Paimon:</color> Hmph. That's more like it.",
      tips: 'Complete "Elegy of Dust and Lamplight"',
      tasks: null,
    },
    '221': {
      title: 'About the Boss of the Curatorium of Secrets',
      audio: '71113',
      text: "#<color=#37FFFF>Paimon:</color> The boss of the Curatorium of Secrets, huh? Now there's a conundrum...\\n<color=#37FFFF>{NICKNAME}:</color> Yeah... Nefer does seem pretty mysterious.\\n<color=#37FFFF>Paimon:</color> That's true, but what Paimon really meant was... Don't you think it's possible that the real boss is actually... Ashru the cat?\\n<color=#37FFFF>{NICKNAME}:</color> Huh? What are you basing that theory on?\\n<color=#37FFFF>Paimon:</color> Well, 'cause it's like how the boss of Komore Teahouse is Taroumaru!\\n<color=#37FFFF>Paimon:</color> And if so... Hehe, maybe Ashru has some treasure hidden behind the counter, too!\\n<color=#37FFFF>{NICKNAME}: </color>Ahh, treasure. So that's what this is about. But what does secret treasure have to do with whether Ashru is the boss or not?\\n<color=#37FFFF>Paimon:</color> Simple! The boss usually earns the most out of all the employees, so the boss's treasure is bound to be the most valuable of them all!\\n<color=#37FFFF>{NICKNAME}:</color> Heh, there's always \"value\" in Paimon's insights.\\n<color=#37FFFF>{NICKNAME}: </color>But I'm afraid to say that all the available intel points to Nefer being the real boss. So why don't you just go ask her what treasure she has?\\n<color=#37FFFF>Paimon:</color> What? No way, not a chance! ...Ugh, never mind, then.\\n<color=#37FFFF>{NICKNAME}:</color> Hmm? Why the sudden change of heart?\\n<color=#37FFFF>Paimon:</color> Well, obviously 'cause...\\n<color=#37FFFF>Paimon:</color> ...Paimon's too scared.\\n<color=#37FFFF>Paimon:</color> Paimon gets so nervous around her. When Nefer looks you in the eyes, it feels like she's gazing right into your soul... Paimon's gut tells her that she's one of those people you should never, ever get on the wrong side of...\\n<color=#37FFFF>{NICKNAME}:</color> I'm with you there. We should play it safe... Let's go back to plan A, and see if we can figure out where Ashru's treasure is hidden.\\n<color=#37FFFF>Paimon:</color> Aha! So YOU were after Ashru's treasure this whole time, too!",
      tips: 'Complete "Elegy of Dust and Lamplight"',
      tasks: null,
    },
    '222': {
      title: 'About the Treasure Hoarders',
      audio: '71114',
      text: "#<color=#37FFFF>Paimon:</color> Paimon heard that Nod-Krai is where the Treasure Hoarders were first founded. Hmph, it's just a fancy name for a bunch of common thieves!\\n<color=#37FFFF>Paimon:</color> If Paimon ever found their headquarters, she'd bust in there and give 'em what for! Y'know, in the name of justice, and all that!\\n<color=#37FFFF>{NICKNAME}:</color> Oh yeah? And what kind of justice would crime-buster Paimon be dishing out?\\n<color=#37FFFF>Paimon:</color> Hehe, poetic justice, of course! Paimon read somewhere that that means giving the bad guys a taste of their own medicine.\\n<color=#37FFFF>Paimon:</color> So Paimon would track down every bit of treasure they're hoarding at their base, and steal it all! See how THEY like having their treasure taken from them!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... Then lemme ask you this — if you stole all their treasure, wouldn't that just make you another treasure hoarder in their eyes?\\n<color=#37FFFF>Paimon:</color> Uh... Maybe? Yeah, kinda...\\n<color=#37FFFF>{NICKNAME}:</color> Oh dear... I'm sorry to say that makes you no better than a common thief, Paimon. And for the sake of justice, I would feel compelled to punish this heinous crime by seizing your secret stash of treasure myself! Hooray for {NICKNAME}, putting the world to rights once again!\\n<color=#37FFFF>Paimon:</color> Hey! That isn't justice, that's plain old justifying!",
      tips: "Unlock the Statue of the New Moon on Nod Krai's Lempo Isle",
      tasks: null,
    },
    '223': {
      title: 'Tell me about the Conch Gang...',
      audio: '71115',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Did you know that the first group to conquer Nasha Town was the Conch Gang? Or so the story goes.\\n<color=#37FFFF>Paimon:</color> The Conch Gang? You mean, that gang where they're all kids?\\n<color=#37FFFF>{NICKNAME}:</color> That's right. In fact, they only accept children as members, and after you get to a certain age, they kick you out. That's their gang tradition — it's been that way from the very beginning.\\n<color=#37FFFF>Paimon:</color> Wait, so you're saying that a bunch of kids took over Nasha Town!? What a funny thought... They must've been some pretty tough kids! Did they have superpowers or something?\\n<color=#37FFFF>{NICKNAME}:</color> Umm... I don't think so. At least, the story I heard didn't mention anything about that.\\n<color=#37FFFF>Paimon:</color> Then how the heck did a bunch of kids conquer a whole town in Nod-Krai?\\n<color=#37FFFF>{NICKNAME}:</color> I guess they just hung out and played games in what's now the market square. There probably weren't any shops in Nasha Town back then.\\n<color=#37FFFF>Paimon:</color> That doesn't sound much like \"conquering\"...\\n<color=#37FFFF>{NICKNAME}:</color> Before long, the grown-ups took a liking to the place... Slowly but surely, the children's Elysium was engulfed by the adult world...\\n<color=#37FFFF>Paimon:</color> Couldn't they just... find somewhere else to play?\\n<color=#37FFFF>{NICKNAME}:</color> That's easier said than done... I mean, imagine if one day, you suddenly found that your favorite nap spot in the whole garden had been taken over by hilichurls.\\n<color=#37FFFF>{NICKNAME}:</color> Once a cozy patch of lawn, now a camp full of rowdy hilichurls who throw pebbles at you to keep you away... You'd never be able to nap in your favorite spot, ever again...\\n<color=#37FFFF>Paimon:</color> Nooo! That's terrible! Paimon was there first! Stupid hilichurls... Oh, and stupid grown-ups!\\n<color=#37FFFF>Paimon:</color> So... what happened after that? Did the Conch Gang fight back?\\n<color=#37FFFF>{NICKNAME}:</color> I'm not too sure. It's possible that they tried, but... I suspect that when the kids in the gang grew up, they had to make a living somehow, so they ended up turning into the same adults that they once saw as their enemies.\\n<color=#37FFFF>Paimon:</color> Oh... Well that took a depressing turn...\\n<color=#37FFFF>{NICKNAME}:</color> To be honest, it's probably not a true story. The Conch Gang of today, on the other hand — they seem to be doing great. They have a lot of members and some pretty good benefits.\\n<color=#37FFFF>Paimon:</color> Ooh, benefits? Hehe, can Paimon join?\\n<color=#37FFFF>{NICKNAME}:</color> Oh, I'm sure you'd have no problem getting in! And if you don't like it, I heard that you can leave at any time.\\n<color=#37FFFF>Paimon:</color> Not a \"homies for life\" type of gang, then...\\n<color=#37FFFF>{NICKNAME}:</color> You know, I think it would suit you.\\n<color=#37FFFF>{NICKNAME}:</color> Adults are so set in their ways, whereas children are lovable little people who are free to be themselves... just like you, Paimon.",
      tips: "Unlock the Statue of the New Moon on Nod Krai's Lempo Isle",
      tasks: null,
    },
    '224': {
      title: 'About the Nasha Express',
      audio: '71116',
      text: "#<color=#37FFFF>{NICKNAME}:</color> I've got the latest issue of the Nasha Express here. Let's see what's in it...\\n<color=#37FFFF>Paimon:</color> Ooh, Nod-Krai has a newspaper too? Well, what does it say? Is it full of juicy stories like The Steambird?\\n<color=#37FFFF>Paimon:</color> Hehe, Nod-Krai's pretty chaotic compared to Fontaine. The news here must be crazy!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm...\\n<color=#37FFFF>Paimon:</color> Don't worry, even if it's heavy going, Paimon can handle it! Paimon wouldn't be surprised if it's nothing but crime from cover to cover.\\n<color=#37FFFF>{NICKNAME}:</color> Oh...\\n<color=#37FFFF>Paimon:</color> ...Of course, if there's any super creepy, nightmare-fuel-type stories... maybe don't tell Paimon those.\\n<color=#37FFFF>Paimon:</color> ...What is it? Why aren't you saying anything? It's not... it's not ALL super creepy nightmare fuel, is it!?\\n<color=#37FFFF>{NICKNAME}:</color> No, there's no nightmare fuel. It's not so much \"creepy\"... it's just plain weird.\\n<color=#37FFFF>{NICKNAME}:</color> For example: \"The Flagship is seeking a new bartender. Must have cocktail-mixing experience. Salary negotiable. Preference for candidates who are patient, hard of hearing, and good at taking notes.\"\\n<color=#37FFFF>{NICKNAME}:</color> \"Mimisbrunnr Books is holding a clearance sale. Many old titles for sale by the kilogram at bargain prices. Browse first at no charge. Please note: Established authors, budding authors, or any other type of authors should not use this as an opportunity to advertise your work, or you may find your stock being sold off dirt cheap by the kilogram too.\"\\n<color=#37FFFF>{NICKNAME}:</color> \"New flower seeds now available at Vesnici Proleca Greenhouse. Each purchase comes with a full suite of essentials to keep your plant in tip-top condition: 1 can of engine oil, 1 bag of rust, and 1 pair of cut-resistant gloves. Limited stock available on a first-come, first-served basis.\"\\n<color=#37FFFF>Paimon:</color> What kind of flower needs oil and rust!?\\n<color=#37FFFF>Paimon:</color> Aren't newspapers supposed to report the news? This just seems like a classifieds section gone mad.\\n<color=#37FFFF>{NICKNAME}:</color> Pretty fun though, right? A little window into daily life in Nod-Krai.\\n<color=#37FFFF>Paimon:</color> All that says to Paimon is that the people here live very strange and very confusing lives...\\n<color=#37FFFF>{NICKNAME}:</color> Well... What is life if not the thread between events that offers some semblance of order amidst chaos? The through-line that we cling to in an effort to traverse the maze that is the cosmos?\\n<color=#37FFFF>Paimon:</color> Honestly, whatever you just said went completely over Paimon's head. Let's stick with the newspaper for now. Any other interesting ads?\\n<color=#37FFFF>{NICKNAME}:</color> Umm... Ah, here we go! There's some good news and some bad news — which do you want to hear first?\\n<color=#37FFFF>Paimon:</color> Uhh... The good news?\\n<color=#37FFFF>{NICKNAME}:</color> \"Seeking game-testers for a paid position. Flat rate per session. Perks include free lunch, free dinner, and a small gift at the end of each session.\"\\n<color=#37FFFF>Paimon:</color> That sounds pretty cool! Hehe, we should definitely check that out! Let's apply quick before someone else gets it!\\n<color=#37FFFF>{NICKNAME}:</color> First things first, Paimon — the bad news. Which also happens to be related to the game-tester position.\\n<color=#37FFFF>Paimon:</color> What is it? *sigh* Did they fill all the positions already?\\n<color=#37FFFF>{NICKNAME}:</color> The ad was posted by a researcher from the Fontaine Research Institute by the name of... Liouba.\\n<color=#37FFFF>Paimon:</color> Okay, time to throw that paper away, {NICKNAME}. Let's head to Vesnici Proleca Greenhouse and check out this flower that you're apparently supposed to oil instead of water.",
      tips: "Unlock the Statue of the New Moon on Nod Krai's Lempo Isle",
      tasks: null,
    },
    '225': {
      title: 'About Memories of Mondstadt',
      audio: '71117',
      text: "#<color=#37FFFF>Paimon:</color> Nod-Krai seems like a pretty complicated place. There are tons of people from all over Teyvat here.\\n<color=#37FFFF>Paimon:</color> We've seen people from Liyue, Fontaine, Sumeru, Inazuma... Even Natlan!\\n<color=#37FFFF>Paimon:</color> Wait... Hey, how come we've hardly seen any merchants from Mondstadt here? That doesn't seem right.\\n<color=#37FFFF>Paimon:</color> Mondstadt's the wine capital of the world, right? You'd think someone would be making a killing off of that out here.\\n<color=#37FFFF>{NICKNAME}:</color> Maybe Mondstadt wine isn't really designed for exporting. Most of it's brewed and enjoyed locally. It might lose its flavor when transported long distances.\\n<color=#37FFFF>{NICKNAME}:</color> And even if someone managed to solve that problem, the cost of shipping it all this way would mean they'd have to increase the price, which would make it harder to sell... Maybe it's simply too difficult to turn a profit.\\n<color=#37FFFF>Paimon:</color> You think? Hehe... Paimon's theory was that Mondstadters drink so much, there's none left to export.\\n<color=#37FFFF>{NICKNAME}:</color> Um... That could be part of the reason, for sure. They can't get enough of their wine, can they?\\n<color=#37FFFF>Paimon:</color> Hey, the next time we go back to Mondstadt, we should bring some Nod-Krai liquor with us.\\n<color=#37FFFF>Paimon:</color> Yeah... the strongest one, and then get Charles to trick Kaeya into drinking it by masking the flavor with some other drink.\\n<color=#37FFFF>Paimon:</color> While we're at it, we should get gifts for other people too. A ragdoll for Klee, and how about a little robot for Sucrose? Might come in handy with her research!\\n<color=#37FFFF>Paimon:</color> Oh yeah — and remember those red goggles we saw that time? Maybe a pair of those for Amber?\\n<color=#37FFFF>Paimon:</color> You know what — let's go souvenir shopping right now! There's a bunch of other cool gifts Paimon's thinking of getting too... She won't spend all our Mora, promise!",
      tips: "Unlock the Statue of the New Moon on Nod Krai's Lempo Isle",
      tasks: null,
    },
    '226': {
      title: 'About the Art of the Con',
      audio: '71118',
      text: "#<color=#37FFFF>{NICKNAME}:</color> Let me tell you a story about one of the craziest con games in Nod-Krai's history.\\n<color=#37FFFF>{NICKNAME}:</color> There once was a thief and a conman who heard that a traveling merchant had just arrived in town. This merchant was said to be extremely wealthy and a big spender — meaning he'd brought a huge stash of valuables and Mora with him. And so, the thief and the conman decided to team up to try and steal the merchant's wealth.\\n<color=#37FFFF>Paimon:</color> Uh-oh. How far did they get?\\n<color=#37FFFF>{NICKNAME}:</color> After working to gain the merchant's trust, the conman invited the merchant out to a big dinner party one evening. The plan was to get him away from his shop for long enough for the thief to break in and steal all the treasure... And it went off without a hitch.\\n<color=#37FFFF>Paimon:</color> ...Aw, poor merchant.\\n<color=#37FFFF>{NICKNAME}:</color> But the story doesn't end there. The con artist wanted all the loot for himself. He turned on the thief, threatened him into handing everything over, and then sold him out. The thief took the fall and wound up in jail.\\n<color=#37FFFF>Paimon:</color> Huh. Behind every crook is an even crooked-er crook. So in the end, the conman conned both the merchant and the thief... and by the sounds of it, he got away with it too? Ugh...\\n<color=#37FFFF>{NICKNAME}:</color> Now, your typical crime story would probably end there. But not this one...\\n<color=#37FFFF>Paimon:</color> There's more?\\n<color=#37FFFF>{NICKNAME}:</color> After the conman finally got his hands on the treasure, he discovered that it was all fake! He started to panic... and then, the merchant comes bursting through the door, demanding that his assets be returned.\\n<color=#37FFFF>Paimon:</color> Wait, but they were fake, right? Why did he want them back?\\n<color=#37FFFF>{NICKNAME}:</color> Obviously, the merchant claimed that everything stolen by the thief was real. So in the end, the conman was forced to return genuine treasure, and not the fake stuff.\\n<color=#37FFFF>Paimon:</color> Ohh... So the merchant was the real conman in that story! Heh, so much for \"poor merchant.\"\\n<color=#37FFFF>{NICKNAME}:</color> True, but if the conman and the thief hadn't given in to their crooked ways, the merchant would never have done anything to them. So the moral of this story is:\\n<color=#37FFFF>Paimon:</color> If you're gonna play the con game, you gotta go big or go home!\\n<color=#37FFFF>{NICKNAME}:</color> ...Actually, it's \"don't give in to your crooked ways\"...",
      tips: "Unlock the Statue of the New Moon on Nod Krai's Lempo Isle",
      tasks: null,
    },
    '227': {
      title: "About Ineffa's On-Off Switch",
      audio: '71119',
      text: "#<color=#37FFFF>Paimon:</color> So, you know how Ineffa's a robot?\\n<color=#37FFFF>Paimon:</color> Paimon's been wondering... Do you think she has an on-off switch?\\n<color=#37FFFF>{NICKNAME}:</color> I've never seen it, but... probably, I guess?\\n<color=#37FFFF>Paimon:</color> Wow... Paimon's sooo jealous.\\n<color=#37FFFF>{NICKNAME}:</color> Why?\\n<color=#37FFFF>Paimon:</color> Well, think about it. Ineffa goes to wake Aino up in the morning, but Aino wants to sleep in. All Aino has to do is...\\n<color=#37FFFF>{NICKNAME}:</color> ...Flip Ineffa's off switch so she powers down?\\n<color=#37FFFF>Paimon:</color> Exactly!\\n<color=#37FFFF>Paimon:</color> {NICKNAME}, {NICKNAME}, Paimon's bestest buddy in the whole wide world! Can you get Aino to make you an on-off switch too?\\n<color=#37FFFF>{NICKNAME}:</color> Sure!\\n<color=#37FFFF>Paimon:</color> Huh? You're just gonna say yes without even asking why?\\n<color=#37FFFF>{NICKNAME}:</color> I think I already know why. You want to flip my off switch when you feel like sleeping in!\\n<color=#37FFFF>Paimon:</color> What!? You saw right through Paimon's plan...\\n<color=#37FFFF>{NICKNAME}:</color> The thing is, after all the spare parts I've thrown her way, I've pretty much got Aino in my pocket...\\n<color=#37FFFF>{NICKNAME}:</color> So although it would look like an off switch, it would actually activate my emergency mode. And then I'd... suddenly spring into action and start tickling you mercilessly! Protest all you want, Paimon — the tickling cannot be stopped!\\n<color=#37FFFF>Paimon:</color> No, noooo! We're not getting you an on-off switch, okay? Happy now?",
      tips: 'Complete "Elegy of Dust and Lamplight"',
      tasks: null,
    },
    '228': {
      title: "About Aino's Inventions",
      audio: '71120',
      text: "#<color=#37FFFF>Paimon:</color> Aino's inventions are a real bargain!\\n<color=#37FFFF>{NICKNAME}:</color> That's because she builds them from scrap, which has no value to anyone else.\\n<color=#37FFFF>Paimon:</color> Paimon was thinking, maybe we should get Aino to build us a hoverboard... 'cause then, you'd be able to fly just like Paimon!\\n<color=#37FFFF>Paimon:</color> It would make the rest of your journey way easier. We could just fly the whole way!\\n<color=#37FFFF>{NICKNAME}:</color> Wow, what an amazing idea, Paimon! So, what's your budget?\\n<color=#37FFFF>Paimon:</color> Uh... Paimon only has 500 Mora left after last week... B—But Aino might still be able to find a way, right?\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... That's a pretty tight budget. At this rate, our hoverboard might have to be powered by a potato battery...\\n<color=#37FFFF>Paimon:</color> Mmm... Potato-powered aviation... *drools*\\n<color=#37FFFF>Paimon:</color> ...Wait, hold up, a potato battery? Is that a real thing?",
      tips: 'Complete "Elegy of Dust and Lamplight"',
      tasks: null,
    },
    '229': {
      title: 'About Flattery',
      audio: '71121',
      text: "#<color=#37FFFF>Paimon:</color> Flins gives the best compliments!\\n<color=#37FFFF>Paimon:</color> Paimon could listen to his flattery all day... Ah, that would be the best day ever!\\n<color=#37FFFF>{NICKNAME}:</color> Very true. You're so attentive, Paimon, and you always see the best in people. That's why you have a knack for identifying people's finer qualities.\\n<color=#37FFFF>Paimon:</color> Hee-hee, too right! Attentive Paimon always sees the best in people!\\n<color=#37FFFF>{NICKNAME}:</color> Not to mention the courage and dedication you've shown in keeping me company all this time. You always see things through, even when it's hard work, and you've never abandoned me even when mortal danger is staring us in the face.\\n<color=#37FFFF>Paimon:</color> Aw, shucks, you really mean that?\\n<color=#37FFFF>{NICKNAME}:</color> On top of all that, you're as smart as you are sweet. The idea of traveling without Paimon by my side is too terrible to even contemplate.\\n<color=#37FFFF>Paimon:</color> C'mon, {NICKNAME}, knock it off, y—you're making Paimon blush...\\n<color=#37FFFF>{NICKNAME}:</color> Okay, three compliments in and you're as red as a tomato. Imagine what a full day of compliments from Flins would do to you...\\n<color=#37FFFF>Paimon:</color> Waaah! Whew, thanks, but no thanks!",
      tips: 'Complete "Elegy of Dust and Lamplight"',
      tasks: null,
    },
    '230': {
      title: 'About Sniffer Moles',
      audio: '71122',
      text: "#<color=#37FFFF>Paimon:</color> Those Sniffer Moles have a really keen sense of smell, huh? They're experts when it comes to foraging for berries.\\n<color=#37FFFF>Paimon:</color> We should get some as pets! Hehe, then we could have all the Lakkaberries and Midsommar Berries we wanted!\\n<color=#37FFFF>Paimon:</color> And then you could make Krumkakes and Midsommar Torte for Paimon every day!\\n<color=#37FFFF>{NICKNAME}:</color> It's a nice idea, but Sniffer Moles are wild animals. Would they really make good pets?\\n<color=#37FFFF>Paimon:</color> Hehe, don't you worry about that, Paimon's got it all figured out!\\n<color=#37FFFF>Paimon:</color> Back in Sumeru, Paimon read this book from the Amurta Darshan which said that if you raise an animal from a young enough age, they'll treat you like family.\\n<color=#37FFFF>Paimon:</color> So let's go find some young whipper-snapper Sniffer Moles and raise 'em right!\\n<color=#37FFFF>{NICKNAME}:</color> Hmm... In that case, it'd probably be a few months before they were old enough to fend for themselves.\\n<color=#37FFFF>{NICKNAME}:</color> Obviously, we'd need to feed them properly during that time... and as we know, their diet is mostly Lakkaberries and Midsommar Berries.\\n<color=#37FFFF>{NICKNAME}:</color> So by the time they're all grown up, Paimon's stash of Lakkaberry Krumkakes and Midsommar Torte will be completely decimated.\\n<color=#37FFFF>Paimon:</color> Waaah! Noooo! Ugh, why did you have to turn this into a horror story?",
      tips: "Unlock the Statue of the New Moon on Nod Krai's Lempo Isle",
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
      text: 'After that, you met Paimon, and wandered together for some time.\\nYou learned that this world has seven deities who rule the seven nations as the Seven Archons.\\nYour first stop was the free city of wine and song, Mondstadt, a city built by the Anemo Archon.\\nAs you stepped into Mondstadt as an outlander, it was, as the other nations were, beset on both sides by non-human and human threats.\\nThe non-human threat was comprised of the confederacy known as the Abyss Order.\\nThe human threat on the other hand, stemmed from the ambition of the Tsaritsa, god of Snezhnaya.\\nThe Abyss Order had corrupted an ally of the Anemo Archon, the Dragon of the East of the Four Winds of Mondstadt.\\nThe envoys of Snezhnaya, for their part, used this opposition to the Abyss as an excuse to put pressure on Mondstadt.\\nThese threats from without and within caused the return of the Anemo Archon, who took on the form of a bard and joined you in your journey to save the dragon.\\nYet there was something then that you did not see — for as the dragon fell to the Abyss, a certain figure had been reflected in its eyes...\\nThe one who rules the Abyss.\\nHe had once traveled with you, and you had once crossed many worlds together.',
      text2: null,
      tips: 'Complete "Song of the Dragon and Freedom"',
    },
    '3': {
      title: 'Character Story 3',
      title2: null,
      text: 'Though you made no promises, though it was an "agreement" the other party made one-sidedly,\\nYou nonetheless set out on a sojourn across the Seven Nations to reach "the journey\'s end."\\nIt would be a stretch to call this a pleasant path — as your feet took you forward, you witnessed and were pulled into the crises each nation faced...\\nPerhaps this is no coincidence. Perhaps some tremendous tremor deeper beneath the world is to blame for the waves of catastrophe.\\nThe Tsaritsa\'s plan to collect the Gnoses persists apace, while the terrifying force corrupting the world awaits opportunities to strike.\\nAnd the Abyss Order, the organization led by your own flesh and blood...\\nFrom the Loom of Fate operational launch to the Atlas of the New World\'s completion, you know deep down that their actions are changing the fate of this world.\\nAs you gradually understand said world, you have also come to understand the things your brother...\\nBut this has not made your journey any easier, nor your footsteps lighter. That was not what you expected at first.',
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
