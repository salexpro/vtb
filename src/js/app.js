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

$('.item_details_button, .supplier_details_button, .auction_offers_button').click(function() {
    $(this).parent().removeClass('folded')
})

$('.reveal--withdrawal .reveal_form').submit(e => {
    e.preventDefault();
    $('#wSuccess').foundation('open')
})

$('.reveal--bet .reveal_form').submit(e => {
    e.preventDefault();
    $('#betSuccess').foundation('open')
})

const levels = $('.catalog_left .catalog_left_level').length;
$('.catalog_left_container').css('width', `${levels * 100}%`)

$('.catalog_left [data-level]').click(e => {
    const level = $(e.target).data('level');
    $('.catalog_left_container').css('transform', `translateX(-${(level-1) / levels * 100}%)`)
})

svg4everybody();