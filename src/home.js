const home = (function() {
    function display() {
        document.querySelector('#about').style.backgroundColor = "rgb(50%, 0%, 0%)";
        document.querySelector('#contact').style.backgroundColor = "";
        document.querySelector('#menu').style.backgroundColor = "";
        const p = document.querySelector('#para');
        p.textContent = "Best pizzas in the whole world. Simply pizzarific!";
    }
    return {display};
})();

export {home}