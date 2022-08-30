function loadTheme() {
    getDefaultPassword();
    let theme = window.localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light') {
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(`theme-${theme}`);
    }
    if (!theme) {
        document.body.classList.add(`theme-light`);
    }
}

function toggleTheme() {
    const currentTheme = window.localStorage.getItem("theme");
    if (!currentTheme) { window.localStorage.setItem('theme', "dark"); }
    if (currentTheme === "light") { window.localStorage.setItem('theme', "dark"); }
    if (currentTheme === "dark") { window.localStorage.setItem('theme', "light"); }
    loadTheme();
}
