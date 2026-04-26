import { Component } from '@angular/core';
import { Media } from '../../models/media.model';

@Component({
  selector: 'app-media-list',
  standalone: true,
  templateUrl: './media-list.html',
  styleUrls: ['./media-list.css'],
})
export class MediaListComponent {
  catalogo: Media[] = [
    {
      id: 1,
      titolo: 'Inception',
      regista: 'Christopher Nolan',
      anno: 2010,
      genere: 'Fantascienza',
      durata: 148,
      visto: true,
      tipo: 'Film',
      trama: 'Un ladro esperto nell\'estrarre segreti dalle menti durante i sogni viene ingaggiato per compiere l\'azione opposta: innestare un\'idea.',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg'
    },
    {
      id: 2,
      titolo: 'Stranger Things',
      regista: 'Duffer Brothers',
      anno: 2016,
      genere: 'Fantascienza / Thriller',
      durata: 50,
      visto: false,
      tipo: 'Serie TV',
      trama: 'La tranquilla cittadina di Hawkins viene sconvolta dalla scomparsa di un ragazzino e dall\'arrivo di una misteriosa bambina con poteri telecinetici.',
      imageUrl: 'https://m.media-amazon.com/images/I/81SG03G+g7L._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 3,
      titolo: 'Il Gladiatore',
      regista: 'Ridley Scott',
      anno: 2000,
      genere: 'Azione / Storico',
      durata: 155,
      visto: true,
      tipo: 'Film',
      trama: 'Il generale romano Massimo Decimo Meridio, tradito dall\'imperatore Commodo, finisce in schiavitù e torna a Roma come gladiatore per vendicarsi.',
      imageUrl: 'https://m.media-amazon.com/images/I/71AtNFpJKWL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 4,
      titolo: 'Breaking Bad',
      regista: 'Vince Gilligan',
      anno: 2008,
      genere: 'Drammatico',
      durata: 47,
      visto: true,
      tipo: 'Serie TV',
      trama: 'Un professore di chimica, a cui viene diagnosticato un cancro incurabile, inizia a produrre metanfetamina per assicurare un futuro economico alla famiglia.',
      imageUrl: 'https://hdmoviecodes.com/cdn/shop/files/Breaking_Bad_600_890_cf_600x.jpeg?v=1722401396'
    },
    {
      id: 5,
      titolo: 'Spider-Man: Un nuovo universo',
      regista: 'Bob Persichetti, Peter Ramsey, Rodney Rothman',
      anno: 2018,
      genere: 'Animazione / Azione',
      durata: 117,
      visto: false,
      tipo: 'Film',
      trama: 'Il giovane Miles Morales viene morso da un ragno radioattivo e deve allearsi con versioni alternative di Spider-Man per salvare il multiverso.',
      imageUrl: 'https://images.justwatch.com/poster/341932677/s718/spider-man-un-nuovo-universo.jpg'
    }
  ];
}
