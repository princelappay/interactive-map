function showLocation(place) {
    let title = "";
    let description = "";
    let image = "";

    switch(place) {
        case "office":
            title = "Offices";
            description = "Business centers where companies operate and employees work.";
            image = "images/office.png";
            break;

        case "countryside":
            title = "Countryside";
            description = "Peaceful areas with farms, nature, and fresh air.";
            image = "images/countryside.png";
            break;

        case "playground":
            title = "Playground";
            description = "A fun place for kids to play and relax.";
            image = "images/playground.png";
            break;

        case "house":
            title = "Residential Houses";
            description = "Homes where families live and rest.";
            image = "images/house.png";
            break;

        case "industry":
            title = "Industries";
            description = "Factories and industrial zones producing goods.";
            image = "images/industry.png";
            break;
    }

    document.getElementById("locationTitle").innerText = title;
    document.getElementById("locationDesc").innerText = description;
    document.getElementById("locationImage").src = image;
}