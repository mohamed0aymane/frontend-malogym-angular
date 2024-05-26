import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export class PackageComponent implements OnInit {
  showDetailsFlag: boolean = false;
  additionalDetails: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(type: string) {
    // Logic to display details of the selected subscription type
    console.log(`Clicked on ${type} subscription`);
  }

  showMore(type: string) {
    // Logic to show additional details when "Read more" button is clicked
    // This is just an example, you can replace with your own logic
    if (type === 'gold') {
      this.additionalDetails = "Pour les membres du paquet OR vous avez l'acces au sauna,piscine,musculation,kick-boxing,dance,yoga,aerobic .";
    
    } else if (type === 'silver') {
      this.additionalDetails = "Pour les membres du paquet ARGENT vous avez l'acces au piscine,musculation,kick-boxing .";
    
    } else if (type === 'normal') {
      this.additionalDetails = "Pour les membres du paquet NORMAL vous avez l'acces au musculation .";
    }
    this.showDetailsFlag = true;
  }
}
