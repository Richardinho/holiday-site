angular.module('articles', [])
    .factory('ArticleService', ['$q', function($q) {

        var articles = [{"_id":"557c9bb8c0ddb780112790af","title":"My first article","published":"23rd of June 2011","text":"it's the end of the world as we know it","author":"Richard Hunter","__v":0},
         {"_id":"557ccd9ec0ddb780112790b0","title":"Another article","published":"12th of October 2011","text":"The Paddle Steamer Waverley","author":"Richard Hunter","__v":0},
         {"_id":"557d05a0b9342a651689b408","title":"Third article with html","published":"5th of December 2011","text":"<p>it's the end of the worldas we know it </p><p>And I feel fine</p>","author":"Richard Hunter","__v":0},{"_id":"557d9ef559e8d8ca18beca89","title":"Gourock","published":"27th of January 2014","text":"<p>Gourock has one of the three remaining public outdoor swimming pools in Scotland. Gourock Outdoor Pool was      built in 1909 and reconstructed in 1969, it was once tidal and had a sandy floor, but is now a modern, heated      facility, with cleaned sea water used in the saltwater pool. The pool was closed at the end of the 2010 summer season      for a major improvement project, due to be completed before the end of 2011. The existing changing accommodation has been      demolished and will be replaced with a more modern leisure centre, incorporating an enlarged gymnasium and lift access from      the street level down to the new changing accommodation and the upgraded pool.[2]</p> <p>The megalithic Kempock Stone, popularly known as \"Granny Kempock Stone\", stands on a cliff behind Kempock Street, the main      shopping street. The supersition was that for sailors going on a long voyage or a couple about to be married, walking seven      times around the stone would ensure good fortune. A flight of steps winds up from the street past the stone to Castle Mansions      and St John's Church, whose crown steeple forms a landmark dominating Gourock. Kempock Street itself has a good variety      of traditional shops including baker's and greengrocer's shops.</p> <p>Gourock also has a golf course, which stretches from behind Trumpethill to Levan estates.</p>","author":"Richard Hunter","__v":0,"img":"gourock.jpg"},
         {"_id":"557d1c0459e8d8ca18beca88","title":"Dunoon","published":"25th of December 2011","text":"<p>Dunoon is a highlands resort town on the Cowal Peninsula looking out across Holy Loch from the Firth of Clyde in the Argyll and Bute Council Area.</p>  <p>The first Dunoon Pier appeared in 1835. The pier was enlarged and a new waiting room constructed in 1867      to cater for the growth of paddle-steamer traffic and this was further improved with a larger 400 foot jetty in 1881. The pier      was again rebuilt in 1895 resulting in the two-berth structure broadly as it exists today, with the exception of the modern      roll-on/roll-off facilities for vehicles which was added in 2004/5.</p>  <p>The pier entrance building is very striking with red-tiled roofs and strongly detailed timber in chocolate, cream and yellow.      A promenade balcony erected in 1937 has not been renewed, though the much-altered entrance buildings from the Pier Esplanade do remain.</p>  <p>Overlooking the pier, is a large statue to Robert Burns' love Highland Mary, also known as Bonny Mary O' Argyll, which is located      on Castle Hill, just below the remains of the 12th century Dunoon Castle.</p>  <p>Fleets of paddle steamers brought holidaymakers from Glasgow to Dunoon and many other piers right up to the late 1960s      and the pier is still visited by the last sea-going paddle steamer in the world, P.S.Waverley. A regular      car and passenger ferry service to Gourock Pier across the loch still operates, run by Caledonian MacBrayne.</p>","author":"Richard Hunter","__v":0,"img":"dunoon1.jpeg"},
         {"_id":"557db34ec2ff92aa28a249aa","title":"Dumbarton","published":"28th of February 2014","text":"<p>Dumbarton history goes back at least as far as the Iron Age and probably much earlier. It was the site of a strategically important Roman settlement known as Alcluith of a province named Valentia.[8] The next record of a settlement in Dumbarton is a record in Irish chronicles of the death of Guret, rex Alo Cluathe (\"king of Clyde Rock\"), in AD 658.[9]</p>  <p>The Old Dumbarton Bridge over the River Leven was built in 1765 by John Brown of Dumbarton, at the site of a ferry crossing. It was constructed at the behest of the Duke of Argyll, who was anxious to obtain access to Glasgow from his estate at Rosneath. The bridge, with five segmental arches with rounded cutwaters, resulted in the extension of Dumbarton to West Bridgend. It is now B-listed and was refurbished in 2006.</p> <p>The fortress of Dumbarton was the stronghold of the kingdom of Alclud, and the centre of British power in northern Britain, for more than two centuries from the mid-seventh century, until the Vikings destroyed the fortress after a four month siege in 870. The loss of the British power base led to the emergence of the new kingdom of Strathclyde, or Cumbria, with a major centre at Govan. The title \"king of the Britons of Srath Clúade\" was first used in 872.[10] Dumbarton was later the county town of the county of Dunbartonshire, formerly known as Dumbartonshire. The name comes from the Scottish Gaelic Dùn Breatainn meaning \"fort of the Brythons (Britons)\", and serves as a reminder that the earliest historical inhabitants of Clydesdale spoke an early form of the Welsh language.</p>","author":"Richard Hunter","img":"dumbarton.jpg","__v":0}
        ];

        function findByKeyword(keyword) {
            for (var i = 0; i < articles.length; i++) {

                if (articles[i]['title'] === keyword) {
                    return articles[i];
                }
            }
            return {};
        }

        return {

            getArticleByKeyword : function(keyword) {

                return $q(function(resolve, reject) {
                    setTimeout(function() {
                        resolve({ data :  findByKeyword(keyword) });
                    }, 1000);
                });

            }
        };
    }]);


