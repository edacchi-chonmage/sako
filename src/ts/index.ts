import $ from 'jquery';

const imageWidth = 280;
const imageMargin = 20;

class Slider {
  private $wrapper = $('#jsi-slider');
  private $items = this.$wrapper.find('> li');

  constructor() {
    this.resizeWrapper();
    this.cloneItems();
  }

  private resizeWrapper(): void {
    const wrapperWidth = (this.$items.length * 3) * imageWidth;

    this.$wrapper.width(wrapperWidth);
  }

  private cloneItems(): void {

  }
}

$(() => new Slider());
