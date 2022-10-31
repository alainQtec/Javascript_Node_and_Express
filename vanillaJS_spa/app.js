const mainPage = document.getElementById("main-page");
// document.write('<html><body><h2>HTML</h2></body></html>');
// var tag_id = document.getElementById('tagid');
// var newNode = document.createElement('p');
// newNode.appendChild(document.createTextNode('html string'));
const routes = {
  404: "/views/404.html",
  "/": "/views/Home.html",
  "/Dashboard": "/views/Dashboard.html",
  "/Settings": "/views/Settings.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  mainPage.innerHTML = html;
  console.log(html);
};

window.route = (e) => {
  const { event } = window;
  e = e || event;
  e.preventDefault();
  let url = e.target.href;
  window.history.pushState({}, "", url);
  handleLocation()
    .then(() => console.log("viewing:", url))
    .catch((err) => console.log("Error Occurred reason: ", err));
};
window.onpopstate = handleLocation;
handleLocation().then((r) => console.log(r));
