function create_preview(main, image_source, destination, preview_name, text, technologies)
{
    const article = document.createElement("article");
    article.id = preview_name;

    const content = document.createElement("div");

    const preview = document.createElement("a");
    preview.href = destination;

    const image = document.createElement("img");
    image.src = image_source;

    const information = document.createElement("div");

    const header = document.createElement("h1");
    header.textContent = preview_name;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    const tech = document.createElement("div");
    tech.className = "technologies";

    article.appendChild(content);
    content.appendChild(preview);
    preview.appendChild(image);

    content.appendChild(information);
    information.appendChild(header);
    information.appendChild(paragraph);

    article.appendChild(tech);
    tech.append("Technologies: ");
    for(const technology of technologies)
    {
        tech.append(technology, ", ");
    }
    tech.innerHTML = tech.innerHTML.slice(0, -2);

    main.appendChild(article);
}