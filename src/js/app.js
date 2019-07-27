import $ from 'jquery';
import svg4everybody from 'svg4everybody';
import {Foundation} from './lib/foundation-explicit-pieces';

const $itemsDrop = $('#itemsLeft'),
      $filtersDrop = $('#filtersLeft');
let itemsLeft = false, 
    filtersLeft = false;
const dropLeft = () => {
    if (!Foundation.MediaQuery.atLeast('xlarge') && !itemsLeft && !filtersLeft) {
        itemsLeft = new Foundation.Dropdown($itemsDrop, {closeOnClick: true});
        filtersLeft = new Foundation.Dropdown($filtersDrop, {closeOnClick: true});
    } else if(itemsLeft && filtersLeft){
        itemsLeft.foundation('_destroy');
        filtersLeft.foundation('_destroy');
    }
}

if($itemsDrop.length){
    $(window).resize(() => {dropLeft()})
    dropLeft();
}

$('.item_details_button').click(function() {
    $(this).parent().removeClass('folded')
})

svg4everybody();