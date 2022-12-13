const contact = () =>{
    const content = document.getElementById("content");
    const contactDiv = document.createElement("div");
    content.appendChild(contactDiv);
    contactDiv.classList.add("contactDiv");


    const map = document.createElement("iframe")
    map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.832547964527!2d-121.74892480000001!3d36.918267900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e1b161c99e2d7%3A0xa4dd06f8618c9fce!2s500%20E%20Lake%20Ave%2C%20Watsonville%2C%20CA%2095076!5e0!3m2!1sen!2sus!4v1670888232316!5m2!1sen!2sus";
    contactDiv.appendChild(map);
    map.classList.add("contactMap");

    const textContact = document.createElement("div");
    contactDiv.appendChild(textContact);
    textContact.classList.add("textContact")
    textContact.innerHTML="<h1>Contact Us Today!</h1>"
    textContact.innerHTML+="<h3>Address</h3><p>500 East Lake Ave,<br> Watsonville, CA 95076</p>";
    textContact.innerHTML+="<h3>Hours</h3><p>Wed-Mon: 3:00 PM - 9:00 PM</p>"
    textContact.innerHTML+="<h3>Contact Info</h3><p>Phone: +1 831-431-0084 <br>Email: saborhidalgo831@gmail.com</p>"
};

export default contact;