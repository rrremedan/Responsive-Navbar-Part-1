var mobileBreakpoint =600; 
/*when the page loads, add an open class to nav if
    the screen is wide enough. */

window.onload = function() {
    var screenWidth = window.innerWidth;
    var globalNavbar = document.getElementById ("global-nav");

    // add 'open' class to the ul in the navbar if wider than  
    // the breakpoint 
    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
    }
}
window.onresize = function() {
    var screenWidth = window.innerWidth;
    var mobileBreakpoint =600; 
    var globalNavbar = document.getElementById ("global-nav");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
    }
    else {
        globalNavbar.classList.remove("open");
    }
}