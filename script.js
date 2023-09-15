function getKanyeQuote() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const quote = data.quote;
      const quoteContainer = document.createElement("div");
      const italicQuote = document.createElement("em");
      italicQuote.classList.add("kanye");
      italicQuote.innerText = `"${quote}"`;

      // Append the quote container below the main container
      const container = document.querySelector("body");
      italicQuote.appendChild(quoteContainer);
      container.appendChild(italicQuote);

      const kanye = document.createElement("div");
      kanye.classList.add("kanye");
      kanye.classList.add("kanye-name");
      kanye.innerText = `-Kanye West`;

      // Append the quote container below the main container
      container.appendChild(kanye);
    })
    .catch((error) => {
      console.error("Error fetching Kanye quote:", error);
    });
}

function getRandomQuote() {
  const quotesData = `"Travel makes one modest; you see what a tiny place you occupy in the world." - Gustave Flaubert
  "Adventure is worthwhile in itself." - Amelia Earhart
  "Traveling – it leaves you speechless, then turns you into a storyteller." - Ibn Battuta
  "To travel is to live." - Hans Christian Andersen
  "The world is a book, and those who do not travel read only one page." - Saint Augustine
  "Travel far enough, you meet yourself." - David Mitchell
  "A journey is best measured in friends, rather than miles." - Tim Cahill
  "Travel is fatal to prejudice, bigotry, and narrow-mindedness." - Mark Twain
  "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes." - Marcel Proust
  "I haven't been everywhere, but it's on my list." - Susan Sontag
  "Adventure may hurt you, but monotony will kill you." - Unknown
  "Travel is the only thing you can buy that makes you richer." - Unknown
  "Travel far, travel wide, and travel often." - Unknown
  "Life is short, and the world is wide." - Simon Raven
  "Travel is about the gorgeous feeling of teetering in the unknown." - Anthony Bourdain
  "Travel is an investment in yourself." - Unknown
  "Wanderlust: A desire to travel, to understand one's very existence." - Unknown
  "Don't listen to what they say. Go see." - Unknown
  "Travel is the best teacher." - Unknown
  "Adventure awaits, go find it." - Unknown
  "The journey not the arrival matters." - T.S. Eliot
  "Travel far and wide, but travel with an open heart." - Unknown
  "Travel is the antidote to ignorance." - Trevor Noah
  "Life begins at the end of your comfort zone." - Neale Donald Walsch
  "Travel makes you realize that no matter how much you know, there's always more to learn." - Nyssa P. Chopra
  "Travel is not reward for working, it's education for living." - Unknown
  "Travel far enough to meet yourself." - David Mitchell
  "The biggest adventure you can take is to live the life of your dreams." - Oprah Winfrey
  "Adventure is calling, I must go." - Unknown
  "Travel far, travel wide, and travel free." - Marty Rubin
  "Adventure is worthwhile in itself." - Amelia Earhart
  "Travel is the only thing you can spend money on that will make you richer." - Unknown
  "Travel is the only thing that makes you richer." - Unknown
  "Travel and change of place impart new vigor to the mind." - Seneca
  "To travel is to discover that everyone is wrong about other countries." - Aldous Huxley
  "Travel far, travel wide, travel often." - Unknown
  "Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comfort of home and friends." - Cesare Pavese
  "I am not the same, having seen the moon shine on the other side of the world." - Mary Anne Radmacher
  "Travel far and wide, but travel with an open heart." - Unknown
  "Jobs fill your pocket, but adventures fill your soul." - Jaime Lyn Beatty
  "Travel is never a matter of money but of courage." - Paulo Coelho
  "Travel far and wide, but travel with an open heart." - Unknown
  "Traveling – it leaves you speechless, then turns you into a storyteller." - Ibn Battuta
  "Travel, in the younger sort, is a part of education; in the elder, a part of experience." - Francis Bacon
  "To travel is to take a journey into yourself." - Danny Kaye
  "Adventure is worthwhile in itself." - Amelia Earhart
  "Travel far, travel wide, and travel free." - Marty Rubin
  "Travel is the only thing you can buy that makes you richer." - Unknown
  "Wanderlust: A desire to travel, to understand one's very existence." - Unknown
  "Travel makes one modest; you see what a tiny place you occupy in the world." - Gustave Flaubert
  "Life is short, and the world is wide." - Simon Raven
  "Travel and change of place impart new vigor to the mind." - Seneca
  "Adventure may hurt you, but monotony will kill you." - Unknown
  "Travel is the only thing you can spend money on that will make you richer." - Unknown
  "Travel far enough, you meet yourself." - David Mitchell
  "Travel is the only thing that makes you richer." - Unknown
  "Adventure is worthwhile in itself." - Amelia Earhart
  "Travel is not reward for working, it's education for living." - Unknown
  "Travel far and wide, but travel with an open heart." - Unknown
  "Travel makes you realize that no matter how much you know, there's always more to learn." - Nyssa P. Chopra
  "Travel is an investment in yourself." - Unknown
  "Don't listen to what they say. Go see." - Unknown
  "Travel is the best teacher." - Unknown
  "Adventure awaits, go find it." - Unknown
  "The journey not the arrival matters." - T.S. Eliot
  "Travel far enough to meet yourself." - David Mitchell
  "The biggest adventure you can take is to live the life of your dreams." - Oprah Winfrey
  "Adventure is calling, I must go." - Unknown
  "Travel far, travel wide, and travel free." - Marty Rubin
  "Adventure is worthwhile in itself." - Amelia Earhart
  "Travel is the only thing you can spend money on that will make you richer." - Unknown
  "Travel is the only thing that makes you richer." - Unknown
  "Travel and change of place impart new vigor to the mind." - Seneca
  "To travel is to discover that everyone is wrong about other countries." - Aldous Huxley
  "Travel far, travel wide, travel often." - Unknown
  "Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comfort of home and friends." - Cesare Pavese
  "I am not the same, having seen the moon shine on the other side of the world." - Mary Anne Radmacher
  "Travel far and wide, but travel with an open heart." - Unknown
  "Jobs fill your pocket, but adventures fill your soul." - Jaime Lyn Beatty
  "Travel is never a matter of money but of courage." - Paulo Coelho
  "Travel far and wide, but travel with an open heart." - Unknown
  "Traveling – it leaves you speechless, then turns you into a storyteller." - Ibn Battuta
  "Travel, in the younger sort, is a part of education; in the elder, a part of experience." - Francis Bacon
  "To travel is to take a journey into yourself." - Danny Kaye
  "Adventure is worthwhile in itself." - Amelia Earhart
  "Travel far, travel wide, and travel free." - Marty Rubin
  "Travel is the only thing you can buy that makes you richer." - Unknown
  "Wanderlust: A desire to travel, to understand one's very existence." - Unknown
  "Travel makes one modest; you see what a tiny place you occupy in the world." - Gustave Flaubert
  "Life is short, and the world is wide." - Simon Raven
  "Travel and change of place impart new vigor to the mind." - Seneca
  "Adventure may hurt you, but monotony will kill you." - Unknown
  "Travel is the only thing you can spend money on that will make you richer." - Unknown
  "Travel far enough, you meet yourself." - David Mitchell
  "Travel is the only thing that makes you richer." - Unknown
  "Adventure is worthwhile in itself." - Amelia Earhart
  "Travel is not reward for working, it's education for living." - Unknown
  "Travel far and wide, but travel with an open heart." - Unknown
  "Travel makes you realize that no matter how much you know, there's always more to learn." - Nyssa P. Chopra
  "Travel is an investment in yourself." - Unknown`;

  const quotes = quotesData.split("\n").filter(Boolean);

  const jsonArray = [];

  quotes.forEach((quote) => {
    const [quoteText, author] = quote.split("-").map((str) => str.trim());
    jsonArray.push({ quote: quoteText.slice(1, -1), author: author });
  });

  return jsonArray[Math.floor(Math.random() * jsonArray.length)];
}

function travellingQuote() {
  const data = getRandomQuote();
  // console.log(data);

  const quote = data.quote;
  const author = data.author;
  const quoteContainer = document.createElement("div");
  const italicQuote = document.createElement("em");
  italicQuote.classList.add("kanye");
  italicQuote.innerText = `"${quote}"`;

  // Append the quote container below the main container
  const container = document.querySelector("body");
  italicQuote.appendChild(quoteContainer);
  container.appendChild(italicQuote);

  const kanye = document.createElement("div");
  kanye.classList.add("kanye");
  kanye.classList.add("kanye-name");
  kanye.innerText = `- ${author}`;

  container.appendChild(kanye);
}

window.onload = function () {
  travellingQuote();
};

function shareLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        function isMobileDevice() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        }

        let url;

        if (isMobileDevice()) {
          url = `https://maps.google.com/?q=${latitude},${longitude}`;
        } else {
          url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        }
        const message = `Check out my location: ${url}`;

        if (navigator.share) {
          navigator
            .share({
              title: "My Location",
              text: message,
              //   url: url,
            })
            .then(() => console.log("Shared successfully"))
            .catch((error) => console.error("Error sharing:", error));
        } else {
          console.log("Web Share API not supported.");
          alert(
            "Web Share API is not supported in this browser. You can manually copy the link and share it."
          );
        }
      },
      function (error) {
        console.error("Error getting location:", error);
        alert("Error getting location. Please try again later.");
      }
    );
  } else {
    console.log("Geolocation is not available in this browser.");
    alert("Geolocation is not available in this browser.");
  }
}
