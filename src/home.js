const home = ()=> {
    const content = document.getElementById("content");
    const headingDiv = document.createElement("div");
    headingDiv.classList.add("homeHeadingDiv");
    const heading = document.createElement("h1");
    heading.innerHTML = 'Sabor Hidalgo';
    heading.classList.add("homeH1Class")
    const subHeading = document.createElement("h3");
    subHeading.innerHTML = "Authentic Mexican Food";
    subHeading.classList.add("homeH3Class");
    content.appendChild(headingDiv);
    headingDiv.appendChild(heading);
    headingDiv.appendChild(subHeading);


    const image = document.createElement("IMG")
    image.src  = "./hidalgo.png";
    content.appendChild(image);
    image.classList.add("homeHeadingImg")

   
    const description = document.createElement("div");
    content.appendChild(description);
    description.classList.add("homeDescription");
    const map = document.createElement("iframe")
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.832547964527!2d-121.74892480000001!3d36.918267900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e1b161c99e2d7%3A0xa4dd06f8618c9fce!2s500%20E%20Lake%20Ave%2C%20Watsonville%2C%20CA%2095076!5e0!3m2!1sen!2sus!4v1670888232316!5m2!1sen!2sus";
    description.appendChild(map);
    map.classList.add("mapClass");

    const desDivForH1AndP = document.createElement("div")
    description.appendChild(desDivForH1AndP);

    const desH1= document.createElement('h2');
    desH1.innerHTML="Sabor Hidalgo";
    desDivForH1AndP.appendChild(desH1);

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerHTML="A fully equipped restaurant on wheels serving-up a delicious array of authentic hidalguense food."
    desDivForH1AndP.appendChild(descriptionParagraph);
    descriptionParagraph.classList.add("descriptionParagraph");
    



};

export default home;