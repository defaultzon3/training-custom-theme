const customTheme = document.createElement("link");
customTheme.rel = "stylesheet"; 
customTheme.type = "text/css";
customTheme.href = "https://defaultzon3.github.io/customTheme.css"
customTheme.media = "all";

document.getElementsByTagName("head")[0].appendChild(customTheme); // add custom css to index.html

// add custom shortcut icon to index.html

const customShortcutIcon = document.createElement("link");
customShortcutIcon.rel = "shortcut icon"; 
customShortcutIcon.type = "icon/png";
customShortcutIcon.href = "https://raw.githubusercontent.com/defaultzon3/defaultzon3.github.io/main/forum-icon.png"

document.getElementsByTagName("head")[0].appendChild(customShortcutIcon)