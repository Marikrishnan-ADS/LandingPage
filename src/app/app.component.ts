import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing';
  isMenuOpen = false;
  activePage: string = '';

  constructor(private route: Router, private scroller: ViewportScroller) {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.startsWith('/#Home')) {
          this.activePage = 'Home';
        } else if (event.urlAfterRedirects.startsWith('/#Features')) {
          this.activePage = 'Features';
        } else if (event.urlAfterRedirects.startsWith('/#About')) {
          this.activePage = 'About';
        } 
        else if (event.urlAfterRedirects.startsWith('/#Pricing')) {
          this.activePage = 'Pricing';
        } else if (event.urlAfterRedirects.startsWith('/#CONTACT')) {
          this.activePage = 'CONTACT';
        } else {
          this.activePage = '';
        }
      }
    });
  }



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  pageNavigate(page: any) {
    if (page == 'SERVICE') {
      this.route.navigateByUrl('/our-services')
    }
    else if (page == 'CONTACT') {
      this.route.navigateByUrl('/contact')
    }
    else if (page == 'BLOGS') {
      this.route.navigateByUrl('/blogs')
    }
    else if (page == 'TESTIMONIALS') {
      this.route.navigate(['/'], { fragment: 'testimonial-section' });
    }
  }

  gotoStart() {
    this.route.navigateByUrl('/')
  }



  testimonials = [
    {
      name: 'Kathryn Murphy',
      role: 'Finance Manager',
      image: 'https://i.pravatar.cc/150?img=1',
      quote: 'ThroqTest has completely transformed how we manage our finances. The user-friendly platform provides invaluable insights, enables complex financial modeling, and improves our efficiency. Highly recommended!'
    },
    {
      name: 'Bessie Cooper',
      role: 'Chief Executive Officer',
      image: 'https://i.pravatar.cc/150?img=2',
      quote: 'ThroqTest makes tracking expenses and optimizing cash flow effortless and accurate. Its intuitive dashboard has become an essential tool for our growing business operations.'
    },
    {
      name: 'Eleanor Pena',
      role: 'Finance Manager',
      image: 'https://i.pravatar.cc/150?img=3',
      quote: 'Switching to ThroqTest was a complete game-changer for us. The analytics and real-time dashboard improved our productivity, lowered overhead, and boosted overall profitability.'
    },
    {
      name: 'Jacob Jones',
      role: 'Accountant',
      image: 'https://i.pravatar.cc/150?img=4',
      quote: 'The customer support team at ThroqTest is truly exceptional. They’re always quick to assist, provide detailed solutions, and ensure a seamless experience with our business.'
    },
    {
      name: 'Dianne Russell',
      role: 'Accountant',
      image: 'https://i.pravatar.cc/150?img=5',
      quote: 'ThroqTest simplifies financial management with secure reporting, audit trails, and real-time analytics. It has saved us significant time and effort every week.'
    },
    {
      name: 'Savannah Nguyen',
      role: 'Accountant',
      image: 'https://i.pravatar.cc/150?img=6',
      quote: 'The analytics provided by ThroqTest are incredibly helpful and insightful. We can view a clear view of financial health, risk areas, and other decision data – driven decisions.'
    },
    {
      name: 'Kathryn Murphy',
      role: 'Finance Manager',
      image: 'https://i.pravatar.cc/150?img=7',
      quote: 'ThroqTest is worth every dollar. It includes so many features that improve financial accuracy, decision-making, and overall business growth – beyond expectations!'
    },
    {
      name: 'Kristin Watson',
      role: 'Accountant',
      image: 'https://i.pravatar.cc/150?img=8',
      quote: 'The automation tools in ThroqTest have saved us countless hours of manual work, boosted our efficiency, and enhanced accuracy across our entire team.'
    },
    {
      name: 'Jenny Wilson',
      role: 'Finance Manager',
      image: 'https://i.pravatar.cc/150?img=9',
      quote: 'The platform is intuitive, well-designed, and seamlessly integrated with our workflows. Month end is now smooth, efficient, and hassle-free.'
    }
  ];


  
}
