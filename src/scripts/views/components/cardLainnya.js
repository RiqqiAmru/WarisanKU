import { endpoints } from '../../globals/config';

class CardLainnya extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render(data);
  }

  render(data) {
    this.innerHTML = `
<a href="#/detail/${data.id}">
  <div class="flex h-80 w-full flex-col justify-end rounded-sm border border-white  bg-cover shadow-lg"
  style='background-image: url(/images/img-budaya/${data.item.gambar})'>
    <div class="bg-gradient-to-t from-black to-transparent p-5">
      <h3 class="text-xl font-bold text-violet-300">${data.item.nama}</h3>
      <p class="text-white">${data.provinsi}</p>
    </div>
  </div>
</a>
    `;
  }
}

customElements.define('card-lainnya', CardLainnya);
