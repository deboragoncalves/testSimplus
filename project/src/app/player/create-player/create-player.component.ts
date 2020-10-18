import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service'
import { Player } from 'src/app/model/model.player'

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})

export class CreatePlayerComponent implements OnInit {

  // Inicializar classe Player

  player : Player = new Player();

  constructor(private playerService: PlayerService, private router:Router) { }

  ngOnInit(): void {
  }

  submit() {

    // Post

    this.playerService.createPlayer(this.player).subscribe(data => {
      
      console.log(data)

      // Ir para lista

      this.router.navigateByUrl('/players');
    
    }, error => console.log(error));

    // Limpar formulário

    this.player = new Player();
  }

}
