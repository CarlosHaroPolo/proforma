import { product } from './../../interface/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProformaService } from '../../servers/proforma.service';
import { marca } from '../../interface/marca.interface';
import { medida } from '../../interface/medida.interface';
import { componenteforSearch } from '../../interface/componente.interface';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-proforma-page',
  standalone: false,
  templateUrl: './proforma-page.component.html',
   styleUrl:'./proforma-page.component.css'

})
export class ProformaPageComponent implements OnInit {

  constructor(private serve: ProformaService) {

  }
  ngOnInit(): void {
    // te encargas de inicializar los get
    this.getTodo()
this.serve.ListProduct=this.ListProductFinal
  }

  public products: product[] = []
  public marcas: marca[] = []
  public medidas: medida[] = []
  public componente !: componenteforSearch;
  public ListProductFinal:product[]=[];

  getProducts(): product[] {
    this.serve.getProducts().subscribe(
      products => {
        this.products = products
      }
    )
    return this.products
  }

  getMarcas(): marca[] {
    this.serve.getMarcas().subscribe(
      marcas => {
        this.marcas = marcas
      }
    )
    return this.marcas
  }
  getMedida(): medida[] {
    this.serve.getMedida().subscribe(
      medidas => {
        this.medidas = medidas
      }
    )
    return this.medidas
  }

  getTodo(): void {
    this.componente = {
      medidas: this.getMedida(),
      marcas: this.getMarcas(),
      productos: this.getProducts()
    }
  }

  // aca lo estas agregando
  recibirProductSelect(product: product) {
    // agregar el producto
    this.serve.pushListProduct(product)
  }

  public downloadPDF() {
    const data = document.getElementById('htmlData'); // Asegúrate de tener un elemento con el ID 'htmlData'

    html2canvas(data!).then(canvas => {
      // Few necessary setting options
      let imgWidth = 208;
      let imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF

      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('new-file.pdf'); // Generated PDF
    });
  }
}
