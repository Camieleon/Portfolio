function create_header()
{
    const header = document.createElement("header");
    header.id = "Header";

    const anchor = document.createElement("a");
    anchor.href = "index.html";
    anchor.textContent = "Camiel Nowak";

    header.appendChild(anchor);
    header.append("Game Developer");

    document.body.appendChild(header);
}