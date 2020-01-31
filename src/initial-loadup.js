const navbar = (function() {
    function display() {
        const div = document.querySelector('#content');
        const ul = document.createElement('ul');
        const listAbout = document.createElement('li');
        listAbout.textContent = "About";
        listAbout.setAttribute('id', 'about');
        ul.appendChild(listAbout);
        const listMenu = document.createElement('li');
        listMenu.textContent = "Menu";
        listMenu.setAttribute('id', 'menu');
        ul.appendChild(listMenu);
        const listContact = document.createElement('li');
        listContact.textContent = "Contact";
        listContact.setAttribute('id', 'contact');
        ul.appendChild(listContact);
        listMenu.style.cssText = "float: left; display: block; color: white;text-align: center;padding: 14px 16px;text-decoration: none;";
        listContact.style.cssText = "float: left;display: block; color: white;text-align: center;padding: 14px 16px;text-decoration: none;";
        listAbout.style.cssText = "float: left;display: block; color: white;text-align: center;padding: 14px 16px;text-decoration: none;";
        ul.style.cssText = "list-style-type: none margin: 0;padding: 0; overflow: hidden; background-color: #333;";
        div.appendChild(ul);
        document.body.style.cssText = "background-image: url('images/pizza.jpeg');";

        
        const textDiv = document.createElement('div');
        textDiv.setAttribute('id', 'text');
        const p = document.createElement('p') ;
        p.setAttribute('id', 'para');
        p.style.cssText = "margin: 0;position: absolute;top: 20%;left: 15%; transform: translate(-50%, -50%); font-size: 20px; font-weight: 900";
        textDiv.style.cssText   = "position: absolute; height:90%; top:10%; width:99%";
        textDiv.appendChild(p);
        document.body.appendChild(textDiv);

    }
    return {display};
})();

export {navbar}

    