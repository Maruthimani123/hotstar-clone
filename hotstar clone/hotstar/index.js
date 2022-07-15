let movies = [
    {
      name: "falcon and the winter solider",
      des:
        "The Falcon and the Winter Soldier[a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "images/slider2.png"
    },
    {
      name: "loki",
      des:
        "The Falcon and the Winter Soldier[a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "images/slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "The Falcon and the Winter Soldier[a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "images/slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "The Falcon and the Winter Soldier[a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "images/slider 4.png"
    },
    {
      name: "luca",
      des:
        "The Falcon and the Winter Soldier[a] is an American television miniseries created by Malcolm Spellman for the streaming service Disney+, based on Marvel Comics featuring the characters Sam Wilson / Falcon and Bucky Barnes / Winter Soldier.",
      image: "images/slider 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createslide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //dom elem
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attatch
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //imgs
    imgElement.sr = movies[slideIndex].image;
    slideIndex++;
  
    //setting
    slide.className = "slider";
    content.className = "slider-content";
    h1.classname = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (slide.length) {
      sliders[0].style.marginleft = `clac(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createslide();
  }
  
  setInterval(() => {
    createslide();
  }, 3000);
  