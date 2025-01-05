const helplines = [
    { companyName: "National Helpline 109", contacts: [
        { type: "Phone", number: "109", email: null },
        { type: "Email", number: null, email: "mspvaw@yahoo.com" },
        { type: "Website", number: null, email: null, link: "https://mowca.gov.bd/" }
    ] },
    { companyName: "Bangladesh Child Helpline 1098", contacts: [
        { type: "Phone", number: "1098", email: null },
        { type: "Email", number: null, email: null }
    ] },
    { companyName: "Kaan Pete Roi", contacts: [
        { type: "Phone", number: "+8809612-119911", email: null },
        { type: "Email", number: null, email: "info@kaanpeteroi.org" }
    ] },
    { companyName: "Joruri Sheba 999", contacts: [
        { type: "Phone", number: "999", email: null },
        { type: "Email", number: null, email: null }
    ] },
    { companyName: "Bangladesh", contacts: [
        { type: "Phone", number: "16263", email: null }, 
        { type: "Phone", number: "+8802-223374409", email: null },
        { type: "Email", number: null, email: "nimhr@hospi.dghs.gov.bd" },
        { type: "Website", number: null, email: null, link: "https://nimh.gov.bd/" }
    ] }
];

document.addEventListener("DOMContentLoaded", () => {
    const helplineList = document.getElementById("helpline-list");

    helplines.forEach(helpline => {
        const listItem = document.createElement("li");

        const countryHeader = document.createElement("strong");
        countryHeader.textContent = helpline.companyName;
        listItem.appendChild(countryHeader);

        helpline.contacts.forEach(contact => {
            const contactItem = document.createElement("div");
            contactItem.className = "contact-item";
            
            if (contact.number) {
                const text = document.createElement("span");
                text.textContent = `${contact.type}: ${contact.number}`;
                contactItem.appendChild(text);

                const callButton = document.createElement("button");
                callButton.textContent = "Call";
                callButton.onclick = () => {
                    window.location.href = `tel:${contact.number}`;
                };
                contactItem.appendChild(callButton);
            }

            if (contact.email) {
                const emailText = document.createElement("span");
                emailText.textContent = `${contact.type}: ${contact.email}`;
                contactItem.appendChild(emailText);

                const emailButton = document.createElement("button");
                emailButton.textContent = "Email";
                emailButton.onclick = () => {
                    window.location.href = `mailto:${contact.email}`;
                };
                contactItem.appendChild(emailButton);
            }

            if (contact.link) {
                const linkText = document.createElement("span");
                linkText.textContent = `Website: ${contact.link}`;
                contactItem.appendChild(linkText);

                const websiteButton = document.createElement("button");
                websiteButton.textContent = "Visit";
                websiteButton.onclick = () => {
                    window.location.href = contact.link;
                };
                contactItem.appendChild(websiteButton);
            }

            listItem.appendChild(contactItem);
        });

        helplineList.appendChild(listItem);
    });
});
