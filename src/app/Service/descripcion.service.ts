
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class descripcionService {

    BDproductos=[
    {id:1, nombre:"Minicomponente LG CM9740", descripcion:"CONECTIVIDAD BLUETOOTH + NFC SMART DJ 2.0 JUKE BOX - ILUMINACIÓN LED 2900 W RMS", existencia:10, url:"assets/imagenes/LGXBOOM.jpg", precio:25000},
    {id:2, nombre:"TV LG 43LK5000PSA", descripcion:"Full HD 1080P DTS Virtual X El sonido en otra dimensión Entretenimiento envolvente para el hogar Sofisticado por dentro y por fuera",
    existencia:10, url:"assets/imagenes/TVLG.jpg", precio:20000},
    {id:3, nombre:"16.5/10kg Lavadora LG", descripcion:"Roller, JetFiltro de pelusa, Filtro de Agua", existencia:5, url:"assets/imagenes/LAVADORA.jpg", precio:18000},
    {id:4, nombre:"LG Cocina RSG314M", descripcion:"Tipo de Gas: Gas (LPG/LNG) - KJ/hConvencional: 7,800 / 8,600 Encendido: Automático (Presione la perilla & Gire) Parrillas: Hierro fundido", existencia:5, url:"assets/imagenes/COCINA.png", precio:19000},
    {id:5, nombre:"Smartphone LG",descripcion: "DISEÑO 153.2 x 71.9 x 7.9 mm 159 g Resistencia al agua IP68 Certificado militar MIL-STD-810G PANTALLA LCD 6, 1 pulgadas PROCESADOR: Snapdragon 821, RAM 4 GB, CAPACIDAD 64 GB + MicroSD hasta 2 TB", 
     existencia: 5, url: "assets/imagenes/CelLGQ9.jpg", precio:10000},
     {id:6, nombre:"Laptop HP EliteBook 830 G5", descripcion: "Procesador Intel® Core™ i5 de 8° generación, Windows 10 Pro 64, 8 GB de SDRAM DDR4-2400 (1 x 8 GB) SSD PCIe® NVMe™ de 256 GB Pantalla táctil delgada con retroiluminación WLED FHD IPS eDP BrightView y vidrio Corning® Gorilla® 5, de 13,3 en diagonal,"
     ,existencia: 4, url: "assets/imagenes/pc.png", precio:22000},
];

}