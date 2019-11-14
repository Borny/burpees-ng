import {Component, Input} from '@angular/core';

@Component({
    selector: 'molecule-cards',
    templateUrl: './molecule-cards.component.html',
    styleUrls: ['./molecule-cards.component.scss'],
})
export class MoleculeCardsComponent {
    @Input() card: any;
}
