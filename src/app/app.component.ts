import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  props = {
    headerTitle: 'New Collector Experience',
    inputFieldTitles: [],
    addInputFields: this.addInputFields,
    boldDescription: 'Interested in collecting art? This experience will connect you with an art advisor to navigate the Frieze NY Private View on May 1st as well as exclusive access & events throughout Frieze week.',
    normalDescription: 'Connect with an art advisor over dinner before touring Frieze NY during an exclusive Private View. Enjoy guided access to gallery tours, access to Frieze Music at Rockefeller Center, and much more. To learn more, submit your email and an Experiences concierge will be in touch to curate your experience.',
    bannerMessage: 'INQUIRE FOR INFO'
  }
  addInputFields(inputNames) {
    if (inputNames.length > 0) {
      inputNames.forEach(name => {
        if (typeof name === 'string') {
          this.props.inputFieldTitles.push(name);
        } else {
          this.props.inputFieldTitles.push('');
        }
      });
    }
    return this.props.inputFieldTitles;
  }
};
