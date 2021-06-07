{
    function add_image(gallery, image_source)
    {
        const image = document.createElement("img");
        image.src = image_source;

        gallery.appendChild(image);
    }

    globalThis.create_header();
    // globalThis.create_navigation();

    const about = document.getElementById("About");
    if(about)
    {
        about.className = "selected";
    }

    const main = document.createElement("main");
    main.id = "Main";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome to my portfolio."

    const gallery = document.createElement("div");
    gallery.id = "Gallery";
    add_image(gallery, "images/Prism Break.png");
    add_image(gallery, "images/Space Duel.png");
    add_image(gallery, "images/Bowel Movement.png");
    add_image(gallery, "images/Basketball.png");

    main.appendChild(paragraph);
    // main.appendChild(gallery);
    globalThis.create_preview
    (
        main,
        "images/Prism Break.png",
        "https://github.com/Camieleon/Prism-Break",
        "Prism Break",
        "Do you have what it takes to break out of the most sophisticated prison ever created? Solve mind-bending puzzles by pointing your laser in the right direction.",
        ["Haxe", "OpenFL"]
    );

    globalThis.create_preview
    (
        main,
        "images/Space Duel.png",
        "https://github.com/Camieleon/Space-Duel",
        "Space Duel",
        "This game revolves around gravity. Invite one of your friends and try to outsmart eachother, using the most ubiquitous power that nature has to offer.",
        ["Haxe", "OpenFL"]
    );

    globalThis.create_preview
    (
        main,
        "images/Bowel Movement.png",
        "https://github.com/Camieleon/Bowel-Movement",
        "Bowel Movement",
        "Have fun in this ridiculous interactive physics simulation. Score as many points as possible by interacting with the objects you placed.",
        ["Haxe", "OpenFL", "Nape"]
    );

    globalThis.create_preview
    (
        main,
        "images/Basketball.png",
        "https://github.com/Camieleon/Basketball",
        "Basketball",
        "In this game you're facing a computer controlled basketball player, that doesn't know how to quit. Your goal is to score as many points as your can.",
        ["Haxe", "OpenFL"]
    );

    document.body.appendChild(main);

    globalThis.create_footer();
}
