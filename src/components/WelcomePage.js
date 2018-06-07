import React from 'react';
import Welcome from './Welcome';




const imgSrc = [
    "https://drive.google.com/uc?id=1cxJuRbFGHLnUFF2zZtkSr1jfY5BPAhBI",
    "https://drive.google.com/uc?id=140LZvn_vrM6LebzM1_IghEr1Vym3cJu2",
    "https://drive.google.com/uc?id=13tRVOqB-ZU3dumoOYW5WCMNKJDCYv0j-",
    "https://drive.google.com/uc?id=1FxwPSljkOILNVtnsoA2yHc8GGkT356f-"
    ];

class WelcomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { image:"https://drive.google.com/uc?id=1cxJuRbFGHLnUFF2zZtkSr1jfY5BPAhBI"};

    this.interval = null;
    this.changeBG = this.changeBG.bind(this);
  }


  changeBG() {
    let nextPageBG = imgSrc[Math.floor(Math.random() * imgSrc.length)];
    this.setState(() => ({image: nextPageBG }));
  }

  componentDidMount() {
   this.interval = setInterval(this.changeBG, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const bgSrc = this.state.image;
    console.log(bgSrc);
    return (
        <Welcome bgSrc={bgSrc} />

    )
  }
}

export default WelcomePage;
