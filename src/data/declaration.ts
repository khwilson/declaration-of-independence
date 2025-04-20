export interface Grievance {
  id: string;
  text: string;
  newsStories: NewsStory[];
}

export interface NewsStory {
  url: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string; // ISO format date string
}

export const declaration = {
  preamble: `When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.`,

  postamble: [
    `In every stage of these Oppressions We have Petitioned for Redress in the most humble terms: Our repeated Petitions have been answered only by repeated injury. A Prince, whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people.`,
    `Nor have We been wanting in attentions to our Brittish brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations, which, would inevitably interrupt our connections and correspondence. They too have been deaf to the voice of justice and of consanguinity. We must, therefore, acquiesce in the necessity, which denounces our Separation, and hold them, as we hold the rest of mankind, Enemies in War, in Peace Friends.`,
    `We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do. And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor.`
  ],

  grievances: [
    {
      id: "refused-assent",
      text: "He has refused his Assent to Laws, the most wholesome and necessary for the public good.",
      newsStories: [
        {
          url: 'https://www.theverge.com/news/643730/tiktok-ban-delay-donald-trump',
          title: 'Trump delays TikTok ban again',
          summary: 'Despite Congress enacting a law (that the Supreme Court explicitly upheld) banning TikTok unless it was sold, Trump refuses to enforce it, pretending he can unilaterally provide reprieve from runinous fines.',
          date: '2025-04-04',
          imageUrl: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25829977/STK051_TIKTOKBAN_B_CVirginia_C.jpg?quality=90&strip=all&crop=0%2C9.9676601489831%2C100%2C80.064679702034&w=1200'
        }
      ]
    },
    {
      id: "forbidden-governors",
      text: "He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.",
      newsStories: [
        {
          title: "Emails Confirm Social Security Administration Canceled Maine Contracts As Political Payback",
          date: "2025-04-02",
          url: "https://www.huffpost.com/entry/janet-mills-social-security-maine-leland-dudek_n_67ed2d99e4b0b937ab8f135c",
          imageUrl: "https://img.huffingtonpost.com/asset/67ed2e3415000024000abcae.jpeg?ops=1200_630",
          summary: "After the Governor of Maine pushed back on Donald Trump's executive orders targeting trans rights, his administration forced parents of newborns to go to Social Security offices to register their children instead of the long-standing practice of registering at the hospital. Emails show this was explicitly for political retribution.",
        },
        {
          url: "https://www.nytimes.com/2024/05/23/us/politics/border-deal-senate-democrats.html",
          imageUrl: "https://static01.nyt.com/images/2024/05/23/multimedia/23dc-cong1-mjwf/23dc-cong1-mjwf-videoSixteenByNine3000.jpg",
          summary: "After a bipartisan consensus was reached on a (very harsh) bill to curtail migration at the US border with Mexico, Trump scuttled it, despite having no formal power at the time.",
          title: "Border Deal Fails Again in the Senate as Democrats Seek Political Edge",
          date: "2024-05-23"
        },
      ]
    },
    {
      id: "refused-other-laws",
      text: "He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.",
      newsStories: [
        {
          url: 'https://www.nytimes.com/2025/02/20/nyregion/see-you-in-court-the-fight-over-congestion-pricings-future.html',
          title: '‘See You in Court’: The Fight Over Congestion Pricing’s Future',
          imageUrl: 'https://static01.nyt.com/images/2025/02/20/multimedia/20nytoday-congestion-mpfw/20nytoday-congestion-mpfw-facebookJumbo.jpg',
          summary: 'Trump tried to kill a congestion reduction plan in New York City, despite it having been approved for over a year, operational for many week, the revenue generated from the program being obligated, and the program being successful beyond expectations according to early data.',
          date: '2025-02-20',
        },
      ]
    },
    {
      id: "called-legislative",
      text: "He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures.",
      newsStories: []
    },
    {
      id: "dissolved-representatives",
      text: "He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.",
      newsStories: [
        {
          url: "https://www.axios.com/2025/04/02/mike-johnson-anna-paulina-luna-proxy-voting",
          imageUrl: "https://images.axios.com/q6lk0Szx_C_9Ow-y8DBe72lLRE4=/0x0:8192x4608/1366x768/2025/04/01/1743537811191.jpg",
          summary: "After a majority of Congress signed onto a measure to allow Congressional representatives who recently had a child to vote by proxy, the Speaker of the House suspended the session instead of letting the will of the majority pass.",
          title: "Mike Johnson scraps his whole week after brutal defeat",
          date: "2025-04-01",
        }
      ],
    },
    {
      id: "refused-elections",
      text: "He has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within.",
      newsStories: [
        {
          url: "https://apnews.com/article/sylvester-turner-congress-democrats-greg-abbott-3cbd45f26f3c9a4538ed0cf1a77e90a6",
          imageUrl: "https://dims.apnews.com/dims4/default/e263d58/2147483647/strip/true/crop/7448x4190+0+388/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F4a%2F92%2F64c32c2f509b40a39ae4a77cfbf4%2F9a65917691ce40abab957c2c2803235d",
          summary: "Greg Abbott, governor of Texas, refuses to call an election to fill a recently deceased Democratic representative of Houston, America's fourth largest city.",
          title: "Texas governor blames county's elections problems for delay in filling vacant congressional seat",
          date: "2024-05-22"
        },
      ]
    },
    {
      id: "obstructed-immigration",
      text: "He has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands.",
      newsStories: [
        {
          url: 'https://www.nbcnews.com/news/latino/trump-administration-stops-processing-green-cards-vetting-rcna198061',
          title: "Trump administration stops processing some green cards 'to do more vetting'",
          summary: 'Slow-walking green card applications of asylees and refugees who have already waited many months for their applications to come through.',
          imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-02/240220-office-of-US-Citizenship-and-Immigration-Services-ew-126p-7182a5.jpg',
          date: '2025-03-25'
        },
      ]
    },
    {
      id: "obstructed-justice",
      text: "He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers.",
      newsStories: [
        {
          url: 'https://www.npr.org/2025/04/16/g-s1-60696/judge-contempt-alien-enemies-act',
          title: "Judge: 'Probable cause' to hold U.S. in contempt over Alien Enemies Act deportations",
          summary: 'The government sent several planeloads of alleged gang members to El Salvador, including 137 people under the act, the White House said at the time. Judge finds probable cause that the Trump administration did not comply.',
          imageUrl: 'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8192x4608+0+677/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F38%2F67%2F1363309e4ae28b9d26f28c08ad62%2Fgettyimages-2204881095.jpg',
          date: '2025-04-16',
        },
        {
          url: 'https://www.nbcnews.com/politics/immigration/judge-abrego-garcia-case-indicates-weighing-contempt-proceedings-trump-rcna201359',
          title: "Judge in Abrego Garcia case indicates she's weighing contempt proceedings against Trump administration",
          summary: 'U.S. District Judge Paula Xinis said the administration has done "nothing" to facilitate the return of Kilmar Abrego Garcia, even though court orders have required action by officials.',
          imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250409-Kilmar-Abrego-Garcia-mn-0755-d8ceeb.jpg',
          date: '2025-04-15'
        },
      ]
    },
    {
      id: "made-judges-dependent",
      text: "He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries.",
      newsStories: [
        {
          url: 'https://apnews.com/article/trump-deportation-judge-boasberg-venezuela-supreme-court-ccc7e61ccf8e8062d7075b617c87cdb5',
          title: "A look at the judge who blocked Trump's deportations and is now facing calls for impeachment",
          imageUrl: 'https://dims.apnews.com/dims4/default/0a4be68/2147483647/strip/true/crop/5190x2919+0+270/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fa0%2Fc8aee8b29807118d73c6de4872e0%2Fa9aa903c551c4e96b0404103d059d55b',
          summary: "After he ruled against some of Trump's immigration actions, the White House called for Judge Boasberg to be impeached, prompting even the Chief Justice to comment.",
          date: '2025-03-18'
        }
      ]
    },
    {
      id: "erected-new-offices",
      text: "He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance.",
      newsStories: [
        {
          url: 'https://www.wired.com/story/social-security-administration-regional-office-elon-musk-x/',
          summary: "DOGE is working to make it harder for seniors to access their Social Security benefits by firing the staff who helps them navigate the process and resolve their issues with the program.",
          imageUrl: 'https://media.wired.com/photos/67f9402dafdcb312a812092c/191:100/w_1280,c_limit/AP25088402619903.jpg',
          title: 'The Social Security Administration Is Gutting Regional Staff and Shifting All Public Communications to X',
          date: '2025-04-11'
        }
      ]
    },
    {
      id: "kept-standing-armies",
      text: "He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.",
      newsStories: [
        {
          url: 'https://www.nytimes.com/2025/04/11/us/politics/trump-military-border.html',
          title: 'Trump Directive Calls for Turning Border Strip Into ‘Military Installation’',
          imageUrl: 'https://static01.nyt.com/images/2025/04/11/multimedia/11dc-military-border-jhmp/11dc-military-border-jhmp-facebookJumbo.jpg',
          summary: 'Trump proposes turning a 60ft-wide stretch of civilian land along the Southern border into a "military base," to allow troops to detain migrants for trespassing on a military base. This land runs by many local communities over hundreds of miles, and as it is only 60ft wide, troops would almost certainly need to be quartered in civilian premises.',
          date: '2025-04-12'
        },
        {
          url: "https://www.nytimes.com/2024/05/22/us/politics/national-guard-texas-border.html",
          imageUrl: "https://static01.nyt.com/images/2024/05/22/multimedia/22dc-guard-mjwf/22dc-guard-mjwf-videoSixteenByNine3000.jpg",
          summary: "Texas Governor deploys National Guard troops to the border without legislative approval, raising questions about the use of military forces in domestic affairs.",
          title: "Texas Governor Deploys National Guard to Border Without Legislative Approval",
          date: "2024-05-22"
        }
      ]
    },
    {
      id: "affected-military-independent",
      text: "He has affected to render the Military independent of and superior to the Civil power.",
      newsStories: [
        {
          url: 'https://apnews.com/article/trump-brown-joint-chiefs-of-staff-firing-fa428cc1508a583b3bf5e7a5a58f6acf',
          title: 'Trump fires chairman of the Joint Chiefs of Staff and two other military officers',
          imageUrl: 'https://dims.apnews.com/dims4/default/8691eba/2147483647/strip/true/crop/6048x3402+0+311/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fab%2F03%2F146b5adf1793acabc1bf2b6b425f%2F31247abc2b8b44d0bc34bbf9c0f2ad32',
          summary: 'President Donald Trump has abruptly fired Air Force Gen. CQ Brown Jr. as chair of the Joint Chiefs of Staff. Defense Secretary Pete Hegseth announced the firings of two additional senior officers.',
          date: '2025-02-22'
        },
        {
          url: 'https://defensescoop.com/2025/02/21/trump-fires-adm-franchetti-chief-of-naval-operations/',
          title: 'Trump fires Franchetti as chief of naval operations',
          summary: "President Donald Trump is looking for a nominee to replace Adm. Lisa Franchetti as the Navy's top officer, the Pentagon announced Friday night.",
          date: '2025-02-22',
          imageUrl: 'https://defensescoop.com/wp-content/uploads/sites/8/2025/02/Franchetti-e1740189425149.jpg'
        },
        {
          url: 'https://www.pbs.org/newshour/politics/senate-confirms-trump-nominee-for-joint-chiefs-of-staff-chair-in-overnight-vote',
          title: 'Senate confirms Trump nominee for Joint Chiefs of Staff chair in overnight vote',
          summary: `Retired Air Force Lt. Gen. Dan "Razin" Caine was nominated in February after Trump fired Gen. CQ Brown Jr. as part of his Republican administration's campaign to rid the military of leaders who support diversity and equity in the ranks.`,
          imageUrl: 'https://d3i6fh83elv35t.cloudfront.net/static/2025/04/2025-02-22T193129Z_349226979_RC2DOQ98NOCL_RTRMADP_3_USA-TRUMP-PENTAGON-FIRING-1024x683.jpg',
          date: '2025-04-11'
        },
      ]
    },
    {
      id: "combined-with-others",
      text: "He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation:",
      newsStories: []
    },
    {
      id: "quartering-large-bodies",
      text: "For Quartering large bodies of armed troops among us:",
      newsStories: []
    },
    {
      id: "protecting-them",
      text: "For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States:",
      newsStories: [
        {
          url: 'https://www.aljazeera.com/news/2025/1/23/the-january-6-pardons-who-has-trump-ordered-to-be-released',
          title: 'The January 6 pardons: Who has Trump ordered to be released?',
          summary: 'As one of his first actions, President Trump set free all of the January 6th insurrectionists.',
          imageUrl: 'https://www.aljazeera.com/wp-content/uploads/2021/11/AP21295816030789.jpg?resize=1200%2C675',
          date: '2025-01-23'
        }
      ]
    },
    {
      id: "cutting-off-trade",
      text: "For cutting off our Trade with all parts of the world:",
      newsStories: [
        {
          url: 'https://www.washingtonpost.com/business/2025/02/01/tariff-mexico-canada-trump/',
          imageUrl: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/C4AIDOFN3RVECQ5AKEJZZGOPHU_size-normalized.jpg&w=1440',
          summary: 'In February, Trump imposed 10-25% tariffs on goods coming from Canada and Mexico, despite treaty obligations requiring no tariffs.',
          titie: 'Trump imposes tariffs on Canada, Mexico and China',
          date: '2025-02-01',
        }
      ]
    },
    {
      id: "imposing-taxes",
      text: "For imposing Taxes on us without our Consent:",
      newsStories: [
        {
          url: 'https://www.nytimes.com/2025/03/13/business/economy/trump-tariff-timeline.html',
          title: 'A Timeline of Trump’s On-Again, Off-Again Tariffs',
          imageUrl: 'https://static01.nyt.com/images/2025/03/12/multimedia/12econ-news-blog-tariff-timeline-zpvj/12econ-news-blog-tariff-timeline-zpvj-facebookJumbo.jpg',
          summary: 'President Trump’s penchant for imposing and then suspending tariffs has shaken markets and confounded trading partners.',
          date: '2025-03-13'
        },
        {
          url: 'https://budgetlab.yale.edu/research/state-us-tariffs-april-15-2025',
          title: 'State of U.S. Tariffs: April 15, 2025',
          imageUrl: 'https://budgetlab.yale.edu/sites/default/files/styles/social_media/public/2024-10/Tariffs%20report%20page%20image.jpg?h=c7c84225&itok=dbAq8Rmr',
          date: '2025-04-15',
          summary: "President Trump's tariffs are estimated to cost American households around $5000 per year, a tax that Congress never approved.",
        }
      ]
    },
    {
      id: "depriving-trial",
      text: "For depriving us in many cases, of the benefits of Trial by Jury:",
      newsStories: [

      ]
    },
    {
      id: "transporting-beyond-seas",
      text: "For transporting us beyond Seas to be tried for pretended offences:",
      newsStories: [
        {
          url: 'https://en.wikipedia.org/wiki/Deportation_of_Kilmar_Abrego_Garcia',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Aerial_view_of_CECOT.png/500px-Aerial_view_of_CECOT.png',
          title: 'Deportation of Kilmar Abrego Garcia',
          summary: 'The Trump administration disappeared Kilmar Abrego Garcia to a Salvadoran prison due to unproven "gang affiliations" and despite a court order he not be removed from the country. Since, it has refused to comply with court orders to facilitate his return.',
          date: '2025-04-13',
        },
        {
          url: 'https://www.theguardian.com/us-news/2025/apr/17/trump-rumeysa-ozturk-tufts-detention',
          imageUrl: 'https://i.guim.co.uk/img/media/8d289f723a25b918b57732835f11f494aaf2e341/0_72_5000_3001/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9859590ce009604737f2428e3b311dda',
          title: 'Tufts student detained for writing op-ed denied bail by US immigration judge',
          summary: 'Tufts student Rümeysa Öztürk was seized in Massachusetts by plainclothes agents and spirited to Louisiana detention center.',
          date: '2025-04-17'
        }
      ]
    },
    {
      id: "abolishing-free-system",
      text: "For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies:",
      newsStories: []
    },
    {
      id: "taking-away-charters",
      text: "For taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments:",
      newsStories: []
    },
    {
      id: "suspending-legislatures",
      text: "For suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever.",
      newsStories: [

      ]
    },
    {
      id: "abdicated-government",
      text: "He has abdicated Government here, by declaring us out of his Protection and waging War against us.",
      newsStories: []
    },
    {
      id: "plundered-seas",
      text: "He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people.",
      newsStories: []
    },
    {
      id: "transporting-large-armies",
      text: "He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.",
      newsStories: []
    },
    {
      id: "constrained-fellow-citizens",
      text: "He has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands.",
      newsStories: []
    },
    {
      id: "excited-domestic-insurrections",
      text: "He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions.",
      newsStories: [
        {
          url: 'https://www.pbs.org/newshour/politics/read-the-final-report-from-the-jan-6-committee',
          title: 'The Final Report from the January 6th Committee',
          summary: 'On January 6, 2021, President Trump incited an insurrection against the United States in an attempt to overturn the results of the 2020 election.',
          imageUrl: 'https://d3i6fh83elv35t.cloudfront.net/static/2022/12/2022-12-19T195602Z_1165840266_RC279Y95CTGY_RTRMADP_3_USA-CAPITOL-SECURITY-1024x805.jpg',
          date: '2022-12-22'
        }
      ]
    }
  ]
};