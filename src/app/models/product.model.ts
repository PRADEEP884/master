export class ProductClass {
  p_name: string;
  p_img: string;
p_price: number;
p_order: number;
  // private salary: number;

  constructor(p_name: string, p_img: string, p_price:number, p_order:number) {
    this.p_name = p_name;
     this.p_img =  p_img;
    this.p_price = p_price;
    this.p_order = p_order;
  }
  
  getOne(): string {
    return `${this.p_name} ${this.p_img} `;
  }

   getTwo(): number {
  return  this.p_price ;
  this.p_order;
   }
  }