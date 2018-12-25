import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id$: number;
  user$: User;

  constructor(private route: ActivatedRoute, private data: DataService) { 
    this.route.params.subscribe( params => this.id$ = params.id);
  }

  ngOnInit() {
    this.data.getUser(this.id$).subscribe(
      data => this.user$ = data
    );
  }

}
