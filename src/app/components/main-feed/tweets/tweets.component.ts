import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TweetsService } from 'src/app/services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
})
export class TweetsComponent implements OnInit {
  tweets: Tweet[];
Arr:Tweet[];
  constructor(private tweetService:TweetsService) {
  //   this.tweets = [
  //     {
  //       id:1,
  // user_id: 1,
  // description: 'helloo this is the first tweet',
  // tag: '#tweet',
  // likes: 20,
  // retweets:30,
  // img:'msg.jpg',
  //     },
     
  //   ];
  }

  ngOnInit(): void {
    this.getAlltweets();
  }
    getAlltweets() {
    this.tweetService.getAlltweets().subscribe(
      (res) => {
        this.tweets = res;
        console.log(this.tweets[0].description);

      },
      (err) => {
        console.log('cant load data');
        console.log(err);
      }
    );
  }
}



















  