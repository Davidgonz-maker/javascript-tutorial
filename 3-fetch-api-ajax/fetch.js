function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

function createCommit(commits) {
  const urlProfile = commits[0].author.avatar_url;
  const author = commits[0].commit.committer.name;

  const root = document.getElementById("root");
  const containerCommit = document.createElement("div");
  const imgProfile = document.createElement("img");
  const titleProfile = document.createElement("h1");

  imgProfile.src = urlProfile;
  imgProfile.alt = "Profile committer";
  titleProfile.textContent = author;

  containerCommit.appendChild(imgProfile);
  containerCommit.appendChild(titleProfile);

  root.appendChild(containerCommit);
}

(function main() {
  getData(
    "https://api.github.com/repos/pushdev-code/javascript-tutorial/commits"
  ).then((res) => createCommit(res)).catch;
})();
