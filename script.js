class MenuItem {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `${this.name} is a ${this.type}.`;
  }
}

class Menus {
  constructor(type) {
    this.type = type;
    this.menuItem = [];
  }

  addMenuItem(menuItem) {
    if (menuItem instanceof menuItem) {
      this.menuItem.push(menuItem);
    } else {
      throw new Error('You can only add an instance of Menu Item. Argument is not a Menu Item');
    }
  }

  describe() {
    return `${this.type} menu has ${this.addMenuItem.length} items`;
  }
}

class Menu {
  constructor() {
    this.menus = [];
    this.selectedMenu = null;
  }

  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createMenu();
          break;
        case "2":
          this.viewMenu();
          break;
        case "3":
          this.deleteMenu();
          break;
        case "4":
          this.displayMenus();
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }

    alert("Goodbye!");
  }

  showMainMenuOptions() {
    return prompt(`
      0) exit
      1) create new menu
      2) view menu
      3) delete menu
      4) display menus
    `);
  }

  showMenusMenuOption(menuInfo) {
    return prompt(`
    0) back
    1) create menu item
    2) delete menu item
    `)
  }

  displayMenus() {
    let menuString = '';
    for (let i = 0; i < this.menus; i++) {
      menuString += i + ') ' + this.menus[i].type + '\n';
    }
    alert(menuString);
  }

  creatMenu() {
    let menu = prompt('Enter name for new menu:');
    this.menus.push(new Menu(menu));
  }

  viewMenu() {
    let index = prompt('Enter the index of the menu you wish to view');
    if (index > -1 && index < this.menus.length) {
      this.selectedMenu = this.menus[index];
      let description = 'Menu Type: ' + this.selectedMenu + '\n';     // check this before submitting

      for (let i = 0; i < this.selectedMenu.menuItem.length; i++) {
        description += i + ') ' + thisl.selectedMenu.menuItem[i].name + ' - ' + this.selectedMenu.type[i]
      }

      let selection = this.showMainMenuOptions(description);
      switch (selection) {
        case '1': 
          this.createMenuItem();
        break;
        case '2':
          this.deleteMenuItem();
      }
    }
  }

  deleteTeam() {
    let index = prompt('Enter the index of the menu you want to delete:');
    if (index > -1 && index < this.menus.length) {
      this.menus.splice(index, 1);
    }
  }

  createMenuItem() {
    let name = prompt('Enter name for new menu item:');
    let type = prompt('Enter type for menu item:');
    this.selectedMenu.menuItem.push(new MenuItem(name, type))
  }

  deleteMenuItem() {
    let index = prompt('Enter the index of the menu item you wish to delete:');
    if (index > -1 && index < this.selectedMenu.menuItem.length) {
      this.selectedMenu.menuItem.splice(index, 1);
    }
  }
}

let menu = new Menu()
menu.start