<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/all.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-thin.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-solid.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-regular.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-light.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-thin.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-solid.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-regular.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-light.css">

    <link rel="icon" href="images/ace.png" type="image">
    <title>ACEHub esports coverage | Home </title>
</head>
<body>
    <header id="header">
        <div class="logo" >
            <img src="images/acehublogo.png"  alt="ACEHub Logo" class="img-fluid">
            <h1 >AceHub</h1>
        </div>

        <div class="dropdown">
            <button class="dropdown-button" id="dropdownButton">
                Categories <i class="fas fa-caret-down"></i>
            </button>
            <div class="dropdown-content" id="dropdownContent">
                <a href="#" onclick="changeCategory(event, 'Rocket League')"><i class="fa-solid fa-rocket"></i> Rocket League</a>
                <a href="#" onclick="changeCategory(event, 'FIfa')"><i class="fa-sharp fa-light fa-wand"></i> FIFA</a>
                <a href="#" onclick="changeCategory(event, 'League of Legends')"><i class="fa-solid fa-ring"></i></i> League of Legends</a>
                <a href="#" onclick="changeCategory(event, 'CS')"><i class="fa-solid fa-gun"></i> CS</a>
            </div>
        </div>
        
        
        <nav>
            <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="results.html">Results</a></li>
                <li><a href="teams.html">Teams</a></li>
                <li><a href="players.html">Players</a></li>
                <li><a href="rankings.html">Rankings</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <div class="user-actions">
            <div class="search-bar">
                <input type="text" placeholder="Search..." id="searchInput">
                <button type="submit" id="searchButton"><i class="fas fa-search"></i></button>
            </div>
            <button class="button">Login</button>
            <button class="button">Create an Event</button>
        </div>
    </header>

            <main class="main-content">
                <div class="leftCol">
                        <aside >
                            <div class="presented-by-row">
                                <h3><a href="#">Rankings</a></h3>
                            </div>
                        <div class="col-box-con">
                            <div class="rank-card">
                                <span class="rank-position">1.</span>
                                <img src="./images/teams/cs/g2-logo.svg" alt="">
                                <a href="#">G2</a>
                            </div>
                            <div class="rank-card">
                                <span class="rank-position">2.</span>

                                <img src="./images/teams/cs/spirit-logo.png" alt="">
                                <a href="#">Spirit</a>
                            </div>
                            <div class="rank-card">
                                <span class="rank-position">3.</span>
                                <img src="./images/teams/cs/navi-logo.png" alt="">
                                <a href="#">NAVI</a>

                            </div>
                            <div class="rank-card">
                                <span class="rank-position">4.</span>
                                <img src="./images/teams/cs/vitality-logo.png" alt="">
                                <a href="#">Vitality</a>

                            </div>
                            <div class="rank-card">
                                <span class="rank-position">5.</span>
                                <img src="./images/teams/cs/faze-logo.png" alt="">
                                <a href="#">FAZE Clan</a>
                            </div>
                        </div>
                            <div class="rankings-button">
                                <a href="#" class="btn-rankings">View Complete Rankings</a>
                            </div>
                        </aside>

                        <aside class="ad-placement">
                            <h3>Sponsored</h3>
                            <a href="https://sponsor-website.com" target="_blank">
                                <img src="data:image/jpeg;base64,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" alt="Ad Banner">
                            </a>
                        </aside>


                        <aside >
                            <div class="presented-by-row">
                                <h3><a href="#">Upcoming Events</a></h3>
                            </div>

                            <div class="event-item">
                                <img src="https://img-cdn.hltv.org/eventlogo/2mt5dKGFBdIcxv37gayq1X.png?ixlib=java-2.1.0&w=50&s=2c98725282ffa079fa6eb78881a99ea3" alt="IEM Katowice">
                               <div class="event-details">
                                   <h4>IEM Katowice</h4>
                                   <p>August 16 - August 22</p>
                                   <p>Location : Katowice, Poland</p>
                               </div>
                            </div>
                            <div class="event-item">
                                <img src="https://img-cdn.hltv.org/eventlogo/u-4VdjFWGYz_GwBxLGrr11.png?ixlib=java-2.1.0&w=50&s=e78a8a6b716fa437cc3cfbb9f6b48ee6" alt="PGL Cluj Napoca">
                                <div class="event-details">
                                    <h4>PGL Cluj Napoca</h4>
                                    <p>August 23 - August 29</p>
                                    <p>Location : Cluj Napoca, Romania</p>
                                </div>

                            </div>
                            <div class="event-item">
                                <img src="https://img-cdn.hltv.org/eventlogo/CJvqOkI-PrW8BhN2jleFfc.png?ixlib=java-2.1.0&w=50&s=fa468bb28bfdfa10a21f538d1d659c93" alt="Blast Bounty ">
                                <div class="event-details">
                                    <h4>BLAST Bounty</h4>
                                    <p>August 30 - September 5</p>
                                    <p>Location : Online</p>
                                </div>
                            </div>
                            <div class="event-item">
                                <img src="https://img-cdn.hltv.org/eventlogo/PhVPy7kXO_J_nfTng7a87h.png?ixlib=java-2.1.0&w=50&s=a56cc668c5dfeb6b8bc8676b7ad8021a" alt="EPL S21">
                                <div class="event-details">
                                    <h4>ESL One New York</h4>
                                    <p>September 6 - September 12</p>
                                    <p>Location : New York, USA</p>
                                </div>
                            </div>
                        </aside>

                    <aside>
                       <div class="match-of-day">
                           <div class="presented-by-row">
                               <h3><a href="">Match of the day</a></h3>
                           </div>
                           <div class="match-of-the-day-card">
                               <div class="match-team">
                                   <img src="./images/teams/cs/g2-logo.svg" alt="G2 Logo">
                                   <span class="team-name">G2</span>
                               </div>
                               <span class="score">2 - 1</span>
                               <div class="match-team">
                                   <img src="./images/teams/cs/vitality-logo.png" alt="Vitality Logo">
                                   <span class="team-name">Vitality</span>
                               </div>
                           </div>
                           <a href="#" class="btn-details">View Match Details</a>
                       </div>
                    </aside>

                    
                    <aside>
                        <div class="presented-by-row">
                            <h3><a href="#">Featured Player</a></h3>
                        </div>
                        <div class="player-card">
                            <div class="player-media">
                                <img src="https://img-cdn.hltv.org/teamlogo/ywdn4tmAvXfllLeV2SkkvF.png?ixlib=java-2.1.0&w=400&s=e1a1b8c504822fb64228c32e3fe82908 2x" alt="Spirit Logo" class="team-logo">
                                <img src="https://img-cdn.hltv.org/playerbodyshot/p-h4VvTRxlZXk6VaMoENQs.png?ixlib=java-2.1.0&w=400&s=504b0987dc6382da65b751ab3199fde1" alt="Donk" class="player-img">
                            </div>

                            <div class="player-details">
                                <h4 class="player-name">Donk</h4>
                                <p class="player-subtext">Player of the Week</p>
                                <span class="player-stats">97.9 - Most Damage / Round</span>
                            </div>
                        </div>
                    </aside>

                    
                    <aside>
                        <div class="presented-by-row">
                            <h3><a href="#">Top Clips</a></h3>
                        </div>
                        <div class="clip-container">
                        <div class="clip-card">
                            <img src="data:image/jpeg;base64,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" alt="Clip 1">
                            <a href="https://www.youtube.com/watch?v=ig_fexdi4JI" class="clip-title">Insane Ace by Donk</a>
                        </div>
                        <div class="clip-card">
                            <img src="https://img-cdn.hltv.org/gallerypicture/cRwS4BEsQjy98Qe5Q97WBx.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&q=75&w=800&s=b563463767017d0f2e6e2163ba2a8c61" alt="Clip 2">
                            <a href="https://www.youtube.com/watch?v=Ovci_VU4Kb0" class="clip-title">Team Spirit winning moment </a>
                        </div>
                        <div class="clip-card">
                            <img src="https://yt3.googleusercontent.com/xV9eoeHWJLmFooOaB0MYw-dJJQf4q6j3fv55U6v5Qwr_eLmr4CESi_mFzkYCqnmAsldq_2_vZQ=s900-c-k-c0x00ffffff-no-rj" alt="Clip 3">
                            <a href="https://www.youtube.com/watch?v=MEVaFJG6Z1k" class="clip-title">Clutch 1v5 by m0nesy</a>
                        </div>
                        </div>
                    </aside>
                    <aside class="ad-placement">
                        <h3>Sponsored</h3>
                        <a href="https://sponsor-website.com" target="_blank">
                            <img src="data:image/png;base64,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" alt="Ad Banner">
                        </a>
                    </aside>


                </div>

                <div class="contentCol">
                    <section class="carousel-section">
                        <div class="carousel-container">
                            <div class="carousel">
                                <div class="carousel-slide">
                                    <img src="https://i.ytimg.com/vi/eCTH5bKq5k0/maxresdefault.jpg" alt="Image 1">
                                </div>
                                <div class="carousel-slide">
                                     <img src="https://i.ytimg.com/vi/9geGWHKIC4I/maxresdefault.jpg" alt="Image 2" class="move-up">
                                </div>
                                <div class="carousel-slide">
                                     <img src="https://i.ytimg.com/vi/4WnGTKQ1pRY/maxresdefault.jpg" alt="Image 3">
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="focus-event">
                        <div class="focus-image">
                          <img src="https://cdn.oneesports.gg/cdn-data/2024/02/CS2_IEMKatowice_trophy.jpg" alt="IEM Katowice 2024">
                          <div class="focus-text">
                            <h2>IEM Katowice 2024</h2>
                            <p>February 16 - February 22 | Katowice, Poland</p>
                            <p>Experience the ultimate esports event featuring the world's best teams!</p>
                            <button class="cta-button">Learn More</button>
                          </div>
                        </div>
                    </section>
                    <section class="upcoming-events">
                        <h3 class="section-title">Upcoming Matches</h3>
                        <div class="events-grid">
                            <div class="event-card">
                                <div class="event-date-time">
                                    <span class="event-date">20 Dec 2024</span>
                                    <span class="event-time">6:00 PM</span>
                                </div>
                                <div class="event-teams">
                                    <div class="team-info">
                                        <img src="https://e7.pngegg.com/pngimages/147/259/png-clipart-real-madrid-fc-logo-history-of-real-madrid-c-f-logo-real-madrid-miscellaneous-cdr.png" alt="Team Alpha Logo">
                                        <p class="team-name">Real Madrid</p>
                                    </div>
                                    <span class="vs-divider">VS</span>
                                    <div class="team-info">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrw83GV7nxvpZ4wfOYBSMoRgfCkMZBkPTRw&s" alt="Team Beta Logo">
                                        <p class="team-name">FC Barcelona </p>
                                    </div>
                                </div>
                                <button class="details-button">Details</button>
                            </div>
                            <div class="event-card">
                                <div class="event-date-time">
                                    <span class="event-date">21 Dec 2024</span>
                                    <span class="event-time">8:00 PM</span>
                                </div>
                                <div class="event-teams">
                                    <div class="team-info">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdots2NIeSsIXdLQpTrVQmisPsWbr4Q7gDVg&s" alt="Team Gamma Logo">
                                        <p class="team-name">Manchester CIty </p>
                                    </div>
                                    <span class="vs-divider">VS</span>
                                    <div class="team-info">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWmkUo08wH9DVmeaB9rp4YerDQ-eOEqRtIg&s" alt="Team Delta Logo">
                                        <p class="team-name">Liverpool</p>
                                    </div>
                                </div>
                                <button class="details-button">Details</button>
                            </div>
                        </div>
                    </section>

                   <section class="player-stats-container">
                    <h2 class="player-stats-title">Top players</h2>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <img src="https://img-cdn.hltv.org/playerbodyshot/Go26IYqT67GLLze9il0OVG.png?ixlib=java-2.1.0&w=400&s=bd18c1ff6b0aa186ac6b6dbb3e2a7e62" alt="Player Image" >
                            <h3>kyousuke</h3>
                            <p>Kills: <span class="stat-value">120</span></p>
                            <p>Assists: <span class="stat-value">45</span></p>
                            <p>Most damage/round: <span class="stat-value">96.5</span></p>
                            <p>Headshots: <span class="stat-value">30</span></p>
                            <p>Accuracy: <span class="stat-value">75%</span></p>
                            <button class="details-button">View Details</button>
                        </div>
                        <div class="stat-card">
                            <img src="https://img-cdn.hltv.org/playerbodyshot/gPL0XYSjZxHrmTaC8fpodZ.png?ixlib=java-2.1.0&w=400&s=f49b8dc6881864ea2198d3c58616f98b" alt="Player Image">
                            <h3>kelieN</h3>
                            <p>Kills: <span class="stat-value">120</span></p>
                            <p>Assists: <span class="stat-value">45</span></p>
                            <p>Most damage/round: <span class="stat-value">96.5</span></p>
                            <p>Headshots: <span class="stat-value">30</span></p>
                            <p>Accuracy: <span class="stat-value">75%</span></p>
                            <button class="details-button">View Details</button>
                        </div>
                        <div class="stat-card">
                            <img src="https://img-cdn.hltv.org/playerbodyshot/RsvyCZfGBVdtdeWcGaupmC.png?ixlib=java-2.1.0&w=400&s=b0e038046b730c0779b68e992e3f5974" alt="Player Image">
                            <h3 class="stat-card-name">redstar</h3>
                            <p>Kills: <span class="stat-value">120</span></p>
                            <p>Assists: <span class="stat-value">45</span></p>
                            <p>Most damage/round: <span class="stat-value">96.5</span></p>
                            <p>Headshots: <span class="stat-value">30</span></p>
                            <p>Accuracy: <span class="stat-value">75%</span></p>
                            <button class="details-button">View Details</button>
                        </div>
                    </div>
                   </section>
                    

                   <section class="esport-comparison">
                    <h3 class="section-title">Player Comparison</h3>
                   <div class="comparison-controls">
                    <select  id="comparison-type" class="comparison-type">
                        <option value="player">Player</option>
                        <option value="team">Team</option>
                    </select>
                   </div>

                   <div class="comparison-container">
                    <div class="comparison-item">
                        <select id="entity-select-1" class="entity-select">
                    </select>
                   <div class="player-comparison-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZKQwYCORhU_AWoAMnC_qgs7QgRi2KUqo7g&s">
                    <div  id="entity-stats-1" class="entity-stats">

                        <div class="stats-grid">
                            <div class="stat-item">
                                <span class="stat-label">Goals</span>
                                <span class="stat-value">23</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Assists</span>
                                <span class="stat-value">12</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Matches</span>
                                <span class="stat-value">28</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Win Rate</span>
                                <span class="stat-value">76%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Rating</span>
                                <span class="stat-value">8.4</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Form</span>
                                <div class="form-indicators">
                                    <span class="form-dot win"></span>
                                    <span class="form-dot win"></span>
                                    <span class="form-dot loss"></span>
                                    <span class="form-dot win"></span>
                                    <span class="form-dot draw"></span>
                                </div>
                            </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   <div class="comparison-separator">
                    VS
                   </div>
                   <div class="comparison-item">
                    <select id="entity-select-2" class="entity-select">

                    </select>

                   <div class="player-comparison-item">
                    <img src="https://pbs.twimg.com/profile_images/1457472412023500800/JjSwyB-l_400x400.jpg">
                    <div class="entity-stats" id="entity-stats-1">
                        <div class="stats-grid">
                
                            <div class="stat-item">
                                <span class="stat-label">Goals</span>
                                <span class="stat-value">23</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Assists</span>
                                <span class="stat-value">12</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Matches</span>
                                <span class="stat-value">28</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Win Rate</span>
                                <span class="stat-value">76%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Rating</span>
                                <span class="stat-value">8.4</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Form</span>
                                <div class="form-indicators">
                                    <span class="form-dot win"></span>
                                    <span class="form-dot win"></span>
                                    <span class="form-dot loss"></span>
                                    <span class="form-dot win"></span>
                                    <span class="form-dot draw"></span>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                   </div>
                
                   </section>
                  
                </div>

                <div class="rightCol">
                   <aside>
                    <div class="presented-by-row">
                        <h3><a href="#">News</a></h3>
                    </div>
                    <div class="news-container">
                        <div class="news-card">
                            <img src="https://img-cdn.hltv.org/gallerypicture/K-G8CCzpFD4-IxV7rMHg-w.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&q=75&w=800&s=ced6b3f59ca7a58c32709ef168c6689a"
                             alt="">
                             <p>Donk becomes youngest Major winner in Shanghai, earns MVP award</p>
                        </div>
                        <div class="news-card">
                            <img src="https://ds-images.bolavip.com/news/image/1200/740/?src=https://images.worldsoccertalk.com/webp/full/WST_20240703_WST_514635_Kylian-Mbappe-fast.webp"
                            alt="">
                            <p>Mbappe's max speed is approximately 38 km/h.</p>
                        </div>
                        <div class="news-card">
                            <img src="https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2023-04/erling_haaland_712cf23434f43344ca0d514f9ee571cc.jpg"
                            alt="">
                            <p>Erling Haaland has the strongest shot.</p>
                        </div>
                        <div class="news-card">
                            <img src="https://www.ggrecon.com/media/moze3aim/team-bds.jpg?rxy=0.46271414033858094,0.33067515239811374&width=1000&v=1db09eb4fef9ef0&quality=60"
                            alt="">
                            <p>The season was won by the BDS team.</p>
                        </div>
                        <div class="news-card">
                            <img src="https://i.ytimg.com/vi/8OPO9JAxFY8/maxresdefault.jpg"
                            alt="">
                            <p>The best players in the world at League of Legends</p>
                        </div>
                    </div>
                   </aside>

                   <aside class="ad-placement">
                    <h3>Sponsored</h3>
                    <a href="https://sponsor-website.com" target="_blank">
                        <img src="data:image/png;base64,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" alt="Ad Banner">
                    </a>
                </aside>

                <aside>
                    <div class="presented-by-row">
                    <h3><a href="#">Featured Moments</a></h3>
                    </div>
                   <div class="funny-container">
                   <div class="funny-card">
                    <img src="https://imgresizer.tntsports.io/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.tntsports.io/2016/07/08/1891157-39818980-2560-1440.jpg" alt="">
                        <a href="https://www.youtube.com/shorts/_mHQHu_r6r8?feature=share" class="funny-title">Messi Fail Moments</a>
                   </div>
                   <div class="funny-card">
                    <img src="data:image/jpeg;base64,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" alt="">
                    <a href="https://www.youtube.com/watch?v=pJhYthDcTqw" class="funny-title">Dumbest Football Moments</a>
                    </div>
                <div class="funny-card">
                    <img src="https://media.zenfs.com/en/onefootball_articles_802/58b92344b7f8548dd129b2b130952f02" alt="">
                    <a href="https://www.youtube.com/shorts/Zil98aPJiag?feature=share" class="funny-title">Mbpape Funny Moments</a>
                </div>
                   </div>
                </aside>

                <aside>
                <div class="presented-by-row">
                    <h3><a href="#">Social Media Highlights</a></h3>
                </div>
                <div class="social-post">
                    <div class="social-avatar">
                        <img src="https://pbs.twimg.com/media/GGsV8kKWwAAGGjJ.jpg:large" alt="GarrettG"/>
                    </div>
                    <div class="social-content">
                        <div class="social-username">@GarrettG</div>
                        <div class="social-time">2h ago</div>
                        <div class="social-message">I had a crazy match in today's final! Thank you to the team for the support 🚀⚽ <br>#RocketLeague</div>
                    </div>
                </div>
                <div class="social-post">
                    <div class="social-avatar">
                        <img src="https://external-preview.redd.it/RhUZmkRcxdeRHYvzb6p9w9mVwNu7Xw2lpUSHCdLpWXY.jpg?auto=webp&s=bb43f3490285da414b396ee8f5e00f1d92eff4b3" alt="Faker"/>
                    </div>
                <div class="social-content">
                    <div class="social-username">@Faker</div>
                    <div class="social-time">5h ago</div>
                    <div class="social-message">Another successful match! Get ready for the spring championship 🌟✨ <br>#LOL</div>
                </div>
            </div>
            <div class="social-post">
                <div class="social-avatar">
                        <img src="https://esports-marketing-blog.com/wp-content/uploads/2022/10/S1mple.webp" alt="s1mple" />
                </div>
                <div class="social-content">
                    <div class="social-username">@s1mple</div>
                    <div class="social-time">7h ago</div>
                    <div class="social-message">Winning isn't just about skill, it's also about mindset. Only the best understand that. 💪🔥 <br>#CSGO</div>
                </div>
            </div>
            <div class="social-post">
                <div class="social-avatar">
                        <img src="https://c.ndtvimg.com/2024-12/s83k79m_csa_625x300_10_December_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt="Guardiola" />
                </div>
                <div class="social-content">
                    <div class="social-username">@Pep Guardiola</div>
                    <div class="social-time">14h ago</div>
                    <div class="social-message">Lionel Messi is a fantastic player, but Cristiano Ronaldo remains untouchable. 👑⚽ <br>#FIFA</div>
                </div>
            </div>
        </aside>
        </div>
            </main>


    <footer class="footer">

        <div class="footer-content">
            <div class="footer-section">
                <h3>About ACEHub</h3>
                <p>ACEHub connects sports enthusiasts and gamers by offering tools to organize, promote, and join events easily.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Players</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Rankings</a></li>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Stay Connected</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-envelope"></i> Email</a></li>
                    <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            &copy; 2024 ACEHub. All Rights Reserved -
            <a href="#">Privacy Policy</a> |
            <a href="#">Terms of Service</a>
        </div>
    </footer>
    <script src="index.js"></script>
</body>
</html>