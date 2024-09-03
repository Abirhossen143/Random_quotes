const blockQuote = document.querySelector(".blockquote");
const authorName = document.querySelector(".authorname");

const api = "https://api.quotable.io/random";
async function get_quoete(url) {
  const response = await fetch(url);
  var data = await response.json();
  blockQuote.textContent = data.content;
  authorName.textContent = data.author;
}
get_quoete(api);
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + blockQuote.textContent,
    "Tweet window",
    "width=600",
    "height=300"
  );
}
