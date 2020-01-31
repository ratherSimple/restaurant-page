const contact = (function() {
    function display() {
        document.querySelector('#about').style.backgroundColor = "";
        document.querySelector('#contact').style.backgroundColor = "rgb(50%, 0%, 0%)";
        document.querySelector('#menu').style.backgroundColor = "";
        const p = document.querySelector('#para');
        p.textContent = "Phone: 123456789 Email:xyz@pizzeria.com";
    }
    return {display};
})();

export {contact}