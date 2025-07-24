let body = $response.body.replace(/while\s*\(1\);?\n/, "");

console.log("== Lightroom ==");
console.log(body);

$done({ body });
