// Core
import Util from 'bootstrap/js/src/util'

// Components
import Alert from 'bootstrap/js/src/alert'
import Button from 'bootstrap/js/src/button'
import Carousel from 'bootstrap/js/src/carousel'
import Collapse from 'bootstrap/js/src/collapse'
import Dropdown from 'bootstrap/js/src/dropdown'
import Modal from 'bootstrap/js/src/modal'
import Popover from 'bootstrap/js/src/popover'
import Scrollspy from 'bootstrap/js/src/scrollspy'
import Tab from 'bootstrap/js/src/tab'
import Toast from 'bootstrap/js/src/toast'
import Tooltip from 'bootstrap/js/src/tooltip'


$(document).ready(function(){
  $(".dropdown-menu li").click(function(){
    var selText = $(this).text();
    $(this).parents('.drop-down-box').find('.dropdown-toggle').html(selText+' <i class="fas fa-angle-down"></i>');
  });

});

