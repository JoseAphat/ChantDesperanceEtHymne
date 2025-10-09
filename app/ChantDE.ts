export type Chant = {
  id: string;
  title: string;
  lyrics: string;
};
const englishSongs = [
  {
    id: "1",
    title: "001- Oh happy day",
    lyrics: `
Oh happy day (oh happy day)
Oh happy day (oh happy day)
When Jesus washed (when Jesus washed)
When Jesus washed (when Jesus washed)
When Jesus washed (when Jesus washed)
He washed my sins away (oh happy day)
Oh happy day (oh happy day)

He taught me how to watch, fight and pray
Fight and pray
And live rejoicing every day
Every day

Oh happy day (oh happy day)
Oh happy day (oh happy day)
Oh happy day (oh happy day)
Oh happy day (oh happy day)

      `,
  },

  {
    id: "2",
    title: "002- Let it rain",
    lyrics: `
	Chorus:
Let it rain, let it rain
Open the floodgates of Heaven
Let it rain, let it rain
Open the floodgates of Heaven

	Verse:
I feel the rains of Your love
I feel the winds of Your Spirit
Now the heartbeat of Heaven
Let us hear

	Bridge:
We want to see You
Show us Your glory
We want to know You, Lord
We want to see You
Show us Your glory
We want to know You, Lord

      `,
  },

  {
    id: "3",
    title: "003- Here i am to worship",
    lyrics: `
	Verse 1:
Light of the world,
You stepped down into darkness,
Opened my eyes, let me see
Beauty that made this heart adore You,
Hope of a life spent with You.

	Chorus:
So, here I am to worship,
Here I am to bow down
Here I am to say that You’re my God!
You’re altogether lovely, altogether worthy,
Altogether wonderful to me!

	Verse 2:
King of all days,
Oh so highly exalted,
Glorious in Heaven above,
Humbly You came to the earth You created,
All for love’s sake became poor.

	Bridge:
I’ll never know how much it cost
To see my sin upon that cross!
I’ll never know how much it cost
To see my sin upon that cross!

    `,
  },

  {
    id: "4",
    title: "004- All in All ",
    lyrics: `
	Verse 1:
You are my Strength
When I am weak.
You are the Treasure
That I seek.
You are my All in all.
Seeking You
As a precious Jewel,
Lord to give up
I’d be a fool.
You are my All in all!

	Chorus:
Jesus, Lamb of God,
Worthy is Your Name.
Jesus, Lamb of God,
Worthy is Your Name.

	Verse 2:
Taking my cross,
My sin my shame,
Rising again
I praise Your Name.
You are my All in all.
When I fall down
You lift me up.
When I am dry
You fill my cup.
You are my All in all.

	Verse 3:
When the dark powers
Had done their worst
Jesus brought victory
O’er the curse.
You are my All in all.
Death could not
Hold the King of kings.
Now to His heirs
New life He brings.
You are my All in all.

      `,
  },

  {
    id: "5",
    title: "005- Joy to the World",
    lyrics: `Verse 1:
Joy to the world! The Lord is come!
Let earth receive her King;
Let every heart prepare Him room,
And heaven and nature sing,
And heaven and nature sing,
And heaven, and heaven, and nature sing.

	Verse 2:
Joy to the earth! The Savior reigns!
Let men their songs employ;
While fields and floods, rocks, hills and plains
Repeat the sounding joy,
Repeat the sounding joy,
Repeat, repeat, the sounding joy.

	Verse 3:
No more let sins and sorrows grow,
Nor thorns infest the ground;
He comes to make His blessings flow
Far as the curse is found,
Far as the curse is found,
Far as, far as, the curse is found.

	Verse 4:
He rules the world with truth and grace,
And makes the nations prove
The glories of His righteousness,
And wonders of His love,
And wonders of His love,
And wonders, wonders, of His love.      

      `,
  },

  {
    id: "6",
    title: "006- Lamb of God",
    lyrics: `Verse 1:
Your only Son, no sin to hide,
But you have sent Him from Your side
To walk upon this guilty sod
And to become the Lamb of God

	Chorus:
Oh Lamb of God, sweet Lamb of God,
I love the holy Lamb of God.
O wash me in His precious blood.
My Jesus Christ, the Lamb of God.

	Verse 2:
Your gift of love, they crucified.
They laughed and scorned Him as He died.
The humble King they named a fraud
And sacrificed the Lamb of God.

	Verse 3:
I was so lost I should have died
But You have brought me to Your side
To be led by Your staff and rod
And to be called a child of God.

    `,
  },

  {
    id: "7",
    title: "007- Majesty",
    lyrics: `	Verse:
Majesty, worship His Majesty.
Unto Jesus be all glory, honor and praise!
Majesty, Kingdom Authority,
Flow from His throne, unto His own
His anthem raise!

So exalt, lift up on high the Name of Jesus!
Magnify, come glorify, Christ Jesus the King.
Majesty, worship His Majesty;
Jesus who died, now glorified, King of all kings!

      `,
  },

  {
    id: "8",
    title: "008- What a Friend We Have in Jesus!",
    lyrics: `Verse 1:
What a Friend we have in Jesus,
All our sins and griefs to bear!
What a privilege to carry everything to God in prayer!
O what peace we often forfeit,
O what needless pain we bear,
All because we do not carry everything to God in prayer.

	Verse 2:
Have we trials and temptations?
Is there trouble anywhere?
We should never be discouraged; take it to the Lord in prayer.
Can we find a friend so faithful
Who will all our sorrows share?
Jesus knows our every weakness; take it to the Lord in prayer.

	Verse 3:
Are we weak and heavy laden,
Cumbered with a load of care?
Precious Savior, still our refuge, 
Take it to the Lord in prayer.
Do your friends despise, forsake you?
Take it to the Lord in prayer!
In His arms He’ll take and shield you; 
You will find a solace there.      

      `,
  },

  {
    id: "9",
    title: "009- 10,000 Reasons (Bless the Lord)",
    lyrics: `Chorus:
Bless the Lord, O my soul,
O my soul, worship His holy Name.
Sing like never before, O my soul.
I’ll worship Your holy Name.

	Verse 1:
The sun comes up, it’s a new day dawning;
It’s time to sing Your song again.
Whatever may pass and whatever lies before me,
Let me be singing when the evening comes.

	Verse 2:
You’re rich in love and You’re slow to anger,
Your Name is great and Your heart is kind;
For all Your goodness I will keep on singing,
Ten thousand reasons for my heart to find.

	Verse 3:
And on that day when my strength is failing,
The end draws near and my time has come;
Still my soul sings Your praise unending,
Ten thousand years and then forevermore.

    `,
  },

  {
    id: "10",
    title: "010- Way Maker",
    lyrics: `Verse 1 :
You are here, moving in our midst
I worship You, I worship You
You are here, working in this place
I worship You, I worship You

	Chorus :
Way maker, miracle worker, promise keeper
Light in the darkness, my God
That is who You are

	Verse 2 :
You are here, touching every heart
I worship You, I worship You
You are here, healing every heart
I worship You, I worship You

	Verse 3 :
You are here, turning lives around
I worship You, I worship You
You are here, mending every heart
I worship You, I worship You

	Bridge :
Even when I don't see it, You're working
Even when I don't feel it, You're working
You never stop, You never stop working
You never stop, You never stop working	

      `,
  },

  {
    id: "11",
    title: "011- Goodness of God",
    lyrics: `Verse 1 :
I love You, Lord
For Your mercy never fails me
All my days, I've been held in Your hands
From the moment that I wake up
Until I lay my head
Oh, I will sing of the goodness of God

	Chorus:
Cause all my life You have been faithful
And all my life You have been so, so good
With every breath that I am able
Oh, I will sing of the goodness of God

	Verse 2 :
I love Your voice
You have led me through the fire
In darkest night, You are close like no other
I've known You as a father
I've known You as a friend
And I have lived in the goodness of God

	Bridge:
Your goodness is running after, it's running after me
Your goodness is running after, it's running after me
With my life laid down, I'm surrendered now
I give You everything
Your goodness is running after, it's running after me

      `,
  },

  {
    id: "12",
    title: "012- Mighty to save",
    lyrics: `Verse 1:
Everyone needs compassion
A love that's never failing
Let mercy fall on me
Everyone needs forgiveness
The kindness of a Savior
The hope of nations

	Chorus:
Savior He can move the mountains
My God is mighty to save
He is mighty to save
Forever Author of Salvation
He rose and conquered the grave
Jesus conquered the grave

	Verse 2:
So take me as You find me
All my fears and failures
Fill my life again
I give my life to follow
Everything that I believe in
Now I surrender

	Bridge:
Shine Your light and
Let the whole world see
We're singing
For the glory
Of the risen King

    `,
  },

  {
    id: "13",
    title: "013- Jireh",
    lyrics: `Verse 1:
I’ll never be more loved
Than I am right now
Wasn’t holding You up
So there’s nothing I can do
To let You down
Doesn’t take a trophy
To make You proud
I’ll never be more loved
Than I am right now

	Verse 2:
Going through a storm
But I won’t go down
I hear Your voice
Carried in the rhythm of the wind
To call me out
You would cross an ocean
So I wouldn’t drown
You’ve never been closer than
You are right now

	Chorus:
Jireh You are enough
Jireh You are enough
I will be content
In every circumstance
Jireh You are enough

	Post Chorus:
Forever enough
Always enough
More than enough
Forever enough
Always enough
More than enough

	Verse 3:
I don’t wanna forget
How I feel right now
On the mountaintop
I can see so clear
What it’s all about
Stay by my side
When the Sun goes down
Don’t wanna forget
How I feel right now

	Pre Chorus:
I'm already loved
I'm already chosen
I know who I am
I know what You've spoken
I'm already loved
More than I could imagine
And that is enough

	Tag:
And that is enough

	Refrain:
You are enough
So I am enough
You are enough
So I am enough

	Bridge:
If He dresses the lilies
With beauty and splendor
How much more
Will He clothe you
How much more
Will He clothe you
If He watches over
Every sparrow
How much more
Does He love you
How much more
Does He love you

	Tag:
How much more does He love you
How much more does He love you

	Interlude:
It's more than you ask think or imagine
According to His power
Working in us
It's more than enough

	Tag:
It's more than enough
It's more than you know
	
	Outro:
I will be content
In every circumstance
Jireh You are enough

      `,
  },

  {
    id: "14",
    title: "014- Open the eyes of my heart",
    lyrics: `Verse 1:
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You

	Chorus:
To see You high and lifted up
Shining in the light of Your glory
Pour out Your power and love
As we sing holy holy holy

	Verse 2:
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You

	
	Bridge:
Holy holy holy
Holy holy holy
Holy holy holy
I want to see you
   (× 4)2

      `,
  },

  {
    id: "15",
    title: "015- Revelation Song",
    lyrics: `Verse 1:
Worthy is the
Lamb who was slain
Holy Holy is He
Sing a new song
To Him who sits on
Heaven's mercy seat

	Chorus:
Holy Holy Holy
Is the Lord God Almighty
Who was and is and is to come
With all creation I sing
Praise to the King of Kings
You are my everything
And I will adore You

	Verse 2:
Clothed in rainbows of living color
Flashes of lightning rolls of thunder
Blessing and honor strength and
Glory and power be
To You the only wise King

	Verse 3:
Filled with wonder
Awestruck wonder
At the mention of Your name
Jesus Your name is power
Breath and living water
Such a marvelous mystery

    `,
  },

  {
    id: "16",
    title: "016- Great is Thy faithfulness",
    lyrics: `Verse 1:
Great is Thy faithfulness
O God my Father
There is no shadow
Of turning with Thee
Thou changest not
Thy compassions they fail not
As Thou hast been
Thou forever will be

	Chorus:
Great is Thy faithfulness
Great is Thy faithfulness
Morning by morning
New mercies I see
And all I have needed
Thy hand hath provided
Great is Thy faithfulness
Lord unto me

	Verse 2:
Summer and winter
And springtime and harvest
Sun moon and stars
In their courses above
Join with all nature
In manifold witness
To Thy great faithfulness
Mercy and love

	Verse 3:
Pardon for sin
And a peace that endureth
Thine own dear presence
To cheer and to guide
Strength for today
And bright hope for tomorrow
Blessings all mine
With ten thousand beside

      `,
  },

  {
    id: "17",
    title: "017- Amazing grace",
    lyrics: `Verse 1:
Amazing Grace how sweet the sound
That saved a wretch like me
I once was lost but now am found
Was blind but now I see

	Verse 2:
'Twas Grace that taught my heart to fear
And Grace my fears relieved
How precious did that Grace appear
The hour I first believed

	Chorus:
My chains are gone, I've beem set free
My God, my Savior has ransomed me
And like a flood, His mercy reigns
Unending love, amazing grace

	Verse 3:
Through many dangers toils and snares
I have already come
'Tis grace hath brought me safe thus far
And grace will lead me home

	Verse 4:
The Lord has promised Good to me
His Word my hope secures
He will my Shield and Portion be
As long as life endures

      `,
  },

  {
    id: "18",
    title: "018- My life is in your hands",
    lyrics: `Verse 1:
You don't have to worry
And don't you be afraid
Joy comes in the morning
Troubles they don't last always
For there's a friend in Jesus
Who will wipe your tears away
And if your heart is broken
Just lift your hands and say

	Chorus:
Oh
I know that I can make it
I know that I can stand
No matter what may come my way
My life is in your hands
With Jesus I can take it
With Him I know I can stand
No matter what may come my way
My life is in your hands

	Verse 2:
So when your tests and trials
They seem to get you down
And all your friends and loved ones
Are nowhere to be found
Remember there's a friend in Jesus
Who will wipe your tears away
And if you heart is broken
Just lift your hands and say

    `,
  },

  {
    id: "19",
    title: "019- I know who I am",
    lyrics: `Verse:	
We are a chosen generation
Called forth to show His excellence
All I require for life God has given me
And I know who I am (×2)

	Chorus 1:
I know who God says I am
What he says I am where he says I am I know who I am (×2)

	Chorus 2:
I'm walking in power
I'm walking In miracles
I live a life of favour
Cause I know who I am (×2)

	Verse:
We are a chosen generation
Called forth to show his excellence
All I require for life God has given me
And I know who I am

Ohhhhhhh oh oh, oh oh oh
I know who I am

I am holy
I am righteous oh....
I am beautiful
I am walking in power
I am walking in miracles
I live a life of favour
Cause I know who I am

Take a look at me I am wonder
It doesn't matter what you see now
Can you see his glory
Cause I know who I am (×4)

      `,
  },

  {
    id: "20",
    title: "020- Holy, Holy, Holy ! Lord God Almighty ",
    lyrics: `Verse 1:
Holy, holy, holy! Lord God Almighty!
Early in the morning our song shall rise to Thee;
Holy, holy, holy, merciful and mighty!
God in three Persons, blessed Trinity!

	Verse 2:
Holy, holy, holy! All the saints adore Thee,
Casting down their golden crowns around the glassy sea,
Cherubim and seraphim falling down before Thee,
Who wert and art, and evermore shalt be.

	Verse 3:
Holy, holy, holy! Though the darkness hide Thee,
Though the eye of sinful man Thy glory may not see;
Only Thou art holy; there is none beside Thee,
Perfect in power, love, and purity.

	Verse 4:
Holy, holy, holy! Lord God Almighty!
All Thy works shall praise Thy name in earth and sky and sea;
Holy, holy, holy, merciful and mighty!
God in three Persons, blessed Trinity!

      `,
  },

  {
    id: "21",
    title: "021- Give thanks",
    lyrics: `Verse: 
We give thanks with a grateful heart 
Give thanks to the Holy One 
Give thanks because He’s given 
Jesus Christ, His Son 
Give thanks with a grateful heart 
Give thanks to the Holy One 
Give thanks because He’s given 
Jesus Christ, His Son
 
	Chorus: 
And now let the weak say, “I am strong” 
Let the poor say, “I am rich” 
Because of what the Lord has done for us 
And now let the weak say, “I am strong” 
Let the poor say, “I am rich” 
Because of what the Lord has done for us 

	Ending: 
Give thanks 
(We give thanks) 
We give thanks 
(We give thanks) 
We give thanks

    `,
  },

  {
    id: "22",
    title: "022- Fill me up",
    lyrics: `Verse 1:
You provide the fire
I'll provide the sacrifice
You provide the spirit
And I will open up inside

	Chorus:
Fill me up God
Fill me up God
Fill me up God
Fill me up

	Verse 2:
You provide the fire
I'll provide the sacrifice
You provide the spirit
And I will open up inside

	Verse 3:
You provide the fire
I'll provide the sacrifice
You provide the spirit
And I will open up inside

      `,
  },

  {
    id: "23",
    title: "023- Never Lost",
    lyrics: `Verse 1:
Miracles when You move
Such an easy thing
For You to do
Your hand
Is moving right now
You are still showing up
At the tomb of every Lazarus
Your voice is calling me out

	Pre Chorus:
And right now
I know You’re able
And my God
Come through again

	Chorus:
You can do all things
You can do all things but fail
'Cause You've never lost a battle
No You've never lost a battle
And I know I know
You never will

	Verse 2:
Everything’s possible
By the power
Of the Holy Ghost
A new wind
Is blowing right now
Breaking my heart of stone
Taking over like it’s Jericho
My walls
Are all crashing down

	Refrain:
You've never lost a battle
You've never lost a battle
You've never lost a battle
You never will
	
	Tag:
I know I know You never will

	Bridge 1:
I don't have to wait
Till the battle's over
I can shout now
I don't have to wait
Till the battle's over
I can shout now

	Bridge 2:
I can shout now
I can shout now
I can shout now
I can shout now      

      `,
  },

  {
    id: "24",
    title: "024- You raise me up",
    lyrics: `Verse:
When I am down and, oh, my soul so weary
When troubles come and my heart burdened be
Then I am still and wait here in the silence
Until you come and sit awhile with me

	Chorus:
You raise me up so I can stand on mountains
You raise me up to walk on stormy seas
I am strong when I am on your shoulders
You raise me up to more than I can be

    `,
  },

  {
    id: "25",
    title: "025- One day at a time",
    lyrics: `Verse 1:
I'm only human
I'm just a woman
Help me believe in what I could be
And all that I am
Show me the stairway I have to climb
Lord for my sake
Teach me to take one day at a time

	Chorus:
One day at a time, sweet Jesus
That's all I'm asking from You
Just give me the strength 
To do every day what I have to do
Yesterday's gone sweet Jesus 
And tomorrow may never be mine
Lord help me today, show me the way, 
One day at a time

	Verse 2:
Do You remember when You walked among men?
Well Jesus You know if You're looking below
It's worse now than then
Cheating and stealing, violence and crime
So for my sake teach me to take one day at a time

      `,
  },

  {
    id: "26",
    title: "026- Believe for it",
    lyrics: `Verse 1:
They say this mountain
Can't be moved
They say these chains
Will never break
But they don't know You
Like we do
There is power in Your name

	Verse 2:
We've heard that
There is no way through
We've heard the tide
Will never change
They haven't seen
What You can do
There is power in Your name

	Tag:
So much power in Your name

	Chorus:
Move the immovable
Break the unbreakable
God we believe
God we believe for it
From the impossible
We'll see a miracle
God we believe
God we believe for it

	Verse 3:
We know that hope
Is never lost
For there is still
An empty grave
God we believe no matter what
There is power
In Your name

	Bridge:
You are the way
When there seems to be no way
We trust in You God
You have the final say

	Refrain:
You said I believe
You said it is done

	Tag:
God we believe for it      

      `,
  },

  {
    id: "27",
    title: "027- Made a way",
    lyrics: `Verse 1:
Standing here
Not knowing how
We'll get through this test
But holding onto faith
You know best
Nothing can catch You
By surprise
You've got this figured out
And You're watching us now

	Verse 2:
And when it looks as if we can't win
You wrap us in Your arms
And step in
And everything we need
You supply
You got this in control
And now we know that

	Chorus:
You made a way
When our backs were against the wall
And it looked as if it was over
You made a way
And we're standing here
Only because You made a way

	Interlude:
You made a way

	Verse 3:
Now we're here
Looking back on where we come from
Because of You and nothing we've done
To deserve the love and mercy
You've shown
But your grace was strong enough
To pick us up

	Bridge:
You move mountains
You cause walls to fall
With Your power
Perform miracles
There is nothing that's impossible
And we're standing here
Only because You made a way

	Tag:
And we're standing here
Only because You made a way

	Tag:
You made a way
You made a way

	Refrain 1:
Don't know how but You did it
Made a way
Don't know how but You did it
Made a way
Don't know how but You did it
Don't know how but You did it
Don't know how but You did it
Don't know how but You did it

	Refrain 2:
Don't know why but I'm grateful
Don't know why but I'm grateful
Don't know why but I'm grateful
Don't know why but I'm grateful
Don't know why but I'm grateful

	Tag:
And we're standing here
Only because You made
And we're standing here
Only because You made a way

	Vamp:
You move mountains
You move mountains
You move mountains
You move mountains

	Vamp:
You cause walls to fall
You cause walls to fall
You cause walls to fall
You cause walls to fall
You cause chains to break
You cause chains to break
You cause chains to break
You cause chains to break

	Vamp:
Giants fall
Giants fall
Giants fall
Giants fall
'Cause You move mountains
You move mountains

	Bridge:
'Cause You move mountains
You cause walls to fall
With Your power
With Your power
With Your power
With Your power
Perform miracles
Perform miracles

	Vamp:
You perform miracles
You perform miracles

    `,
  },

  {
    id: "28",
    title: "028- King of glory",
    lyrics: `Verse:
Yes the world will bow down
And say You are God
Ev'ry man will bow down
And say You are King

	Pre Chorus:
So let's start right now
Why would we wait

	Chorus:
King of glory fill this place
Just wanna be with You
Just wanna be with You	

      `,
  },

  {
    id: "29",
    title: "029- Great is your mercy",
    lyrics: `1.	
Great is Your mercy towards me
Your loving kindness towards me
Your tender mercies, I see
Day after day
Forever faithful towards me
And You're always providing for me
Great is Your mercy towards me
Great is Your grace, help me say it, help me say it

	2.
Great is Your mercy towards me
Your loving kindness towards me   
I can't do this without crying, towards me
But it's Your tender mercy I can see, whew!
Every day after day
A brand-new mercy every day
More of Your love every day
More of Your help every day
New determination every day
A new reason for living every day

	3.
A new dine of life every day
To show forth Your wonders every day
To stand in Your presence every day
To tell of all Your mercy every day after day
Help me sing, help me sing, singers sing it
Forever faithful towards me
And You're always providing for me 
Great is Your mercy towards me 
Great is Your grace 

      `,
  },

  {
    id: "30",
    title: "030- Every praise",
    lyrics: `Verse 1:
Every praise is to our God
Every word of worship
With one accord
Every praise
Every praise
Is to our God

	Verse 2:
Sing hallelujah
To our God
Glory hallelujah
Is due our God
Every praise
Every praise
Is to our God

	Chorus:
God my Savior
God my Healer
God my Deliverer
Yes He is
Yes He is

    `,
  },

  {
    id: "31",
    title: "031- Big God",
    lyrics: `Chorus:
I have a very Big God
A very Big God Oh
E no dey fall my hand O
He’s always on my side O
A very Big God.

	Verse:
See my life
Na so so wonder
If you know my God
He’s a miracle worker
He dey come through on a regular
Everything na jabarata
Him blessings no need formula
This my God
He’s a very Big God.

      `,
  },

  {
    id: "32",
    title: "032- Break every chain",
    lyrics: `Chorus 1:
There is power
In the name of Jesus
There is power
In the name of Jesus
There is power
In the name of Jesus
To break every chain
Break every chain
Break every chain
To break every chain
Break every chain
Break every chain

	Chorus 2:
There's an army rising up
There's an army rising up
There's an army rising up
To break every chain
Break every chain
Break every chain
To break every chain
Break every chain
Break every chain

	Bridge:
I hear the chains falling
I hear the chains falling

      `,
  },

  {
    id: "33",
    title: "033- This is the day",
    lyrics: `
This is the day (bis)
That the Lord has made (bis)
I will rejoice (Twice)
And be glad in it (bis)
This is the day
That the Lord has made
I will rejoice
And be glad in it
This is the day (bis)
That the Lord has made 

    `,
  },

  {
    id: "34",
    title: "034- Mary did you know ?",
    lyrics: `Verse 1:
Mary did you know
That your baby boy
Would one day
Walk on water
Mary did you know
That your baby boy
Would save our sons
And daughters

	Chorus 1:
Did you know
That your baby boy
Has come to make you new
And this Child that
You delivered will
Soon deliver you

	Verse 2:
Mary did you know
That your baby boy
Will give sight to a blind man
Mary did you know
That your baby boy
Will calm the storm with His hand

	Chorus 2:
Did you know
That your baby boy
Has walked where angels trod
And when you kiss Your little baby
You kissed the face of God
Mary did you know
    
  `,
  },

  {
    id: "35",
    title: "035- King of kings",
    lyrics: `Verse 1:
In the darkness we were waiting
Without hope without light
Till from Heaven You came running
There was mercy in Your eyes
To fulfill the law and prophets
To a virgin came the word
From a throne of endless glory
To a cradle in the dirt

	Chorus:
Praise the Father praise the Son
Praise the Spirit three in one
God of glory majesty
Praise forever to the King of Kings

	Verse 2:
To reveal the Kingdom coming
And to reconcile the lost
To redeem the whole creation
You did not despise the Cross
For even in Your suffering
You saw to the other side
Knowing this was our salvation
Jesus for our sake You died

      `,
  },

  {
    id: "36",
    title: "036- What a beautiful Name",
    lyrics: `Verse 1:
You were the Word at the beginning
One With God the Lord Most High
Your hidden glory in creation
Now revealed in You our Christ

	Chorus:
What a beautiful Name it is
What a beautiful Name it is
The Name of Jesus Christ my King
What a beautiful Name it is
Nothing compares to this
What a beautiful Name it is
The Name of Jesus

	Verse 2:
You didn't want Heaven without us
So Jesus You brought Heaven down
My sin was great
Your love was greater
What could separate us now

    `,
  },

  {
    id: "37",
    title: "037- Agnus Dei",
    lyrics: `Verse 1:
Alleluia Alleluia
For the Lord God Almighty reigns

	Pre Chorus:
Alleluia

	Chorus 1:
Holy holy
Are you Lord God Almighty
Worthy is the Lamb
Worthy is the Lamb

	Chorus 2:
You are holy holy
Are you Lord God Almighty
Worthy is the Lamb
Worthy is the Lamb

	Verse 2:
In the darkness we were waiting
Without hope without light
'Til from Heaven You came running
There was mercy in Your eyes
To fulfill the law and prophets
To a virgin came the Word
From a throne of endless glory
To a cradle in the dirt

	Chorus 3:
Praise the Father praise the Son
Praise the Spirit three in one
God of glory Majesty
Praise forever to the King of Kings

	Verse 3:
To reveal the Kingdom coming
And to reconcile the lost
To redeem the whole creation
You did not despise the Cross
For even in Your suffering
You saw to the other side
Knowing this was our salvation
Jesus for our sake You died

	Chorus 3:
Praise the Father praise the Son
Praise the Spirit three in one
God of glory Majesty
Praise forever to the King of Kings

	Verse 4:
And the morning that You rose
All of Heaven held its breath
Till that stone was moved for good
For the Lamb had conquered death
And the dead rose from their tombs
And the angels stood in awe
For the souls of all who'd come
To the Father are restored

	Verse 5:
And the Church of Christ was born
Then the Spirit lit the flame
Now this gospel truth of old
Shall not kneel shall not faint
By His blood and in His Name
In His freedom I am free
For the love of Jesus Christ
Who has resurrected me

      `,
  },

  {
    id: "38",
    title: "038- Who you say I am",
    lyrics: `Verse 1:
Who am I that the highest King
Would welcome me
I was lost but He brought me in
Oh His love for me

	Tag:
Oh His love for me

	Chorus 1:
Who the Son sets free oh is free indeed
I'm a child of God yes I am

	Verse 2:
Free at last He has ransomed me
His grace runs deep
While I was a slave to sin
Jesus died for me

	Tag:
Yes He died for me

	Chorus 1:
Who the Son sets free oh is free indeed
I'm a child of God yes I am

	Chorus 2:
In my Father's house
There's a place for me
I'm a child of God yes I am

	Bridge:
I am chosen not forsaken
I am who You say I am
You are for me not against me
I am who You say I am

	Tag:
I am who You say I am

      `,
  },

  {
    id: "39",
    title: "039- New Wine",
    lyrics: `Verse 1:
In the crushing in the pressing
You are making new wine

	Verse 2:
In the soil I now surrender
You are breaking new ground

	Pre Chorus:
So I yield to You
Into Your careful hand
When I trust You
I don't need to understand

	Chorus:
Make me Your vessel
Make me an offering
Make me whatever You want me to be
I came here with nothing
But all You have given me
Jesus bring new wine out of me

	Verse 3:
In the crushing in the pressing
You are making new wine

	Verse 4:
In the soil I now surrender
You are breaking new ground

	Tag:
You are breaking new ground

    `,
  },

  {
    id: "40",
    title: "040- I believe",
    lyrics: `Jehovah, You
I trust, In You
Oh Lord, Jehovah, You
I trust, In You
I believe, I believe

You are the God of miracles
You are the God of wonders
You are the God all powerful
I believe, I believe, I believe, 
I believe, I believe, I believe

So long, bye bye
So long, bye bye
Goodbye to my pain
And my sorrow
So long, bye bye

      `,
  },

  {
    id: "41",
    title: "041- You say",
    lyrics: `Verse 1:
I keep fighting voices in my mind
That say I’m not enough
Every single lie that tells me
I will never measure up

	Verse 2:
Am I more than just the sum
Of every high and every low
Remind me once again just who I am
Because I need to know

	Chorus:
You say I am loved
When I can’t feel a thing
You say I am strong
When I think I am weak
You say I am held
When I am falling short
When I don’t belong
Oh You say I am Yours

	Refrain:
And I believe oh I believe
What You say of me I believe

	Verse 3:
The only thing that matters now
Is everything You think of me
In You I find my worth
In You I find my identity      

      `,
  },

  {
    id: "42",
    title: "042- No longer slaves",
    lyrics: `Verse 1:
You unravel me with a melody
You surround me with a song
Of deliverance from my enemies
Till all my fears are gone

	Chorus:
I’m no longer a slave to fear
I am a child of God
I’m no longer a slave to fear
I am a child of God

	Verse 2:
From my mothers womb
You have chosen me
Love has called my name
I’ve been born again into Your family
Your blood flows through my veins

    `,
  },

  {
    id: "43",
    title: "043- I surrender",
    lyrics: `Verse 1:
Here I am down on my knees again
Surrendering all
Surrendering all
Find me here
Lord as You draw me near
Desperate for You
Desperate for You I surrender

	Verse 2:
Drench my soul
As mercy and grace unfold
I hunger and thirst
I hunger and thirst
With arms stretched wide
I know You hear my cry
Speak to me now
Speak to me now

	Chorus:
I surrender I surrender
I want to know You more
I want to know You more
I surrender I surrender
I want to know You more
I want to know You more

      `,
  },

  {
    id: "44",
    title: "044- Oceans",
    lyrics: `Verse 1:
You call me out upon the waters
The great unknown where feet may fail
And there I find You in the mystery
In oceans deep my faith will stand

	Chorus:
I will call upon Your Name
And keep my eyes above the waves
When oceans rise
My soul will rest in Your embrace
For I am Yours and You are mine

	Verse 2:
Your grace abounds in deepest waters
Your sovereign hand will be my guide
Where feet may fail
And fear surrounds me
You've never failed
And You won't start now

	Bridge:
Spirit lead me
Where my trust is without borders
Let me walk upon the waters
Wherever You would call me
Take me deeper
Than my feet could ever wander
And my faith will be made stronger
In the presence of my Savior

      `,
  },

  {
    id: "45",
    title: "045- Hosanna",
    lyrics: `Verse 1:
I see the King of Glory
Coming on the clouds with fire
The whole Earth shakes
The whole Earth shakes

	Verse 2:
I see His love and mercy
Washing over all our sin
The people sing
The people sing

	Chorus:
Hosanna Hosanna
Hosanna in the highest
Hosanna Hosanna
Hosanna in the highest

	Verse 3:
I see a generation
Rising up to take their place
With selfless faith
With selfless faith

	Verse 4:
I see a near revival
Stirring as we pray and seek
We're on our knees
We're on our knees

    `,
  },

  {
    id: "46",
    title: "046- Breathe",
    lyrics: `Verse 1:
This is the air I breathe
This is the air I breathe
Your holy presence
Living in me

	Verse 2:
This is my daily bread
This is my daily bread
Your very word
Spoken to me

	Chorus:
And I
I'm desparate for You
And I
I'm lost without You

	Verse 3:
This is the air I breathe
You are the air I breathe
You are the air I breathe
You are the air I breathe
Your holy presence
Living in me

	Verse 4:
You are my daily bread
You are my daily bread
Your very word
Spoken to me

      `,
  },

  {
    id: "47",
    title: "047- I give myself away",
    lyrics: `Verse 1:
I give myself away
I give myself away
So You can use me
I give myself away
I give myself away
So You can use me

	Chorus:
I give myself away
I give myself away
So You can use me

	Verse 2:
Here I am
Here I stand
Lord my life is in your hands
Lord I'm longing to see
Your desires revealed in me

	Verse 3:
Take my heart
Take my life
As a living sacrifice
All my dreams all my plans
Lord I place them
In your hands

	Chorus:
I give myself away
I give myself away
So You can use me

      `,
  },

  {
    id: "48",
    title: "048- Open the eyes of my heart",
    lyrics: `Verse 1:
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You

	Chorus:
To see You high and lifted up
Shinin' in the light of Your glory
Pour out Your power and love
As we sing holy holy holy

	Verse 3:
Open the eyes of my heart Lord
Open the eyes of my heart
I want to see You
I want to see You

	Bridge:
Holy holy holy
Holy holy holy
Holy holy holy
I want to see You

    `,
  },

  {
    id: "49",
    title: "049- Your Spirit",
    lyrics: `Chorus:
Not by might not by power
By Your spirit God
Send Your spirit God

	Verse 1:
You are the fire
We are the temple
You are the voice
We are Your song
You are our God
We are Your people
You are the light
We stand in awe

	Pre Chorus:
We stand in awe of You
We stand in awe of You

      `,
  },

  {
    id: "50",
    title: "050- Draw me close",
    lyrics: `Verse:
Draw me close to You
Never let me go
I lay it all down again
To hear You say
That I'm Your friend
You are my desire
No one else will do
'Cause nothing else
Can take Your place
To feel the warmth
Of Your embrace
Help me find the way
Bring me back to You

	Chorus:
You're all I want
You're all I've ever needed
You're all I want
Help me know
You are near

    `,
  },

  {
    id: "51",
    title: "051- Victory belongs to Jesus",
    lyrics: `Who will stand against the Lord?
No one can
No one will
Who will stand against the King
No one can
No one will

Oh oh oh
Oh oh oh
Victory belongs to Jesus
Victory belongs to Him
Oh oh oh
Oh oh oh
Victory belongs to Jesus
Victory belongs to Him

Say who can stand against the Lord?
No one can, ohh
No one will (Yeah)
Who can stand against the King (Nobody can)
No one can
No one will (Yeah ohh)	

      `,
  },

  {
    id: "52",
    title: "052- Lord, I give You my heart",
    lyrics: `Verse 1:
This is my desire
To honor You
Lord with all my heart
I worship You

	Verse 2:
All I have within me
I give You praise
All that I adore
Is in You

	Chorus:
Lord I give You my heart
I give You my soul
I live for You alone
And every breath that I take
Every moment I'm awake
Lord have Your way in me

      `,
  },

  {
    id: "53",
    title: "053- Wonderful, merciful Savior",
    lyrics: `Verse 1:
Wonderful, merciful Savior
Precious Redeemer and Friend
Who would have thought that a Lamb
Could rescue the souls of men
Oh, You rescue the souls of men
 
	Verse 2:
Counselor, Comforter, Keeper
Spirit we long to embrace
You offer hope when our hearts have
Hopelessly lost our way
Oh, we've hopelessly lost the way

	Chorus:
You are the One that we praise
You are the One we adore
You give the healing and grace
Our hearts always hunger for
Oh, our hearts always hunger for

	Verse 3:
Almighty, infinite Father
Faithfully loving Your own
Here in our weakness You find us
Falling before Your throne
Oh, we're falling before Your throne

    `,
  },

  {
    id: "54",
    title: "054- Shout to the Lord ",
    lyrics: `Verse 1:
My Jesus my Savior
Lord there is none like You
All of my days
I want to praise
The wonders of Your mighty love

	Verse 2:
My comfort my shelter
Tower of refuge and strength
Let every breath
All that I am
Never cease to worship You

	Chorus 1:
Shout to the Lord
All the earth let us sing
Power and majesty
Praise to the King
Mountains bow down
And the seas will roar
At the sound of Your name	

	Chorus 2:
I sing for joy
At the work of Your hands
Forever Iove You
Forever I'll stand
Nothing compares
To the promise I have in You

	Verse 3:
My Jesus my Savior
Lord there is none like You
All of my days
I want to praise
The wonders of Your mighty love

	Verse 4:
My comfort my shelter
Tower of refuge and strength
Let every breath
All that I am
Never cease to worship You

      `,
  },

  {
    id: "55",
    title: "055- Above all",
    lyrics: `Verse 1: 
Above all powers, above all kings
Above all nature and all created things
Above all wisdom and all the ways of man
You were here before the world began
 	
	Verse 2:
Above all kingdoms, above all thrones
Above all wonders the world has ever known
Above all wealth and treasures of the earth
There's no way to measure what You're worth
 
	Chorus:
Crucified, laid behind a stone
You lived to die, rejected and alone
Like a rose, trampled on the ground
You took the fall and thought of me
Above all

      `,
  },

  {
    id: "56",
    title: "056- How great is our God",
    lyrics: `Verse 1:
The splendor of a King
Clothed in majesty
Let all the earth rejoice
Let all the earth rejoice
He wraps Himself in light
And darkness tries to hide
Trembles at His voice
Trembles at His voice

	Chorus:
How great is our God sing with me
How great is our God and all will see
How great how great
Is our God

	Verse 2:
Age to age He stands
And time is in His hands
Beginning and the end
Beginning and the end
The Godhead three in one
Father Spirit Son
The Lion and the Lamb 

	Bridge:
Name above all names
Worthy of all praise
My heart will sing
How great is our God

    `,
  },

  {
    id: "57",
    title: "057- For your glory",
    lyrics: `Verse 1:
Lord if I
Find favor in Your sight
Lord please
Hear my hearts cry
I'm desperately waiting
To be where You are
I'll cross the hottest desert
I'll travel near or far

	Chorus:
For Your glory
I will do anything
Just to see You
To behold You as my King

	Verse 2:
Lord if I
Find favor in Your sight
Lord please
Hear my hearts cry
I'm desperately waiting
To be where You are
I'll cross the hottest desert
I'll travel near or far      

      `,
  },

  {
    id: "58",
    title: "058- Jesus I need You",
    lyrics: `Verse 1:
Hope be my anthem
Lord when the world
Has fallen quiet
You stand beside me
Give me a song in the night

	Chorus:
Jesus I need You
Every moment I need You
Hear now this grace
Bought heart sing out
Your praise forever

	Verse 2:
Beauty for ashes
You find the weak
And contrite heart
Shoulder its burdens
And carry it into the light

    `,
  },

  {
    id: "59",
    title: "059- At the cross",
    lyrics: `Verse 1:
Oh Lord You've searched me
You know my way
Even when I fail You
I know You love me

	Verse 2:
Your holy presence
Surrounding me
In every season
I know You love me

	Chorus:
At the cross I bow my knee
Where Your blood was shed for me
There's no greater love than this
You have overcome the grave
Glory fills the highest place
What can separate me now

	Verse 3:
You go before me
You shield my way
Your hand upholds me
And I know You love me

      `,
  },

  {
    id: "60",
    title: "060- You are Yahweh",
    lyrics: `You are the God
Who was, who is and is to come
Jesus, Jesus
And in You I trust
My life is in Your hands
Jesus
Jesus, You are the miracle working God

You are Yahweh, eh eh eh
You are Yahweh
You are Yahweh, eh eh eh
You are Yahweh

You are Yahweh
Alpha and Omega
You are Yahweh
Alpha and Omega

      `,
  },

  {
    id: "61",
    title: "061- Lord I lift Your name on high",
    lyrics: `Verse:
Lord I lift Your name on high
Lord I love to sing Your praises
I'm so glad You're in my life
I'm so glad You came to save us

	Chorus:
You came from Heaven to earth
To show the way
From the earth to the cross
My debt to pay
From the cross to the grave
From the grave to the sky
Lord I lift Your name on high

    `,
  },

  {
    id: "62",
    title: "062- Blessed assurance",
    lyrics: `Verse 1:
Blessed assurance Jesus is mine
O what a foretaste of glory divine
Heir of salvation purchase of God
Born of His Spirit washed in His blood

	Chorus:
This is my story this is my song
Praising my Savior all the day long
This is my story this is my song
Praising my Savior all the day long

	Verse 2:
Perfect submission all is at rest
I in my Savior am happy and blest
Watching and waiting looking above
Filled with His goodness lost in His love

      `,
  },

  {
    id: "63",
    title: "063- Near the cross",
    lyrics: `Verse 1:
Jesus keep me near the cross
There a precious fountain
Free to all a healing stream
Flows from Calvary's mountain

	Verse 2:
Near the cross a trembling soul
Love and mercy found me
There the Bright and Morning Star
Sheds its beams around me

	Chorus:
In the cross in the cross
Be my glory ever
Till my ransomed soul shall find
Rest beyond the river

	Verse 3:
Near the cross O Lamb of God
Bring its scenes before me
Help me walk from day to day
With its shadow o'er me

	Verse 4:
Near the cross I'll watch and wait
Hoping trusting ever
Till I reach the golden strand
Just beyond the river
     
      `,
  },

  {
    id: "64",
    title: "064- Create in me a clean heart",
    lyrics: `Verse:  
Create in me a clean heart, oh God
And renew a right spirit within me
Create in me a clean heart, oh God
And renew a right spirit within me

	Chorus:
Cast me not away from Thy presence, oh Lord
And take not Thy holy spirit from me
Restore unto me the joy of Thy salvation
And renew a right spirit within me

    `,
  },

  {
    id: "65",
    title: "065- Jesus paid it all",
    lyrics: `Verse 1:
I hear the Savior say
Thy strength indeed is small
Child of weakness watch and pray
Find in me thine all in all

	Chorus:
Jesus paid it all
All to Him I owe
Sin had left a crimson stain
He washed it white as snow

	Verse 2:
Lord now indeed I find
Thy power and thine alone
Can change the leper's spots
And melt the heart of stone

	Verse 3:
And when before the throne
I stand in Him complete
Jesus died my soul to save
My lips shall still repeat

      `,
  },

  {
    id: "66",
    title: "066- Nothing but the blood",
    lyrics: `Verse 1:
To the sinners ears it may sound strange
That freedom could be foundThrough death and pain
Why sinless perfection took the blame
But Hallelujah

	Verse 2:
For our pardon it would take a cross
Salvation paid for at the highest cost
And our redemption gained at Heaven's loss
Oh Hallelujah

	Chorus 1:
What can wash away my sin
Nothing but the blood
Nothing but the blood
What can make me whole again
Nothing but the blood

	Verse 3:
There is nothing strong enough to stand
Against what Love has done with outstretched hands
For now salvation flows for every man
Oh Hallelujah

	Verse 4:
And whosoever calls upon this Name
Will find their guilt and burdens rolled away
They'll rise up to their feet forever changed
Singing Hallelujah

	Verse 5:
It's only by Your blood
That we are made new
We are made new
Cause it reaches to the highest mountain

	Verse 6:
And it flows to the lowest valley
His blood that gives me strength
From day to day
It will never lose

    `,
  },

  {
    id: "67",
    title: "067- There is a fountain ",
    lyrics: `Verse 1:
There is a fountain filled with blood
Drawn from Emmanuel's veins
And sinners plunged beneath that flood
Lose all their guilty stains

	Chorus 1:
Lose all their guilty stains
Lose all their guilty stains
And sinners plunged beneath that flood
Lose all their guilty stains

	Verse 2:
The dying thief rejoiced to see
That fountain in his day
And there have I though vile as he
Wash all my sins away

	Chorus 2:
Wash all my sins away
Wash all my sins away
And there have I though vile as he
Wash all my sins away

	Verse 3:
Ever since by faith I saw the stream
Thy flowing wounds supply
Redeeming love has been my theme
And shall be till I die

	Chorus 3:
And shall be till I die
And shall be till I die
Redeeming love has been my theme
And shall be till I die

      `,
  },

  {
    id: "68",
    title: "068- To God be the glory",
    lyrics: `Verse 1:
To God be the glory
Great things He has done
So loved He the world
That He gave us His Son
Who yielded His life an atonement for sin
And opened the lifegate
That all may go in

	Chorus:
Praise the Lord praise the Lord
Let the Earth hear His voice
Praise the Lord praise the Lord
Let the people rejoice
O Come to the Father
Through Jesus the Son
And give Him the glory
Great things He has done

	Verse 2:
O perfect redemption the purchase of blood
To every believer the promise of God
The vilest offender who truly believes
That moment from Jesus a pardon receives

	Verse 3:
Great things He has taught us
Great things He has done
And great our rejoicing
Through Jesus the Son
But purer and higher
And greater will be
Our wonder our transport
When Jesus we see

      `,
  },

  {
    id: "69",
    title: "069- Trust and obey",
    lyrics: `Verse 1:
When we walk with the Lord in the light of His Word
What a glory He sheds on our way!
While we do His good will, He abides with us still
And with all who will trust and obey

	Chorus:
Trust and obey, for there's no other way
To be happy in Jesus, but to trust and obey

	Verse 2:
Not a shadow can rise, not a cloud in the skies
But His smile quickly drives it away
Not a doubt or a fear, not a sigh or a tear
Can abide while we trust and obey

    `,
  },

  {
    id: "70",
    title: "070- Sing alleluia",
    lyrics: `Chorus 1:
Sing alleluia to the Lord
Sing alleluia to the Lord

	Chorus 2:
Sing alleluia
Sing alleluia
Sing alleluia to the Lord

      `,
  },

  {
    id: "71",
    title: "071- The power of Your love",
    lyrics: `Verse 1:
Lord I come to You
Let my heart be changed renewed
Flowing from the grace
That I found in You
Lord I've come to know
The weaknesses I see in me
Will be stripped away
By the power of Your love

	Chorus:
Hold me close
Let Your love surround me
Bring me near
Draw me to Your side
And as I wait
I'll rise up like the eagle
And I will soar with You
Your Spirit leads me on
In the power of Your love

	Verse 2:
Lord unveil my eyes
Let me see You face to face
The knowledge of Your love
As You live in me
Lord renew my mind
As Your will unfolds in my life
In living every day
By the power of Your love
      
      `,
  },

  {
    id: "72",
    title: "072- My God is awesome",
    lyrics: `Verse 1:
My God is awesome
He can move mountains
Keep me in the valley
Hide me from the rain
My God is awesome
Heals me when I'm broken
Strength where I've been weakened
Forever he will reign
My God is

	Chorus:
Awesome
Awesome
Awesome
Awesome
My God is

	Verse 2:
My God is awesome
Savior of the whole world
Giver of salvation
By his stripes I am healed
My God is awesome
Today I am forgiven
His grace is why I'm living
Praise His holy name
My God is

	Bridge 1:
He's mighty he's mighty
He's mighty he's mighty
Awesome
Awesome
He's Holy he's holy
He's Holy he's holy
Awesome
Awesome

	Bridge 2:
He's great he's great
He's great he's great
Awesome
Awesome
He's mighty he's mighty
He's strong and mighty
Awesome
Awesome

	Bridge 3:
Deliverer deliverer
Deliverer deliverer
Awesome
Awesome
He's Holy he's holy
He's Holy he's holy
Awesome
Awesome

	Bridge 4:
Provider provider
Provider provider
Awesome awesome
Protector protector
Protector protector
Awesome awesome
My God is

	Verse 1:
My God is awesome
He can move mountains
Keep me in the valley
Hide me from the rain
My God is awesome
Heals me when I'm broken
Strength where I've been weakened
Forever he will reign

    `,
  },

  {
    id: "73",
    title: "073- My soul says yes",
    lyrics: `Chorus:
My soul says yes, says yes, says yes
My soul says yes, says yes to your will
My soul says yes, says yes, says yes
My soul says yes, says yes to your will

1.
Where you lead me, I will follow
When you call me, I will answer
Oh my Lord, please teach me how to know your ways
Where you lead me, I will follow
When you call me, I will answer
Oh my Lord, please teach me to know Your way

Whatever it takes
Whenever you want
What moment you choose
Whatever Your plan
Oh my Lord, let your will be done in me

So be my light, be my guide
Be my way, be my will
Oh my Lord, come lay your hands all over me

So be my light and be my guide
Be my way, be my will
Oh my Lord, come lay up...

My soul says yes, says yes, says yes
My soul says yes, says yes, says yes

Moya wangu bvuwa, bvuma, bvumaaa
Moya wangu bvuwa, bvuma, kunashe
My soul says yes, says yes, says yes
My soul says yes, says yes to your will
My soul says yes, says yes, says yes
My soul says yes, says yes to your will
My soul says yes, says yes, says yes
My soul says yes, says yes to your will

Whatever you say, whenever you want
Do it your way, do it your way
My soul says yes, 
My spirit says yes, my body says yes
Do it Your way, do it Your way
Speak to me, use me Lord
Send me Lord, say something to me, tell me something
My soul is ready, my body is ready
My soul is ready

Forever you say, whenever you want, 
What moment you choose
Please do it Your way, do it your way
Do it your way.
      `,
  },

  {
    id: "74",
    title: "074- See what the Lord has done",
    lyrics: `Chorus:
See what the Lord has done
See what the Lord has done
What we waited for has come to pass
See what the Lord has done

	Verse:
Whatever it takes
Whenever you want
What moment you choose
Whatever Your plan
Oh my Lord, let your will be done in me
So be my light, be my guide
Be my way, be my will
Oh my Lord, come lay your hands all over me

    `,
  },

  {
    id: "75",
    title: "075- Adonai",
    lyrics: `Verse:
Ah-ah-ah-ah-ah-ah-ah
(Ah-ah, Adonai) it′s a simple song
Sing Adonai eh
Ah-ah-ah-ah-ah-ah-ah
Ah-ah, Adonai
Eh, Adonai eh

Ah-ah-ah-ah-ah-ah-ah
Ah-ah, Adonai
Callin' Him, Adonai eh
Ah-ah-ah-ah-ah-ah-ah
Ah-ah, Adonai

	Chorus:
From the risin′ (from the risin' of the sun)
To the settin' of the same
Your name (Your name is to be hallowed), eh
Ah-ah, Adonai
From the risin′ (from the risin′ of the sun)
To the settin' of the same
Your name (Your name is to be hallowed)
Adonai eh (ah-ah, Adonai)

      `,
  },

  {
    id: "76",
    title: "076- My worship",
    lyrics: `Verse:
You Lord You are worthy
And no one
Can worship You for me
For all the things
You've done for me
And no one
Can worship You for me

	Chorus:
Here's my worship
All of my worship
Receive my worship
All of my worship

	Bridge 1:
I will not be silent
I will always worship You

	Bridge 2:
As long as I am breathing
I will always worship You

      `,
  },

  {
    id: "77",
    title: "077- I am a soldier",
    lyrics: `
I am a soldier
At the battle field
Waiting to hear the voice of my commander
Jesus if you call my name
I will answer a billion time

Who is calling my name oh
Jesus is calling my name oh
Jesus if you call my name
I will answer a billion time
Who is calling my name oh
Jesus is calling my name oh
Jesus if you call my name
I will answer a billion time
    
    `,
  },

  {
    id: "78",
    title: "078- Yeshua Hamashiach",
    lyrics: `
Yeshua Hamashiach
Lion of Judah
Agunechemba

      `,
  },

  {
    id: "79",
    title: "079- Yahweh will manifest Himself",
    lyrics: `
Yahweh, Rapha, Elohim
Shaddai, Jireh, Adonai
Will manifest Himself

Your glory is tangible in this place
Lord, you're doing something great
Awaken supernatural faith

      `,
  },

  {
    id: "80",
    title: "080- Holy forever",
    lyrics: `Verse 1:
A thousand generations
Falling down in worship
To sing the song of
Ages to the Lamb
And all who've gone before us
And all who will believe
Will sing the song of
Ages to the Lamb

	Pre Chorus 1:
Your name is the highest
Your name is the greatest
Your name stands above them all

	Pre Chorus 2:
All thrones and dominions
All powers and positions
Your name stands above them all

	Chorus 1:
And the angels cry holy
All creation cries holy
You are lifted high holy
Holy forever

	Verse 2:
If you've been forgiven
And if you've been redeemed
Sing the song
Forever to the Lamb
If you walk in freedom
And if you bear His name
Sing the song
Forever to the Lamb

_CeCe Winans_

    `,
  },

  {
    id: "81",
    title: "081- When the oceans rise",
    lyrics: `Verse:
Hide me now
Under Your wings
Cover me
Within Your mighty hand

	Chorus:
When the oceans rise
And the thunders roar
I Will soar with You
Above the storm
Father You are King
Over the flood
And I will be still
And know You are God
      
      `,
  },

  {
    id: "82",
    title: "082- Yeshua",
    lyrics: `
My beloved is the most beautiful
Among thousands and thousands
My beloved is the most beautiful
Among thousands and thousands

Yeshua ahh ah ah, ahh ah ah
Yeshua ahh ah ah, ahh ah ah

    `,
  },

  {
    id: "83",
    title: "083- Welcome Holy Spirit",
    lyrics: `Verse :
Welcome Holy Spirit 
Be here with Your presence
Fill me with Your power
Live inside of me
Welcome Holy Spirit
 Be here with Your presence
Fill me with Your power
Live inside of me
 
	Chorus:
You're the living water 
Never drying fountain
Comforter and Counsellor
Take complete control

      `,
  },

  {
    id: "84",
    title: "084- Because He lives",
    lyrics: `Verse 1:
God sent His Son
They called Him Jesus
He came to love
Heal and forgive
He bled and died
To buy my pardon
An empty grave is
There to prove my Savior lives

	Chorus:
Because He lives
I can face tomorrow
Because He lives
All fear is gone
Because I know
He holds the future
And life is worth the living
Just because He lives

	Verse 2:
And then one day
I'll cross the river
I'll fight life's final war with pain
And then as death
Gives way to vict'ry
I'll see the lights of glory and
I'll know He lives

      `,
  },

  {
    id: "85",
    title: "085- He knows my name",
    lyrics: `Verse 1:
I have a Maker
He formed my heart
Before even time began
My life was in His hands

	Chorus:
He knows my name
He knows
My every thought
He sees each tear that falls
And He hears me when I call

	Verse 2:
I have a Father
He calls me His own
He'll never leave me
No matter where I go

    `,
  },

  {
    id: "86",
    title: "086- Jehovah is Your Name",
    lyrics: `
Jehovah is Your Name
Jehovah is Your Name
Jehovah is Your Name
Jehovah is Your Name

Mighty warrior
Great in battle
Jehovah is Your Name

      `,
  },

  {
    id: "87",
    title: "087- Sanctuary",
    lyrics: `    
Lord prepare me
To be a sanctuary
Pure and holy
Tried and true
And with thanksgiving
I’ll be a living
Sanctuary
For You

     `,
  },

  {
    id: "88",
    title: "088- Let Your living water flow",
    lyrics: `Verse 1:
Let Your living water flow over my soul
Let Your Holy Spirit come and take control
Of every situation that has troubled my mind
All my cares and burdens on to You, I roll

	Chorus:
Jesus, Jesus, Jesus
Sing to the Father
Father, Father, Father
Holy Spirit
Spirit, Spirit, Spirit

	Verse 2:
Come now Holy Spirit and take control
Hold me in Your loving arms and make me whole
Wipe away all doubt and fear and take my pride
Draw me to Your love and keep me by Your side

	Chorus:
Jesus, Jesus, Jesus
Pray to the Father
Father, Father, Father
Spirit, Spirit, Spirit

	Verse 3:
Give your life to Jesus, let Him fill your soul
Let Him take you in His arms and make you whole
As you give your life to Him, He'll set you free
You will live and reign with Him eternally

    `,
  },

  {
    id: "89",
    title: "089- God is here",
    lyrics: `Verse:
There is a sweet anointing in this sanctuary
There is a stillness in the atmosphere;
Come and lay down the burdens you have carried
For in the sanctuary, God is here

	Chorus:
He is here
He is here to break the yoke
And lift the heavy burden
He is here
He is here to heal the hopeless heart
And bless the broken
Oh come and lay down
The burdens you have carried
For in this sanctuary, God is here

      `,
  },

  {
    id: "90",
    title: "090- You are great",
    lyrics: `Verse 1:    
'Cause You deserve the glory and the honor
I lift my hands in worship and I bless Your Holy name
You deserve the glory
All the honor, yeah-yeah
I lift my hands in worship and I bless Your Holy name

	Chorus:
'Cause You are great
You do miracles, so great
There is no one else like You (nobody else like You, Lord)
There is no one else like You
You are great
You do miracles, so great
There is no one else like You
There is no one else

    `,
  },

  {
    id: "91",
    title: "091- All Heaven declares",
    lyrics: `Verse 1:	
All Heaven declares
The glory of the risen Lord
Who can compare
With the beauty of the Lord
 
	Chorus:
Forever He will be
The lamb upon the throne
I gladly bow to Thee
And worship Him alone

	Verse 2:
I will proclaim
The glory of the risen Lord
Who once was slain
To reconcile man to God

	Chorus:
Forever You will be
The lamb upon the throne
I gladly bow to Thee
And worship You alone

      `,
  },

  {
    id: "92",
    title: "092- Mighty Name of Jesus",
    lyrics: `Verse 1:
I pray into the atmosphere
Spirit of God You’re here
You have all authority
I pray over my heart and mind
I am healed by Your stripes
Your blood declares that I am free

	Chorus 1:
In the mighty name of Jesus
I pray
Calling on the power of heaven
I proclaim
Every weapon formed against me
Must break
In the mighty name of Jesus

	Verse 2:
I draw a permanent boundary line
The enemy has no rights
To come near my family
No scheme could ever undo God's plans
No matter the circumstance
The cross has sealed my destiny

	Chorus 2:
In the mighty name of Jesus
I know
All the power of fear and darkness
Must go
'Cause every key to every victory
I hold
In the mighty name of Jesus

	Bridge:
I will not fear I will not fear
When the enemy comes near
On the doorframe of my life
Is the blood of Jesus Christ
I will not fear I will not fear
There’s an army of angels here
I’m protected on all sides
By the blood of Jesus Christ

	Refrain:
It's in the mighty of Name of Jesus
It's in the mighty of Name of Jesus

      `,
  },

  {
    id: "93",
    title: "093- More love more power",
    lyrics: `Verse:
More love more power
More of You in my life

	Chorus:
I will worship You
With all of my heart
I will worship You
With all of my mind
I will worship You
With all of my strength
For You are my Lord

    `,
  },

  {
    id: "94",
    title: "094- Praise",
    lyrics: `Chorus:
Let everything
That has breath
Praise the Lord
Praise the Lord

	Verse 1:
I’ll praise in the valley
Praise on the mountain
I’ll praise when I’m sure
Praise when I’m doubting

	Verse 2:
I’ll praise when outnumbered
Praise when surrounded
Cause praise is the waters
My enemies drown in

	Pre Chorus:
As long as I’m breathing
I’ve got a reason to

	Chorus 1:
Praise the Lord oh my soul
Praise the Lord oh my soul

	Verse 3:
I’ll praise when I feel it
I’ll praise when I don’t
I’ll praise cause I know
You’re still in control

	Verse 4:
My praise is a weapon
It’s more than a sound
My praise is the shout
That brings Jericho down

	Chorus 2:
I won’t be quiet
My God is alive
How could I keep it inside
Praise the Lord my soul

	Bridge:
I’ll praise cause You’re sovereign
Praise cause You reign
Praise cause You rose
And defeated the grave
I’ll praise cause You’re faithful
Praise cause You’re true
Praise cause there’s nobody
Greater than You

      `,
  },

  {
    id: "95",
    title: "095- Omemma",
    lyrics: `Chorus 1:   
OMEMMA
Always on time
You can’t do no wrong
OMEMMA
Leave the ninety nine
Always for the one

	Verse:
I know He loves me
I know He cares
Whenever I call
He always is right there
When I’m in trouble
He is my help
I know no fear
I know He’ll be right there

	Chorus 2:
Ayyyy
He really does
What He says He will do
My God really moves
Ayyyy
Why would I doubt
When He always comes thru
My God really moves

	Bridge:
You leave the ninety nine
Always for the one
You leave the ninety nine
Always for the one

      `,
  },

  {
    id: "96",
    title: "096- Joy overflow",
    lyrics: `Chorus:
I got joy, joy, joy
Joy, joy, joy, joy
Joy overflow, in my life! (Repeat)

	Verse 1:
I come from the kingdom, a beautiful kingdom
Where we laugh, and laugh, joy overflow
There is no sorrow, and there’s no weeping
We dance, and dance, and dance, joy overflow

	Verse 2:
Joy like a river, peace like a fountain
My life is greater, greater, greater: joy overflow
I’m the heritage of God, great things are spoken over me
My life is greater, greater, greater; joy overflow

    `,
  },
  {
    id: "97",
    title: "097- Fear is not my feature",
    lyrics: `Verse 1:
Let Him turn it
In your favor
Watch Him work it
For your good
He's not done
With what He's started
He's not done
Until it's good

	Chorus 1:
Hello peace hello joy
Hello love
Hello strength hello hope
It's a new horizon

	Verse 2:
If you're ready
For a breakthrough
Open up and just receive
'Cause what He's pouring out
Is nothing nothing
You've ever seen
You've ever seen

	Bridge 1:
Fear is not my future
You are
Sickness is not my story
You are You are

	Bridge 2:
Heartbreak's not my home
You are You are
Death is not the end
You are You are

	Chorus 2:
Goodbye fear goodbye guilt
Goodbye shame
Goodbye pain goodbye grave
It's a new horizon

	Outro:
Let the light in
Let the light on in
It's a new horizon
Let the light in
Let the light on in

    `,
  },

  {
    id: "98",
    title: "098- Each step I take",
    lyrics: `1.
Each step I take my Saviour goes before me,
And with His loving hand He leads the way,
And with each breath I whisper “I adore Thee;”
Oh, what joy to walk with Him each day.

	Chorus:
Each step I take I know that He will guide me;
To higher ground He ever leads me on.
Until some day the last step will be taken.
Each step I take just leads me closer home.

	2.
At times I feel my faith begin to waver,
When up ahead I see a chasm wide.
It’s then I turn and look up to my Saviour,
I am strong when He is by my side.

	3.
I trust in God, no matter come what may,
For life eternal in His hand,
He holds the key that opens up the way,
That will lead me to the promised land

      `,
  },

  {
    id: "99",
    title: "099- I have decided",
    lyrics: `1.
I have	decided to follow Jesus
I have	decided to follow Jesus.	
I have	decided to follow Jesus.		 
I have	decided to follow Jesus. 	
No turning back, no turning back 

Oui j’ai décidé	de suivre Jésus.
Oui  j’ai décidé de suivre Jésus.
Oui j’ai décidé	de suivre Jésus.
Oui pour toujours, oui  pour toujours.
      
      `,
  },
  {
    id: "100",
    title: "100- From the rising of the sun",
    lyrics: `1.
From the rising of the sun
To the settings of the same
Your name is to be hallowed
Ah-ah, Adonai
From the rising of the sun
To the settings of the same
Your name  is to be hallowed
Ah-ah, Adonai`,
  },
  {
    id: "101",
    title: "101- God is able to do",
    lyrics: `
Exceedingly, Abundantly
Above all, all you could ask or think
According to, the power
That worketh in you, you...

God is able to do just what he said he would do
He's gonna fulfill every promise to you
Don't give up on god, cause he won't give up on you
He's able

God is able to do just what he said he would do
He's gonna fulfill every promise to you
Don't give up on God, cause He won't give up on you
He's able
He's able

Oh, oh oh oh, oh oh oh
He's able
`,
  },
  {
    id: "102",
    title: "102- Firm foundation",
    lyrics: `Chorus 1:
Christ is my firm foundation
The rock on which I stand
When everything around me is shaken
I've never been more glad
That I put my faith in Jesus
'Cause He's never let me down
He's faithful through generations
So why would He fail now
He won't

Chorus 2:
I've still got joy in chaos
I've got peace that makes no sense
I won't be going under
I'm not held by my own strength
'Cause I've built my life on Jesus
He's never let me down
He's faithful in every season
So why would He fail now

Refrain:
He won't, He won't
He won't fail, He won't fail


Bridge:
Rain came and wind blew
But my house was built on You
I'm safe with You
I'm going to make it through

Tag
I'm going to make it through
'Cause I'm standing strong on You

Tag
I'm going to make it through
Cause my hous2e is built on You

`,
  },
  {
    id: "103",
    title: "103- Who is like You Lord",
    lyrics: `Verse 1:
Who is like You Lord in all the earth ?
Matchless love and beauty, endless worth
Nothing in this world can satisfy
Jesus You're the cup that won't run dry

Chorus:
Your presence is heaven to me
Oh God, Your presence is heaven to me

Verse 2:
Treasure of my heart and of my soul
In my weakness you are merciful
Redeemer of my past and present wrongs
Holder of my future days to come

Your presence is heaven to me
Your presence is heaven to me
God, Your presence is heaven to me
There's nothing like Your presence
Your presence is heaven to me

So we sing
Oh Jesus, oh Jesus
Your presence is heaven to me
Oh Jesus, oh Jesus
Your presence is heaven to me

Verse 3:
All my days on earth I will await
The moment that I see You face to face
Nothing in this world can satisfy
Jesus You're the cup that won't run dry

_Israel Houghton_
`,
  },
  {
    id: "104",
    title: "104- You deserve it",
    lyrics: `
My hallelujah belongs to You
My hallelujah belongs to You
My hallelujah belongs to You
My hallelujah belongs to You

You deserve it
You deserve it
You deserve it
You deserve it

My hallelujah belongs to You
My hallelujah belongs to You
My hallelujah belongs to You

(Then we simply say)
You deserve it
You deserve it
You deserve it 
You deserve it 
You deserve it

All of the glory belongs to You
All of the glory belongs to You
All of the glory belongs to You
All of the glory belongs to You

_Song by J.J. Hairston_`,
  },
  {
    id: "105",
    title: "105- God on the mountain",
    lyrics: `1.
Life is easy, when you're up on the mountain
And you've got peace of mind, like you've never known
But things change, when you're down in the valley
Don't lose faith, for you're never alone

Chorus:
For the God on the mountain, 
Is still God in the valley
When things go wrong, He'll make them right
And the God of the good times, 
Is still God in the bad times
The God of the day is still God in the night

2.
You talk of faith when you're up on the mountain
But talk comes so easy when life's at it's best
Now it's down in the valleys, of trials and temptations
That's where your faith, is really put to the test

_Song by Bill & Gloria Gaither_
`,
  },
  {
    id: "106",
    title: "106- Come Jesus come",
    lyrics: `1.
Sometimes I fall to my knees and pray
Come Jesus come
Let today be the day
Sometimes I feel like I’m gonna break
But I’m holding on
To a hope that won’t fade

Chorus:
Come Jesus come
We’ve been waiting so long
For the day You return 
To heal every hurt
And right every wrong
We need You right now
Come and turn this around
Deep down I know
This world isn’t home
Come Jesus come

2.
There’ll be no war
And there’ll be no chains
When Jesus comes
Let today be the day
He’ll come for the weak
And the strong just the same
And all will believe 
In the power of His name

3.
One day He’ll come
And we’ll stand face to face
Come and lay it all down
Cause it might be today
The time is right now
There’s no need to wait
Your past will be wash by rivers of grace

Chorus:
Come Jesus come
We’ve been waiting so long
For the day You return 
To heal every hurt
And right every wrong
We need You right now
Come and turn this around (turn this around)
Deep down I know
This world isn’t home
Come Jesus come
Come Jesus come
Come Jesus come

_CeCe Winans_

`,
  },
  {
    id: "107",
    title: "It was my cross",
    lyrics: `1.
It was my cross You bore
So I could live in the freedom You died for
And now my life is Yours
And I will sing of Your goodness forevermore

Chorus:
Worthy is Your name, Jesus
You deserve the praise
Worthy is Your name
Worthy is Your name, Jesus
You deserve the praise
Worthy is Your name
2
2.
And now my shame is gone
I stand amazed in Your love undeniable
Your grace goes on and on
And I will sing of Your goodness forevermore

Bridge:
Be exalted now in the heavens
As Your glory fills this place
You alone deserve our praise
You're the name above all names

_CeCe Winans_

`,
  },
  {
    id: "108",
    title: "108- I have faced",
    lyrics: `1.
I have faced many mountains
Been through trials
And shed many tears
When I look around and it all seems hopeless
I won’t fear
I won’t fear

I’ll be still and know
Know You are God
You’re right here with me
Through all my troubles
I’ll be still and know
Know You are God
You are the light and rest for my soul
You’re God and I’ll be still and know

2.
When my heart feels anxious
It’s Your voice that calms every storm
When I find myself crying all through the night
You remind me
You remind me

To be still and know
Know You are God
You’re right here with me
Through all my troubles
I’ll be still and know
Know You are God
You are the light and rest for my soul
You’re God and I’ll be still and know

You’re a well
That never runs dry
No valley too deep
No mountain too high
You are my strength
And You are my guide
Lord You’re in control
So I’ll be still and know

Know You are God
You’re right here with me
Through all my troubles
I’ll be still and know
Know You are God
You are the light and rest for my soul
You’re God and I’ll be still and know

_Cece Winans_
`,
  },
  {
    id: "109",
    title: "109- Where Feet May Fail",
    lyrics: `1.
  You call me out upon the waters
The great unknown where feet may fail
And there I find You in the mystery
In oceans deep my faith will stand

CHORUS:
I will call upon Your Name
And keep my eyes above the waves
When oceans rise
My soul will rest in Your embrace
For I am Yours and You are mine

2.
Your grace abounds in deepest waters
Your sovereign hand will be my guide
Where feet may fail and fear surrounds me
You've never failed and You won't start now

BRIDGE:
Spirit lead me where my trust is without borders
Let me walk upon the waters
Wherever You would call me
Take me deeper than my feet could ever wander
And my faith will be made stronger
In the presence of my Saviour

LAST CHORUS:
I will call upon Your Name
Keep my eyes above the waves
My soul will rest in Your embrace
I am Yours and You are mine`,
  },
  {
    id: "110",
    title: "110- Excess love",
    lyrics: `1.
Your love is kind
Your love is patient
You fill my heart
With so much peace and joy
You’re amazing
You make my life feel brand new
You’re amazing
You make my life feel brand new

Chorus:
Jesus you love me too much o
Too much o too much o excess Love o
Jesus you love me too much o
Too much o too much o excess love o
Jesus you love me too much o
Too much o, too much o excess love o
Jesus you love me too much oh oh oh oh
Too much o too much o excess love o

_ Mercy Chinwo_
`,
  },
  {
    id: "111",
    title: "111- MIGHTY NAME OF JESUS",
    lyrics: `Verse 1.
I pray into the atmosphere
Spirit of God You’re here
You have all authority
I pray over my heart and mind
I am healed by Your stripes
Your blood declares that I am free

CHORUS 1:
In the mighty name of Jesus, I pray
Calling on the power of heaven, I proclaim
Every weapon formed against me, must break
In the mighty name of Jesus

VERSE 2.
I draw a permanent boundary line
The enemy has no rights
To come near my family
No scheme could ever undo God's plans
No matter the circumstance
The cross has sealed my destiny

CHORUS 1
In the mighty name of Jesus, I pray
Calling on the power of heaven, I proclaim
Every weapon formed against me, must break
In the mighty name of Jesus

CHORUS 2
In the mighty name of Jesus, I know
All the power of fear and darkness, must go
'Cause every key to every victory I hold
In the mighty name of Jesus

BRIDGE
I will not fear, I will not fear
When the enemy comes near
On the doorframe of my life
Is the blood of Jesus Christ

I will not fear, I will not fear
There’s an army of angels here
I’m protected on all sides
By the blood of Jesus Christ`,
  },
  {
    id: "112",
    title: "112- So wonderful",
    lyrics: `1.
    All the glory to You (x2)
    Only You are holy
    Only You are worthy, Yeshua
    Alleluia, amen (x2)
    
    
    You are so wonderful (x2)
    There is no one like You
    You are so wonderful

    
    Ala ou gran Senyè (x2)
    Tout sa w fè se mèvèy
    Ala ou gran Senyè2

    Ou san parèy Senyè (x2)
    Tout sa w fè se mèvèy
    Ou san parèy Senyè

    Pa gen tankou w Senyè (x2)
    Tout sa w fè se mèvèy
    Pa gen tankou w Senyè

    Wi, Ou fidèl Senyè (x2)
    Tout sa w fè se mèvèy
    Wi, Ou fidèl Senyè (x2)


        _Delly Benson_
    `,
  },
  {
    id: "113",
    title: "113- Omemma",
    lyrics: `Verse 1:
I know He loves me, i know He cares
Whenever I call, he always is right there
When I’m in trouble, he is my help
I know no fear, I know He’ll be right there

Chorus:
AYYYY
He really does what He says He will do
My God really moves
AYYYY
WHY WOULD I DOUBT WHEN HE ALWAYS COME THRU
MY GOD REALLY MOVES

TAG
VAMP
OMEMMA
Always on time
You can’t do no wrong
OMEMMA
Leave the ninety nine
Always for the one


_Chandler Moore and Tim Godfrey_`,
  },
  {
    id: "114",
    title: "114- Oh Jesus You are the King",
    lyrics: `1.
Oh Jesus You are the King
You are there for me 
Oh Jesus you are my only help
You told me 
Don't be afraid
You are here for me 
Oh Jesus by your Spirit 
Conquer.

2.
Even though,  I am in pain
Or in sorrow 
My heart sings always of  
Yo2ur sweetness! 
You told me there is a time
To dry all tears
To heal and to give me life..

 3.
Oh Jesus! You have come 
Into this world 
Oh Jesus you have come 
To save me 
By your Blood you have washed 
My iniquities
Oh Jesus we want to worship you!

`,
  },
  {
    id: "115",
    title: "115- Majesty",
    lyrics: `1.
Here I am, humbled by Your Majesty
Covered by Your grace so free
Here I am, knowing I'm a sinful man
Covered by the blood of the Lamb
Now I've found the greatest love of all is mine
Since You laid down Your life
Your greatest sacrifice

Chorus:
Majesty, Majesty
Your grace has found me just as I am
Empty-handed but alive in Your hands
Majesty, Majesty
Forever I am changed by Your love
In the presence of Your Majesty

2.
Here I am humbled by the love that You give
Forgiven so that I can forgive
So here I stand
Knowing that I'm Your desire
Sanctified by glory and fire
And now I've found the greatest love of all is mine
Since You laid down Your life
The greatest sacrifice
`,
  },
   {
    id: "116",
    title: "116- Oshimiri Atata",
    lyrics: `1.
Oshimiri Atata
Oshimiri Atata
Oshimiri Atata
River that never runs dry 

We draw we draw 
From the river of life (joy, strength)
We draw we draw
From the river that never runs dry 

No matter how much we draw
You can never ever run dry
No matter how much we draw
You can never ever run dry

We draw we draw 
From the river of life (joy, strength)
We draw we draw
From the river that never runs dry 

_FAITH CAPTAIN_
`
},
];
export default englishSongs;
