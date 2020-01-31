const menu = (function() {
    function display() {
        document.querySelector('#about').style.backgroundColor = "";
        document.querySelector('#contact').style.backgroundColor = "";
        document.querySelector('#menu').style.backgroundColor = "rgb(50%, 0%, 0%)";
        const p = document.querySelector('#para');
        p.textContent = "Margherita";
    }
    return {display};
})();

export {menu}