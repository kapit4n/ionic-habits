import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  habits = [
    {
      name: "Write one line of code", 
      description: "This is the description",
      img: "https://hourofcode.com/us/en/images/hour-of-code-logo.png"
    },
    { 
      name: "Read page of book",
      description: "This is the description",
      img: "https://s-i.huffpost.com/gen/1390448/images/n-AMERICANS-READ-BOOK-628x314.jpg"
    },
    {
      name: "Be nice",
      description: "This is the description",
      img: "https://images.freeimages.com/images/premium/previews/2890/28904310-happy-teenage-angel-girl.jpg"
    },
    { 
      name: "Think an algorithm",
      description: "This is the description",
      img: "https://i.stack.imgur.com/WcBRI.png"
    },
    {
      name: "Walk 30 minutes",
      description: "This is the description",
      img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/rich_media_quiz/topic/rmq_benefits_of_walking/405rmq_thinkstock_woman_walking_sneakers.jpg"
    }
    ];

}
