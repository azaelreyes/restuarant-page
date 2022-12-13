const about = () =>{
    const content = document.getElementById("content");
    const aboutMainDiv = document.createElement("div");
    aboutMainDiv.classList.add("aboutMainDivClass");
    content.appendChild(aboutMainDiv);


    const aboutH1 = document.createElement("h1")
    aboutH1.innerHTML="About";
    aboutMainDiv.appendChild(aboutH1);

    const aboutChildDiv = document.createElement("div");
    content.appendChild(aboutChildDiv);
    aboutChildDiv.classList.add("aboutChildDiv")


    const child1 = document.createElement('div');
    aboutChildDiv.appendChild(child1);


    const child2 = document.createElement('div');
    aboutChildDiv.appendChild(child2);



    const image = document.createElement("img")
    image.src  = "./hidalgo.png";
    child1.appendChild(image);
    image.classList.add("aboutImg")
    child1.classList.add("childItems")

    const textParagraph = document.createElement("p");
    child2.appendChild(textParagraph);
    textParagraph.innerHTML="<h3>About Sabor Hidalgo</h3><hr>"
    textParagraph.innerHTML+="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis."
    child2.classList.add("childItems")
};

export default about;