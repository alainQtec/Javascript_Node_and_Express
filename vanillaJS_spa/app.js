console.log("app running ...");

// document.write('<html><body><h2>HTML</h2></body></html>');
// var tag_id = document.getElementById('tagid');
// var newNode = document.createElement('p');
// newNode.appendChild(document.createTextNode('html string'));
let title = 'My Document';

// language=HTML
if (typeof document == "undefined") {
    console.log("DOM not found!")
}else {
    document.write(`    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
    </head>
    <body>
        <p>lorem ipsum .... abcbdbef</p>
    </body>
    </html>
    `);
}