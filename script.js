// Morrow JavaScript — simple beginner-friendly interactions

// Update the character count while someone types a post.
const postText = document.getElementById("postText");
const charCount = document.getElementById("charCount");

if (postText && charCount) {
    postText.addEventListener("input", function () {
        charCount.textContent = postText.value.length + " / 250";
    });
}

// Add a new post to the home feed.
const postButton = document.getElementById("postButton");
if (postButton) {
    postButton.addEventListener("click", function () {
        const message = postText.value.trim();
        if (message === "") {
            alert("Please write something first.");
            return;
        }
        const newPost = document.createElement("article");
        newPost.className = "post";
        const person = document.createElement("div");
        person.className = "person";
        const avatar = document.createElement("div");
        avatar.className = "avatar green";
        avatar.textContent = "Y";
        const name = document.createElement("div");
        name.innerHTML = "<strong>Your Name</strong><small>@yourcorner</small>";
        person.appendChild(avatar);
        person.appendChild(name);
        const paragraph = document.createElement("p");
        paragraph.textContent = message;
        const likeButton = document.createElement("button");
        likeButton.className = "like-button";
        likeButton.innerHTML = "♡ Like <span>0</span>";
        newPost.appendChild(person);
        newPost.appendChild(paragraph);
        newPost.appendChild(likeButton);
        document.querySelector(".feed").appendChild(newPost);
        postText.value = "";
        charCount.textContent = "0 / 250";
        addLikeAction(likeButton);
    });
}

// Make Like buttons work.
function addLikeAction(button) {
    button.addEventListener("click", function () {
        const number = button.querySelector("span");
        let likes = Number(number.textContent);
        if (button.classList.contains("liked")) {
            likes = likes - 1;
            button.classList.remove("liked");
            button.innerHTML = "♡ Like <span>" + likes + "</span>";
        } else {
            likes = likes + 1;
            button.classList.add("liked");
            button.innerHTML = "♥ Liked <span>" + likes + "</span>";
        }
    });
}
document.querySelectorAll(".like-button").forEach(addLikeAction);

// Show a message when the demo login or signup form is submitted.
document.querySelectorAll(".demo-form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.querySelector(".form-message").textContent = form.getAttribute("data-message");
    });
});

// Open and close the profile editor.
const editButton = document.getElementById("editButton");
const editBox = document.getElementById("editBox");
if (editButton && editBox) {
    editButton.addEventListener("click", function () {
        editBox.classList.toggle("hidden");
    });
}

// Save the new profile name and bio on the page.
const saveButton = document.getElementById("saveButton");
if (saveButton) {
    saveButton.addEventListener("click", function () {
        const newName = document.getElementById("newName").value;
        const newBio = document.getElementById("newBio").value;
        document.getElementById("profileName").textContent = newName;
        document.getElementById("profileBio").textContent = newBio;
        document.querySelector(".profile-avatar").textContent = newName.charAt(0).toUpperCase();
        editBox.classList.add("hidden");
    });
}
