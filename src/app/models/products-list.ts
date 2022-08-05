import { IProducts } from "./IProducts";

export class ProductsList{
    private products: IProducts[];

    constructor(){
        this.products = [
            {id: 1, productName: "Samsung Galaxy Z Fold", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: 4500, imageURL: "../../assets/images/1.png", categoryId: 1, isPopular: true, isDiscounted: true, discountPercentage: 50},
            {id: 2, productName: "Samsung Galaxy S22 Ultra", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: 12500, imageURL: "../../assets/images/2.png", categoryId: 1, isPopular: true, isDiscounted: true, discountPercentage: 40},
            {id: 3, productName: "Samsung Galaxy S21 FE 5G", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: 8500, imageURL: "../../assets/images/3.png", categoryId: 1, isPopular: false, isDiscounted: false, discountPercentage: 0},
            {id: 4, productName: "Apple iPhone 13 128GB", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: 25000, imageURL: "../../assets/images/4.png", categoryId: 1, isPopular: true, isDiscounted: true, discountPercentage: 30},
            {id: 5, productName: "Apple iPhone 11 128GB", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: 9500, imageURL: "../../assets/images/5.png", categoryId: 1, isPopular: false, isDiscounted: false, discountPercentage: 0},
            {id: 6, productName: "Huawei Nova 8i 128 GB", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", price: 5614, imageURL: "../../assets/images/7.png", categoryId: 1, isPopular: false, isDiscounted: true, discountPercentage: 40}
        ];
    }

    getProducts(): IProducts[]{
        return this.products;
    }
}