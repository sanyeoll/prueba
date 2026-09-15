const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = windows.innerwidth;
canvas.height = windows.innerwidth;
const words = ["love you","I LOVE YOU","Te amo"];
let angle =0;
function drawHeart(){
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0, canvas.width,canvas.height);
const cx = canvas.width / 2;
const cy = canvas.height/ 2;
for (let i = 0; i < 150; i++){
    let t = i * 0.1 + angle;
    let x = 16 * Math.pow(Math.sin(t),3);
    let y = -(13 * Math.cos(t) - 5 * Math.cos (2 *t ) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    let scale = Math.min(canvas.width,canvas.height) /40;
    let px = cx + x * scale;
    let py = cy + y * scale;
    ctx.fillStyle = "#00aaff";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#00aaff";
    ctx.font = "12px Arial";
    ctx.fillText(words[i % words.length], px, py);
}
angle += 0.01;
requestAnimationFrame(drawHeart);
}
drawHeart();
