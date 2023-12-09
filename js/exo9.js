    /*
    Un peu d'épices…
    ================
    Nous allons faire du "currying", c'est à dire préparer une fonction qui va nous renvoyer une nouvelle fonction préparée.

    Objectifs
    ---------
    - Faire une fonction : sayHelloToUser
    - elle prend en paramètre un objet user
    - elle retourne une fonction
    - la fonction retournée doit prendre un paramètre `lang`

    WHAAAAAT ?!

    Par exemple :
    const sayHelloToJohn = sayHelloToUser('john');
    sayHelloToJohn('es'); // => renvoie 'Ola John Doe'
    Ou bien :
    const sayHelloToToto = sayHelloToUser('toto');
    sayHelloToToto('fr'); // => renvoie 'Bonjour Toto Dupont'

    On pourra utiliser un switch dans la fonction retournée pour déterminer le message en fonction de la langue

    Notions
    -------
    - JS : portée de variable / closure / currying
    */

    const users = [
        {
        firstName: 'John',
        lastName: 'Doe',
        login: 'jdoe',
        },
        {
        firstName: 'Toto',
        lastName: 'Dupont',
        login: 'toto',
        },
    ];
    
    function sayHelloToUser(user) {
    
    }
    
    
    
    
    
    
    
    
    
    /*
    * Tests
    
    */
    const result = document.getElementById('test');
    const helloJohnFr = sayHelloToUser(users[0])('fr');
    const helloTotoEs = sayHelloToUser(users[1])('es');
    if (
        helloJohnFr === 'Bonjour John Doe'
        && helloTotoEs === 'Ola Toto Dupont'
    ) {
        result.className = 'success';
        result.textContent = 'Yep !';
    }