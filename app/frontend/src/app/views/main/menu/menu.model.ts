export class MenuItemModel {
    constructor(
        public name: string,
        public path: string,
        public children: MenuItemModel[] = []) {}
}
