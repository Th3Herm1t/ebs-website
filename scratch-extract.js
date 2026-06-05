const fs = require('fs');

const postsPath = 'C:\\Users\\abdel\\.gemini\\antigravity-ide\\brain\\1c12a579-b141-4f91-90b3-a315b417bb40\\.system_generated\\steps\\1256\\content.md';
let postsJson = fs.readFileSync(postsPath, 'utf-8');
postsJson = postsJson.substring(postsJson.indexOf('['));
const posts = JSON.parse(postsJson);

console.log("=== BLOG ARTICLES ===");
const articles = posts.slice(0, 3).map(p => {
    let img = "/images/banner/slide1.jpg";
    if (p.yoast_head_json && p.yoast_head_json.og_image && p.yoast_head_json.og_image[0]) {
        img = p.yoast_head_json.og_image[0].url;
    }
    const date = new Date(p.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    return `{
    title: "${p.title.rendered.replace(/"/g, '\\"')}",
    link: "${p.link}",
    img: "${img}",
    date: "${date}",
    category: "Éducation"
}`;
});
console.log(articles.join(',\n'));

console.log("\n=== EVENTS ===");
const events = posts.slice(3, 7).map(p => {
    let img = "/images/banner/slide1.jpg";
    if (p.yoast_head_json && p.yoast_head_json.og_image && p.yoast_head_json.og_image[0]) {
        img = p.yoast_head_json.og_image[0].url;
    }
    const d = new Date(p.date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleDateString('fr-FR', { month: 'short' });
    return `{
    title: "${p.title.rendered.replace(/"/g, '\\"')}",
    link: "${p.link}",
    img: "${img}",
    day: "${day}",
    month: "${month.toUpperCase()}",
    time: "10:00 - 12:00",
    location: "Campus EBS"
}`;
});
console.log(events.join(',\n'));
