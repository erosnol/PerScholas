let Radio = {
        stations: [
          {
            name: "hiphop",
            songs: [
              {
                title: "I would leave this place",
                artist: "Bizle",
              },
            ],
          },
          {
            name: "randb",
            songs: [
              {
                title: "Endless Love",
                artist: "Luther Vandross",
              },
            ],
          },
          {
            name: "gospel",
            songs: [
              {
                title: "I Smile",
                artist: "Kirk Franklin",
              },
            ],
          },
        ],
      
        randomly() { 
          //   console.log(this);
          let randomStation = this.stations[Math.floor(Math.random() * this.stations.length)]
          console.log(`Now playing ${randomStation.songs[0].title}, by ${randomStation.songs[0].artist}`);
         }
       
      };
      
      
      // console.log(Radio.stations[2].name);
      Radio.randomly()