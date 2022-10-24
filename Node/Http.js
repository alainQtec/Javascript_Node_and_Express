import http from "http";

export function startmyServer(req, res) {
  const server = http.createServer((req, res) => {
    console.log("request url:", req.url);
    if (req.url === "/") {
      res.write("Welcome To the Homepage Website");
    } else if (req.url === "/about") {
      res.write("Hello\n\n\t\tThis is the about Page");
    } else if (req.url === "/9*98whidden@fdfdDs7&nope!") {
      res.write("\n\t\tThis the Hidden Page;\n\n\tHorray! you Found It !!!");
    } else {
      res.write(
        "\n\t\tError: 404\n\n\nWe can't seem to find the page that You are looking for!"
      );
    }
    res.end();
  });
  server.listen(3000);
  console.log("Server listening at port 3000 ...");
}
