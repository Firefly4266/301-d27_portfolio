'use strict';

var rawData = [ 
  {
    date:             '01-05-16',
    category:         'people',
    city:             'Providence, RI',
    inspiration:      'enjoying the city',
    body:             '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec <b>Lorem</b> odio. Praesent libero. <b>Lorem</b> Sed cursus <i>Lorem</i> ante <i>Lorem</i> dapibus diam.<img class="pull-left" src="images/DSC_0013.JPG" alt="playful_baloons"></p><p> Sed <i>Lorem</i> nisi. Nulla quis <b>Praesent</b> sem at nibh elementum <i>Sed</i> imperdiet. Duis <b>quis</b> sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. <b>imperdiet.</b> Mauris massa.</p><p> Vestibulum lacinia arcu eget nulla. Class aptent <b>augue</b> taciti <b>lacinia</b> sociosqu ad litora  torquent per <b>nulla.</b> conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <i>lacinia</i> libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. <img class="pull-right" src="images/hitching.JPG" alt="hitching_a_ride">Maecenas mattis. Sed convallis tristique <i>Pellentesque</i> sem. Proin ut ligula vel nunc egestas <i>dolor.</i> porttitor. Morbi lectus risus, iaculis <b>sem.</b> vel, suscipit quis, luctus non, massa. Fusce ac <b>porttitor.</b> turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, <i>nibh.</i> per <i>in,</i> inceptos himenaeos. Nam nec ante. Sed lacinia, <b>litora</b> urna <i>aptent</i> non tincidunt mattis, tortor neque adipiscin.</p>',
    author: ''
  },
  {
    date:             '01-13-16',
    category:         'art',
    city:             'Providence, RI',
    inspiration:      'Out and about',
    body:             '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed <b>elit.</b> cursus ante <b>Integer</b> dapibus diam. <i>Lorem</i> Sed nisi. Nulla <b>cursus</b> quis sem at nibh elementum imperdiet. Duis <i>cursus</i> sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue <img class="pull-left" src="images/DSC_0094.JPG" alt="homeless"> semper porta. Mauris massa. Vestibulum <i>quis</i> lacinia arcu eget nulla. <i>at</i> Class aptent <b>augue</b> taciti sociosqu ad litora torquent per conubia nostra, <b>taciti</b> per inceptos himenaeos.<img class="pull-right" src="images/Hell.JPG" alt="been_to_hell"> Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. <i>conubia</i> Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc <b>Sed</b> egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>vel</b> luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla <b>turpis</b> metus metus, ullamcorper vel, tincidunt sed, euismod <b>metus</b> in, nibh. Quisque volutpat condimentum velit. Class <i>quis</i> aptent taciti <i>metus</i> sociosqu ad litora torquent per conubia nostra, per <b>sociosqu</b> inceptos himenaeos. Nam nec ante. Sed lacinia, <i>litora</i> urna <i>nibh.</i> non tincidunt mattis, tortor neque adipiscin.</p>',
    author: ''
  },
  {
    date:             '04-18-16',
    category:         'art',
    city:             'Athens, Greece',
    inspiration:      'admiring history',
    body:             '<p>Λορεμ ιπσθμ δολορ σιτ αμετ, ατ προ αεqθε μινιμθμ, σεδ νε παρτιενδο vολθπταρια, δεcορε περιcθλισ σιγνιφερθμqθε ιθσ ει. Ερρεμ μελιορε vθλπθτατε προ ετ. Vισ λαορεετ ελειφενδ αππελλαντθρ εα, ναμ φαβθλασ δετραcτο δεμοcριτθμ τε. Cθ θσθ vολθμθσ πλαcερατ ρεcτεqθε, θσθ βλανδιτ μεδιοcριτατεμ αν, ηασ τιμεαμ cετεροσ cθ. Μει εα jθστο δολορθμ, ει qθο ιλλθμ αθδιαμ, vθλπθτατε αδιπισcινγ αν μελ.<img class="pull-right" src="images/DSC_0434.JPG" alt="beautiful_night_in_Athens"> Qθεμ ειθσ ιθσ αν, σεδ δισcερε σενσεριτ δεφινιτιονεμ εθ.Ιθσ ηαρθμ τεμποριβθσ vιτθπερατοριβθσ αν, εα νεc τολλιτ προβατθσ. Νε προ σαεπε νοστερ, ερρεμ γραεcε λαβορε εαμ νο. Νοστρθδ βονορθμ λθπτατθμ vισ ιδ, μεα νε γραεcο επιcθρι απειριαν. Αδ ινσολενσ δετερρθισσετ ηασ, μεα σαλε δεcορε δενιqθε ει. Μαγνα vιρισ ομνεσ cθ προ, ατ μελ σολθτα ειρμοδ.Λατινε τριτανι ιδ vιμ, σcαεvολα προδεσσετ μει τε. Αλια αλτερθμ ετ vελ, ελιτ νοβισ γραεcισ ατ vιξ. Ει νθμqθαμ ρεπθδιαρε ιντελλεγατ qθι. Δθο vερι μινιμ ιντελλεγεβατ αδ. Μεα εα ινδοcτθμ δισσεντιθντ, cθμ τε αλιqθαμ cομπλεcτιτθρ, cθ μθcιθσ μεδιοcρεμ εθμ.Νο θλλθμ cοπιοσαε εθμ, νε σιτ ερατ νοβισ μοδερατιθσ. Σιτ εθ θτιναμ αccθμσαν μεδιοcρεμ. Cηορο ιθδιcαβιτ δεφινιεβασ εα εστ, πρι ει θταμθρ τραcτατοσ αργθμεντθμ. Qθι ετ γλοριατθρ νεγλεγεντθρ, πρι ταντασ πονδερθμ αντιοπαμ εξ, θβιqθε προβατθσ μεα αδ.<img class="pull-left" src="images/DSC_0178.JPG" alt="ghost_of_grecians_past">Λορεμ ιπσθμ δολορ σιτ αμετ, ει νοβισ εθισμοδ cορρθμπιτ θσθ, θσθ διcιτ νθλλαμ vολθπτατθμ αν. Δομινγ νθσqθαμ ρεcτεqθε ιθσ ετ. Προ ατqθι φεθγαιτ δελεcτθσ νο, qθο θτ μαλορθμ αλτερθμ ρεcτεqθε. Μθνδι ταντασ ταμqθαμ cθ εστ, ιλλθμ μινιμ θρβανιτασ εστ ατ, ταντασ ιγνοτα qθι θτ.Εθμ νο αεqθε vιταε ρεcτεqθε, εξ εοσ εραντ vενιαμ. Ιθvαρετ ρεπριμιqθε προ αν, cθ θνθμ μεδιοcρεμ cθμ. Σεδ ει διcθντ μελιορε ομιτταντθρ, νε ιπσθμ φθγιτ εοσ, εξ εοσ ιθδιcο ιντεγρε δισcερε. Εαμ ιν οδιο εvερτιτθρ προδεσσετ, vιδε εξπετενδα ηονεστατισ ετ εοσ. Ρεqθε αφφερτ σολεατ νε μει.<p>Ιγνοτα ρεcθσαβο δελιcατα θσθ νο. Δολορεμ ινστρθcτιορ ατ σιτ. Αν αλιqθαμ μαιορθμ δεσερθντ εαμ, cθ δεcορε δεσερθντ ηισ, εθ αλιενθμ εθριπιδισ αδιπισcινγ μεα. Προ ει αλιqθαμ προβατθσ, εξ δομινγ ανιμαλ δετραξιτ νεc. Ηασ ενιμ νιβη αλιqθανδο cθ, αν ιθδιcο νονθμυ ποστθλαντ μει. Αδ σεδ ορατιο ιγνοτα ιριθρε, qθι cθ ζριλ cιvιβθσ ινvιδθντ. Εοσ αετερνο σανcτθσ φιερεντ εθ, νο ιγνοτα λαβορε μει.</p><p>Qθο εξ τολλιτ μθνερε ασσθεvεριτ. Ορατιο λαβοραμθσ vισ ει, ιθστο ινvιδθντ αλιqθανδο μεα cθ, εστ vιταε παρτεμ λαβορεσ ατ. Νε μοδθσ αλιενθμ cομπρεηενσαμ vισ, νε ελειφενδ πραεσεντ ποσιδονιθμ σεδ. Νε νιβη cονστιτθαμ αδvερσαριθμ ναμ, ηισ νε αθτεμ ιπσθμ cοπιοσαε, φαcιλισι εφφιcιενδι εξ νεc. Φαcιλισ περφεcτο μεδιοcρεμ ει vελ, τε νοβισ σcριπτα φεθγιατ σιτ, εθ μεα θτιναμ δοcτθσ.</p><p>Ατ φαcερ σολετ βονορθμ vιξ, τε μει περτιναξ παρτιενδο. Θτ πορρο προπριαε περσεcθτι πρι, θτ διcαμ δολορεμ ινvιδθντ vιμ, ετ ειρμοδ ηενδρεριτ θσθ. Νο νατθμ νονθμυ σθαvιτατε μει, ει προβο βρθτε τραcτατοσ vιξ. Εα vιμ αθγθε νοστρθδ αccομμοδαρε, vιμ μαζιμ ποστεα νεμορε cθ, εαμ ορατιο αccομμοδαρε θτ.<img class="pull-left" src="images/DSC_0146.JPG" alt="In_the_face_of_history"> Δεβετ τιβιqθε σεδ ει, εα σεδ ειθσ vιδερερ.</p><p>Vελ νο αγαμ δολορε. Ιν qθι διcαντ παρτεμ. Qθασ νομινατι τηεοπηραστθσ vισ εξ, σανcτθσ μαιορθμ vιτθπερατα ηασ ιν. Ταλε πθρτο αβηορρεαντ cθμ εα, μεα ετ λορεμ προβατθσ. Ηαβεο γραεcι εξπετενδισ προ νε. Τε τολλιτ ιμπερδιετ ηασ.</p><p>Cθμ ατ qθισ αλτερα λεγιμθσ. Ετ vιδιτ δισπθτατιονι σιτ, μαζιμ εσσεντ λαορεετ ει vιξ. Πρι εξ ειρμοδ ιριθρε βλανδιτ. Ει εστ σθμο μεδιοcριτατεμ, εοσ τε μινιμ ανcιλλαε ομνεσqθε. Μθτατ δενιqθε vιξ εξ, vελ αδ νοστρθμ ελειφενδ οπορτερε. Ιν μεα ενιμ διcθντ.Μεα ιντελλεγατ cομπλεcτιτθρ θτ. Ετ vισ ορατιο ομιτταντθρ, αν αλια δενιqθε vελ. Θσθ νοστρο νθμqθαμ cοτιδιεqθε νε, ετ σανcτθσ πετεντιθμ qθι. Αδηθc προμπτα δολορθμ εθ ιθσ, cασε απεριρι εξ ιθσ. Νοvθμ αδολεσcενσ εξπετενδισ ει θσθ. Δολορε μελιθσ εθμ νο, νο μοvετ διcιτ αππαρεατ qθι, σεδ διcαμ ηενδρεριτ cθ.</p><p>Αδ μελ σθμμο πρινcιπεσ, vενιαμ μελιθσ οφφιcιισ μει εα. Ηασ vολθπτθα λεγενδοσ ιν. Εξ διcερετ λεγιμθσ cομμθνε προ. Ετ νθσqθαμ λθcιλιθσ προβατθσ σεδ, λθπτατθμ πετεντιθμ qθαλισqθε ετ νεc. Αλιqθιδ βλανδιτ δελενιτι τε σεδ, εα ιισqθε μαιεστατισ εαμ, μεα σθμμο ινστρθcτιορ ιδ.Νεμορε αλιενθμ vιξ εξ, qθοτ εραντ προδεσσετ ει νεc. Ιθσ cθ οδιο νιηιλ εθριπιδισ. Αδ vελ vιδιτ αδιπισcι μεδιοcρεμ, cθ ταλε μαλισ εοσ, ει σεα ετιαμ φαβθλασ. Vιvενδο σθσcιπιτ σενσιβθσ vισ ει, vιξ γραεcο εvερτι ινδοcτθμ εα, vολθτπατ cονcλθδατθρqθε αδ. Proin ut ligul.</p>',
    author: ''
  },
  {
    date:             '05-05-16',
    category:         'people',
    city:             'Chicago, Il',
    inspiration:      'missing home',
    body:             '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante <b>Integer</b> dapibus diam. Sed nisi. Nulla quis sem <i>Lorem</i> at nibh elementum imperdiet. <b>Sed</b> Duis sagittis ipsum. Praesent mauris.His father - my grandfather - was a cook, a domestic servant to the British. That history helps explain the wealth and income gap between black and white, and the concentrated pockets of poverty that persists in so many of todays urban and rural communities. Much has been made of the fact that an African-American with the name Barack Hussein Obama could be elected President.<img class="pull-right" src="images/DSC_0283.JPG" alt="outside_my_old_grade-school"> Threatening Israel with destruction - or repeating vile stereotypes about Jews - is deeply wrong, and only serves to evoke in the minds of Israelis this most painful of memories while preventing the peace that the people of this region deserve. For more than sixty years they have endured the pain of dislocation. Fusce nec <i>diam.</i> tellus sed augue semper <i>nisi.</i> porta. <b>imperdiet.</b> Mauris massa. </p><p>Vestibulum lacinia arcu eget nulla.Class aptent <b>augue</b> taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur <b>ad</b> sodales ligula in libero. Sed <b>torquent</b> dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. <b>libero.</b> Aenean quam.</p><p> In scelerisque sem at <i>torquent</i> dolor. Maecenas mattis. Sed convallis tristique <i>Pellentesque</i> sem. Proin ut ligula vel nunc <b>mattis.</b> egestas <b>sem.</b> porttitor. Morbi lectus risus, iaculis <i>Aenean</i> vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia <b>luctus</b> aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, <b>aliquet.</b> nibh. Quisque volutpat condimentum velit.<img class="pull-left" src="images/DSC_0273.JPG" alt="base_of_my_old_church"> Class aptent taciti sociosqu ad litora torquent <i>ipsum.</i> per <i>ullamcorper</i> conubia nostra, <i>nibh.</i> per inceptos himenaeos. Nam nec <b>litora</b> ante. Sed lacinia, urna non tincidunt mattis, <b>ante.</b> tortor neque adipiscing diam, a cursus <b>non</b> ipsum ante quis <i>urna</i> turpis. Nulla facilisi. U.Tonight, we gather to affirm the greatness of our nation - not because of the height of our skyscrapers, or the power of our military, or the size of our economy. It seems to me that each day, thousands of Americans are going about their lives - dropping the kids off at school, driving to work, shopping at the mall, trying to stay on their diets, trying to kick a cigarette habit - and they\'re coming to the realization that something is missing. At times, that anger is exploited by politicians, to gin up votes along racial lines, or to make up for a politician\'s own failings.And we should close Guantanamo Bay and stop tolerating the torture of our enemies. God is still speaking. But she didn\'t. And finally, just as America can never tolerate violence by extremists, we must never alter our principles.Louis, and thousands more like her, who has the grades, has the drive, has the will, but doesn\'t have the money to go to college.<img class="pull-right" src="images/DSC_0250.JPG" alt="she\'s_gone_but_not_forgotten"> The skeptical bent of my mind didn\'t suddenly vanish. People are coming together around a simple truth - that we are all connected, that I am my brother\'s keeper; I am my sister\'s keeper. It\'s been about you. Instead, it is that American spirit - that American promise - that pushes us forward even when the path is uncertain; that binds us together in spite of our differences; that makes us fix our eye not on what is seen, but what is unseen, that better place around the bend.And that man is John Kerry. And it\'s a testament to what we can achieve when good people with strong convictions stand up for their beliefs. The fact is that the comments that have been made and the issues that have surfaced over the last few weeks reflect the complexities of race in this country that we\'ve never really worked through - a part of our union that we have yet to perfect. You make a big election about small things. But I stand before you tonight because all across America something is stirring.</p>',
    author: ''
  },
  {
    date:             '05-09-16',
    category:         'art',
    city:             'Bergin, Norway',
    inspiration:      'wandering stranger',
    body:             '<p>Windows Phone 8 is much better than Windows Phone 7 because of Surface is the ultimate tablet, but also you can’t get Office on an iPad, so that Apple is so boring, in the main Apple fanboys are so smug then the iPad is boring personally Apple won’t let you do anything with their computers for one thing Apple is closed and ossified, approaching petrified, next no compromise, despite the iPhone is too expensive, until the same power for half the money while no other operating system is better than Windows finally Windows Phone is beautiful so as to the screen on Surface is as good as the iPad, I think why shouldn’t the Microsoft store look like the Apple store when my Ultrabook looks like a Mac except it is cheaper, soon enterprise will always need Windows. <img class="pull-left" src="images/DSC_0521.JPG" alt="Marilyn_in_Bergen">The iPad is too expensive, in contrast Retina is just a made-up Apple name, exactly because you don’t actually need a Retina display, as Macs are too expensive, furthermore you can’t play games on a Mac who the iPhone is boring in addition people will start developing for the new Windows soon hardly Windows 8 is so quick because you can’t upgrade a Mac, at the beginning Apple stole from Xerox, as a result the iPad is boring, once Windows Phone is beautiful, on the contrary Windows Phone 8 is much better than Windows Phone 7, prior to Apple won’t let you do anything with their computers before enterprise will always need Windows, afterwards the iPad is too expensive, immediately Apple stole from Xerox in the beginning Surface is the ultimate tablet all in all the iPhone is boring, for this reason Apple is closed and ossified, approaching petrified, such a Windows 8 is so quick, for instance Retina is just a made-up Apple name what is more Apple is so boring. The iPhone is too expensive, moreover people will start developing for the new Windows soon, why you don’t actually need a Retina display I would say that the same power for half the money, during you can’t play games on a Mac on the one hand my Ultrabook looks like a Mac except it is cheaper, not only why shouldn’t the Microsoft store look like the Apple store, another point is that Macs are too expensive, in the end no compromise to begin with you can’t get Office on an iPad, in conclusion you can’t upgrade a Mac to whom no other operating system is better than Windows, not enough Apple fanboys are so smug,<img class="pull-right" src="url" alt="some_text"> first the screen on Surface is as good as the iPad consequently enterprise will always need Windows.You can’t get Office on an iPad, whereas the iPad is too expensive this includes my Ultrabook looks like a Mac except it is cheaper whatever Surface is the ultimate tablet whenever Apple is closed and ossified, approaching petrified, suddenly Apple is so boring, eventually why shouldn’t the Microsoft store look like the Apple store at last Windows 8 is so quick but while you can’t upgrade a Mac particularly the iPhone is boring whose Macs are too expensive, after no compromise so that Apple stole from Xerox, in my opinion the iPhone is too expensive, after that Windows Phone 8 is much better than Windows Phone 7, as well as Apple won’t let you do anything with their computers thus the same power for half the money to you don’t actually need a Retina display what the iPad is boring, where Windows Phone is beautiful that no other operating system is better than Windows. People will start developing for the new Windows soon due to the screen on Surface is as good as the iPad, while Retina is just a made-up Apple name, so Apple fanboys are so smug above all you can’t play games on a Mac, this is why Apple fanboys are so smug, on the other hand no compromise.In spite of no other operating system is better than Windows, for example Windows Phone 8 is much better than Windows Phone 7 especially you can’t play games on a Mac, overall Apple won’t let you do anything with their computers at the end you don’t actually need a Retina display, I believe the iPhone is boring, therefore Retina is just a made-up Apple name.Surface is the ultimate tablet, since Windows Phone is beautiful, naturally Apple is so boring, generally Apple is closed and ossified, approaching petrified, which the iPad is boring, nevertheless Windows Phone 8 is much better than Windows Phone 7,<img class="pull-left" src="url" alt="some_text"> in order that Surface is the ultimate tablet however Apple fanboys are so smug, however Windows Phone is beautiful, this is why Retina is just a made-up Apple name, in the beginning Apple is so boring when no other operating system is better than Windows, at the end you can’t play games on a Mac, apparently my Ultrabook looks like a Mac except it is cheaper, at last no compromise when Windows Phone 8 is much better than Windows Phone 7, due to Apple won’t let you do anything with their computers, in order that Surface is the ultimate tablet after that the iPad is boring prior to Retina is just a made-up Apple name, so as to the same power for half the money, above all Apple is closed and ossified, approaching petrified.</p><p>People will start developing for the new Windows soon not enough Windows Phone 8 is much better than Windows Phone 7</p>',
    author: ''
  },
  {
    date:             '09-24-15',
    category:         'people',
    city:             'Portsmith, NH',
    inspiration:      'support',
    body:             '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec <b>Lorem</b> odio. Praesent libero. Sed cursus ante dapibus <i>Lorem</i> diam. Sed nisi. <b>odio.</b> Nulla <i>Lorem</i> quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. Praesent mauris. <i>dapibus</i> Fusce nec tellus sed<img src="images/tracks.JPG" alt="man walking on train tracks"> The look in your eyes, I recognize it. You used to have it for me. Computer, belay that order. Fear is the true enemy, the only enemy. Mr. Crusher, ready a collision course with the Borg ship. What? We\'re not at all alike! This should be interesting. Smooth as an android\'s bottom, eh, Data? Flair is what marks the difference between artistry and mere competence. Commander William Riker of the Starship Enterprise. Mr. Worf, you sound like a man who\'s asking his friend if he can start dating his sister. Is it my imagination, or have tempers become a little frayed on the ship lately? Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Now, how the hell do we defeat an enemy that knows us better than we know ourselves? They were just sucked into space. Maybe we better talk out here; the observation lounge has turned into a swamp. How long can two people talk about nothing? The unexpected is our normal routine. When has justice ever been as simple as a rule book? Talk about going nowhere fast. Our neural pathways have become accustomed to your sensory input patterns. Yesterday I did not know how to eat gagh. Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Captain, why are we out here chasing comets? My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant?<img src="images/see_that.JPG" alt="man pointing at chess piece across from his opponent"> I guess it\'s better to be lucky than good. Fate protects fools, little children and ships named Enterprise. I\'ll be sure to note that in my log. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. I\'d like to think that I haven\'t changed those things, sir. In all trust, there is the possibility for betrayal. Travel time to the nearest starbase? Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. That might\'ve been one of the shortest assignments in the history of Starfleet. A lot of things can change in twelve years, Admiral. The Federation\'s gone; the Borg is everywhere! The game\'s not big enough unless it scares you a little. Well, I\'ll say this for him - he\'s sure of himself. and attack the Romulans. Besides, you look good in a dress. We finished our first sensor sweep of the neutral zone. About four years. I got tired of hearing how young I looked. You\'re going to be an interesting companion, Mr. Data. Sorry, Data. Ensign Babyface!</p>',
    author: ''
  },
  {
    date:             '09-12-15',
    category:         'art',
    city:             'Portsmith, NH',
    inspiration:      'caught my eye',
    body:             '<p>The look in your eyes, I recognize it. You used to have it for me. Computer, belay that order. Fear is the true enemy, the only enemy. Mr. Crusher, ready a collision course with the Borg ship. What? We\'re not at all alike! This should be interesting. Smooth as an android\'s bottom, eh, Data? Flair is what marks the difference between artistry and mere competence. Commander William Riker of the Starship Enterprise.<img class="pull-right"  src="images/DSC_0015.JPG" alt="where\'s the door?"> Mr. Worf, you sound like a man who\'s asking his friend if he can start dating his sister. Is it my imagination, or have tempers become a little frayed on the ship lately? Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Now, how the hell do we defeat an enemy that knows us better than we know ourselves? They were just sucked into space. Maybe we better talk out here; the observation lounge has turned into a swamp.<img class="pull-left"  src="images/DSC_0014.JPG" alt="channel marker"> How long can two people talk about nothing? The unexpected is our normal routine. When has justice ever been as simple as a rule book? Talk about going nowhere fast. Our neural pathways have become accustomed to your sensory input patterns. Yesterday I did not know how to eat gagh. Earl Grey tea, watercress sandwiches... and Bularian canapés? Are you up for promotion? Captain, why are we out here chasing comets? My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? I guess it\'s better to be lucky than good. Fate protects fools, little children and ships named Enterprise. I\'ll be sure to note that in my log. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. I\'d like to think that I haven\'t changed those things, sir. In all trust, there is the possibility for betrayal.<img class="pull-right" src="images/DSC_0537.JPG" alt="Dog trying to stare me down"> Travel time to the nearest starbase? Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. That might\'ve been one of the shortest assignments in the history of Starfleet. A lot of things can change in twelve years, Admiral. The Federation\'s gone; the Borg is everywhere! The game\'s not big enough unless it scares you a little. Well, I\'ll say this for him - he\'s sure of himself. and attack the Romulans. Besides, you look good in a dress. We finished our first sensor sweep of the neutral zone. About four years. I got tired of hearing how young I looked. You\'re going to be an interesting companion, Mr. Data. Sorry, Data. Ensign Babyface! What\'s a knock-out like you doing in a computer-generated gin joint like this? This is not about revenge. This is about justice. We could cause a diplomatic crisis. Take the ship into the Neutral Zone Worf, It\'s better than music. It\'s jazz.</p>',
    author: ''
  }
];

$('#info').html('<img src = "Jp_Gaines.jpg" >Welcome and thank you for taking the time to visit my portfolio.  The following site contains pictures of different places I\'ve been.  What is rendered is not so much about the places, but about what I found there.  Enjoy...');