const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

function addScrambleEffect(element) {
  const originalText = element.innerText;
  let interval = null;

  element.addEventListener("mouseenter", () => {
    // Reset iteration on every mouseenter
    let iteration = 0;

    // Clear any previous interval immediately
    clearInterval(interval);

    interval = setInterval(() => {
      const scrambled = originalText
        .split("")
        .map((char, idx) => {
          return idx < iteration
            ? char
            : characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      element.innerText = scrambled;

      iteration += 0.2;

      if (iteration >= originalText.length) {
        clearInterval(interval);
        element.innerText = originalText;
      }
    }, 140);
  });
}

addScrambleEffect(document.querySelector("h1"));
addScrambleEffect(document.querySelector("h2"));
addScrambleEffect(document.querySelector("p"));
