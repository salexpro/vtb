import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import {Foundation} from './lib/foundation-explicit-pieces';

let itemsLeft = false, filtersLeft = false;
const dropLeft = () => {
    if (!Foundation.MediaQuery.atLeast('xlarge') && !itemsLeft) {
        itemsLeft = new Foundation.Dropdown($('#itemsLeft'), {closeOnClick: true});
        filtersLeft = new Foundation.Dropdown($('#filtersLeft'), {closeOnClick: true});
    } else if(itemsLeft){
        itemsLeft.foundation('_destroy');
        filtersLeft.foundation('_destroy');
    }
}

$(window).resize(() => {dropLeft()})
dropLeft();

svg4everybody();