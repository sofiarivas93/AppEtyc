/**
 * Created by carlitos on 08/08/18
 */

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetallePage} from "../detalle/detalle";

@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  // Definimos una variable que representa el título de nuestro nuevo Page
  titlePage: string = 'Listado';
  denuncias: Array<{nombre: string, descripcion: string}> = [];

  constructor(public navCtrl: NavController) {
    this.denuncias = [
      {nombre: "Laura Rojas",  descripcion: "Criadero de Mosquito en el patio de la casa"},
      {nombre: "Daniel Sanchez",  descripcion: "Botellas con larvas"},
      {nombre: "Delsy Lopez",  descripcion: "Llanta de automoviles con agua estancada"},
      {nombre: "Magali Amarilla",  descripcion: "Piscina abandonada"},
      {nombre: "Noelia Caballero",  descripcion: "Botellas y latas abandonadas"}
    ]

  }

  verDetalle(denuncia) {
      this.navCtrl.push(DetallePage, {denuncia: denuncia});
  }

}
