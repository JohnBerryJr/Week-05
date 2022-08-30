class Appetizers {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

}

class Entree {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

}

class Menu {
    constructor() {

    }

}

start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1' :
                this.createMenu();
                break;
            case '2' :
                this.viewMenu();
                break;
            case '3' :
                this.deleteMenu();
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions();
    } 
}