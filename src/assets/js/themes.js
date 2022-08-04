function loadTheme() {
    let theme = window.localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light') {
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(`theme-${theme}`);
    }
}

function toggleTheme() {
    const currentTheme = window.localStorage.getItem("theme");
    if (!currentTheme) { window.localStorage.setItem('theme', "dark"); loadTheme() }
    if (currentTheme === "light") { window.localStorage.setItem('theme', "dark"); loadTheme() }
    if (currentTheme === "dark") { window.localStorage.setItem('theme', "light"); loadTheme() }
}