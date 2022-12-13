const menu = () => {



    const titleDiv = document.createElement("div");
    document.getElementById("content").appendChild(titleDiv);
    titleDiv.classList.add("titleDiv")


    const titleHeader = document.createElement("h1");
    titleHeader.classList.add("menuTitleH1")
    titleHeader.innerHTML="Menu";
    titleDiv.appendChild(titleHeader);

    const menuDiv = document.createElement("div");
    titleDiv.appendChild(menuDiv);
    menuDiv.classList.add("menuDiv");

    const entreesCol = document.createElement("div");
    const meatsCol = document.createElement("div");
    menuDiv.appendChild(entreesCol);
    menuDiv.appendChild(meatsCol);
 


    const entreesTitle = document.createElement("h2");
    const meatsTitle = document.createElement("h2");
    entreesTitle.innerHTML = "Entrees";
    entreesCol.classList.add("column");
    meatsTitle.innerHTML = "Meats";
    meatsCol.classList.add("column");
    entreesCol.appendChild(entreesTitle);
    meatsCol.appendChild(meatsTitle);
    const entreesContent = document.createElement('p');
    entreesContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.";
    entreesContent.innerHTML += "<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.";
    entreesContent.innerHTML += "<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.";

    entreesCol.appendChild(entreesContent);
    const meatsContent = document.createElement('p');
    meatsContent.innerHTML = entreesContent.innerHTML;
    meatsCol.appendChild(meatsContent);
};

export default menu;