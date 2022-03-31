import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning-angular-project';
  faStar = faStar;

  prevScrollBarPosition: number;
  active: boolean=false;
  active1: boolean=false;
  url2:string="/profile";
  url1:string="/home";
  
  routeurl1!:string
  routeurl2!:string

  active3:boolean=false;
  logindash:string="/dashboard/login"
  routeurl3!:string

  constructor(public router: Router) {

  this.router.events.subscribe(events => {
    if (events instanceof NavigationEnd) {
      this.routeurl1 = this.router.url.slice(0, 5);
  this.routeurl2 = this.router.url.slice(0,8);
    
   console.log(this.routeurl1);

    if(this.url1==this.routeurl1){
        this.active=true
        this.active1=false
    

      }
   

      else if(this.url2==this.routeurl2){
        this.active1=true
        this.active=false
     
      }
console.log(this.active);
     
    // console.log(this.active,this.active1,this.active3,this.routeurl3);

    }
    
  });
}
  

  ngOnInit(): void {
    const rightSideContainer = document.getElementById("right-side-container");
    const getAmountScrolled = this.getAmountScrolled();

    window.addEventListener("scroll", () => {
      this.scrollSideBar(rightSideContainer, getAmountScrolled);
    })
  }

  // Makes sure sidebar scrolls when user scrolls but isn't hovering over the sidebar. (Only when content doesn't fit in window.)
  scrollSideBar(rightSideContainer: HTMLElement, getAmountScrolled: Function): void {
    const scrollBarPosition = window.scrollY;
    const amountScrolled = getAmountScrolled();

    if (scrollBarPosition >= 0) {
      if (scrollBarPosition > this.prevScrollBarPosition) { // user scrolled down
        rightSideContainer.scrollBy(0, amountScrolled);
      }
      else if (scrollBarPosition < this.prevScrollBarPosition) { // user scrolled up
        rightSideContainer.scrollBy(0, amountScrolled);
      }
    }
    this.prevScrollBarPosition = scrollBarPosition;
  }

  // Gets amount scrolled since last frame. (Listener is called multiple times per scroll "tick".)
  // Function is based off of: https://stackoverflow.com/questions/22593286/detect-measure-scroll-speed.
  getAmountScrolled(): Function {
    var lastPos, newPos, timer, delta,
      delay = 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function getAmountScrolled() {
      newPos = window.scrollY;
      if (lastPos != null) {
        delta = newPos - lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
  };

}


