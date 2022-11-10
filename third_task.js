
function diagramCreate(data, width, height, color) {
    let diagram = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    diagram.style.width = width;
    diagram.style.height = height;

    let max = data[0];

    for (let i = 0; i < data.length; i++){
        if(max < data[i])max = data[i]
    };
    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    for (let i = 0; i < data.length; i++){
        let bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  console.log(bar)
        let barHeight = data[i] * scale;
        bar.setAttribute("height", barHeight + "px")
        bar.setAttribute("width", barWidth -5 +"px")
        

        bar.setAttribute("y", height - barHeight);
        bar.setAttribute("x", barWidth*i);
        bar.style.fill = color;

        diagram.append(bar)

    }
    return diagram
}