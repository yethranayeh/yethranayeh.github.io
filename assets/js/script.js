// Keep dropdown open for smaller screens
const projectsDropdown = document.getElementById("projects-dropdown")
const projectsDropdownToggle = document.getElementById("projects-dropdown-toggle")
const projectsDropdownMenu = document.getElementById("projects-dropdown-menu")


window.addEventListener('resize', function(event){
    if (screen.width <992) {
        
        if (!projectsDropdown.classList.contains("show")) {
            projectsDropdown.classList.add("show")
            projectsDropdownMenu.classList.add("show")
            projectsDropdownMenu.style = "margin-left: 0"
            projectsDropdownToggle.setAttribute("aria-expanded", "true")
        }
    } else {
        if (projectsDropdown.classList.contains("show")) {
            projectsDropdown.classList.remove("show")
            projectsDropdownMenu.classList.remove("show")
            projectsDropdownMenu.style = "margin-left: -200px"
            projectsDropdownToggle.setAttribute("aria-expanded", "false")
        }
    }
});