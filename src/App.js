import React, { Component } from "react";
import PirateCard from "./components/PirateCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pirates from "./pirates.json";
import Nav from "./components/Nav";
import shuffle from "shuffle-array";

class App extends Component {

  state = {
    
    pirates,  

    score: 0,

    highscore: 0

  };

  /**
   * @function: GameFin
   * The fate of the world is decided when:
   * 1) the Admiral captures a pirate more than once, allowing Bon Clay to Fort the Marines planes (loss)
   * 2) the Admiral is able to capture all the Straw Hats (win)
   */
  GameFin = () => {

    
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score});
    }

    /* If the user captures each pirate exactly once, they win.
       Otherwise they all escape */
    if(this.state.score === this.state.pirates.length){
      alert("Way to go Hero of the Navy! All the Straw Hats have been captured! " + this.state.score);
    } else {

      alert(`Bon Clay has thwarted your plans, you've already captured this pirate and the Straw Hats were able to save their friends! \nscore: ${this.state.score}`);
    }

    /*  Start new game : Set 'score' to 0 and the count 
        for each pirate */
    this.setState({score: 0});

    this.state.pirates.forEach( (pirate) => {

      pirate.count = 0;
    });


    return true;
  }

  /**
   * @function: CapturePirate
   * invoked each time a pirate is captured
   */
  CapturePirate = (id) => {

    let pirates = this.state.pirates;
    
    let i = pirates.findIndex((pirate) => {
      return(pirate.id === id);
    });

    // console.log("User has captured " + pirates[i].name);

    /* If the pirate is uncaptured their count says at 0
       Increment user's score and shuffle the pirates */
    if(pirates[i].count === 0){
      pirates[i].count += 1;

      /* Shuffle the pirates using the Shuffle-array NPM Package */
     pirates = shuffle(pirates)

      /* Update the App's state to reflect the new score, and the re-shuffled
         pirates */
      this.setState({

                      score : this.state.score + 1,

                      pirates : pirates

                    });
    } else {

      // console.log("You'ce captured" + pirates[i].name);

      this.GameFin();
      
    }
  }


  componentDidUpdate = () =>{

    /* If the user has captured each pirate once, the score should 
       equal the number of pirates (characters). The user wins and the game is over. */
    // console.log("Pirate Captured");
    if(this.state.score === this.state.pirates.length){

      this.GameFin();

    }
  }

  // Map over this.state.pirates and render a PirateCard component for each pirate object

  render() {

    return (

      <div>

        <Nav 

        score ={this.state.score}

        highScore={this.state.highscore}
        
        />


        <Title>

          <header className='instructions'>

            <h1 className="GameTitle">Ahoy Admiral!</h1>

            <h2>Welcome to Pirate Capture! Click on a  Straw Hat Pirate to capture them. Don't capture a pirate more than once or Bon Clay will distract you and allow the Straw Hats to save their friends!</h2>


            </header>

        </Title>

      <Wrapper>

        {this.state.pirates.map(pirate => (

          <PirateCard

            capturePirate={this.CapturePirate}

            id={pirate.id}

            key={pirate.id}

            name={pirate.name}

            image={pirate.image}

          />

        ))}

      </Wrapper>

      </div>

    );

  }

}

export default App;



