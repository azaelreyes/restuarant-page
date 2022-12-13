import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';



function navBar(){
    const content = document.getElementById("content");
    const navBarDiv = document.createElement("div");
    navBarDiv.classList.add("navBarDivClass");
    content.appendChild(navBarDiv);

    const homeButtonDiv = document.createElement("div");
    homeButtonDiv.innerHTML="Home"  
    homeButtonDiv.classList.add("navBarButton");
    const menuButtonDiv = document.createElement("div");
    menuButtonDiv.innerHTML = "Menu";
    menuButtonDiv.classList.add("navBarButton");
    const aboutButtonDiv = document.createElement("div");
    aboutButtonDiv.innerHTML="About";
    aboutButtonDiv.classList.add("navBarButton");
    const contactButtonDiv = document.createElement("div");
    contactButtonDiv.innerHTML="Contact";
    contactButtonDiv.classList.add("navBarButton");
    navBarDiv.appendChild(homeButtonDiv);
    navBarDiv.appendChild(menuButtonDiv);
    navBarDiv.appendChild(aboutButtonDiv);
    navBarDiv.appendChild(contactButtonDiv);
    eventListenersAdding();
};

function eventListenersAdding(){
    const navBarButtons = document.getElementsByClassName("navBarButton");
    for (let index = 0; index < navBarButtons.length; index++) {
        let element = navBarButtons[index];
        element.addEventListener("click", () => {
            console.log(element.innerHTML);
            if (element.innerHTML=="Home") {
                clearPage();
                navBar();
                home();
                footer();
            } else if (element.innerHTML== "Menu") {
                clearPage();
                navBar();
                menu();
                footer();
            }else if (element.innerHTML== "About"){
                clearPage();
                navBar();
                about();
                footer();
            }else if (element.innerHTML== "Contact"){
                clearPage();
                navBar();
                contact();
                footer();
            };

        });
        
    };
};

function footer(){
    const footerDiv = document.createElement("div");
    document.getElementById("content").appendChild(footerDiv);
    footerDiv.classList.add("footerDiv");

    const footCol1 = document.createElement("div");
    const footCol2 = document.createElement("div");
    const footCol3 = document.createElement("div");

    footCol1.classList.add("footerCol");
    footCol2.classList.add("footerCol");
    footCol3.classList.add("footerCol");

    footerDiv.appendChild(footCol1);
    footerDiv.appendChild(footCol2);
    footerDiv.appendChild(footCol3);

    footCol1.innerHTML="<h3>Address</h3><p>500 East Lake Ave,<br> Watsonville, CA 95076</p>"
    footCol2.innerHTML="<h3>Hours</h3><p>Wed-Mon: 3:00 PM - 9:00 PM</p>"
    footCol3.innerHTML="<h3>Contact Info</h3><p>Phone: +1 831-431-0084 <br>Email: saborhidalgo831@gmail.com</p>"
    
};




//function to delete everything from page

function clearPage(){
    let parent = document.getElementById("content");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

navBar();
contact();
footer();





