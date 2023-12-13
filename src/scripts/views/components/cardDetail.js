import '../../../styles/tailwind.css';
import { endpoints } from '../../globals/config';

class CardDetail extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render(data);
  }

  render(data) {
    this.innerHTML = `
    <style>

    </style>
    <div class="bg-transparent rounded-md shadow-lg border-white border-2">
    <img
      src="${endpoints.BUDAYA_IMAGE(data.gambar)}"
      alt="${data.gambar}"
      class="h-60 min-h-0 max-h-70 mx-auto rounded-t-lg"
    />
    <div class="p-5">
      <h3 class="text-xl font-bold text-violet-300">${data.nama}</h3>
      <p class="text-white text-sm">
        ${(data.description === undefined) ? '' : data.description}
      </p>
    </div>
  </div>
    `;
  }
}

customElements.define('card-detail', CardDetail);
