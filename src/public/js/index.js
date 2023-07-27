function menu() {
    var menuDiv = document.getElementById("mobile-menu-2")
    var openIcon = document.getElementById("openIcon")
    var closeIcon = document.getElementById("closeIcon")
    if(menuDiv.classList.contains('hidden')) {
        menuDiv.classList.remove('hidden')
        openIcon.classList.add('hidden')
        closeIcon.classList.remove('hidden')
    } else {
        menuDiv.classList.add('hidden')
        openIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
    }
}