const sendEmail = (Name, Email, phonenumber, message) => {
    const recipientEmail = "elsearttech@gmail.com";
    const subject = "New Form Submission";
    const body =
        "Name: " + Name +
        "\nEmail: " + Email +
        "\nPhone Number: " + phonenumber +
        "\nMessage:" + message;

    const mailtoLink = "mailto:" + recipientEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    const link = document.createElement("a");
    link.href = mailtoLink;
    link.target = "_blank";
    link.style.display = "none";
    document.body.appendChild(link);

    link.click();
};

const onGet = () => {
    const Name = document.getElementById('Name').value;
    const Email = document.getElementById('Email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const message = document.getElementById('message').value;

    // Check if any of the required fields are empty
    if (!Name || !Email || !message || !phonenumber) {
        alert("All fields are mandatory!");
        return; // Exit the function without proceeding
    }

    sendEmail(Name, Email, phonenumber, message);
};





