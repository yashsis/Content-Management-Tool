document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("titleInput");
    const contentInput = document.getElementById("contentInput");
    const addButton = document.getElementById("addButton");
    const contentList = document.getElementById("contentItems");
    const contentTypes = document.getElementById("contentTypes");
    const logoutButton = document.getElementById("logoutButton");

    let selectedType = "article"; // Default selected type

    // Simulated content types
    const contentTypesData = [
        { id: "article", name: "Articles" },
        { id: "video", name: "Videos" },
    ];

    // Simulated content items
    const contentItemsData = [
        { title: "Sample Article 1", content: "This is the content of the article.", type: "article" },
        { title: "Sample Video 1", content: "This is the content of the video.", type: "video" },
    ];

    // Fetch and render content types from the server
    function renderContentTypes() {
        contentTypes.innerHTML = contentTypesData.map(type => `<li data-type="${type.id}">${type.name}</li>`).join("");
    }

    // Fetch and render content items based on the selected type
    function renderContentItems(type) {
        contentList.innerHTML = contentItemsData
            .filter(item => item.type === type)
            .map(item => `
                <li>
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    <p class="content-type">${item.type}</p>
                    <button class="delete-button">Delete</button>
                </li>`).join("");
    }

    contentTypes.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            contentTypes.querySelector(".selected").classList.remove("selected");
            event.target.classList.add("selected");
            selectedType = event.target.dataset.type;
            renderContentItems(selectedType);
        }
    });

    addButton.addEventListener("click", function () {
        // Simulate adding content item to the data
        const newContentItem = {
            title: titleInput.value,
            content: contentInput.value,
            type: selectedType,
        };
        contentItemsData.push(newContentItem);
        renderContentItems(selectedType);

        // Clear input fields
        titleInput.value = "";
        contentInput.value = "";
    });

    logoutButton.addEventListener("click", function () {
        // Simulate logout functionality
        window.location.href = "login.html"; // Redirect to the login page
    });

    // Initial render
    renderContentTypes();
    renderContentItems(selectedType);
});